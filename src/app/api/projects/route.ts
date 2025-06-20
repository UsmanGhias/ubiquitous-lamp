import { NextResponse } from 'next/server'
import { promises as fs } from 'fs'
import path from 'path'
import { Project } from '@/types'
import { featuredProjects } from '@/lib/data'

const PROJECTS_FILE = path.join(process.cwd(), 'data', 'projects.json')

// Load projects from admin data file
async function loadAdminProjects(): Promise<Project[]> {
  try {
    const data = await fs.readFile(PROJECTS_FILE, 'utf8')
    return JSON.parse(data)
  } catch (error) {
    // If file doesn't exist, return empty array
    return []
  }
}

// GET - Fetch projects for public portfolio
export async function GET() {
  try {
    // Get projects from admin panel
    const adminProjects = await loadAdminProjects()
    
    // Combine with featured projects from data.ts (as fallback)
    const allProjects = [...adminProjects, ...featuredProjects]
    
    // Remove duplicates based on title
    const uniqueProjects = allProjects.filter((project, index, self) =>
      index === self.findIndex(p => p.title === project.title)
    )
    
    // Sort by featured status and date
    const sortedProjects = uniqueProjects.sort((a, b) => {
      if (a.featured && !b.featured) return -1
      if (!a.featured && b.featured) return 1
      return new Date(b.startDate).getTime() - new Date(a.startDate).getTime()
    })
    
    return NextResponse.json(sortedProjects)
  } catch (error) {
    console.error('Error fetching projects:', error)
    return NextResponse.json(
      { error: 'Failed to fetch projects' },
      { status: 500 }
    )
  }
} 