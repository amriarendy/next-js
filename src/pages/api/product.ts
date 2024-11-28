// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  code: number,
  status: boolean,
  data: {
    id: number,
    name: string,
    price: number,
    size: string
  }[]
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>,
) {
  const data = [{
    id: 1,
    name: "Tshirt",
    price: 50000,
    size: "xl",
  },{
    id: 2,
    name: "Cloth",
    price: 150000,
    size: "l",
  },{
    id: 3,
    name: "Trousers",
    price: 300000,
    size: "xl",
  }]
  res.status(200).json({ code: 200, status: true, data });
}
