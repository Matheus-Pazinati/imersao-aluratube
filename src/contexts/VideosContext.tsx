import { createContext, ReactNode, useState } from 'react'

import { VideoProps } from '../services/videoService'

interface VideosContextProps {
  playlistVideos: VideoProps[]
  handleVideoOnPlaylist: (video: VideoProps[]) => void
}

export const VideosContext = createContext({} as VideosContextProps)

interface VideosContextProviderProps {
  children: ReactNode
}

export function VideosContextProvider({ children }: VideosContextProviderProps) {

  const [playlistVideos, setPlaylistVideos] = useState<VideoProps[]>([])

  function handleVideoOnPlaylist(video: VideoProps[]) {
    setPlaylistVideos(video)
  }

  return (
    <VideosContext.Provider value={{playlistVideos, handleVideoOnPlaylist}}>
      {children}
    </VideosContext.Provider>
  )
}