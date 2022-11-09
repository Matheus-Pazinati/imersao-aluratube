import { VideoCard } from "../VideoCard";
import { StyledPlaylist} from "./styles";

interface PlaylistProps {
  title: string
}

export function Playlist({ title }: PlaylistProps) {
 return (
  <StyledPlaylist>
    <h2>{title}</h2>
    <ul>
      <li><VideoCard /></li>
      <li><VideoCard /></li>
      <li><VideoCard /></li>
      <li><VideoCard /></li>
      <li><VideoCard /></li>
      <li><VideoCard /></li>
      <li><VideoCard /></li>
      <li><VideoCard /></li>
      <li><VideoCard /></li>
    </ul>
  </StyledPlaylist>
 ) 
}