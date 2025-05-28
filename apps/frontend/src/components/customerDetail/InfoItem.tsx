type Props = {
  label: string
  value: React.ReactNode
}

export const InfoItem = ({ label, value }: Props) => {
  return (
    <div>
      <p className="text-sm text-gray-500">{label}</p>
      <p className="text-sm font-medium">{value}</p>
    </div>
  )
}
