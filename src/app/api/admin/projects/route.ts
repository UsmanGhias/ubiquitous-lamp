import { NextRequest, NextResponse } from 'next/server'
import { promises as fs } from 'fs'
import path from 'path'
import { Project } from '@/types'

const PROJECTS_FILE = path.join(process.cwd(), 'data', 'projects.json')

// Ensure data directory exists
async function ensureDataDir() {
  const dataDir = path.join(process.cwd(), 'data')
  try {
    await fs.access(dataDir)
  } catch {
    await fs.mkdir(dataDir, { recursive: true })
  }
}

// Load projects from file
async function loadProjects(): Promise<Project[]> {
  try {
    await ensureDataDir()
    const data = await fs.readFile(PROJECTS_FILE, 'utf8')
    return JSON.parse(data)
  } catch (error) {
    // If file doesn't exist, return empty array
    return []
  }
}

// Save projects to file
async function saveProjects(projects: Project[]) {
  await ensureDataDir()
  await fs.writeFile(PROJECTS_FILE, JSON.stringify(projects, null, 2))
}

// GET - Fetch all projects
export async function GET() {
  try {
    const projects = await loadProjects()
    return NextResponse.json(projects)
  } catch (error) {
    console.error('Error fetching projects:', error)
    return NextResponse.json(
      { error: 'Failed to fetch projects' },
      { status: 500 }
    )
  }
}

// POST - Create new project
export async function POST(request: NextRequest) {
  try {
    const newProject: Project = await request.json()
    const projects = await loadProjects()
    
    // Generate ID
    newProject._id = Date.now().toString()
    newProject.createdAt = new Date()
    newProject.updatedAt = new Date()
    
    projects.push(newProject)
    await saveProjects(projects)
    
    return NextResponse.json(newProject, { status: 201 })
  } catch (error) {
    console.error('Error creating project:', error)
    return NextResponse.json(
      { error: 'Failed to create project' },
      { status: 500 }
    )
  }
}

// PUT - Update existing project
export async function PUT(request: NextRequest) {
  try {
    const updatedProject: Project = await request.json()
    const projects = await loadProjects()
    
    const index = projects.findIndex(p => p._id === updatedProject._id)
    if (index === -1) {
      return NextResponse.json(
        { error: 'Project not found' },
        { status: 404 }
      )
    }
    
    updatedProject.updatedAt = new Date()
    projects[index] = { ...projects[index], ...updatedProject }
    await saveProjects(projects)
    
    return NextResponse.json(projects[index])
  } catch (error) {
    console.error('Error updating project:', error)
    return NextResponse.json(
      { error: 'Failed to update project' },
      { status: 500 }
    )
  }
}

// DELETE - Remove project
export async function DELETE(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const id = searchParams.get('id')
    
    if (!id) {
      return NextResponse.json(
        { error: 'Project ID required' },
        { status: 400 }
      )
    }
    
    const projects = await loadProjects()
    const filteredProjects = projects.filter(p => p._id !== id)
    
    if (filteredProjects.length === projects.length) {
      return NextResponse.json(
        { error: 'Project not found' },
        { status: 404 }
      )
    }
    
    await saveProjects(filteredProjects)
    
    return NextResponse.json({ message: 'Project deleted successfully' })
  } catch (error) {
    console.error('Error deleting project:', error)
    return NextResponse.json(
      { error: 'Failed to delete project' },
      { status: 500 }
    )
  }
} 