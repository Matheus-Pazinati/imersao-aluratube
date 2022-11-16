import { VideoCard } from "./components/VideoCard";
import { StyledPlaylist} from "./styles";

import { useContext, useEffect, useState } from 'react'

import { SearchContext } from '../../../../contexts/SearchContext'

import { videoService, VideoProps } from "../../../../services/videoService";

export interface PlaylistProps {
  title: string
}

export function Playlist({ title }: PlaylistProps) {
  const service = videoService()
  const [playlistVideos, setPlaylistVideos] = useState<VideoProps[]>([])

  const { searchFilter } = useContext(SearchContext)

  async function getVideosFromDataBase() {
    const { data } = await service.getAllVideos()
    const playlist = data?.filter((videos) => {
      return videos.type === title
    })
    setPlaylistVideos(playlist as VideoProps[])
  }

  useEffect(() => {
    getVideosFromDataBase()
  },[])

  const playlistFiltered = playlistVideos.filter((item) => {
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