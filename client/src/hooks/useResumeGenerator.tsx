/**
 * Hook for generating and downloading resume/CV
 */

import { useTranslation } from 'react-i18next';

export const useResumeGenerator = () => {
  const { t, i18n } = useTranslation();

  const generateResume = () => {
    const currentLang = i18n.language;
    
    const resumeData = {
      personal: {
        name: 'Jasson Armando Gómez Guevara',
        title: currentLang === 'es' 
          ? 'Desarrollador Full Stack Senior' 
          : 'Senior Full Stack Developer',
        email: 'gomezjason010@gmail.com',
        phone: '+503 7502 5302',
        location: 'El Salvador',
        website: 'https://tjson.net',
        github: 'https://github.com/jason7337',
        linkedin: 'https://linkedin.com/in/jasson-gomez-211777209'
      },
      summary: currentLang === 'es'
        ? 'Estudiante de Ingeniería de Sistemas Informáticos con más de 7 años de experiencia en desarrollo de software. Especializado en construir aplicaciones escalables con tecnologías modernas, desde arquitecturas de microservicios hasta interfaces de usuario intuitivas.'
        : 'Computer Systems Engineering student with over 7 years of experience in software development. Specialized in building scalable applications with modern technologies, from microservices architectures to intuitive user interfaces.',
      experience: [
        {
          title: currentLang === 'es' ? 'Desarrollador Principal' : 'Lead Developer',
          company: 'SpeedyGoApp',
          period: currentLang === 'es' ? 'Presente' : 'Present',
          achievements: currentLang === 'es' 
            ? [
                'Desarrollé aplicación móvil completa con Flutter y Dart',
                'Implementé arquitectura backend con Firebase',
                'Integré rastreo en tiempo real con Google Maps API',
                'Lanzamiento exitoso en Nariño, Colombia'
              ]
            : [
                'Developed complete mobile application with Flutter and Dart',
                'Implemented Firebase backend architecture',
                'Integrated real-time tracking with Google Maps API',
                'Successfully launched in Nariño, Colombia'
              ]
        },
        {
          title: currentLang === 'es' ? 'Desarrollador Full Stack Senior' : 'Senior Full Stack Developer',
          company: 'Freelance',
          period: currentLang === 'es' ? '7+ años' : '7+ years',
          achievements: currentLang === 'es'
            ? [
                'Entregué 20+ proyectos exitosos',
                'Especializado en ecosistemas React.js y Node.js',
                'Implementé arquitecturas de microservicios',
                'Integré soluciones de IA para optimización de procesos'
              ]
            : [
                'Delivered 20+ successful projects',
                'Specialized in React.js and Node.js ecosystems',
                'Implemented microservices architectures',
                'Integrated AI solutions for process optimization'
              ]
        }
      ],
      skills: {
        backend: ['Python', 'Node.js', 'Java', 'APIs RESTful', 'GraphQL', 'Microservices'],
        frontend: ['React.js', 'TypeScript', 'Tailwind CSS', 'Vite', 'Framer Motion'],
        mobile: ['Flutter', 'Dart', 'React Native'],
        database: ['Firebase', 'PostgreSQL', 'MongoDB', 'MySQL'],
        cloud: ['Firebase', 'AWS', 'Docker', 'CI/CD'],
        tools: ['Git', 'VS Code', 'Android Studio', 'Agile/Scrum']
      }
    };

    const htmlContent = generateHTMLResume(resumeData, currentLang);
    downloadResume(htmlContent, currentLang);
  };

  const generateHTMLResume = (data: any, lang: string) => {
    const isSpanish = lang === 'es';
    
    return `
<!DOCTYPE html>
<html lang="${lang}">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${data.personal.name} - ${data.personal.title}</title>
    <style>
        * { margin: 0; padding: 0; box-sizing: border-box; }
        body { 
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; 
            line-height: 1.6; 
            color: #333; 
            background: #fff;
            font-size: 14px;
        }
        .container { max-width: 800px; margin: 0 auto; padding: 20px; }
        .header { text-align: center; border-bottom: 3px solid #0ea5e9; padding-bottom: 20px; margin-bottom: 30px; }
        .header h1 { font-size: 28px; color: #0ea5e9; margin-bottom: 5px; }
        .header h2 { font-size: 18px; color: #64748b; margin-bottom: 15px; }
        .contact-info { display: flex; flex-wrap: wrap; justify-content: center; gap: 15px; }
        .contact-info span { font-size: 12px; color: #64748b; }
        .section { margin-bottom: 25px; }
        .section h3 { 
            font-size: 18px; 
            color: #0ea5e9; 
            border-bottom: 2px solid #e2e8f0; 
            padding-bottom: 5px; 
            margin-bottom: 15px;
        }
        .experience-item { margin-bottom: 20px; }
        .experience-item h4 { font-size: 16px; color: #1e293b; margin-bottom: 3px; }
        .experience-item .company { font-weight: bold; color: #0ea5e9; }
        .experience-item .period { color: #64748b; font-size: 12px; margin-bottom: 10px; }
        .experience-item ul { margin-left: 20px; }
        .experience-item li { margin-bottom: 5px; font-size: 13px; }
        .skills-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 15px; }
        .skill-category h4 { color: #1e293b; margin-bottom: 8px; }
        .skill-tags { display: flex; flex-wrap: wrap; gap: 5px; }
        .skill-tag { 
            background: #e0f2fe; 
            color: #0369a1; 
            padding: 3px 8px; 
            border-radius: 4px; 
            font-size: 11px;
        }
        @media print {
            body { font-size: 12px; }
            .container { padding: 10px; }
            .section { margin-bottom: 15px; }
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <h1>${data.personal.name}</h1>
            <h2>${data.personal.title}</h2>
            <div class="contact-info">
                <span>📧 ${data.personal.email}</span>
                <span>📱 ${data.personal.phone}</span>
                <span>📍 ${data.personal.location}</span>
                <span>🌐 ${data.personal.website}</span>
                <span>💼 GitHub: ${data.personal.github}</span>
                <span>🔗 LinkedIn: ${data.personal.linkedin}</span>
            </div>
        </div>

        <div class="section">
            <h3>${isSpanish ? 'Resumen Profesional' : 'Professional Summary'}</h3>
            <p>${data.summary}</p>
        </div>

        <div class="section">
            <h3>${isSpanish ? 'Experiencia Profesional' : 'Professional Experience'}</h3>
            ${data.experience.map((exp: any) => `
                <div class="experience-item">
                    <h4>${exp.title} <span class="company">@ ${exp.company}</span></h4>
                    <div class="period">${exp.period}</div>
                    <ul>
                        ${exp.achievements.map((achievement: string) => `<li>${achievement}</li>`).join('')}
                    </ul>
                </div>
            `).join('')}
        </div>

        <div class="section">
            <h3>${isSpanish ? 'Habilidades Técnicas' : 'Technical Skills'}</h3>
            <div class="skills-grid">
                <div class="skill-category">
                    <h4>Backend</h4>
                    <div class="skill-tags">
                        ${data.skills.backend.map((skill: string) => `<span class="skill-tag">${skill}</span>`).join('')}
                    </div>
                </div>
                <div class="skill-category">
                    <h4>Frontend</h4>
                    <div class="skill-tags">
                        ${data.skills.frontend.map((skill: string) => `<span class="skill-tag">${skill}</span>`).join('')}
                    </div>
                </div>
                <div class="skill-category">
                    <h4>${isSpanish ? 'Móvil' : 'Mobile'}</h4>
                    <div class="skill-tags">
                        ${data.skills.mobile.map((skill: string) => `<span class="skill-tag">${skill}</span>`).join('')}
                    </div>
                </div>
                <div class="skill-category">
                    <h4>${isSpanish ? 'Base de Datos' : 'Database'}</h4>
                    <div class="skill-tags">
                        ${data.skills.database.map((skill: string) => `<span class="skill-tag">${skill}</span>`).join('')}
                    </div>
                </div>
                <div class="skill-category">
                    <h4>Cloud & DevOps</h4>
                    <div class="skill-tags">
                        ${data.skills.cloud.map((skill: string) => `<span class="skill-tag">${skill}</span>`).join('')}
                    </div>
                </div>
                <div class="skill-category">
                    <h4>${isSpanish ? 'Herramientas' : 'Tools'}</h4>
                    <div class="skill-tags">
                        ${data.skills.tools.map((skill: string) => `<span class="skill-tag">${skill}</span>`).join('')}
                    </div>
                </div>
            </div>
        </div>
    </div>
</body>
</html>`;
  };

  const downloadResume = (htmlContent: string, lang: string) => {
    const blob = new Blob([htmlContent], { type: 'text/html' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    const fileName = lang === 'es' 
      ? 'Jasson_Gomez_CV_ES.html' 
      : 'Jasson_Gomez_Resume_EN.html';
    
    link.href = url;
    link.download = fileName;
    link.click();
    URL.revokeObjectURL(url);
  };

  return { generateResume };
};