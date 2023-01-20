import { VideoCard } from "./components/VideoCard";
import { StyledPlaylist} from "./styles";

import { useContext, useEffect, useState } from 'react'

import { SearchContext } from '../../../../contexts/SearchContext'

import { videoService, VideoProps } from "../../../../services/videoService";
import Swal from "sweetalert2";

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
      setPlaylistVideos(videoListWithoutDeletedOne)
    })
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
            <li key={playlist.id}>
              <VideoCard 
                data={playlist}
                onDelete={deleteVideo}
               />
            </li>
          )
        })}
      </ul>
    </StyledPlaylist>
  ) 
}