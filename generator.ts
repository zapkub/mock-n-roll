import {
  Project,
  SyntaxKind,
  SourceFile,
  ClassDeclarationStructure,
  ClassDeclaration,
  MethodSignature,
  FunctionTypeNode
} from 'ts-morph'
import * as path from 'path'
import { ImportTypeIfNeeded, getIdentifierListOfMethodArgs } from './helpers'
import { isMethodSignature, isFunctionTypeNode } from 'typescript'
const rimraf = require('rimraf')
const mkdirp = require('mkdirp')

export function addMocks(mockClass: ClassDeclaration) {
  const mockFile = mockClass.getParentIfKindOrThrow(SyntaxKind.SourceFile)
  mockFile.addImportDeclaration({
    namedImports: ['isEqual'],
    moduleSpecifier: 'lodash'
  })
  mockClass.addProperty({
    name: 'called',
    type: 'any[]',
    initializer: w => {
      w.write('[]')
    }
  })
  mockClass.addMethod({
    name: 'on',
    parameters: [
      {
        name: 'name',
        type: 'string'
      },
      {
        name: 'args',
        isRestParameter: true
      }
    ],
    bodyText: w => {
      w.writeLine('const result = this.called.find(c => {')
      w.writeLine('const calls = [name, ...args]')
      w.writeLine('return isEqual(c[0], calls)')
      w.writeLine('})')
      w.writeLine('if (!result) {')
      w.writeLine(
        ' throw new Error(`call ${name} with ${JSON.stringify(args)} does not exists`)'
      )
      w.writeLine('}')
      w.writeLine('return result[1]')
    }
  })
  return mockClass
    .addProperty({
      name: 'mocks',
      initializer: w => {
        w.write('{}')
      }
    })
    .getInitializerIfKindOrThrow(SyntaxKind.ObjectLiteralExpression)
}
export function addMocksMethod(
  mockClass: ClassDeclaration,
  methodName: string,
  signature: MethodSignature | FunctionTypeNode
) {
  const mocks = mockClass
    .getPropertyOrThrow('mocks')
    .getInitializerIfKindOrThrow(SyntaxKind.ObjectLiteralExpression)

  const mockFunc = mocks.addPropertyAssignment({
    name: methodName,
    initializer: w => {
      w.write('() => { return { } }')
    }
  })
  const func = mockFunc.getFirstChildByKindOrThrow(SyntaxKind.ArrowFunction)
  const params = func.addParameters(
    signature.getParameters().map(p => p.getStructure())
  )
  const paramIdentifiers = params
    .map(p => {
      if (p.getDotDotDotToken()) {
        return `...${p.getName()}`
      }
      return p.getName()
    })
    .join(',')
  const block = func.getFirstChildByKindOrThrow(SyntaxKind.Block)
  const returnObject = block
    .getFirstChildByKindOrThrow(SyntaxKind.SyntaxList)
    .getFirstChildByKindOrThrow(SyntaxKind.ReturnStatement)
    .getFirstChildByKindOrThrow(SyntaxKind.ObjectLiteralExpression)
  const toReturnFunc = returnObject
    .addPropertyAssignment({
      name: 'toReturn',
      initializer: w => {
        w.write(
          ` () => { this.called.push([["${methodName}", ${paramIdentifiers}], returnArg]) }`
        )
      }
    })
    .getFirstChildByKindOrThrow(SyntaxKind.ArrowFunction)
  toReturnFunc.addParameter({
    name: 'returnArg',
    type: signature.getReturnTypeNodeOrThrow().getFullText()
  })
}

export function addMethodsToMockClass(
  file: SourceFile,
  mockFile: SourceFile,
  mockClass: ClassDeclaration,
  m: MethodSignature | FunctionTypeNode
) {
  // Import every type of parameters if needed
  m.getParameters().forEach(param => {
    const f9 = param.getTypeNodeOrThrow().compilerNode
    if (f9.kind === SyntaxKind.TypeReference) {
      f9.getChildren().forEach(c => {
        if (c.kind === SyntaxKind.Identifier) {
        }
      })
    }
    ImportTypeIfNeeded(file, mockFile, param.getTypeNodeOrThrow())
  })

  // Also import return type if needed
  ImportTypeIfNeeded(file, mockFile, m.getReturnTypeNodeOrThrow())
  const methodArgs = getIdentifierListOfMethodArgs(m)
  const methodReturnType = m.getReturnTypeNodeOrThrow().getFullText()
  let name: string

  if (isMethodSignature(m.compilerNode)) {
    name = (<MethodSignature>m).getName()
  } else if (isFunctionTypeNode(m.compilerNode)) {
    name = (<FunctionTypeNode>m)
      .getParentIfKindOrThrow(SyntaxKind.PropertySignature)
      .getFirstChildByKindOrThrow(SyntaxKind.Identifier)
      .getText()
  } else {
    throw new Error('Node does not support')
  }

  mockClass.addMethod({
    name: name,
    parameters: m.getParameters().map(p => p.getStructure()),
    returnType: w => {
      w.write(methodReturnType)
    },
    bodyText: w => {
      w.writeLine(`return this.on("${name}", ${methodArgs})`)
    }
  })
  addMocksMethod(mockClass, name, m)
}

export function generateMockClass(
  srcFolder: string,
  mockFolder: string,
  reg: RegExp
) {
  const project = new Project({})
  mkdirp.sync(srcFolder)

  // add source files
  project.addExistingSourceFiles(path.join(srcFolder, '*.ts'))
  project.getSourceFiles().forEach(file => {
    // filter out interface
    // that does not have any method
    // and not a target
    file
      .getInterfaces()
      .filter(i => {
        return i.getName().match(reg)
      })
      .filter(i => {
        return (
          i.getMethods().length > 0 ||
          i
            .getProperties()
            .filter(p => p.getLastChildByKind(SyntaxKind.FunctionType)).length >
            0
        )
      })
      .forEach(i => {
        const filePath = path.join(mockFolder, `${i.getName()}.ts`)
        rimraf.sync(filePath)
        const mockFile = project.createSourceFile(filePath)

        const mockClass = mockFile.addClass({
          name: "__mock__" + i.getName(),
          isExported: true
        })
        addMocks(mockClass)

        i.getMethods().forEach(m => {
          addMethodsToMockClass(file, mockFile, mockClass, m)
        })
        i.getProperties().forEach(p => {
          if (p.getFirstChildByKind(SyntaxKind.FunctionType)) {
            addMethodsToMockClass(
              file,
              mockFile,
              mockClass,
              p.getFirstChildByKindOrThrow(SyntaxKind.FunctionType)
            )
          } else {
            mockClass.addProperty(p.getStructure())
          }
        })
        mockFile.formatText()
      })
  })
  project.getPreEmitDiagnostics()
  project.save()
}
