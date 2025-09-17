# Jasson Gómez Portfolio

![TJson Logo](public/images/logo-bg.png)

Portfolio web profesional desarrollado con tecnologías modernas. Muestra mi experiencia como Ingeniero en Sistemas de Computación con más de 7 años en desarrollo de software.

## Tecnologías

- **Frontend**: React 18, TypeScript, Vite, Tailwind CSS
- **Backend**: Node.js, Express
- **Infraestructura**: Docker, Google Cloud Run
- **Herramientas**: Git, VS Code, Figma

## Características

- Diseño responsive optimizado para todos los dispositivos
- Soporte multiidioma (Español/Inglés)
- Generación y descarga de CV en PDF
- Formulario de contacto funcional
- Animaciones fluidas con Framer Motion
- PWA con manifest y service worker

## Desarrollo Local

```bash
# Clonar repositorio
git clone https://github.com/jason7337/Jasson-s-Portfolio-TJson-.git
cd Jasson-s-Portfolio-TJson-

# Instalar dependencias
npm install

# Iniciar servidor de desarrollo
npm run dev
```

## Docker

```bash
# Construir imagen
docker build -t portfolio .

# Ejecutar contenedor
docker run -p 8080:8080 -e SESSION_SECRET=dev portfolio

# Con script incluido
./test-local.sh docker
```

## Despliegue

```bash
# Google Cloud Run
./deploy.sh YOUR_PROJECT_ID

# O manualmente
gcloud run deploy portfolio --source .
```

## Sobre Mí

**Jasson Armando Gómez Guevara**
Ingeniero en Sistemas de Computación | Lead Developer

- 📍 El Salvador
- 💼 7+ años de experiencia en desarrollo
- 🚀 Lead Developer en [SpeedyGoApp](https://speedygoapp.com)
- 🌐 Especializado en desarrollo Full Stack
- 📱 Desarrollo móvil con Flutter y React Native

### Stack Técnico

**Backend**: Python (Flask, FastAPI, Django), Node.js, Java
**Frontend**: React, TypeScript, Vue.js, Angular
**Mobile**: Flutter, React Native, Dart
**Bases de Datos**: PostgreSQL, MongoDB, Firebase, MySQL
**Cloud**: AWS, Google Cloud, Firebase, Docker
**Herramientas**: Git, Jenkins, VS Code, Android Studio

### Contacto

- 🌐 [tjson.net](https://tjson.net)
- 📧 [gomezjason010@gmail.com](mailto:gomezjason010@gmail.com)
- 💼 [LinkedIn](https://www.linkedin.com/in/jasson-gomez-211777209/)
- 💻 [GitHub](https://github.com/jason7337)
- 📱 +503 7502 5302

## Proyectos Destacados

- **SpeedyGoApp**: Aplicación de transporte para Colombia con Flutter y Firebase
- **TJson Portfolio**: Este portafolio web con React y TypeScript
- **20+ proyectos freelance** con clientes internacionales

## Licencia

MIT License - Siéntete libre de usar este código como referencia para tu propio portafolio.