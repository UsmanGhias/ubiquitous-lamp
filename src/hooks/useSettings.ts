import { useState, useEffect } from 'react'
import { siteSettings } from '@/lib/staticData'

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

export function useSettings() {
  const [settings, setSettings] = useState<SiteSettings | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    // Use static data instead of fetching
    setSettings(siteSettings)
    setIsLoading(false)
  }, [])

  return { settings, isLoading, error }
} 