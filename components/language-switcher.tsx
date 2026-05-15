"use client"

import { useLanguage } from "@/contexts/language-context"

export function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage()
  const isFrench = language === "fr"

  const handleToggle = () => {
    setLanguage(isFrench ? "en" : "fr")
  }

  return (
    <div className="language-switcher-nav">
      <div className="toggle-cont">
        <input 
          className="toggle-input" 
          id="toggle" 
          name="toggle" 
          type="checkbox" 
          checked={isFrench}
          onChange={handleToggle}
        />
        <label className="toggle-label" htmlFor="toggle">
          <div className="cont-icon">
            <span style={{ "--width": "2", "--deg": "25", "--duration": "11" } as any} className="sparkle"></span>
            <span style={{ "--width": "1", "--deg": "100", "--duration": "18" } as any} className="sparkle"></span>
            <span style={{ "--width": "1", "--deg": "280", "--duration": "5" } as any} className="sparkle"></span>
            <span style={{ "--width": "2", "--deg": "200", "--duration": "3" } as any} className="sparkle"></span>
            <span style={{ "--width": "2", "--deg": "30", "--duration": "20" } as any} className="sparkle"></span>
            <span style={{ "--width": "2", "--deg": "300", "--duration": "9" } as any} className="sparkle"></span>
            <span style={{ "--width": "1", "--deg": "250", "--duration": "4" } as any} className="sparkle"></span>
            <span style={{ "--width": "2", "--deg": "210", "--duration": "8" } as any} className="sparkle"></span>
            <span style={{ "--width": "2", "--deg": "100", "--duration": "9" } as any} className="sparkle"></span>
            <span style={{ "--width": "1", "--deg": "15", "--duration": "13" } as any} className="sparkle"></span>
            <span style={{ "--width": "1", "--deg": "75", "--duration": "18" } as any} className="sparkle"></span>
            <span style={{ "--width": "2", "--deg": "65", "--duration": "6" } as any} className="sparkle"></span>
            <span style={{ "--width": "2", "--deg": "50", "--duration": "7" } as any} className="sparkle"></span>
            <span style={{ "--width": "1", "--deg": "320", "--duration": "5" } as any} className="sparkle"></span>
            <span style={{ "--width": "1", "--deg": "220", "--duration": "5" } as any} className="sparkle"></span>
            <span style={{ "--width": "1", "--deg": "215", "--duration": "2" } as any} className="sparkle"></span>
            <span style={{ "--width": "2", "--deg": "135", "--duration": "9" } as any} className="sparkle"></span>
            <span style={{ "--width": "2", "--deg": "45", "--duration": "4" } as any} className="sparkle"></span>
            <span style={{ "--width": "1", "--deg": "78", "--duration": "16" } as any} className="sparkle"></span>
            <span style={{ "--width": "1", "--deg": "89", "--duration": "19" } as any} className="sparkle"></span>
            <span style={{ "--width": "2", "--deg": "65", "--duration": "14" } as any} className="sparkle"></span>
            <span style={{ "--width": "2", "--deg": "97", "--duration": "1" } as any} className="sparkle"></span>
            <span style={{ "--width": "1", "--deg": "174", "--duration": "10" } as any} className="sparkle"></span>
            <span style={{ "--width": "1", "--deg": "236", "--duration": "5" } as any} className="sparkle"></span>
            
            {/* Flag Icons */}
            <div className="flex items-center justify-center w-full h-full">
              {!isFrench ? (
                // UK Flag (English)
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 60 30" className="w-5 h-auto">
                  <clipPath id="s"><path d="M0,0 v30 h60 v-30 z"/></clipPath>
                  <path d="M0,0 v30 h60 v-30 z" fill="#012169"/>
                  <path d="M0,0 L60,30 M60,0 L0,30" stroke="#fff" strokeWidth="6"/>
                  <path d="M0,0 L60,30 M60,0 L0,30" stroke="#C8102E" strokeWidth="4"/>
                  <path d="M30,0 v30 M0,15 h60" stroke="#fff" strokeWidth="10"/>
                  <path d="M30,0 v30 M0,15 h60" stroke="#C8102E" strokeWidth="6"/>
                </svg>
              ) : (
                // French Flag
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 3 2" className="w-5 h-auto">
                  <rect width="1" height="2" fill="#002395"/>
                  <rect width="1" height="2" x="1" fill="#fff"/>
                  <rect width="1" height="2" x="2" fill="#ED2939"/>
                </svg>
              )}
            </div>
          </div>
        </label>
      </div>
    </div>
  )
}
