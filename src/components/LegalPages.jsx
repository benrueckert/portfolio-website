import { useTranslation } from '../contexts/TranslationContext';
import { Link } from 'react-router-dom';

export const Impressum = () => {
  const { t } = useTranslation();

  return (
    <section className="py-16">
      <div className="container">
        <div className="max-w-3xl">
          <h1 className="text-3xl font-bold mb-8">{t('legal.impressum.title')}</h1>
          
          <div className="space-y-6 text-sm leading-relaxed">
            <div>
              <h2 className="text-lg font-semibold mb-2">{t('legal.impressum.contact')}</h2>
              <p>Ben Rückert</p>
              <p>{t('legal.impressum.profession')}</p>
              <p>
                {t('legal.impressum.email')}: <a href="mailto:hi@benrueckert.com" className="premium-link">hi@benrueckert.com</a>
              </p>
            </div>

            <div>
              <h2 className="text-lg font-semibold mb-2">{t('legal.impressum.responsibility')}</h2>
              <p>{t('legal.impressum.responsibilityText')}</p>
            </div>

            <div>
              <h2 className="text-lg font-semibold mb-2">{t('legal.impressum.disclaimer')}</h2>
              <p>{t('legal.impressum.disclaimerText')}</p>
            </div>
          </div>

          <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-800">
            <Link to="/" className="premium-link">← {t('legal.backToHome')}</Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export const Datenschutz = () => {
  const { t } = useTranslation();

  return (
    <section className="py-16">
      <div className="container">
        <div className="max-w-3xl">
          <h1 className="text-3xl font-bold mb-8">{t('legal.privacy.title')}</h1>
          
          <div className="space-y-6 text-sm leading-relaxed">
            <div>
              <h2 className="text-lg font-semibold mb-2">{t('legal.privacy.overview')}</h2>
              <p>{t('legal.privacy.overviewText')}</p>
            </div>

            <div>
              <h2 className="text-lg font-semibold mb-2">{t('legal.privacy.dataController')}</h2>
              <p>Ben Rückert</p>
              <p>{t('legal.privacy.email')}: <a href="mailto:hi@benrueckert.com" className="premium-link">hi@benrueckert.com</a></p>
            </div>

            <div>
              <h2 className="text-lg font-semibold mb-2">{t('legal.privacy.cookies')}</h2>
              <p>{t('legal.privacy.cookiesText')}</p>
            </div>

            <div>
              <h2 className="text-lg font-semibold mb-2">{t('legal.privacy.contactForm')}</h2>
              <p>{t('legal.privacy.contactFormText')}</p>
              <p className="mt-2"><strong>{t('legal.privacy.legalBasis')}:</strong> {t('legal.privacy.legalBasisText')}</p>
            </div>

            <div>
              <h2 className="text-lg font-semibold mb-2">{t('legal.privacy.formspree')}</h2>
              <p>{t('legal.privacy.formspreeText')}</p>
              <p className="mt-2">
                <a href="https://formspree.io/legal/privacy-policy/" target="_blank" rel="noopener noreferrer" className="premium-link">
                  {t('legal.privacy.formspreePolicy')}
                </a>
              </p>
            </div>

            <div>
              <h2 className="text-lg font-semibold mb-2">{t('legal.privacy.hosting')}</h2>
              <p>{t('legal.privacy.hostingText')}</p>
              <p className="mt-2">
                <a href="https://vercel.com/legal/privacy-policy" target="_blank" rel="noopener noreferrer" className="premium-link">
                  {t('legal.privacy.vercelPolicy')}
                </a>
              </p>
            </div>

            <div>
              <h2 className="text-lg font-semibold mb-2">{t('legal.privacy.localStorage')}</h2>
              <p>{t('legal.privacy.localStorageText')}</p>
            </div>

            <div>
              <h2 className="text-lg font-semibold mb-2">{t('legal.privacy.rights')}</h2>
              <p>{t('legal.privacy.rightsText')}</p>
            </div>

            <div>
              <h2 className="text-lg font-semibold mb-2">{t('legal.privacy.externalLinks')}</h2>
              <p>{t('legal.privacy.externalLinksText')}</p>
            </div>
          </div>

          <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-800">
            <Link to="/" className="premium-link">← {t('legal.backToHome')}</Link>
          </div>
        </div>
      </div>
    </section>
  );
};