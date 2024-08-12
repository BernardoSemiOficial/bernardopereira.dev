import { ReactElement } from 'react'

import type { WithTranslation } from 'next-i18next'
import { NextRouter } from 'next/router'

export interface ErrorBoundaryProps {
  children: ReactElement
  router: NextRouter
  translation: WithTranslation
}

export interface ErrorBoundaryState {
  hasError: boolean
}
