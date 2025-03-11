import { GalleryClient } from "@/components/gallery-client";
import { locales } from "@/i18n/config";

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default async function GalleryPage({
  params: { locale },
}: {
  params: { locale: string };
}) {
  return <GalleryClient />;
} 