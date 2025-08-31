import { useTranslation } from '../contexts/TranslationContext';
import portraitImg from '../assets/ben-portrait.jpg';

const About = () => {
  const { t } = useTranslation();
  
  const techStack = [
    'React', 'Tailwind CSS', 'Vite', 'Framer Motion', 'Node.js', 'WordPress', 
    'Git/GitHub', 'Figma', 'Vercel', 'Netlify'
  ];

  return (
    <section className="py-16">
      <div className="container fade-in">
        <h2 className="text-3xl font-bold mb-12">{t('about.title')}</h2>

        <div className="flex flex-col md:flex-row gap-8 items-start">
          {/* Profile Picture */}
          <div className="flex-shrink-0">
            <img 
              src={portraitImg} 
              alt="Ben Rückert Profile Picture"
              className="w-24 h-24 rounded-full object-cover"
            />
          </div>

          {/* About Content */}
          <div className="flex-1 space-y-6">
            <p className="text-lg leading-relaxed">
              {t('about.intro')}
            </p>
            
            <p className="text-lg leading-relaxed">
              {t('about.experience')}
            </p>

            <p className="text-lg leading-relaxed">
              {t('about.philosophy')}
            </p>
          </div>
        </div>

        <div className="mt-12">
          <h3 className="text-xl font-semibold mb-6">{t('about.techStack')}</h3>
          <div className="flex flex-wrap gap-2">
            {techStack.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 text-sm rounded hover-scale cursor-default transition-colors"
                style={{ 
                  backgroundColor: 'var(--bg-tertiary)', 
                  color: 'var(--text-secondary)'
                }}
              >
                {tech}
              </span>
            ))}
          </div>
          
          <p className="mt-6" style={{ color: 'var(--text-tertiary)' }}>
            {t('about.currentlyLearning')}{' '}
            <span className="font-medium" style={{ color: 'var(--text-primary)' }}>
              {t('about.typescript')}
            </span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;