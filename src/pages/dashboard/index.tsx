import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const DashboardPage = () => {
    const [isLogin, setIsLogin] = useState(false);
    const { push } = useRouter();
    useEffect(() => {
        if (!isLogin) {
            push("/auth/login");
        }
    }, [])

    return (
        <>
            <div>
                <h1>Dashboard Page</h1>
            </div>
        </>
    )
}

export default DashboardPage;