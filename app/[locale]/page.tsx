import HomeClient from "@/components/home-client"
import { locales } from "@/i18n/config"
import { setRequestLocale } from "next-intl/server"

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }))
}

type Props = {
  params: {
    locale: string
  }
}

export default function HomePage({ params }: Props) {
  // Enable static rendering
  setRequestLocale(params.locale)

  return <HomeClient />
}

