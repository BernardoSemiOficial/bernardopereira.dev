import { ChangeEventHandler } from 'react'

import { Logo } from '@/components/Logo'
import { createUUID } from '@/helpers/createUUID'
import { useTranslation } from 'next-i18next'
import Link from 'next/link'
import { useRouter } from 'next/router'

import { ToggleTheme } from '../ToggleTheme'
import * as S from './header.css'
import { navigation } from './navigation'

export const Header = () => {
  const router = useRouter()
  const { t } = useTranslation('common')

  const languageChange: ChangeEventHandler<HTMLSelectElement> = event => {
    if (!event.target.value) return
    const { pathname, asPath, query } = router
    router.push({ pathname, query }, asPath, { locale: event.target.value })
  }

  return (
    <header className={S.container}>
      <div className={S.wrapper}>
        <Logo />
        <nav className={S.navigation}>
          {navigation.map(nav => (
            <li className={S.navItem} key={createUUID()}>
              <Link href={nav.href}>{t(nav.label)}</Link>
            </li>
          ))}
        </nav>
        <div className={S.headerActions}>
          <ToggleTheme />
          <select
            className={S.selectLanguage}
            onChange={languageChange}
            defaultValue={router.locale}
          >
            <option value='pt'>{t('language.portuguese')}</option>
            <option value='en'>{t('language.english')}</option>
            <option value='esp'>{t('language.spanish')}</option>
          </select>
        </div>
      </div>
    </header>
  )
}
