import Link from "next/link";

const RegisterPage = () => {
    return (
        <>
            <div>
                <h1>Register Page</h1>
                <p>Already have account <Link href={"/auth/login"}>Login</Link></p>
            </div>
        </>
    )
}

export default RegisterPage;