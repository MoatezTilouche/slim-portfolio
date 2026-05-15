"use client"

import React, { createContext, useContext, useState, useEffect } from "react"

type Language = "en" | "fr"

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: string) => string
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

// Translation Dictionary
const translations: Record<Language, Record<string, string>> = {
  en: {
    // Nav
    "nav.home": "Home",
    "nav.filmography": "Filmography",
    "nav.photography": "Photography",
    "nav.commercial": "Commercial",
    "nav.contact": "Contact",

    // Filmography
    "film.title": "FILMOGRAPHY",
    "film.subtitle": "A comprehensive collection of films showcasing visual storytelling, technical precision, and emotional impact.",
    "film.details": "Film Details",
    "film.director": "Director",
    "film.duration": "Duration",
    "film.year": "Year",
    "film.location": "Location",
    "film.roles": "My Roles",
    "film.awards": "Awards",
    "film.description": "Description",
    "film.bts": "Behind the Scenes",
    "film.highlights": "Key Highlights",
    "film.award_winner": "AWARD WINNER",

    // Photography
    "photo.title": "PHOTOGRAPHY",
    "photo.subtitle": "A curated exhibition of 50 photographs showcasing the art of capturing moments, emotions, and stories.",
    "photo.award_recognition": "Award Recognition",
    "photo.fifak_winner": "Best Photography Winner at FIFAK Exhibition Competition 2025",
    "photo.quote": "A moment captured that speaks louder than words",
    "photo.statement_title": "Artist Statement",
    "photo.statement_p1": "Photography is my way of freezing time, capturing the essence of a moment that will never happen again in exactly the same way.",
    "photo.statement_p2": "From street photography to portraits, from landscapes to abstract compositions, this exhibition showcases the diversity of my photographic vision.",

    // Commercial
    "comm.title": "COMMERCIAL WORK",
    "comm.subtitle": "Commercial portfolio showcasing music video cinematography, exhibition documentation, and event coverage.",
    "comm.exhibition": "Exhibition Documentation",
    "comm.event": "Event Coverage",
    "comm.approach_title": "Commercial Approach",
    "comm.approach_p1": "Commercial work requires a different mindset — balancing artistic vision with client needs and delivering consistent quality.",
    "comm.approach_p2": "From music videos to event coverage, each project is an opportunity to tell a story while meeting professional standards.",

    // Home
    "home.title": "DIRECTOR OF PHOTOGRAPHY",
    "home.subtitle": "Colorist & Visual Storyteller",
    "home.description": "With a background in cinema and a passion for crafting powerful images — whether in motion or still. My work moves between narrative films, photography, and commissioned projects like music videos and event coverage. I approach every frame with intention, balancing technical precision with emotional impact.",
    "home.view_filmography": "View Filmography",
    "home.get_in_touch": "Get In Touch",
    "home.selected_works": "Selected Works",
    "home.selected_subtitle": "A curated selection showcasing visual depth, rhythm, and storytelling",
    "home.philosophy_title": "Visual Philosophy",
    "home.philosophy_p1": "Currently based in Tunisia, I'm always looking to collaborate on projects that value visual depth, rhythm, and storytelling. Every project is an opportunity to explore the intersection of technical mastery and emotional resonance.",
    "home.philosophy_p2": "From narrative films to commercial work, each frame is crafted with intention and purpose.",

    // Contact Page
    "contact.page_title": "CONTACT",
    "contact.page_subtitle": "Ready to collaborate on your next project? Whether it's a film, commercial work, or photography session, I'd love to hear about your vision and how we can bring it to life together.",
    "contact.about_title": "About",
    "contact.about_p1": "Director of Photography, colorist, and visual storyteller with a background in cinema and a passion for crafting powerful images — whether in motion or still. My work moves between narrative films, photography, and commissioned projects like music videos and event coverage.",
    "contact.about_p2": "I approach every frame with intention, balancing technical precision with emotional impact. Currently based in Tunisia, I'm always looking to collaborate on projects that value visual depth, rhythm, and storytelling.",
    "contact.get_in_touch": "Get In Touch",
    "contact.follow_work": "Follow My Work",
    "contact.services": "Services",
    "contact.start_project": "Start a Project",
    "contact.cta_subtitle": "Let's create something meaningful together",
    "contact.quote": "Every great film starts with a conversation about vision, story, and the power of visual storytelling.",

    // Common
    "footer.rights": "All rights reserved.",
    "loader.loading": "Loading Experience..."
  },
  fr: {
    // Nav
    "nav.home": "Accueil",
    "nav.filmography": "Filmographie",
    "nav.photography": "Photographie",
    "nav.commercial": "Commercial",
    "nav.contact": "Contact",

    // Home
    "home.title": "DIRECTEUR DE LA PHOTOGRAPHIE",
    "home.subtitle": "Étalonneur & Conteur Visuel",
    "home.description": "Avec une formation en cinéma et une passion pour la création d'images puissantes — qu'elles soient en mouvement ou fixes. Mon travail alterne entre films narratifs, photographie et projets de commande comme des clips musicaux et la couverture d'événements. J'aborde chaque image avec intention, équilibrant précision technique et impact émotionnel.",
    "home.view_filmography": "Voir la Filmographie",
    "home.get_in_touch": "Me Contacter",
    "home.selected_works": "Travaux Sélectionnés",
    "home.selected_subtitle": "Une sélection soignée illustrant la profondeur visuelle, le rythme et la narration",
    "home.philosophy_title": "Philosophie Visuelle",
    "home.philosophy_p1": "Actuellement basé en Tunisie, je cherche toujours à collaborer sur des projets qui valorisent la profondeur visuelle, le rythme et la narration. Chaque projet est une occasion d'explorer l'intersection entre maîtrise technique et résonance émotionnelle.",
    "home.philosophy_p2": "Des films narratifs aux travaux commerciaux, chaque image est conçue avec intention et but.",

    // Contact Page
    "contact.page_title": "CONTACT",
    "contact.page_subtitle": "Prêt à collaborer sur votre prochain projet ? Qu'il s'agisse d'un film, d'un travail commercial ou d'une séance photo, j'aimerais connaître votre vision et comment nous pouvons lui donner vie ensemble.",
    "contact.about_title": "À Propos",
    "contact.about_p1": "Directeur de la photographie, étalonneur et conteur visuel avec une formation en cinéma et une passion pour la création d'images puissantes — en mouvement ou fixes. Mon travail alterne entre films narratifs, photographie et projets de commande.",
    "contact.about_p2": "J'aborde chaque image avec intention, équilibrant précision technique et impact émotionnel. Actuellement basé en Tunisie, je cherche toujours à collaborer sur des projets valorisant la profondeur visuelle et le récit.",
    "contact.get_in_touch": "Contactez-moi",
    "contact.follow_work": "Suivre mon travail",
    "contact.services": "Services",
    "contact.start_project": "Démarrer un projet",
    "contact.cta_subtitle": "Créons quelque chose de significatif ensemble",
    "contact.quote": "Chaque grand film commence par une conversation sur la vision, l'histoire et la puissance de la narration visuelle.",

    // Filmography
    "film.title": "FILMOGRAPHIE",
    "film.subtitle": "Une collection complète de films illustrant la narration visuelle, la précision technique et l'impact émotionnel.",
    "film.details": "Détails du Film",
    "film.director": "Réalisateur",
    "film.duration": "Durée",
    "film.year": "Année",
    "film.location": "Lieu",
    "film.roles": "Mes Rôles",
    "film.awards": "Prix",
    "film.description": "Description",
    "film.bts": "Coulisses",
    "film.highlights": "Points Forts",
    "film.award_winner": "LAURÉAT",

    // Photography
    "photo.title": "PHOTOGRAPHIE",
    "photo.subtitle": "Une exposition de 50 photographies illustrant l'art de capturer des moments, des émotions et des histoires.",
    "photo.award_recognition": "Reconnaissance",
    "photo.fifak_winner": "Vainqueur du Prix de la Meilleure Photographie à la FIFAK 2025",
    "photo.quote": "Un moment capturé qui parle plus fort que les mots",
    "photo.statement_title": "Déclaration d'Artiste",
    "photo.statement_p1": "La photographie est ma façon de figer le temps, de capturer l'essence d'un moment qui ne se reproduira jamais de la même manière.",
    "photo.statement_p2": "De la photographie de rue aux portraits, des paysages aux compositions abstraites, cette exposition montre la diversité de ma vision.",

    // Commercial
    "comm.title": "TRAVAIL COMMERCIAL",
    "comm.subtitle": "Portfolio commercial présentant la cinématographie de clips musicaux, la documentation d'expositions et la couverture d'événements.",
    "comm.exhibition": "Documentation d'Exposition",
    "comm.event": "Couverture d'Événement",
    "comm.approach_title": "Approche Commerciale",
    "comm.approach_p1": "Le travail commercial exige un état d'esprit différent — équilibrer la vision artistique avec les besoins du client.",
    "comm.approach_p2": "Des clips musicaux à la couverture d'événements, chaque projet est l'occasion de raconter une histoire selon des standards professionnels.",

    // Contact
    "contact.title": "CONTACTEZ-MOI",
    "contact.subtitle": "Disponible pour des projets et collaborations dans le monde entier.",
    "contact.form_name": "Nom",
    "contact.form_email": "Email",
    "contact.form_subject": "Sujet",
    "contact.form_message": "Message",
    "contact.form_send": "Envoyer le Message",
    "contact.info": "Coordonnées",

    // Common
    "footer.rights": "Tous droits réservés.",
    "loader.loading": "Chargement de l'expérience..."
  }
}

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>("en")

  // Load preference from localStorage
  useEffect(() => {
    const saved = localStorage.getItem("language") as Language
    if (saved && (saved === "en" || saved === "fr")) {
      setLanguage(saved)
    }
  }, [])

  const handleSetLanguage = (lang: Language) => {
    setLanguage(lang)
    localStorage.setItem("language", lang)
  }

  const t = (key: string) => {
    return translations[language][key] || key
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage: handleSetLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export const useLanguage = () => {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}
