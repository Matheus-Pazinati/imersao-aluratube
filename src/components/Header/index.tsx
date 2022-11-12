import { Avatar } from "../Avatar";
import data from '../../../data.json'
import { StyledBanner, StyledHeader, StyledProfile } from "./styles";

export function Header() {
  return (
    <StyledHeader>
      <StyledBanner banner={data.banner} />
      <StyledProfile>
        <Avatar source={`https://github.com/${data.github}.png`} />
        <div>
          <h2>{data.name}</h2>
          <p>{data.description}</p>
        </div>
      </StyledProfile>
    </StyledHeader>
  )
}