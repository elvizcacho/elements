import React from 'react'
import renderer from 'react-test-renderer'
import { ThemeProvider, ResourceProvider, Collapsible } from '../'

describe('Input component', () => {
  test('Collapsible renders properly', () => {
    const tree = renderer
      .create(
        <ThemeProvider>
          <ResourceProvider.Provider value={{ resourcePath: '' }}>
            <Collapsible data-e2e="hallo">
              <p>Test child</p>
            </Collapsible>
          </ResourceProvider.Provider>
        </ThemeProvider>
      )
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})
