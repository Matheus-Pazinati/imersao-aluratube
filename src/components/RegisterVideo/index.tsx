import { FormEvent, useState } from "react";

import { createClient } from '@supabase/supabase-js'

import { StyledRegisterVideo } from "./styles";

import { useForm } from '../../hooks/useForm'

const supabaseUrl = "https://gooubqmssqikddgevorg.supabase.co"
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imdvb3VicW1zc3Fpa2RkZ2V2b3JnIiwicm9sZSI6ImFub24iLCJpYXQiOjE2Njg0MTUzMDMsImV4cCI6MTk4Mzk5MTMwM30.S-mW3D2wCmqbRh0EzIVvHD45ak5L8fuQQf3ghUTebcs"
const supabase = createClient(supabaseUrl, supabaseKey)

function getThumbFromVideo(url: string) {
  return `https://img.youtube.com/vi/${url.split("v=")[1]}/hqdefault.jpg`
}

export function RegisterVideo() {
  const [modalVisible, setModalVisible] = useState(false)
  const formRegister = useForm()

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
              console.log(formRegister.formData.title, formRegister.formData.url, formRegister.formData.type)
              supabase.from("video").insert({
                title: formRegister.formData.title,
                url: formRegister.formData.url,
                thumb: getThumbFromVideo(formRegister.formData.url),
                type: formRegister.formData.type
              })
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