import { VideoCard } from "./components/VideoCard";
import { StyledPlaylist} from "./styles";

import { useContext, useEffect } from 'react'

import { SearchContext } from '../../../../contexts/SearchContext'

import { videoService, VideoProps } from "../../../../services/videoService";
import Swal from "sweetalert2";
import { VideosContext } from "../../../../contexts/VideosContext";

export interface PlaylistProps {
  title: string
  playlist: VideoProps[]
}

export function Playlist({ title, playlist }: PlaylistProps) {
  const service = videoService()

  const { playlistVideos, handleVideoOnPlaylist } = useContext(VideosContext)

  const { searchFilter } = useContext(SearchContext)

  function deleteVideo(videoId: number | undefined) {
    const videoListWithoutDeletedOne = playlistVideos.filter((video) => {
      return video.id !== videoId
    })
    Swal.fire({
      icon: 'question',
      title: 'Tem certeza que quer excluir este vídeo?',
      showDenyButton: true,
      confirmButtonText: "Sim",
      confirmButtonColor: 'black',
      denyButtonText: "Não"
    })
    .then((action) => {
      if (action.isDenied) {
        return
      }
      service.deleteVideo(videoId)
      .then((data) => {
        
      })
      handleVideoOnPlaylist(videoListWithoutDeletedOne)
    })
  }

  const playlistFiltered = playlist.filter((item) => {
    return item.title.toLowerCase().includes(searchFilter.toLowerCase())
  })

  return (
    <StyledPlaylist>
      <h2>{title}</h2>
      <ul>
        {playlistFiltered.map((video) => {
          return (
            <li key={video.id}>
              <VideoCard 
                data={video}
                onDelete={deleteVideo}
               />
            </li>
          )
        })}
      </ul>
    </StyledPlaylist>
  ) 
}