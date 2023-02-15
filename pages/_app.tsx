import 'tailwindcss/tailwind.css'
import type { AppProps } from 'next/app'
import Layout from '../components/Layout'
import ShopProvider from '../context/ShopContext'
import { useRouter } from 'next/router'
import 'swiper/swiper.scss'
import 'swiper/components/navigation/navigation.scss'
import 'swiper/components/pagination/pagination.scss'

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter()

  return (
    <ShopProvider>
      <Layout>
        <Component {...pageProps} key={router.asPath} />
      </Layout>
    </ShopProvider>
  )
}

export default MyApp
