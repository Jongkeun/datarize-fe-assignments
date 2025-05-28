import { Search } from 'lucide-react'

type Props = {
  searchInput: string
  handleSearch: (e: React.ChangeEvent<HTMLInputElement>) => void
}

export const SearchInput = ({ searchInput, handleSearch }: Props) => {
  return (
    <div className="relative flex-grow">
      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
        <Search className="h-5 w-5 text-gray-400" />
      </div>
      <input
        type="text"
        placeholder="고객 이름으로 검색..."
        className="block w-full pl-10 pr-3 py-2 text-gray-700 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
        value={searchInput}
        onChange={handleSearch}
      />
    </div>
  )
}
