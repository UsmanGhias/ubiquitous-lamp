// Core Types
export interface User {
  name: string;
  email: string;
  title: string;
  bio: string;
  location: string;
  phone: string;
  phoneSecondary?: string;
  phoneUK?: string;
  website: string;
  avatar: string;
  resume: string;
  socialLinks: SocialLinks;
}

export interface SocialLinks {
  github?: string;
  linkedin?: string;
  twitter?: string;
  instagram?: string;
  facebook?: string;
  youtube?: string;
  whatsapp?: string;
}

// Project Types
export interface Project {
  title: string;
  description: string;
  longDescription: string;
  category: string;
  technologies: string[];
  images: string[];
  liveUrl?: string;
  githubUrl?: string;
  featured: boolean;
  status: 'completed' | 'in-progress' | 'planned';
  startDate: Date | string;
  endDate?: Date | string;
  client?: string;
  testimonial?: Testimonial;
  metrics?: ProjectMetrics;
  challenges?: string[];
  solutions?: string[];
}

export type ProjectCategory = 
  | 'odoo'
  | 'web-development'
  | 'mobile-app'
  | 'data-science'
  | 'shopify'
  | 'wordpress'
  | 'full-stack'
  | 'ai-ml'
  | 'other';

export type ProjectStatus = 
  | 'completed'
  | 'in-progress'
  | 'planned'
  | 'on-hold';

export interface ProjectMetrics {
  users?: number;
  performance?: string;
  uptime?: string;
  satisfaction?: number;
}

// Experience & Education
export interface Experience {
  company: string;
  position: string;
  description: string;
  startDate: Date | string;
  endDate?: Date | string;
  current: boolean;
  location: string;
  type: 'full-time' | 'part-time' | 'contract' | 'freelance' | 'internship';
  achievements: string[];
  technologies: string[];
}

export interface Education {
  institution: string;
  degree: string;
  field: string;
  startDate: Date | string;
  endDate?: Date | string;
  current: boolean;
  gpa?: string;
  achievements?: string[];
  relevantCourses?: string[];
}

// Skills & Certifications
export interface Skill {
  name: string;
  category: SkillCategory;
  level: SkillLevel;
  experience: number; // years
  projects: string[]; // project IDs
  icon?: string;
}

export type SkillCategory = 
  | 'programming'
  | 'framework'
  | 'database'
  | 'tool'
  | 'cloud'
  | 'design'
  | 'soft-skill';

export type SkillLevel = 
  | 'beginner'
  | 'intermediate'
  | 'advanced'
  | 'expert';

export interface Certification {
  name: string;
  issuer: string;
  issueDate: Date;
  expiryDate?: Date;
  credentialId?: string;
  credentialUrl?: string;
  image?: string;
}

// Blog & Content
export interface BlogPost {
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  author: string;
  category: string;
  tags: string[];
  featuredImage: string;
  published: boolean;
  publishDate: Date;
  readTime: number;
  views: number;
  likes: number;
}

// Testimonials & Reviews
export interface Testimonial {
  name: string;
  position: string;
  company: string;
  content: string;
  rating: number;
  avatar?: string;
  projectId?: string;
  featured: boolean;
}

// Contact & Communication
export interface ContactMessage {
  name: string;
  email: string;
  subject: string;
  message: string;
  phone?: string;
  company?: string;
  budget?: string;
  timeline?: string;
  projectType?: string;
  status: MessageStatus;
}

export type MessageStatus = 
  | 'new'
  | 'read'
  | 'replied'
  | 'archived';

// Analytics & Statistics
export interface Analytics {
  pageViews: number;
  uniqueVisitors: number;
  bounceRate: number;
  averageSessionDuration: number;
  topPages: PageView[];
  referrers: Referrer[];
  devices: DeviceStats;
  locations: LocationStats[];
  date: Date;
}

export interface PageView {
  path: string;
  views: number;
  uniqueViews: number;
}

export interface Referrer {
  source: string;
  visits: number;
}

export interface DeviceStats {
  desktop: number;
  mobile: number;
  tablet: number;
}

export interface LocationStats {
  country: string;
  visitors: number;
}

// Form Data Types
export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
  phone?: string;
  company?: string;
  budget?: string;
  timeline?: string;
  projectType?: string;
}

export interface NewsletterFormData {
  email: string;
  name?: string;
}

// Component Props Types
export interface ProjectCardProps {
  project: Project;
  onClick?: () => void;
  className?: string;
}

export interface SkillBarProps {
  skill: Skill;
  animated?: boolean;
  showPercentage?: boolean;
}

export interface TimelineItemProps {
  item: Experience | Education;
  type: 'experience' | 'education';
}

export type Theme = 'light' | 'dark';

export interface FilterOptions {
  category?: ProjectCategory[];
  technology?: string[];
  status?: ProjectStatus[];
  featured?: boolean;
}

export interface SortOptions {
  field: 'title' | 'startDate' | 'endDate';
  order: 'asc' | 'desc';
}

export interface SiteSettings {
  personalInfo: {
    name: string;
    title: string;
    subtitle: string;
    bio: string;
    location: string;
    email: string;
    phone: string;
    profileImage: string;
    resumeUrl: string;
    socialLinks: {
      github?: string;
      linkedin?: string;
      twitter?: string;
      instagram?: string;
      whatsapp?: string;
    };
  };
  heroSection: {
    backgroundImage: string;
    greeting: string;
    description: string;
    ctaText: string;
  };
  aboutSection: {
    title: string;
    description: string;
    image: string;
    highlights: string[];
  };
  skillsSection: {
    title: string;
    description: string;
    categories: {
      name: string;
      skills: string[];
      icon: string;
    }[];
  };
  experienceSection: {
    title: string;
    description: string;
    experiences: Experience[];
  };
  contactSection: {
    title: string;
    description: string;
    officeAddress: string;
    workingHours: string;
  };
}

export interface ImageCategory {
  name: string;
  path: string;
  images: string[];
} 