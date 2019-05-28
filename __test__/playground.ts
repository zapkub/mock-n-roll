import Project, { SyntaxKind } from 'ts-morph'

function run() {
  const source = `
  
    export function x( p: Promise<string> ) {}

  `
  const project = new Project({})
  const file = project.createSourceFile('test', source)

  file.getFunctions().forEach(f => {
    f.getParameters().forEach(p => {
      const t = p.getTypeNodeOrThrow()
      const i = t.getFirstChildByKindOrThrow(SyntaxKind.Identifier)
      if (i.getText() === 'Promise') {
        console.log(i)
        const open = t.getFirstChildByKind(SyntaxKind.LessThanToken)
        if (open) {
          const t = open.getNextSiblingOrThrow()
          console.log(t.getFullText())
        }
      }
    })
  })
}

run()
