import { TransI18n } from '@/library/next-i18next'
import { useTranslation } from 'next-i18next'

import * as S from './hero.css'

export const Hero = () => {
  const name = 'Bernardo Pereira'
  const { t } = useTranslation('common')

  return (
    <section className={S.container}>
      <div className={S.wrapper}>
        <div className={S.apresentation}>
          <p>{t('hero.saudation')}</p>
          <p>
            <TransI18n i18nKey={'hero.name'}>
              Sou o <span className={S.name}>{{ name }}</span>
            </TransI18n>
          </p>
          <p>{t('hero.position')}</p>
        </div>
        <div className={S.about}>
          <p>{t('hero.descricao')}</p>
        </div>
      </div>
    </section>
  )
}
