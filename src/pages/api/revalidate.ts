// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { retriveData } from "@/lib/firebase/service";
import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
    revalidated: boolean;
    message?: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>,
) {
    console.log("req.query.token: ", req.query.token);
    
    if (req.query.token !== process.env.REVALIDATE_TOKEN) {
        return res
        .status(401)
        .json({ revalidated: false, message: "Invalid token" });
    }
    if (req.query.data === 'product') {
        try {
            await res.revalidate("/store/static")
            return res.json({revalidated: true})
        } catch (error) {
            return res
            .status(500)
            .send({ revalidated: false });
        }
    }
    return res.json({ revalidated: true, message: "Choose to revalidate data" })
}
