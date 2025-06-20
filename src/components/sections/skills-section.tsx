'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { skills } from '@/lib/data'
import type { SkillCategory } from '@/types'

const skillCategories = [
  { value: 'all', label: 'All Skills' },
  { value: 'programming', label: 'Programming' },
  { value: 'framework', label: 'Frameworks' },
  { value: 'database', label: 'Databases' },
  { value: 'tool', label: 'Tools' },
  { value: 'cloud', label: 'Cloud' },
  { value: 'design', label: 'Design' },
]

const levelColors = {
  beginner: 'from-gray-400 to-gray-500',
  intermediate: 'from-blue-400 to-blue-500',
  advanced: 'from-green-400 to-green-500',
  expert: 'from-primary to-accent',
}

const levelPercentages = {
  beginner: 25,
  intermediate: 50,
  advanced: 75,
  expert: 95,
}

export function SkillsSection() {
  const [selectedCategory, setSelectedCategory] = useState<SkillCategory | 'all'>('all')

  const filteredSkills = selectedCategory === 'all' 
    ? skills 
    : skills.filter(skill => skill.category === selectedCategory)

  return (
    <section id="skills" className="section-padding bg-muted/30">
      <div className="container mx-auto container-padding">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-section-title gradient-text mb-4">Skills & Technologies</h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            Here are the technologies and tools I use to bring ideas to life
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-2 mb-12"
        >
          {skillCategories.map((category) => (
            <button
              key={category.value}
              onClick={() => setSelectedCategory(category.value as SkillCategory | 'all')}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                selectedCategory === category.value
                  ? 'bg-primary text-primary-foreground shadow-lg'
                  : 'bg-background hover:bg-accent/10 text-foreground/70 hover:text-foreground'
              }`}
            >
              {category.label}
            </button>
          ))}
        </motion.div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSkills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="card p-6 hover:shadow-lg transition-shadow group"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-3">
                  <span className="text-2xl">{skill.icon}</span>
                  <div>
                    <h3 className="font-semibold text-foreground">{skill.name}</h3>
                    <p className="text-sm text-foreground/60 capitalize">{skill.level}</p>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-sm font-medium text-primary">
                    {skill.experience}y
                  </div>
                  <div className="text-xs text-foreground/60">experience</div>
                </div>
              </div>

              {/* Skill Progress Bar */}
              <div className="skill-bar">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${levelPercentages[skill.level]}%` }}
                  transition={{ duration: 1, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className={`skill-progress bg-gradient-to-r ${levelColors[skill.level]}`}
                />
              </div>

              {/* Skill Level Indicator */}
              <div className="flex justify-between items-center mt-2 text-xs text-foreground/60">
                <span>Beginner</span>
                <span>Expert</span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Skills Summary */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-center"
        >
          <div className="space-y-2">
            <div className="text-3xl font-bold gradient-text">
              {skills.filter(s => s.level === 'expert').length}
            </div>
            <div className="text-sm text-foreground/60">Expert Level</div>
          </div>
          <div className="space-y-2">
            <div className="text-3xl font-bold gradient-text">
              {skills.filter(s => s.level === 'advanced').length}
            </div>
            <div className="text-sm text-foreground/60">Advanced</div>
          </div>
          <div className="space-y-2">
            <div className="text-3xl font-bold gradient-text">
              {skills.filter(s => s.category === 'programming').length}
            </div>
            <div className="text-sm text-foreground/60">Languages</div>
          </div>
          <div className="space-y-2">
            <div className="text-3xl font-bold gradient-text">
              {Math.round(skills.reduce((acc, skill) => acc + skill.experience, 0) / skills.length)}
            </div>
            <div className="text-sm text-foreground/60">Avg. Experience</div>
          </div>
        </motion.div>
      </div>
    </section>
  )
} 