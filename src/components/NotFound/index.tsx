import { FiAlertCircle } from 'react-icons/fi'

import { useRouter } from 'next/router'

import { Button } from '../Button'
import * as S from './notFound.css'

export const NotFound = () => {
  const router = useRouter()

  const handleGoToLastPage = () => {
    router.back()
  }

  return (
    <section className={S.container}>
      <FiAlertCircle size={100} className={S.errorIcon} />
      <p className={S.errorNumber}>404</p>
      <p className={S.errorTitle}>Página não encontrada</p>
      <div className={S.actions}>
        <Button variant='primary' onClick={handleGoToLastPage}>
          Voltar para a página anterior
        </Button>
      </div>
    </section>
  )
}
