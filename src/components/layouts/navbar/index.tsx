import { signIn, signOut, useSession } from "next-auth/react";
import styles from "./Navbar.module.css"
import Script from "next/dist/client/script";
import Image from "next/image"

const Navbar = () => {
    const { data }: any = useSession();
    console.log(data && data.user.image);
                    
    return (
        <>
            <div className={styles.navbar}>
                <div className="big" id="title"></div>
                <Script id="script-title" strategy="lazyOnload">
                    {`document.getElementById('title').innerHTML = 'Navbar'`}
                </Script>
                <div className={styles.profile} >
                    { data?.user?.image && (
                        <Image src={data.user.image} alt={data.user.fullname} width={30} height={30} className={styles.avatar} />
                    )}
                    {data && data.user.fullname}{" "}
                    {data ? (
                        <button className={styles.button} onClick={ ()=> signOut() }>Sign Out</button>
                    ) : (
                        <button className={styles.button} onClick={ ()=> signIn() }>Sign In</button>
                    )}
                </div>
            </div>
        </>
    )
}

export default Navbar;