import {
  MediaQueries,
  Screens,
  keyMediaQueries,
  keyScreens,
} from '@/enums/screens'
import type { ComplexStyleRule } from '@vanilla-extract/css'

interface GreaterThanProps {
  xs?: ComplexStyleRule
  sm?: ComplexStyleRule
  md?: ComplexStyleRule
  lg?: ComplexStyleRule
  xl?: ComplexStyleRule
  xlg?: ComplexStyleRule
  fhd?: ComplexStyleRule
}

export const greaterThan = (screens: GreaterThanProps) => {
  const screenEntries = Object.entries(screens) as [
    keyScreens,
    ComplexStyleRule
  ][]
  const mediaQueries = screenEntries.reduce((mdQuery, [key, style]) => {
    const keyUpper = key.toUpperCase() as keyScreens
    const rule =
      `screen and (min-width: ${Screens[keyUpper]})` as keyMediaQueries
    mdQuery[rule] = style
    return mdQuery
  }, {} as MediaQueries)

  return {
    '@media': mediaQueries,
  }
}
