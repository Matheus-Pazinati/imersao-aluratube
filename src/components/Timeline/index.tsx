import { Playlist } from "../Playlist";
import { StyledTimeline } from "./styles";
import data from '../../../data.json'

import { PlaylistProps } from '../Playlist'

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