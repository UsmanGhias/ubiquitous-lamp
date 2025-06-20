# Quick Setup Instructions

## 🚀 Immediate Setup (5 minutes)

### 1. Email Configuration
Create `.env.local` file in the root directory:
```env
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-app-password
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

### 2. Gmail App Password Setup
1. Go to [Google Account Settings](https://myaccount.google.com/)
2. Security → 2-Step Verification → App passwords
3. Generate password for "Mail"
4. Use this 16-character password in `.env.local`

### 3. Admin Dashboard Access
- URL: `http://localhost:3000/admin`
- Password: `admin123` (change this in production!)

### 4. Start Development
```bash
npm run dev
```

## 📊 Dashboard Features

### Adding Your First Project
1. Go to `/admin`
2. Click "Add Project"
3. Fill in:
   - Project title
   - Description
   - Technologies (comma-separated)
   - Category (Odoo, Web Development, etc.)
   - Status (Completed, In Progress, etc.)
   - Mark as "Featured" for homepage display

### Managing Projects
- **Edit**: Click pencil icon
- **Delete**: Click trash icon
- **Filter**: Use category buttons
- **Search**: Type in search box

## 🎯 Quick Customization

### Update Personal Info
Edit `src/lib/data.ts`:
- Change name, title, bio
- Update contact information
- Modify skills and experience

### Change Admin Password
Edit `src/app/admin/page.tsx`:
- Line 23: Change `'admin123'` to your password

### Add Your Resume
Replace `public/resume.pdf` with your resume file

## 🔧 Troubleshooting

### Contact Form Not Working?
- Check `.env.local` file exists
- Verify Gmail app password is correct
- Ensure 2FA is enabled on Gmail

### Admin Dashboard Issues?
- Clear browser cache
- Check browser console for errors
- Verify `/data` directory exists

### Images Not Loading?
- Images should be in `public/images/`
- Project images in `public/images/projects/`
- Use `/images/filename.jpg` paths

## 📱 Next Steps

1. **Add Your Projects**: Use admin dashboard to add real projects
2. **Customize Design**: Update colors in `globals.css`
3. **Deploy**: Push to GitHub and deploy on Vercel
4. **Domain**: Connect your custom domain
5. **Analytics**: Add Google Analytics tracking

## 🚀 Daily Workflow

1. Develop new project
2. Go to `/admin`
3. Click "Add Project"
4. Fill details and save
5. Project appears on portfolio immediately!

---

**Need help?** Check the full README.md for detailed documentation. 