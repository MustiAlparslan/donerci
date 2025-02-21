import Head from 'next/head'
import '../styles/global.css'

export default function MyApp ({ Component, pageProps }) {
  const pageTitle = Component.title || 'Mi AI'

  return (
    <>
      <Head>
        <title>Catering Firması - Lezzetli ve Özel Hizmetler</title>
        <meta
          name='description'
          content='Özel etkinlikleriniz için profesyonel catering hizmetleri sunuyoruz. Lezzet ve kaliteyi deneyimleyin.'
        />
        <meta
          name='keywords'
          content='catering, özel davetler, yemek hizmeti, organizasyon'
        />
        <meta name='author' content='Catering Firması' />
        <meta name='robots' content='index, follow' />
        <link rel='icon' href='/images/catering-logo.png' type='image/png' />
      </Head>

      <Component {...pageProps} />
    </>
  )
}
