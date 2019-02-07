import { render } from 'enzyme'
import retrieveExamples from './example'
import { transformSync } from '@babel/core'

describe('Component Examples', async () => {
  it('should match snapshot', async () => {
    const { filesMapped, fileObj } = await retrieveExamples
    filesMapped.map(example => {
      const { wholeExample, displayName } = example
      if (wholeExample !== 'false') {
        wholeExample.forEach((stringExample, index) => {
          const avoid = stringExample.match(/import|const/g)
          if (!avoid) {
            let evalString = "var React = require('react');"
            const requiredComponents = stringExample.match(/<([A-Z])\w+/g)
            requiredComponents.push('View', 'ResourceProvider', 'ThemeProvider')
            requiredComponents.map(required => {
              const requiredComponent = required.replace('<', '')
              evalString =
                evalString +
                `var ${requiredComponent} = require("../${
                  fileObj[requiredComponent].file
                }").default; `
              return requiredComponent
            })
            const themeOccurrence = requiredComponents.reduce((acc, curr) => {
              const requiredComponent = curr.replace('<', '')
              const count =
                requiredComponent === 'ThemeProvider' ? acc + 1 : acc
              return count
            }, 0)
            const themeTagStart =
              themeOccurrence > 1
                ? ''
                : '<ThemeProvider><ResourceProvider><View>'
            const themeTagEnd =
              themeOccurrence > 1
                ? ''
                : '</View></ResourceProvider></ThemeProvider>'
            const result = transformSync(
              themeTagStart + stringExample + themeTagEnd,
              { presets: ['@babel/react'] }
            )

            try {
              // eslint-disable-next-line no-eval
              const wrapper = eval(evalString + result.code)
              const component = render(wrapper)
              expect(component).toMatchSnapshot(displayName + index)
            } catch (e) {
              console.log(
                `Component ${displayName} example #${index} has failed. ${e}`
              )
            }
          }
        })
      }
    })
  })
})
