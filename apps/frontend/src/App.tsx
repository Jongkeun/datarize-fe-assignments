import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { Header } from './components/Header'
import { DateRangeSelector } from './components/purchaseFrequency/DateRangeSelector'
import { PriceRangeChart } from './components/purchaseFrequency/PriceRangeChart'
import { CustomerList } from './components/customerList/CustomerList'
import { ErrorBoundary } from './components/ErrorBoundary'

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 0,
    },
  },
})

function App() {
  return (
    <ErrorBoundary>
      <QueryClientProvider client={queryClient}>
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
      </QueryClientProvider>
    </ErrorBoundary>
  )
}

export default App
