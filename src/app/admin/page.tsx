'use client'

import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Plus, Edit, Trash2, Save, X, Upload, Eye } from 'lucide-react'
import { Project } from '@/types'

export default function AdminDashboard() {
  const [projects, setProjects] = useState<Project[]>([])
  const [isEditing, setIsEditing] = useState(false)
  const [editingProject, setEditingProject] = useState<Project | null>(null)
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [password, setPassword] = useState('')

  // Simple authentication (in production, use proper auth)
  const handleAuth = () => {
    if (password === 'admin123') { // Change this password!
      setIsAuthenticated(true)
      localStorage.setItem('admin-auth', 'true')
    } else {
      alert('Incorrect password')
    }
  }

  useEffect(() => {
    const auth = localStorage.getItem('admin-auth')
    if (auth === 'true') {
      setIsAuthenticated(true)
    }
    loadProjects()
  }, [])

  const loadProjects = async () => {
    try {
      const response = await fetch('/api/admin/projects')
      if (response.ok) {
        const data = await response.json()
        setProjects(data)
      }
    } catch (error) {
      console.error('Error loading projects:', error)
    }
  }

  const saveProject = async (project: Project) => {
    try {
      const response = await fetch('/api/admin/projects', {
        method: project._id ? 'PUT' : 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(project)
      })
      
      if (response.ok) {
        loadProjects()
        setIsEditing(false)
        setEditingProject(null)
      }
    } catch (error) {
      console.error('Error saving project:', error)
    }
  }

  const deleteProject = async (id: string) => {
    if (confirm('Are you sure you want to delete this project?')) {
      try {
        const response = await fetch(`/api/admin/projects?id=${id}`, {
          method: 'DELETE'
        })
        if (response.ok) {
          loadProjects()
        }
      } catch (error) {
        console.error('Error deleting project:', error)
      }
    }
  }

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="card p-8 w-full max-w-md">
          <h1 className="text-2xl font-bold mb-6 text-center">Admin Login</h1>
          <div className="space-y-4">
            <input
              type="password"
              placeholder="Enter admin password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary"
              onKeyPress={(e) => e.key === 'Enter' && handleAuth()}
            />
            <button
              onClick={handleAuth}
              className="w-full px-4 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90"
            >
              Login
            </button>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-background p-6">
      <div className="container mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold">Project Dashboard</h1>
          <div className="space-x-4">
            <button
              onClick={() => {
                setIsEditing(true)
                setEditingProject({
                  title: '',
                  description: '',
                  longDescription: '',
                  category: 'web-development',
                  technologies: [],
                  images: [],
                  featured: false,
                  status: 'completed',
                  startDate: new Date(),
                } as Project)
              }}
              className="px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 flex items-center space-x-2"
            >
              <Plus size={20} />
              <span>Add Project</span>
            </button>
            <button
              onClick={() => {
                localStorage.removeItem('admin-auth')
                setIsAuthenticated(false)
              }}
              className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700"
            >
              Logout
            </button>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {projects.map((project) => (
            <motion.div
              key={project._id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="card p-6"
            >
              <div className="flex justify-between items-start mb-4">
                <h3 className="font-semibold text-lg">{project.title}</h3>
                <div className="flex space-x-2">
                  <button
                    onClick={() => {
                      setIsEditing(true)
                      setEditingProject(project)
                    }}
                    className="p-2 bg-blue-600 text-white rounded hover:bg-blue-700"
                  >
                    <Edit size={16} />
                  </button>
                  <button
                    onClick={() => project._id && deleteProject(project._id)}
                    className="p-2 bg-red-600 text-white rounded hover:bg-red-700"
                  >
                    <Trash2 size={16} />
                  </button>
                </div>
              </div>
              <p className="text-sm text-foreground/70 mb-3">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-3">
                {project.technologies.slice(0, 3).map((tech) => (
                  <span key={tech} className="px-2 py-1 bg-primary/10 text-primary text-xs rounded">
                    {tech}
                  </span>
                ))}
                {project.technologies.length > 3 && (
                  <span className="px-2 py-1 bg-accent/10 text-accent text-xs rounded">
                    +{project.technologies.length - 3} more
                  </span>
                )}
              </div>
              <div className="flex justify-between items-center text-sm">
                <span className={`px-2 py-1 rounded text-xs ${
                  project.status === 'completed' ? 'bg-green-100 text-green-800' :
                  project.status === 'in-progress' ? 'bg-yellow-100 text-yellow-800' :
                  'bg-gray-100 text-gray-800'
                }`}>
                  {project.status}
                </span>
                <span className={`px-2 py-1 rounded text-xs ${
                  project.featured ? 'bg-primary/10 text-primary' : 'bg-gray-100 text-gray-600'
                }`}>
                  {project.featured ? 'Featured' : 'Regular'}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Edit Modal */}
        {isEditing && editingProject && (
          <ProjectEditModal
            project={editingProject}
            onSave={saveProject}
            onClose={() => {
              setIsEditing(false)
              setEditingProject(null)
            }}
          />
        )}
      </div>
    </div>
  )
}

interface ProjectEditModalProps {
  project: Project
  onSave: (project: Project) => void
  onClose: () => void
}

function ProjectEditModal({ project, onSave, onClose }: ProjectEditModalProps) {
  const [formData, setFormData] = useState(project)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    onSave(formData)
  }

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-background rounded-lg p-6 w-full max-w-4xl max-h-[90vh] overflow-y-auto">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold">
            {project._id ? 'Edit Project' : 'Add New Project'}
          </h2>
          <button onClick={onClose} className="p-2 hover:bg-accent rounded">
            <X size={20} />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium mb-2">Project Title</label>
              <input
                type="text"
                value={formData.title}
                onChange={(e) => setFormData({...formData, title: e.target.value})}
                className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Category</label>
              <select
                value={formData.category}
                onChange={(e) => setFormData({...formData, category: e.target.value as any})}
                className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary"
              >
                <option value="web-development">Web Development</option>
                <option value="mobile-app">Mobile App</option>
                <option value="odoo">Odoo</option>
                <option value="full-stack">Full Stack</option>
                <option value="ai-ml">AI & ML</option>
                <option value="data-science">Data Science</option>
                <option value="shopify">Shopify</option>
                <option value="wordpress">WordPress</option>
              </select>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">Short Description</label>
            <textarea
              value={formData.description}
              onChange={(e) => setFormData({...formData, description: e.target.value})}
              className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary"
              rows={3}
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">Detailed Description</label>
            <textarea
              value={formData.longDescription || ''}
              onChange={(e) => setFormData({...formData, longDescription: e.target.value})}
              className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary"
              rows={5}
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">Technologies (comma-separated)</label>
            <input
              type="text"
              value={formData.technologies.join(', ')}
              onChange={(e) => setFormData({...formData, technologies: e.target.value.split(', ').filter(t => t.trim())})}
              className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary"
              placeholder="React, Node.js, MongoDB, etc."
            />
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div>
              <label className="block text-sm font-medium mb-2">Status</label>
              <select
                value={formData.status}
                onChange={(e) => setFormData({...formData, status: e.target.value as any})}
                className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary"
              >
                <option value="completed">Completed</option>
                <option value="in-progress">In Progress</option>
                <option value="planned">Planned</option>
                <option value="on-hold">On Hold</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Start Date</label>
              <input
                type="date"
                value={formData.startDate.toISOString().split('T')[0]}
                onChange={(e) => setFormData({...formData, startDate: new Date(e.target.value)})}
                className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary"
              />
            </div>
            <div className="flex items-center space-x-4 pt-8">
              <label className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  checked={formData.featured}
                  onChange={(e) => setFormData({...formData, featured: e.target.checked})}
                  className="rounded border-border"
                />
                <span>Featured Project</span>
              </label>
            </div>
          </div>

          <div className="flex justify-end space-x-4">
            <button
              type="button"
              onClick={onClose}
              className="px-6 py-3 border border-border rounded-lg hover:bg-accent"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 flex items-center space-x-2"
            >
              <Save size={20} />
              <span>Save Project</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  )
} 