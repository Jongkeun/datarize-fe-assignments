import { InfoItem } from './InfoItem'

type Props = {
  name: string
  purchaseCount: number
  totalPrice: number
}

export const CustomerInfo = ({ name, purchaseCount, totalPrice }: Props) => {
  return (
    <div className="mb-6">
      <h3 className="text-lg font-medium text-gray-800">고객 정보</h3>
      <div className="mt-2 grid grid-cols-1 md:grid-cols-2 gap-4">
        <InfoItem label="이름" value={name} />
        <InfoItem label="총 구매 횟수" value={purchaseCount} />
        <InfoItem label="총 구매 금액" value={`${totalPrice.toLocaleString()} ₩`} />
      </div>
    </div>
  )
}
