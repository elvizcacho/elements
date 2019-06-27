import React from 'react'
import renderer from 'react-test-renderer'
import ProfileImage from './ProfileImage'

test('Profile image with source renders correctly', () => {
  const tree = renderer
    .create(<ProfileImage image="https://placeimg.com/100/100/people" />)
    .toJSON()
  expect(tree).toMatchSnapshot()
})

test('Profile image without source renders correctly', () => {
  const tree = renderer.create(<ProfileImage />).toJSON()
  expect(tree).toMatchSnapshot()
})
