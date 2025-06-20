# Muhammad Usman Khan - Portfolio Website

A modern, responsive portfolio website built with Next.js 14, TypeScript, and Tailwind CSS. Features a dynamic project management dashboard, functional contact form, and comprehensive showcase of professional experience.

## 🚀 New Features & Improvements

### ✨ Dynamic Project Dashboard
- **Admin Panel**: Full-featured dashboard at `/admin` for managing projects
- **Real-time Updates**: Projects are dynamically loaded from API
- **CRUD Operations**: Create, read, update, and delete projects
- **Rich Forms**: Comprehensive project editing with all metadata
- **File-based Storage**: Projects stored in JSON format for easy management
- **Authentication**: Simple password protection (password: `admin123`)

### 🎯 Enhanced Functionality
- **Functional Contact Form**: Email integration with Nodemailer
- **Resume Download**: Direct PDF download functionality
- **Image Organization**: Structured asset management with guidelines
- **Performance Optimizations**: Improved loading and error handling
- **TypeScript Integration**: Full type safety throughout the application

### 🔧 Technical Improvements
- **API Routes**: RESTful endpoints for project and contact management
- **Error Handling**: Comprehensive error states and loading indicators
- **Responsive Design**: Mobile-first approach with modern UI/UX
- **SEO Optimized**: Meta tags, structured data, and accessibility features

## 🛠️ Tech Stack

- **Frontend**: Next.js 14, React 18, TypeScript
- **Styling**: Tailwind CSS, Framer Motion for animations
- **Backend**: Next.js API Routes, Nodemailer
- **Database**: File-based JSON storage (easily upgradeable to MongoDB)
- **Deployment**: Vercel-ready configuration
- **Tools**: ESLint, Prettier, Lucide Icons

## 📁 Project Structure

```
Portfolio/
├── src/
│   ├── app/
│   │   ├── admin/              # Admin dashboard
│   │   ├── api/                # API routes
│   │   │   ├── admin/projects/ # Project management API
│   │   │   ├── contact/        # Contact form API
│   │   │   └── projects/       # Public projects API
│   │   └── globals.css         # Global styles
│   ├── components/
│   │   ├── layout/             # Header, Footer components
│   │   └── sections/           # Page sections
│   ├── lib/
│   │   └── data.ts            # Static data and configurations
│   └── types/
│       └── index.ts           # TypeScript type definitions
├── public/
│   ├── images/                # Static images
│   └── resume.pdf            # Downloadable resume
├── data/
│   └── projects.json         # Dynamic project data
└── images/
    └── portfolio-assets/     # Asset organization with guidelines
```

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ and npm/yarn
- Git for version control

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/portfolio.git
   cd portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Set up environment variables**
   ```bash
   cp env.local.example .env.local
   ```
   
   Update `.env.local` with your email credentials:
   ```env
   EMAIL_USER=your-email@gmail.com
   EMAIL_PASS=your-app-password
   NEXT_PUBLIC_SITE_URL=http://localhost:3000
   ```

4. **Start development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

5. **Access the application**
   - Portfolio: http://localhost:3000
   - Admin Dashboard: http://localhost:3000/admin

## 📊 Admin Dashboard Usage

### Accessing the Dashboard
1. Navigate to `/admin`
2. Enter password: `admin123` (change this in production!)
3. Manage your projects with full CRUD operations

### Adding Projects
1. Click "Add Project" button
2. Fill in project details:
   - Title, description, category
   - Technologies (comma-separated)
   - Project status and dates
   - Client information
   - Mark as featured if desired
3. Save to add to your portfolio

### Managing Projects
- **Edit**: Click edit icon on any project card
- **Delete**: Click delete icon (with confirmation)
- **Filter**: Use category filters and search
- **Status**: Track project completion status

## 📧 Contact Form Setup

### Email Configuration
The contact form uses Nodemailer with Gmail SMTP. To set up:

1. **Enable 2-Factor Authentication** on your Gmail account
2. **Generate App Password**:
   - Go to Google Account settings
   - Security → 2-Step Verification → App passwords
   - Generate password for "Mail"
3. **Update Environment Variables**:
   ```env
   EMAIL_USER=your-email@gmail.com
   EMAIL_PASS=your-16-character-app-password
   ```

### Form Features
- Auto-reply to users
- Admin notification emails
- Form validation and error handling
- Success/error feedback

## 🎨 Customization Guide

### Personal Information
Update your details in `src/lib/data.ts`:
- Personal information (name, title, bio)
- Contact details and social links
- Skills and experience data
- Professional experience timeline

