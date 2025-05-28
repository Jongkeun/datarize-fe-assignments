import { create } from 'zustand'
import { DateRangeFilter, CustomerListFilter } from '../types'

interface DashboardState {
  dateRange: DateRangeFilter
  customerFilter: CustomerListFilter
  selectedCustomerId: string | null

  setDateRange: (dateRange: DateRangeFilter) => void
  setCustomerFilter: (filter: CustomerListFilter) => void
  setSelectedCustomerId: (id: string | null) => void
}

export const useDashboardStore = create<DashboardState>((set) => ({
  // Initial state
  dateRange: {
    from: null,
    to: null,
  },
  customerFilter: {
    sortBy: null,
    nameSearch: null,
  },
  selectedCustomerId: null,

  // Actions
  setDateRange: (dateRange) => set({ dateRange }),
  setCustomerFilter: (filter) => set({ customerFilter: filter }),
  setSelectedCustomerId: (id) => set({ selectedCustomerId: id }),
}))
