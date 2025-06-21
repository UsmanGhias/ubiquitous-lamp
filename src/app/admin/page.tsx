'use client'

import Link from 'next/link'
import { projects, Project } from '@/lib/staticData'

export default function AdminPage() {
  return (
    <div className="container mx-auto p-8">
      <h1 className="text-3xl font-bold mb-8">Projects Overview</h1>
      
      <div className="grid gap-6">
        {projects.map((project) => (
          <div key={project.id} className="border rounded-lg p-6 bg-card">
            <div className="flex justify-between items-start mb-4">
              <div className="flex-1">
                <h3 className="text-xl font-semibold">{project.title}</h3>
                <p className="text-sm text-muted-foreground mt-1">{project.description}</p>
                <div className="mt-2">
                  <span className="inline-block px-2 py-1 text-xs rounded bg-primary/10 text-primary">
                    {project.category}
                  </span>
                </div>
              </div>
            </div>
            
            <div className="grid gap-6">
              {/* Document Link */}
              {project.documentUrl && (
                <div>
                  <label className="block text-sm font-medium mb-2">Project Document</label>
                  <Link 
                    href={project.documentUrl}
                    target="_blank"
                    className="inline-flex items-center px-4 py-2 bg-secondary text-secondary-foreground rounded-lg hover:bg-secondary/90"
                  >
                    <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                    View Document
                  </Link>
                </div>
              )}
              
              {/* Technologies */}
              <div>
                <label className="block text-sm font-medium mb-2">Technologies</label>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, index) => (
                    <span 
                      key={index}
                      className="px-2 py-1 text-xs rounded-full bg-secondary text-secondary-foreground"
                    >
                      {tech.trim()}
                    </span>
                  ))}
                </div>
              </div>

              {/* Long Description */}
              <div>
                <label className="block text-sm font-medium mb-2">Detailed Description</label>
                <p className="text-sm text-muted-foreground">{project.longDescription}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
} 