#!/usr/bin/env node

import { generateMockClass } from './generator'
import * as path from 'path'

var argv = require('minimist')(process.argv.slice(2))
const reg = new RegExp(argv._.join('|'))

if (!argv.dir) {
  throw new Error("Please provide --dir")
}

if (!argv.out) {
  argv.out = path.join(argv.dir, "__generated__")
}

generateMockClass(
  path.join(argv.dir),
  path.join(argv.out),
  reg,
)
