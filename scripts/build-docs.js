import glob from 'glob'
import { promisify } from 'util'
import fs from 'fs'
import path from 'path'
import { withCustomConfig } from 'react-docgen-typescript'

const globber = promisify(glob)
const { parse } = withCustomConfig(path.resolve(__dirname, '../tsconfig.json'))

const FILE_TYPE = '.tsx'

const [_, __, ...filesFromArgs] = process.argv

const propToRow = prop => {
  const { name, required, description, defaultValue, type } = prop
  return `|${name}${required ? ' **(required)**' : ''}|${type.name
    .split('|')
    .map(value => value.trim())
    .filter(value => required === false && value !== 'undefined')
    .join(', ')}|${description || ''}${
    defaultValue ? `<br>Default: ${defaultValue.value}` : ''
  }`
}

async function main() {
  const fileList =
    filesFromArgs.length > 0
      ? filesFromArgs
      : await globber(path.resolve(__dirname, `../src/**/*${FILE_TYPE}`), {
          ignore: `**/*.test*`,
        })

  fileList.map(file => {
    const [docs] = parse(file)
    docs.displayName = docs.displayName || path.basename(file, FILE_TYPE)

    const relativeFilePath = path.relative(path.join(__dirname, '/..'), file)
    const docMarkdown = `<!-- 
This is an auto-generated markdown. 
You can change it in "${relativeFilePath}" and run build:docs to update this file.
-->
# ${docs.displayName || ''}
${docs.description || ''}
## Usage
| Name        | Type           | Description  |
| ----------- |:--------------:| ------------:|
${
  docs.props
    ? Object.values(docs.props)
        .filter(
          value =>
            typeof value.parent === 'undefined' ||
            value.parent.fileName.includes('elements/src/'),
        )
        .map(propToRow)
        .join('\n')
    : '*No properties to pass*'
}
`
    const docFilePath = path.join(
      __dirname,
      '../doc/reference',
      `${path.parse(file).name}.md`,
    )

    fs.writeFileSync(docFilePath, docMarkdown, { flag: 'w+' })
  })
}

main()
