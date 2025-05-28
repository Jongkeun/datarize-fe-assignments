import { Customer, Purchase } from '../types'
import { PurchaseCard } from './PurchaseCard'
import { useEffect } from 'react'

type Props = {
  customer: Customer
  purchases: Purchase[]
  totalPrice: number
  onClose: () => void
}

export const CustomerDetail = ({ onClose, customer, purchases, totalPrice }: Props) => {
  // ✨ 모달이 열릴 때 body 스크롤 막기
  useEffect(() => {
    const originalStyle = window.getComputedStyle(document.body).overflow
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = originalStyle
    }
  }, [])

  const handleClose = (e: React.MouseEvent<HTMLDivElement | HTMLButtonElement>) => {
    e.stopPropagation()
    onClose()
  }
  return (
    <div className="relative z-10" aria-labelledby="modal-title" role="dialog" aria-modal="true" onClick={handleClose}>
      <div className="fixed inset-0 bg-gray-500/75 transition-opacity" aria-hidden="true"></div>
      <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
        <div className="flex min-h-full items-center justify-center text-center">
          <div className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
            <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
              <div className="w-full">
                <div className="mt-3 text-left">
                  <div className="bg-white rounded-lg shadow-sm p-4">
                    <div className="mb-6">
                      <h3 className="text-lg font-medium text-gray-800">고객 정보</h3>
                      <div className="mt-2 grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <p className="text-sm text-gray-500">이름</p>
                          <p className="text-sm font-medium">{customer.name}</p>
                        </div>
                        <div>
                          <p className="text-sm text-gray-500">총 구매 횟수</p>
                          <p className="text-sm font-medium">{purchases.length}</p>
                        </div>
                        <div>
                          <p className="text-sm text-gray-500">총 구매 금액</p>
                          <p className="text-sm font-medium">{totalPrice.toLocaleString()} ₩</p>
                        </div>
                      </div>
                    </div>

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
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
