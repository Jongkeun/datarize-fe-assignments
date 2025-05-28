export interface PurchaseFrequencyData {
  date: string
  count: number
}

export interface Customer {
  id: number
  name: string
}

export interface Product {
  id: number
  name: string
  price: number
  imgSrc: string
}

export interface Purchase {
  date: string
  imgSrc: string
  price: number
  product: string
  quantity: number
}

export interface DateRangeFilter {
  from?: string | null
  to?: string | null
}

// export interface CustomerListFilter {
//   sortBy: 'asc' | 'desc' | null
//   nameSearch: string | null
// }
