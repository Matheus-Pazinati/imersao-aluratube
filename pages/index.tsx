import { Menu } from "../src/components/Menu";
import { Header } from "../src/components/Header";
import { Timeline } from "../src/components/Timeline";

import { SearchContextProvider } from '../src/contexts/SearchContext';

export default function Home() {
  return (
    <SearchContextProvider>
      <Menu />
      <Header />
      <Timeline />
    </SearchContextProvider>
  )
}
