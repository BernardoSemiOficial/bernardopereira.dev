import * as S from './chip.css'

interface ChipProps {
  icon?: string
  label: string
}

export const Chip = ({ icon, label }: ChipProps) => {
  return (
    <div className={S.container}>
      {icon && <span className={S.icon}>{icon}</span>}
      {label && <span className={S.label}>{label}</span>}
    </div>
  )
}
