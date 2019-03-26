import { Project, SyntaxKind, SourceFile } from 'ts-morph'
import * as path from 'path'
import { ImportTypeIfNeeded } from './helpers'
const rimraf = require('rimraf')
const mkdirp = require('mkdirp')

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
        return i.getMethods().length > 0
      })
      .forEach(i => {
        const filePath = path.join(mockFolder, `${i.getName()}.ts`)
        rimraf.sync(filePath)
        const mockFile = project.createSourceFile(filePath)
        mockFile.addImportDeclaration({
          namedImports: ['isEqual'],
          moduleSpecifier: 'lodash'
        })

        const mockClass = mockFile.addClass({
          name: i.getName(),
          isExported: true
        })
        const mocks = mockClass
          .addProperty({
            name: 'mocks',
            initializer: w => {
              w.write('{}')
            }
          })
          .getInitializerIfKindOrThrow(SyntaxKind.ObjectLiteralExpression)

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
              ' throw new Error(`call ${name} with ${JSON.stringify(args)} is not exists`)'
            )
            w.writeLine('}')
            w.writeLine('return result[1]')
          }
        })

        i.getMethods().forEach(m => {
          const name = m.getName()
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

          ImportTypeIfNeeded(file, mockFile, m.getReturnTypeNodeOrThrow())

          const targetMethod = {
            name: name,
            parameters: m.getParameters().map(p => p.getStructure())
          }

          const methodArgs = m
            .getParameters()
            .map(p => {
              if (p.getDotDotDotToken()) {
                return `...${p.getName()}`
              }
              return p.getName()
            })
            .join(',')
          const methodReturnType = m.getReturnTypeNodeOrThrow().getFullText()
          mockClass.addMethod({
            ...targetMethod,
            returnType: w => {
              w.write(methodReturnType)
            },
            bodyText: w => {
              w.writeLine(
                `return this.on("${targetMethod.name}", ${methodArgs})`
              )
            }
          })
          mocks.addPropertyAssignment({
            name: targetMethod.name,
            initializer: w => {
              w.write(
                `(${m
                  .getParameters()
                  .map(p => p.getText())
                  .join(',')}) => {` +
                  '\n' +
                  'return {' +
                  '\n' +
                  `  toReturn: (returnArg: ${methodReturnType}) => {` +
                  '\n' +
                  ` this.called.push([["${
                    targetMethod.name
                  }", ${methodArgs}], returnArg])` +
                  '\n' +
                  '}' +
                  '\n' +
                  '}}'
              )
            }
          })
        })
        mockFile.formatText()
      })
  })
  project.getPreEmitDiagnostics()
  project.save()
}
