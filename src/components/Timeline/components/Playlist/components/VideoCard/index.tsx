import { DeleteButton, StyledVideo, VideoContainer } from './styles'
import { Trash } from 'phosphor-react'

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
    <VideoContainer>
      <StyledVideo href={data.url} target="_blank">
        <img src={data.thumb} alt="" />
        <div>
          <span>{data.title}</span>
        </div>
      </StyledVideo>
      <DeleteButton 
        type='button'
      >
        <Trash size={20} weight={'fill'} color="#FAFAFA" />
      </DeleteButton>
    </VideoContainer>
  )
}