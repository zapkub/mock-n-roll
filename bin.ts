#!/usr/bin/env node

import { generateMockClass } from './generator'
import * as path from 'path'

var argv = require('minimist')(process.argv.slice(2))

if (!argv.path) {
  console.log("Please provide file path (--path)")
  process.exit(0)
}

if (!argv.name) {
  console.log("Please provide interface target name (--name)")
  process.exit(0)
}

if (!argv.out) {
  argv.out = path.join(argv.dir, "__generated__")
}

generateMockClass(
  path.join(argv.path),
  path.join(argv.out),
  argv.name,
)
