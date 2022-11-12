import type { AppProps } from 'next/app'
import { useContext } from 'react'

import { ThemeProvider } from 'styled-components'

import { ColorModeProvider, ColorModeContext, ColorModeProviderProps } from '../src/contexts/ColorModeContext'

import { CSSReset } from '../src/styles/global'
import { defaultTheme } from '../src/styles/themes/default'

function ProviderWrapper({ children }: ColorModeProviderProps) {
  return (
    <ColorModeProvider>
      {children}
    </ColorModeProvider>
  )
}

function MyApp({ Component, pageProps }: AppProps) {
  const { colorMode } = useContext(ColorModeContext)
  console.log(colorMode)
  return (
      <ThemeProvider theme={defaultTheme[colorMode]}>
        <CSSReset />
        <Component {...pageProps} />
      </ThemeProvider>
  )
}

export default function _App(props: AppProps) {
  return (
    <ProviderWrapper>
      <MyApp {...props} />
    </ProviderWrapper>
  )
}
