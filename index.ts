import { generateMockClass } from './generator'

export type mocknrollOptions = {
  dir: string
  out?: string
  interfaceMatcher: RegExp
}
export default function(options: mocknrollOptions) {
  if (!options.dir) {
    throw new Error('please provide options.dir')
  }

  if (!options.out) {
    options.out = '__generated__'
  }
  generateMockClass(options.dir, options.out, options.interfaceMatcher)
}
