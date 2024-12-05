import ProductView from "@/views/product/main";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const StorePage = () => {
    const [isLogin, setIsLogin] = useState(true);
    const [isProducts, setProducts] = useState([]);
    
    const { push } = useRouter();
    useEffect(() => {
        if (!isLogin) {
            push("/auth/login");
        }
    }, [])

    useEffect(()=>{
        fetch('/api/product/').then((res) => res.json()).then((response) => {
            setProducts(response.data);
        });
    }, []);

    return (
        <>
            <div>
                <ProductView products={isProducts} />
            </div>
        </>
    )
}

export default StorePage;