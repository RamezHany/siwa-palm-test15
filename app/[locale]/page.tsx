import HomeClient from "@/components/home-client"
import { locales } from "@/i18n/config"
import { unstable_setRequestLocale } from "next-intl/server"

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }))
}

export default async function HomePage({
  params: { locale },
}: {
  params: { locale: string }
}) {
  // Enable static rendering
  unstable_setRequestLocale(locale)

  return <HomeClient />
}

