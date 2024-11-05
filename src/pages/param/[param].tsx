import { useRouter } from "next/router";

const ParamDetailPage = () => {
    const { query } = useRouter();
    console.log(query);
    
    return (
        <>
            <div>
                <h1>Param Detail Page</h1>
                <h3>Param : {query.param} </h3>
            </div>
        </>
    )
}

export default ParamDetailPage;