import { Project, Skill, Experience, Education, Testimonial, User } from '@/types'

// Personal Information
export const userData: User = {
  name: 'Muhammad Usman Khan',
  email: 'usmanghias1@gmail.com',
  title: 'Senior Odoo | MERN | Shopify | Flutter | DevOps | WordPress & Full Stack Developer | MSSE @Quantic | CEO @CODCrafters | Senior Software & AI Engineer',
  bio: `Passionate software engineer from PUCIT with expertise in full-stack development, Odoo customization, and data science. Currently pursuing MSSE at Quantic School and based in Washington, D.C. I've successfully delivered 86+ Odoo projects and love creating innovative solutions that make a difference.`,
  location: 'Washington, D.C., United States',
  phone: '+44 7767559399', // UK number
  phoneSecondary: '+92 312 6912440', // Pakistan WhatsApp
  phoneUK: '+44 7767559399', // UK number
  website: 'https://codcrafters.org',
  avatar: '/images/me.png',
  resume: '/resume.pdf',
  socialLinks: {
    github: 'https://github.com/usmanghias',
    linkedin: 'https://www.linkedin.com/in/usman-ghias',
    facebook: 'https://www.facebook.com/musmanghias/',
    instagram: 'https://www.instagram.com/usmanghias467/',
    youtube: 'https://www.youtube.com/@codcrafters',
    whatsapp: 'https://wa.link/8soaqu',
  },
}

// Skills Data
export const skills: Skill[] = [
  // Programming Languages
  { name: 'Python', category: 'programming', level: 'expert', experience: 4, projects: [], icon: '🐍' },
  { name: 'JavaScript', category: 'programming', level: 'expert', experience: 4, projects: [], icon: '🟨' },
  { name: 'TypeScript', category: 'programming', level: 'expert', experience: 3, projects: [], icon: '🔷' },
  { name: 'Java', category: 'programming', level: 'advanced', experience: 3, projects: [], icon: '☕' },
  { name: 'PHP', category: 'programming', level: 'advanced', experience: 3, projects: [], icon: '🐘' },
  { name: 'XML', category: 'programming', level: 'expert', experience: 4, projects: [], icon: '📄' },
  { name: 'JSON', category: 'programming', level: 'expert', experience: 4, projects: [], icon: '📋' },
  
  // Frameworks & Libraries
  { name: 'React', category: 'framework', level: 'expert', experience: 4, projects: [], icon: '⚛️' },
  { name: 'Next.js', category: 'framework', level: 'expert', experience: 3, projects: [], icon: '▲' },
  { name: 'Node.js', category: 'framework', level: 'expert', experience: 4, projects: [], icon: '🟢' },
  { name: 'Django', category: 'framework', level: 'advanced', experience: 3, projects: [], icon: '🎯' },
  { name: 'Express.js', category: 'framework', level: 'expert', experience: 3, projects: [], icon: '🚀' },
  { name: 'Odoo', category: 'framework', level: 'expert', experience: 4, projects: [], icon: '🔧' },
  { name: 'Flutter', category: 'framework', level: 'advanced', experience: 2, projects: [], icon: '📱' },
  { name: 'OWL (Odoo Web Library)', category: 'framework', level: 'expert', experience: 3, projects: [], icon: '🦉' },
  
  // Databases
  { name: 'MongoDB', category: 'database', level: 'expert', experience: 4, projects: [], icon: '🍃' },
  { name: 'PostgreSQL', category: 'database', level: 'expert', experience: 4, projects: [], icon: '🐘' },
  { name: 'MySQL', category: 'database', level: 'advanced', experience: 3, projects: [], icon: '🐬' },
  
  // Tools & Technologies
  { name: 'Git', category: 'tool', level: 'expert', experience: 4, projects: [], icon: '📝' },
  { name: 'Docker', category: 'tool', level: 'advanced', experience: 2, projects: [], icon: '🐳' },
  { name: 'AWS', category: 'cloud', level: 'advanced', experience: 2, projects: [], icon: '☁️' },
  { name: 'DevOps', category: 'tool', level: 'advanced', experience: 2, projects: [], icon: '🔄' },
  { name: 'Shopify', category: 'tool', level: 'expert', experience: 3, projects: [], icon: '🛍️' },
  { name: 'WordPress', category: 'tool', level: 'expert', experience: 4, projects: [], icon: '📝' },
  { name: 'API Integration', category: 'tool', level: 'expert', experience: 4, projects: [], icon: '🔗' },
  { name: 'XML-RPC', category: 'tool', level: 'expert', experience: 3, projects: [], icon: '🔌' },
  
  // Data Science & AI
  { name: 'Machine Learning', category: 'tool', level: 'advanced', experience: 3, projects: [], icon: '🤖' },
  { name: 'Deep Learning', category: 'tool', level: 'advanced', experience: 2, projects: [], icon: '🧠' },
  { name: 'TensorFlow', category: 'framework', level: 'advanced', experience: 2, projects: [], icon: '🔥' },
  { name: 'Pandas', category: 'tool', level: 'expert', experience: 3, projects: [], icon: '🐼' },
  { name: 'AI Engineering', category: 'tool', level: 'advanced', experience: 2, projects: [], icon: '🤖' },
  
  // Design & UI/UX
  { name: 'Tailwind CSS', category: 'design', level: 'expert', experience: 3, projects: [], icon: '🎨' },
  { name: 'Figma', category: 'design', level: 'advanced', experience: 2, projects: [], icon: '🎨' },
  { name: 'HTML5', category: 'design', level: 'expert', experience: 4, projects: [], icon: '🌐' },
  { name: 'CSS3', category: 'design', level: 'expert', experience: 4, projects: [], icon: '🎨' },
  
  // Business Services
  { name: 'Business Analysis', category: 'soft-skill', level: 'expert', experience: 4, projects: [], icon: '📊' },
  { name: 'Project Management', category: 'soft-skill', level: 'expert', experience: 4, projects: [], icon: '📋' },
  { name: 'Client Relations', category: 'soft-skill', level: 'expert', experience: 4, projects: [], icon: '🤝' },
  
  // Soft Skills
  { name: 'Leadership', category: 'soft-skill', level: 'expert', experience: 4, projects: [], icon: '👑' },
  { name: 'Communication', category: 'soft-skill', level: 'expert', experience: 4, projects: [], icon: '💬' },
  { name: 'Problem Solving', category: 'soft-skill', level: 'expert', experience: 4, projects: [], icon: '🧩' },
]

