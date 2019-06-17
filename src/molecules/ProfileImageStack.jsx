import PropTypes from 'prop-types'
import React from 'react'
import Text from '../atoms/Text'
import ProfileImage, { resolveSize } from '../molecules/ProfileImage'
import View from '../atoms/View'
import { css } from 'glamor'

const TIGHTNESS_FACTOR = 3

const imageStyle = size =>
  css({
    border: '1px solid #fff',
    borderWidth: size > 30 ? 2 : 1,
    position: 'relative',
    marginLeft: -size / TIGHTNESS_FACTOR,
  })

const ProfileImageStack = ({
  size = 'medium',
  showBorder,
  images = [],
  moreText,
  ...props
}) => (
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
      <Text color="grey" size={size} style={{ paddingLeft: 5 }}>
        {moreText}
      </Text>
    )}
    {images.map((image, i) => (
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

ProfileImageStack.propTypes = {
  children: PropTypes.node,
  images: PropTypes.arrayOf(PropTypes.string),
  moreText: PropTypes.string,
  showBorder: PropTypes.bool,
  size: PropTypes.oneOfType([
    PropTypes.oneOf(['xs', 's', 'm', 'l']),
    PropTypes.number,
  ]),
}

export default ProfileImageStack
