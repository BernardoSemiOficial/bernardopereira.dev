import { LinkBase } from '@/components/LinkBase'
import { LinkGeneral } from '@/enums/LinksGeneral'
import { TransI18n } from '@/library/next-i18next'
import { useTranslation } from 'next-i18next'

import * as S from './about.css'

export const About = () => {
  const { t } = useTranslation('common')

  return (
    <section className={S.container}>
      <div className={S.wrapper}>
        <p className={S.paragraph}>
          <TransI18n
            i18nKey={'about.paragraph1'}
            values={{ employeer: 'Accountfy' }}
          >
            Trabalho atualmente como Desenvolvedor Front-end Pleno na
            <LinkBase
              variant={{ color: 'yellow', style: 'underline' }}
              rel='noopener noreferrer'
              title={t('labels.companies.visitAccounfy')}
              href={LinkGeneral.ACCOUNTFY_HOME_PAGE}
              newTab={true}
            >
              {{ employeer: 'Accountfy' }}
            </LinkBase>
          </TransI18n>
        </p>
        <p className={S.paragraph}>{t('about.paragraph2')}</p>
        <p className={S.paragraph}>{t('about.paragraph3')}</p>
        <p className={S.paragraph}>
          <TransI18n i18nKey={'about.paragraph4'}>
            Tenho bacharel em Sistemas de Informação na
            <LinkBase
              variant={{ color: 'yellow', style: 'underline' }}
              rel='noopener noreferrer'
              title={t('labels.companies.visitFIAP')}
              href={LinkGeneral.FIAP_HOME_PAGE}
              newTab={true}
            >
              {{ school1: 'FIAP' }}
            </LinkBase>
            (Faculdade de Informática e Administração), onde ganhei uma bolsa de
            estudo de 100% dos valores pagos. Além disso, formado em técnico em
            Informática para Internet na instituição
            <LinkBase
              variant={{ color: 'yellow', style: 'underline' }}
              rel='noopener noreferrer'
              title={t('labels.companies.visitETEC')}
              href={LinkGeneral.ETEC_PQ_BELEM_HOME_PAGE}
              newTab={true}
            >
              {{ school2: 'ETEC Parque Belém' }}
            </LinkBase>
            desde dezembro de 2018.
          </TransI18n>
        </p>
        <p className={S.paragraph}>{t('about.paragraph5')}</p>
        <p className={S.paragraph}>{t('about.paragraph6')}</p>
      </div>
    </section>
  )
}
