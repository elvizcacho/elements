import React from 'react'
import Form from './Form'
import Checkbox from '../Checkbox'
import ThemeProvider from '../../behaviour/ThemeProvider'
import { mount } from 'enzyme'
import Button from '../Button'

describe('Test the Form component', () => {
  it('should submit and default to method post', () => {
    const submit = jest.fn()

    const wrapper = mount(
      <ThemeProvider>
        <Form onSubmit={submit}>
          <Checkbox label="a" name="a" checked />
          <Checkbox label="b" name="b" />
          <Button
            type="submit"
            name="send"
            color="primary"
            backgroundColor="warn"
          />
        </Form>
      </ThemeProvider>
    )
    expect(submit).toHaveBeenCalledTimes(0)
    wrapper.find(Form).simulate('submit')
    expect(submit).toHaveBeenCalledTimes(1)
    console.log(submit.mock.calls[0][1])
    expect(submit.mock.calls[0][1]).toStrictEqual({
      a: 'true',
      b: 'false',
      send: '',
    })
    const inputA = wrapper.find('input#a')
    const inputB = wrapper.find('input#b')
    inputA.simulate('change')
    inputB.simulate('change')
    wrapper.find(Form).simulate('submit')

    expect(submit.mock.calls[1][1]).toStrictEqual({
      a: 'true', // doens't changed, is controlled
      b: 'true',
      send: '',
    })
    wrapper.unmount()
  })
})
