"use client"

import { RetroNav } from "@/components/retro-nav"
import { Dialog, DialogContent } from "@/components/ui/dialog"
import { useState, useEffect } from "react";

function FallbackImage({
  srcs,
  alt,
  ...props
}: {
  srcs: string[]
  alt: string
  [key: string]: any
}) {
  const [idx, setIdx] = useState(0);

  // Reset idx when srcs changes
  useEffect(() => {
    setIdx(0);
  }, [srcs]);

  const handleError = () => {
    if (idx < srcs.length - 1) setIdx(idx + 1);
    else setIdx(-1);
  };

  if (idx === -1) {
    return (
      <img
        src="/photography/1.png"
        alt="Placeholder"
        {...props}
      />
    );
  }
  return (
    <img
      src={srcs[idx]}
      alt={alt}
      onError={handleError}
      {...props}
    />
  );
}

export default function PhotographyPage() {
  const [selectedPhoto, setSelectedPhoto] = useState<string[] | null>(null)

  // Type your award image path below (for the award-winning photo)
  const AWARD_IMAGE_PATH = "/photography/1.png"; // <-- Change this to your actual award image path

  const photos = Array.from({ length: 50 }, (_, i) => ({
    id: i + 1,
    srcs: [
      `/photography/${i + 1}.JPG`,
      `/photography/${i + 1}.JPEG`,
    ],
    title: `Photography ${i + 1}`,
    isAwardWinner: i === 0, // First photo is the award winner
    awardImage: i === 0 ? AWARD_IMAGE_PATH : null, // Only the first photo gets the award image
  }))

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
                } ${index % 7 === 0 ? "lg:col-span-2" : ""}`}
                onClick={() => setSelectedPhoto(photo.srcs)}
              >
                {/* Award badge image (customizable path) */}
                {photo.isAwardWinner && photo.awardImage && (
                  <img
                    src={photo.awardImage}
                    alt="Award"
                    className="absolute top-2 left-2 w-12 h-12 object-contain z-20"
                  />
                )}

                {/* Award winner badge text */}
                {photo.isAwardWinner && (
                  <div className="absolute -top-2 -right-2 z-10 bg-white text-black px-3 py-1 retro-accent text-xs">
                    AWARD WINNER
                  </div>
                )}

                <FallbackImage
                  srcs={photo.srcs}
                  alt={photo.title}
                  width={400}
                  height={400}
                  className={`w-full object-cover desaturated ${index % 5 === 0 ? "h-64 md:h-80" : "h-48"}`}
                />

                <div className="p-3 text-center">
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