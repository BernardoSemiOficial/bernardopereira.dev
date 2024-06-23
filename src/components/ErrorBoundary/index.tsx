import { Component, ComponentType, ErrorInfo } from 'react'
import { FiAlertCircle } from 'react-icons/fi'

import { useTranslation } from 'next-i18next'
import { useRouter } from 'next/router'

import { Button } from '../Button'
import * as S from './errorBoundary.css'
import { ErrorBoundaryProps, ErrorBoundaryState } from './types'

class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps | Readonly<ErrorBoundaryProps>) {
    super(props)
    // Define a state variable to track whether is an error or not
    this.state = { hasError: false }
  }

  static getDerivedStateFromError() {
    // Update state so the next render will show the fallback UI
    // Documentation: https://react.dev/reference/react/Component#static-getderivedstatefromerror
    return { hasError: true }
  }

  componentDidCatch(error: Error, info: ErrorInfo) {
    // You can use your own error logging service here
    // Documentation: https://react.dev/reference/react/Component#catching-rendering-errors-with-an-error-boundary
    console.error({ error, info })
  }

  render() {
    const { t, router } = this.props

    const handleGoToLastPage = () => {
      router.replace('/', undefined, { locale: router.locale })
      this.setState({ hasError: false })
    }

    if (this.state.hasError) {
      return (
        <section className={S.container}>
          <FiAlertCircle size={100} className={S.errorIcon} />
          <p className={S.errorTitle}>{t('errorBoundary.title')}</p>
          <div className={S.actions}>
            <Button
              type='button'
              variant='primary'
              onClick={handleGoToLastPage}
            >
              {t('errorBoundary.action')}
            </Button>
          </div>
        </section>
      )
    }

    return this.props.children
  }
}

function withInjectProps(Component: ComponentType<ErrorBoundaryProps>) {
  function ComponentWithInjectProps(props: Readonly<ErrorBoundaryProps>) {
    const router = useRouter()
    const { t } = useTranslation('common')
    return <Component {...props} router={router} t={t} />
  }

  return ComponentWithInjectProps
}

export default withInjectProps(ErrorBoundary)
