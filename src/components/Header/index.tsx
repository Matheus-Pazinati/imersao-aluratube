import { Avatar } from "../Avatar";
import data from '../../../data.json'
import { StyledHeader, StyledProfile } from "./styles";

export function Header() {
  return (
    <StyledHeader>
      <img 
        className="header-cover"
        src="https://www.whow.com.br/wp-content/uploads/2022/02/tecnologias-capa-1.jpg"
      />
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