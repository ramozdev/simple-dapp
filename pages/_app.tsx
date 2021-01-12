import { AppProps } from 'next/app'
import Head from 'next/head'
import 'tailwindcss/tailwind.css'

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Simple Dapp" />
        <meta name="keywords" content="Dapp Ethereum Nextjs Typescript" />
      </Head>
      <Component {...pageProps} />
    </>
  )
}
