import { jwtVerify } from "jose";
import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

export async function middleware(request:NextRequest){
    const protectedRoutes = ['/user']
    const publicPath = ['/' , '/sign-in']
    const currentPath = request.nextUrl.pathname
    const isProtectedRoute = protectedRoutes.includes(currentPath)
    const isPublicPath = publicPath.includes(currentPath)
    //check for cookie
    const cookie = cookies().get('Authorization');
    if (isProtectedRoute) {
        if (!cookie) {
          return NextResponse.redirect(new URL("/sign-in", request.url));
        }
        try {
          const secret = new TextEncoder().encode(process.env.SECRET);
          const jwt = cookie?.value;
          await jwtVerify(jwt ? jwt : "", secret, {});
          return NextResponse.next();
        } catch (error) {
          return NextResponse.redirect(new URL("/sign-in", request.url));
        }
      }
    if(isPublicPath){
        return NextResponse.next()
    }
    return NextResponse.next()

}
export const config = {
    matcher:  ['/((?!.+\\.[\\w]+$|_next).*)', '/(api|trpc)(.*)'],
  }