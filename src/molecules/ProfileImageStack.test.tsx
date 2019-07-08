import React from 'react'
import renderer from 'react-test-renderer'
import ProfileImageStack from './ProfileImageStack'

test('Profile image stack renders correctly', () => {
  const tree = renderer
    .create(
      <ProfileImageStack
        size="xs"
        images={[
          'https://placeimg.com/100/100/people?0',
          'https://placeimg.com/100/100/people?1',
          'https://placeimg.com/100/100/people?2',
          'https://placeimg.com/100/100/people?3',
          'https://placeimg.com/100/100/people?4',
          'https://placeimg.com/100/100/people?5',
        ]}
        moreText={'+ 1 other'}
      />,
    )
    .toJSON()
  expect(tree).toMatchSnapshot()
})
