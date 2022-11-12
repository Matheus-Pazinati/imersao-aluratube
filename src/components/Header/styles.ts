import styled from 'styled-components'

interface BannerProps {
  banner: string
}

export const StyledHeader = styled.div`
    width: 100%;
    margin-top: 56px;
`

export const StyledBanner= styled.div<BannerProps>`
  background: url(${({ banner }) => banner});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  height: 230px;
  width: 100%;
`

export const StyledProfile = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 1rem;
  background-color: ${({ theme }) => theme.backgroundLevel1};
  h2 {
    font-size: 1.5rem;
    font-weight: bold;
  }

  p {
    color: #666666;
  }
`