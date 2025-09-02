"use client"

import { RetroNav } from "@/components/retro-nav"
import { Dialog, DialogContent } from "@/components/ui/dialog"
import { useState, useEffect } from "react";
import Loader from "@/components/loader";

import { GalleryImage, ThumbnailImage } from "@/components/ui/optimized-image";

function FallbackImage({
  srcs,
  alt,
  fallbackSrc = "/blur.jpg",
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



export default function PhotographyPage() {
  const [selectedPhoto, setSelectedPhoto] = useState<string[] | null>(null);
  const [loading, setLoading] = useState(true);

  // Type your award image path below (for the award-winning photo)
  const AWARD_IMAGE_PATH = "/photography/1.png"; // <-- Change this to your actual award image path

  useEffect(() => {
    // Simulate loading (replace with real data fetching if needed)
    const timer = setTimeout(() => setLoading(false), 2200);
    return () => clearTimeout(timer);
  }, []);

  // Only include images that actually exist
  const photos = [
    { id: 1, srcs: ["/photography/1.png"], title: "Photography 1", isAwardWinner: true, awardImage: AWARD_IMAGE_PATH },
    { id: 2, srcs: ["/photography/2.jpg"], title: "Photography 2", isAwardWinner: false, awardImage: null },
    { id: 3, srcs: ["/photography/3.jpg"], title: "Photography 3", isAwardWinner: false, awardImage: null },
    { id: 4, srcs: ["/photography/4.jpg"], title: "Photography 4", isAwardWinner: false, awardImage: null },
    { id: 5, srcs: ["/photography/5.png"], title: "Photography 5", isAwardWinner: false, awardImage: null },
    { id: 6, srcs: ["/photography/6.jpg"], title: "Photography 6", isAwardWinner: false, awardImage: null },
    { id: 7, srcs: ["/photography/7.jpg"], title: "Photography 7", isAwardWinner: false, awardImage: null },
    { id: 8, srcs: ["/photography/8.png"], title: "Photography 8", isAwardWinner: false, awardImage: null },
    { id: 9, srcs: ["/photography/9.png"], title: "Photography 9", isAwardWinner: false, awardImage: null },
    { id: 10, srcs: ["/photography/10.jpg"], title: "Photography 10", isAwardWinner: false, awardImage: null },
    { id: 11, srcs: ["/photography/11.jpg"], title: "Photography 11", isAwardWinner: false, awardImage: null },
    { id: 12, srcs: ["/photography/12.png"], title: "Photography 12", isAwardWinner: false, awardImage: null },
    { id: 13, srcs: ["/photography/13.png"], title: "Photography 13", isAwardWinner: false, awardImage: null },
    { id: 14, srcs: ["/photography/14.jpg"], title: "Photography 14", isAwardWinner: false, awardImage: null },
    { id: 15, srcs: ["/photography/15.png"], title: "Photography 15", isAwardWinner: false, awardImage: null },
    { id: 16, srcs: ["/photography/16.png"], title: "Photography 16", isAwardWinner: false, awardImage: null },
    { id: 17, srcs: ["/photography/17.png"], title: "Photography 17", isAwardWinner: false, awardImage: null },
    { id: 18, srcs: ["/photography/18.png"], title: "Photography 18", isAwardWinner: false, awardImage: null },
    { id: 19, srcs: ["/photography/19.jpg"], title: "Photography 19", isAwardWinner: false, awardImage: null },
    { id: 20, srcs: ["/photography/20.jpeg"], title: "Photography 20", isAwardWinner: false, awardImage: null },
    { id: 21, srcs: ["/photography/21.jpg"], title: "Photography 21", isAwardWinner: false, awardImage: null },
    { id: 22, srcs: ["/photography/22.jpg"], title: "Photography 22", isAwardWinner: false, awardImage: null },
    { id: 23, srcs: ["/photography/23.jpg"], title: "Photography 23", isAwardWinner: false, awardImage: null },
    { id: 24, srcs: ["/photography/24.jpg"], title: "Photography 24", isAwardWinner: false, awardImage: null },
    { id: 25, srcs: ["/photography/25.jpg"], title: "Photography 25", isAwardWinner: false, awardImage: null },
    { id: 26, srcs: ["/photography/26.jpg"], title: "Photography 26", isAwardWinner: false, awardImage: null },
    { id: 27, srcs: ["/photography/27.jpg"], title: "Photography 27", isAwardWinner: false, awardImage: null },
    { id: 28, srcs: ["/photography/28.jpg"], title: "Photography 28", isAwardWinner: false, awardImage: null },
    { id: 29, srcs: ["/photography/29.jpg"], title: "Photography 29", isAwardWinner: false, awardImage: null },
    { id: 30, srcs: ["/photography/30.jpg"], title: "Photography 30", isAwardWinner: false, awardImage: null },
    { id: 31, srcs: ["/photography/31.jpg"], title: "Photography 31", isAwardWinner: false, awardImage: null },
    { id: 32, srcs: ["/photography/32.jpg"], title: "Photography 32", isAwardWinner: false, awardImage: null },
    { id: 33, srcs: ["/photography/33.jpg"], title: "Photography 33", isAwardWinner: false, awardImage: null },
    { id: 34, srcs: ["/photography/34.jpg"], title: "Photography 34", isAwardWinner: false, awardImage: null },
    { id: 35, srcs: ["/photography/35.jpg"], title: "Photography 35", isAwardWinner: false, awardImage: null },
    { id: 36, srcs: ["/photography/36.jpg"], title: "Photography 36", isAwardWinner: false, awardImage: null },
    { id: 37, srcs: ["/photography/37.jpeg"], title: "Photography 37", isAwardWinner: false, awardImage: null },
    { id: 38, srcs: ["/photography/38.jpg"], title: "Photography 38", isAwardWinner: false, awardImage: null },
    { id: 39, srcs: ["/photography/39.png"], title: "Photography 39", isAwardWinner: false, awardImage: null },
    { id: 40, srcs: ["/photography/40.png"], title: "Photography 40", isAwardWinner: false, awardImage: null },
    { id: 41, srcs: ["/photography/41.jpg"], title: "Photography 41", isAwardWinner: false, awardImage: null },
    { id: 42, srcs: ["/photography/42.jpeg"], title: "Photography 42", isAwardWinner: false, awardImage: null },
    { id: 43, srcs: ["/photography/43.png"], title: "Photography 43", isAwardWinner: false, awardImage: null },
    { id: 44, srcs: ["/photography/44.png"], title: "Photography 44", isAwardWinner: false, awardImage: null },
    { id: 45, srcs: ["/photography/45.png"], title: "Photography 45", isAwardWinner: false, awardImage: null },
    { id: 46, srcs: ["/photography/46.jpg"], title: "Photography 46", isAwardWinner: false, awardImage: null },
    { id: 47, srcs: ["/photography/47.jpg"], title: "Photography 47", isAwardWinner: false, awardImage: null },
    { id: 48, srcs: ["/photography/48.png"], title: "Photography 48", isAwardWinner: false, awardImage: null },
    { id: 49, srcs: ["/photography/49.png"], title: "Photography 49", isAwardWinner: false, awardImage: null },
    { id: 50, srcs: ["/photography/50.jpg"], title: "Photography 50", isAwardWinner: false, awardImage: null },
  ];

  if (loading) return <Loader />;

  return (
    <div className="min-h-screen bg-black">
      <RetroNav />

      <main className="pt-24 pb-20">
        <div className="container mx-auto px-6 max-w-7xl">
          {/* Header */}
          <section className="text-center py-16">
            <h1 className="display-1 retro-title mb-8">PHOTOGRAPHY</h1>
            <div className="elegant-divider"></div>
            <p className="retro-body text-lg text-gray-400 max-w-3xl mx-auto mb-8">
              A curated exhibition of 50 photographs showcasing the art of capturing moments, emotions, and stories
              through still imagery. Each frame represents a unique perspective and creative vision.
            </p>

            {/* Award Winner Highlight */}
            <div className="minimal-border p-8 bg-gray-900 max-w-2xl mx-auto">
              <h3 className="retro-subtitle text-xl mb-3">Award Recognition</h3>
              <p className="retro-body text-gray-300">
                Featured: Best Photography Winner at FIFAK Exhibition Competition 2025
              </p>
              <p className="retro-accent text-sm text-gray-500 mt-2 italic">
                "A moment captured that speaks louder than words"
              </p>
            </div>
          </section>

          {/* Photo Gallery - Exhibition Style */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
            {photos.map((photo, index) => (
              <div
  key={photo.id}
  className={`vintage-card cursor-pointer group relative ${
    index % 5 === 0 ? "md:col-span-2 md:row-span-2" : ""
  } ${index % 7 === 0 ? "lg:col-span-2" : ""} flex flex-col justify-center items-center border-2 border-black`} // flex column for image + text stacking
  onClick={() => setSelectedPhoto(photo.srcs)}
>
  {/* Award badge image (customizable path) */}
  {photo.isAwardWinner && photo.awardImage && (
    <ThumbnailImage
      src={photo.awardImage}
      alt="Award"
      width={48}
      height={48}
      className="absolute top-2 left-2 w-12 h-12 object-contain z-20"
    />
  )}

  {/* Award winner badge text */}
  {photo.isAwardWinner && (
    <div className="absolute -top-2 -right-2 z-10 bg-white text-black px-3 py-1 retro-accent text-xs">
      AWARD WINNER
    </div>
  )}

  {/* Image */}
  <div className="w-full h-auto flex justify-center">
    <FallbackImage
      srcs={photo.srcs}
      alt={photo.title}
      width={500}
      height={500}
      className={`object-cover desaturated ${index % 5 === 0 ? "md:h-80" : "h-48"}`} // Ensure the image fills the container without unnecessary space
    />
  </div>

  {/* Text (Title) */}
  <div className="p-3 text-center w-full">
    <p className="retro-accent text-xs text-gray-500 uppercase tracking-widest">{photo.title}</p>
    {photo.isAwardWinner && (
      <p className="retro-body text-xs text-gray-400 mt-1 font-medium">FIFAK 2025</p>
    )}
  </div>
</div>

            ))}
          </div>

          {/* Artist Statement */}
          <section className="py-20">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="display-2 retro-title mb-8">Artist Statement</h2>
              <div className="elegant-divider"></div>
              <div className="minimal-border p-8 bg-gray-900">
                <p className="retro-body text-lg text-gray-300 leading-relaxed mb-6">
                  Photography is my way of freezing time, capturing the essence of a moment that will never happen again
                  in exactly the same way. Each photograph in this collection represents a story, an emotion, or a
                  perspective that moved me to press the shutter.
                </p>
                <p className="retro-body text-gray-400 leading-relaxed">
                  From street photography to portraits, from landscapes to abstract compositions, this exhibition
                  showcases the diversity of my photographic vision and my continuous exploration of light, shadow, and
                  human connection.
                </p>
                <div className="mt-8">
                  <p className="retro-accent text-sm text-gray-500 uppercase tracking-widest">— Slim Abroug, 2025</p>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>

      {/* Photo Viewer Modal */}
      <Dialog open={!!selectedPhoto} onOpenChange={() => setSelectedPhoto(null)}>
        <DialogContent className="max-w-4xl bg-black/95 border-none">
          {selectedPhoto && (
            <div className="relative">
              <FallbackImage
                srcs={selectedPhoto}
                alt="Selected photograph"
                width={800}
                height={800}
                className="w-full h-auto max-h-[80vh] object-contain"
              />
            </div>
          )}
        </DialogContent>
      </Dialog>

      {/* Footer */}
      <footer className="border-t border-gray-800 py-12">
        <div className="container mx-auto px-6 text-center">
          <p className="retro-accent text-sm text-gray-500 uppercase tracking-widest">
            © 2025 Slim Abroug. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