### Styling & Themes
- **Colors**: Modify CSS variables in `globals.css`
- **Components**: Update Tailwind classes in component files
- **Animations**: Customize Framer Motion animations
- **Layout**: Adjust spacing and typography in Tailwind config

### Adding New Sections
1. Create component in `src/components/sections/`
2. Add to main page in `src/app/page.tsx`
3. Update navigation in header component
4. Add corresponding data types if needed

## 🌐 Deployment

### Vercel (Recommended)
1. **Connect Repository**:
   ```bash
   vercel --prod
   ```

2. **Environment Variables**:
   - Add all `.env.local` variables to Vercel dashboard
   - Ensure email credentials are secure

3. **Domain Setup**:
   - Configure custom domain in Vercel
   - Update `NEXT_PUBLIC_SITE_URL` accordingly

### Other Platforms
- **Netlify**: Use `npm run build` and deploy `out/` folder
- **AWS**: Deploy with Amplify or S3 + CloudFront
- **Docker**: Dockerfile included for containerization

## 🔐 Security Considerations

### Production Checklist
- [ ] Change admin password from default
- [ ] Use environment variables for sensitive data
- [ ] Enable HTTPS in production
- [ ] Set up proper CORS policies
- [ ] Implement rate limiting for APIs
- [ ] Regular security updates

### Admin Authentication
Current implementation uses simple password authentication. For production:
- Consider implementing JWT tokens
- Add session management
- Use bcrypt for password hashing
- Implement role-based access control

## 📈 Performance & SEO

### Optimizations Included
- **Next.js Image Optimization**: Automatic image optimization
- **Code Splitting**: Dynamic imports for better loading
- **SEO Meta Tags**: Comprehensive meta data
- **Sitemap Generation**: Automatic sitemap creation
- **Analytics Ready**: Google Analytics integration ready

### Performance Monitoring
- Use Vercel Analytics for deployment insights
- Monitor Core Web Vitals
- Regular Lighthouse audits
- Performance budgets in CI/CD

## 🤝 Contributing

### Development Workflow
1. Fork the repository
2. Create feature branch: `git checkout -b feature/amazing-feature`
3. Commit changes: `git commit -m 'Add amazing feature'`
4. Push to branch: `git push origin feature/amazing-feature`
5. Open Pull Request

### Code Standards
- TypeScript for type safety
- ESLint + Prettier for code formatting
- Conventional commits for git history
- Component-based architecture

## 📝 Project Management

### Daily Workflow for New Projects
1. **Access Dashboard**: Go to `/admin`
2. **Add Project**: Click "Add Project" button
3. **Fill Details**: Complete all project information
4. **Set Status**: Mark as in-progress/completed
5. **Feature Toggle**: Mark important projects as featured
6. **Save & Publish**: Project appears immediately on portfolio

### Data Management
- **Backup**: Regular backup of `data/projects.json`
- **Version Control**: Git tracks all changes
- **Migration**: Easy upgrade to database when needed

## 🔧 Troubleshooting

### Common Issues

**Contact Form Not Working**
- Check email credentials in `.env.local`
- Verify Gmail app password is correct
- Ensure 2FA is enabled on Gmail account

**Admin Dashboard Not Loading**
- Verify API routes are working: `/api/admin/projects`
- Check browser console for JavaScript errors
- Ensure `data/` directory exists and is writable

**Images Not Displaying**
- Check image paths in `public/images/`
- Verify Next.js image domains in `next.config.js`
- Ensure proper file permissions

**Build Errors**
- Run `npm run lint` to check for code issues
- Verify all TypeScript types are correct
- Check for missing dependencies

### Getting Help
- Check GitHub Issues for common problems
- Review Next.js documentation for framework issues
- Contact for specific implementation questions

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **Next.js Team** for the amazing framework
- **Vercel** for hosting and deployment platform
- **Tailwind CSS** for utility-first styling
- **Framer Motion** for smooth animations
- **Lucide Icons** for beautiful iconography

---

## 🔗 Links

- **Live Portfolio**: [Your Portfolio URL]
- **Admin Dashboard**: [Your Portfolio URL]/admin
- **GitHub Repository**: [Repository URL]
- **LinkedIn**: [Your LinkedIn Profile]

---

**Built with ❤️ by Muhammad Usman Khan**

*Senior Odoo | MERN | Shopify | Flutter | DevOps | WordPress & Full Stack Developer* 