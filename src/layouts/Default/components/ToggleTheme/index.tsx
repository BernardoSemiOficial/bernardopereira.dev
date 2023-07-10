import { useContext, useEffect } from 'react'

import { themeColorContext } from '@/context/ContextThemeColor'
import { ToggleRDX } from '@/library/radix'

import * as S from './toggleTheme.css'

export const ToggleTheme = () => {
  const { colorMode, toggleThemeColor } = useContext(themeColorContext)

  useEffect(() => {
    console.log(colorMode)
  }, [colorMode])

  return (
    <ToggleRDX.Root className={S.toggleRoot} onPressedChange={toggleThemeColor}>
      <div className={S.toggleBallVariants[colorMode]} />
    </ToggleRDX.Root>
  )
}