// Experience Data
export const experiences: Experience[] = [
  {
    company: 'Dispo Genius',
    position: 'AI Researcher',
    description: 'Developed and integrated APIs for real estate applications, enhancing user experience and operational efficiency. Collaborated with cross-functional teams to drive innovative solutions in AI for property management.',
    startDate: new Date('2025-05-01'),
    endDate: new Date('2025-06-30'),
    current: false,
    location: 'United States (Remote)',
    type: 'freelance',
    achievements: [
      'Developed and integrated APIs for real estate applications',
      'Enhanced user experience and operational efficiency',
      'Collaborated with cross-functional teams for AI solutions',
      'Contributed to 30% increase in client engagement'
    ],
    technologies: ['Python', 'AI', 'API Development', 'Real Estate Tech']
  },
  {
    company: 'CODCrafters',
    position: 'Chief Executive Officer',
    description: 'Leading the implementation of ERP systems for clients, ensuring seamless integration and increased operational efficiency. Developing custom web and mobile applications tailored to meet clients specific business needs.',
    startDate: new Date('2021-09-01'),
    current: true,
    location: 'Samundri, Punjab, Pakistan',
    type: 'full-time',
    achievements: [
      'Led implementation of ERP systems for clients',
      'Developed custom web and mobile applications',
      'Provided expert business consultancy services',
      'Built Hospital Management System with 50+ apps',
      'Helped clients shift operations online'
    ],
    technologies: ['Odoo', 'MERN Stack', 'Python', 'ERP Systems', 'Business Consulting']
  },
  {
    company: 'IT Horizon Solutions',
    position: 'CMO & Odoo Expert',
    description: 'Led marketing efforts and Odoo implementations, converting clients to Odoo services. Developed posts to attract clients and managed client relationships for successful conversions.',
    startDate: new Date('2025-01-01'),
    endDate: new Date('2025-04-30'),
    current: false,
    location: 'Kuwait City, Kuwait (Remote)',
    type: 'freelance',
    achievements: [
      'Led marketing efforts and Odoo implementations',
      'Successfully converted clients to Odoo services',
      'Developed client attraction strategies',
      'Managed client relationships for conversions'
    ],
    technologies: ['Odoo', 'Marketing', 'Client Management', 'Business Development']
  },
  {
    company: 'SyncQuik',
    position: 'Senior Odoo Techno Functional',
    description: 'Successfully developed a comprehensive Car Repair Management System. Implemented customized modules to enhance system functionality and streamline operations.',
    startDate: new Date('2024-11-01'),
    endDate: new Date('2025-01-31'),
    current: false,
    location: 'Dubai, UAE (Remote)',
    type: 'freelance',
    achievements: [
      'Developed comprehensive Car Repair Management System',
      'Implemented customized modules for enhanced functionality',
      'Collaborated with cross-functional teams',
      'Ensured seamless integration and user-friendly interface'
    ],
    technologies: ['Odoo', 'Python', 'XML-RPC', 'Project Management', 'Functional Training']
  },
  {
    company: 'TeleNoc',
    position: 'Senior Odoo Developer',
    description: 'Developed full-fledged Odoo modules with frontend in Owl and XML-RPC and backend in Python. Improved company reputation by enhancing employee benefits and satisfaction.',
    startDate: new Date('2023-10-01'),
    endDate: new Date('2024-09-30'),
    current: false,
    location: 'Riyadh, Saudi Arabia (Hybrid)',
    type: 'full-time',
    achievements: [
      'Developed full-fledged Odoo modules with Owl frontend',
      'Built backend systems in Python with XML-RPC',
      'Improved company reputation and employee satisfaction',
      'Successfully completed multiple complex projects'
    ],
    technologies: ['Odoo', 'OWL', 'XML-RPC', 'Python', 'HTML5', 'CSS3', 'Full-Stack Development']
  },
  {
    company: 'PUCIT - FCIT',
    position: 'Teaching Assistant - Data Science',
    description: 'Assisted in teaching data science concepts, machine learning, and deep learning to undergraduate students. Provided guidance in Python programming and data analysis.',
    startDate: new Date('2023-09-01'),
    endDate: new Date('2024-03-31'),
    current: false,
    location: 'Lahore, Punjab, Pakistan',
    type: 'part-time',
    achievements: [
      'Taught data science and machine learning concepts',
      'Guided students in Python programming',
      'Assisted with deep learning projects',
      'Mentored students in data analysis techniques'
    ],
    technologies: ['Data Science', 'Machine Learning', 'Python', 'Pandas', 'Keras', 'Deep Learning']
  },
  {
    company: 'Techward Robe',
    position: 'Full Stack Developer',
    description: 'Developed MERN stack applications enhancing user experience and functionality. Implemented website development projects ensuring high-quality design and performance.',
    startDate: new Date('2023-04-01'),
    endDate: new Date('2023-09-30'),
    current: false,
    location: 'Lahore, Punjab, Pakistan',
    type: 'part-time',
    achievements: [
      'Developed MERN stack applications',
      'Enhanced user experience and functionality',
      'Implemented high-quality website designs',
      'Collaborated with cross-functional teams'
    ],
    technologies: ['MERN Stack', 'React.js', 'Node.js', 'Express.js', 'MongoDB', 'JavaScript']
  },
  {
    company: 'PUCIT - FCIT',
    position: 'Teaching Assistant - Computer Networks',
    description: 'Assisted in teaching computer networking concepts, protocols, and network administration to students.',
    startDate: new Date('2023-03-01'),
    endDate: new Date('2023-08-31'),
    current: false,
    location: 'Lahore, Punjab, Pakistan',
    type: 'part-time',
    achievements: [
      'Taught computer networking concepts',
      'Provided technical support to students',
      'Demonstrated leadership in classroom management',
      'Assisted with network administration projects'
    ],
    technologies: ['Computer Networks', 'Network Protocols', 'Technical Support', 'Teaching']
  }
]

