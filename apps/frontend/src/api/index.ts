import { format } from 'date-fns'
import { Customer, Purchase, DateRangeFilter, PurchaseFrequencyData } from '../types'

const API_BASE_URL = 'http://localhost:4000/api'

/**
 * Fetches purchase frequency data based on the given date range
 */
export const fetchPurchaseFrequency = async (dateRange?: DateRangeFilter): Promise<PurchaseFrequencyData[]> => {
  let url = `${API_BASE_URL}/purchase-frequency`

  const params = new URLSearchParams()
  params.append('from', dateRange?.from || '1970-01-01')
  params.append('to', dateRange?.to || format(new Date(), 'yyyy-MM-dd'))

  if (params.toString()) {
    url += `?${params.toString()}`
  }

  const response = await fetch(url)

  if (!response.ok) {
    throw new Error('Failed to fetch purchase frequency data')
  }

  return response.json()
}

/**
 * Fetches customer list with optional sorting and name search
 */
export const fetchCustomers = async (sortBy?: 'asc' | 'desc' | null, name?: string | null): Promise<Customer[]> => {
  let url = `${API_BASE_URL}/customers`

  const params = new URLSearchParams()
  if (sortBy) params.append('sortBy', sortBy)
  if (name) params.append('name', name)

  if (params.toString()) {
    url += `?${params.toString()}`
  }

  const response = await fetch(url)

  if (!response.ok) {
    throw new Error('Failed to fetch customers data')
  }

  return response.json()
}

/**
 * Fetches a specific customer's purchase history
 */
export const fetchCustomerPurchases = async (customerId: string): Promise<Purchase[]> => {
  const url = `${API_BASE_URL}/customers/${customerId}/purchases`

  const response = await fetch(url)

  if (!response.ok) {
    throw new Error(`Failed to fetch purchase history for customer ${customerId}`)
  }

  return response.json()
}
