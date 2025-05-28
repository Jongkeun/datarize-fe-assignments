import { format } from 'date-fns'
import { Customer, Purchase, DateRangeFilter, PurchaseFrequencyData } from '../types'

const API_BASE_URL = 'http://localhost:4000/api'

// URL 파라미터 생성 헬퍼 함수
const createUrlWithParams = (endpoint: string, params: Record<string, string>): string => {
  const searchParams = new URLSearchParams()

  Object.entries(params).forEach(([key, value]) => {
    if (value) searchParams.append(key, value)
  })

  return searchParams.toString()
    ? `${API_BASE_URL}${endpoint}?${searchParams.toString()}`
    : `${API_BASE_URL}${endpoint}`
}

// API 응답 처리 헬퍼 함수
const handleApiResponse = async <T>(response: Response, errorMessage: string): Promise<T> => {
  if (!response.ok) {
    throw new Error(errorMessage)
  }
  return response.json()
}

// 가격별 구매 빈도 조회
export const fetchPurchaseFrequency = async (dateRange?: DateRangeFilter): Promise<PurchaseFrequencyData[]> => {
  const params = {
    from: dateRange?.from || '1970-01-01',
    to: dateRange?.to || format(new Date(), 'yyyy-MM-dd'),
  }

  const response = await fetch(createUrlWithParams('/purchase-frequency', params))
  return handleApiResponse<PurchaseFrequencyData[]>(response, 'Failed to fetch purchase frequency data')
}

// 고객 목록 조회
export const fetchCustomers = async (sortBy?: 'asc' | 'desc' | null, name?: string | null): Promise<Customer[]> => {
  const params = {
    sortBy: sortBy || '',
    name: name || '',
  }

  const response = await fetch(createUrlWithParams('/customers', params))
  return handleApiResponse<Customer[]>(response, 'Failed to fetch customers data')
}

// 고객 구매 내역 조회
export const fetchCustomerPurchases = async (customerId: string): Promise<Purchase[]> => {
  const response = await fetch(`${API_BASE_URL}/customers/${customerId}/purchases`)
  return handleApiResponse<Purchase[]>(response, `Failed to fetch purchase history for customer ${customerId}`)
}
