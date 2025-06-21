'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Calendar, MapPin, Building, GraduationCap, Briefcase } from 'lucide-react'
import { experiences, education } from '@/lib/data'
import type { Experience, Education } from '@/types'

interface TimelineItemProps {
  item: Experience | Education
  type: 'experience' | 'education'
  index: number
}

function TimelineItem({ item, type, index }: TimelineItemProps) {
  const isExperience = type === 'experience'
  const exp = item as Experience
  const edu = item as Education

  const formatDate = (date: Date | string) => {
    const dateObj = typeof date === 'string' ? new Date(date) : date
    return dateObj.toLocaleDateString('en-US', { month: 'short', year: 'numeric' })
  }

  return (
    <motion.div
      initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      viewport={{ once: true }}
      className={`flex ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'} items-center mb-8`}
    >
      {/* Icon */}
      <div className="hidden md:flex items-center mx-8">
        <div className={`w-12 h-12 rounded-full flex items-center justify-center ${
          isExperience ? 'bg-primary text-primary-foreground' : 'bg-accent text-white'
        }`}>
          {isExperience ? <Briefcase size={20} /> : <GraduationCap size={20} />}
        </div>
      </div>

      {/* Content Card */}
      <div className={`flex-1 ${index % 2 === 0 ? 'text-left' : 'text-right md:text-right'}`}>
        <div className="card p-6 hover:shadow-lg transition-shadow">
          <div className="flex items-start justify-between mb-4">
            <div className={index % 2 === 0 ? '' : 'text-right'}>
              <h3 className="text-xl font-bold text-foreground">
                {isExperience ? exp.position : edu.degree}
              </h3>
              <p className="text-primary font-semibold">
                {isExperience ? exp.company : edu.institution}
              </p>
              {isExperience && (
                <p className="text-sm text-foreground/60 capitalize">
                  {exp.type} • {exp.location}
                </p>
              )}
              {!isExperience && edu.field && (
                <p className="text-sm text-foreground/60">
                  {edu.field}
                </p>
              )}
            </div>
            
            <div className={`text-sm text-foreground/60 ${index % 2 === 0 ? 'text-right' : 'text-left'}`}>
              <div className="flex items-center space-x-1">
                <Calendar size={14} />
                <span>
                  {formatDate(item.startDate)} - {
                    item.current ? 'Present' : 
                    item.endDate ? formatDate(item.endDate) : 'Present'
                  }
                </span>
              </div>
            </div>
          </div>

          <p className="text-foreground/80 mb-4">
            {isExperience ? exp.description : `Studying ${edu.field} at ${edu.institution}`}
          </p>

          {/* Achievements */}
          {isExperience && exp.achievements && exp.achievements.length > 0 && (
            <div className="mb-4">
              <h4 className="font-semibold mb-2">Key Achievements:</h4>
              <ul className="list-disc list-inside space-y-1 text-sm text-foreground/80">
                {exp.achievements.map((achievement, i) => (
                  <li key={i}>{achievement}</li>
                ))}
              </ul>
            </div>
          )}

          {/* Education Achievements */}
          {!isExperience && edu.achievements && edu.achievements.length > 0 && (
            <div className="mb-4">
              <h4 className="font-semibold mb-2">Achievements:</h4>
              <ul className="list-disc list-inside space-y-1 text-sm text-foreground/80">
                {edu.achievements.map((achievement, i) => (
                  <li key={i}>{achievement}</li>
                ))}
              </ul>
            </div>
          )}

          {/* Technologies */}
          {isExperience && exp.technologies && exp.technologies.length > 0 && (
            <div className="flex flex-wrap gap-2">
              {exp.technologies.map((tech, i) => (
                <span
                  key={i}
                  className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-full"
                >
                  {tech}
                </span>
              ))}
            </div>
          )}

          {/* Relevant Courses */}
          {!isExperience && edu.relevantCourses && edu.relevantCourses.length > 0 && (
            <div className="flex flex-wrap gap-2">
              {edu.relevantCourses.slice(0, 4).map((course, i) => (
                <span
                  key={i}
                  className="px-2 py-1 bg-accent/10 text-accent text-xs rounded-full"
                >
                  {course}
                </span>
              ))}
              {edu.relevantCourses.length > 4 && (
                <span className="px-2 py-1 bg-muted text-foreground/60 text-xs rounded-full">
                  +{edu.relevantCourses.length - 4} more
                </span>
              )}
            </div>
          )}
        </div>
      </div>
    </motion.div>
  )
}

export function ExperienceSection() {
  return (
    <section id="experience" className="section-padding bg-background">
      <div className="container mx-auto container-padding">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-section-title gradient-text mb-4">Experience & Education</h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            My professional journey and educational background that shaped my expertise
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Experience Items */}
          <div className="mb-16">
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-2xl font-bold text-center mb-8 flex items-center justify-center space-x-2"
            >
              <Briefcase className="text-primary" />
              <span>Professional Experience</span>
            </motion.h3>
            
            {experiences.map((exp, index) => (
              <TimelineItem
                key={`exp-${index}`}
                item={exp}
                type="experience"
                index={index}
              />
            ))}
          </div>

          {/* Education Items */}
          <div>
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-2xl font-bold text-center mb-8 flex items-center justify-center space-x-2"
            >
              <GraduationCap className="text-accent" />
              <span>Education</span>
            </motion.h3>
            
            {education.map((edu, index) => (
              <TimelineItem
                key={`edu-${index}`}
                item={edu}
                type="education"
                index={index}
              />
            ))}
          </div>
        </div>

        {/* Summary Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 text-center"
        >
          <div className="card p-6">
            <div className="text-3xl font-bold gradient-text mb-2">
              {experiences.length}
            </div>
            <div className="text-foreground/60">Professional Roles</div>
          </div>
          <div className="card p-6">
            <div className="text-3xl font-bold gradient-text mb-2">
              3+
            </div>
            <div className="text-foreground/60">Years Experience</div>
          </div>
          <div className="card p-6">
            <div className="text-3xl font-bold gradient-text mb-2">
              {education.length}
            </div>
            <div className="text-foreground/60">Academic Degree</div>
          </div>
        </motion.div>
      </div>
    </section>
  )
} 