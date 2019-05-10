import React from 'react'
import renderer from 'react-test-renderer'
import ThemeProvider from '../behaviour/ThemeProvider'
import ResourceProvider from '../behaviour/ResourceProvider'
import Collapsible from '../molecules/Collapsible'
import genProps from 'react-generate-props'

describe('Input component', () => {
  test('Collapsible renders properly', () => {
    const props = genProps(Collapsible, { optional: true })
    const tree = renderer
      .create(
        <ThemeProvider>
          <ResourceProvider>
            <Collapsible {...props}>
              <p>Test child</p>
            </Collapsible>
          </ResourceProvider>
        </ThemeProvider>
      )
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})
