"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Button } from "./ui/button";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslations, useLocale } from "next-intl";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { ChevronLeft } from "lucide-react";

// Sample gallery images - replace with your actual images
const galleryImages = [
  {
    id: 1,
    src: "/images/gallery/image1.jpg",
    alt: "صورة معرض 1",
    width: 400,
    height: 300,
    category: "منتجات",
  },
  {
    id: 2,
    src: "/images/gallery/image2.jpg",
    alt: "صورة معرض 2",
    width: 400,
    height: 300,
    category: "فعاليات",
  },
  {
    id: 3,
    src: "/images/gallery/image3.jpg",
    alt: "صورة معرض 3",
    width: 400,
    height: 300,
    category: "منتجات",
  },
  {
    id: 4,
    src: "/images/gallery/image4.jpg",
    alt: "صورة معرض 4",
    width: 400,
    height: 300,
    category: "مرافق",
  },
  {
    id: 5,
    src: "/images/gallery/image5.jpg",
    alt: "صورة معرض 5",
    width: 400,
    height: 300,
    category: "فعاليات",
  },
  {
    id: 6,
    src: "/images/gallery/image6.jpg",
    alt: "صورة معرض 6",
    width: 400,
    height: 300,
    category: "منتجات",
  },
  {
    id: 7,
    src: "/images/gallery/image7.jpg",
    alt: "صورة معرض 7",
    width: 400,
    height: 300,
    category: "مرافق",
  },
  {
    id: 8,
    src: "/images/gallery/image8.jpg",
    alt: "صورة معرض 8",
    width: 400,
    height: 300,
    category: "فعاليات",
  },
  {
    id: 9,
    src: "/images/gallery/image9.jpg",
    alt: "صورة معرض 9",
    width: 400,
    height: 300,
    category: "منتجات",
  },
  {
    id: 10,
    src: "/images/gallery/image10.jpg",
    alt: "صورة معرض 10",
    width: 400,
    height: 300,
    category: "مرافق",
  },
  {
    id: 11,
    src: "/images/gallery/image11.jpg",
    alt: "صورة معرض 11",
    width: 400,
    height: 300,
    category: "فعاليات",
  },
  {
    id: 12,
    src: "/images/gallery/image12.jpg",
    alt: "صورة معرض 12",
    width: 400,
    height: 300,
    category: "منتجات",
  },
];

export function GalleryClient() {
  const locale = useLocale();
  const t = useTranslations("Gallery");
  const [selectedCategory, setSelectedCategory] = useState(locale === "ar" ? "الكل" : "All");
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const categories = [
    t("categories.all"),
    t("categories.products"),
    t("categories.events"),
    t("categories.facilities")
  ];

  const filteredImages = selectedCategory === t("categories.all")
    ? galleryImages 
    : galleryImages.filter(img => {
        if (locale === "ar") {
          return img.category === selectedCategory;
        } else {
          // Map Arabic categories to English for filtering
          const categoryMap: Record<string, string> = {
            "منتجات": t("categories.products"),
            "فعاليات": t("categories.events"),
            "مرافق": t("categories.facilities")
          };
          return categoryMap[img.category] === selectedCategory;
        }
      });

  const isRtl = locale === "ar";

  return (
    <div className={cn("py-16 px-4 sm:px-6 lg:px-8 bg-amber-50 min-h-screen", isRtl ? "rtl" : "ltr")}>
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <Link href={`/${locale}`} className="inline-flex items-center text-amber-900 hover:text-amber-700 transition-colors">
            <ChevronLeft className="mr-2" />
            <span>{t("backToHome")}</span>
          </Link>
        </div>
        
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-amber-900 mb-4">{t("title")}</h1>
          <p className="text-lg text-amber-800/70 max-w-2xl mx-auto">
            {t("subtitle")}
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {categories.map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category ? "default" : "outline"}
              className={cn(
                selectedCategory === category 
                  ? "bg-amber-600 hover:bg-amber-700 text-white" 
                  : "text-amber-900 border-amber-600 hover:bg-amber-600 hover:text-white"
              )}
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          <AnimatePresence>
            {filteredImages.map((image) => (
              <motion.div
                key={image.id}
                className="relative overflow-hidden rounded-2xl shadow-md"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                layout
                whileHover={{ scale: 1.03 }}
                onClick={() => setSelectedImage(image.id)}
              >
                <div className="aspect-w-4 aspect-h-3">
                  {/* Placeholder div for images - replace with actual images */}
                  <div 
                    className="w-full h-64 bg-gradient-to-br from-amber-600 to-amber-800 flex items-center justify-center text-white"
                  >
                    {image.alt}
                  </div>
                  {/* Uncomment when you have actual images */}
                  {/* <Image
                    src={image.src}
                    alt={image.alt}
                    width={image.width}
                    height={image.height}
                    className="object-cover w-full h-full"
                  /> */}
                </div>
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4">
                  <span className="text-white text-sm font-medium">{
                    locale === "ar" 
                      ? image.category 
                      : {
                          "منتجات": t("categories.products"),
                          "فعاليات": t("categories.events"),
                          "مرافق": t("categories.facilities")
                        }[image.category]
                  }</span>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Image Modal */}
        {isMounted && selectedImage && (
          <div 
            className="fixed inset-0 bg-black bg-opacity-80 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <div 
              className="relative max-w-4xl w-full bg-white rounded-lg overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <button 
                className="absolute top-4 right-4 text-white bg-amber-600 rounded-full p-2 z-10"
                onClick={() => setSelectedImage(null)}
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
              </button>
              <div className="aspect-w-16 aspect-h-9">
                {/* Placeholder div for selected image - replace with actual image */}
                <div 
                  className="w-full h-[400px] bg-gradient-to-br from-amber-600 to-amber-800 flex items-center justify-center text-white text-xl"
                >
                  {galleryImages.find(img => img.id === selectedImage)?.alt}
                </div>
                {/* Uncomment when you have actual images */}
                {/* <Image
                  src={galleryImages.find(img => img.id === selectedImage)?.src || ""}
                  alt={galleryImages.find(img => img.id === selectedImage)?.alt || ""}
                  width={1200}
                  height={800}
                  className="object-contain w-full h-full"
                /> */}
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {galleryImages.find(img => img.id === selectedImage)?.alt}
                </h3>
                <p className="text-gray-600">
                  {t("category")}: <span>{
                    locale === "ar" 
                      ? galleryImages.find(img => img.id === selectedImage)?.category 
                      : {
                          "منتجات": t("categories.products"),
                          "فعاليات": t("categories.events"),
                          "مرافق": t("categories.facilities")
                        }[galleryImages.find(img => img.id === selectedImage)?.category || ""]
                  }</span>
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
} 