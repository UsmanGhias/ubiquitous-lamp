import React from 'react'
import { motion } from 'framer-motion'
import { useSettings } from '@/hooks/useSettings'
import Image from 'next/image'
import { Github, Linkedin, Twitter } from 'lucide-react'

export default function About() {
  const { settings, isLoading } = useSettings()

  if (isLoading || !settings) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-primary"></div>
      </div>
    )
  }

  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid md:grid-cols-2 gap-12 items-center"
        >
          {/* Image */}
          <div className="relative aspect-square rounded-2xl overflow-hidden">
            <Image
              src={settings.aboutImage}
              alt={settings.name}
              fill
              className="object-cover"
            />
          </div>

          {/* Content */}
          <div className="space-y-6">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-3xl font-bold"
            >
              About Me
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-foreground/80"
            >
              {settings.about}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="space-y-4"
            >
              <div className="flex items-center space-x-2">
                <span className="font-medium">Location:</span>
                <span className="text-foreground/80">{settings.location}</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="font-medium">Email:</span>
                <a
                  href={`mailto:${settings.email}`}
                  className="text-foreground/80 hover:text-primary"
                >
                  {settings.email}
                </a>
              </div>
              <div className="flex items-center space-x-2">
                <span className="font-medium">Phone:</span>
                <a
                  href={`tel:${settings.phone}`}
                  className="text-foreground/80 hover:text-primary"
                >
                  {settings.phone}
                </a>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex space-x-4 pt-4"
            >
              <a
                href={settings.socialLinks.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-accent rounded-full hover:bg-accent/80 transition-colors"
              >
                <Github size={24} />
              </a>
              <a
                href={settings.socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-accent rounded-full hover:bg-accent/80 transition-colors"
              >
                <Linkedin size={24} />
              </a>
              <a
                href={settings.socialLinks.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-accent rounded-full hover:bg-accent/80 transition-colors"
              >
                <Twitter size={24} />
              </a>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
} 