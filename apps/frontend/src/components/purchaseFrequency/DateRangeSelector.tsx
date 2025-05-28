import { useState } from 'react'
import { formatDate } from 'date-fns'
import { DateInput } from './DateInput'
import { useDashboardStore } from '../../store/dashboardStore'

const DEFAULT_FROM_DATE = '2024-07-01'
const DEFAULT_TO_DATE = '2024-07-30'

export const DateRangeSelector = () => {
  const { dateRange, setDateRange } = useDashboardStore()

  const [fromInputValue, setFromInputValue] = useState<string>(
    dateRange.from ? formatDate(dateRange.from, 'yyyy-MM-dd') : DEFAULT_FROM_DATE,
  )

  const [toInputValue, setToInputValue] = useState<string>(
    dateRange.to ? formatDate(dateRange.to, 'yyyy-MM-dd') : DEFAULT_TO_DATE,
  )

  const applyFilter = () => {
    setDateRange({
      from: fromInputValue || null,
      to: toInputValue || null,
    })
  }

  return (
    <div className="bg-white rounded-lg shadow-sm p-4 mb-4">
      <div className="text-lg font-medium text-gray-800 mb-3">날짜 범위 필터</div>
      <div className="flex flex-col sm:flex-row gap-4">
        <DateInput label="시작일" value={fromInputValue} onChange={setFromInputValue} />
        <DateInput label="종료일" value={toInputValue} onChange={setToInputValue} />
        <div className="flex items-end space-x-2">
          <button
            type="button"
            className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors"
            onClick={applyFilter}
          >
            적용
          </button>
        </div>
      </div>
    </div>
  )
}
