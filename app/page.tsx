"use client";
import { GalleryImage, HeroImage } from "@/components/ui/optimized-image";
import Link from "next/link";
import { RetroNav } from "@/components/retro-nav";
import Loader from "@/components/loader";
import { useState, useEffect } from "react";
import { useLanguage } from "@/contexts/language-context";

export default function HomePage() {
  const { t } = useLanguage();
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
                {t("home.title").split(" OF ").length > 1 ? (
                   <>
                     {t("home.title").split(" OF ")[0]} OF
                     <br />
                     {t("home.title").split(" OF ")[1]}
                   </>
                ) : t("home.title").includes("PHOTOGRAPHIE") ? (
                  <>
                    DIRECTEUR DE LA
                    <br />
                    PHOTOGRAPHIE
                  </>
                ) : t("home.title")}
              </h1>

              <div className="elegant-divider"></div>

              <p className="display-3 retro-subtitle text-gray-300 mb-8 max-w-4xl mx-auto">
                {t("home.subtitle")}
              </p>

              <p className="retro-body text-lg text-gray-400 max-w-3xl mx-auto leading-relaxed">
                {t("home.description")}
              </p>
            </div>

            <div className="text-center mb-20">
              <Link href="/filmography">
                <button className="retro-button mr-6">{t("home.view_filmography")}</button>
              </Link>
              <Link href="/contact">
                <button className="retro-button">{t("home.get_in_touch")}</button>
              </Link>
            </div>
          </div>
        </section>

        {/* Sample Works */}
        <section className="py-20">
          <div className="container mx-auto px-6 max-w-6xl">
            <div className="text-center mb-16">
              <h2 className="display-2 retro-title mb-4">{t("home.selected_works")}</h2>
              <div className="elegant-divider"></div>
              <p className="retro-body text-gray-400">
                {t("home.selected_subtitle")}
              </p>
            </div>

            <div className="vintage-grid">
              {sampleWorks.map((work) => (
                <div key={work.id} className="vintage-card group">
                  <div>
                    <GalleryImage
                      src={work.image || "/placeholder.svg"}
                      alt={work.title}
                      width={1000}
                      height={500}
                      className=" h-full object-cover "
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
            <h2 className="display-2 retro-title mb-8">{t("home.philosophy_title")}</h2>
            <div className="elegant-divider"></div>
            <p className="retro-body text-lg text-gray-300 leading-relaxed mb-8">
              {t("home.philosophy_p1")}
            </p>
            <p className="retro-body text-gray-400">
              {t("home.philosophy_p2")}
            </p>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-gray-800 py-12">
        <div className="container mx-auto px-6 text-center">
          <p className="retro-accent text-sm text-gray-500 uppercase tracking-widest">
            © 2025 Slim Abroug. {t("footer.rights")}
          </p>
          <p className="retro-accent text-sm text-gray-500 uppercase tracking-widest">
            © Developed By Moatez Tilouche.
          </p>
        </div>
      </footer>
    </div>
  )
}
