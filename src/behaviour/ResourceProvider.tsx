import React from 'react'

export const RESOURCE_PATH = 'https://static.allthings.me'

/**
 * Elements uses a set of static resources like images or icons.
 * In order to benefit from caching across all apps, these resources are provided by a static asset CDN.
 *
 * Whenever you like to use Icons or Illustrations, you need to use the ResouceProvider to let the components know where they are.
 */
const ResouceProvider = React.createContext({
  resourcePath: RESOURCE_PATH,
})

export type ResourceType = {
  resourcePath?: string
}

export default ResouceProvider
