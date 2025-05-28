import { useCustomerPurchases } from '../hooks/useCustomerPurchases'
import { Customer } from '../types'
import { CustomerDetail } from './CustomerDetail'
import { useDashboardStore } from '../store/dashboardStore'

type Props = {
  customer: Customer
  onClick: (id: string) => void
  isSelected: boolean
}
export const CustomerRow = ({ customer, onClick, isSelected }: Props) => {
  const { selectedCustomerId, setSelectedCustomerId } = useDashboardStore()
  const { data: customerPurchases } = useCustomerPurchases(customer.id.toString())
  const totalPrice = customerPurchases?.reduce((acc, purchase) => acc + purchase.price, 0)

  console.log(customerPurchases)
  return (
    <>
      <tr
        key={customer.id}
        onClick={() => onClick(customer.id.toString())}
        className={`cursor-pointer transition-colors hover:bg-blue-50 ${isSelected ? 'bg-blue-50' : ''}`}
      >
        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{customer.id}</td>
        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{customer.name}</td>
        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{customerPurchases?.length}</td>
        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{totalPrice?.toLocaleString()} 원</td>
      </tr>
      {selectedCustomerId === customer.id.toString() && (
        <CustomerDetail
          onClose={() => setSelectedCustomerId(null)}
          customer={customer}
          purchases={customerPurchases || []}
          totalPrice={totalPrice || 0}
        />
      )}
    </>
  )
}
