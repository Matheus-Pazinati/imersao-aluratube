import styled from 'styled-components'

export const VideoContainer = styled.div`
  position: relative;
`

export const StyledVideo = styled.a`
  display: flex;
  flex-direction: column;
  gap: 8px;
  border-radius: 4px;
  img {
    aspect-ratio: 16/9;
    font-weight: 500;
    object-fit: cover;
    width: 100%;
    max-width: 210px;
    height: auto;
  }
  span {
    font-size: 1rem;
    color: ${({ theme }) => theme.textColorBase};
    padding: 0 4px;
  }
`

export const DeleteButton = styled.button`
  border: none;
  background-color: #FF3333;
  cursor: pointer;
  padding: 0.075rem;
  position: absolute;
  border-radius: 8px;
  right: 4px;
  top: 4px;
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    background-color: #FF0000;
  }
`