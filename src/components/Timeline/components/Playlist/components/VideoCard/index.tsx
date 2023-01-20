import { DeleteButton, StyledVideo, VideoContainer } from './styles'
import { Trash } from 'phosphor-react'
import Swal from 'sweetalert2';

interface VideoType {
  id?: number | undefined;
  title: string;
  url: string;
  thumb: string
}

interface VideoCardProps {
  data: VideoType
  onDelete: (videoId: number | undefined) => void
}

export function VideoCard({ data, onDelete }: VideoCardProps) {

  function handleDeleteVideo() {
    onDelete(data.id)
  }
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
        onClick={handleDeleteVideo}
      >
        <Trash size={20} weight={'fill'} color="#FAFAFA" />
      </DeleteButton>
    </VideoContainer>
  )
}