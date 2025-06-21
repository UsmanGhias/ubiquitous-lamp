import settingsData from '../../data/settings.json'
import projectsData from '../../data/projects.json'

export const settings = settingsData

// Type for our project structure
export interface Project {
  id: string
  title: string
  description: string
  longDescription?: string
  image?: string
  documentUrl?: string
  technologies: string[]
  category: string
  featured: boolean
}

// Export projects with type assertion
export const projects = projectsData.projects as Project[]

export const userData = {
  name: "Muhammad Usman Khan",
  bio: "Passionate full-stack developer with expertise in Odoo ERP development, web applications, and cloud solutions. Committed to delivering high-quality, scalable software solutions that drive business growth.",
  location: "Samundri, Punjab, Pakistan",
  email: "usmanghias533@gmail.com",
  phoneSecondary: "+92 300 1234567",
  socialLinks: {
    github: "https://github.com/UsmanGhias",
    linkedin: "https://www.linkedin.com/in/m-usmanghias/",
    twitter: ""
  }
}

export const stats = [
  { label: "Years Experience", value: "3+" },
  { label: "Projects Completed", value: "86+" },
  { label: "Happy Clients", value: "50+" },
  { label: "Technologies", value: "15+" }
]

export const siteSettings = {
  profileImage: "/me.png",
  heroImage: "/me.png",
  aboutImage: "/user.jpeg",
  backgroundImage: "/images/hero-bg.jpg",
  name: "Muhammad Usman Khan",
  role: "Full Stack Developer & Odoo Expert",
  about: "Passionate full-stack developer with expertise in Odoo ERP development, web applications, and cloud solutions.",
  email: "usmanghias533@gmail.com",
  phone: "+92 300 1234567",
  location: "Samundri, Punjab, Pakistan",
  socialLinks: {
    github: "https://github.com/UsmanGhias",
    linkedin: "https://www.linkedin.com/in/m-usmanghias/",
    twitter: ""
  }
} 