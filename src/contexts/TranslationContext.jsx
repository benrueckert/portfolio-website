import { createContext, useContext, useState, useEffect } from 'react';

const translations = {
  en: {
    // Navigation
    nav: {
      home: 'Home',
      projects: 'Projects',
      about: 'About',
      contact: 'Contact'
    },
    // Hero Section
    hero: {
      availability: 'Available for new opportunities',
      name: 'Ben Rückert',
      title: 'Frontend Developer',
      description: 'I build modern web applications with React, Tailwind, and TypeScript. From client projects to creative side projects.',
      viewProjects: 'View Projects',
      contactMe: 'Contact Me',
      scrollHint: 'Scroll to explore'
    },
    // Projects Section
    projects: {
      title: 'Projects',
      subtitle: 'Personal projects and client work',
      personal: 'Personal Projects',
      client: 'Client Projects',
      clientSubtitle: 'WordPress websites for clients',
      status: {
        featured: 'Featured',
        live: 'Live',
        dev: 'In Development'
      },
      links: {
        demo: 'Demo',
        github: 'GitHub',
        caseStudy: 'Case Study',
        visit: 'Visit'
      },
      cta: {
        text: 'Looking for a reliable developer for your next project?',
        button: 'Start Your Project'
      },
      personalProjects: [
        {
          title: "Smart Recipe Finder",
          description: "Enter ingredients → discover fitting recipes. Focus on usability and smooth experience.",
          tech: "React, Tailwind, API integration"
        },
        {
          title: "Koda (Flashcard App)",
          description: "Learning app for digital flashcards. Built for simplicity and fast learning.",
          tech: "React, Node.js"
        },
        {
          title: "Giftio",
          description: "Marketing landing page + iOS app (AI-assisted gift finder).",
          tech: "Web, Mobile, AI integration"
        }
      ],
      clientProjects: [
        {
          name: "KommStEG mbH",
          description: "Corporate website"
        },
        {
          name: "Car-ProfEx",
          description: "Auto service website"
        },
        {
          name: "Villa Wirklich",
          description: "Co-working space website"
        },
        {
          name: "Selbmann Elektroanlagenbau",
          description: "Company website"
        },
        {
          name: "Phönix Moden Döbeln",
          description: "Fashion retail website"
        }
      ]
    },
    // About Section
    about: {
      title: 'About',
      intro: "Hi, I'm Ben Rückert - a frontend developer focused on React and modern web technologies.",
      experience: "I have worked as a freelance web developer, creating real websites for clients. At the same time, I build my own side projects to push my skills and bring creative ideas to life.",
      philosophy: "My focus is on clean code, intuitive user experience, and engaging interfaces. I believe in building fast, accessible, and user-friendly applications.",
      techStack: 'Tech Stack',
      currentlyLearning: 'Currently learning:',
      typescript: 'TypeScript'
    },
    // Contact Section
    contact: {
      title: 'Contact',
      subtitle: "Let's discuss your next project",
      availability: 'Available for new projects',
      email: 'Email',
      linkedin: 'LinkedIn',
      github: 'GitHub',
      connect: 'Connect',
      follow: 'Follow',
      sendMessage: 'Send a Message',
      form: {
        name: 'Name',
        namePlaceholder: 'Your name',
        email: 'Email',
        emailPlaceholder: 'your@email.com',
        message: 'Message',
        messagePlaceholder: 'Tell me about your project...',
        send: 'Send Message',
        sending: 'Sending...',
        success: {
          title: 'Message sent successfully!',
          text: "Thank you for reaching out. I'll get back to you within 24 hours."
        }
      },
      responseTime: 'Response time: Usually within 24 hours'
    }
  },
  de: {
    // Navigation
    nav: {
      home: 'Start',
      projects: 'Projekte',
      about: 'Über mich',
      contact: 'Kontakt'
    },
    // Hero Section
    hero: {
      availability: 'Verfügbar für neue Projekte',
      name: 'Ben Rückert',
      title: 'Frontend Entwickler',
      description: 'Ich entwickle moderne Webanwendungen mit React, Tailwind und TypeScript. Von Kundenprojekten bis zu kreativen Side-Projekten.',
      viewProjects: 'Projekte ansehen',
      contactMe: 'Kontakt aufnehmen',
      scrollHint: 'Scrollen zum Erkunden'
    },
    // Projects Section
    projects: {
      title: 'Projekte',
      subtitle: 'Persönliche Projekte und Kundenarbeiten',
      personal: 'Persönliche Projekte',
      client: 'Kundenprojekte',
      clientSubtitle: 'WordPress-Websites für Kunden',
      status: {
        featured: 'Empfohlen',
        live: 'Live',
        dev: 'In Entwicklung'
      },
      links: {
        demo: 'Demo',
        github: 'GitHub',
        caseStudy: 'Fallstudie',
        visit: 'Besuchen'
      },
      cta: {
        text: 'Suchen Sie einen zuverlässigen Entwickler für Ihr nächstes Projekt?',
        button: 'Projekt starten'
      },
      personalProjects: [
        {
          title: "Smart Recipe Finder",
          description: "Zutaten eingeben → passende Rezepte entdecken. Fokus auf Benutzerfreundlichkeit und flüssige Erfahrung.",
          tech: "React, Tailwind, API-Integration"
        },
        {
          title: "Koda (Karteikarten-App)",
          description: "Lern-App für digitale Karteikarten. Entwickelt für Einfachheit und schnelles Lernen.",
          tech: "React, Node.js"
        },
        {
          title: "Giftio",
          description: "Marketing-Landingpage + iOS-App (KI-unterstützter Geschenkfinder).",
          tech: "Web, Mobile, KI-Integration"
        }
      ],
      clientProjects: [
        {
          name: "KommStEG mbH",
          description: "Unternehmenswebsite"
        },
        {
          name: "Car-ProfEx",
          description: "Auto-Service-Website"
        },
        {
          name: "Villa Wirklich",
          description: "Co-Working-Space-Website"
        },
        {
          name: "Selbmann Elektroanlagenbau",
          description: "Unternehmenswebsite"
        },
        {
          name: "Phönix Moden Döbeln",
          description: "Mode-Einzelhandel-Website"
        }
      ]
    },
    // About Section
    about: {
      title: 'Über mich',
      intro: "Hallo, ich bin Ben Rückert - ein Frontend-Entwickler mit Fokus auf React und moderne Web-Technologien.",
      experience: "Ich arbeite als freiberuflicher Web-Entwickler und erstelle echte Websites für Kunden. Gleichzeitig entwickle ich eigene Side-Projekte, um meine Fähigkeiten zu erweitern und kreative Ideen zum Leben zu erwecken.",
      philosophy: "Mein Fokus liegt auf sauberem Code, intuitiver Benutzererfahrung und ansprechenden Benutzeroberflächen. Ich glaube daran, schnelle, barrierefreie und benutzerfreundliche Anwendungen zu entwickeln.",
      techStack: 'Tech Stack',
      currentlyLearning: 'Derzeit lerne ich:',
      typescript: 'TypeScript'
    },
    // Contact Section
    contact: {
      title: 'Kontakt',
      subtitle: 'Lassen Sie uns über Ihr nächstes Projekt sprechen',
      availability: 'Verfügbar für neue Projekte',
      email: 'E-Mail',
      linkedin: 'LinkedIn',
      github: 'GitHub',
      connect: 'Vernetzen',
      follow: 'Folgen',
      sendMessage: 'Nachricht senden',
      form: {
        name: 'Name',
        namePlaceholder: 'Ihr Name',
        email: 'E-Mail',
        emailPlaceholder: 'ihre@email.de',
        message: 'Nachricht',
        messagePlaceholder: 'Erzählen Sie mir von Ihrem Projekt...',
        send: 'Nachricht senden',
        sending: 'Wird gesendet...',
        success: {
          title: 'Nachricht erfolgreich gesendet!',
          text: 'Vielen Dank für Ihre Nachricht. Ich melde mich innerhalb von 24 Stunden bei Ihnen.'
        }
      },
      responseTime: 'Antwortzeit: Normalerweise innerhalb von 24 Stunden'
    }
  }
};

const TranslationContext = createContext();

export const useTranslation = () => {
  const context = useContext(TranslationContext);
  if (!context) {
    throw new Error('useTranslation must be used within a TranslationProvider');
  }
  return context;
};

export const TranslationProvider = ({ children }) => {
  const [language, setLanguage] = useState(() => {
    // Initialize from localStorage or default to 'en'
    const savedLanguage = localStorage.getItem('portfolio-language');
    return savedLanguage || 'en';
  });

  useEffect(() => {
    // Save to localStorage whenever language changes
    localStorage.setItem('portfolio-language', language);
  }, [language]);

  const toggleLanguage = () => {
    setLanguage(prev => prev === 'en' ? 'de' : 'en');
  };

  const t = (key) => {
    const keys = key.split('.');
    let value = translations[language];
    
    for (const k of keys) {
      value = value?.[k];
      if (value === undefined) {
        console.warn(`Translation key "${key}" not found for language "${language}"`);
        return key;
      }
    }
    
    return value;
  };

  const value = {
    language,
    setLanguage,
    toggleLanguage,
    t,
    translations: translations[language]
  };

  return (
    <TranslationContext.Provider value={value}>
      {children}
    </TranslationContext.Provider>
  );
};