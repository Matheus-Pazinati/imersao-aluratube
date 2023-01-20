import { DeleteButton, StyledVideo, VideoContainer } from './styles'
import { Trash } from 'phosphor-react'
import Swal from 'sweetalert2';

interface VideoType {
  title: string;
  url: string;
  thumb: string
}

interface VideoCardProps {
  data: VideoType
}

export function VideoCard({ data }: VideoCardProps) {

  function handleDeleteVideo() {
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
        console.log('Cancelou')
        return
      }
      console.log('Confirmou')
    })
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