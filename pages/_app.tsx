import type { AppProps } from 'next/app'

import '../app/styles/above-fold.scss'

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default MyApp
