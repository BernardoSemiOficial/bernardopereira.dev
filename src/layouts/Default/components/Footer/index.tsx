import { LinkGeneral } from '@/enums/LinksGeneral'
import { Site } from '@/enums/Site'
import Link from 'next/link'

import * as S from './footer.css'

export const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className={S.container}>
      <p className={S.info}>
        &copy;{currentYear} {Site.DOMAIN}
      </p>
      <Link href={LinkGeneral.TERMS_OF_USE}>
        <a className={S.link} target='_blank' rel='noopener noreferrer'>
          Termos de Uso
        </a>
      </Link>
    </footer>
  )
}
