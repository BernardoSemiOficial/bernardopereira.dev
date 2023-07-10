import { Logo } from '@/components/Logo'
import { createUUID } from '@/helpers/createUUID'
import Link from 'next/link'

import { ToggleTheme } from '../ToggleTheme'
import * as S from './header.css'
import { navigation } from './navigation'

export const Header = () => {
  return (
    <header className={S.container}>
      <div className={S.wrapper}>
        <Logo />
        <nav className={S.navigation}>
          {navigation.map(nav => (
            <li className={S.navItem} key={createUUID()}>
              <Link href={nav.href}>{nav.label}</Link>
            </li>
          ))}
        </nav>
        <ToggleTheme />
      </div>
    </header>
  )
}
