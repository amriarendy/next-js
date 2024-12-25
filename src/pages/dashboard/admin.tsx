import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { useEffect } from "react";

const DashboardPage = () => {
    const { data }: any = useSession();
    const { push } = useRouter();
    console.log("http://localhost:3000/dashboard/admin: ", data);
    
    useEffect(() => {
        if (data?.user?.role !== "admin") {
            push("/");
        }
    }, [])
    return (
        <>
            <div>
                <h1>Admin Page</h1>
                <h2>{data && data.user.role}</h2>
            </div>
        </>
    )
}

export default DashboardPage;