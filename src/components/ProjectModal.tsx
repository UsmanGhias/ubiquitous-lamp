import React from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { X, ExternalLink, Github, Calendar, Users, TrendingUp } from 'lucide-react'
import { Project } from '@/types'

interface ProjectModalProps {
  project: Project | null
  isOpen: boolean
  onClose: () => void
}

export default function ProjectModal({ project, isOpen, onClose }: ProjectModalProps) {
  if (!project) return null

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-[100]">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/80 backdrop-blur-sm"
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="relative w-[95%] sm:w-[450px] max-h-[80vh] overflow-y-auto bg-background rounded-lg shadow-xl z-[200]"
          >
            {/* Header */}
            <div className="relative border-b border-border/10">
              <button
                onClick={onClose}
                className="absolute right-4 top-4 p-1 hover:bg-accent/10 rounded-full transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
              <div className="p-4">
                <h2 className="text-lg font-semibold pr-8">{project.title}</h2>
                <p className="text-sm text-foreground/60 mt-1">{project.description}</p>
              </div>
            </div>

            {/* Content */}
            <div className="p-4 space-y-4">
              {/* Status & Links */}
              <div className="flex items-center justify-between">
                <div className="flex gap-2">
                  {project.status && (
                    <span className={`px-2 py-0.5 text-xs font-medium rounded-full ${
                      project.status === 'completed' ? 'bg-green-500/20 text-green-400' :
                      project.status === 'in-progress' ? 'bg-blue-500/20 text-blue-400' :
                      'bg-gray-500/20 text-gray-400'
                    }`}>
                      {project.status.replace('-', ' ')}
                    </span>
                  )}
                </div>
                <div className="flex gap-2">
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-1.5 bg-primary/10 hover:bg-primary/20 text-primary rounded-full transition-colors"
                    >
                      <ExternalLink size={14} />
                    </a>
                  )}
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-1.5 bg-primary/10 hover:bg-primary/20 text-primary rounded-full transition-colors"
                    >
                      <Github size={14} />
                    </a>
                  )}
                </div>
              </div>

              {/* Technologies */}
              <div className="flex flex-wrap gap-1.5">
                {project.technologies.map((tech, i) => (
                  <span
                    key={i}
                    className="px-2 py-0.5 bg-primary/10 text-primary text-xs rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Project Meta */}
              <div className="flex flex-wrap gap-4 text-xs text-foreground/60">
                <div className="flex items-center">
                  <Calendar size={12} className="mr-1.5" />
                  <span>
                    {new Date(project.startDate).toLocaleDateString('en-US', { 
                      month: 'short',
                      year: 'numeric'
                    })}
                    {project.endDate && ` - ${new Date(project.endDate).toLocaleDateString('en-US', {
                      month: 'short',
                      year: 'numeric'
                    })}`}
                  </span>
                </div>
                {project.client && (
                  <div className="flex items-center">
                    <Users size={12} className="mr-1.5" />
                    {project.client}
                  </div>
                )}
                {project.metrics && project.metrics.users && (
                  <div className="flex items-center">
                    <TrendingUp size={12} className="mr-1.5" />
                    {project.metrics.users} users
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  )
} 