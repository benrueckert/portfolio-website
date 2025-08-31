import { useTranslation } from '../contexts/TranslationContext';

const Projects = () => {
  const { t, translations } = useTranslation();

  // Static URLs that don't change
  const projectUrls = {
    personal: [
      { githubUrl: "https://github.com/benrueckert/smart-recipe-finder" },
      { githubUrl: "https://github.com/benrueckert/koda-flashcard-app" },
      { demoUrl: "https://www.giftioapp.com/" }
    ],
    client: [
      { url: "https://kommsteg.de/" },
      { url: "https://car-profex.de/" },
      { url: "https://villa-wirklich.de/" },
      { url: "https://selbmann-elektroanlagenbau.de/" },
      { url: "https://phoenix-moden.de/" }
    ]
  };

  const personalProjects = translations.projects.personalProjects.map((project, index) => ({
    ...project,
    ...projectUrls.personal[index],
    status: "Featured"
  }));

  const clientProjects = translations.projects.clientProjects.map((project, index) => ({
    ...project,
    ...projectUrls.client[index]
  }));

  return (
    <section id="projects" className="py-16">
      <div className="container fade-in">
        <h2 className="text-3xl font-bold mb-2">{t('projects.title')}</h2>
        <p className="mb-12" style={{ color: 'var(--text-tertiary)' }}>{t('projects.subtitle')}</p>

        {/* Personal Projects */}
        <div className="mb-16">
          <h3 className="text-xl font-semibold mb-6 section-header">{t('projects.personal')}</h3>
          
          <div className="space-y-4">
            {personalProjects.map((project, index) => (
              <div 
                key={project.title} 
                className="project-card project-card-personal"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-start justify-between mb-2">
                  <h4 className="text-lg font-medium">{project.title}</h4>
                  <span className={`status-badge ${
                    project.status === 'Featured' 
                      ? 'status-badge-featured' 
                      : 'status-badge-dev'
                  }`}>
                    {t(`projects.status.${project.status.toLowerCase()}`)}
                  </span>
                </div>

                <p className="mb-3" style={{ color: 'var(--text-tertiary)' }}>{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.split(', ').map((tech) => (
                    <span
                      key={tech}
                      className="tech-tag hover-scale"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-6 text-sm">
                  {project.demoUrl && (
                    <a href={project.demoUrl} className="premium-link inline-flex items-center gap-1.5">
                      <span>{t('projects.links.demo')}</span>
                      <span className="hover-arrow">→</span>
                    </a>
                  )}
                  {project.githubUrl && (
                    <a href={project.githubUrl} className="premium-link inline-flex items-center gap-1.5">
                      <span>{t('projects.links.github')}</span>
                      <span className="hover-arrow">→</span>
                    </a>
                  )}
                  {project.caseStudyUrl && (
                    <a href={project.caseStudyUrl} className="premium-link inline-flex items-center gap-1.5">
                      <span>{t('projects.links.caseStudy')}</span>
                      <span className="hover-arrow">→</span>
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>

        </div>

        {/* Section Divider */}
        <div className="section-divider"></div>

        {/* Client Projects */}
        <div>
          <h3 className="text-xl font-semibold mb-6 section-header">{t('projects.client')}</h3>
          <p className="mb-6" style={{ color: 'var(--text-tertiary)' }}>{t('projects.clientSubtitle')}</p>
          
          <div className="space-y-3">
            {clientProjects.map((project, index) => (
              <div 
                key={project.name} 
                className="project-card project-card-client flex justify-between items-center"
                style={{ animationDelay: `${(index + 3) * 0.1}s` }}
              >
                <div>
                  <h4 className="font-medium">{project.name}</h4>
                  <p className="text-sm" style={{ color: 'var(--text-tertiary)' }}>{project.description}</p>
                </div>
                <a 
                  href={project.url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="premium-link text-sm inline-flex items-center gap-1.5 flex-shrink-0"
                >
                  <span>{t('projects.links.visit')}</span>
                  <span className="hover-arrow">→</span>
                </a>
              </div>
            ))}
          </div>

          {/* Contextual CTA after client projects */}
          <div className="mt-16 text-center">
            <p className="text-sm mb-3" style={{ color: 'var(--text-tertiary)' }}>
              {t('projects.cta.text')}
            </p>
            <a href="#contact" className="btn-primary inline-flex items-center gap-2">
              <span>{t('projects.cta.button')}</span>
              <span className="hover-arrow">→</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;