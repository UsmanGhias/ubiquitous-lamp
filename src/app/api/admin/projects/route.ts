import { NextRequest, NextResponse } from 'next/server'
import fs from 'fs'
import path from 'path'
import { Project } from '@/types'

const PROJECTS_FILE = path.join(process.cwd(), 'data', 'projects.json')

// Ensure data directory exists
const ensureDataDirectory = () => {
  const dataDir = path.dirname(PROJECTS_FILE)
  if (!fs.existsSync(dataDir)) {
    fs.mkdirSync(dataDir, { recursive: true })
  }
}

// Default projects if file doesn't exist
const getDefaultProjects = (): Project[] => []

export async function GET() {
  try {
    ensureDataDirectory()
    
    let projects: Project[]
    
    if (fs.existsSync(PROJECTS_FILE)) {
      const fileContent = fs.readFileSync(PROJECTS_FILE, 'utf-8')
      projects = JSON.parse(fileContent)
    } else {
      projects = getDefaultProjects()
      // Create the file with default projects
      fs.writeFileSync(PROJECTS_FILE, JSON.stringify(projects, null, 2))
    }
    
    return NextResponse.json(projects)
  } catch (error) {
    console.error('Error loading projects:', error)
    return NextResponse.json(getDefaultProjects())
  }
}

export async function POST(request: NextRequest) {
  try {
    ensureDataDirectory()
    
    const project: Project = await request.json()
    let projects: Project[] = []
    
    if (fs.existsSync(PROJECTS_FILE)) {
      const fileContent = fs.readFileSync(PROJECTS_FILE, 'utf-8')
      projects = JSON.parse(fileContent)
    }
    
    // Add new project with generated ID
    project._id = Date.now().toString()
    projects.push(project)
    
    fs.writeFileSync(PROJECTS_FILE, JSON.stringify(projects, null, 2))
    
    return NextResponse.json({ success: true, message: 'Project added successfully', project })
  } catch (error) {
    console.error('Error adding project:', error)
    return NextResponse.json(
      { success: false, message: 'Failed to add project' },
      { status: 500 }
    )
  }
}

export async function PUT(request: NextRequest) {
  try {
    const updatedProject: Project = await request.json()
    
    if (!updatedProject._id) {
      return NextResponse.json(
        { success: false, message: 'Project ID is required' },
        { status: 400 }
      )
    }
    
    let projects: Project[] = []
    
    if (fs.existsSync(PROJECTS_FILE)) {
      const fileContent = fs.readFileSync(PROJECTS_FILE, 'utf-8')
      projects = JSON.parse(fileContent)
    }
    
    // Update project
    const index = projects.findIndex(p => p._id === updatedProject._id)
    if (index === -1) {
      return NextResponse.json(
        { success: false, message: 'Project not found' },
        { status: 404 }
      )
    }
    
    projects[index] = updatedProject
    fs.writeFileSync(PROJECTS_FILE, JSON.stringify(projects, null, 2))
    
    return NextResponse.json({ success: true, message: 'Project updated successfully', project: updatedProject })
  } catch (error) {
    console.error('Error updating project:', error)
    return NextResponse.json(
      { success: false, message: 'Failed to update project' },
      { status: 500 }
    )
  }
}

export async function DELETE(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const id = searchParams.get('id')
    
    if (!id) {
      return NextResponse.json(
        { success: false, message: 'Project ID is required' },
        { status: 400 }
      )
    }
    
    let projects: Project[] = []
    
    if (fs.existsSync(PROJECTS_FILE)) {
      const fileContent = fs.readFileSync(PROJECTS_FILE, 'utf-8')
      projects = JSON.parse(fileContent)
    }
    
    // Delete project
    const index = projects.findIndex(p => p._id === id)
    if (index === -1) {
      return NextResponse.json(
        { success: false, message: 'Project not found' },
        { status: 404 }
      )
    }
    
    projects.splice(index, 1)
    fs.writeFileSync(PROJECTS_FILE, JSON.stringify(projects, null, 2))
    
    return NextResponse.json({ success: true, message: 'Project deleted successfully' })
  } catch (error) {
    console.error('Error deleting project:', error)
    return NextResponse.json(
      { success: false, message: 'Failed to delete project' },
      { status: 500 }
    )
  }
} 