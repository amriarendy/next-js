// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { retriveData, signUp } from "@/lib/firebase/service";
import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
    code: number;
    status: boolean;
    message: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>,
) {
    if (req.method === "POST") {
        await signUp(req.body, ({ code, status, message }: { code: number; status: boolean; message: string; })=> {
            if (status) {
                res.status(201).json({ code, status, message })
            }
        })
    }
}
