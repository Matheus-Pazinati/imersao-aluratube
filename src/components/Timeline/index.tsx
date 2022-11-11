import { Playlist } from "./components/Playlist";
import { StyledTimeline } from "./styles";
import data from '../../../data.json'

export function Timeline() {
  const playlistNames = Object.keys(data.playlists)
  return (
    <StyledTimeline>
      {playlistNames.map((playlistName) => {
        return (
          <Playlist title={playlistName} />
        )
      })}
    </StyledTimeline>
  )
}