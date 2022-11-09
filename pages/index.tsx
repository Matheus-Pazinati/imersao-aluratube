import { ThemeProvider } from 'styled-components'

import { CSSReset } from "../src/styles/global";
import { defaultTheme } from '../src/styles/themes/default'

import { Menu } from "../src/components/Menu";
import { Header } from "../src/components/Header";
import { Timeline } from "../src/components/Timeline";

export default function Home() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Menu />
      <Header />
      <Timeline />
      <CSSReset />
    </ThemeProvider>
  )
}
