import { FormEvent, useState } from "react";

import { StyledRegisterVideo } from "./styles";

import { useForm } from '../../hooks/useForm'
import { VideoProps, videoService } from "../../services/videoService";

function getThumbFromVideo(url: string) {
  return `https://img.youtube.com/vi/${url.split("v=")[1]}/hqdefault.jpg`
}

export function RegisterVideo() {
  const [modalVisible, setModalVisible] = useState(false)
  const formRegister = useForm()
  const service = videoService()

  function closeModal() {
    setModalVisible(false)
  }

  function openModal() {
    setModalVisible(true)
  }

  return (
    <StyledRegisterVideo>
      <button className="add-video" onClick={openModal}>
        +
      </button>
      {modalVisible &&
        (
          <form
            onSubmit={(e: FormEvent) => {
              e.preventDefault()
              const formValues: VideoProps = {
                title: formRegister.formData.title,
                url: formRegister.formData.url,
                thumb: getThumbFromVideo(formRegister.formData.url),
                type: formRegister.formData.type
              }
              service.createVideo(formValues)
              .then((data) => {
                //Criar um alerta
                console.log(data)
              })

              formRegister.clearForm()
              closeModal()
            }}
          >
            <div>
              <button type="button" className="close-modal" onClick={closeModal}>
                X
              </button>
              <input
                placeholder="Titulo do vídeo"
                name="title"
                onChange={formRegister.handleInputChange}
                value={formRegister.formData.title}
                required
              />
              <input
                placeholder="URL"
                name="url"
                onChange={formRegister.handleInputChange}
                value={formRegister.formData.url}
                required
              />
              <select 
                name="type"
                placeholder="Categoria do vídeo"
                onChange={formRegister.handleSelectChange}
                value={formRegister.formData.type}
                required
              >
                <option value="" disabled>Categoria do vídeo</option>
                <option value="Músicas">Músicas</option>
                <option value="Filmes">Filmes</option>
                <option value="Tecnologia">Tecnologia</option>
              </select>
              <button type="submit">
                Cadastrar
              </button>
            </div>
          </form>
        )
      }
    </StyledRegisterVideo>
  )
}