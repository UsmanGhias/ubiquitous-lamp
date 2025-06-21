'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { ExternalLink, Github, Calendar, Users, TrendingUp } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { featuredProjects } from '@/lib/data'
import { Project, ProjectCategory } from '@/types'
import ProjectModal from '@/components/ProjectModal'

const categories: { value: ProjectCategory | 'all', label: string }[] = [
  { value: 'all', label: 'All Projects' },
  { value: 'odoo', label: 'Odoo Development' },
  { value: 'web-development', label: 'Web Development' },
  { value: 'full-stack', label: 'Full Stack' },
  { value: 'shopify', label: 'Shopify' },
  { value: 'wordpress', label: 'WordPress' },
  { value: 'ai-ml', label: 'AI & Machine Learning' },
  { value: 'mobile-app', label: 'Mobile Apps' },
  { value: 'data-science', label: 'Data Science' }
]

export function ProjectsSection() {
  const [selectedCategory, setSelectedCategory] = useState<ProjectCategory | 'all'>('all')
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const filteredProjects = selectedCategory === 'all'
    ? featuredProjects
    : featuredProjects.filter(project => project.category === selectedCategory)

  const handleProjectClick = (project: Project) => {
    setSelectedProject(project)
    setIsModalOpen(true)
  }

  return (
    <section id="projects" className="section-padding bg-background">
      <div className="container mx-auto container-padding">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-section-title gradient-text mb-4">Featured Projects</h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            Explore my portfolio of projects showcasing my expertise in web development,
            Odoo customization, and innovative solutions
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((category) => (
            <button
              key={category.value}
              onClick={() => setSelectedCategory(category.value)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-colors ${
                selectedCategory === category.value
                  ? 'bg-primary text-primary-foreground'
                  : 'bg-accent/10 text-foreground/70 hover:bg-accent/20'
              }`}
            >
              {category.label}
            </button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        {filteredProjects.length > 0 ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project._id || project.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="project-card card overflow-hidden group cursor-pointer"
                onClick={() => handleProjectClick(project)}
              >
                {/* Project Image */}
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={project.images[0] || '/images/background.png'}
                    alt={project.title}
                    fill
                    className="object-cover project-image transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <span className="text-white font-medium">View Details</span>
                  </div>
                  
                  {/* Status Badge */}
                  <div className="absolute top-4 left-4">
                    <span className={`px-2 py-1 text-xs font-medium rounded-full ${
                      project.status === 'completed' ? 'bg-green-500/20 text-green-400' :
                      project.status === 'in-progress' ? 'bg-blue-500/20 text-blue-400' :
                      'bg-gray-500/20 text-gray-400'
                    }`}>
                      {project.status.replace('-', ' ')}
                    </span>
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-6">
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    {project.featured && (
                      <span className="px-2 py-1 bg-accent/20 text-accent text-xs font-medium rounded-full">
                        Featured
                      </span>
                    )}
                  </div>

                  <p className="text-foreground/70 mb-4 line-clamp-3">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.slice(0, 3).map((tech, i) => (
                      <span
                        key={i}
                        className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="px-2 py-1 bg-muted text-foreground/60 text-xs rounded-full">
                        +{project.technologies.length - 3} more
                      </span>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        ) : (
          <div className="text-center text-foreground/60 py-12">
            No projects found in this category.
          </div>
        )}

        {/* Project Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-center"
        >
          <div className="space-y-2">
            <div className="text-3xl font-bold gradient-text">{featuredProjects.length}+</div>
            <div className="text-sm text-foreground/60">Total Projects</div>
          </div>
          <div className="space-y-2">
            <div className="text-3xl font-bold gradient-text">
              {featuredProjects.filter(p => p.status === 'completed').length}
            </div>
            <div className="text-sm text-foreground/60">Completed</div>
          </div>
          <div className="space-y-2">
            <div className="text-3xl font-bold gradient-text">
              {featuredProjects.filter(p => p.featured).length}
            </div>
            <div className="text-sm text-foreground/60">Featured</div>
          </div>
          <div className="space-y-2">
            <div className="text-3xl font-bold gradient-text">
              {new Set(featuredProjects.flatMap(p => p.technologies)).size}
            </div>
            <div className="text-sm text-foreground/60">Technologies</div>
          </div>
        </motion.div>
      </div>

      {/* Project Modal */}
      <ProjectModal
        project={selectedProject}
        isOpen={isModalOpen}
        onClose={() => {
          setIsModalOpen(false)
          setSelectedProject(null)
        }}
      />
    </section>
  )
} 