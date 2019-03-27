import { generateMockClass } from '../generator'
import * as path from 'path'

const targetFolder = path.join(__dirname, './')

generateMockClass(
  path.join(__dirname, './abstract.ts'),
  path.join(targetFolder, './__generated__'),
  "UserRepository",
)
