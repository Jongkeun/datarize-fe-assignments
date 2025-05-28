import { useQuery, UseQueryOptions } from '@tanstack/react-query'
import { fetchCustomers } from '../api'
import { Customer } from '../types'

export const useCustomers = (
  filter: { sortBy?: 'asc' | 'desc' | null; nameSearch?: string | null },
  options?: Omit<UseQueryOptions<Customer[], Error>, 'queryKey' | 'queryFn'>,
) => {
  return useQuery({
    queryKey: ['customers'],
    queryFn: () => fetchCustomers(filter.sortBy, filter.nameSearch),
    ...options,
  })
}
