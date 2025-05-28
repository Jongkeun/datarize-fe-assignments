import { BarChart3, ShoppingBag } from 'lucide-react'

const Header = () => {
  return (
    <header className="bg-white shadow-sm border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex items-center">
            <ShoppingBag className="h-8 w-8 text-blue-600" />
            <div className="ml-2">
              <h1 className="text-xl font-bold text-gray-900">데이터라이즈 쇼핑</h1>
              <p className="text-sm text-gray-500">구매 데이터 대시보드</p>
            </div>
          </div>
          <div className="flex items-center">
            <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800">
              <BarChart3 className="h-4 w-4 mr-1" />
              7월 분석
            </span>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
