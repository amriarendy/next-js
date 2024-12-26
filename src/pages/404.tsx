import styles from "@/styles/404.module.scss"
import Image from "next/image"

const Custom404 = () => {
  return (
    <div>
        <div className={styles.error}>
            {/* <img src="/404.png" alt="404 not found" className={styles.error_image} /> */}
            <Image src="/404.png" alt="404" width={600} height={600} className={styles.error_image} />
            <h3>Page Not Found</h3>
        </div>
    </div>
  )
}

export default Custom404