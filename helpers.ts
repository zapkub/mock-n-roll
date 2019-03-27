import {
  SourceFile,
  TypeNode,
  SyntaxKind,
  MethodSignature,
  FunctionTypeNode,
  MethodDeclaration
} from 'ts-morph'

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
