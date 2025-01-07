import { retriveData, retriveDataById } from "@/lib/firebase/service";
import  { NextRequest, NextResponse } from "next/server";

const data = [
    {
        id: 1,
        title: 'Nike Court Vision Low',
        price: 1000000,
        image: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/eaf524f7-a9f7-4f70-a438-1b0480eb2540/NIKE+COURT+VISION+LO.png"
    },
    {
        id: 2,
        title: 'Air Jordan 1 Low OG',
        price: 1520000,
        image: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/3c26fa5a-157b-4174-9679-17258d767047/AIR+JORDAN+1+RETRO+LOW+OG.png"
    },
    {
        id: 3,
        title: 'Nike Air Max Plus',
        price: 910000,
        image: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/erzfadfpnzgkxt0gn2ya/AIR+MAX+PLUS.png"
    },
    {
        id: 4,
        title: 'Nike Air Max Plus 4',
        price: 910000,
        image: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/erzfadfpnzgkxt0gn2ya/AIR+MAX+PLUS.png"
    },
    {
        id: 5,
        title: 'Air Jordan 1 Hight OG',
        price: 910000,
        image: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/eaf524f7-a9f7-4f70-a438-1b0480eb2540/NIKE+COURT+VISION+LO.png"
    },
];

export async function GET(requset: NextRequest) {
    const { searchParams } = new URL(requset.url);
    const id = searchParams.get('id');
    
    if (id) {
        const detailProduct = await retriveDataById("products", id);
        if (detailProduct) {
            return NextResponse.json({ 
                code: 200, 
                status: true, 
                message: "success", 
                data: detailProduct 
            });
        }
        return NextResponse.json({ 
            code: 404, 
            status: false, 
            message: "not found", 
            data: {} 
        });
    }

    const products = await retriveData('products');

    return NextResponse.json({ 
        code: 200,
        status: true, 
        message: "success", 
        data: products
    });
}