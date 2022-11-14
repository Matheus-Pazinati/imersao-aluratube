import { useState, createContext, ReactNode } from 'react'
import { defaultTheme } from '../styles/themes/default'

interface ColorContextProps {
  colorMode: keyof typeof defaultTheme
  changeColorMode: () => void
}

export interface ColorModeProviderProps {
  children: ReactNode
}

export const ColorModeContext = createContext({} as ColorContextProps)

export function ColorModeProvider({ children }: ColorModeProviderProps) {
  const [colorMode, setColorMode] = useState('light' as keyof typeof defaultTheme)

  function changeColorMode() {
    if (colorMode === 'light') {
      setColorMode('dark')
    } else {
      setColorMode('light')
    }
  }

  return (
    <ColorModeContext.Provider  value={{ colorMode, changeColorMode}}>
      {children}
    </ColorModeContext.Provider>
  )
}