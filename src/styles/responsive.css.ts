import type { ComplexStyleRule } from '@vanilla-extract/css'

interface ResponsiveStyleProps {
  tablet: ComplexStyleRule
  desktop: ComplexStyleRule
}

export const responsiveStyle = ({ tablet, desktop }: ResponsiveStyleProps) => ({
  '@media': {
    'screen and (min-width: 768px)': tablet,
    'screen and (min-width: 1024px)': desktop,
  },
})

responsiveStyle({
  tablet: { flex: 1, content: 'I will be overridden' },
  desktop: { flexDirection: 'row' },
})
