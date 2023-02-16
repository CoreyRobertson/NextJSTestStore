import { getProductsInCollection } from "../lib/shopify.js"
import ProductList from "../components/ProductList"
import Hero from '../components/Hero'
import Head from 'next/head'

export default function Home({ products }) {

  return (
    <div className=''>
      <Head>
        <title>My Next.js Ecommerce Store</title>
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
        <meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1" />
        <meta name="description" content="Modern solution to a headless Shopify store built in Next.js" />

      </Head>
      <Hero />
      <ProductList products={products} />
    </div>
  )
}

export async function getStaticProps() {
  const products = await getProductsInCollection()

  return {
    props: { products }, // will be passed to the page component as props
  }
}

