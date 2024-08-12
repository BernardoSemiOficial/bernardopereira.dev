import { ReactElement } from 'react'

import ErrorBoundary from '@/components/ErrorBoundary'
import { NextPage } from 'next'
import type { UserConfig } from 'next-i18next'
import { appWithTranslation } from 'next-i18next'
import nextI18nextConfig from 'next-i18next.config'
import type { AppProps } from 'next/app'
import '../styles/global.css'

// eslint-disable-next-line
export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactElement
}

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}

const emptyInitialI18NextConfig: UserConfig = {
  i18n: {
    defaultLocale: nextI18nextConfig.i18n.defaultLocale,
    locales: nextI18nextConfig.i18n.locales,
  },
}

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? (page => page)
  return getLayout(
    <ErrorBoundary>
      <Component {...pageProps} />
    </ErrorBoundary>
  )
}

export default appWithTranslation(MyApp, emptyInitialI18NextConfig)
