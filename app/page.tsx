// npm run dev


'use client';

import { motion } from 'framer-motion';
import { ArrowUpRight, Menu, X } from 'lucide-react';
import Image from 'next/image';
import { useRef, useState } from 'react';
import { PortfolioFooter, PortfolioSections } from './portfolio-sections';
import { navigateToContact } from './project-contact-stage';

const navItems = [
  { label: 'ABOUT', href: '#about' },
  { label: 'COSTUMES', href: '#gallery' },
  { label: 'PROJECTS', href: '#projects' },
  { label: 'CONTACT', href: '#contact' },
];

const technologies = [
  { name: 'React', icon: '/technology-icons/react.svg' },
  { name: 'HTML', icon: '/technology-icons/html.svg' },
  { name: 'CSS', icon: '/technology-icons/css.svg' },
  { name: 'Node.js', icon: '/technology-icons/nodejs.svg' },
  { name: 'TypeScript', icon: '/technology-icons/typescript.svg' },
];

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isContactDropping, setIsContactDropping] = useState(false);
  const contactDropInProgress = useRef(false);

  const handleContactClick = () => {
    if (contactDropInProgress.current) return;
    contactDropInProgress.current = true;
    setIsContactDropping(true);
  };

  const finishContactDrop = () => {
    contactDropInProgress.current = false;
    setIsContactDropping(false);
  };

  return (
    <>
      <main>
        <div className="hero-surface relative bg-[#050505] text-white">
      <div className="pointer-events-none absolute inset-0 opacity-80">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,transparent_0%,rgba(32,40,50,0.14)_50%,transparent_100%)] opacity-40" />
        <div className="absolute inset-0 [background-image:linear-gradient(rgba(32,40,50,0.14)_1px,transparent_1px),linear-gradient(to_right,rgba(32,40,50,0.14)_1px,transparent_1px)] [background-size:110px_110px] opacity-[0.12]" />
        <div className="absolute left-[18%] top-[28%] h-px w-[170px] bg-[#202832]" />
        <div className="absolute right-[16%] top-[36%] h-px w-[180px] bg-[#202832]" />
        <div className="absolute bottom-[18%] left-[28%] h-px w-[150px] bg-[#202832]" />
        <div className="absolute bottom-[21%] right-[25%] h-px w-[120px] bg-[#202832]" />
      </div>

      <div className="page-container relative">
        <header className="site-header sticky top-0 z-30 rounded-full border border-[#202832]/80 bg-[#080808]/70 shadow-[0_0_0_1px_rgba(32,40,50,0.2)] backdrop-blur-xl">
          <nav className="site-nav" aria-label="Main navigation">
            <ul
              id="primary-navigation"
              className={`nav-links${mobileMenuOpen ? ' is-open' : ''}`}
            >
              {navItems.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className="nav-link group relative inline-flex items-center text-[13px] font-semibold uppercase tracking-[0.16em] text-[#737D89] transition-colors duration-300 hover:text-[#38BDF8]"
                    onClick={(event) => {
                      setMobileMenuOpen(false);
                      if (item.href === '#contact') {
                        event.preventDefault();
                        navigateToContact();
                      }
                    }}
                  >
                    <span className="relative z-10">{item.label}</span>
                  </a>
                </li>
              ))}
            </ul>
            <button
              type="button"
              className="mobile-nav-toggle"
              aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
              aria-controls="primary-navigation"
              aria-expanded={mobileMenuOpen}
              onClick={() => setMobileMenuOpen((isOpen) => !isOpen)}
            >
              {mobileMenuOpen ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
            </button>
          </nav>
        </header>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="intro-heading"
        >
          <h1 className="intro-title">
            <span className="intro-title-white">HELLO, I AM </span>
            <span className="intro-title-accent">TRIPLE D.</span>
          </h1>
        </motion.div>

        <section className="hero-section relative">
          <div className="hero-grid">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="hero-introduction flex min-w-0 flex-col justify-center"
            >
              <p className="intro-label">WHAT I DO</p>
              <h2 className="developer-title">
                <span>FRONTEND</span> DEVELOPER
              </h2>
              <p className="developer-copy">
                I am passionate about frontend development and how it brings ideas to life on the web. I use design and code to transform concepts into beautiful, responsive and interactive websites that people can enjoy using.
              </p>
              <p className="developer-invitation">
                Take a look at my work and explore what I create.
              </p>
              <a className="portfolio-link" href="#projects">
                Check Out My Projects. <ArrowUpRight aria-hidden="true" />
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.92 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.75, delay: 0.2 }}
              className="hero-logo-column relative flex min-w-0 items-center justify-center"
            >
              <div className="logo-stage">
                <Image
                  src="/triple_d_animation_transparent.gif"
                  alt="TRIPLE D animated logo"
                  width={720}
                  height={720}
                  sizes="(max-width: 767px) 100vw, (max-width: 1100px) 50vw, min(95rem, 62vw)"
                  priority
                  unoptimized
                  className="hero-logo h-auto w-full object-contain"
                />
              </div>
            </motion.div>

            <motion.aside
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.25 }}
              className="hero-contact flex min-w-0 items-center justify-center"
            >
              <a
                href="#contact"
                className={`contact-button${isContactDropping ? ' is-dropping' : ''}`}
                onClick={(event) => {
                  event.preventDefault();
                  handleContactClick();
                  navigateToContact();
                }}
                aria-label="Contact me"
              >
                <span
                  className="contact-button-face"
                  onAnimationEnd={finishContactDrop}
                >
                  <span>CONTACT ME</span>
                  <ArrowUpRight aria-hidden="true" className="contact-arrow" />
                </span>
              </a>
            </motion.aside>
          </div>
        </section>

        </div>
        </div>
      <section className="technology-marquee" aria-label="Technologies">
        <div className="marquee-viewport">
          <div className="marquee-track">
            {[0, 1].map((sequence) => (
              <ul
                className="marquee-group"
                key={sequence}
                aria-hidden={sequence === 1}
              >
                {technologies.map((technology) => (
                  <li className="marquee-item" key={technology.name}>
                    <Image
                      src={technology.icon}
                      alt=""
                      aria-hidden="true"
                      width={56}
                      height={56}
                      className="technology-icon"
                    />
                    <span>{technology.name}</span>
                  </li>
                ))}
              </ul>
            ))}
          </div>
        </div>
      </section>
      <PortfolioSections />
      </main>
      <PortfolioFooter />
    </>
  );
}
