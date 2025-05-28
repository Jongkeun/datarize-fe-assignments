import { Purchase } from '../../types'
import { PurchaseCard } from '../customerList/PurchaseCard'

type Props = {
  purchases: Purchase[]
}

export const PurchaseHistory = ({ purchases }: Props) => {
  return (
    <>
      <h3 className="text-lg font-medium text-gray-800 mb-5">구매 내역</h3>
      {purchases.length === 0 ? (
        <p className="text-gray-500">구매 내역이 없습니다</p>
      ) : (
        <div className="space-y-6 overflow-y-auto max-h-[50vh]">
          {purchases.map((purchase) => (
            <PurchaseCard key={JSON.stringify(purchase)} purchase={purchase} />
          ))}
        </div>
      )}
    </>
  )
}
