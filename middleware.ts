import { NextRequest, NextResponse } from 'next/server'
import { verifyUserToken} from '@app/lib/actions'

// 1. Specify protected and public routes
const protectedRoutes = ['/dashboard']
const publicRoutes = ['/login', '/']
 
export default async function middleware(req: NextRequest) {
  let response = NextResponse.next()

  // 1. Check if the current route is protected or public
  const path = req.nextUrl.pathname
  const isProtectedRoute = protectedRoutes.some(route => path.startsWith(route))
 
  // 2. Decrypt the session from the cookie
  const user_token = req.cookies.get('user_token')?.value ?? '';

// 3. Fetch the response from the API verifying the token we got from the cookies
  let vut = await verifyUserToken(user_token);
  

  // 4. Redirect to /login if the user is not authenticated
  if (isProtectedRoute && !req.cookies.has('user_token') && 'errors' in vut) {
    let redirectResponse = NextResponse.redirect(new URL('/login', req.nextUrl));

    redirectResponse.cookies.set('need_login', 'true');
    return redirectResponse;
  }
  
  return response
}
 
// Routes Middleware should not run on
export const config = {
  matcher: ['/((?!api|_next/static|_next/image|.*\\.png$).*)'],
}