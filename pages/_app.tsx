import type { AppProps } from 'next/app'

import { ThemeProvider } from 'styled-components'
import { CSSReset } from '../src/styles/global'
import { defaultTheme } from '../src/styles/themes/default'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={defaultTheme.light}>
      <CSSReset />
      <Component {...pageProps} />
    </ThemeProvider>
  )

}
