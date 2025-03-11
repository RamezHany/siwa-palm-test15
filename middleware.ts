import createMiddleware from "next-intl/middleware"
import { locales } from "./i18n/config"

export default createMiddleware({
  // A list of all locales that are supported
  locales,

  // Used when no locale matches
  defaultLocale: 'en',

  // If this locale is matched, pathnames work without a prefix (e.g. `/about`)
  localePrefix: 'as-needed',
})

export const config = {
  // Skip all paths that should not be internationalized
  matcher: ["/((?!api|_next|.*\\..*).*)"],
}

