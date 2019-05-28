import {
  SourceFile,
  TypeNode,
  SyntaxKind,
  MethodSignature,
  FunctionTypeNode,
  MethodDeclaration
} from 'ts-morph'
import {isEqual, reverse} from 'lodash';

export function getIdentifierListOfMethodArgs(
  method: MethodSignature | FunctionTypeNode | MethodDeclaration
) {
  return method
    .getParameters()
    .map(p => {
      if (p.getDotDotDotToken()) {
        return `...${p.getName()}`
      }
      return p.getName()
    })
    .join(',')
}

export function ImportTypeIfNeeded(
  src: SourceFile,
  mock: SourceFile,
  typeNode: TypeNode
) {
  typeNode.getChildrenOfKind(SyntaxKind.Identifier).forEach(t => {
    ImportByName(src, mock, t.getFullText().trim())
  })
  typeNode.getChildrenOfKind(SyntaxKind.ArrayType).forEach(t => {
    ImportTypeIfNeeded(src, mock, t)
  })
  typeNode.getChildrenOfKind(SyntaxKind.UnionType).forEach(t => {
    ImportTypeIfNeeded(src, mock, t)
  })
  typeNode.getChildrenOfKind(SyntaxKind.TypeReference).forEach(t => {
    ImportTypeIfNeeded(src, mock, t)
  })
  typeNode.getChildrenOfKind(SyntaxKind.SyntaxList).forEach(s => {
    s.getChildrenOfKind(SyntaxKind.PropertySignature).forEach(sig => {
      const ref = sig.getFirstChildByKind(SyntaxKind.TypeReference)
      if (ref) {
        ImportByName(src, mock, ref.getTypeName().getText())
      }
    })
  })
}

export function ImportByName(
  src: SourceFile,
  mock: SourceFile,
  name: string
): boolean {
  if (name.match(/^Pick$|^Promise$/)) {
    console.log(`skip to import ${name}`)
    return false
  }
  name = name.trim()

  const srcImportLine = src.getImportDeclarations().find(declar => {
    return !!declar.getNamedImports().find(named => named.getName() === name)
  })
  let moduleSpecifier: string | undefined
  if (srcImportLine) {
    if (srcImportLine.getModuleSpecifierSourceFile()) {
      moduleSpecifier = mock.getRelativePathAsModuleSpecifierTo(
        srcImportLine.getModuleSpecifierSourceFileOrThrow()
      )
    } else {
      moduleSpecifier = srcImportLine.getModuleSpecifierValue()
    }
  } else {
    const exp = src.getExportSymbols().find(ex => {
      return ex.getName() === name
    })
    if (exp) {
      moduleSpecifier = mock.getRelativePathAsModuleSpecifierTo(src)
    }
  }

  if (!moduleSpecifier) {
    console.log(`${name} not found in any reference`)
    return false
  }

  let importStatement = mock.getImportDeclarations().find(importDeclar => {
    const f = importDeclar.getModuleSpecifier().getLiteralText()
    return f === moduleSpecifier
  })
  if (importStatement) {
    if (
      !importStatement
        .getNamedImports()
        .find(named => named.getSymbolOrThrow().getName() === name)
    ) {
      importStatement.addNamedImport(name)
    }
    return true
  } else {
    mock.addImportDeclaration({
      namedImports: [name],
      moduleSpecifier
    })
    return true
  }
}

export const Any = '__MOCK__MATCH_ANY_THING'

var serialize = require('node-serialize')
export const pushCalled = (calls: any[], methodName: string, ...args: any[]) => {
  return (returnValue) => {
    calls.push([[methodName, serialize.serialize(args)],args, returnValue])
  }
}

export const on = (calls: any[], methodName: string, ...args: any[]) => {
  const call = [methodName, serialize.serialize(args)]
  const result = reverse(calls).find(c => {
    if (c[0][0] !== methodName){
      return false
    }
    const equalAssert =  isEqual(c[0], call)
    if (equalAssert) {
      return equalAssert
    }

    const mockAssert = (c[1])
    const callAssert = args
    if (Array.isArray(callAssert)){
      return callAssert.reduce((current, next, i) => {
          if (mockAssert[i] === Any){
            return current && true
          } else {
            return current && (serialize.serialize(next) === serialize.serialize(mockAssert[i]))
          }
      }, true) 
    }
    return false
  })
  if (!result) {
    throw new Error(`call ${methodName} with ${JSON.stringify(serialize.serialize({ parameters: args }), null, " ")} does not exists`)
  }
  return result[2]
}
