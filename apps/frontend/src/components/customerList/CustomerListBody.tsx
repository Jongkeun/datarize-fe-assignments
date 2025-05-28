import { useCustomers } from '../../hooks/useCustomers'
import { CustomerRow } from './CustomerRow'

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

const EmptyCustomerList = () => {
  return (
    <tr>
      <td colSpan={4} className="px-6 py-4 text-center text-sm text-gray-500">
        고객을 찾을 수 없습니다
      </td>
    </tr>
  )
}
