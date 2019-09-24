import React, {
  createContext,
  PropsWithChildren,
  useEffect,
  useState,
} from 'react'

export const RESOURCE_PATH = 'https://static.allthings.me'

/**
 * Elements uses a set of static resources like images or icons.
 * In order to benefit from caching across all apps, these resources are provided by a static asset CDN.
 *
 * Whenever you like to use Icons or Illustrations, you need to use the ResourceProvider to let the components know where they are.
 */
export const ResourceProviderContext = createContext({
  resourcePath: RESOURCE_PATH,
})

export interface IResourceProviderProps {
  readonly resourcePath?: string
}

/**
 * All elements support theming by default, and therefore every element must be wrapped inside a ThemeProvider.
 * The ThemeProvider allows you to define the default colors for most elements.
 *
 * **Example**: If you want all you buttons to be red, instead of writing <Button color="red" /> all the time, you might want to set the "primary" color of your theme to red.
 **/
const ResourceProvider = ({
  children,
  resourcePath = RESOURCE_PATH,
}: PropsWithChildren<IResourceProviderProps>) => {
  // this is to prevent unintentional re-renders in consumers
  // see https://reactjs.org/docs/context.html#caveats
  const [value, setValue] = useState({ resourcePath })
  useEffect(() => {
    setValue({ resourcePath })
  }, [resourcePath])

  return (
    <ResourceProviderContext.Provider value={value}>
      {children}
    </ResourceProviderContext.Provider>
  )
}

export default ResourceProvider
