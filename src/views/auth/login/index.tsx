import Link from "next/link";
import { useRouter } from "next/router";
import styles from "./Login.module.scss"

const LoginViews = () => {
    const { push } = useRouter();
    const handleLogin = () => {
        push("/dashboard");
    };
    return ( 
        <div className={styles.login}>
            <h1 className="text-3xl">Login Page</h1>
            <button onClick={() => handleLogin()}>Login</button>
            <p style={{color: "red", border: "1px solid red"}}>Don't have account <Link href={"/auth/register"}>Register</Link></p>
        </div>
    )
}

export default LoginViews;