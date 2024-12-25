import Link from "next/link";
import { useRouter } from "next/router";
import styles from "./Login.module.scss"
import { useState } from "react";
import { signIn } from "next-auth/react";

const LoginViews = () => {
    const [ isLoading, setIsLoading ] = useState(false);
    const [ error, setError] = useState("");
    const { push, query } = useRouter();
    const callbackUrl: any = query.callbackUrl || "/";
    const handleSubmit = async (event: any) => {
        event.preventDefault();
        setError("");
        setIsLoading(true)
        try {
            const res = await signIn("credentials", {
                email: event.target.email.value,
                password: event.target.password.value,
                callbackUrl,
            });
            if (!res?.error) {
                setIsLoading(false);
                push(callbackUrl);
            } else {
                setIsLoading(false);
                setError("Email or password is incorect!")
            }
        } catch (error: any) {
            setIsLoading(false);
            setError("Email or password is incorect!")
        }
    }
    return ( 
        <div className={styles.login}>
            <h1 className={styles.login__title}>login Page</h1>
                {error && <p className={styles.login__error}>{error}</p>}
                <div className={styles.login__form}>
                        <form onSubmit={handleSubmit}>
                            <div className={styles.login__form__item}>
                                <label htmlFor="email" className={styles.login__form__item__label}>Email</label>
                                <input id="email" type="email" name="email" placeholder="Email" className={styles.login__form__item__input} />
                            </div>
                            <div className={styles.login__form__item}>
                                <label htmlFor="password" className={styles.login__form__item__label}>Password</label>
                                <input id="password" type="password" name="password" placeholder="Password" className={styles.login__form__item__input} />
                            </div>
                            <button type="submit" className={styles.login__form__item__button} disabled={isLoading}>
                                {isLoading ? "Loading..." : "Login"}
                            </button>
                        </form>
                            <button onClick={()=> signIn("google", {
                                callbackUrl,
                                redirect: false
                            })}
                            className={styles.login__form__item__google}>
                                Sign In With Google
                            </button>
                </div>
                <p className={styles.register__link}>Have already Account? Sign in <Link href={'/auth/register'}>Here</Link></p>
        </div>
    )
}

export default LoginViews;