"use client";

import { useState, useEffect } from "react";
import { RetroNav } from "@/components/retro-nav";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Calendar } from "lucide-react";
import Loader from "@/components/loader";
import { GalleryImage, ThumbnailImage } from "@/components/ui/optimized-image";
import Image from "next/image";

function FallbackImage({
  srcs,
  alt,
  fallbackSrc = "/ blur.jpg",
  ...props
}: {
  srcs: string[];  // Array of image sources
  alt: string;
  fallbackSrc?: string;
  [key: string]: any;
}) {
  const [currentSrc, setCurrentSrc] = useState(srcs[0]);
  const [hasError, setHasError] = useState(false);

  // Reset state when srcs changes
  useEffect(() => {
    setCurrentSrc(srcs[0]);
    setHasError(false);
  }, [srcs]);

  const handleError = () => {
    if (!hasError) {
      // Try next image source if available
      const currentIndex = srcs.indexOf(currentSrc);
      if (currentIndex < srcs.length - 1) {
        setCurrentSrc(srcs[currentIndex + 1]);
      } else {
        // All sources failed, use fallback
        setCurrentSrc(fallbackSrc);
        setHasError(true);
      }
    }
  };

  return (
    <ThumbnailImage
      src={currentSrc}
      alt={alt}
      onError={handleError}
      width={500}
      height={500}
      {...props}
    />
  );
}

