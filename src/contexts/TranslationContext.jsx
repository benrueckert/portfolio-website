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
        consent: 'I agree to the processing of my personal data according to the',
        consentSuffix: '. *',
        privacyPolicy: 'Privacy Policy',
        success: {
          title: 'Message sent successfully!',
          text: "Thank you for reaching out. I'll get back to you within 24 hours."
        }
      },
      responseTime: 'Response time: Usually within 24 hours'
    },
    // Footer
    footer: {
      allRightsReserved: 'All rights reserved',
      impressum: 'Impressum',
      privacy: 'Privacy Policy'
    },
    // Legal Pages
    legal: {
      backToHome: 'Back to Home',
      impressum: {
        title: 'Impressum',
        contact: 'Contact Information',
        profession: 'Frontend Developer',
        email: 'Email',
        responsibility: 'Responsible for Content',
        responsibilityText: 'Ben Rückert is responsible for the content of this website according to § 7, para. 1 of the TMG (Telemediengesetz - Telemedia Act).',
        disclaimer: 'Disclaimer',
        disclaimerText: 'Despite careful control of the content, we assume no liability for the content of external links. The operators of linked pages are solely responsible for their content.'
      },
      privacy: {
        title: 'Privacy Policy',
        overview: 'Overview',
        overviewText: 'This privacy policy explains what personal data we collect when you use this website and how we use it.',
        dataController: 'Data Controller',
        email: 'Email',
        contactForm: 'Contact Form',
        contactFormText: 'When you use our contact form, we collect your name, email address, and message. This data is used solely to process your inquiry and respond to you.',
        legalBasis: 'Legal Basis',
        legalBasisText: 'Art. 6(1)(a) GDPR - Consent for contact form processing.',
        cookies: 'Cookies and Tracking',
        cookiesText: 'This website uses third-party services that may set cookies for analytics and functionality purposes.',
        formspree: 'Third-Party Service: Formspree',
        formspreeText: 'Our contact form uses Formspree (US company) to process form submissions. Formspree may set analytics cookies (Google Analytics, Amplitude, PostHog) when you visit pages containing the form. Your form data is transmitted to Formspree servers and then forwarded to our email.',
        formspreePolicy: 'Formspree Privacy Policy',
        hosting: 'Hosting: Vercel',
        hostingText: 'This website is hosted on Vercel (US company). Vercel may set technical and performance cookies for hosting functionality. Server logs may temporarily store your IP address.',
        vercelPolicy: 'Vercel Privacy Policy',
        localStorage: 'Local Storage',
        localStorageText: 'We use browser localStorage to save your theme and language preferences. This data remains on your device and is not transmitted to us.',
        rights: 'Your Rights',
        rightsText: 'You have the right to access, correct, delete, or port your personal data. Contact us at hi@benrueckert.com to exercise these rights.',
        externalLinks: 'External Links',
        externalLinksText: 'Our website contains links to LinkedIn and GitHub. These external sites have their own privacy policies and we are not responsible for their content or data practices.'
      }
    },
    // Cookie Consent
    cookies: {
      message: 'We use cookies to enhance your experience and analyze usage through third-party services.',
      privacyPolicy: 'Privacy Policy',
      acceptAll: 'Accept All',
      decline: 'Decline'
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
        consent: 'Ich stimme der Verarbeitung meiner personenbezogenen Daten gemäß der',
        consentSuffix: ' zu. *',
        privacyPolicy: 'Datenschutzerklärung',
        success: {
          title: 'Nachricht erfolgreich gesendet!',
          text: 'Vielen Dank für Ihre Nachricht. Ich melde mich innerhalb von 24 Stunden bei Ihnen.'
        }
      },
      responseTime: 'Antwortzeit: Normalerweise innerhalb von 24 Stunden'
    },
    // Footer
    footer: {
      allRightsReserved: 'Alle Rechte vorbehalten',
      impressum: 'Impressum',
      privacy: 'Datenschutz'
    },
    // Legal Pages
    legal: {
      backToHome: 'Zurück zur Startseite',
      impressum: {
        title: 'Impressum',
        contact: 'Kontaktinformationen',
        profession: 'Frontend-Entwickler',
        email: 'E-Mail',
        responsibility: 'Verantwortlich für den Inhalt',
        responsibilityText: 'Ben Rückert ist verantwortlich für den Inhalt dieser Website gemäß § 7 Abs. 1 TMG (Telemediengesetz).',
        disclaimer: 'Haftungsausschluss',
        disclaimerText: 'Trotz sorgfältiger inhaltlicher Kontrolle übernehmen wir keine Haftung für die Inhalte externer Links. Für den Inhalt der verlinkten Seiten sind ausschließlich deren Betreiber verantwortlich.'
      },
      privacy: {
        title: 'Datenschutzerklärung',
        overview: 'Überblick',
        overviewText: 'Diese Datenschutzerklärung erklärt, welche personenbezogenen Daten wir bei der Nutzung dieser Website erheben und wie wir sie verwenden.',
        dataController: 'Verantwortlicher',
        email: 'E-Mail',
        contactForm: 'Kontaktformular',
        contactFormText: 'Wenn Sie unser Kontaktformular verwenden, erheben wir Ihren Namen, Ihre E-Mail-Adresse und Ihre Nachricht. Diese Daten werden ausschließlich zur Bearbeitung Ihrer Anfrage und zur Antwort verwendet.',
        legalBasis: 'Rechtsgrundlage',
        legalBasisText: 'Art. 6 Abs. 1 lit. a DSGVO - Einwilligung zur Kontaktformular-Verarbeitung.',
        cookies: 'Cookies und Tracking',
        cookiesText: 'Diese Website verwendet Drittanbieter-Services, die Cookies für Analyse- und Funktionszwecke setzen können.',
        formspree: 'Drittanbieter-Service: Formspree',
        formspreeText: 'Unser Kontaktformular nutzt Formspree (US-Unternehmen) zur Verarbeitung von Formularübermittlungen. Formspree kann Analyse-Cookies (Google Analytics, Amplitude, PostHog) setzen, wenn Sie Seiten mit dem Formular besuchen. Ihre Formulardaten werden an Formspree-Server übertragen und dann an unsere E-Mail weitergeleitet.',
        formspreePolicy: 'Formspree Datenschutzerklärung',
        hosting: 'Hosting: Vercel',
        hostingText: 'Diese Website wird auf Vercel (US-Unternehmen) gehostet. Vercel kann technische und Performance-Cookies für Hosting-Funktionen setzen. Server-Logs können Ihre IP-Adresse temporär speichern.',
        vercelPolicy: 'Vercel Datenschutzerklärung',
        localStorage: 'Local Storage',
        localStorageText: 'Wir verwenden Browser-localStorage, um Ihre Theme- und Spracheinstellungen zu speichern. Diese Daten verbleiben auf Ihrem Gerät und werden nicht an uns übertragen.',
        rights: 'Ihre Rechte',
        rightsText: 'Sie haben das Recht auf Auskunft, Berichtigung, Löschung oder Übertragung Ihrer personenbezogenen Daten. Kontaktieren Sie uns unter hi@benrueckert.com, um diese Rechte auszuüben.',
        externalLinks: 'Externe Links',
        externalLinksText: 'Unsere Website enthält Links zu LinkedIn und GitHub. Diese externen Seiten haben ihre eigenen Datenschutzerklärungen und wir sind nicht für deren Inhalt oder Datenpraktiken verantwortlich.'
      }
    },
    // Cookie Consent
    cookies: {
      message: 'Wir verwenden Cookies, um Ihre Erfahrung zu verbessern und die Nutzung über Drittanbieter-Services zu analysieren.',
      privacyPolicy: 'Datenschutzerklärung',
      acceptAll: 'Alle akzeptieren',
      decline: 'Ablehnen'
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