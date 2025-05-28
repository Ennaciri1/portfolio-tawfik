import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, ExternalLink, Code, Database, Globe, Smartphone, ChevronDown, Menu, X } from 'lucide-react';
import './Portfolio.css';

const Portfolio = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('accueil');

  // Animation on scroll
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['accueil', 'apropos', 'competences', 'projets', 'contact'];
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
          const handleDownloadCV = () => {
  // Créer un lien de téléchargement
  const link = document.createElement('a');
  link.href = '/cv-tawfik-enncari.pdf'; // Chemin vers votre CV
  link.download = 'CV_Tawfik_Enncari.pdf'; // Nom du fichier téléchargé
  link.click();
};
  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  const competences = [
     { nom: 'Frontend', icone: Code, skills: ['React', 'Vite', 'JavaScript', 'HTML/CSS'] },
    { nom: 'WordPress', icone: Globe, skills: ['Themes Custom', 'Plugins', 'WooCommerce', 'SEO/Ads'] },
    { nom: 'Backend', icone: Database, skills: ['Python', 'Node.js', 'REST APIs', 'Databases'] },
    { nom: 'AI/ML', icone: Smartphone, skills: ['Machine Learning', 'Deep Learning', 'Data Analysis', 'Python ML'] }
  ];

  const projets = [
    {
      titre: 'Best Clinic App',
      description: 'Application mobile complète pour une clinique en Turquie, développée avec Flutter pour la gestion des rendez-vous et consultations.',
      technologies: ['Flutter', 'Dart', 'Firebase', 'REST API'],
      image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=400&h=250&fit=crop',
      github: '#',
      demo: '#'
    },
    {
      titre: 'AjiApp - Équipe React',
      description: 'Développement de la partie React (dashboard et site web) dans un projet collaboratif avec une équipe Flutter pour l\'application mobile.',
      technologies: ['React', 'JavaScript', 'Dashboard', 'Team Work'],
      image: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?w=400&h=250&fit=crop',
      github: '#',
      demo: '#'
    },
    {
      titre: 'Dashboard React Vite',
      description: 'Interface d\'administration moderne développée dans mon évolution vers React, démontrant ma maîtrise des outils de développement actuels.',
      technologies: ['React', 'Vite', 'Modern JS', 'UI/UX'],
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=250&fit=crop',
      github: '#',
      demo: 'Portfolio'
    },
    {
      titre: 'Projets Python & ML',
      description: 'Exploration du Machine Learning et Deep Learning avec Python, développement de scripts d\'analyse de données et modèles prédictifs.',
      technologies: ['Python', 'ML', 'Deep Learning', 'Data Science'],
      image: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=400&h=250&fit=crop',
      github: '#',
      demo: 'Code Samples'
    },
    {
      titre: 'WordPress Pro Sites',
      description: 'Mes débuts et expertise en WordPress : sites personnalisés, SEO avancé, publicités digitales - la base de mon parcours de développeur.',
      technologies: ['WordPress', 'PHP', 'SEO', 'Digital Ads'],
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=250&fit=crop',
      github: '#',
      demo: 'Client Work'
    }
  ];

  return (
    <div className="portfolio-container">
      {/* Navigation */}
      <nav className="navbar">
        <div className="nav-container">
          <div className="nav-content">
            <div className="nav-logo">
              Portfolio
            </div>
            
            {/* Desktop Menu */}
            <div className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
              {['accueil', 'apropos', 'competences', 'projets', 'contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className={`nav-link ${activeSection === item ? 'active' : ''}`}
                >
                  {item === 'apropos' ? 'À propos' : item === 'competences' ? 'Compétences' : item}
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              className="nav-toggle"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="accueil" className="hero-section">
        <div className="hero-background"></div>
        <div className="hero-content">
          <div className="hero-avatar">
            <div className="hero-avatar-inner">
              TE
            </div>
          </div>
          
          <h1 className="hero-title">
            Tawfik Enncari
          </h1>
          <p className="hero-subtitle">
            WordPress → React → Python • ML/DL Explorer
          </p>
          <p className="hero-description">
            3 ans d'évolution continue : du développement WordPress vers l'intelligence artificielle
          </p>
          
          <div className="social-links">
            <a href="https://www.linkedin.com/in/tawfik-ennaciri-027586271/" className="social-link">
              <Linkedin size={24} />
            </a>
         
            <a href="mailto:ennaciritawfik175@gmail.com?subject=Bonjour&body=Je vous contacte concernant..." className="social-link">
              <Mail size={24} />
            </a>
          </div>
          
          <button
            onClick={() => scrollToSection('apropos')}
            className="scroll-indicator"
          >
            <ChevronDown size={32} style={{color: '#60a5fa'}} />
          </button>
        </div>
      </section>

      {/* About Section */}
      <section id="apropos" className="section">
        <div className="section-container">
          <h2 className="section-title">
            À propos de moi
          </h2>
          <div className="about-grid">
            <div>
              <p className="about-text">
                Développeur Full-Stack avec 3 ans d'expérience et un parcours d'évolution passionnant. 
                J'ai commencé par <strong>WordPress</strong> où j'ai acquis une expertise solide, puis j'ai évolué vers <strong>React</strong> pour créer des interfaces modernes et interactives.
              </p>
              <p className="about-text">
                Mon parcours m'a ensuite mené vers <strong>Python</strong> pour le développement backend et l'analyse de données. 
                J'ai également exploré le <strong>Machine Learning et Deep Learning</strong>, élargissant mes compétences vers l'intelligence artificielle. 
                Cette diversité me permet d'aborder chaque projet avec une vision complète et des solutions innovantes.
              </p>



<button onClick={handleDownloadCV} className="btn-primary">
  Télécharger CV
</button>

            </div>
            <div className="about-image">
              <div className="about-image-container">
                <Code size={120} style={{color: '#60a5fa'}} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="competences" className="section section-alt">
        <div className="section-container-wide">
          <h2 className="section-title">
            Compétences
          </h2>
          <div className="skills-grid">
            {competences.map((comp, index) => (
              <div key={index} className="skill-card">
                <div className="skill-header">
                  <comp.icone size={32} className="skill-icon" />
                  <h3 className="skill-title">{comp.nom}</h3>
                </div>
                <ul className="skill-list">
                  {comp.skills.map((skill, i) => (
                    <li key={i} className="skill-item">
                      <div className="skill-bullet"></div>
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projets" className="section">
        <div className="section-container-wide">
          <h2 className="section-title">
            Mes Projets
          </h2>
          <div className="projects-grid">
            {projets.map((projet, index) => (
              <div key={index} className="project-card">
                <div className="project-image-container">
                  <img 
                    src={projet.image} 
                    alt={projet.titre}
                    className="project-image"
                  />
                  <div className="project-image-overlay"></div>
                </div>
                <div className="project-content">
                  <h3 className="project-title">{projet.titre}</h3>
                  <p className="project-description">{projet.description}</p>
                  <div className="project-tech">
                    {projet.technologies.map((tech, i) => (
                      <span key={i} className="tech-tag">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="project-links">
                    <a href={projet.github} className="project-link">
                      <Github size={16} />
                      Code
                    </a>
                    <a href={projet.demo} className="project-link">
                      <ExternalLink size={16} />
                      Demo
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section section-alt">
        <div className="section-container">
          <h2 className="section-title">
            Contactez-moi
          </h2>
          <p className="text-center mb-12" style={{fontSize: '1.25rem', color: '#d1d5db'}}>
            Vous avez un projet en tête ? Discutons-en !
          </p>
          
          <div className="contact-info-grid">
            <div className="contact-card">
              <Mail size={48} className="contact-icon" />
              <h3 className="contact-title">Email</h3>
              <p className="contact-text">tawfik.enncari@gmail.com</p>
            </div>
            <div className="contact-card">
              <Github size={48} className="contact-icon" />
              <h3 className="contact-title">GitHub</h3>
              <p className="contact-text">github.com/tawfik-enncari</p>
            </div>
            <div className="contact-card">
              <Linkedin size={48} className="contact-icon" />
              <h3 className="contact-title">LinkedIn</h3>
              <p className="contact-text">linkedin.com/in/tawfik-enncari</p>
            </div>
          </div>
          
          <div className="contact-form-container">
            <div className="contact-form">
              <div className="form-row">
                <input
                  type="text"
                  placeholder="Votre nom"
                  className="form-input"
                />
                <input
                  type="email"
                  placeholder="Votre email"
                  className="form-input"
                />
              </div>
              <input
                type="text"
                placeholder="Sujet"
                className="form-input"
              />
              <textarea
                placeholder="Votre message"
                className="form-textarea"
              ></textarea>
              <button
                onClick={() => alert('Fonctionnalité d\'envoi à implémenter')}
                className="form-submit"
              >
                Envoyer le message
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>&copy; 2025 Tawfik Enncari. Tous droits réservés.</p>
      </footer>
    </div>
  );
};

export default Portfolio;