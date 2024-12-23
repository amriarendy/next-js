import { signIn, signOut, useSession } from "next-auth/react";
import styles from "./Navbar.module.css"

const Navbar = () => {
    const { data }: any = useSession();
    console.log(data && data.user.image);
                    
    return (
        <>
            <div className={styles.navbar}>
                <div className="big">Navbar</div>
                <div>
                    {data && data.user.fullname}{" "}
                    { data && data.user.image && (
                        <img src={data.user.image} alt={data.user.fullname} width={100} height={100} />
                    )}
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