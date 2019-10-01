import React from 'react'
import { render } from '@testing-library/react'

import { Dropdown, ResourceProvider, ThemeProvider } from '../index'

describe('Dropdown', () => {
  it('should render with placement bottom (default)', () => {
    const { container } = render(
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
      </ThemeProvider>,
    )
    expect(container).toMatchSnapshot()
  })
})
