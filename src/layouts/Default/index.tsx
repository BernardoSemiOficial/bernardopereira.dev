import { container } from './default.css'
import { DefaultProps } from './types'

export const Default = ({ children }: DefaultProps) => {
  return <section className={container}>{children}</section>
}
