import { useRouter } from "next/router";
import useSWR from "swr";
import { fetcher } from "@/lib/swr/fetcher";
import DetailProduct from "@/views/product/detail";
import { typeProduct } from "@/types/product.type";

const StoreDetailPage = ({ product}: { product: typeProduct } ) => {
    const { query } = useRouter();    
    
    // Client Side
    // const { data, error, isLoading } = useSWR(`/api/product/${query.param}`, fetcher);
    
    return (
        <>
            <div>
                {/* client-side */}
                {/* <DetailProduct product={isLoading ? {} : data.data } /> */}
                
                {/* server-side & static-side */}
                <DetailProduct product={product} />
            </div>
        </>
    )
}

export default StoreDetailPage;

// Server Side
// export async function getServerSideProps({ params }: { params: { param: string }; }) {
//     // fetch data
//     const res = await fetch(`http://localhost:3000/api/product/${ params.param }`);
//     const response = await res.json();
    
//     return {
//         props: {
//             product: response.data
//         }
//     }
// }

// Static Side
export async function getStaticPaths() {
    const res = await fetch('http://localhost:3000/api/product');
    const response = await res.json();

    const paths = response.data.map((product: typeProduct) => ({
        params: {
            param: product.id
        },
    }));
    
    return {
        paths, fallback: false
    }
}

export async function getStaticProps({ params }: { params: { param: string }; }) {
    // fetch data
    const res = await fetch(`http://localhost:3000/api/product/${ params.param }`);
    const response = await res.json();
    
    return {
        props: {
            product: response.data
        }
    }
}