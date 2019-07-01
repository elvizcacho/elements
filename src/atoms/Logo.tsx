import React from 'react'
import Image from './Image'
import View from '../atoms/View'

/**
 * The Allthings logo
 *
 * ```example
 * <ThemeProvider>
 *  <View style={{ background: '#bada55', padding: 15 }}>
 *    <Relative>
 *      <Logo size={80} />
 *      <CountIndicator top="55" left="50" count={this.state.count} />
 *    </Relative>
 *  </View>
 *</ThemeProvider>
 */
const Logo = ({ size, ...props }: { onClick?: any; size?: number }) => (
  <View style={{ height: 'auto', width: size }} {...props}>
    <Image
      height="100%"
      width="100%"
      src="/static/img/allthings-logo.svg"
      alt="Allthings"
    />
  </View>
)

export default Logo
