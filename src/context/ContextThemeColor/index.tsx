import { ReactNode, createContext, useState } from 'react'

type ColorMode = 'dark' | 'light'

type ProviderThemeColorProps = {
  children: ReactNode
}

type ThemeColorContext = {
  colorMode: ColorMode
  toggleThemeColor: () => void
}

export const themeColorContext = createContext({} as ThemeColorContext)

export const ThemeColorProvider = ({ children }: ProviderThemeColorProps) => {
  const [colorMode, setColorMode] = useState<ColorMode>('light')

  const toggleThemeColor = () => {
    setColorMode(colorMode => (colorMode === 'light' ? 'dark' : 'light'))
  }

  return (
    <themeColorContext.Provider value={{ colorMode, toggleThemeColor }}>
      {children}
    </themeColorContext.Provider>
  )
}
