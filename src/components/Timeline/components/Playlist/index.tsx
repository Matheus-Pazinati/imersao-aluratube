import { VideoCard } from "./components/VideoCard";
import { StyledPlaylist} from "./styles";

import data from '../../../../../data.json'

export interface PlaylistProps {
  title: string
}

export function Playlist({ title }: PlaylistProps) {
  const playlists = data.playlists[title as keyof typeof data.playlists]
  return (
    <StyledPlaylist>
      <h2>{title}</h2>
      <ul>
        {playlists.map((playlist) => {
          return (
            <li>
              <VideoCard data={playlist} />
            </li>
          )
        })}
      </ul>
    </StyledPlaylist>
  ) 
}