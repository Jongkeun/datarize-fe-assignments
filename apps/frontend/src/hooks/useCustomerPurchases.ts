import { useQuery } from '@tanstack/react-query'
import { fetchCustomerPurchases } from '../api'

export const useCustomerPurchases = (customerId: string | null) => {
  return useQuery({
    queryKey: ['customerPurchases', customerId],
    queryFn: () => fetchCustomerPurchases(customerId!),
    enabled: !!customerId,
    staleTime: 5 * 60 * 1000,
  })
}
