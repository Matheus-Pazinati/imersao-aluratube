import { Logo } from "../../assets/Logo";
import DarkModeSwitch from "./components/DarkModeSwitch";

import Search, {} from './components/Search'

import { StyledMenu } from './styles'

export function Menu() {
  return (
    <StyledMenu>
      <div>
        <Logo />
      </div>
      <Search />
      <DarkModeSwitch />
    </StyledMenu>
  )
}