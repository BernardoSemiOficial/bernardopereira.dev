import { FiAlertCircle } from 'react-icons/fi'

import { useTranslation } from 'next-i18next'
import { useRouter } from 'next/router'

import { Button } from '../Button'
import * as S from './notFound.css'

export const NotFound = () => {
  const router = useRouter()
  const { t } = useTranslation('common')

  const handleGoToLastPage = () => {
    router.back()
  }

  return (
    <section className={S.container}>
      <FiAlertCircle size={100} className={S.errorIcon} />
      <p className={S.errorNumber}>404</p>
      <p className={S.errorTitle}>{t('notFound.title')}</p>
      <div className={S.actions}>
        <Button variant='primary' onClick={handleGoToLastPage}>
          {t('notFound.action')}
        </Button>
      </div>
    </section>
  )
}
