import ProductView from "@/views/product/main"
import { typeProduct } from "@/types/product.type";

const ProductPage = (props: {products: typeProduct[] }) => {
    const { products } = props
      return (
        <div>
            <ProductView products={products} />
        </div>
      )
    }
    
    export default ProductPage

    export async function getStaticProps() {
        // fetch data
        const res = await fetch('http://localhost:3000/api/product');
        const response = await res.json();
        return {
          props: {
              products: response.data
          },
          // revalidate: 10,
    }
}