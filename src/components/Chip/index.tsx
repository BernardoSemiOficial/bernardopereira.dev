import * as S from './chip.css'

interface ChipProps {
  icon?: string
  label: string
  color?: keyof typeof S.color
  background?: keyof typeof S.background
  font?: keyof typeof S.labelStyle
}

export const Chip = ({
  icon,
  label,
  font = 'linkSmall',
  color = 'black',
  background = 'yellow',
}: ChipProps) => {
  return (
    <div className={`${S.base} ${S.color[color]} ${S.background[background]}`}>
      {icon && <span className={S.icon}>{icon}</span>}
      {label && <span className={S.labelStyle[font]}>{label}</span>}
    </div>
  )
}
