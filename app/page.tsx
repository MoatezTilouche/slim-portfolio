"use client"
import Image from "next/image"
import Link from "next/link"
import { RetroNav } from "@/components/retro-nav"
import Loader from "@/components/loader";
import { useState, useEffect } from "react";

export default function HomePage() {

     const [loading, setLoading] = useState(true);
  type SampleWork = {
    id: number;
    title: string;
    category: string;
    image: string;
    description: string;
  };

  const [sampleWorks, setSampleWorks] = useState<SampleWork[]>([]);

  useEffect(() => {
    // Simulate fetching data
    const timer = setTimeout(() => {
      setSampleWorks([
        {
          id: 1,
          title: "Cinematic Lighting",
          category: "Cinematography",
          image: "/SelectedWorksHome/1.jpg",
          description: "From 'The Light That Remain'",
        },
        {
          id: 2,
          title: "Natural Landscapes",
          category: "Location Work",
          image: "/SelectedWorksHome/2.jpg",
          description: "Ain Drahem outdoor cinematography",
        },
        {
          id: 3,
          title: "Portrait Study",
          category: "Photography",
          image: "/SelectedWorksHome/4.png",
          description: "FIFAK Award Winner 2025",
        },
        {
          id: 4,
          title: "Color Grading",
          category: "Post-Production",
          image: "/SelectedWorksHome/3.png",
          description: "Visual storytelling through color",
        },
      ]);
      setLoading(false);
    }, 1500); // Simulate 1.5s fetch

    return () => clearTimeout(timer);
  }, []);

  if (loading) return <Loader />;

  return (
    <div className="min-h-screen bg-black">
      <RetroNav />

      <main className="pt-24">
        {/* Hero Section */}
        <section className="py-20 px-6 hero-bg">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-16">
              <h1 className="display-1 retro-title mb-8">
                DIRECTOR OF
                <br />
                PHOTOGRAPHY
              </h1>

              <div className="elegant-divider"></div>

              <p className="display-3 retro-subtitle text-gray-300 mb-8 max-w-4xl mx-auto">
                Colorist & Visual Storyteller
              </p>

              <p className="retro-body text-lg text-gray-400 max-w-3xl mx-auto leading-relaxed">
                With a background in cinema and a passion for crafting powerful images — whether in motion or still. My
                work moves between narrative films, photography, and commissioned projects like music videos and event
                coverage. I approach every frame with intention, balancing technical precision with emotional impact.
              </p>
            </div>

            <div className="text-center mb-20">
              <Link href="/filmography">
                <button className="retro-button mr-6">View Filmography</button>
              </Link>
              <Link href="/contact">
                <button className="retro-button">Get In Touch</button>
              </Link>
            </div>
          </div>
        </section>

        {/* Sample Works */}
        <section className="py-20">
          <div className="container mx-auto px-6 max-w-6xl">
            <div className="text-center mb-16">
              <h2 className="display-2 retro-title mb-4">Selected Works</h2>
              <div className="elegant-divider"></div>
              <p className="retro-body text-gray-400">
                A curated selection showcasing visual depth, rhythm, and storytelling
              </p>
            </div>

            <div className="vintage-grid">
              {sampleWorks.map((work) => (
                <div key={work.id} className="vintage-card group">
                  <div>
                    <Image
                      src={work.image || "/placeholder.svg"}
                      alt={work.title}
                      width={600}
                      height={400}
                      className="w-full h-64 object-cover desaturated"
                    />
                  </div>
                  <div className="p-6">
                    <div className="retro-accent text-xs uppercase tracking-widest text-gray-500 mb-2">
                      {work.category}
                    </div>
                    <h3 className="retro-subtitle text-xl mb-2">{work.title}</h3>
                    <p className="retro-body text-gray-400 text-sm">{work.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* About Section */}
        <section className="py-20">
          <div className="container mx-auto px-6 max-w-4xl text-center">
            <h2 className="display-2 retro-title mb-8">Visual Philosophy</h2>
            <div className="elegant-divider"></div>
            <p className="retro-body text-lg text-gray-300 leading-relaxed mb-8">
              Currently based in Tunisia, I'm always looking to collaborate on projects that value visual depth, rhythm,
              and storytelling. Every project is an opportunity to explore the intersection of technical mastery and
              emotional resonance.
            </p>
            <p className="retro-body text-gray-400">
              From narrative films to commercial work, each frame is crafted with intention and purpose.
            </p>
          </div>
        </section>
      </main>

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
