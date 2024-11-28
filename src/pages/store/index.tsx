import { useRouter } from "next/router";
import { useEffect, useState } from "react";

type typeProduct = {
      id: number,
      name: string,
      price: number,
      size: string
  };

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
    } )
    return (
        <>
            <div>
                {isProducts.map((product: typeProduct) => (
                    <div key={product.id}>{product.name}</div>
                ))}
            </div>
        </>
    )
}

export default StorePage;