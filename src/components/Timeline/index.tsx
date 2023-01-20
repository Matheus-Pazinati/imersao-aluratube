import { useContext, useEffect } from "react";
import { VideosContext } from "../../contexts/VideosContext";
import { VideoProps, videoService } from "../../services/videoService";
import { Playlist } from "./components/Playlist";
import { StyledTimeline } from "./styles";

export function Timeline() {
  const service = videoService()
  
  const playlistNames = ["Músicas", "Filmes", "Tecnologia"]
  const { playlistVideos, handleVideoOnPlaylist } = useContext(VideosContext)

  async function getVideosFromDataBase() {
    const { data } = await service.getAllVideos()
    handleVideoOnPlaylist(data as VideoProps[])
  }

  useEffect(() => {
    getVideosFromDataBase()
  },[])
  
  return (
    <StyledTimeline>
      {playlistNames.map((playlistName) => {
        const playlist = playlistVideos.filter((playlist) => {
          return playlist.type === playlistName
        })
        return (
          <Playlist 
            title={playlistName}
            key={playlistName} 
            playlist={playlist} 
          />
        )
      })}
    </StyledTimeline>
  )
}