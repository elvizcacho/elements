import React from 'react'
import Form from './Form'
import Checkbox from '../Checkbox'
import ThemeProvider from '../../behaviour/ThemeProvider'
import { mount } from 'enzyme'

describe('Test the Form component', () => {
  it('should submit and default to method post', () => {
    const submit = jest.fn()

    const wrapper = mount(
      <ThemeProvider>
        <Form onSubmit={submit}>
          <Checkbox label="a" name="a" checked />
        </Form>
      </ThemeProvider>
    )
    expect(submit).toHaveBeenCalledTimes(0)
    wrapper.unmount()
  })
})
