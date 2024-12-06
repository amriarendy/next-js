import { useRouter } from "next/router";
import useSWR from "swr";
import { fetcher } from "@/lib/swr/fetcher";
import DetailProduct from "@/views/product/detail";

const StoreDetailPage = () => {
    const { query } = useRouter();
    
    const { data, error, isLoading } = useSWR(`/api/product/${query.param}`, fetcher);
    
    return (
        <>
            <div>
                <DetailProduct product={isLoading ? [] : data.data } />
            </div>
        </>
    )
}

export default StoreDetailPage;