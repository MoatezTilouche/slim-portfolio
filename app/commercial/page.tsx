"use client";

import { useState, useEffect } from "react";
import { RetroNav } from "@/components/retro-nav";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Calendar } from "lucide-react";
import Loader from "@/components/loader";
import Image from "next/image";

function FallbackImage({
  srcs,
  alt,
  ...props
}: {
  srcs: string[];  // Array of image sources
  alt: string;
  [key: string]: any;
}) {
  const [idx, setIdx] = useState(0);

  // Reset idx when srcs changes
  useEffect(() => {
    setIdx(0);
  }, [srcs]);

  const handleError = () => {
    if (idx < srcs.length - 1) {
      setIdx(idx + 1); // Move to next image source
    } else {
      setIdx(-1); // No more sources left, fallback to placeholder
    }
  };

  if (idx === -1) {
    return (
      <Image
        src="/placeholder.svg"  // Placeholder image
        alt="Placeholder"
        width={500}  // Set the image width
        height={500} // Set the image height
        {...props}
        placeholder="blur"  // Enable blur-up effect
        blurDataURL="/blur.jpg"  // Provide a small blurred image
      />
    );
  }

  return (
    <Image
      src={srcs[idx]}  // Use current source in the array
      alt={alt}
      onError={handleError}  // Try next extension on error
      width={500}  // Set the image width
      height={500} // Set the image height
      placeholder="blur"  // Enable blur-up effect
      blurDataURL="/blur.jpg"  // Provide a small blurred image
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

  const eventPhotos = Array.from({ length: 17 }, (_, i) => {
    const basePath = `/commercial/${i + 1}`;  // Base path without the extension
    const exts = ["jpg", "png", "jpeg", "webp"];  // Extensions to try

    return {
      id: i + 1,
      title: `Event Coverage ${i + 1}`,
      type: i % 3 === 0 ? "Wedding" : i % 3 === 1 ? "Corporate Event" : "Cultural Event",
      basePath,  // Just base path (no extension)
      exts,  // Add extensions to try
    };
  });

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
                    loading="lazy"  // Explicit lazy loading for all images
                    sizes="(max-width: 768px) 100vw, 50vw"  // Dynamically adjust image size
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
                  onClick={() => setSelectedImage(event.basePath)}  // Set the selected image
                >
                  <FallbackImage
                    srcs={event.exts.map((ext) => `${event.basePath}.${ext}`)}  // Pass the array of image sources with different extensions
                    alt={event.title}
                    width={400}
                    height={400}
                    className={`w-full object-cover desaturated ${index % 6 === 0 ? "h-32 md:h-40" : "h-32"}`}
                    loading="lazy"  // Enable lazy loading
                    sizes="(max-width: 768px) 100vw, 50vw"  // Dynamically adjust image size
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
