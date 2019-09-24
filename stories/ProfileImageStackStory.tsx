import { css } from 'glamor'
import React from 'react'
import {
  Card,
  ProfileImageStack,
  ResourceProvider,
  Text,
  ThemeProvider,
} from '../src/'

export default () => (
  <ThemeProvider>
    <ResourceProvider>
      <Card
        {...css({
          width: '300px',
          margin: '10px 10px 10px 10px',
        })}
      >
        <Text strong>XS</Text>
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
        />
        <Text strong>S</Text>
        <ProfileImageStack
          size="s"
          images={[
            'https://placeimg.com/100/100/people?0',
            'https://placeimg.com/100/100/people?1',
            'https://placeimg.com/100/100/people?2',
            'https://placeimg.com/100/100/people?3',
            'https://placeimg.com/100/100/people?4',
            'https://placeimg.com/100/100/people?5',
          ]}
          moreText={'+ 2 others'}
        />
        <Text strong>M </Text>
        <ProfileImageStack
          size="m"
          images={[
            'https://placeimg.com/100/100/people?0',
            'https://placeimg.com/100/100/people?1',
            'https://placeimg.com/100/100/people?2',
            'https://placeimg.com/100/100/people?3',
            'https://placeimg.com/100/100/people?4',
            'https://placeimg.com/100/100/people?5',
          ]}
          moreText={'+ 3 others'}
        />
        <Text strong>M (without border)</Text>
        <ProfileImageStack
          size="m"
          showBorder={false}
          images={[
            'https://placeimg.com/100/100/people?0',
            'https://placeimg.com/100/100/people?1',
            'https://placeimg.com/100/100/people?2',
            'https://placeimg.com/100/100/people?3',
            'https://placeimg.com/100/100/people?4',
            'https://placeimg.com/100/100/people?5',
          ]}
        />
      </Card>
    </ResourceProvider>
  </ThemeProvider>
)
