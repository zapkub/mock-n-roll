import {
  Project,
  SyntaxKind,
  SourceFile,
  ClassDeclarationStructure,
  ClassDeclaration,
  MethodSignature,
  FunctionTypeNode,
  MethodDeclaration,
  InterfaceDeclaration
} from 'ts-morph'
import * as path from 'path'
import { ImportTypeIfNeeded, getIdentifierListOfMethodArgs } from './helpers'
import { isMethodSignature, isFunctionTypeNode, isMethodDeclaration } from 'typescript'
import { Interface } from 'readline'
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
        isRestParameter: true,
        type: 'any'
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
  signature: MethodSignature | FunctionTypeNode | MethodDeclaration
) {
  const mocks = mockClass
    .getPropertyOrThrow('mocks')
    .getInitializerIfKindOrThrow(SyntaxKind.ObjectLiteralExpression)

  let typeParam = ''
  if (signature.getTypeParameters().length > 0) {
    typeParam = `<${signature
      .getTypeParameters()
      .map(p => p.getName())
      .join(',')}>`
  }

  const mockFunc = mocks.addPropertyAssignment({
    name: methodName,
    initializer: w => {
      w.write(`${typeParam}() => { return { } }`)
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
          `${typeParam}() => { this.called.push([["${methodName}", ${paramIdentifiers}], returnArg]) }`
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
  m: MethodSignature | FunctionTypeNode | MethodDeclaration
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

  if (isMethodSignature(m.compilerNode) || isMethodDeclaration(m.compilerNode)) {
    name = (<MethodSignature>m).getName()
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
  } else if (isFunctionTypeNode(m.compilerNode)) {
    name = (<FunctionTypeNode>m)
      .getParentIfKindOrThrow(SyntaxKind.PropertySignature)
      .getFirstChildByKindOrThrow(SyntaxKind.Identifier)
      .getText()

    let typeParam = ''
    if (m.getTypeParameters().length > 0) {
      typeParam = `<${m
        .getTypeParameters()
        .map(p => p.getName())
        .join(',')}>`
    }
    const funcProp = mockClass.addProperty({
      name,
      initializer: w => {
        w.write(`${typeParam}() =>`)
        w.block(() => {
          w.writeLine(`return this.on("${name}", ${methodArgs})`)
        })
      }
    })
    const func = funcProp.getFirstChildByKindOrThrow(SyntaxKind.ArrowFunction)
    func.addParameters(m.getParameters().map(p => p.getStructure()))
  } else {
    throw new Error('Node does not support')
  }

  console.log(`Mock ${name}`)
  addMocksMethod(mockClass, name, m)
}

function generateMock(
  file: SourceFile,
  mockFolder: string,
  project: Project,
  i: InterfaceDeclaration | ClassDeclaration
) {
  const filePath = path.join(mockFolder, `${i.getName()}.ts`)
  rimraf.sync(filePath)
  const mockFile = project.createSourceFile(filePath)

  const mockClass = mockFile.addClass({
    name: '__mock__' + i.getName(),
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
      if (p.getTypeNode()) {
        ImportTypeIfNeeded(file, mockFile, p.getTypeNodeOrThrow())
      }
    }
  })
  mockFile.formatText()
}

export function generateMockClass(
  srcFolder: string,
  mockFolder: string,
  targetName: string
) {
  const project = new Project({})
  mkdirp.sync(mockFolder)

  // add source files
  project.addExistingSourceFiles(path.join(srcFolder))
  project.getSourceFiles().forEach(file => {
    // filter out interface
    // that does not have any method
    // and not a target
    function matchName(i: InterfaceDeclaration | ClassDeclaration) {
      return i.getName() === targetName && i.getMethods().length > 0
    }

    file
      .getClasses()
      .filter(matchName)
      .forEach(i => generateMock(file, mockFolder, project, i))
    file
      .getInterfaces()
      .filter(matchName)
      .forEach(i => generateMock(file, mockFolder, project, i))
  })
  project.save()
}