// Education Data
export const education: Education[] = [
  {
    institution: 'Quantic School of Business and Technology',
    degree: 'Master of Science in Software Engineering',
    field: 'Software Engineering',
    startDate: new Date('2024-09-01'),
    current: true,
    achievements: [
      'Currently pursuing MSSE degree',
      'Focus on advanced software engineering practices',
      'Business and technology integration',
      'Global perspective on software development'
    ],
    relevantCourses: [
      'Advanced Software Architecture',
      'Business Technology Strategy',
      'Leadership in Technology',
      'Global Software Development'
    ]
  },
  {
    institution: 'Punjab University College of Information Technology (PUCIT)',
    degree: 'Bachelor of Science',
    field: 'Software Engineering',
    startDate: new Date('2019-09-01'),
    endDate: new Date('2023-06-30'),
    current: false,
    achievements: [
      'Final Year Project: ICE AGE - Automated Deep Learning Framework for Glacier Monitoring',
      'Active member of programming societies',
      'Participated in multiple hackathons',
      'Maintained good academic standing',
      'Teaching Assistant for multiple courses'
    ],
    relevantCourses: [
      'Data Structures and Algorithms',
      'Database Systems',
      'Software Engineering',
      'Machine Learning',
      'Web Development',
      'Mobile App Development'
    ]
  }
]

