import { NextRequest, NextResponse } from 'next/server'
import { cookies } from 'next/headers'
import { verifyUserToken } from '@app/lib/actions'

// 1. Specify protected and public routes
const protectedRoutes = ['/dashboard']
const publicRoutes = ['/login', '/']
 
export default async function middleware(req: NextRequest) {

  // 1. Check if the current route is protected or public
  const path = req.nextUrl.pathname
  const isProtectedRoute = protectedRoutes.some(route => path.startsWith(route))
 
  // 2. Decrypt the session from the cookie
  const user_token = cookies().get('user_token')?.value ?? '';

// 3. Fetch the response from the API verifying the token we got from the cookies
  let vut = await verifyUserToken(user_token);
  
  // 4. Redirect to /login if the user is not authenticated
  if (isProtectedRoute && !cookies().has('user_token') && 'errors' in vut) {
    return NextResponse.redirect(new URL('/login?showNeedLogin=true', req.nextUrl));
  }
 
  return NextResponse.next()
}
 
// Routes Middleware should not run on
export const config = {
  matcher: ['/((?!api|_next/static|_next/image|.*\\.png$).*)'],
}