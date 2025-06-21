import { readFile, writeFile } from 'fs/promises'
import path from 'path'

const SETTINGS_FILE = path.join(process.cwd(), 'public', 'settings.json')

interface SiteSettings {
  profileImage: string
  heroImage: string
  aboutImage: string
  backgroundImage: string
  name: string
  role: string
  about: string
  email: string
  phone: string
  location: string
  socialLinks: {
    github: string
    linkedin: string
    twitter: string
  }
}

const defaultSettings: SiteSettings = {
  profileImage: '/images/profile/user.jpeg',
  heroImage: '/images/hero/hero-bg.jpg',
  aboutImage: '/images/about/about.jpg',
  backgroundImage: '/images/background/bg.jpg',
  name: 'Usman Ghias',
  role: 'Full Stack Developer',
  about: 'Passionate Full Stack Developer with expertise in modern web technologies',
  email: 'usmanghias533@gmail.com',
  phone: '+44 7767559399',
  location: 'Lahore, Pakistan',
  socialLinks: {
    github: 'https://github.com/usmanghias',
    linkedin: 'https://linkedin.com/in/usmanghias',
    twitter: 'https://twitter.com/usmanghias'
  }
}

async function getSettings(): Promise<SiteSettings> {
  try {
    const data = await readFile(SETTINGS_FILE, 'utf-8')
    return JSON.parse(data)
  } catch (error) {
    // If file doesn't exist, create it with default settings
    await writeFile(SETTINGS_FILE, JSON.stringify(defaultSettings, null, 2))
    return defaultSettings
  }
}

export async function GET() {
  try {
    const settings = await getSettings()
    return new Response(
      JSON.stringify(settings),
      { 
        status: 200,
        headers: {
          'Content-Type': 'application/json'
        }
      }
    )
  } catch (error) {
    console.error('Error reading settings:', error)
    return new Response(
      JSON.stringify({ error: 'Failed to read settings' }),
      { 
        status: 500,
        headers: {
          'Content-Type': 'application/json'
        }
      }
    )
  }
}

export async function POST(request: Request) {
  try {
    const updates = await request.json()
    const currentSettings = await getSettings()
    
    // Merge updates with current settings
    const newSettings = {
      ...currentSettings,
      ...updates
    }

    // Save the updated settings
    await writeFile(SETTINGS_FILE, JSON.stringify(newSettings, null, 2))

    return new Response(
      JSON.stringify(newSettings),
      { 
        status: 200,
        headers: {
          'Content-Type': 'application/json'
        }
      }
    )
  } catch (error) {
    console.error('Error updating settings:', error)
    return new Response(
      JSON.stringify({ error: 'Failed to update settings' }),
      { 
        status: 500,
        headers: {
          'Content-Type': 'application/json'
        }
      }
    )
  }
} 