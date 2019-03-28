import { generateMockClass } from './generator'

export type mocknrollOptions = {
  path: string
  out?: string
  targetName: string
}
export default function(options: mocknrollOptions) {
  if (!options.path) {
    throw new Error('please provide options.path')
  }

  if (!options.out) {
    options.out = '__generated__'
  }
  generateMockClass(options.path, options.out, options.targetName)
}
