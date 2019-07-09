import React from 'react'
import renderer from 'react-test-renderer'
import ThemeProvider from '../ThemeProvider'
import ResourceProvider from '../ResourceProvider'
import Collapsible from './Collapsible'

describe('Input component', () => {
  test('Collapsible renders properly', () => {
    const tree = renderer
      .create(
        <ThemeProvider>
          <ResourceProvider>
            <Collapsible
              title="title"
              hasBottomBorder={true}
              tabIndex={1}
              data-e2e="hallo"
            >
              <p>Test child</p>
            </Collapsible>
          </ResourceProvider>
        </ThemeProvider>,
      )
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})
