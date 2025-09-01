import { useState, useEffect } from 'react';
import { Check } from 'phosphor-react';
import { useTranslation } from '../contexts/TranslationContext';
import { Link } from 'react-router-dom';

const CookieConsent = () => {
  const { t } = useTranslation();
  const [isVisible, setIsVisible] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    // Check if user has already made a choice
    const consentChoice = localStorage.getItem('cookie-consent');
    if (!consentChoice) {
      // Show banner after a brief delay for smooth page load
      const timer = setTimeout(() => {
        setIsVisible(true);
        setIsAnimating(true);
      }, 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAcceptAll = () => {
    localStorage.setItem('cookie-consent', 'accepted');
    localStorage.setItem('cookie-analytics', 'true');
    handleClose();
  };

  const handleDecline = () => {
    localStorage.setItem('cookie-consent', 'declined');
    localStorage.setItem('cookie-analytics', 'false');
    handleClose();
  };

  const handleClose = () => {
    setIsAnimating(false);
    // Wait for animation to complete before hiding
    setTimeout(() => {
      setIsVisible(false);
    }, 300);
  };


  if (!isVisible) return null;

  return (
    <div className={`cookie-consent ${isAnimating ? 'cookie-consent-visible' : ''}`}>
        <div className="cookie-consent-container">
          {/* Main content */}
          <div className="cookie-consent-content">
            <div className="cookie-consent-text">
              <p className="cookie-consent-message">
                {t('cookies.message')}{' '}
                <Link to="/datenschutz" className="cookie-consent-link">
                  {t('cookies.privacyPolicy')}
                </Link>
              </p>
            </div>

            <div className="cookie-consent-actions">
              <button
                onClick={handleDecline}
                className="cookie-consent-btn cookie-consent-btn-secondary"
                aria-label={t('cookies.decline')}
              >
                {t('cookies.decline')}
              </button>
              
              <button
                onClick={handleAcceptAll}
                className="cookie-consent-btn cookie-consent-btn-primary"
                aria-label={t('cookies.acceptAll')}
              >
                <Check size={16} weight="regular" />
                {t('cookies.acceptAll')}
              </button>
            </div>
          </div>

        </div>
    </div>
  );
};

export default CookieConsent;