import { Component, ErrorInfo, ReactElement } from 'react'
import { FiAlertCircle } from 'react-icons/fi'

import { useTranslation } from 'next-i18next'
import { useRouter } from 'next/router'

import { Button } from '../Button'
import * as S from './errorBoundary.css'
import { ErrorBoundaryProps, ErrorBoundaryState } from './types'

class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps | Readonly<ErrorBoundaryProps>) {
    super(props)
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
    const { translation, router } = this.props

    const handleGoToLastPage = () => {
      router.replace('/', undefined, { locale: router.locale })
      this.setState({ hasError: false })
    }

    if (this.state.hasError) {
      return (
        <section className={S.container}>
          <FiAlertCircle size={100} className={S.errorIcon} />
          <p className={S.errorTitle}>{translation.t('errorBoundary.title')}</p>
          <div className={S.actions}>
            <Button
              type='button'
              variant='primary'
              onClick={handleGoToLastPage}
            >
              {translation.t('errorBoundary.action')}
            </Button>
          </div>
        </section>
      )
    }

    return this.props.children
  }
}

function ErrorBoundaryWithInjectProps({
  children,
}: Readonly<{
  children: ReactElement
}>) {
  const router = useRouter()
  const translation = useTranslation('common')
  return (
    <ErrorBoundary
      router={router}
      translation={{
        t: translation.t,
        i18n: translation.i18n,
        tReady: translation.ready,
      }}
    >
      {children}
    </ErrorBoundary>
  )
}

export default ErrorBoundaryWithInjectProps
