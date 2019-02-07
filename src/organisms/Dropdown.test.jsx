import React from 'react'
import renderer from 'react-test-renderer'
import { ThemeProvider, ResourceProvider, Dropdown } from '../'

describe('Dropdown', () => {
  it('should render with placement bottom (default)', () => {
    const tree = renderer
      .create(
        <ThemeProvider>
          <ResourceProvider>
            <Dropdown
              initialSelectedItem={{
                label: 'dog',
                value: 'dog',
              }}
              label="some label"
              menuHeight={200}
              onSelect={() => {}}
              placeholder="select something..."
              clearable
              items={[
                {
                  label: 'dog',
                  value: 'dog',
                },
                {
                  label: 'cat',
                  value: 'cat',
                },
                {
                  label: 'apple',
                  value: 'apple',
                },
              ]}
            />
          </ResourceProvider>
        </ThemeProvider>
      )
      .toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('should render with placement top', () => {
    const tree = renderer
      .create(
        <ThemeProvider>
          <ResourceProvider>
            <Dropdown
              initialSelectedItem={{
                label: 'dog',
                value: 'dog',
              }}
              label="some label"
              menuHeight={200}
              onSelect={() => {}}
              placeholder="select something..."
              clearable
              items={[
                {
                  label: 'dog',
                  value: 'dog',
                },
                {
                  label: 'cat',
                  value: 'cat',
                },
                {
                  label: 'apple',
                  value: 'apple',
                },
              ]}
              placement="top"
            />
          </ResourceProvider>
        </ThemeProvider>
      )
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})
