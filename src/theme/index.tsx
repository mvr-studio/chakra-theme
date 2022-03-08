import { extendTheme } from '@chakra-ui/react'

const theme = extendTheme({
  fonts: {
    body: '"Inter", system-ui, sans-serif',
    heading: '"Inter", Georgia, serif',
    mono: '"Inter", Menlo, monospace'
  },
  colors: {
    primary: {
      50: '#dcfff6',
      100: '#b5f6e6',
      200: '#8bf0d5',
      300: '#60e9c5',
      400: '#36e2b4',
      500: '#1dc99b',
      600: '#0e9c78',
      700: '#037055',
      800: '#004433',
      900: '#001810'
    }
  }
})

export default theme
