// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { retriveData } from "@/lib/firebase/service";
import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  code: number;
  status: boolean;
  data: any;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>,
) {
  const data = await retriveData("products");
  console.log(data);
  
  res.status(200).json({ code: 200, status: true, data });
}
