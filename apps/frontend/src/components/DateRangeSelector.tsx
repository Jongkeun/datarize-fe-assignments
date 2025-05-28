import React, { useState, useEffect } from 'react'
import { format } from 'date-fns'
import { useDashboardStore } from '../store/dashboardStore'
import { CalendarIcon } from 'lucide-react'

const DateRangeSelector: React.FC = () => {
  const { dateRange, setDateRange } = useDashboardStore()

  const [fromInputValue, setFromInputValue] = useState<string>(
    dateRange.from ? format(new Date(dateRange.from), 'yyyy-MM-dd') : '2024-07-01',
  )

  const [toInputValue, setToInputValue] = useState<string>(
    dateRange.to ? format(new Date(dateRange.to), 'yyyy-MM-dd') : '2024-07-30',
  )

  const applyFilter = () => {
    let fromDate: string | null = null
    let toDate: string | null = null

    if (fromInputValue) {
      fromDate = fromInputValue
    }

    if (toInputValue) {
      toDate = toInputValue
    }

    setDateRange({ from: fromDate, to: toDate })
  }

  const resetFilter = () => {
    setFromInputValue('')
    setToInputValue('')
    setDateRange({ from: null, to: null })
  }

  // useEffect(() => {
  //   if (dateRange.from) {
  //     setFromInputValue(format(new Date(dateRange.from), 'yyyy-MM-dd'))
  //   } else {
  //     setFromInputValue('')
  //   }

  //   if (dateRange.to) {
  //     setToInputValue(format(new Date(dateRange.to), 'yyyy-MM-dd'))
  //   } else {
  //     setToInputValue(format(new Date(), 'yyyy-MM-dd'))
  //   }
  // }, [dateRange])

  return (
    <div className="bg-white rounded-lg shadow-sm p-4 mb-4">
      <div className="text-lg font-medium text-gray-800 mb-3">날짜 범위 필터</div>
      <div className="flex flex-col sm:flex-row gap-4">
        <div className="relative">
          <label htmlFor="from-date" className="block text-sm font-medium text-gray-700 mb-1">
            시작일
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <CalendarIcon className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="date"
              id="from-date"
              className="block w-full pl-10 pr-3 py-2 text-gray-700 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              value={fromInputValue}
              onChange={(e) => setFromInputValue(e.target.value)}
            />
          </div>
        </div>

        <div className="relative">
          <label htmlFor="to-date" className="block text-sm font-medium text-gray-700 mb-1">
            종료일
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <CalendarIcon className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="date"
              id="to-date"
              className="block w-full pl-10 pr-3 py-2 text-gray-700 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              value={toInputValue}
              onChange={(e) => setToInputValue(e.target.value)}
            />
          </div>
        </div>

        <div className="flex items-end space-x-2">
          <button
            type="button"
            className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors"
            onClick={applyFilter}
          >
            적용
          </button>
          <button
            type="button"
            className="px-4 py-2 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors"
            onClick={resetFilter}
          >
            초기화
          </button>
        </div>
      </div>
    </div>
  )
}

export default DateRangeSelector
