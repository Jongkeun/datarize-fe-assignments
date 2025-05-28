import { ArrowUpDown } from 'lucide-react'

type Props = {
  sortBy: 'asc' | 'desc' | null
  toggleSort: () => void
}

export const SortButton = ({ sortBy, toggleSort }: Props) => {
  return (
    <button
      type="button"
      className={`inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500
${sortBy ? 'bg-blue-50 text-blue-700' : 'bg-white text-gray-700'}`}
      onClick={toggleSort}
    >
      <ArrowUpDown className="h-4 w-4 mr-2" />
      {sortBy === 'asc' ? '낮은 금액 순' : sortBy === 'desc' ? '높은 금액 순' : '금액 순 정렬'}
    </button>
  )
}
