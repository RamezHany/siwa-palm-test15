import "../globals.css"
import { Inter } from "next/font/google"
import { NextIntlClientProvider } from "next-intl"
import { getMessages, unstable_setRequestLocale } from "next-intl/server"
import { locales } from "@/i18n/config"

const inter = Inter({
  subsets: ["latin"], // Removed 'arabic' as it's not supported
  variable: "--font-inter",
})

export const metadata = {
  title: "Siwa Palm - Premium Dates from Siwa Oasis",
  description: "Leading company in growing and producing the finest dates since 2001",
}

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }))
}

export default async function LocaleLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  // Enable static rendering
  unstable_setRequestLocale(locale);

  const messages = await getMessages();

  // Set the direction based on locale
  const dir = locale === "ar" ? "rtl" : "ltr"

  return (
    <html lang={locale} dir={dir} suppressHydrationWarning>
      <body className={`${inter.variable} font-sans`}>
        <NextIntlClientProvider locale={locale} messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  )
}

