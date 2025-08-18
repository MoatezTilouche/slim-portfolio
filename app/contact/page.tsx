import { useState, useEffect } from "react"

import Image from "next/image"
import Link from "next/link"
import { RetroNav } from "@/components/retro-nav"
import { Mail, Instagram, Facebook, Linkedin, Phone, MapPin } from "lucide-react"

export default function ContactPage() {
    

  return (
    <div className="min-h-screen bg-black">
      <RetroNav />

      <main className="pt-24 pb-20">
        <div className="container mx-auto px-6 max-w-6xl">
          {/* Header */}
          <section className="text-center py-16">
            <h1 className="display-1 retro-title mb-8">CONTACT</h1>
            <div className="elegant-divider"></div>
            <p className="retro-body text-lg text-gray-400 max-w-3xl mx-auto">
              Ready to collaborate on your next project? Whether it's a film, commercial work, or photography session,
              I'd love to hear about your vision and how we can bring it to life together.
            </p>
          </section>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Personal Photo & Bio */}
            <div className="space-y-8">
              <div className="text-center">
                <div className="minimal-border inline-block p-4 bg-gray-900">
                  <Image
                    src="/contact.JPEG"
                    alt="Slim Abroug - Director of Photography"
                    width={400}
                    height={500}
                    className="w-80 h-96 object-cover desaturated mx-auto"
                  />
                </div>
                <div className="mt-6">
                  <h3 className="retro-title text-2xl mb-2">SLIM ABROUG</h3>
                  <p className="retro-accent text-sm text-gray-400 uppercase tracking-widest">
                    Director of Photography • Colorist • Visual Storyteller
                  </p>
                </div>
              </div>

              <div className="minimal-border p-8 bg-gray-900">
                <h3 className="retro-subtitle text-xl mb-4">About</h3>
                <p className="retro-body text-gray-300 leading-relaxed mb-4">
                  Director of Photography, colorist, and visual storyteller with a background in cinema and a passion
                  for crafting powerful images — whether in motion or still. My work moves between narrative films,
                  photography, and commissioned projects like music videos and event coverage.
                </p>
                <p className="retro-body text-gray-400 leading-relaxed">
                  I approach every frame with intention, balancing technical precision with emotional impact. Currently
                  based in Tunisia, I'm always looking to collaborate on projects that value visual depth, rhythm, and
                  storytelling.
                </p>
              </div>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              <div className="minimal-border p-8 bg-gray-900">
                <h3 className="retro-subtitle text-xl mb-6">Get In Touch</h3>

                <div className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <Mail className="h-5 w-5 text-gray-500" />
                    <div>
                      <p className="retro-accent text-sm uppercase tracking-widest text-gray-500">Email</p>
                      <a
                        href="mailto:slim.abroug@email.com"
                        className="retro-body text-gray-300 hover:text-white transition-colors"
                      >
                        contact.slimabroug@gmail.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <Phone className="h-5 w-5 text-gray-500" />
                    <div>
                      <p className="retro-accent text-sm uppercase tracking-widest text-gray-500">Phone</p>
                      <a
                        href="tel:+21612345678"
                        className="retro-body text-gray-300 hover:text-white transition-colors"
                      >
                        +216 50 929 452
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <MapPin className="h-5 w-5 text-gray-500" />
                    <div>
                      <p className="retro-accent text-sm uppercase tracking-widest text-gray-500">Location</p>
                      <p className="retro-body text-gray-300">Tunisia</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Social Media */}
              <div className="minimal-border p-8 bg-gray-900">
                <h3 className="retro-subtitle text-xl mb-6">Follow My Work</h3>

                <div className="grid grid-cols-2 gap-4">
                  <Link
                    href="https://www.instagram.com/milsguorba?igsh=MWN2NWhtcGIyYzA3ZA=="
                    className="retro-button text-center"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Instagram className="h-4 w-4 mx-auto mb-2" />
                    Instagram
                  </Link>

                  <Link href="https://www.facebook.com/slim.abroug" className="retro-button text-center">
                    <Facebook className="h-4 w-4 mx-auto mb-2" />
                    Facebook
                  </Link>

                  <Link href="https://www.linkedin.com/in/slim-abroug" className="retro-button text-center">
                    <Linkedin className="h-4 w-4 mx-auto mb-2" />
                    LinkedIn
                  </Link>

                  {/* <Link href="#" className="retro-button text-center">
                    <Mail className="h-4 w-4 mx-auto mb-2" />
                    Behance
                  </Link> */}
                </div>
              </div>

              {/* Services */}
              <div className="minimal-border p-8 bg-gray-900">
                <h3 className="retro-subtitle text-xl mb-6">Services</h3>

                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <span className="w-2 h-2 bg-white"></span>
                    <span className="retro-body">Director of Photography</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <span className="w-2 h-2 bg-white"></span>
                    <span className="retro-body">Color Grading & Correction</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <span className="w-2 h-2 bg-white"></span>
                    <span className="retro-body">Camera Operation</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <span className="w-2 h-2 bg-white"></span>
                    <span className="retro-body">Professional Photography</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <span className="w-2 h-2 bg-white"></span>
                    <span className="retro-body">Event Coverage</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <span className="w-2 h-2 bg-white"></span>
                    <span className="retro-body">Visual Storytelling Consultation</span>
                  </div>
                </div>
              </div>

              {/* Call to Action */}
              <div className="text-center">
                <a href="mailto:slim.abroug@email.com" className="retro-button inline-block mb-4">
                  Start a Project
                </a>
                <p className="retro-accent text-sm text-gray-500 uppercase tracking-widest">
                  Let's create something meaningful together
                </p>
              </div>
            </div>
          </div>

          {/* Closing Statement */}
          <section className="py-20">
            <div className="max-w-3xl mx-auto text-center">
              <div className="minimal-border p-8 bg-gray-900">
                <p className="retro-subtitle text-xl text-gray-300 mb-4">
                  "Every great film starts with a conversation about vision, story, and the power of visual
                  storytelling."
                </p>
                <p className="retro-accent text-sm text-gray-500 uppercase tracking-widest">— Slim Abroug</p>
              </div>
            </div>
          </section>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-gray-800 py-12">
        <div className="container mx-auto px-6 text-center">
          <p className="retro-accent text-sm text-gray-500 uppercase tracking-widest">
            © 2025 Slim Abroug. All rights reserved.
          </p>
           <p className="retro-accent text-sm text-gray-500 uppercase tracking-widest">
            © Developed By Moatez Tilouche.
          </p>
        </div>
      </footer>
    </div>
  )
}
