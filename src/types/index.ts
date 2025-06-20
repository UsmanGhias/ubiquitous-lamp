// Core Types
export interface User {
  _id?: string;
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
  createdAt?: Date;
  updatedAt?: Date;
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
  _id?: string;
  title: string;
  description: string;
  longDescription?: string;
  category: ProjectCategory;
  technologies: string[];
  images: string[];
  liveUrl?: string;
  githubUrl?: string;
  featured: boolean;
  status: ProjectStatus;
  startDate: Date;
  endDate?: Date;
  client?: string;
  testimonial?: Testimonial;
  metrics?: ProjectMetrics;
  challenges?: string[];
  solutions?: string[];
  createdAt?: Date;
  updatedAt?: Date;
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
  _id?: string;
  company: string;
  position: string;
  description: string;
  startDate: Date;
  endDate?: Date;
  current: boolean;
  location: string;
  type: 'full-time' | 'part-time' | 'contract' | 'freelance' | 'internship';
  achievements: string[];
  technologies: string[];
}

export interface Education {
  _id?: string;
  institution: string;
  degree: string;
  field: string;
  startDate: Date;
  endDate?: Date;
  current: boolean;
  gpa?: string;
  achievements?: string[];
  relevantCourses?: string[];
}

// Skills & Certifications
export interface Skill {
  _id?: string;
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
  _id?: string;
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
  _id?: string;
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
  createdAt?: Date;
  updatedAt?: Date;
}

// Testimonials & Reviews
export interface Testimonial {
  _id?: string;
  name: string;
  position: string;
  company: string;
  content: string;
  rating: number;
  avatar?: string;
  projectId?: string;
  featured: boolean;
  createdAt?: Date;
}

// Contact & Communication
export interface ContactMessage {
  _id?: string;
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
  createdAt?: Date;
  repliedAt?: Date;
}

export type MessageStatus = 
  | 'new'
  | 'read'
  | 'replied'
  | 'archived';

// Analytics & Statistics
export interface Analytics {
  _id?: string;
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

// API Response Types
export interface ApiResponse<T = any> {
  success: boolean;
  data?: T;
  message?: string;
  error?: string;
}

export interface PaginatedResponse<T> extends ApiResponse<T[]> {
  pagination: {
    page: number;
    limit: number;
    total: number;
    pages: number;
  };
}

// Form Types
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

// Utility Types
export type Theme = 'light' | 'dark';

export interface FilterOptions {
  category?: ProjectCategory[];
  technology?: string[];
  status?: ProjectStatus[];
  featured?: boolean;
}

export interface SortOptions {
  field: 'title' | 'startDate' | 'endDate' | 'createdAt';
  order: 'asc' | 'desc';
}

// Database Models (for backend)
export interface DatabaseModel {
  _id?: string;
  createdAt?: Date;
  updatedAt?: Date;
} 