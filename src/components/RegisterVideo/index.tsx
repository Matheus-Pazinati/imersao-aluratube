import { FormEvent, useState } from "react";
import { StyledRegisterVideo } from "./styles";

import { useForm } from '../../hooks/useForm'

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
              console.log(formRegister.formData)
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
                onChange={formRegister.handleChange}
                value={formRegister.formData.title}
              />
              <input
                placeholder="URL"
                name="url"
                onChange={formRegister.handleChange}
                value={formRegister.formData.url}
              />
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