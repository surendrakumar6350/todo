import { NextResponse } from 'next/server'

 
// This function can be marked `async` if using `await` inside
export function middleware(request) {
  const cookiesss = request.cookies.get("user")?.value;
  if(cookiesss) {
    const pth = request.nextUrl.pathname == "/signup" || request.nextUrl.pathname == "/login";
    if(pth) {
    return NextResponse.redirect(new URL('/profile', request.url))
    }
  }
else {
  const pthd = request.nextUrl.pathname == "/profile" || request.nextUrl.pathname == "/tasks";
  if(pthd) {
    return NextResponse.redirect(new URL('/login', request.url))
  }
}

}

export const config = {
  matcher: ['/signup','/login','/tasks','/profile']
}