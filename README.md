# Muhammad Usman Khan - Demo Website - Orginal Repo is Private

A modern, responsive portfolio website built with Next.js 14, TypeScript, and Tailwind CSS. Features a beautiful UI, static project showcase, and comprehensive display of professional experience.

## 🚀 Features

### 🎯 Core Features
- **Static Project Showcase**: Beautifully designed project display
- **Contact Form**: Direct email integration via mailto links
- **Resume Download**: Direct PDF download functionality
- **Image Organization**: Structured asset management
- **Performance Optimizations**: Fast loading and smooth animations
- **TypeScript Integration**: Full type safety throughout the application

### 🔧 Technical Features
- **Static Site Generation**: Fast and secure static site
- **Error Handling**: Comprehensive error states and loading indicators
- **Responsive Design**: Mobile-first approach with modern UI/UX
- **SEO Optimized**: Meta tags, structured data, and accessibility features

## 🛠️ Tech Stack

- **Frontend**: Next.js 14, React 18, TypeScript
- **Styling**: Tailwind CSS, Framer Motion for animations
- **Data**: Static JSON files for content
- **Deployment**: Vercel-ready configuration
- **Tools**: ESLint, Prettier, Lucide Icons

## 📁 Project Structure

```
Portfolio/
├── src/
│   ├── app/
│   │   └── globals.css         # Global styles
│   ├── components/
│   │   ├── layout/            # Header, Footer components
│   │   └── sections/          # Page sections
│   ├── lib/
│   │   └── staticData.ts      # Static data and configurations
│   └── types/
│       └── index.ts           # TypeScript type definitions
├── public/
│   ├── images/               # Static images
│   └── resume.pdf           # Downloadable resume
└── data/
    ├── settings.json        # Site settings
    └── projects.json        # Project data
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

3. **Start development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Access the application**
   - Portfolio: http://localhost:3000

## 🎨 Customization Guide

### Personal Information
Update your details in `data/settings.json`:
- Personal information (name, title, bio)
- Contact details and social links
- Skills and experience data
- Professional experience timeline

### Project Data
Update project information in `data/projects.json`:
- Project details
- Technologies used
- Images and links
- Status and dates

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

2. **Domain Setup**:
   - Configure custom domain in Vercel
   - Update `NEXT_PUBLIC_SITE_URL` accordingly

### Other Platforms
- **Netlify**: Use `npm run build` and deploy `out/` folder
- **AWS**: Deploy with Amplify or S3 + CloudFront
- **Docker**: Dockerfile included for containerization

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
