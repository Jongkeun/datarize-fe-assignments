import { format } from 'date-fns'
import { Purchase } from '../types'

type Props = {
  purchase: Purchase
}

export const PurchaseCard = ({ purchase }: Props) => {
  const purchaseDate = new Date(purchase.date)
  const formattedDate = format(purchaseDate, 'yyyy년 MM월 dd일')

  return (
    <div className="border border-gray-200 rounded-lg overflow-hidden">
      <div className="bg-gray-50 px-4 py-2 border-b border-gray-200">
        <div className="flex justify-between items-center">
          <p className="text-sm font-medium text-gray-700">구매일: {formattedDate}</p>
          <p className="text-sm font-medium text-gray-700">총액: {purchase.price.toLocaleString()} 원</p>
        </div>
      </div>

      <div className="divide-y divide-gray-200">
        <div className="p-4 flex items-center">
          <div className="h-16 w-16 flex-shrink-0 bg-gray-200 rounded-md overflow-hidden">
            <img
              src={purchase.imgSrc}
              alt={purchase.product}
              className="h-full w-full object-cover"
              onError={(e) => {
                ;(e.target as HTMLImageElement).src = 'https://via.placeholder.com/64?text=이미지+없음'
              }}
            />
          </div>
          <div className="ml-4 flex-1">
            <p className="text-sm font-medium text-gray-900">
              {purchase.product} {purchase.quantity}개
            </p>
            <p className="text-sm text-gray-500">{(purchase.price / purchase.quantity).toLocaleString()} 원</p>
          </div>
        </div>
      </div>
    </div>
  )
}
