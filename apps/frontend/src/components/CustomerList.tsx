import React, { useState, useCallback } from 'react'
import { useDashboardStore } from '../store/dashboardStore'
import { Search, ArrowUpDown } from 'lucide-react'
import { useCustomers } from '../hooks/useCustomers'
import { CustomerRow } from './CustomerRow'

const CustomerList = () => {
  const { customerFilter, setCustomerFilter, selectedCustomerId, setSelectedCustomerId } = useDashboardStore()
  const [searchInput, setSearchInput] = useState(customerFilter.nameSearch || '')
  const { data: customers, isLoading, error } = useCustomers(customerFilter)

  const toggleSort = () => {
    const newSortBy = customerFilter.sortBy === 'asc' ? 'desc' : customerFilter.sortBy === 'desc' ? null : 'asc'
    setCustomerFilter({ ...customerFilter, sortBy: newSortBy })
  }

  const handleRowClick = (customerId: string) => {
    setSelectedCustomerId(customerId === selectedCustomerId ? null : customerId)
  }

  const debouncedSearch = useCallback(
    (value: string) => {
      setCustomerFilter({ ...customerFilter, nameSearch: value || null })
    },
    [customerFilter, setCustomerFilter],
  )

  const handleSearch = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const value = e.target.value
      setSearchInput(value)

      const timer = setTimeout(() => {
        debouncedSearch(value)
      }, 1000)

      return () => clearTimeout(timer)
    },
    [debouncedSearch],
  )

  if (isLoading) {
    return (
      <div className="bg-white rounded-lg shadow-sm p-4">
        <div className="animate-pulse space-y-4">
          <div className="h-8 bg-gray-200 rounded w-1/4"></div>
          <div className="h-10 bg-gray-200 rounded"></div>
          <div className="space-y-2">
            {[...Array(5)].map((_, index) => (
              <div key={index} className="h-16 bg-gray-200 rounded"></div>
            ))}
          </div>
        </div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="bg-red-50 rounded-lg shadow-sm p-4">
        <p className="text-lg font-medium text-red-600">고객 데이터 로딩 중 오류 발생</p>
        <p className="text-sm text-red-500">{error.message}</p>
      </div>
    )
  }

  return (
    <div className="bg-white rounded-lg shadow-sm flex flex-col">
      <div className="p-4 border-b border-gray-200">
        <h3 className="text-lg font-medium text-gray-800">주요 고객</h3>
        <div className="mt-2 flex flex-col sm:flex-row gap-2">
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
          <button
            type="button"
            className={`inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500
              ${customerFilter.sortBy ? 'bg-blue-50 text-blue-700' : 'bg-white text-gray-700'}`}
            onClick={toggleSort}
          >
            <ArrowUpDown className="h-4 w-4 mr-2" />
            {customerFilter.sortBy === 'asc'
              ? '낮은 금액 순'
              : customerFilter.sortBy === 'desc'
              ? '높은 금액 순'
              : '금액 순 정렬'}
          </button>
        </div>
      </div>

      <div className="overflow-y-auto flex flex-1">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider whitespace-nowrap"
              >
                고객 ID
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider whitespace-nowrap"
              >
                이름
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider whitespace-nowrap"
              >
                총 구매 횟수
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider whitespace-nowrap"
              >
                총 구매 금액
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {customers?.length === 0 ? (
              <tr>
                <td colSpan={4} className="px-6 py-4 text-center text-sm text-gray-500">
                  고객을 찾을 수 없습니다
                </td>
              </tr>
            ) : (
              customers?.map((customer) => (
                <CustomerRow
                  key={customer.id}
                  customer={customer}
                  onClick={handleRowClick}
                  isSelected={selectedCustomerId === customer.id.toString()}
                />
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default CustomerList
