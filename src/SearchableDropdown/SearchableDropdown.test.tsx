import * as React from 'react'
import { render, fireEvent } from '@testing-library/react'
import { ThemeProvider, ResourceProvider, SearchableDropdown } from '../index'
import { EDropdownDirection } from '../enums'

const items = [
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
]

describe('SearchableDropdown', () => {
  it('should render with placement bottom (default)', () => {
    const dropdown = render(
      <ThemeProvider>
        <ResourceProvider>
          <SearchableDropdown
            initialSelectedItem={items[0]}
            items={items}
            label="some label"
            menuHeight={200}
            name="searchable-dropdown-form-name"
            onSelect={() => {}}
            placeholder="select something..."
          />
        </ResourceProvider>
      </ThemeProvider>,
    )

    fireEvent.click(dropdown.getByTestId('searchable-dropdown'))
    expect(dropdown.container).toMatchSnapshot()
  })

  it('should render with placement top', () => {
    const dropdown = render(
      <ThemeProvider>
        <ResourceProvider>
          <SearchableDropdown
            initialSelectedItem={items[0]}
            items={items}
            label="some label"
            menuHeight={200}
            onSelect={() => {}}
            placeholder="select something..."
            placement={EDropdownDirection.TOP}
          />
        </ResourceProvider>
      </ThemeProvider>,
    )

    fireEvent.click(dropdown.getByTestId('searchable-dropdown'))
    expect(dropdown.container).toMatchSnapshot()
  })

  it('should render with icon', () => {
    const dropdown = render(
      <ThemeProvider>
        <ResourceProvider>
          <SearchableDropdown
            icon="user"
            initialSelectedItem={items[0]}
            items={items}
            label="some label"
            menuHeight={200}
            onSelect={() => {}}
            placeholder="select something..."
          />
        </ResourceProvider>
      </ThemeProvider>,
    )

    fireEvent.click(dropdown.getByTestId('searchable-dropdown'))
    expect(dropdown.container).toMatchSnapshot()
  })

  it('should render with no results', () => {
    const dropdown = render(
      <ThemeProvider>
        <ResourceProvider>
          <SearchableDropdown
            items={[]}
            label="some label"
            menuHeight={200}
            noResultsText="No results found"
            onSelect={() => {}}
            placeholder="select something..."
          />
        </ResourceProvider>
      </ThemeProvider>,
    )

    fireEvent.click(dropdown.getByTestId('searchable-dropdown'))

    expect(dropdown.getByTestId('searchable-dropdown-no-results')).toBeTruthy()
    expect(dropdown.container).toMatchSnapshot()
  })

  it('should render with load more', () => {
    const dropdown = render(
      <ThemeProvider>
        <ResourceProvider>
          <SearchableDropdown
            items={items}
            label="some label"
            loadMoreText="Load more"
            menuHeight={200}
            noResultsText="No results found"
            onSelect={() => {}}
            placeholder="select something..."
          />
        </ResourceProvider>
      </ThemeProvider>,
    )

    fireEvent.click(dropdown.getByTestId('searchable-dropdown'))

    expect(dropdown.getByTestId('searchable-dropdown-load-more')).toBeTruthy()
    expect(dropdown.container).toMatchSnapshot()
  })
})
