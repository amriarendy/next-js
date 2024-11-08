import { useRouter } from "next/router";

const SlugPage = () => {
    const { query } = useRouter();
    console.log(query);
    
    return (
        <>
            <div>
                <h1>Slug Page</h1>
                <h3>Slug : {`${query.slug && query.slug[0] + "-" + query.slug[1]}`}</h3>
            </div>
        </>
    )
}

export default SlugPage;