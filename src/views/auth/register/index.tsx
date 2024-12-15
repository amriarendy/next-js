import Link from "next/link"
import styles from "./Register.module.scss"
import { register } from "module"

const RegisterView = () => {
    return (
        <>
            <div className={styles.register}>
                <h1 className={styles.register__title}>Register Page</h1>
                    <div className={styles.register__form}>
                            <form action="#">
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
                                <button type="submit" className={styles.register__form__button}>
                                    Register
                                </button>
                            </form>
                    </div>
                    <p className={styles.register__link}>Have already Account? Sign in <Link href={'/auth/login'}>Here</Link></p>
            </div>
        </>
    )
}

export default RegisterView