"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";
import { motion } from "framer-motion";
import { useLocale, useTranslations } from "next-intl";
import { cn } from "@/lib/utils";

// Sample gallery images - replace with your actual images
const galleryImages = [
  {
    id: 1,
    src: "/images/gallery/image1.jpg",
    alt: "صورة معرض 1",
    width: 400,
    height: 300,
  },
  {
    id: 2,
    src: "/images/gallery/image2.jpg",
    alt: "صورة معرض 2",
    width: 400,
    height: 300,
  },
  {
    id: 3,
    src: "/images/gallery/image3.jpg",
    alt: "صورة معرض 3",
    width: 400,
    height: 300,
  },
  {
    id: 4,
    src: "/images/gallery/image4.jpg",
    alt: "صورة معرض 4",
    width: 400,
    height: 300,
  },
  {
    id: 5,
    src: "/images/gallery/image5.jpg",
    alt: "صورة معرض 5",
    width: 400,
    height: 300,
  },
  {
    id: 6,
    src: "/images/gallery/image6.jpg",
    alt: "صورة معرض 6",
    width: 400,
    height: 300,
  },
];

export function GallerySection() {
  const locale = useLocale();
  const t = useTranslations("Gallery");
  const [hoveredImage, setHoveredImage] = useState<number | null>(null);

  return (
    <section className="py-20 bg-amber-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold text-amber-900 mb-4">{t("title")}</h2>
          <p className="text-lg text-amber-800/70 max-w-2xl mx-auto">
            {t("subtitle")}
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.slice(0, 6).map((image) => (
            <motion.div
              key={image.id}
              className="relative overflow-hidden rounded-2xl shadow-md"
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.3 }}
              onMouseEnter={() => setHoveredImage(image.id)}
              onMouseLeave={() => setHoveredImage(null)}
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
              
              {hoveredImage === image.id && (
                <motion.div 
                  className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  <Button 
                    variant="outline" 
                    className="bg-white text-amber-900 hover:bg-amber-600 hover:text-white border-amber-600"
                  >
                    {t("viewDetails")}
                  </Button>
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Link href="/gallery">
            <Button 
              className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-2"
            >
              {t("viewMore")}
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
} 