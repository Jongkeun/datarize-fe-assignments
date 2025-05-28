import { useQuery } from '@tanstack/react-query'
import { fetchCustomers } from '../api'
import { CustomerListFilter } from '../types'

export const useCustomers = (filter: CustomerListFilter) => {
  return useQuery({
    queryKey: ['customers', filter],
    queryFn: () => fetchCustomers(filter.sortBy, filter.nameSearch),
    staleTime: 5 * 60 * 1000,
  })
}
