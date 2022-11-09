import data from '../../../data.json'
import { StyledVideo } from './styles'

export function VideoCard() {
  return (
    <StyledVideo href={data.playlists.Filmes[0].url} target="_blank">
      <img src={data.playlists.Tecnologia[0].thumb} alt="" />
      <span>{data.playlists.Tecnologia[0].title}</span>
    </StyledVideo>
  )
}