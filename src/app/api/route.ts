import  { NextResponse } from "next/server";

export async function GET() {
    return NextResponse.json({ code: 200, status: true, message: "Success"});
}