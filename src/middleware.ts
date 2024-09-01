// "use client";

import { NextResponse, NextRequest } from 'next/server'
import { destroyCookie, setCookie, parseCookies } from "nookies";

export function middleware(request: NextRequest, response: NextResponse) {

    // const { 'totalCarrinho': carrinho } = parseCookies();
    const itemCarrinho = request.cookies.get("totalCarrinho")?.value
    const paymentURL = new URL('/', request.url)
    const shopingURL = new URL('/', request.url)

    if (!itemCarrinho) {
        return NextResponse.redirect(shopingURL, )
    }
    return NextResponse.next();
    // else{

    //     return NextResponse.next();
    // }

   
    // const token = request.cookies.get("@autheToken")?.value
  

    // // const dashboard_Url = new URL('/admin/dashboard', request.url)

    // if (item==0) {
    //     return NextResponse.redirect(shopingURL, )
    //     // return NextResponse.next();
    // }
}

export const config = {
    matcher: '/payment/:path*',
  }