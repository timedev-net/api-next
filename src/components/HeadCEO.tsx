import Head from 'next/head'

export default function HeadCEO({title}) {
  // console.log(title)
  return (
  <Head>
    <title>{title}</title>
    <link rel="icon" href="/favicon.ico" />
  </Head>
  )}