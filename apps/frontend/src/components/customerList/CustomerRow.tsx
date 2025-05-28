import { useCustomerPurchases } from '../../hooks/useCustomerPurchases'
import { Customer } from '../../types'
import { CustomerDetailModal } from '../customerDetail/CustomerDetailModal'
import { useState } from 'react'

type Props = {
  customer: Customer
}
export const CustomerRow = ({ customer }: Props) => {
  const [selectedCustomerId, setSelectedCustomerId] = useState<string | null>(null)
  const { data: customerPurchases } = useCustomerPurchases(customer.id.toString())
  const totalPrice = customerPurchases?.reduce((acc, purchase) => acc + purchase.price, 0)
  const isSelected = selectedCustomerId === customer.id.toString()

  return (
    <>
      <tr
        key={customer.id}
        onClick={() => setSelectedCustomerId(customer.id.toString())}
        className={`cursor-pointer transition-colors hover:bg-blue-50 ${isSelected ? 'bg-blue-50' : ''}`}
      >
        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{customer.id}</td>
        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{customer.name}</td>
        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{customerPurchases?.length}</td>
        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{totalPrice?.toLocaleString()} 원</td>
      </tr>
      {selectedCustomerId === customer.id.toString() && (
        <CustomerDetailModal
          onClose={() => setSelectedCustomerId(null)}
          customer={customer}
          purchases={customerPurchases || []}
          totalPrice={totalPrice || 0}
        />
      )}
    </>
  )
}
