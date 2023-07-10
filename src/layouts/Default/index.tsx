import GoogleTagManager from '@/analytics/GoogleTagManager'
import { ThemeColorProvider } from '@/context/ContextThemeColor'

import { Footer } from './components/Footer'
import { Header } from './components/Header'
import * as S from './default.css'
import { DefaultProps } from './types'

export const Default = ({ children }: DefaultProps) => {
  return (
    <ThemeColorProvider>
      <GoogleTagManager>
        <div className={S.container}>
          <div>
            <Header />
            {children}
            <Footer />
          </div>
        </div>
      </GoogleTagManager>
    </ThemeColorProvider>
  )
}
