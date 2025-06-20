'use client'

import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { ExternalLink, Github, Filter, Search, Calendar, Users, TrendingUp, Plus, Settings } from 'lucide-react'
import { projectCategories } from '@/lib/data'
import type { ProjectCategory, Project } from '@/types'
import ProjectModal from '@/components/ProjectModal'

export function ProjectsSection() {
  const [selectedCategory, setSelectedCategory] = useState<ProjectCategory | 'all'>('all')
  const [searchTerm, setSearchTerm] = useState('')
  const [projects, setProjects] = useState<Project[]>([])
  const [loading, setLoading] = useState(true)
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  // Load projects from API
  useEffect(() => {
    const loadProjects = async () => {
      try {
        const response = await fetch('/api/projects')
        if (response.ok) {
          const data = await response.json()
          setProjects(data)
        }
      } catch (error) {
        console.error('Error loading projects:', error)
      } finally {
        setLoading(false)
      }
    }

    loadProjects()
  }, [])

  const filteredProjects = projects.filter(project => {
    const matchesCategory = selectedCategory === 'all' || project.category === selectedCategory
    const matchesSearch = project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         project.technologies.some(tech => tech.toLowerCase().includes(searchTerm.toLowerCase()))
    return matchesCategory && matchesSearch
  })

  const formatDate = (date: Date | string) => {
    const dateObj = typeof date === 'string' ? new Date(date) : date
    return dateObj.toLocaleDateString('en-US', { month: 'short', year: 'numeric' })
  }

  if (loading) {
    return (
      <section id="projects" className="section-padding bg-muted/30">
        <div className="container mx-auto container-padding">
          <div className="text-center">
            <div className="animate-spin w-8 h-8 border-2 border-primary border-t-transparent rounded-full mx-auto mb-4"></div>
            <p>Loading projects...</p>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section id="projects" className="section-padding bg-muted/30">
      <div className="container mx-auto container-padding">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center space-x-4 mb-4">
            <h2 className="text-section-title gradient-text">Featured Projects</h2>
            <Link
              href="/admin"
              className="p-2 bg-primary/10 hover:bg-primary/20 rounded-lg transition-colors group"
              title="Manage Projects"
            >
              <Settings size={20} className="text-primary group-hover:rotate-90 transition-transform" />
            </Link>
          </div>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            A showcase of my best work across different technologies and domains. 
            {projects.length > 0 && ` Currently featuring ${projects.length} projects.`}
          </p>
        </motion.div>

        {/* Filters and Search */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="mb-12 space-y-6"
        >
          {/* Search Bar */}
          <div className="relative max-w-md mx-auto">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-foreground/40" size={20} />
            <input
              type="text"
              placeholder="Search projects..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-3 bg-background border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition-colors"
            />
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-2">
            {projectCategories.map((category) => (
              <button
                key={category.value}
                onClick={() => setSelectedCategory(category.value as ProjectCategory | 'all')}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  selectedCategory === category.value
                    ? 'bg-primary text-primary-foreground shadow-lg'
                    : 'bg-background hover:bg-accent/10 text-foreground/70 hover:text-foreground'
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>
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
                onClick={() => {
                  setSelectedProject(project)
                  setIsModalOpen(true)
                }}
              >
                {/* Project Image */}
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={project.images[0] || '/images/background.png'}
                    alt={project.title}
                    fill
                    className="object-cover project-image transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-4">
                    {project.liveUrl && (
                      <Link
                        href={project.liveUrl}
                        target="_blank"
                        className="p-2 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-colors"
                      >
                        <ExternalLink size={20} className="text-white" />
                      </Link>
                    )}
                    {project.githubUrl && (
                      <Link
                        href={project.githubUrl}
                        target="_blank"
                        className="p-2 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-colors"
                      >
                        <Github size={20} className="text-white" />
                      </Link>
                    )}
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

                  {/* Project Meta */}
                  <div className="space-y-3 mb-4">
                    <div className="flex items-center text-sm text-foreground/60">
                      <Calendar size={16} className="mr-2" />
                      {formatDate(project.startDate)}
                      {project.endDate && ` - ${formatDate(project.endDate)}`}
                    </div>
                    
                    {project.client && (
                      <div className="flex items-center text-sm text-foreground/60">
                        <Users size={16} className="mr-2" />
                        {project.client}
                      </div>
                    )}

                    {project.metrics && (
                      <div className="flex items-center text-sm text-foreground/60">
                        <TrendingUp size={16} className="mr-2" />
                        {project.metrics.users && `${project.metrics.users} users`}
                        {project.metrics.satisfaction && ` • ${project.metrics.satisfaction}/5 rating`}
                      </div>
                    )}
                  </div>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.slice(0, 4).map((tech, i) => (
                      <span
                        key={i}
                        className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 4 && (
                      <span className="px-2 py-1 bg-muted text-foreground/60 text-xs rounded-full">
                        +{project.technologies.length - 4} more
                      </span>
                    )}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex space-x-2">
                    {project.liveUrl && (
                      <Link
                        href={project.liveUrl}
                        target="_blank"
                        className="flex-1 text-center px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors text-sm font-medium"
                      >
                        Live Demo
                      </Link>
                    )}
                    {project.githubUrl && (
                      <Link
                        href={project.githubUrl}
                        target="_blank"
                        className="flex-1 text-center px-4 py-2 border border-border hover:bg-accent/10 rounded-lg transition-colors text-sm font-medium"
                      >
                        View Code
                      </Link>
                    )}
                    {!project.liveUrl && !project.githubUrl && (
                      <div className="flex-1 text-center px-4 py-2 bg-muted/50 text-foreground/50 rounded-lg text-sm font-medium">
                        Coming Soon
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        ) : (
          /* No Projects Found */
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center py-12"
          >
            <div className="mb-6">
              <div className="w-24 h-24 bg-muted rounded-full flex items-center justify-center mx-auto mb-4">
                <Plus size={32} className="text-foreground/40" />
              </div>
              <h3 className="text-xl font-semibold mb-2">No Projects Found</h3>
              <p className="text-foreground/60 mb-6">
                {searchTerm || selectedCategory !== 'all' 
                  ? "No projects match your current filters." 
                  : "Start by adding your first project to showcase your work."
                }
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              {(searchTerm || selectedCategory !== 'all') && (
                <button
                  onClick={() => {
                    setSelectedCategory('all')
                    setSearchTerm('')
                  }}
                  className="px-6 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
                >
                  Show All Projects
                </button>
              )}
              <Link
                href="/admin"
                className="px-6 py-2 border border-border hover:bg-accent/10 rounded-lg transition-colors flex items-center space-x-2"
              >
                <Plus size={20} />
                <span>Add Project</span>
              </Link>
            </div>
          </motion.div>
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
            <div className="text-3xl font-bold gradient-text">{projects.length}+</div>
            <div className="text-sm text-foreground/60">Total Projects</div>
          </div>
          <div className="space-y-2">
            <div className="text-3xl font-bold gradient-text">
              {projects.filter(p => p.status === 'completed').length}
            </div>
            <div className="text-sm text-foreground/60">Completed</div>
          </div>
          <div className="space-y-2">
            <div className="text-3xl font-bold gradient-text">
              {projects.filter(p => p.featured).length}
            </div>
            <div className="text-sm text-foreground/60">Featured</div>
          </div>
          <div className="space-y-2">
            <div className="text-3xl font-bold gradient-text">
              {new Set(projects.flatMap(p => p.technologies)).size}
            </div>
            <div className="text-sm text-foreground/60">Technologies</div>
          </div>
        </motion.div>

        {/* Project Modal */}
        <ProjectModal
          project={selectedProject}
          isOpen={isModalOpen}
          onClose={() => {
            setIsModalOpen(false)
            setSelectedProject(null)
          }}
        />
      </div>
    </section>
  )
} 