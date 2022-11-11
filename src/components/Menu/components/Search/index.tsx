import { StyledSearch } from './styles'

import { useContext } from 'react'

import { SearchContext } from '../../../../contexts/SearchContext'

export default function Search() {
  const { setPlaylistFilter } = useContext(SearchContext)
  return (
      <StyledSearch>
          <input 
            type="text" 
            onChange={(e) => setPlaylistFilter(e.target.value)}
          />
          <button>
              🔎
          </button>
      </StyledSearch>
  )
}