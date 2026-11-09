import {
  ArrowUpRight,
  MessageCircle,
} from 'lucide-react';
import type { CSSProperties } from 'react';
import ProjectContactStage, {
  navigateToContact,
} from './project-contact-stage';
import ScrollReveal, { DoubleHeightContent } from './scroll-reveal';

const contactDetails = {
  name: 'Olufolarin Darlington',
  email: 'darlingtondolapoolufolarin@gmail.com',
  phone: '+234 907 688 5001',
  whatsappNumber: '2349076885001',
};

const contactMessage =
  'I saw your portfolio and I would like us to work on a project together.';

const projects = [
  {
    id: 'client-01',
    number: '01',
    title: 'CLIENT',
    url: '',
    images: ['OVERVIEW 01', 'DETAIL 01A', 'DETAIL 01B'],
  },
  {
    id: 'client-02',
    number: '02',
    title: 'CLIENT',
    url: '',
    images: ['OVERVIEW 02', 'DETAIL 02A', 'DETAIL 02B'],
  },
  {
    id: 'client-03',
    number: '03',
    title: 'CLIENT',
    url: '',
    images: ['OVERVIEW 03', 'DETAIL 03A', 'DETAIL 03B'],
  },
];

const services = [
  {
    number: '01',
    title: 'FRONT-END DEVELOPER',
    description:
      'I build engaging, responsive and visually compelling websites that bring ideas to life through thoughtful design and modern front-end technologies.',
  },
];

const galleryItems = [
  { label: 'DIGITAL INTERFACE', style: 'gallery-art--interface' },
  { label: 'CREATIVE SYSTEMS', style: 'gallery-art--systems' },
  { label: 'WEB EXPERIENCES', style: 'gallery-art--experience' },
  { label: 'INTERACTIVE DESIGN', style: 'gallery-art--interactive' },
  { label: 'FRONT-END CRAFT', style: 'gallery-art--craft' },
  { label: 'VISUAL EXPLORATION', style: 'gallery-art--visual' },
  { label: 'DESIGN COMPONENTS', style: 'gallery-art--components' },
  { label: 'RESPONSIVE LAYOUTS', style: 'gallery-art--layouts' },
  { label: 'CREATIVE CODE', style: 'gallery-art--code' },
  { label: 'TYPE AND MOTION', style: 'gallery-art--type' },
  { label: 'DIGITAL PRODUCTS', style: 'gallery-art--products' },
  { label: 'UI STUDIES', style: 'gallery-art--studies' },
];

const galleryRows = [galleryItems.slice(0, 6), galleryItems.slice(6, 12)];

function GallerySequence({
  items,
  startIndex,
  duplicate = false,
}: {
  items: typeof galleryItems;
  startIndex: number;
  duplicate?: boolean;
}) {
  return (
    <div className="gallery-sequence" aria-hidden={duplicate}>
      {items.map((item, index) => {
        const tileStyle: CSSProperties & {
          '--gallery-diagonal-index': number;
        } = {
          '--gallery-diagonal-index': (duplicate ? items.length : 0) + index,
        };

        return (
          <div
            className="gallery-tile"
            key={`${item.style}-${index}`}
            style={tileStyle}
          >
            <div className={`gallery-art ${item.style}`}>
              <span className="gallery-art-index">
                {String(startIndex + index + 1).padStart(2, '0')}
              </span>
              <span className="gallery-art-label">{item.label}</span>
            </div>
          </div>
        );
      })}
    </div>
  );
}

function MovingGallery() {
  return (
    <section
      className="moving-gallery"
      id="gallery"
      aria-label="Creative work preview"
    >
      {galleryRows.map((items, rowIndex) => {
        const startIndex = rowIndex * 6;

        return (
          <div
            className={`gallery-row ${rowIndex === 0 ? 'gallery-row--left' : 'gallery-row--right'}`}
            key={startIndex}
          >
            <div className="gallery-track">
              <GallerySequence items={items} startIndex={startIndex} />
              <GallerySequence
                items={items}
                startIndex={startIndex}
                duplicate
              />
            </div>
          </div>
        );
      })}
    </section>
  );
}

