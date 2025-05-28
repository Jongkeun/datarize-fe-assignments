import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import Header from './components/Header'
import DateRangeSelector from './components/DateRangeSelector'
import PriceRangeChart from './components/PriceRangeChart'
import CustomerList from './components/CustomerList'
import CustomerDetail from './components/CustomerDetail2'
import { useDashboardStore } from './store/dashboardStore'

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: 1,
    },
  },
})

function Dashboard() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Header />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="col-span-1 lg:col-span-2 space-y-6">
            <DateRangeSelector />
            <PriceRangeChart />
          </div>

          <div className="col-span-1 space-y-6 min-w-[400px]">
            <CustomerList />
          </div>
        </div>
      </main>
    </div>
  )
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Dashboard />
    </QueryClientProvider>
  )
}

export default App
