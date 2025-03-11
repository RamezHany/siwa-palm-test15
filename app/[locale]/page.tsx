import HomeClient from "@/components/home-client"
import { locales } from "@/i18n/config"

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }))
}

export default async function HomePage({
  params: { locale },
}: {
  params: { locale: string }
}) {
  return <HomeClient />
}

