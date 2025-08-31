import { useState, useEffect } from 'react';
import { TranslationProvider, useTranslation } from './contexts/TranslationContext';
import { ThemeProvider, useTheme } from './contexts/ThemeContext';
import { Sun, Moon, List, X } from 'phosphor-react';
import Hero from './components/Hero';
import Projects from './components/Projects';
import About from './components/About';
import Contact from './components/Contact';

function NavigationContent() {
  const { t, language, toggleLanguage } = useTranslation();
  const { toggleTheme, isDark } = useTheme();
  const [scrollProgress, setScrollProgress] = useState(0);
  const [showNavigation, setShowNavigation] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const documentHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (scrollTop / documentHeight) * 100;
      
      setScrollProgress(progress);
      setShowNavigation(scrollTop > 100);

      // Close mobile menu on scroll
      if (isMobileMenuOpen) {
        setIsMobileMenuOpen(false);
      }

      // Determine active section
      const sections = ['hero', 'projects', 'about', 'contact'];
      for (const section of sections) {
        const element = document.getElementById(section) || document.querySelector(`section`);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    const handleResize = () => {
      const mobile = window.innerWidth < 768;
      setIsMobile(mobile);
      if (!mobile && isMobileMenuOpen) {
        setIsMobileMenuOpen(false);
      }
    };

    // Initial check
    handleResize();

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleResize, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, [isMobileMenuOpen]);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      // Close mobile menu after navigation
      setIsMobileMenuOpen(false);
    }
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // Handle escape key to close mobile menu
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape' && isMobileMenuOpen) {
        setIsMobileMenuOpen(false);
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [isMobileMenuOpen]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  const navigationItems = [
    { id: 'hero', label: t('nav.home') },
    { id: 'projects', label: t('nav.projects') },
    { id: 'about', label: t('nav.about') },
    { id: 'contact', label: t('nav.contact') }
  ];

  return (
    <div className="min-h-screen">
      {/* Reading Progress Bar */}
      <div 
        className="progress-bar" 
        style={{ width: `${scrollProgress}%` }}
      />

      {/* Desktop Navigation Links */}
      {!isMobile && (
        <nav className={`left-navigation ${showNavigation ? 'visible' : ''}`}>
          <div className="left-nav-content">
            {navigationItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`nav-link ${activeSection === item.id ? 'active' : ''}`}
              >
                {item.label}
              </button>
            ))}
          </div>
        </nav>
      )}

      {/* Mobile Navigation */}
      {isMobile && (
        <>
          <button 
            className={`mobile-menu-trigger ${showNavigation ? 'visible' : ''}`}
            onClick={toggleMobileMenu}
            aria-label="Toggle navigation menu"
            aria-expanded={isMobileMenuOpen}
          >
            {isMobileMenuOpen ? <X size={20} weight="regular" /> : <List size={20} weight="regular" />}
          </button>

          {/* Mobile Menu Overlay */}
          {isMobileMenuOpen && (
            <div className="mobile-menu-overlay" onClick={() => setIsMobileMenuOpen(false)}>
              <nav className="mobile-menu" onClick={(e) => e.stopPropagation()}>
                <div className="mobile-menu-content">
                  {navigationItems.map((item, index) => (
                    <button
                      key={item.id}
                      onClick={() => scrollToSection(item.id)}
                      className={`mobile-nav-link ${activeSection === item.id ? 'active' : ''}`}
                      style={{ animationDelay: `${index * 0.1}s` }}
                    >
                      {item.label}
                    </button>
                  ))}
                </div>
              </nav>
            </div>
          )}
        </>
      )}

      {/* Essential Controls - Always Visible */}
      <nav className="right-navigation">
        <div className="right-nav-content">
          <button 
            className="control-button" 
            onClick={toggleLanguage}
            aria-label="Toggle Language"
            title={`Switch to ${language === 'en' ? 'German' : 'English'}`}
          >
            <span className="control-button-text">
              {language.toUpperCase()}
            </span>
          </button>
          
          <button 
            className="control-button" 
            onClick={toggleTheme}
            aria-label="Toggle Theme"
            title={`Switch to ${isDark ? 'light' : 'dark'} mode`}
          >
            {isDark ? (
              <Sun size={isMobile ? 18 : 16} weight="regular" />
            ) : (
              <Moon size={isMobile ? 18 : 16} weight="regular" />
            )}
          </button>
        </div>
      </nav>

      <div id="hero">
        <Hero />
      </div>
      <div id="projects">
        <Projects />
      </div>
      <div id="about">
        <About />
      </div>
      <div id="contact">
        <Contact />
      </div>
    </div>
  );
}

function App() {
  return (
    <ThemeProvider>
      <TranslationProvider>
        <NavigationContent />
      </TranslationProvider>
    </ThemeProvider>
  );
}

export default App;