function AboutSection() {
  return (
    <section
      id="about"
      className="portfolio-section about-section"
    >
      <div className="section-container about-content">
        <ScrollReveal as="div" className="about-heading-reveal">
          <h2 className="portfolio-heading">ABOUT ME</h2>
        </ScrollReveal>
        <ScrollReveal as="div" className="about-copy-reveal">
          <p className="about-copy">
            I completed three years of study in software development, where I
            developed my foundation in programming and web technologies. Over
            the past six months, I have continued building my practical
            coding experience, with a strong focus on front-end development.
            I enjoy transforming ideas into beautiful, responsive and
            interactive websites, combining creativity, design and clean code
            to create meaningful digital experiences.
          </p>
        </ScrollReveal>
        <ScrollReveal as="div" className="about-button-reveal">
          <a
            className="contact-button about-contact-button"
            href="#contact"
            onClick={(event) => {
              event.preventDefault();
              navigateToContact();
            }}
          >
            <span className="contact-button-face">
              <span>CONTACT ME</span>
              <ArrowUpRight aria-hidden="true" className="contact-arrow" />
            </span>
          </a>
        </ScrollReveal>
      </div>
    </section>
  );
}

function ServicesSection() {
  return (
    <section className="portfolio-section services-section" id="services">
      <div className="section-container services-content">
        <ScrollReveal as="div" className="services-heading-reveal">
          <h2 className="portfolio-heading">SERVICES</h2>
        </ScrollReveal>
        {services.map((service) => (
          <article className="service-item" key={service.number}>
            <DoubleHeightContent
              className="service-expanded-content"
              contentClassName="service-expanded-inner"
            >
              <ScrollReveal className="service-number">
                {service.number}
              </ScrollReveal>
              <ScrollReveal as="div" className="service-text-group">
                <h3>{service.title}</h3>
                <p className="service-copy">{service.description}</p>
              </ScrollReveal>
            </DoubleHeightContent>
          </article>
        ))}
      </div>
    </section>
  );
}

function ProjectVisual({ label, variant }: { label: string; variant: string }) {
  return (
    <ScrollReveal
      as="div"
      className={`project-visual ${variant}`}
      role="img"
      label={`${label} visual placeholder`}
      offset={['start 100%', 'start 80%']}
    >
      <span className="project-visual-frame" aria-hidden="true" />
      <span className="project-visual-label" aria-hidden="true">{label}</span>
    </ScrollReveal>
  );
}

function ProjectCardContent({ project }: { project: (typeof projects)[number] }) {
  const variants = [
    'project-visual--primary',
    'project-visual--secondary',
    'project-visual--tertiary',
  ];

  return (
    <div className="project-card-content">
      <ScrollReveal
        as="div"
        className="project-card-heading-reveal"
        offset={['start 100%', 'start 80%']}
      >
        <header className="project-card-heading">
          <div className="project-card-identity">
            <span className="project-number">{project.number}</span>
            <h3>{project.title}</h3>
          </div>
          {project.url ? (
            <a
              className="project-link"
              href={project.url}
              target="_blank"
              rel="noreferrer"
            >
              VIEW PROJECT <ArrowUpRight aria-hidden="true" />
            </a>
          ) : (
            <span
              className="project-link project-link--unavailable"
              aria-disabled="true"
              title="A project URL will be added later"
            >
              VIEW PROJECT <ArrowUpRight aria-hidden="true" />
            </span>
          )}
        </header>
      </ScrollReveal>
      <div className="project-gallery">
        {project.images.map((image, imageIndex) => (
          <ProjectVisual
            key={image}
            label={image}
            variant={variants[imageIndex]}
          />
        ))}
      </div>
      <ScrollReveal
        as="div"
        className="project-description-reveal"
        offset={['start 100%', 'start 80%']}
      >
        <p className="project-description">
          Project details and imagery will be added here.
        </p>
      </ScrollReveal>
    </div>
  );
}

function ProjectCard({ project }: { project: (typeof projects)[number] }) {
  return (
    <article className="project-card">
      <ProjectCardContent project={project} />
    </article>
  );
}

function ProjectsSection() {
  return (
    <section className="portfolio-section projects-section" id="projects">
      <div className="section-container">
        <ScrollReveal as="div" className="projects-heading-reveal">
          <h2 className="portfolio-heading">PROJECTS</h2>
        </ScrollReveal>
      </div>
    </section>
  );
}

