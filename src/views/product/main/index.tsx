import Link from "next/link";
import styles from "./Product.module.scss"
import { typeProduct } from "@/types/product.type";

const ProductView = ({ products }: {products: typeProduct[]}) => {
    return (
        <>
            <div className={styles.product}>
                <h2 className={styles.product__title}>List Product</h2>
                <hr/>
                <div className={styles.product__content}>
                    {products.length > 0 ? (
                        <>
                            {products.map((product: typeProduct) => (
                                <Link href={`/store/${product.id}`} key={product.id} className={styles.product__content__item}>
                                    <div className={styles.product__content__item__image}>
                                        <img src={product.image} alt={product.name} />
                                    </div>
                                    <h4 className={styles.product__content__item__name}>{product.name}</h4>
                                    <p className={styles.product__content__item__category}>{product.category}</p>
                                    <p className={styles.product__content__item__price}>{product.price.toLocaleString("id-ID", {
                                        style: "currency",
                                        currency: "IDR"
                                    })}</p>
                                </Link>
                            ))}
                        </>
                    ) : (
                        <div className={styles.product__content__skeleton}>
                            <div className={styles.product__content__skeleton__image} />
                            <div className={styles.product__content__skeleton__name} />
                            <div className={styles.product__content__skeleton__category} />
                            <div className={styles.product__content__skeleton_price} />
                        </div>
                    )}
                </div>
            </div>
        </>
    )
}

export default ProductView;