import { StyledImage } from "./styles"

interface AvatarProps {
  source: string
}

export function Avatar({ source }: AvatarProps) {
  return (
    <StyledImage src={source} alt="" />
  )
}