/**
 * Resume Generator Hook
 * Generates a PDF resume from portfolio content dynamically
 * Pulls data from translations to ensure consistency with portfolio content
 */

import { useTranslation } from 'react-i18next';
import jsPDF from 'jspdf';

export const useResumeGenerator = () => {
  const { t, i18n } = useTranslation();

  const generateResume = async () => {
    try {
      // Create new PDF document
      const pdf = new jsPDF({
        orientation: 'portrait',
        unit: 'mm',
        format: 'a4'
      });

    // Set document properties
    pdf.setProperties({
      title: 'Jasson Gómez - CV',
      subject: 'Professional Resume',
      author: 'Jasson Gómez',
      keywords: 'resume, cv, developer, fullstack',
      creator: 'TJson Portfolio'
    });

    // Define colors
    const primaryColor = [14, 165, 233]; // Sky-500
    const textColor = [31, 41, 55]; // Gray-800
    const lightTextColor = [107, 114, 128]; // Gray-500

    // Set initial position
    let yPosition = 20;

    // Helper function to add text with formatting
    const addText = (text: string, x: number, y: number, options: any = {}) => {
      const { fontSize = 10, fontStyle = 'normal', color = textColor } = options;
      pdf.setFontSize(fontSize);
      pdf.setFont('helvetica', fontStyle);
      pdf.setTextColor(...color);
      pdf.text(text, x, y);
    };

    // Helper function to add section title
    const addSectionTitle = (title: string) => {
      yPosition += 10;
      addText(title, 20, yPosition, {
        fontSize: 14,
        fontStyle: 'bold',
        color: primaryColor
      });
      // Add underline
      pdf.setDrawColor(...primaryColor);
      pdf.setLineWidth(0.5);
      pdf.line(20, yPosition + 1, 190, yPosition + 1);
      yPosition += 8;
    };

    // Helper function to check and add new page if needed
    const checkPageBreak = (requiredSpace: number = 30) => {
      if (yPosition + requiredSpace > 270) {
        pdf.addPage();
        yPosition = 20;
      }
    };

    // Try to add profile image
    try {
      const img = new Image();
      img.crossOrigin = 'anonymous';

      await new Promise((resolve, reject) => {
        img.onload = () => {
          try {
            // Create canvas to convert image to base64
            const canvas = document.createElement('canvas');
            const ctx = canvas.getContext('2d');

            // Set canvas size for profile photo
            const size = 40; // mm
            canvas.width = size * 4; // Higher resolution
            canvas.height = size * 4;

            // Draw circular clipped image
            ctx.beginPath();
            ctx.arc(canvas.width / 2, canvas.height / 2, canvas.width / 2, 0, 2 * Math.PI);
            ctx.clip();
            ctx.drawImage(img, 0, 0, canvas.width, canvas.height);

            const imageData = canvas.toDataURL('image/jpeg', 0.8);

            // Add circular profile image to PDF (top right)
            pdf.addImage(imageData, 'JPEG', 160, 15, size, size);

            resolve(true);
          } catch (error) {
            console.warn('Could not process profile image:', error);
            resolve(false);
          }
        };

        img.onerror = () => {
          console.warn('Could not load profile image');
          resolve(false);
        };

        // Try to load the profile image
        img.src = '/images/profile.jpg';
      });
    } catch (error) {
      console.warn('Profile image not available for PDF');
    }

    // Header Section
    addText('Jasson Gómez', 20, yPosition, {
      fontSize: 24,
      fontStyle: 'bold'
    });
    yPosition += 8;

    addText(t('hero.title'), 20, yPosition, {
      fontSize: 14,
      color: primaryColor
    });
    yPosition += 6;

    addText(t('hero.subtitle'), 20, yPosition, {
      fontSize: 11,
      color: lightTextColor
    });
    yPosition += 10;

    // Contact Information - Using correct data from Contact component
    addText('gomezjason010@gmail.com', 20, yPosition, {
      fontSize: 10,
      color: lightTextColor
    });
    yPosition += 5;

    addText('WhatsApp: +503 7502 5302 | El Salvador | ' + t('hero.remote'), 20, yPosition, {
      fontSize: 10,
      color: lightTextColor
    });
    yPosition += 5;

    addText('Portfolio: https://tjson.net', 20, yPosition, {
      fontSize: 10,
      color: lightTextColor
    });
    yPosition += 5;

    addText('GitHub: github.com/jason7337 | LinkedIn: linkedin.com/in/jasson-gomez-211777209', 20, yPosition, {
      fontSize: 10,
      color: lightTextColor
    });
    yPosition += 5;

    // Professional Summary
    addSectionTitle(t('about.title'));
    const bio1 = t('about.bio1');
    const bio1Lines = pdf.splitTextToSize(bio1, 170);
    bio1Lines.forEach((line: string) => {
      addText(line, 20, yPosition, { fontSize: 10 });
      yPosition += 5;
    });

    // Add key achievement from bio3
    const bio3 = t('about.bio3');
    const bio3Lines = pdf.splitTextToSize(bio3, 170);
    bio3Lines.forEach((line: string) => {
      addText(line, 20, yPosition, { fontSize: 10 });
      yPosition += 5;
    });

    // Experience Section
    checkPageBreak();
    addSectionTitle(t('experience.title'));

    // SpeedyGoApp Experience
    addText(t('experience.speedygo.title') + ' - ' + t('experience.speedygo.company'), 20, yPosition, {
      fontSize: 11,
      fontStyle: 'bold'
    });
    yPosition += 5;

    addText(t('experience.speedygo.period'), 20, yPosition, {
      fontSize: 9,
      color: lightTextColor
    });
    yPosition += 5;

    const speedygoDesc = t('experience.speedygo.description');
    const speedygoLines = pdf.splitTextToSize(speedygoDesc, 170);
    speedygoLines.forEach((line: string) => {
      addText(line, 20, yPosition, { fontSize: 10 });
      yPosition += 5;
    });

    // Add achievements
    const achievements = [
      t('experience.speedygo.achievements.0'),
      t('experience.speedygo.achievements.1'),
      t('experience.speedygo.achievements.2'),
      t('experience.speedygo.achievements.3')
    ];

    achievements.forEach((achievement) => {
      addText('• ' + achievement, 25, yPosition, { fontSize: 9 });
      yPosition += 5;
    });

    yPosition += 5;

    // Freelance Experience
    checkPageBreak();
    addText(t('experience.freelance.title') + ' - ' + t('experience.freelance.company'), 20, yPosition, {
      fontSize: 11,
      fontStyle: 'bold'
    });
    yPosition += 5;

    addText(t('experience.freelance.period'), 20, yPosition, {
      fontSize: 9,
      color: lightTextColor
    });
    yPosition += 5;

    const freelanceDesc = t('experience.freelance.description');
    const freelanceLines = pdf.splitTextToSize(freelanceDesc, 170);
    freelanceLines.forEach((line: string) => {
      addText(line, 20, yPosition, { fontSize: 10 });
      yPosition += 5;
    });

    // Add freelance achievements
    const freelanceAchievements = [
      t('experience.freelance.achievements.0'),
      t('experience.freelance.achievements.1'),
      t('experience.freelance.achievements.2'),
      t('experience.freelance.achievements.3')
    ];

    freelanceAchievements.forEach((achievement) => {
      addText('• ' + achievement, 25, yPosition, { fontSize: 9 });
      yPosition += 5;
    });

    // Technical Skills Section
    checkPageBreak();
    addSectionTitle(t('skills.title'));

    const skillCategories = [
      {
        title: t('skills.frontend'),
        skills: 'TypeScript (ES6+, Type Safety), React (Hooks, Context, Redux), Angular (RxJS, Forms, Services), Tailwind CSS (Responsive Design, CSS3), Vite (Build Tool, HMR)'
      },
      {
        title: t('skills.backend'),
        skills: 'Node.js (TypeScript, Async/Await), Express (REST APIs, Middleware), AdonisJS (ORM, Authentication), Python (Flask, FastAPI), C# (.NET, ASP.NET), Java (Spring, Maven)'
      },
      {
        title: t('skills.mobile'),
        skills: 'Flutter (Dart, Material Design), React Native (Expo, Native Modules), Java/Kotlin (Android SDK, Native Apps), Google Maps API'
      },
      {
        title: t('skills.database'),
        skills: 'Firebase (Firestore, Realtime DB, Auth), PostgreSQL (SQL, Queries), MySQL (SQL, Optimization), MongoDB'
      },
      {
        title: t('skills.cloud'),
        skills: 'Firebase (Hosting, Functions, Analytics), Docker (Containers, Compose), Google Cloud (Cloud Run, Storage), CI/CD (GitHub Actions)'
      },
      {
        title: t('skills.tools'),
        skills: 'Git (GitHub, Version Control), Jira (Project Management, Agile), Trello (Task Management, Kanban), Scrum (Agile Methodologies, Sprints), VS Code (Extensions, Debugging)'
      }
    ];

    skillCategories.forEach((category) => {
      checkPageBreak(15);

      addText(category.title + ':', 20, yPosition, {
        fontSize: 10,
        fontStyle: 'bold'
      });
      yPosition += 5;

      const skillLines = pdf.splitTextToSize(category.skills, 170);
      skillLines.forEach((line: string) => {
        addText(line, 25, yPosition, { fontSize: 9 });
        yPosition += 4;
      });
      yPosition += 2;
    });

    // Key Projects
    checkPageBreak();
    addSectionTitle(t('projects.title'));

    // SpeedyGoApp Project
    addText('SpeedyGoApp', 20, yPosition, {
      fontSize: 11,
      fontStyle: 'bold'
    });
    yPosition += 5;

    const speedygoProjectDesc = t('projects.speedygo.description');
    const projectLines = pdf.splitTextToSize(speedygoProjectDesc, 170);
    projectLines.forEach((line: string) => {
      addText(line, 20, yPosition, { fontSize: 9 });
      yPosition += 4;
    });
    yPosition += 2;

    addText(t('projects.technologies') + ': Flutter, Dart, Firebase, Google Maps API, Payment Gateway Integration', 20, yPosition, {
      fontSize: 9,
      color: lightTextColor
    });
    yPosition += 5;

    addText('Website: speedygoapp.com | Play Store: Available', 20, yPosition, {
      fontSize: 9,
      color: lightTextColor
    });
    yPosition += 8;

    // LogSense AI Project
    addText('LogSense AI', 20, yPosition, {
      fontSize: 11,
      fontStyle: 'bold'
    });
    yPosition += 5;

    const logsenseDesc = t('projects.logsense.description');
    const logsenseLines = pdf.splitTextToSize(logsenseDesc, 170);
    logsenseLines.forEach((line: string) => {
      addText(line, 20, yPosition, { fontSize: 9 });
      yPosition += 4;
    });
    yPosition += 2;

    addText(t('projects.technologies') + ': Python, FastAPI, scikit-learn, Docker, Google Cloud Run', 20, yPosition, {
      fontSize: 9,
      color: lightTextColor
    });
    yPosition += 5;

    addText('Website: logsense-ai.tjson.net', 20, yPosition, {
      fontSize: 9,
      color: lightTextColor
    });
    yPosition += 8;

    // Calculadora de Interés Compuesto Project
    checkPageBreak(30);
    addText(i18n.language === 'en' ? 'Compound Interest Calculator' : 'Calculadora de Interés Compuesto', 20, yPosition, {
      fontSize: 11,
      fontStyle: 'bold'
    });
    yPosition += 5;

    const calculatorDesc = t('projects.calculator.description');
    const calculatorLines = pdf.splitTextToSize(calculatorDesc, 170);
    calculatorLines.forEach((line: string) => {
      addText(line, 20, yPosition, { fontSize: 9 });
      yPosition += 4;
    });
    yPosition += 2;

    addText(t('projects.technologies') + ': Java 21, Spring Boot 3.5.7, Thymeleaf, Docker, Cloud Run', 20, yPosition, {
      fontSize: 9,
      color: lightTextColor
    });
    yPosition += 5;

    addText('Website: calculadora-interes-compuesto.tjson.net', 20, yPosition, {
      fontSize: 9,
      color: lightTextColor
    });
    yPosition += 8;

    // Portfolio Project
    addText('Professional Portfolio', 20, yPosition, {
      fontSize: 11,
      fontStyle: 'bold'
    });
    yPosition += 5;

    const portfolioDesc = t('projects.portfolio.description');
    const portfolioLines = pdf.splitTextToSize(portfolioDesc, 170);
    portfolioLines.forEach((line: string) => {
      addText(line, 20, yPosition, { fontSize: 9 });
      yPosition += 4;
    });
    yPosition += 2;

    addText(t('projects.technologies') + ': React, TypeScript, TailwindCSS, Framer Motion, i18n', 20, yPosition, {
      fontSize: 9,
      color: lightTextColor
    });

    // Languages Section
    checkPageBreak(20);
    yPosition += 10;
    addSectionTitle(i18n.language === 'en' ? 'Languages' : 'Idiomas');
    addText(i18n.language === 'en' ? '• Spanish (Native)' : '• Español (Nativo)', 20, yPosition, { fontSize: 10 });
    yPosition += 5;
    addText(i18n.language === 'en' ? '• English (Professional Working Proficiency)' : '• Inglés (Competencia Profesional)', 20, yPosition, { fontSize: 10 });

    // Education Section
    yPosition += 10;
    addSectionTitle(i18n.language === 'en' ? 'Education' : 'Educación');
    addText(i18n.language === 'en'
      ? 'Computer Systems Engineering (In Progress)'
      : 'Ingeniería de Sistemas Informáticos (En Progreso)',
      20, yPosition, { fontSize: 10, fontStyle: 'bold' });
    yPosition += 5;
    addText(i18n.language === 'en'
      ? 'Universidad de El Salvador'
      : 'Universidad de El Salvador',
      20, yPosition, { fontSize: 10 });

    // Footer
    pdf.setFontSize(8);
    pdf.setTextColor(...lightTextColor);
    const currentDate = new Date().toLocaleDateString(i18n.language === 'en' ? 'en-US' : 'es-ES', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
    const footerText = i18n.language === 'en'
      ? `Generated from portfolio website • ${currentDate}`
      : `Generado desde el sitio web del portafolio • ${currentDate}`;
    pdf.text(footerText, 105, 285, { align: 'center' });

      // Save the PDF
      const filename = `Jasson_Gomez_CV_${i18n.language.toUpperCase()}_${new Date().getFullYear()}.pdf`;
      pdf.save(filename);

    } catch (error) {
      console.error('Error generating PDF:', error);
      alert(i18n.language === 'en'
        ? 'Error generating PDF. Please try again.'
        : 'Error al generar el PDF. Por favor intenta de nuevo.');
    }
  };

  return { generateResume };
};