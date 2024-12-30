import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
    const isLogin = true;
    if (!isLogin) {
        return NextResponse.redirect(new URL("/login", request.url));
    }
    // if (request.nextUrl.pathname.startsWith("/about")) {
    //     return NextResponse.redirect(new URL("/", request.url));
    // }
}

export const config = {
    matcher: ["/dashboard/:path*", "/profile"]
}