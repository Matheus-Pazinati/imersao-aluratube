import { useContext } from "react";

import { ColorModeContext } from "../../../../contexts/ColorModeContext";

import { StyledSwitch } from "./styles";

export default function DarkModeSwitch() {
  const { changeColorMode } = useContext(ColorModeContext)
  return (
    <StyledSwitch>
      <input 
        id="darkmode" 
        type="checkbox" 
        onChange={() => {
          changeColorMode()
        }}
      />
      <label
        htmlFor="darkmode"
        className="darkmode-switch"
      >
        <span>🌙</span>
        <span>☀️</span>
      </label>
    </StyledSwitch>
  )
}