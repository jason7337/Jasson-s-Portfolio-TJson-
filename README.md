# Portfolio - Jasson Gómez

Full Stack Developer portfolio built with React, TypeScript, and Node.js.

## Stack

- React 18 + TypeScript + Vite
- Tailwind CSS + Framer Motion
- Node.js + Express
- Docker + Google Cloud Run
- i18next (EN/ES)

## Features

- Responsive design with animations
- Bilingual support (Spanish/English)
- Resume generator and download
- Security headers and CSP
- Code splitting and lazy loading
- SEO optimization

## Development

```bash
git clone https://github.com/jason7337/Jasson-s-Portfolio-TJson-.git
cd Jasson-s-Portfolio-TJson-
npm install
npm run dev
```

Visit http://localhost:5000

## Docker

```bash
docker build -t tjson-portfolio .
docker run -p 8080:8080 -e SESSION_SECRET=your-secret tjson-portfolio
```

## Deployment

Google Cloud Run:

```bash
./deploy.sh YOUR_PROJECT_ID
```

Or manually:

```bash
gcloud run deploy portfolio \
  --source . \
  --platform managed \
  --region us-central1 \
  --allow-unauthenticated
```

## About

**Jasson Armando Gómez Guevara**

Full Stack Developer with 7+ years of experience building web and mobile applications for international clients. Currently at SpeedyGoApp.

### Skills

- Backend: Python, Node.js, Java
- Frontend: React, TypeScript, Vue.js
- Mobile: Flutter, React Native
- Cloud: Google Cloud, AWS, Firebase
- Databases: PostgreSQL, MongoDB, Redis

### Projects

- [SpeedyGoApp](https://speedygoapp.com) - Real-time transportation platform
- TJson Portfolio - This site
- 20+ client projects

### Contact

- Website: [tjson.net](https://tjson.net)
- Email: gomezjason010@gmail.com
- Work: jassongomez@speedygoapp.com
- LinkedIn: [jasson-gomez](https://www.linkedin.com/in/jasson-gomez-211777209/)
- GitHub: [@jason7337](https://github.com/jason7337)
- Phone: +503 7502 5302

## License

MIT
