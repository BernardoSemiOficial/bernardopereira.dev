import { useTranslation } from 'next-i18next'
import Image from 'next/image'
import { useRouter } from 'next/router'
import svgUnderConstruction from 'public/assets/under-construction.svg'

import { Button } from '../Button'
import * as S from './underConstruction.css'

export const UnderConstruction = () => {
  const router = useRouter()
  const { t } = useTranslation('common')

  const handleGoToLastPage = () => {
    router.back()
  }

  return (
    <section className={S.container}>
      <figure className={S.alertContainerImage}>
        <Image
          objectFit='cover'
          width={300}
          height={300}
          quality={100}
          className={S.alertImage}
          src={svgUnderConstruction}
          alt={t('labels.common.underConstruction')}
          title={t('labels.common.underConstruction')}
        />
      </figure>
      <p className={S.alertTitle}>{t('underConstruction.title')}</p>
      <p className={S.alertDescription}>{t('underConstruction.description')}</p>
      <p className={S.alertDescription}>
        {t('underConstruction.description2')}
      </p>
      <div className={S.actions}>
        <Button variant='primary' onClick={handleGoToLastPage}>
          {t('underConstruction.action')}
        </Button>
      </div>
    </section>
  )
}
