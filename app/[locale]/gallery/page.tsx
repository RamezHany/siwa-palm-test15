import { GalleryClient } from "@/components/gallery-client";
import { locales } from "@/i18n/config";
import { setRequestLocale } from "next-intl/server";

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default function GalleryPage({ params: { locale } }: { params: { locale: string } }) {
  // Enable static rendering
  setRequestLocale(locale);

  return <GalleryClient />;
} 