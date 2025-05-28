import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts'
import { useDashboardStore } from '../store/dashboardStore'
import { usePurchaseFrequency } from '../hooks/usePurchaseFrequency'

const PriceRangeChart = () => {
  const { dateRange } = useDashboardStore()
  const {
    data: purchaseFrequencyData,
    isLoading: isPurchaseFrequencyLoading,
    error: purchaseFrequencyError,
  } = usePurchaseFrequency(dateRange)

  const isLoading = isPurchaseFrequencyLoading
  const error = purchaseFrequencyError

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-64 bg-gray-50 rounded-lg shadow-sm">
        <div className="animate-pulse">
          <div className="text-lg text-gray-600">차트 데이터 로딩 중...</div>
        </div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="flex justify-center items-center h-64 bg-red-50 rounded-lg shadow-sm">
        <div className="text-red-600">
          <p className="text-lg font-medium">차트 데이터 로딩 중 오류 발생</p>
          <p className="text-sm">{error.message}</p>
        </div>
      </div>
    )
  }

  if (!purchaseFrequencyData || purchaseFrequencyData.length === 0) {
    return (
      <div className="flex justify-center items-center h-64 bg-gray-50 rounded-lg shadow-sm">
        <div className="text-gray-600">
          <p className="text-lg">데이터가 없습니다</p>
          <p className="text-sm">필터를 조정해보세요</p>
        </div>
      </div>
    )
  }

  return (
    <div className="h-96 bg-white rounded-lg shadow-sm p-4">
      <h3 className="text-lg font-medium text-gray-800 mb-4">가격대별 구매 빈도</h3>
      <ResponsiveContainer width="100%" height="90%">
        <BarChart data={purchaseFrequencyData} margin={{ top: 20, right: 30, left: 20, bottom: 60 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="#f3f4f6" />
          <XAxis dataKey="range" angle={-45} textAnchor="end" tick={{ fontSize: 12 }} height={60} />
          <YAxis tick={{ fontSize: 12 }} width={40} tickFormatter={(value) => value.toLocaleString()} />
          <Tooltip
            formatter={(value) => [`${value}회 구매`, '빈도']}
            contentStyle={{
              backgroundColor: 'rgba(255, 255, 255, 0.95)',
              borderRadius: '6px',
              border: '1px solid #e5e7eb',
              boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)',
            }}
          />
          <Legend />
          <Bar
            dataKey="count"
            name="구매 횟수"
            fill="#14b8a6"
            barSize={40}
            radius={[4, 4, 0, 0]}
            animationDuration={1000}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}

export default PriceRangeChart
