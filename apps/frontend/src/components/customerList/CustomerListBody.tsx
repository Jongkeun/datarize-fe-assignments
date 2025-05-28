import { useCustomers } from '../../hooks/useCustomers'
import { CustomerRow } from './CustomerRow'
import { EmptyCustomerList } from './EmptyCustomerList'

export const CustomerListBody = () => {
  const { data: customers, isError } = useCustomers({}, { enabled: false })

  return (
    <tbody className="bg-white divide-y divide-gray-200">
      {customers?.length === 0 || isError ? (
        <EmptyCustomerList />
      ) : (
        customers?.map((customer) => <CustomerRow key={customer.id} customer={customer} />)
      )}
    </tbody>
  )
}
