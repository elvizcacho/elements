import { fireEvent, render } from '@testing-library/react'
import { mount } from 'enzyme'
import React from 'react'
import ThemeProvider from '../ThemeProvider'
import FormCheckbox from './FormCheckbox'

const THEME = {
  background: 'darkMarco',
}
const STRING_LABEL = 'I am a nice FormCheckbox!'

describe('Test the FormCheckbox component', () => {
  it('should tick it', () => {
    const wrapper = mount(
      <ThemeProvider theme={THEME}>
        <FormCheckbox label={STRING_LABEL} name="a" />
      </ThemeProvider>,
    )
    const input = wrapper.find('input#a')
    expect(wrapper).toMatchSnapshot()
    expect(wrapper.find('label').text()).toEqual(STRING_LABEL)
    expect(input.prop('checked')).toBeFalsy()
    // Check it.
    input.simulate('change')
    // Re-render in order to get it checked.
    wrapper.update()
    expect(wrapper).toMatchSnapshot()
    expect(wrapper.find('input#a').prop('checked')).toBeTruthy()
    wrapper.unmount()
  })
  it('should work with children', () => {
    const wrapper = mount(
      <ThemeProvider theme={THEME}>
        <FormCheckbox
          label={<h1>test</h1>}
          name="a"
          backgroundColor="darkMarco"
        />
      </ThemeProvider>,
    )
    expect(wrapper).toMatchSnapshot()
    wrapper.unmount()
  })

  it('should work as controlled component', () => {
    const handleChange = jest.fn()

    const renderCheckboxWithChecked = (checked: boolean) => (
      <FormCheckbox
        label="label"
        name="a"
        checked={checked}
        onChange={handleChange}
      />
    )

    const { getByLabelText, rerender } = render(renderCheckboxWithChecked(true))

    // a click shouldn't change 'checked'
    fireEvent.click(getByLabelText('label'))
    expect((getByLabelText('label') as HTMLInputElement).checked).toBe(true)
    expect(handleChange).toBeCalled()

    rerender(renderCheckboxWithChecked(false))
    expect((getByLabelText('label') as HTMLInputElement).checked).toBe(false)
  })
})
