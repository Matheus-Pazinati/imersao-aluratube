import { VideoCard } from "./components/VideoCard";
import { StyledPlaylist} from "./styles";

import { useContext } from 'react'

import { SearchContext } from '../../../../contexts/SearchContext'

import data from '../../../../../data.json'

export interface PlaylistProps {
  title: string
}

export function Playlist({ title }: PlaylistProps) {
  const playlists = data.playlists[title as keyof typeof data.playlists]

  const { searchFilter } = useContext(SearchContext)
  const playlistFiltered = playlists.filter((item) => {
    return item.title.toLowerCase().includes(searchFilter.toLowerCase())
  })

  return (
    <StyledPlaylist>
      <h2>{title}</h2>
      <ul>
        {playlistFiltered.map((playlist) => {
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