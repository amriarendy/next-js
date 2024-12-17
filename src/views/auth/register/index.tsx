import Link from "next/link"
import styles from "./Register.module.scss"
import { register } from "module"
import { useEffect, useState } from "react"
import { useRouter } from "next/router"

const RegisterView = () => {
    const [ isLoading, setIsLoading ] = useState(false);
    const [ error, setError] = useState("");
    const { push } = useRouter();

    const handleSubmit = async (event: any) => {
        event.preventDefault();
        setError("");
        setIsLoading(true)
        const data = {
            email: event.target.email.value,
            fullname: event.target.fullname.value,
            password: event.target.password.value,
        }
        const result = await fetch("/api/register", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data),
        });
        if (result.status === 201) {
            event.target.reset();
            setIsLoading(false);
            push("/auth/login");
        } else {
            setIsLoading(false);
            setError(result.status === 400 ? "Email already exists": "");
        }
    }
    return (
        <>
            <div className={styles.register}>
                <h1 className={styles.register__title}>Register Page</h1>
                    {error && <p className={styles.register__error}>{error}</p>}
                    <div className={styles.register__form}>
                            <form onSubmit={handleSubmit}>
                                <div className={styles.register__form__item}>
                                    <label htmlFor="email" className={styles.register__form__item__label}>Email</label>
                                    <input id="email" type="email" name="email" placeholder="Email" className={styles.register__form__item__input} />
                                </div>
                                <div className={styles.register__form__item}>
                                    <label htmlFor="fullname" className={styles.register__form__item__label}>Full Name</label>
                                    <input id="fullname" type="text" name="fullname" placeholder="Full Name" className={styles.register__form__item__input} />
                                </div>
                                <div className={styles.register__form__item}>
                                    <label htmlFor="password" className={styles.register__form__item__label}>Password</label>
                                    <input id="password" type="password" name="password" placeholder="Password" className={styles.register__form__item__input} />
                                </div>
                                <button type="submit" className={styles.register__form__button} disabled={isLoading}>
                                    {isLoading ? "Loading..." : "Register"}
                                </button>
                            </form>
                    </div>
                    <p className={styles.register__link}>Have already Account? Sign in <Link href={'/auth/login'}>Here</Link></p>
            </div>
        </>
    )
}

export default RegisterView