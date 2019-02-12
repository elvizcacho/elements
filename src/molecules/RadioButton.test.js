import React from 'react'
import RadioButton from './RadioButton'
import renderer from 'react-test-renderer'
import { render, fireEvent } from 'react-testing-library'
import ThemeProvider from '../behaviour/ThemeProvider'

describe('<RadioButton />', () => {
  it('should render without error', () => {
    const tree = renderer
      .create(
        <ThemeProvider>
          <RadioButton value="white" />
        </ThemeProvider>
      )
      .toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('should handle onChange event', () => {
    const { getByDisplayValue } = render(
      <ThemeProvider>
        <RadioButton value="white" />
      </ThemeProvider>
    )

    const input = getByDisplayValue('white')
    fireEvent.click(input)

    expect(input.checked).toBe(true)
  })
})
