import { ThemeProvider } from 'styled-components'

import { CSSReset } from "../src/styles/global";
import { defaultTheme } from '../src/styles/themes/default'

import { Menu } from "../src/components/Menu";
import { Header } from "../src/components/Header";
import { Timeline } from "../src/components/Timeline";
import { SearchContextProvider } from '../src/contexts/SearchContext';

export default function Home() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <SearchContextProvider>
        <Menu />
        <Header />
        <Timeline />
      </SearchContextProvider>
      <CSSReset />
    </ThemeProvider>
  )
}
