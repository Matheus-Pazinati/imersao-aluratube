import styled from 'styled-components'

export const StyledHeader = styled.div`
  .header-cover {
    width: 100%;
    height: 15rem;
    margin-top: 56px;
    object-fit: cover;
  }
`

export const StyledProfile = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 1rem;

  h2 {
    font-size: 1.5rem;
    font-weight: bold;
  }

  p {
    color: #666666;
  }
`