import { getProductsInCollection } from "../lib/shopify.js"
import ProductList from "../components/ProductList"

export default function Home({ products }) {
  console.log(products)

  return (
    <div className='text-4xl'>
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

