import data from '../../../../../../../data.json'
import { StyledVideo } from './styles'

interface VideoType {
  title: string;
  url: string;
  thumb: string
}

interface VideoCardProps {
  data: VideoType
}

export function VideoCard({ data }: VideoCardProps) {
  return (
    <StyledVideo href={data.url} target="_blank">
      <img src={data.thumb} alt="" />
      <span>{data.title}</span>
    </StyledVideo>
  )
}