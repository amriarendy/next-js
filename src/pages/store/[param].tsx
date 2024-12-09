import { useRouter } from "next/router";
import useSWR from "swr";
import { fetcher } from "@/lib/swr/fetcher";
import DetailProduct from "@/views/product/detail";
import { typeProduct } from "@/types/product.type";

const StoreDetailPage = ({ product}: { product: typeProduct } ) => {
    const { query } = useRouter();    
    
    // client-side
    // const { data, error, isLoading } = useSWR(`/api/product/${query.param}`, fetcher);
    
    return (
        <>
            <div>
                {/* client-side */}
                {/* <DetailProduct product={isLoading ? [] : data.data } /> */}
                
                {/* server-side */}
                {/* <DetailProduct product={product} /> */}
            </div>
        </>
    )
}

export default StoreDetailPage;

export async function getServerSideProps({ params }: { params: { product: string } }) {
    // console.log("Response: ", params);
    // fetch data
    const res = await fetch(`http://localhost:3000/api/product/${ params }`);
    const response = await res.json();
    
    return {
        props: {
            product: {}
        }
    }
}