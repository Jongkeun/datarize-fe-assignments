import { Customer } from '../../types'
import { Purchase } from '../../types'
import { useModalScrollLock } from '../../hooks/utils/useModalScrollLock'
import { CustomerInfo } from './CustomerInfo'
import { PurchaseHistory } from './PurchaseHistory'
import { Modal } from '../Modal'

// 구매 내역 섹션 분리

type Props = {
  customer: Customer
  purchases: Purchase[]
  totalPrice: number
  onClose: () => void
}

export const CustomerDetailModal = ({ onClose, customer, purchases, totalPrice }: Props) => {
  useModalScrollLock()

  return (
    <Modal onClose={onClose}>
      <CustomerInfo name={customer.name} purchaseCount={purchases.length} totalPrice={totalPrice} />
      <PurchaseHistory purchases={purchases} />
    </Modal>
  )
}
