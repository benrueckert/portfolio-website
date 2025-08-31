import { useTranslation } from '../contexts/TranslationContext';

const Hero = () => {
  const { t } = useTranslation();

  return (
    <section className="min-h-screen flex items-center justify-center relative">
      <div className="container fade-in">
        <div className="status-available mb-8">
          <span className="status-dot"></span>
          <span>{t('hero.availability')}</span>
        </div>
        
        <h1 className="text-4xl md:text-6xl font-bold mb-4 leading-tight">
          {t('hero.name')}
        </h1>
        
        <h2 className="text-2xl md:text-3xl mb-8" style={{ color: 'var(--text-secondary)' }}>
          {t('hero.title')}
        </h2>
        
        <p className="text-lg max-w-2xl mb-12 leading-relaxed" style={{ color: 'var(--text-tertiary)' }}>
          {t('hero.description')}
        </p>
        
        <div className="flex gap-4 flex-wrap">
          <a href="#projects" className="btn-primary">
            {t('hero.viewProjects')}
          </a>
          <a href="#contact" className="btn-secondary">
            {t('hero.contactMe')}
          </a>
        </div>
      </div>

      {/* Scroll Hint */}
      <div className="scroll-hint">
        <div className="text-xs mb-1">{t('hero.scrollHint')}</div>
        <div className="w-px h-4 bg-current mx-auto"></div>
      </div>
    </section>
  );
};

export default Hero;