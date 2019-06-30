import React from 'react'
import renderer from 'react-test-renderer'
import ThemeProvider from '../behaviour/ThemeProvider'
import ResourceProvider from '../behaviour/ResourceProvider'
import Collapsible from '../molecules/Collapsible'

describe('Input component', () => {
  test('Collapsible renders properly', () => {
    const tree = renderer
      .create(
        <ThemeProvider>
          <ResourceProvider.Provider value={{ resourcePath: '' }}>
            <Collapsible
              title="title"
              hasBottomBorder={true}
              tabIndex={1}
              data-e2e="hallo"
            >
              <p>Test child</p>
            </Collapsible>
          </ResourceProvider.Provider>
        </ThemeProvider>
      )
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})
