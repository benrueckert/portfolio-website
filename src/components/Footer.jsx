import { useTranslation } from '../contexts/TranslationContext';
import { Link } from 'react-router-dom';

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="premium-footer">
      <div className="container py-12">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Copyright */}
          <p className="footer-text">
            © {new Date().getFullYear()} Ben Rückert. {t('footer.allRightsReserved')}
          </p>
          
          {/* Legal Links */}
          <nav className="flex gap-8">
            <Link to="/impressum" className="footer-link">
              {t('footer.impressum')}
            </Link>
            <Link to="/datenschutz" className="footer-link">
              {t('footer.privacy')}
            </Link>
          </nav>
        </div>
      </div>
    </footer>
  );
};

export default Footer;