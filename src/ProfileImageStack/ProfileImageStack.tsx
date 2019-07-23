import React from 'react'
import Text from '../Text'
import ProfileImage, {
  resolveSize,
  ProfileImageSizeType,
} from '../ProfileImage'
import View from '../View'
import { css } from 'glamor'

const TIGHTNESS_FACTOR = 3

const imageStyle = (size: ProfileImageSizeType) =>
  css({
    border: '1px solid #fff',
    borderWidth: size > 30 ? 2 : 1,
    position: 'relative',
    marginLeft: -size / TIGHTNESS_FACTOR,
  })

const ProfileImageStack = ({
  size = 'm',
  showBorder = false,
  images = [],
  moreText,
  ...props
}: IProfileImageStackProps) => (
  <View
    alignV="center"
    direction="row-reverse"
    alignH="end"
    {...css({
      cursor: 'pointer',
      paddingLeft: resolveSize(size) / TIGHTNESS_FACTOR,
    })}
    {...props}
  >
    {moreText && (
      <Text
        color="grey"
        size={typeof size !== 'number' ? size : 'm'}
        style={{ paddingLeft: 5 }}
      >
        {moreText}
      </Text>
    )}
    {images.map(image => (
      <ProfileImage
        key={image}
        size={size}
        showBorder={showBorder}
        image={image}
        {...imageStyle(resolveSize(size))}
      />
    ))}
  </View>
)
interface IProfileImageStackProps {
  readonly images: string[]
  readonly moreText?: string
  readonly showBorder?: boolean
  readonly size?: ProfileImageSizeType
}

export default ProfileImageStack
