import { NextResponse } from "next/server";
import { NextRequest } from "next/server";
import withAuth from "./middlewares/withAuth";

export function mainMiddleware(req: NextRequest) {
    const res = NextResponse.next();
    return res;

    // example 1
    // const isLogin = false;
    // if (isLogin) {
    //     return NextResponse.next();
    // } else {
    //     return NextResponse.redirect(new URL("/auth/login", req.url));
    // }
}

export default withAuth(mainMiddleware, ['/profile', '/dashboard'])

// export const config = {
//     matcher: ["/store","/dashboard"]
// }