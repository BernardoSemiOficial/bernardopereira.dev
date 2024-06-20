import { ChangeEventHandler } from 'react'

import { Logo } from '@/components/Logo'
import { createUUID } from '@/helpers/createUUID'
import { TransI18n } from '@/library/next-i18next'
import { useTranslation } from 'next-i18next'
import Link from 'next/link'

import { ToggleTheme } from '../ToggleTheme'
import * as S from './header.css'
import { navigation } from './navigation'

export const Header = () => {
  const { t, i18n } = useTranslation('common')

  const clientSideLanguageChange: ChangeEventHandler<
    HTMLSelectElement
  > = event => {
    i18n.changeLanguage(event.target.value)
  }

  return (
    <header className={S.container}>
      <div className={S.wrapper}>
        <Logo />
        <nav className={S.navigation}>
          {navigation.map(nav => (
            <li className={S.navItem} key={createUUID()}>
              <Link href={nav.href}>
                <TransI18n t={t}>{nav.label}</TransI18n>
              </Link>
            </li>
          ))}
        </nav>
        <div>
          <ToggleTheme />
          <select onChange={clientSideLanguageChange} defaultValue='pt'>
            <option value='pt'>{t('language.portuguese')}</option>
            <option value='en'>{t('language.english')}</option>
            <option value='esp'>{t('language.spanish')}</option>
          </select>
        </div>
      </div>
    </header>
  )
}