export default function CommercialPage() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2200);
    return () => clearTimeout(timer);
  }, []);

  const exhibitionPhotos = [
    {
      id: 1,
      title: "Exhibition Setup",
      event: "Art Gallery Opening",
      src: "/commercial/event1.jpg",
    },
    {
      id: 2,
      title: "Gallery Visitors",
      event: "Photography Exhibition",
      src: "/commercial/event2.jpg",
    },
    {
      id: 3,
      title: "Artwork Display",
      event: "Contemporary Art Show",
      src: "/commercial/event3.png",
    },
  ];

  // Only include images that actually exist with correct extensions
  const eventPhotos = [
    { id: 1, title: "Event Coverage 1", type: "Wedding", src: "/commercial/1.jpg" },
    { id: 2, title: "Event Coverage 2", type: "Corporate Event", src: "/commercial/2.jpg" },
    { id: 3, title: "Event Coverage 3", type: "Cultural Event", src: "/commercial/3.jpg" },
    { id: 4, title: "Event Coverage 4", type: "Wedding", src: "/commercial/4.jpg" },
    { id: 5, title: "Event Coverage 5", type: "Corporate Event", src: "/commercial/5.jpg" },
    { id: 6, title: "Event Coverage 6", type: "Cultural Event", src: "/commercial/6.jpg" },
    { id: 7, title: "Event Coverage 7", type: "Wedding", src: "/commercial/7.png" },
    { id: 8, title: "Event Coverage 8", type: "Corporate Event", src: "/commercial/8.jpg" },
    { id: 9, title: "Event Coverage 9", type: "Cultural Event", src: "/commercial/9.jpg" },
    { id: 10, title: "Event Coverage 10", type: "Wedding", src: "/commercial/10.jpg" },
    { id: 11, title: "Event Coverage 11", type: "Corporate Event", src: "/commercial/11.png" },
    { id: 12, title: "Event Coverage 12", type: "Cultural Event", src: "/commercial/12.jpg" },
    { id: 13, title: "Event Coverage 13", type: "Wedding", src: "/commercial/13.jpg" },
    { id: 14, title: "Event Coverage 14", type: "Corporate Event", src: "/commercial/14.jpg" },
    { id: 15, title: "Event Coverage 15", type: "Cultural Event", src: "/commercial/15.jpg" },
    { id: 16, title: "Event Coverage 16", type: "Wedding", src: "/commercial/16.jpg" },
    { id: 17, title: "Event Coverage 17", type: "Corporate Event", src: "/commercial/17.png" },
  ];

  if (loading) return <Loader />;

  return (
    <div className="min-h-screen bg-black text-white">
      <RetroNav />
      <main className="pt-24 pb-20">
        <div className="container mx-auto px-6 max-w-7xl">
          {/* Header */}
          <section className="text-center py-16">
            <h1 className="display-1 retro-title mb-8 text-white">COMMERCIAL WORK</h1>
            <div className="elegant-divider"></div>
            <p className="retro-body text-lg text-gray-300 max-w-3xl mx-auto">
              Commercial portfolio showcasing music video cinematography, exhibition documentation, and event coverage. Each project brings unique challenges and creative opportunities.
            </p>
          </section>

          {/* Exhibition Documentation */}
          <section className="mb-20">
            <h2 className="display-2 retro-title text-center mb-12 text-white">Exhibition Documentation</h2>
            <div className="elegant-divider"></div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              {exhibitionPhotos.map((photo) => (
                <div
                  key={photo.id}
                  className="vintage-card cursor-pointer group bg-gray-900 border-gray-700"
                  onClick={() => setSelectedImage(photo.src)}
                >
                  <Image
                    src={photo.src || "/blur.jpg"}
                    alt={photo.title}
                    width={600}
                    height={400}
                    className="w-full h-56 object-cover desaturated"
                  />
                  <div className="p-4 text-center">
                    <h3 className="retro-subtitle text-lg mb-1 text-white">{photo.title}</h3>
                    <p className="retro-accent text-sm text-gray-600 flex items-center justify-center">
                      <Calendar className="h-3 w-3 mr-2" />
                      {photo.event}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Event Coverage */}
          <section className="mb-20">
            <h2 className="display-2 retro-title text-center mb-12 text-white">Event Coverage</h2>
            <div className="elegant-divider"></div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 mt-12">
              {eventPhotos.map((event, index) => (
                <div
                  key={event.id}
                  className={`vintage-card cursor-pointer group ${index % 6 === 0 ? "md:col-span-2" : ""} bg-gray-900 border-gray-700`}
                  onClick={() => setSelectedImage(event.src)}  // Set the selected image
                >
                  <Image
                    src={event.src}
                    alt={event.title}
                    width={600}
                    height={400}
                    className={`w-full object-cover desaturated ${index % 6 === 0 ? "h-32 md:h-40" : "h-32"}`}
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = "/blur.jpg";
                    }}
                  />
                  <div className="p-3 text-center">
                    <p className="retro-accent text-xs text-gray-500 uppercase tracking-widest mb-1">{event.title}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Commercial Philosophy */}
          <section className="py-20">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="display-2 retro-title mb-8 text-white">Commercial Approach</h2>
              <div className="elegant-divider"></div>
              <div className="minimal-border p-8 bg-gray-900 border-gray-700">
                <p className="retro-body text-lg text-gray-300 leading-relaxed mb-6">
                  Commercial work requires a different mindset — balancing artistic vision with client needs, working within tight deadlines, and delivering consistent quality across various formats and styles.
                </p>
                <p className="retro-body text-gray-600 leading-relaxed">
                  From music videos that capture the energy and emotion of the music, to event coverage that preserves precious moments, each commercial project is an opportunity to tell a story while meeting professional standards and client expectations.
                </p>
                <div className="mt-8">
                  <p className="retro-accent text-sm text-gray-500 uppercase tracking-widest">
                    — Commercial Portfolio Notes
                  </p>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>

      {/* Image Viewer Modal */}
      <Dialog open={!!selectedImage} onOpenChange={() => setSelectedImage(null)}>
        <DialogContent className="max-w-4xl bg-black/95 border-none">
          {selectedImage && (
            <div className="relative">
              <FallbackImage
                srcs={[selectedImage]}  // Only one image selected for the modal
                alt="Selected commercial work"
                width={800}
                height={600}
                className="w-full h-auto max-h-[80vh] object-contain"
                loading="eager"  // Load eagerly for modal images
              />
            </div>
          )}
        </DialogContent>
      </Dialog>

      {/* Footer */}
      <footer className="border-t border-gray-700 py-12 bg-black">
        <div className="container mx-auto px-6 text-center">
          <p className="retro-accent text-sm text-gray-500 uppercase tracking-widest">
            © 2025 Slim Abroug. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
