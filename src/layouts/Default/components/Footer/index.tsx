import { LinkBase } from '@/components/LinkBase'
import { LinkGeneral } from '@/enums/LinksGeneral'
import { Site } from '@/enums/Site'
import { useTranslation } from 'next-i18next'

import * as S from './footer.css'

export const Footer = () => {
  const currentYear = new Date().getFullYear()
  const { t } = useTranslation('common')

  return (
    <footer className={S.container}>
      <p className={S.info}>
        &copy;{currentYear} {Site.DOMAIN}
      </p>
      <span className={S.ball}>•</span>
      <LinkBase
        variant={{ color: 'black', style: 'underline', hover: true }}
        rel='noopener noreferrer'
        newTab={true}
        href={LinkGeneral.TERMS_OF_USE}
      >
        {t('footer.terms')}
      </LinkBase>
    </footer>
  )
}
