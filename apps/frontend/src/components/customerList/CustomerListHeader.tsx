export const CustomerListHeader = () => {
  const headers = [
    { label: '고객 ID', key: 'id' },
    { label: '이름', key: 'name' },
    { label: '총 구매 횟수', key: 'totalPurchases' },
    { label: '총 구매 금액', key: 'totalAmount' },
  ]

  return (
    <thead className="bg-gray-50">
      <tr>
        {headers.map((header) => (
          <Th key={header.key}>{header.label}</Th>
        ))}
      </tr>
    </thead>
  )
}

const Th = ({ children }: { children: React.ReactNode }) => {
  return (
    <th
      scope="col"
      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider whitespace-nowrap"
    >
      {children}
    </th>
  )
}
