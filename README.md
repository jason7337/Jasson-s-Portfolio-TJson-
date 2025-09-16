# 🚀 TJson Portfolio

![TJson Logo](public/images/logo-bg.png)

A modern, elegant, and responsive portfolio website showcasing my work as a Computer Systems Engineering student with 7+ years of software development experience.

[![Live Demo](https://img.shields.io/badge/Live-Demo-blue?style=for-the-badge)](https://tjson.net)
[![Portfolio Status](https://img.shields.io/badge/Status-Live-success?style=for-the-badge)](https://tjson.net)
[![GitHub](https://img.shields.io/github/stars/jason7337/Jasson-s-Portfolio-TJson-?style=for-the-badge)](https://github.com/jason7337/Jasson-s-Portfolio-TJson-)
[![Docker](https://img.shields.io/badge/Docker-Ready-2496ED?style=for-the-badge&logo=docker)](https://www.docker.com/)
[![Cloud Run](https://img.shields.io/badge/Cloud%20Run-Optimized-4285F4?style=for-the-badge&logo=google-cloud)](https://cloud.google.com/run)

## ✨ Features

- **🌐 Multilingual Support** - Spanish and English with language switcher
- **🎨 Modern Design** - Clean, elegant UI with smooth animations
- **📱 Fully Responsive** - Optimized for all devices and screen sizes
- **⚡ High Performance** - Built with Vite for lightning-fast loading
- **🎭 Framer Motion** - Beautiful animations and transitions
- **📄 Resume Download** - Generate and download CV/Resume in both languages
- **🗂️ PWA Ready** - Progressive Web App with manifest and favicon
- **📞 Contact Information** - Direct contact details and social links
- **🔍 SEO Optimized** - Complete meta tags and structured data
- **🎯 Interactive Skills** - Categorized skills with smooth transitions
- **🐳 Docker Support** - Containerized deployment with production optimizations
- **☁️ Cloud Native** - Ready for Google Cloud Run deployment

## 🛠️ Tech Stack

### Frontend
- **React 18** - Modern React with hooks and functional components
- **TypeScript** - Type-safe development
- **Vite** - Next-generation frontend tooling
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Production-ready motion library
- **Radix UI** - High-quality React components

### Backend & Infrastructure
- **Node.js** - JavaScript runtime
- **Express** - Web application framework
- **Docker** - Container platform
- **Google Cloud Run** - Serverless container platform

### Development Tools
- **ESLint** - Code linting and formatting
- **PostCSS** - CSS processing
- **i18next** - Internationalization framework
- **Lucide React** - Beautiful icon library

## 🚀 Quick Start

### Prerequisites
- Docker (for containerized deployment)
- Node.js 20+ (for local development)
- Google Cloud SDK (optional, for Cloud Run deployment)

### 🐳 Using Docker (Recommended)

1. **Clone the repository**
```bash
git clone https://github.com/jason7337/Jasson-s-Portfolio-TJson-.git
cd Jasson-s-Portfolio-TJson-
```

2. **Run with Docker Compose**
```bash
# Development mode with hot reload
docker-compose -f docker-compose.dev.yml up

# Production mode
docker-compose up
```

3. **Access the application**
- Development: http://localhost:5000
- Production: http://localhost:8080

### 💻 Traditional Setup

1. **Install dependencies**
```bash
npm install
```

2. **Start development server**
```bash
npm run dev
```

3. **Build for production**
```bash
npm run build
npm run start:production
```

## 🐳 Docker Commands

### Build Image
```bash
docker build -t portfolio:latest .
```

### Run Container
```bash
docker run -d \
  --name portfolio \
  -p 8080:8080 \
  -e SESSION_SECRET=your-secret-key \
  portfolio:latest
```

### View Logs
```bash
docker logs -f portfolio
```

### Health Check
```bash
curl http://localhost:8080/health
```

## ☁️ Google Cloud Run Deployment

### Prerequisites
1. Google Cloud Project with billing enabled
2. Cloud Run API enabled
3. Container Registry API enabled
4. gcloud CLI authenticated

### Deployment Steps

1. **Configure gcloud**
```bash
gcloud config set project YOUR-PROJECT-ID
gcloud auth configure-docker
```

2. **Build and Push Image**
```bash
# Using Cloud Build (recommended)
gcloud builds submit --config cloudbuild.yaml

# OR Manual build and push
docker build -t gcr.io/YOUR-PROJECT-ID/portfolio:latest .
docker push gcr.io/YOUR-PROJECT-ID/portfolio:latest
```

3. **Deploy to Cloud Run**
```bash
gcloud run deploy portfolio \
  --image gcr.io/YOUR-PROJECT-ID/portfolio:latest \
  --platform managed \
  --region us-central1 \
  --allow-unauthenticated \
  --port 8080 \
  --memory 512Mi \
  --min-instances 0 \
  --max-instances 10
```

4. **Set Environment Variables**
```bash
gcloud run services update portfolio \
  --update-env-vars SESSION_SECRET=your-production-secret \
  --region us-central1
```

### Continuous Deployment

The repository includes `cloudbuild.yaml` for automated deployments:

1. **Connect GitHub Repository**
```bash
gcloud builds triggers create github \
  --repo-name=portfolio \
  --repo-owner=yourusername \
  --branch-pattern="^main$" \
  --build-config=cloudbuild.yaml
```

2. **Push to main branch** - Automatically triggers build and deployment

## 📁 Project Structure

```
portfolio/
├── client/                  # React application source
│   └── src/
│       ├── components/      # React components
│       ├── hooks/           # Custom React hooks
│       ├── lib/             # Utilities and helpers
│       └── pages/           # Page components
├── public/                  # Static assets
├── dist/                    # Build output
├── server.js                # Express server
├── start-production.js      # Production startup script
├── Dockerfile               # Production container config
├── Dockerfile.dev           # Development container config
├── docker-compose.yml       # Production orchestration
├── docker-compose.dev.yml   # Development orchestration
├── cloudbuild.yaml          # Cloud Build configuration
├── .dockerignore            # Docker ignore rules
├── .gcloudignore           # Cloud Build ignore rules
└── package.json            # Dependencies and scripts
```

## 🔧 Configuration

### Environment Variables

| Variable | Description | Default |
|----------|-------------|---------|
| `PORT` | Server port | `8080` |
| `NODE_ENV` | Environment mode | `production` |
| `SESSION_SECRET` | Session encryption key | Required in production |

### Docker Configuration

The application uses multi-stage builds for optimal image size:
- **Builder stage**: Compiles TypeScript and bundles assets
- **Production stage**: Minimal runtime with only necessary files (~150MB)

### Security Features

- ✅ Non-root user execution in containers
- ✅ Health check endpoints for monitoring
- ✅ Proper signal handling with dumb-init
- ✅ Session security with encrypted cookies
- ✅ Optimized layer caching

## 📊 Performance Optimizations

- **Code Splitting**: Optimal bundle sizes with dynamic imports
- **Asset Caching**: Immutable headers for static assets
- **Lazy Loading**: Heavy components loaded on demand
- **Image Optimization**: Responsive loading strategies
- **Minimal Docker Image**: Alpine-based image (~150MB)
- **Build Caching**: Multi-stage Docker builds with layer optimization

## 🧪 Development Scripts

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run preview      # Preview production build
npm run lint         # Run ESLint
npm run type-check   # Run TypeScript checks
```

## 🔍 Troubleshooting

### Port Already in Use
```bash
# Find process using port
lsof -i :8080
# Kill process
kill -9 PID
```

### Docker Build Issues
```bash
# Clean build cache
docker builder prune -a

# Rebuild without cache
docker build --no-cache -t portfolio:latest .
```

### Cloud Run Issues
```bash
# View service logs
gcloud logging read "resource.type=cloud_run_revision" --limit 50

# Describe service
gcloud run services describe portfolio --region us-central1
```

## 🌍 Internationalization

The portfolio supports both Spanish and English:

- **Default Language**: Spanish (ES)
- **Alternative Language**: English (EN)
- **Translation Files**: `src/i18n/translations.ts`
- **Language Switcher**: Available in the navigation bar

## 🎨 Customization

### Color Palette
The design system uses a carefully crafted color palette defined in `src/config/colors.ts`:
- **Primary**: Blue tones (#0ea5e9)
- **Accent**: Purple tones (#a855f7)
- **Neutral**: Gray scale for text and backgrounds
- **Semantic**: Success, warning, error colors

### Content Updates
- **Personal Information**: Update `src/i18n/translations.ts`
- **Resume Data**: Modify resume information in `src/hooks/useResumeGenerator.tsx`
- **Skills**: Modify the skills array in `Skills.tsx`
- **Projects**: Update the projects array in `Projects.tsx`
- **Images**: Replace files in `public/images/`

## 📞 Contact Information

The portfolio displays direct contact information including:
- Email and phone contact details
- Social media links (GitHub, LinkedIn)
- Professional availability status
- SpeedyGoApp project links
- **Resume Download**: Users can download CV/Resume directly in both languages

## 🌐 Live Demo

🎉 **The portfolio is now live at [tjson.net](https://tjson.net)**

### Features Available:
- ✅ Fully responsive design across all devices
- ✅ Multilingual support (Spanish/English)
- ✅ Resume/CV download functionality
- ✅ Contact information and social links
- ✅ Project showcase and professional experience
- ✅ Skills demonstration with interactive categories

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch: `git checkout -b feature/new-feature`
3. Commit your changes: `git commit -am 'Add new feature'`
4. Push to the branch: `git push origin feature/new-feature`
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 About Me

**Jasson Armando Gómez Guevara**
Computer Systems Engineering Student | 7+ Years Software Development Experience

- 🌍 **Location**: El Salvador
- 💼 **Remote Work**: 100% Available
- 🌐 **Website**: [tjson.net](https://tjson.net)
- 📧 **Email**: [gomezjason010@gmail.com](mailto:gomezjason010@gmail.com)
- 📱 **Phone**: +503 7502 5302
- 🚀 **Role**: Lead Developer at [SpeedyGoApp](https://speedygoapp.com)

### Tech Stack Expertise
- **Backend**: Python (Flask, FastAPI, Django), Node.js (Express, Nest.js), Java
- **Frontend**: React.js, TypeScript, Tailwind CSS, Vite, Framer Motion
- **Mobile**: Flutter, Dart, React Native, Firebase
- **Databases**: Firebase, PostgreSQL, MongoDB, MySQL
- **Cloud & DevOps**: Docker, Google Cloud Run, Firebase, AWS, CI/CD
- **Tools**: Git, VS Code, Android Studio, Agile/Scrum

### Current Projects
- 🚀 **Lead Developer** at [SpeedyGoApp](https://speedygoapp.com) - Transport app for Colombia
- 🌐 **Portfolio Website** - [tjson.net](https://tjson.net) - This responsive portfolio
- 💼 **Freelance Development** - 20+ completed projects with international clients

## 🌟 Support

If you like this project, please give it a ⭐ on GitHub!

---

**Made with ❤️ using React + TypeScript + Vite + TailwindCSS + Docker**

*This portfolio demonstrates my expertise in modern web development technologies and cloud-native deployment. Visit [tjson.net](https://tjson.net) to see it live and download my resume directly from the site.*