import { Playlist } from "../Playlist";
import { StyledTimeline } from "./styles";

export function Timeline() {
  return (
    <StyledTimeline>
      <Playlist title="Jogos" />
      <Playlist title="Musicas" />
    </StyledTimeline>
  )
}