function ContactSection() {
  const whatsappUrl = `https://wa.me/${contactDetails.whatsappNumber}?text=${encodeURIComponent(contactMessage)}`;
  const emailUrl = `mailto:${contactDetails.email}?body=${encodeURIComponent(contactMessage)}`;

  return (
    <section className="portfolio-section contact-section" id="contact">
      <div className="section-container contact-layout">
        <div className="contact-introduction">
          <ScrollReveal as="div" className="contact-heading-reveal">
            <h2>LET&apos;S GET IN TOUCH.</h2>
          </ScrollReveal>
          <ScrollReveal as="div" className="contact-name-reveal">
            <p className="contact-name">{contactDetails.name}</p>
          </ScrollReveal>
          <ScrollReveal as="div" className="contact-copy-reveal">
            <p className="contact-copy">
              Have a project in mind or want to discuss an idea? I&apos;d love to
              hear from you. Let&apos;s create something meaningful together.
            </p>
          </ScrollReveal>
          <div className="contact-details">
            <ScrollReveal as="div" className="contact-detail-reveal">
              <a className="contact-detail-link" href={emailUrl}>
                <span>EMAIL</span>
                {contactDetails.email}
              </a>
            </ScrollReveal>
            <ScrollReveal as="div" className="contact-detail-reveal">
              <a
                className="contact-detail-link"
                href={whatsappUrl}
                target="_blank"
                rel="noreferrer"
              >
                <span>WHATSAPP</span>
                {contactDetails.phone}
              </a>
            </ScrollReveal>
          </div>
        </div>
        <aside className="contact-social" aria-labelledby="social-media-heading">
          <ScrollReveal as="div" className="social-media-heading-reveal">
            <h2 className="portfolio-heading" id="social-media-heading">
              SOCIAL MEDIA
            </h2>
          </ScrollReveal>
          <ScrollReveal as="div" className="social-media-link-reveal">
            <a
              className="contact-link"
              href={whatsappUrl}
              target="_blank"
              rel="noreferrer"
            >
              <MessageCircle aria-hidden="true" />
              <span>WHATSAPP</span>
              <ArrowUpRight aria-hidden="true" className="contact-link-arrow" />
            </a>
          </ScrollReveal>
        </aside>
      </div>
    </section>
  );
}

export function PortfolioSections() {
  return (
    <>
      <MovingGallery />
      <AboutSection />
      <ServicesSection />
      <ProjectsSection />
      <ProjectContactStage
        cards={projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
        contact={<ContactSection />}
      />
    </>
  );
}

export function PortfolioFooter() {
  const whatsappUrl = contactDetails.whatsappNumber
    ? `https://wa.me/${contactDetails.whatsappNumber}?text=${encodeURIComponent(contactMessage)}`
    : '';

  return (
    <footer className="site-footer">
      <div className="section-container">
        <div className="footer-main">
          <ScrollReveal as="div" className="footer-identity">
            <p className="footer-name">Olufolarin Darlington</p>
            <p>Front-End Developer</p>
          </ScrollReveal>
          <ScrollReveal as="div" className="footer-link-group">
            <h2>CONTACT</h2>
            {contactDetails.email ? (
              <a href={`mailto:${contactDetails.email}`}>EMAIL</a>
            ) : (
              <span className="footer-link-unavailable">EMAIL — ADD ADDRESS</span>
            )}
            {whatsappUrl ? (
              <a href={whatsappUrl} target="_blank" rel="noreferrer">
                WHATSAPP
              </a>
            ) : (
              <span className="footer-link-unavailable">WHATSAPP — ADD NUMBER</span>
            )}
          </ScrollReveal>
        </div>
        <div className="footer-bottom">
          <ScrollReveal className="footer-copyright">
            © 2026 Olufolarin Darlington. All rights reserved.
          </ScrollReveal>
          <ScrollReveal
            className="footer-mark"
            label="TRIPLE D"
            ariaHidden
          >
            TRIPLE D <i />
          </ScrollReveal>
        </div>
      </div>
    </footer>
  );
}
