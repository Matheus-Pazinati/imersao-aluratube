import { useState } from "react";
import { StyledRegisterVideo } from "./styles";

export function RegisterVideo() {
  const [modalVisible, setModalVisible] = useState(true)

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
          <form action="">
            <div>
              <button type="button" className="close-modal" onClick={closeModal}>
                X
              </button>
              <input
                placeholder="Titulo do vídeo"
                name="titulo"
              />
              <input
                placeholder="URL"
                name="url"
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