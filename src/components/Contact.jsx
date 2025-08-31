import { useState } from 'react';
import { LinkedinLogo, GithubLogo } from 'phosphor-react';
import { useTranslation } from '../contexts/TranslationContext';

const Contact = () => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simple demo functionality - just show success message
    setTimeout(() => {
      setIsSubmitting(false);
      setShowSuccess(true);
      setFormData({ name: '', email: '', message: '' });
      // Hide success message after 5 seconds
      setTimeout(() => setShowSuccess(false), 5000);
    }, 1000);
  };

  return (
    <section id="contact" className="py-16">
      <div className="container fade-in">
        <h2 className="text-3xl font-bold mb-2">{t('contact.title')}</h2>
        <p className="mb-12" style={{ color: 'var(--text-tertiary)' }}>{t('contact.subtitle')}</p>

        <div className="max-w-2xl">
          {/* Availability Status */}
          <div className="status-available mb-12">
            <span className="status-dot"></span>
            <span>{t('contact.availability')}</span>
          </div>

          {/* Direct Contact - Clean & Prominent */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {/* Email */}
            <div className="text-center md:text-left">
              <h3 className="text-sm font-medium mb-2 uppercase tracking-wide" style={{ color: 'var(--text-tertiary)' }}>
                {t('contact.email')}
              </h3>
              <a 
                href="mailto:hi@benrueckert.com"
                className="text-lg font-medium hover:underline block transition-colors"
              >
                hi@benrueckert.com
              </a>
            </div>
            
            {/* LinkedIn */}
            <div className="text-center md:text-left">
              <h3 className="text-sm font-medium mb-2 uppercase tracking-wide" style={{ color: 'var(--text-tertiary)' }}>
                {t('contact.linkedin')}
              </h3>
              <a 
                href="#" 
                className="flex items-center justify-center md:justify-start gap-2 text-lg font-medium hover:underline transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <LinkedinLogo size={20} weight="regular" />
                {t('contact.connect')}
              </a>
            </div>

            {/* GitHub */}
            <div className="text-center md:text-left">
              <h3 className="text-sm font-medium mb-2 uppercase tracking-wide" style={{ color: 'var(--text-tertiary)' }}>
                {t('contact.github')}
              </h3>
              <a 
                href="#" 
                className="flex items-center justify-center md:justify-start gap-2 text-lg font-medium hover:underline transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <GithubLogo size={20} weight="regular" />
                {t('contact.follow')}
              </a>
            </div>
          </div>

          {/* Contact Form */}
          <div className="pt-12" style={{ borderTop: '1px solid var(--border-secondary)' }}>
            <h3 className="text-xl font-semibold mb-8">{t('contact.sendMessage')}</h3>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-2">
                    {t('contact.form.name')}
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="form-input"
                    placeholder={t('contact.form.namePlaceholder')}
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">
                    {t('contact.form.email')}
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="form-input"
                    placeholder={t('contact.form.emailPlaceholder')}
                    required
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-2">
                  {t('contact.form.message')}
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={6}
                  className="form-input resize-none"
                  placeholder={t('contact.form.messagePlaceholder')}
                  required
                />
              </div>
              
              <button
                type="submit"
                disabled={isSubmitting}
                className={`btn-primary ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
              >
                {isSubmitting ? t('contact.form.sending') : t('contact.form.send')}
              </button>

              {/* Success Message */}
              {showSuccess && (
                <div className="form-success">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span className="font-medium">{t('contact.form.success.title')}</span>
                  </div>
                  <p className="mt-1">{t('contact.form.success.text')}</p>
                </div>
              )}

            </form>
          </div>

          {/* Response Info */}
          <div className="mt-12 p-4 rounded-lg" style={{ backgroundColor: 'var(--bg-secondary)' }}>
            <div className="flex items-center gap-2 text-sm" style={{ color: 'var(--text-tertiary)' }}>
              <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
              <span className="font-medium">{t('contact.responseTime')}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;