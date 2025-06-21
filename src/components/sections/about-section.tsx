'use client'

import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { MapPin, Phone, Mail, Calendar, Award, Users, Code, Coffee, GraduationCap, Globe, Database, Brain } from 'lucide-react'
import { userData, stats } from '@/lib/data'
import { useSettings } from '@/hooks/useSettings'

export function AboutSection() {
  const { settings, isLoading } = useSettings()

  if (isLoading || !settings) {
    return (
      <div className="flex items-center justify-center h-40">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
      </div>
    )
  }

  return (
    <section id="about" className="section-padding bg-background">
      <div className="container mx-auto container-padding">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-section-title gradient-text mb-4">About Me</h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            Get to know more about my journey, skills, and passion for creating innovative solutions
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div>
              <h3 className="text-2xl font-bold mb-4">Hello! I'm {userData.name}</h3>
              <p className="text-foreground/80 leading-relaxed mb-6">
                {userData.bio}
              </p>
              <p className="text-foreground/80 leading-relaxed">
                I specialize in creating scalable web applications, custom Odoo solutions, 
                and data-driven insights. My passion lies in solving complex problems through 
                innovative technology solutions that make a real impact.
              </p>
            </div>

            {/* Contact Info */}
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-primary" />
                <span className="text-foreground/80">{userData.location}</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-primary" />
                <span className="text-foreground/80">{userData.phoneSecondary}</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-primary" />
                <span className="text-foreground/80">{userData.email}</span>
              </div>
              <div className="flex items-center space-x-3">
                <Calendar className="w-5 h-5 text-primary" />
                <span className="text-foreground/80">Available for projects</span>
              </div>
            </div>

            {/* Achievements */}
            <div className="grid grid-cols-2 gap-4 pt-6 border-t border-border/50">
              <div className="flex items-center space-x-3">
                <GraduationCap className="w-5 h-5 text-accent" />
                <div>
                  <div className="font-semibold">MSSE @Quantic</div>
                  <div className="text-sm text-foreground/60">Current Student</div>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Award className="w-5 h-5 text-accent" />
                <div>
                  <div className="font-semibold">PUCIT Graduate</div>
                  <div className="text-sm text-foreground/60">Software Engineering</div>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Users className="w-5 h-5 text-accent" />
                <div>
                  <div className="font-semibold">CEO @CODCrafters</div>
                  <div className="text-sm text-foreground/60">Tech Startup</div>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Code className="w-5 h-5 text-accent" />
                <div>
                  <div className="font-semibold">Senior Odoo Expert</div>
                  <div className="text-sm text-foreground/60">86+ Projects</div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Image & Stats */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Profile Image */}
            <div className="relative">
              <div className="relative w-80 h-80 mx-auto rounded-2xl overflow-hidden glow">
                <Image
                  src={settings.aboutImage}
                  alt="Muhammad Usman Khan - About"
                  fill
                  className="object-cover"
                />
              </div>
              
              {/* Floating Stats */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute -top-4 -left-4 bg-card border border-border rounded-lg p-4 shadow-lg"
              >
                <Globe className="w-6 h-6 text-primary mb-2" />
                <div className="text-sm font-semibold">Full Stack</div>
                <div className="text-xs text-foreground/60">Developer</div>
              </motion.div>
              
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 3, repeat: Infinity, delay: 1 }}
                className="absolute top-1/2 -right-4 bg-card border border-border rounded-lg p-4 shadow-lg"
              >
                <Database className="w-6 h-6 text-accent mb-2" />
                <div className="text-sm font-semibold">Odoo Expert</div>
                <div className="text-xs text-foreground/60">86+ Projects</div>
              </motion.div>

              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity, delay: 1.5 }}
                className="absolute -bottom-4 -left-4 bg-card border border-border rounded-lg p-4 shadow-lg"
              >
                <Brain className="w-6 h-6 text-primary mb-2" />
                <div className="text-sm font-semibold">AI & ML</div>
                <div className="text-xs text-foreground/60">Enthusiast</div>
              </motion.div>
            </div>

            {/* Statistics */}
            <div className="grid grid-cols-2 gap-4">
              {stats.slice(0, 4).map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center p-4 card hover:shadow-lg transition-shadow"
                >
                  <div className="text-2xl font-bold gradient-text mb-1">
                    {stat.value}
                  </div>
                  <div className="text-sm text-foreground/60">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
} 