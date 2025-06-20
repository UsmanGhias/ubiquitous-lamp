'use client'

import React from 'react'
import Link from 'next/link'
import { Heart, ArrowUp, Github, Linkedin, Mail, MessageCircle } from 'lucide-react'
import { userData } from '@/lib/data'

const navigation = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Experience', href: '#experience' },
  { name: 'Projects', href: '#projects' },
  { name: 'Contact', href: '#contact' },
]

const services = [
  'Web Development',
  'Odoo Development',
  'Mobile Apps',
  'Data Science',
  'Shopify Stores',
  'WordPress Sites',
]

const socialLinks = [
  { name: 'GitHub', href: userData.socialLinks.github, icon: Github },
  { name: 'LinkedIn', href: userData.socialLinks.linkedin, icon: Linkedin },
  { name: 'Email', href: `mailto:${userData.email}`, icon: Mail },
  { name: 'WhatsApp', href: userData.socialLinks.whatsapp, icon: MessageCircle },
]

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="bg-dark-100 text-white">
      <div className="container mx-auto container-padding">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Brand & Description */}
            <div className="lg:col-span-2 space-y-6">
              <div>
                <Link
                  href="/"
                  className="flex items-center space-x-2 text-2xl font-bold"
                >
                  <span className="gradient-text">Usman</span>
                  <span className="text-accent">Ghias</span>
                </Link>
                <p className="text-white/70 mt-4 max-w-md">
                  {userData.title}. Passionate about creating innovative solutions that make a difference.
                </p>
              </div>

              <div className="space-y-3">
                <p className="text-white/90">
                  <strong>Location:</strong> {userData.location}
                </p>
                <p className="text-white/90">
                  <strong>Email:</strong>{' '}
                  <Link 
                    href={`mailto:${userData.email}`}
                    className="text-accent hover:text-accent/80 transition-colors"
                  >
                    {userData.email}
                  </Link>
                </p>
                <p className="text-white/90">
                  <strong>Phone:</strong>{' '}
                  <Link 
                    href={`tel:${userData.phone}`}
                    className="text-accent hover:text-accent/80 transition-colors"
                  >
                    {userData.phone}
                  </Link>
                </p>
              </div>

              {/* Social Links */}
              <div className="flex space-x-4">
                {socialLinks.map((link) => {
                  if (!link.href) return null
                  const Icon = link.icon
                  return (
                    <Link
                      key={link.name}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 bg-white/10 hover:bg-accent hover:text-white rounded-lg flex items-center justify-center transition-all duration-300"
                    >
                      <Icon size={20} />
                    </Link>
                  )
                })}
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
              <ul className="space-y-3">
                {navigation.map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className="text-white/70 hover:text-accent transition-colors"
                      onClick={(e) => {
                        e.preventDefault()
                        const element = document.querySelector(item.href)
                        element?.scrollIntoView({ behavior: 'smooth' })
                      }}
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div>
              <h3 className="text-lg font-semibold mb-6">Services</h3>
              <ul className="space-y-3">
                {services.map((service) => (
                  <li key={service}>
                    <span className="text-white/70">{service}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-white/10 py-8">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <div className="flex items-center space-x-1 text-white/70">
              <span>© {new Date().getFullYear()} Usman Ghias. Made with</span>
              <Heart size={16} className="text-red-500 mx-1" />
              <span>using Next.js & TypeScript</span>
            </div>

            <div className="flex items-center space-x-6">
              <Link
                href="/privacy"
                className="text-white/70 hover:text-accent transition-colors text-sm"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms"
                className="text-white/70 hover:text-accent transition-colors text-sm"
              >
                Terms of Service
              </Link>
              <button
                onClick={scrollToTop}
                className="flex items-center space-x-1 text-white/70 hover:text-accent transition-colors text-sm"
              >
                <ArrowUp size={16} />
                <span>Back to top</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 w-12 h-12 bg-primary hover:bg-primary/90 text-primary-foreground rounded-full flex items-center justify-center shadow-lg transition-all duration-300 hover:scale-110 z-50"
        aria-label="Scroll to top"
      >
        <ArrowUp size={20} />
      </button>
    </footer>
  )
} 