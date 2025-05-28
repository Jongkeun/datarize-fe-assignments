import { useCallback, useEffect, useState } from 'react'
import { useCustomers } from '../../../hooks/useCustomers'
import { useDebounce } from '../../../hooks/utils/useDebounce'
import { SearchInput } from './SearchInput'
import { SortButton } from './SortButton'

export const CustomerSearchBar = () => {
  const [sortBy, setSortBy] = useState<'asc' | 'desc' | null>(null)
  const [searchInput, setSearchInput] = useState('')
  const debouncedSearch = useDebounce(searchInput, 500)
  const { refetch } = useCustomers({ sortBy, nameSearch: debouncedSearch })

  useEffect(() => {
    refetch()
  }, [debouncedSearch, sortBy])

  const toggleSort = () => {
    const newSortBy = sortBy === 'asc' ? 'desc' : sortBy === 'desc' ? null : 'asc'
    setSortBy(newSortBy)
  }

  const handleSearch = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    setSearchInput(value)
  }, [])

  return (
    <div className="p-4 border-b border-gray-200">
      <h3 className="text-lg font-medium text-gray-800">주요 고객</h3>
      <div className="mt-2 flex flex-col sm:flex-row gap-2">
        <SearchInput searchInput={searchInput} handleSearch={handleSearch} />
        <SortButton sortBy={sortBy} toggleSort={toggleSort} />
      </div>
    </div>
  )
}
