import { Playlist } from "./components/Playlist";
import { StyledTimeline } from "./styles";

export function Timeline() {
  const playlistNames = ["Músicas", "Filmes", "Tecnologia"]
  return (
    <StyledTimeline>
      {playlistNames.map((playlistName) => {
        return (
          <Playlist title={playlistName} key={playlistName} />
        )
      })}
    </StyledTimeline>
  )
}