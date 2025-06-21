'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { TypeAnimation } from 'react-type-animation'
import { ArrowDown, Download, MessageCircle, Code, GraduationCap, Database } from 'lucide-react'
import { motion } from 'framer-motion'
import { useSettings } from '@/hooks/useSettings'

export function HeroSection() {
  const { settings, isLoading } = useSettings()

  if (isLoading || !settings) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-primary"></div>
      </div>
    )
  }

  const handleProjectsClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()
    document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="home" className="min-h-screen flex items-center justify-center hero-bg section-padding">
      <div className="container mx-auto container-padding">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <div className="space-y-2">
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="text-lg text-foreground/80"
              >
                Hello, I'm
              </motion.p>
              
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="text-hero gradient-text"
              >
                {settings.name}
              </motion.h1>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.6 }}
                className="text-2xl md:text-3xl lg:text-4xl font-semibold text-foreground/90 min-h-[80px]"
              >
                <TypeAnimation
                  sequence={[
                    'Senior Odoo Developer',
                    2000,
                    'Full Stack Developer',
                    2000,
                    'MERN Stack Expert',
                    2000,
                    'AI Engineer',
                    2000,
                  ]}
                  wrapper="span"
                  speed={50}
                  repeat={Infinity}
                />
              </motion.div>
            </div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="text-lg text-foreground/70 max-w-2xl leading-relaxed"
            >
              Passionate software engineer from PUCIT with expertise in full-stack development, 
              Odoo customization, and data science. Currently pursuing MSSE at Quantic School and 
              based in Washington, D.C. I've successfully delivered 86+ Odoo projects and love 
              creating innovative solutions that make a difference.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.6 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Link
                href="#projects"
                className="inline-flex items-center justify-center px-8 py-4 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-all duration-300 glow-hover"
                onClick={handleProjectsClick}
              >
                View My Work
                <ArrowDown className="ml-2 h-5 w-5" />
              </Link>
              
              <Link
                href="/resume.pdf"
                target="_blank"
                className="inline-flex items-center justify-center px-8 py-4 border border-border bg-background hover:bg-accent/10 rounded-lg font-semibold transition-all duration-300"
              >
                <Download className="mr-2 h-5 w-5" />
                Download CV
              </Link>
              
              <Link
                href="https://wa.link/8soaqu"
                target="_blank"
                className="inline-flex items-center justify-center px-8 py-4 bg-green-600 text-white rounded-lg font-semibold hover:bg-green-700 transition-all duration-300"
              >
                <MessageCircle className="mr-2 h-5 w-5" />
                WhatsApp
              </Link>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2, duration: 0.6 }}
              className="grid grid-cols-3 gap-8 pt-8 border-t border-border/50"
            >
              <div className="text-center">
                <div className="text-3xl font-bold gradient-text">86+</div>
                <div className="text-sm text-foreground/60">Odoo Projects</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold gradient-text">50+</div>
                <div className="text-sm text-foreground/60">Happy Clients</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold gradient-text">4+</div>
                <div className="text-sm text-foreground/60">Years Experience</div>
              </div>
            </motion.div>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative w-full max-w-lg mx-auto">
              {/* Decorative elements */}
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-primary/20 rounded-full blur-xl"></div>
              <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-accent/20 rounded-full blur-xl"></div>
              
              {/* Main image */}
              <div className="relative z-10 rounded-2xl overflow-hidden glow">
                <Image
                  src={settings.heroImage}
                  alt={settings.name}
                  width={500}
                  height={600}
                  className="w-full h-auto object-cover"
                  priority
                />
              </div>
              
              {/* Floating badges - Only keeping the top two best ones */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="absolute -left-8 top-8 bg-card border border-border rounded-lg p-3 shadow-lg"
              >
                <Database className="w-6 h-6 text-primary mb-2" />
                <div className="text-sm font-semibold">Senior Odoo</div>
                <div className="text-xs text-foreground/60">Expert</div>
              </motion.div>
              
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
                className="absolute -right-8 top-16 bg-card border border-border rounded-lg p-3 shadow-lg"
              >
                <GraduationCap className="w-6 h-6 text-accent mb-2" />
                <div className="text-sm font-semibold">MSSE @Quantic</div>
                <div className="text-xs text-foreground/60">Student</div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
} 