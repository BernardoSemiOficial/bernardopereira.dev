import { ReactElement } from 'react'

import type { WithTranslation } from 'next-i18next'
import { WithRouterProps } from 'next/dist/client/with-router'

export interface ErrorBoundaryProps extends WithTranslation, WithRouterProps {
  children: ReactElement
}

export interface ErrorBoundaryState {
  hasError: boolean
}
