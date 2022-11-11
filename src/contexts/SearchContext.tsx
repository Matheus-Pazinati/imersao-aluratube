import { createContext, ReactNode, useState } from 'react'

interface SearchContextProps {
  searchFilter: string;
  setPlaylistFilter: (value: string) => void;
}

interface SearchContextProviderProps {
  children: ReactNode
}

export const SearchContext = createContext({} as SearchContextProps)

export function SearchContextProvider({ children }: SearchContextProviderProps) {
  const [searchFilter, setSearchFilter] = useState('')

  function setPlaylistFilter(value: string) {
    setSearchFilter(value)
  }

  return (
    <SearchContext.Provider value={{ searchFilter, setPlaylistFilter }}>
      {children}
    </SearchContext.Provider>
  )
}