import { NextRequest, NextResponse } from "next/server";
import { revalidateTag } from "next/cache";

export async function POST(request: NextRequest) {
    const tag = request.nextUrl.searchParams.get('tag');
    const secret = request.nextUrl.searchParams.get('secret')
    
    if (secret !== process.env.REVALIDATE_SECRET) {
        return NextResponse.json({ code: 401, status: false, message: "invalid token"}, { status: 401 });
    }

    if (!tag) {
        return NextResponse.json({ code: 400, status: false, message: "missing tag param"}, { status: 400 });
    }

    revalidateTag(tag)

    return NextResponse.json({ revalidate: true, now: Date.now() });
}