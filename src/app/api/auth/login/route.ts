import  { NextRequest, NextResponse } from "next/server";

export async function POST(requset: NextRequest) {
    const req = await requset.json();
    console.log("requset: ", req);
    
    return NextResponse.json({ code: 200, status: true, message: "Success", data: req});
}