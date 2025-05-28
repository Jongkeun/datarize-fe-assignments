import { create } from 'zustand'
import { DateRangeFilter } from '../types'

interface DashboardState {
  dateRange: DateRangeFilter
  setDateRange: (dateRange: DateRangeFilter) => void
}

export const useDashboardStore = create<DashboardState>((set) => ({
  dateRange: {
    from: null,
    to: null,
  },

  setDateRange: (dateRange) => set({ dateRange }),
}))