// Featured Projects (will be expanded with more projects)
export const featuredProjects: Project[] = [
  {
    title: 'ICE AGE - Glacier Monitoring System',
    description: 'Automated Deep Learning-based Framework for Monitoring of Debris-Covered Glaciers from Remotely Sensed Images',
    longDescription: 'My Final Year Project that combines Software Engineering with Space Science to create an innovative solution for glacier monitoring using satellite imagery and deep learning.',
    category: 'ai-ml',
    technologies: ['Python', 'TensorFlow', 'OpenCV', 'Satellite Imagery', 'Deep Learning'],
    images: ['/images/projects/ice-age-1.jpg'],
    featured: true,
    status: 'completed',
    startDate: new Date('2022-09-01'),
    endDate: new Date('2023-06-01'),
    metrics: {
      performance: '95% accuracy in glacier detection',
      satisfaction: 5
    },
    challenges: [
      'Processing large satellite imagery datasets',
      'Developing accurate deep learning models',
      'Integrating multiple data sources'
    ],
    solutions: [
      'Implemented efficient data preprocessing pipeline',
      'Used transfer learning techniques',
      'Created robust data integration system'
    ]
  },
  {
    title: 'Hospital Management System',
    description: 'Comprehensive HMS for CODCrafters with advanced features for patient management, appointments, and billing',
    longDescription: 'A complete hospital management solution built for modern healthcare facilities with patient management, appointment scheduling, billing, and reporting features.',
    category: 'full-stack',
    technologies: ['React', 'Node.js', 'MongoDB', 'Express.js', 'Tailwind CSS'],
    images: ['/images/projects/hms-1.jpg'],
    featured: true,
    status: 'completed',
    startDate: new Date('2022-03-01'),
    endDate: new Date('2022-08-01'),
    client: 'Healthcare Facility',
    metrics: {
      users: 500,
      uptime: '99.9%',
      satisfaction: 4.8
    }
  },
  {
    title: 'Car Repairing Lab Management',
    description: 'Complete management system for automotive repair shops with inventory, scheduling, and customer management',
    longDescription: 'A comprehensive solution for car repair shops to manage their operations, track inventory, schedule appointments, and maintain customer records.',
    category: 'full-stack',
    technologies: ['MERN Stack', 'Redux', 'Material-UI', 'Node.js'],
    images: ['/images/projects/car-repair-1.jpg'],
    featured: true,
    status: 'completed',
    startDate: new Date('2021-11-01'),
    endDate: new Date('2022-02-01'),
    metrics: {
      users: 200,
      satisfaction: 4.7
    }
  }
]

// Testimonials
export const testimonials: Testimonial[] = [
  {
    name: 'Ahmed Hassan',
    position: 'CTO',
    company: 'TechStart Solutions',
    content: 'Usman delivered exceptional work on our Odoo customization project. His technical expertise and attention to detail were outstanding.',
    rating: 5,
    featured: true
  },
  {
    name: 'Sarah Johnson',
    position: 'Project Manager',
    company: 'Digital Innovations',
    content: 'Working with Usman was a pleasure. He completed our MERN stack application ahead of schedule and exceeded our expectations.',
    rating: 5,
    featured: true
  },
  {
    name: 'Muhammad Ali',
    position: 'Business Owner',
    company: 'Local Healthcare',
    content: 'The hospital management system Usman built for us has transformed our operations. Highly recommend his services.',
    rating: 5,
    featured: true
  }
]

// Project categories for filtering
export const projectCategories = [
  { value: 'all', label: 'All Projects' },
  { value: 'odoo', label: 'Odoo Development' },
  { value: 'web-development', label: 'Web Development' },
  { value: 'full-stack', label: 'Full Stack' },
  { value: 'shopify', label: 'Shopify' },
  { value: 'wordpress', label: 'WordPress' },
  { value: 'ai-ml', label: 'AI & Machine Learning' },
  { value: 'mobile-app', label: 'Mobile Apps' },
  { value: 'data-science', label: 'Data Science' },
]

// Statistics
export const stats = [
  { label: 'Odoo Projects', value: '86+' },
  { label: 'Happy Clients', value: '50+' },
  { label: 'Years Experience', value: '4+' },
  { label: 'Technologies Mastered', value: '25+' },
  { label: 'Lines of Code', value: '150K+' },
  { label: 'Coffee Cups', value: '∞' },
] 