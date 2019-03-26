import { generateMockClass } from '../generator'
import * as path from 'path'

const targetFolder = path.join(__dirname, './')

generateMockClass(
  path.join(__dirname, './'),
  path.join(targetFolder, './__generated__'),
  /.*/,
)
