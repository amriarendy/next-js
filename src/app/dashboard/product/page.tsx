'use client'

import { useState } from "react"

export default function AdminProductPage() {
    const [status, setStatus] = useState("");

    const revalidate = async () => {
        const res = await fetch("http://localhost:3000/api/revalidate?tag=product&secret=123456789",
            {
                method: "POST",
            }
        );
        console.log("res: ", res);
        
        if (!res.ok) {
            setStatus("Revalidate Failed");
        } else {
            const response = await res.json();
            if (response.revalidate) {
                setStatus("Revalidate Success")
            }
        }
    };

    return (
        <div>
            <h2>Status Revalidate: {status}</h2>
            <button onClick={()=> revalidate()} className="bg-black text-yellow-50 m-5">Revalidate</button>
        </div>
    )
}