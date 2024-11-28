import Link from "next/link";
import { useRouter } from "next/router";
import styles from "./Auth.module.css"
import LoginViews from "@/views/auth/login";

const LoginPage = () => {
    const { push } = useRouter();
    const handlerLogin = () => {
        push("/dashboard");
    };

    return (
        <>
            <LoginViews/>
        </>
    )
}

export default LoginPage;