"use client"

import { useState } from "react"
import Image from "next/image"
import { RetroNav } from "@/components/retro-nav"
import { Dialog, DialogContent } from "@/components/ui/dialog"
import { Play, Music, Calendar, Users } from "lucide-react"

export default function CommercialPage() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null)

 
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
      src: "/commercial/event3.jpg",
    },
  ]

  const eventPhotos = Array.from({ length: 17 }, (_, i) => ({
  id: i + 1,
  title: `Event Coverage ${i + 1}`,
  type: i % 3 === 0 ? "Wedding" : i % 3 === 1 ? "Corporate Event" : "Cultural Event",
  src: `/commercial/${i + 1}.JPG`, // Add .JPG extension
}));


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
              Commercial portfolio showcasing music video cinematography, exhibition documentation, and event coverage.
              Each project brings unique challenges and creative opportunities.
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
                    src={photo.src || "/placeholder.svg"}
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
                  onClick={() => setSelectedImage(event.src)}
                >
                  <Image
                    src={event.src || "/placeholder.svg"}
                    alt={event.title}
                    width={400}
                    height={400}
                    className={`w-full object-cover desaturated ${index % 6 === 0 ? "h-32 md:h-40" : "h-32"}`}
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
                  Commercial work requires a different mindset — balancing artistic vision with client needs, working
                  within tight deadlines, and delivering consistent quality across various formats and styles.
                </p>
                <p className="retro-body text-gray-600 leading-relaxed">
                  From music videos that capture the energy and emotion of the music, to event coverage that preserves
                  precious moments, each commercial project is an opportunity to tell a story while meeting professional
                  standards and client expectations.
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
              <Image
                src={selectedImage || "/placeholder.svg"}
                alt="Selected commercial work"
                width={800}
                height={600}
                className="w-full h-auto max-h-[80vh] object-contain"
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
  )
}
