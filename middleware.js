import { NextResponse } from 'next/server'

export function middleware(request) {
  const host = request.headers.get('host')

  // Only run this redirect in production
  if (process.env.NODE_ENV === 'production') {
    // If the host is explorethecity.in (without www), redirect to www version
    if (host === 'explorethecity.in') {
      const url = request.nextUrl.clone()
      url.host = 'www.explorethecity.in'
      return NextResponse.redirect(url, 301) // Permanent redirect
    }
  }

  return NextResponse.next()
}

export const config = {
  matcher: [
    /*
     * Match all request paths except:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - public files (robots.txt, sitemap.xml, etc.)
     */
    '/((?!_next/static|_next/image|favicon.ico|.*\\.txt|.*\\.xml|.*\\.png|.*\\.jpg|.*\\.jpeg|.*\\.gif|.*\\.svg).*)',
  ],
}
