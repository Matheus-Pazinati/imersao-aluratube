import styled from 'styled-components'

export const StyledVideo = styled.a`
  display: flex;
  flex-direction: column;
  gap: 8px;
  border-radius: 4px;
  scroll-snap-align: start;

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
    color: #000;
  }
`