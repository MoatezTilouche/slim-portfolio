"use client"

import { useState } from "react"
import Image from "next/image"
import { RetroNav } from "@/components/retro-nav"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Badge } from "@/components/ui/badge"
import { Calendar, Clock, User, MapPin, Award } from "lucide-react"

interface Film {
  id: number
  title: string
  arabicTitle?: string
  director: string
  duration: string
  year: string
  type: string
  poster: string
  description: string
  roles: string[]
  highlights: string[]
  location?: string
  awards?: string[]
  photos: string[]
}

export default function FilmographyPage() {
  const [selectedFilm, setSelectedFilm] = useState<Film | null>(null)

const films: Film[] = [
  {
    id: 1,
    title: "The Light That Remain",
    arabicTitle: "ما لم تأخذه الشمس",
    director: "Youssef Guermazi",
    duration: "24 min",
    year: "2025",
    type: "Short Fiction",
    poster: "/filmography/project1/main.png",
    description: "A compelling exploration of memory and loss through masterful lighting design and cinematography.",
    roles: ["Director of Photography", "Colorist"],
    highlights: [
      "Exceptional lighting design and execution",
      "Complex lighting setups enhancing narrative",
      "Innovative use of natural and artificial light",
      "Collaborative creative process with director",
    ],
    photos: [
      "/filmography/project1/1.jpg",
      "/filmography/project1/2.jpg",
      "/filmography/project1/3.jpg",
      "/filmography/project1/4.jpg",
      "/filmography/project1/5.jpg",
    ],
  },
  {
    id: 2,
    title: "ICI ET LA",
    arabicTitle: "هنا و هناك",
    director: "Youssef Guermazi",
    duration: "14 min",
    year: "2024",
    type: "Short Fiction",
    poster: "/filmography/project2/main.jpg",
    description: "Award-winning film that participated in JCC, FIFAK, and Cinemana festivals.",
    roles: ["Director of Photography", "Colorist"],
    highlights: [
      "Winner of Best Film at FIFAK 2024",
      "Multiple international festival participations",
      "Exceptional visual storytelling",
      "Critical acclaim and recognition",
    ],
    awards: ["Best Film - FIFAK 2024"],
    photos: [
      "/filmography/project2/1.png",
      "/filmography/project2/2.png",
      "/filmography/project2/3.png",
      "/filmography/project2/4.png",
      "/filmography/project2/5.png",
    ],
  },
  {
    id: 3,
    title: "Somewhere I Belong",
    arabicTitle: "ارث",
    director: "Youssef Handous",
    duration: "20 min",
    year: "2025",
    type: "Short Fiction",
    poster: "/filmography/project3/1.jpg",
    description:
      "Outdoor cinematography in Ain Drahem's natural landscapes, integrating nature into visual composition.",
    roles: ["Director of Photography", "Colorist"],
    highlights: [
      "80% outdoor cinematography",
      "Natural location shooting in Ain Drahem",
      "Integration of natural elements in composition",
      "Landscape cinematography expertise",
    ],
    location: "Ain Drahem",
    photos: [
      "/filmography/project3/1.jpg",
      "/filmography/project3/2.jpg",
      "/filmography/project3/3.jpg",
      "/filmography/project3/4.jpg",
      "/filmography/project3/5.jpg",
    ],
  },
  {
    id: 4,
    title: "Meghir Hrissa",
    arabicTitle: "ما غير هريسة",
    director: "Saifeddine Lahmar",
    duration: "24 min",
    year: "2025",
    type: "Short Fiction",
    poster: "/filmography/project4/main.jpg",
    description:
      "Complete image responsibility project, handling all visual aspects from cinematography to post-production.",
    roles: ["Cinematographer", "Director of Photography", "Camera Operator", "Colorist"],
    highlights: [
      "Complete image responsibility",
      "Full creative control over visual elements",
      "Comprehensive post-production workflow",
      "Technical and artistic leadership",
    ],
    photos: [
      "/filmography/project4/1.jpg",
      "/filmography/project4/2.jpg",
      "/filmography/project4/3.jpg",
      "/filmography/project4/4.jpg",
      "/filmography/project4/5.jpg",
    ],
  },
  {
    id: 5,
    title: "109 Echos of 20th Century",
    arabicTitle: "109 أصداء من القرن العشرين",
    director: "Hazem Shahin",
    duration: "18 min",
    year: "2025",
    type: "Short Fiction Documentary",
    poster: "/filmography/project5/main.png",
    description: "Powerful documentary defending social causes through compelling visual storytelling.",
    roles: ["Director of Photography", "Camera Operator"],
    highlights: [
      "Documentary-style cinematography",
      "Social cause advocacy through visuals",
      "Handheld camera expertise",
      "Authentic storytelling approach",
    ],
    photos: [
      "/filmography/project5/1.png",
      "/filmography/project5/2.png",
      "/filmography/project5/3.png",
      "/filmography/project5/4.png",
      "/filmography/project5/5.png",
    ],
  },
  {
    id: 6,
    title: "Rebirth",
    director: "Oussema El Malki",
    duration: "13 min",
    year: "2025",
    type: "Short Fiction",
    poster: "/filmography/project6/main.jpg",
    description: "Exploration of transformation and renewal through innovative cinematographic techniques.",
    roles: ["Director of Photography", "Colorist"],
    highlights: [
      "Creative visual storytelling",
      "Innovative camera work",
      "Atmospheric lighting design",
      "Collaborative filmmaking approach",
    ],
    photos: [
      "/filmography/project6/1.jpg",
      "/filmography/project6/2.jpg",
      "/filmography/project6/3.jpg",
      "/filmography/project6/4.jpg",
      "/filmography/project6/5.jpg",
    ],
  },
  {
    id: 7,
    title: "Les Echos de la Mer",
    arabicTitle: "الموجة",
    director: "Ali Kaddech",
    duration: "10 min",
    year: "2024",
    type: "Short Fiction",
    poster: "/filmography/project7/main.jpg",
    description: "Part of Khatawet Cineparkour 2024, showcasing maritime cinematography.",
    roles: ["Director of Photography", "Camera Operator"],
    highlights: [
      "Maritime cinematography",
      "Khatawet Cineparkour 2024 participation",
      "Water and light interaction",
      "Natural environment integration",
    ],
    photos: [
      "/filmography/project7/1.jpg",
      "/filmography/project7/2.png",
      "/filmography/project7/3.jpg",
      "/filmography/project7/4.png",
      "/filmography/project7/5.png",
    ],
  },
  {
    id: 8,
    title: "Aida..?",
    director: "Youssef Guermazi & Oussema Melki",
    duration: "13 min",
    year: "2025",
    type: "Short Fiction",
    poster: "/filmography/project8/main.jpg",
    description: "Collaborative directorial project exploring identity and questioning.",
    roles: ["Director of Photography", "Colorist"],
    highlights: [
      "Dual director collaboration",
      "Identity exploration themes",
      "Advanced color grading techniques",
      "Narrative cinematography",
    ],
    photos: [
      "/filmography/project8/1.jpg",
      "/filmography/project8/2.jpg",
      "/filmography/project8/3.jpg",
      "/filmography/project8/4.jpg",
      "/filmography/project8/5.jpg",
    ],
  },
  {
    id: 9,
    title: "Universe 52",
    director: "Youssef Handous",
    duration: "13 min",
    year: "2025",
    type: "Short Fiction",
    poster: "/filmography/project9/main.png",
    description: "Science fiction cinematography exploring cosmic themes and visual effects.",
    roles: ["Director of Photography", "Colorist"],
    highlights: [
      "Science fiction cinematography",
      "Cosmic visual themes",
      "Advanced color grading for sci-fi",
      "Creative lighting solutions",
    ],
    photos: [
      "/filmography/project9/1.png",
      "/filmography/project9/2.png",
      "/filmography/project9/3.png",
      "/filmography/project9/4.png",
      "/filmography/project9/5.png",
    ],
  },
  {
    id: 10,
    title: "Pulse",
    director: "Shahin Nahdi",
    duration: "9 min",
    year: "2024",
    type: "Short Fiction",
    poster: "/filmography/project10/main.jpg",
    description: "Festival-participating film showcasing innovative cinematographic techniques.",
    roles: ["Cinematographer", "Colorist"],
    highlights: [
      "Multiple festival participations",
      "Innovative cinematographic techniques",
      "Advanced color grading work",
      "Creative visual solutions",
    ],
    photos: [
      "/filmography/project10/1.png",
      "/filmography/project10/2.png",
      "/filmography/project10/3.png",
      "/filmography/project10/4.png",
      "/filmography/project10/5.png",
    ],
  },
  {
    id: 11,
    title: "Let Them Be",
    director: "Shahin Nahdi & Baha Merdassi",
    duration: "8 min",
    year: "2024",
    type: "Short Fiction",
    poster: "/filmography/project11/main.png",
    description: "Award-winning film from Impress Film Competition.",
    roles: ["Cinematographer"],
    highlights: [
      "Impress Film Competition winner",
      "Collaborative direction",
      "Competition cinematography",
      "Award recognition",
    ],
    awards: ["Impress Film Competition Award"],
    photos: [
      "/filmography/project11/1.png",
      "/filmography/project11/2.png",
      "/filmography/project11/3.png",
      "/filmography/project11/4.png",
      "/filmography/project11/5.png",
    ],
  },
]


  return (
    <div className="min-h-screen bg-black">
      <RetroNav />

      <main className="pt-24 pb-20">
        <div className="container mx-auto px-6 max-w-7xl">
          {/* Header */}
          <section className="text-center py-16">
            <h1 className="display-1 retro-title mb-8">FILMOGRAPHY</h1>
            <div className="elegant-divider"></div>
            <p className="retro-body text-lg text-gray-400 max-w-3xl mx-auto">
              A comprehensive collection of films showcasing visual storytelling, technical precision, and emotional
              impact. Each project represents a unique collaboration and creative journey.
            </p>
          </section>

          {/* Films Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {films.map((film) => (
              <div key={film.id} className="vintage-card cursor-pointer group" onClick={() => setSelectedFilm(film)}>
                <div>
                  <Image
                    src={film.poster || "/placeholder.svg"}
                    alt={`${film.title} poster`}
                    width={400}
                    height={600}
                    className="w-full h-80 object-cover desaturated"
                  />
                </div>
                <div className="p-4">
                  <div className="retro-accent text-xs uppercase tracking-widest text-gray-500 mb-2">
                    {film.year} • {film.type}
                  </div>
                  <h3 className="retro-subtitle text-lg mb-1 group-hover:text-gray-300 transition-colors">
                    {film.title}
                  </h3>
                  {film.arabicTitle && (
                    <p className="text-sm text-gray-500 mb-2" dir="rtl">
                      {film.arabicTitle}
                    </p>
                  )}
                  <p className="retro-body text-sm text-gray-400">Dir. {film.director}</p>
                  <p className="retro-accent text-xs text-gray-500 mt-1">{film.duration}</p>
                  {film.awards && (
                    <div className="mt-3">
                      <span className="inline-block bg-gray-800 text-gray-300 px-2 py-1 text-xs retro-accent">
                        AWARD WINNER
                      </span>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>

      {/* Film Detail Modal */}
      <Dialog open={!!selectedFilm} onOpenChange={() => setSelectedFilm(null)}>
        <DialogContent className="max-w-6xl max-h-[90vh] overflow-y-auto bg-black border border-gray-800">
          {selectedFilm && (
            <>
              <DialogHeader className="border-b border-gray-800 pb-6">
                <DialogTitle className="display-3 retro-title text-left">{selectedFilm.title}</DialogTitle>
                {selectedFilm.arabicTitle && (
                  <p className="retro-subtitle text-gray-400 mt-2" dir="rtl">
                    {selectedFilm.arabicTitle}
                  </p>
                )}
              </DialogHeader>

              <div className="py-6 space-y-8">
                {/* Film Details */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <Image
                      src={selectedFilm.poster || "/placeholder.svg"}
                      alt={`${selectedFilm.title} poster`}
                      width={400}
                      height={600}
                      className="w-full h-auto minimal-border desaturated"
                    />
                  </div>

                  <div className="space-y-6">
                    <div className="minimal-border p-6">
                      <h3 className="retro-subtitle text-xl mb-4">Film Details</h3>
                      <div className="space-y-3 retro-body text-sm">
                        <div className="flex items-center space-x-3">
                          <User className="h-4 w-4 text-gray-500" />
                          <span>Director: {selectedFilm.director}</span>
                        </div>
                        <div className="flex items-center space-x-3">
                          <Clock className="h-4 w-4 text-gray-500" />
                          <span>Duration: {selectedFilm.duration}</span>
                        </div>
                        <div className="flex items-center space-x-3">
                          <Calendar className="h-4 w-4 text-gray-500" />
                          <span>Year: {selectedFilm.year}</span>
                        </div>
                        {selectedFilm.location && (
                          <div className="flex items-center space-x-3">
                            <MapPin className="h-4 w-4 text-gray-500" />
                            <span>Location: {selectedFilm.location}</span>
                          </div>
                        )}
                      </div>
                    </div>

                    <div>
                      <h3 className="retro-subtitle text-xl mb-3">My Roles</h3>
                      <div className="flex flex-wrap gap-2">
                        {selectedFilm.roles.map((role, index) => (
                          <Badge key={index} variant="outline" className="retro-accent text-xs border-gray-700">
                            {role}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    {selectedFilm.awards && (
                      <div>
                        <h3 className="retro-subtitle text-xl mb-3">Awards</h3>
                        <div className="space-y-2">
                          {selectedFilm.awards.map((award, index) => (
                            <div key={index} className="flex items-center space-x-3">
                              <Award className="h-4 w-4 text-gray-400" />
                              <span className="retro-body text-sm font-medium">{award}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    <div>
                      <h3 className="retro-subtitle text-xl mb-3">Description</h3>
                      <p className="retro-body text-gray-300 leading-relaxed">{selectedFilm.description}</p>
                    </div>
                  </div>
                </div>

                {/* Photo Gallery */}
                <div>
                  <h3 className="display-3 retro-title mb-6 text-center">Behind the Scenes</h3>
                  <div className="elegant-divider"></div>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
                    {selectedFilm.photos.map((photo, index) => (
                      <div key={index} className="minimal-border overflow-hidden">
                        <Image
                          src={photo || "/placeholder.svg"}
                          alt={`${selectedFilm.title} behind the scenes ${index + 1}`}
                          width={500}
                          height={300}
                          className="w-full h-48 object-cover desaturated"
                        />
                        <div className="p-3 text-center">
                          <p className="retro-accent text-xs text-gray-500">Frame {index + 1}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Highlights */}
                <div className="minimal-border p-6 bg-gray-900">
                  <h3 className="retro-subtitle text-xl mb-4">Key Highlights</h3>
                  <ul className="space-y-2 retro-body">
                    {selectedFilm.highlights.map((highlight, index) => (
                      <li key={index} className="flex items-start space-x-3">
                        <span className="text-gray-500 mt-1">—</span>
                        <span className="text-gray-300">{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </>
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
  )
}
