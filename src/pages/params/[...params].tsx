import { useRouter } from "next/router";

const ParamsPage = () => {
    const { query } = useRouter();
    console.log(query);
    
    return (
        <>
            <div>
                <h1>Params Page</h1>
                <h3>Params : {`${query.params && query.params[0] + "-" + query.params[1]}`}</h3>
            </div>
        </>
    )
}

export default ParamsPage;