import { CustomerListHeader } from './CustomerListHeader'
import { CustomerListBody } from './CustomerListBody'
import { CustomerSearchBar } from './searchBar/CustomerSearchBar'

export const CustomerList = () => {
  return (
    <div className="bg-white rounded-lg shadow-sm flex flex-col max-h-[calc(100vh-7rem)]">
      <CustomerSearchBar />

      <div className="overflow-y-auto flex flex-1">
        <table className="min-w-full divide-y divide-gray-200">
          <CustomerListHeader />
          <CustomerListBody />
        </table>
      </div>
    </div>
  )
}
