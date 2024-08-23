import { NextResponse, NextRequest } from 'next/server'

export function middleware(request: NextRequest, response: NextResponse) {

    // const token = request.cookies.get("@autheToken")?.value
    // const login_Url = new URL('/admin/', request.url)
    // // const dashboard_Url = new URL('/admin/dashboard', request.url)

    // if (!token) {A

    //     return NextResponse.redirect(login_Url)
    // }
   
    return NextResponse.next();

}