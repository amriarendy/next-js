import { NextMiddleware, NextRequest, NextFetchEvent } from "next/server"

export default function withAuth(middleware: NextMiddleware, requireAuth: string[] = [],) {
    return async (req: NextRequest, next: NextFetchEvent) => {
        const pathname = req.nextUrl.pathname;
        if (requireAuth.includes(pathname)) {
            // https://www.youtube.com/watch?v=CNJY9J1Cc14&list=PLmF_zPV9ZcP2aYRuoEsMla5gqNjxP-V20&index=36
        }
    }
}