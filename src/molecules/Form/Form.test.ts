import React from 'react'
import Form from './Form'
import Checkbox from '../Checkbox'
import ThemeProvider from '../../behaviour/ThemeProvider'

describe('Test the Form component', () => {
  it('should submit and default to method post', () => {
    const submit = jest.fn()

    const wrapper = mount(
      <ThemeProvider>
        <Form onSubmit={submit}>
          <Checkbox label="a" name="a" value="a" checked />
        </Form>
      </ThemeProvider>
    )
    expect(submit).toHaveBeenCalledTimes(0)
    const form = wrapper
      .find('form')
      .first()
      .instance()
    expect(form.method).toBe('post')
    expect(form.submit).toThrowError()
    wrapper.unmount()
  })

  it('should submit with submitted method', () => {
    const wrapper = mount(
      <ThemeProvider>
        <Form method="GET">
          <Checkbox label="a" name="a" value="a" checked />
        </Form>
      </ThemeProvider>
    )
    const form = wrapper
      .find('form')
      .first()
      .instance()
    expect(form.method).toBe('get')
    wrapper.unmount()
  })
})
