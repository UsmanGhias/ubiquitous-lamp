import React from 'react'
import { X } from 'lucide-react'
import { Project } from '@/types'
import { motion, AnimatePresence } from 'framer-motion'

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
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-[100]"
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="fixed left-[50%] top-[50%] -translate-x-[50%] -translate-y-[50%] w-[95%] sm:w-[450px] max-h-[80vh] overflow-y-auto bg-background rounded-lg shadow-xl z-[200]"
          >
            {/* Header */}
            <div className="sticky top-0 bg-background/80 backdrop-blur-sm px-6 py-4 border-b border-border/10">
              <button
                onClick={onClose}
                className="absolute right-4 top-1/2 -translate-y-1/2 p-2 hover:bg-accent/10 rounded-full transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
              <h3 className="text-xl font-bold pr-8">{project.title}</h3>
            </div>

            {/* Content */}
            <div className="p-6">
              <p className="text-foreground/70 mb-4">{project.description}</p>

              {/* Technologies */}
              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.map((tech, i) => (
                  <span
                    key={i}
                    className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Links */}
              <div className="flex space-x-3">
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 text-center px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors text-sm font-medium"
                  >
                    View Live
                  </a>
                )}
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 text-center px-4 py-2 border border-border hover:bg-accent/10 rounded-lg transition-colors text-sm font-medium"
                  >
                    View Code
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
} 