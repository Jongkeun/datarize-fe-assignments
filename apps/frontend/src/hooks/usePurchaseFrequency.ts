import { useQuery } from '@tanstack/react-query'
import { fetchPurchaseFrequency } from '../api'
import { DateRangeFilter } from '../types'

export const usePurchaseFrequency = (dateRange: DateRangeFilter) => {
  return useQuery({
    queryKey: ['purchaseFrequency', dateRange],
    queryFn: () => fetchPurchaseFrequency(dateRange),
    staleTime: 5 * 60 * 1000,
  })
}
