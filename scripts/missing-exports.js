import path from 'path'
import fs from 'fs'
import glob from 'glob'
import pkg from '../package'

process.chdir(path.resolve(__dirname, '..'))

const ignored = pkg.ignoredMissingImports

const allFiles = glob.sync('src/**/!(*.test).{js,jsx}')

const existingComponents = allFiles
  .filter(file => !ignored.includes(file))
  .map(file => file.replace(/^src/, '.').replace(/\.jsx?$/, ''))

const allExports = fs.readFileSync('src/index.js', 'utf-8')
const exportedComponents = allExports
  .split('\n')
  .map(line => {
    const match = line.match(/export \S+ from '(\S+)'/)

    return match ? match[1] : undefined
  })
  .filter(Boolean)

const all = new Set(existingComponents)
const used = new Set(exportedComponents)
const diff = (a, b) => new Set([...a].filter(x => !b.has(x)))

const missing = Array.from(diff(all, used))

if (missing.length > 0) {
  console.log(`Missing following exports: ${missing.join(', ')}`)
  process.exit(1)
}
