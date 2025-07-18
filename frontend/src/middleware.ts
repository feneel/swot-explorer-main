import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server';
import {
  type NextFetchEvent,
  type NextRequest,
  NextResponse,
} from 'next/server';
import createMiddleware from 'next-intl/middleware';

import { AllLocales, AppConfig } from './utils/AppConfig';

const intlMiddleware = createMiddleware({
  locales: AllLocales,
  localePrefix: AppConfig.localePrefix,
  defaultLocale: AppConfig.defaultLocale,
});

const isProtectedRoute = (req: NextRequest) => {
  const pathname = req.nextUrl.pathname;
  if (pathname.startsWith('/api/swot')) return false;
  if (pathname.startsWith('/api')) return true;
  if (pathname.startsWith('/dashboard')) return true;
  if (pathname.startsWith('/onboarding')) return true;
  // add your locale-prefixed routes as needed
  return false;
};



export default function middleware(
  request: NextRequest,
  event: NextFetchEvent,
) {
 return ;
}

export const config = {
  matcher:[]
};
