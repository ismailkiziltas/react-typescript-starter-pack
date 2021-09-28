// Next
import type { AppProps } from 'next/app'

// Style
import { ThemeProvider } from 'styled-components'
import GlobalStyle from 'theme/globalStyle';
import Theme from 'theme'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={Theme}>
      <GlobalStyle />
      <Component {...pageProps} />
    </ThemeProvider>

  )
}
export default MyApp
