import * as React from 'react'
import ReadMore from './ReadMore'
import Text from '../Text'
import { render } from '@testing-library/react'

describe('ReadMore component', () => {
  test('ReadMore renders properly width a px height of 20', () => {
    const { container } = render(
      <ReadMore cropAtHeight={20}>
        <Text>Testing a short text...</Text>
      </ReadMore>,
    )
    expect(container).toMatchSnapshot()
  })
  test('ReadMore renders properly width a vh height of 10vh', () => {
    const { container } = render(
      <ReadMore cropAtHeight="10vh">
        <Text>Testing a short text with 10vh...</Text>
      </ReadMore>,
    )
    expect(container).toMatchSnapshot()
  })
  test('ReadMore extends a large text', () => {
    const { container } = render(
      <ReadMore cropAtHeight="5vh">
        <Text>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
          dignissim sem in elit mollis consequat. Suspendisse potenti. Maecenas
          a velit vel dolor mollis viverra. Praesent ex diam, ultricies ac
          ultricies ut, efficitur sit amet leo. Vivamus ex ante, dapibus a
          elementum vel, ultrices in erat. Vestibulum eget ante turpis. Donec
          dapibus, purus vel euismod egestas
        </Text>
      </ReadMore>,
    )
    // @TODO - create a test which actually clicks the readMore link and checks if it disappears....
    expect(container).toMatchSnapshot()
  })
})
