import { createGlobalTheme } from '@vanilla-extract/css'

const fontFamily = 'Ubuntu, sans-serif'
const fontWeight = {
  regular: '400',
  bold: '700',
}
const fontStyle = {
  italic: 'italic',
  normal: 'normal',
}
const fontLetterSpacing = {
  large: '0.08em',
  medium: '0.025em',
  small: '0.008em',
}

export const vars = createGlobalTheme(':root', {
  color: {
    white: {
      900: '#ffffff',
    },
    black: {
      900: '#000000',
    },
    brown: {
      900: '#332A11',
    },
    gray: {
      50: '#f9fafb',
      100: '#f3f4f6',
      200: '#e5e7eb',
      300: '#d1d5db',
      400: '#9ca3af',
      500: '#6b7280',
      600: '#4b5563',
      700: '#374151',
      800: '#1f2937',
      900: '#111827',
    },
    yellow: {
      50: '#fefce8',
      100: '#fef9c3',
      200: '#fef08a',
      300: '#fde047',
      400: '#facc15',
      500: '#eab308',
      600: '#ca8a04',
    },
    amber: {
      500: '#f59e0b',
      600: '#d97706',
      700: '#b45309',
      800: '#92400e',
      900: '#78350f',
    },
  },
  container: {
    max: '1140px',
  },
  transition: {
    ease: '0.3s ease',
    linear: '1s linear',
  },
  borderRadius: {
    small: '4px',
    xsmall: '8px',
    xxsmall: '12px',
  },
  boxShadow: {
    small: '0px 10px 5px -2px rgba(0, 0, 0, 0.1)',
  },
  font: {
    family: fontFamily,
    style: fontStyle,
    letterSpacing: fontLetterSpacing,
    weightRegular: fontWeight.regular,
    weightBold: fontWeight.bold,
    headlineLarge: `${fontWeight.bold} 2em/2.5em ${fontFamily}`,
    headlineMedium: `${fontWeight.bold} 1.75em/2.25em ${fontFamily}`,
    headlineSmall: `${fontWeight.bold} 1.625em/2.25em ${fontFamily}`,
    headlineSmallX: `${fontWeight.bold} 1.375em/1.75em ${fontFamily}`,
    subtitleLarge: `${fontWeight.bold} 1.25em/1.75em ${fontFamily}`,
    subtitleMedium: `${fontWeight.bold} 1.125em/1.5em ${fontFamily}`,
    bodyLarge: `${fontWeight.regular} 1.125em/1.75em ${fontFamily}`,
    bodyMedium: `${fontWeight.regular} 1em/1.5em ${fontFamily}`,
    bodySmall: `${fontWeight.regular} 0.875em/1.5em ${fontFamily}`,
    linkLarge: `${fontWeight.bold} 1.125em/1.75em ${fontFamily}`,
    linkMedium: `${fontWeight.bold} 1em/1.5em ${fontFamily}`,
    linkSmall: `${fontWeight.bold} 0.875em/1.5em ${fontFamily}`,
    textCaption: `${fontWeight.regular} 0.75em/1.25em ${fontFamily}`,
  },
  screens: {
    xs: '360px',
    sm: '480px',
    md: '768px',
    lg: '976px',
    xl: '1280px',
    xlg: '1440px',
    fhd: '1920px',
  },
  spacing: {
    none: '0',
    small: '4px',
    xsmall: '8px',
    xxsmall: '12px',
    xxxsmall: '16px',
    medium: '20px',
    xmedium: '24px',
    xxmedium: '28px',
    xxxmedium: '32px',
    large: '36px',
    xlarge: '40px',
    xxlarge: '44px',
    xxxlarge: '48px',
  },
})
