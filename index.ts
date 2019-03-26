import { generateMockClass } from './generator'
import * as path from 'path'

var argv = require('minimist')(process.argv.slice(2))
const reg = new RegExp(argv._.join('|'))
const targetFolder = path.join(__dirname, './__test__')

generateMockClass(
  path.join(__dirname, './__test__'),
  path.join(targetFolder, './__generated__'),
  reg,
)
