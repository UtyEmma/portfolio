import React, { useEffect, useRef, useState } from 'react';
import { createRoot } from 'react-dom/client';
import {
  caseStudies,
  experience,
  moreProjects,
  selectedProjects,
  skills,
  writing
} from './content.js';

const email = 'utyemma@gmail.com';
const resume = '/assets/utyemma-cv.pdf';

function ArrowIcon() {
  return (
    <svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M7 17 17 7M7 7h10v10" />
    </svg>
  );
}

function ThemeIcon({ type }) {
  return type === 'sun' ? (
    <svg className="theme-icon theme-icon-sun" aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v2m0 16v2M4.93 4.93l1.42 1.42m11.3 11.3 1.42 1.42M2 12h2m16 0h2M4.93 19.07l1.42-1.42M17.65 6.35l1.42-1.42" />
    </svg>
  ) : (
    <svg className="theme-icon theme-icon-moon" aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20.8 13A9 9 0 0 1 11 3.2 9 9 0 1 0 20.8 13Z" />
    </svg>
  );
}

function Header() {
  const [theme, setTheme] = useState(document.documentElement.dataset.theme === 'light' ? 'light' : 'dark');
  const [menuOpen, setMenuOpen] = useState(false);
  const [navReady, setNavReady] = useState(false);
  const menuButtonRef = useRef(null);
  const menuOpenRef = useRef(menuOpen);
  menuOpenRef.current = menuOpen;

  useEffect(() => {
    const root = document.documentElement;
    const applyTheme = (nextTheme, persist = false) => {
      root.dataset.theme = nextTheme;
      setTheme(nextTheme);
      document.querySelector('meta[name="theme-color"]')?.setAttribute('content', nextTheme === 'light' ? '#fafafa' : '#0a0a0a');
      if (persist) {
        try {
          localStorage.setItem('portfolio-theme', nextTheme);
        } catch {
          // Theme switching remains available when storage is disabled.
        }
      }
    };

    try {
      const saved = localStorage.getItem('portfolio-theme');
      if (saved === 'light' || saved === 'dark') applyTheme(saved);
    } catch {
      // The page theme remains the default when storage is disabled.
    }

    const onStorage = (event) => {
      if (event.key === 'portfolio-theme' && (event.newValue === 'light' || event.newValue === 'dark')) {
        applyTheme(event.newValue);
      }
    };
    const onKeyDown = (event) => {
      if (event.key === 'Escape' && menuOpenRef.current) {
        setMenuOpen(false);
        menuButtonRef.current?.focus();
      }
    };
    const mobileQuery = window.matchMedia('(max-width: 760px)');
    const onBreakpointChange = () => setMenuOpen(false);

    root.classList.add('nav-ready');
    setNavReady(true);
    window.addEventListener('storage', onStorage);
    document.addEventListener('keydown', onKeyDown);
    mobileQuery.addEventListener('change', onBreakpointChange);

    return () => {
      root.classList.remove('nav-ready');
      window.removeEventListener('storage', onStorage);
      document.removeEventListener('keydown', onKeyDown);
      mobileQuery.removeEventListener('change', onBreakpointChange);
    };
  }, []);

  const nextTheme = theme === 'dark' ? 'light' : 'dark';
  const toggleMenu = () => {
    const nextOpen = !menuOpen;
    setMenuOpen(nextOpen);
    if (nextOpen) {
      requestAnimationFrame(() => document.querySelector('#primary-nav a')?.focus({ preventScroll: true }));
    }
  };

  return (
    <>
      <a className="skip-link" href="#main">Skip to main content</a>
      <header className="site-header compact-header">
        <div className="container compact-container nav-row">
          <a className="brand compact-brand" href="/" aria-label="Utibe-Abasi Emmanuel, home">
            <svg className="brand-symbol" aria-hidden="true" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
              <path d="M12 2v20M2 12h20M5 5l14 14M5 19 19 5" />
            </svg>
            <span className="brand-word">utibe-abasi<span>.</span></span>
          </a>
          <nav id="primary-nav" className={`compact-nav${menuOpen ? ' is-open' : ''}`} aria-label="Primary navigation">
            <a href="/#skills" onClick={() => setMenuOpen(false)}>Skills</a>
            <a href="/#work" onClick={() => setMenuOpen(false)}>Projects</a>
            <a href="/#experience" onClick={() => setMenuOpen(false)}>Experience</a>
            <a href="/#open-source" onClick={() => setMenuOpen(false)}>Open source</a>
            <a href="/#writing" onClick={() => setMenuOpen(false)}>Blog</a>
          </nav>
          <div className="header-actions">
            <button
              id="theme-toggle"
              className="theme-toggle"
              type="button"
              aria-label={`Switch to ${nextTheme} mode`}
              title={`Switch to ${nextTheme} mode`}
              onClick={() => {
                const next = theme === 'dark' ? 'light' : 'dark';
                document.documentElement.dataset.theme = next;
                setTheme(next);
                document.querySelector('meta[name="theme-color"]')?.setAttribute('content', next === 'light' ? '#fafafa' : '#0a0a0a');
                try {
                  localStorage.setItem('portfolio-theme', next);
                } catch {
                  // Theme switching remains available when storage is disabled.
                }
              }}
            >
              <ThemeIcon type="sun" />
              <ThemeIcon type="moon" />
            </button>
            <button
              ref={menuButtonRef}
              className="nav-toggle"
              type="button"
              aria-expanded={menuOpen}
              aria-controls="primary-nav"
              hidden={!navReady}
              onClick={toggleMenu}
            >
              <span>Menu</span>
              <svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
                <path d="M4 8h16M4 16h16" />
              </svg>
            </button>
          </div>
        </div>
      </header>
    </>
  );
}

function Footer() {
  return (
    <footer className="compact-footer">
      <div className="container compact-container">
        <div className="footer-invitation">
          <p>Looking for a senior engineer who understands the whole product?</p>
          <a href={`mailto:${email}?subject=Senior%20engineering%20role`}>Let’s discuss the role</a>
        </div>
        <div className="compact-footer-row">
          <p>© <span>{new Date().getFullYear()}</span> Utibe-Abasi Emmanuel</p>
          <div className="footer-links">
            <a href="https://github.com/UtyEmma" target="_blank" rel="noopener noreferrer">GitHub</a>
            <a href="https://www.linkedin.com/in/utyemma/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            <a href={`mailto:${email}`}>{email}</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

function PageFrame({ children, className = '' }) {
  return (
    <div className={`minimal-page ${className}`} id="top">
      <Header />
      {children}
      <Footer />
    </div>
  );
}

function ProjectCard({ project }) {
  return (
    <li className="project-item">
      <a className="project-link" href={project.href} aria-label={project.description ? `${project.name}: ${project.description}` : project.name}>
        <div className="brief-copy">
          <h3 className="item-title">{project.name}</h3>
          {project.description && <p className="item-description">{project.description}</p>}
        </div>
        <span className="brief-meta">{project.stack}</span>
        <span className="project-arrow"><ArrowIcon /></span>
      </a>
    </li>
  );
}

function HomePage() {
  const [copyStatus, setCopyStatus] = useState('');
  const [copyLabels, setCopyLabels] = useState({});

  const copyText = async (targetId, label) => {
    const target = document.getElementById(targetId);
    if (!target) {
      setCopyStatus('The selected code example could not be found.');
      return;
    }

    try {
      await navigator.clipboard.writeText(target.textContent);
      setCopyStatus(`${label} copied to clipboard.`);
      setCopyLabels((previous) => ({ ...previous, [targetId]: 'Copied' }));
      window.setTimeout(() => setCopyLabels((previous) => ({ ...previous, [targetId]: '' })), 2000);
    } catch {
      const selection = window.getSelection();
      const range = document.createRange();
      range.selectNodeContents(target);
      selection?.removeAllRanges();
      selection?.addRange(range);
      let copied = false;
      try {
        copied = document.execCommand('copy');
      } catch {
        copied = false;
      }
      if (copied) {
        selection?.removeAllRanges();
        setCopyStatus(`${label} copied to clipboard.`);
        setCopyLabels((previous) => ({ ...previous, [targetId]: 'Copied' }));
        window.setTimeout(() => setCopyLabels((previous) => ({ ...previous, [targetId]: '' })), 2000);
      } else {
        setCopyStatus('Code selected. Use your keyboard or browser menu to copy it.');
      }
    }
  };

  return (
    <PageFrame>
      <main id="main" className="container compact-container">
        <section className="brief-intro identity-intro" id="about" aria-labelledby="intro-title">
          <div className="intro-main">
            <p className="intro-role">Senior Laravel &amp; Full-Stack Engineer · 6+ years’ experience</p>
            <h1 id="intro-title">Utibe-Abasi Emmanuel</h1>
            <p className="intro-description">
              <strong className="intro-value">I build dependable production web products, from APIs and databases through the interface.</strong>
              <span className="intro-location">Based in Enugu, Nigeria · Open to remote senior engineering roles</span>
            </p>
            <div className="intro-links" aria-label="Contact and profiles">
              <a className="intro-contact" href={`mailto:${email}?subject=Senior%20engineering%20role`}>Discuss a role</a>
              <a href={resume} target="_blank" rel="noopener">Résumé</a>
            </div>
          </div>
          <figure className="portrait-card">
            <img className="intro-portrait" src="/assets/utibe-abasi-emmanuel.jpg" alt="Utibe-Abasi Emmanuel" width="184" height="184" fetchPriority="high" />
          </figure>
        </section>

        <section className="tools-section" id="skills" aria-labelledby="skills-title">
          <h2 id="skills-title">Here’s what I reach for</h2>
          <ul className="tool-list" aria-label="Technologies and tools">
            {skills.map(([name, asset]) => (
              <li key={name}>
                {asset && <span className="tool-logo" style={{ '--tool-logo': `url('/assets/tools/${asset}.svg')` }} aria-hidden="true" />}
                <span>{name}</span>
              </li>
            ))}
          </ul>
          <p className="tool-notes">I apply this experience across SaaS, health technology, payments, and hospitality—from API design and mobile integrations to deployment, QA, and production support.</p>
        </section>

        <section className="brief-section project-section" id="work" aria-labelledby="projects-title">
          <div className="brief-heading">
            <div className="section-title"><h2 id="projects-title">Here’s what I’ve helped bring to life</h2></div>
            <a href="/projects/">All projects</a>
          </div>
          <ul className="brief-list project-grid">
            {selectedProjects.map((project) => <ProjectCard key={project.name} project={project} />)}
          </ul>
        </section>

        <section className="brief-section" id="experience" aria-labelledby="experience-title">
          <div className="brief-heading">
            <div className="section-title"><h2 id="experience-title">A few places I’ve contributed</h2></div>
            <a href={resume} target="_blank" rel="noopener">Full résumé</a>
          </div>
          <ul className="brief-list">
            {experience.map(({ company, role, period, summary }) => (
              <li className="brief-row" key={company}>
                <div className="brief-copy"><h3 className="item-title">{company}</h3><p>{role}</p><p>{summary}</p></div>
                <span className="brief-meta">{period}</span>
              </li>
            ))}
          </ul>
        </section>

        <section className="brief-section" id="open-source" aria-labelledby="oss-title">
          <div className="brief-heading">
            <div className="section-title"><h2 id="oss-title">I like to share what I build</h2></div>
            <a href="https://github.com/UtyEmma" target="_blank" rel="noopener noreferrer">GitHub</a>
          </div>
          <div className="open-source-content">
            <article className="package-feature" aria-labelledby="package-title">
              <div className="package-heading"><a className="resource-action" href="https://github.com/UtyEmma/laranotice" target="_blank" rel="noopener noreferrer">View on GitHub</a></div>
              <h3 id="package-title">LaraNotice</h3>
              <p className="package-description">I made LaraNotice so you can write a notification once and deliver it through Laravel’s channels.</p>
              <div className="install-command">
                <code id="package-install">composer require utyemma/laranotice</code>
                <button type="button" className="copy-button" onClick={() => copyText('package-install', 'Install command')}>{copyLabels['package-install'] || 'Copy'}</button>
              </div>
              <div className="code-heading">
                <span>Send a notification</span>
                <button type="button" className="copy-button" onClick={() => copyText('package-example', 'Usage example')}>{copyLabels['package-example'] || 'Copy PHP'}</button>
              </div>
              <pre className="package-code"><code id="package-example"><span className="code-keyword">use</span> Utyemma\LaraNotice\Notify;{'\n\n'}(<span className="code-keyword">new</span> <span className="code-type">Notify</span>(<span className="code-string">'Welcome aboard'</span>)){'\n'}    -&gt;greeting(<span className="code-string">'Hello'</span>){'\n'}    -&gt;line(<span className="code-string">'Your workspace is ready'</span>){'\n'}    -&gt;send(<span className="code-variable">$user</span>, [<span className="code-string">'mail'</span>, <span className="code-string">'database'</span>]);</code></pre>
              <p className="package-note">After package setup, <code>$user</code> is your notifiable Laravel user. <a href="https://github.com/UtyEmma/laranotice#setup-and-installation" target="_blank" rel="noopener noreferrer">Read the setup guide</a>.</p>
              <p className="sr-only" role="status" aria-live="polite">{copyStatus}</p>
            </article>
            <ul className="brief-list">
              <li className="resource-item"><a className="resource-link" href="https://github.com/UtyEmma/lara-settings" target="_blank" rel="noopener noreferrer"><span className="brief-copy"><span className="item-title">LaraSettings</span><span className="item-description">Application settings for Laravel</span></span><span className="resource-action">View on GitHub</span></a></li>
              <li className="resource-item"><a className="resource-link" href="https://github.com/UtyEmma/headless-livewire" target="_blank" rel="noopener noreferrer"><span className="brief-copy"><span className="item-title">Headless Livewire</span><span className="item-description">Headless components for Laravel Livewire</span></span><span className="resource-action">View on GitHub</span></a></li>
            </ul>
          </div>
        </section>

        <section className="writing-section writing-section-standalone" id="writing" aria-labelledby="writing-title">
          <div className="writing-heading">
            <div><h2 id="writing-title">What I’ve been writing about</h2></div>
            <a className="writing-all" href="https://utyemma.medium.com" target="_blank" rel="noopener noreferrer">All posts</a>
          </div>
          <ul className="writing-posts">
            {writing.map((post) => (
              <li className="post-preview" key={post.href}>
                <a className="post-link" href={post.href} target="_blank" rel="noopener noreferrer">
                  <span className="post-topic">{post.topic}</span>
                  <h3 className="post-title">{post.title}</h3>
                  <p className="post-summary">{post.summary}</p>
                  <span className="post-action">Read on Medium</span>
                </a>
              </li>
            ))}
          </ul>
        </section>
      </main>
    </PageFrame>
  );
}

function ProjectArchive() {
  return (
    <PageFrame className="archive-page">
      <main id="main" className="container compact-container">
        <section className="brief-intro archive-intro" aria-labelledby="archive-title">
          <a className="back-link" href="/">Back to home</a>
          <h1 id="archive-title">Here’s what I’ve helped bring to life</h1>
          <p className="intro-description">A selection of SaaS, education, healthcare, commerce, and business platforms I’ve helped design, build, and maintain.</p>
        </section>
        <section className="brief-section archive-projects" aria-label="Selected projects">
          <ul className="brief-list project-grid">
            {selectedProjects.map((project) => <ProjectCard key={project.name} project={project} />)}
          </ul>
        </section>
        <details className="more-projects">
          <summary>More projects <span>{moreProjects.length}</span></summary>
          <ul className="brief-list project-grid project-grid-compact">
            {moreProjects.map(([name, href, stack]) => (
              <ProjectCard key={name} project={{ name, href, stack, description: '' }} />
            ))}
          </ul>
        </details>
      </main>
    </PageFrame>
  );
}

function CaseStudy({ study }) {
  const imageWidth = study.imageSize?.[0];
  const imageHeight = study.imageSize?.[1];

  return (
    <PageFrame className="case-page">
      <main id="main" className="container compact-container">
        <section className="case-intro" aria-labelledby="case-title">
          <a className="back-link" href="/projects/">All projects</a>
          <div className="case-topline"><p className="section-label">The work behind the product</p><span className="case-state">{study.status}</span></div>
          <h1 id="case-title">{study.title}</h1>
          <p className="case-lede">{study.lede}</p>
          <dl className="case-details">
            <div><dt>Role</dt><dd>{study.role}</dd></div>
            <div><dt>Industry</dt><dd>{study.industry}</dd></div>
            <div><dt>Period</dt><dd>{study.period}</dd></div>
            <div><dt>Product</dt><dd><a className="case-product-link" href={study.product} target="_blank" rel="noopener noreferrer">{study.productLabel}</a></dd></div>
          </dl>
        </section>
        {study.image && (
          <figure className="case-showcase">
            <div className={`case-product-stage case-product-stage-${study.title.toLowerCase().replaceAll(' ', '')}`}>
              <img className="case-product-image" src={study.image} alt={study.imageAlt} width={imageWidth} height={imageHeight} decoding="async" />
            </div>
            <figcaption>{study.imageCaption} <a href={study.product} target="_blank" rel="noopener noreferrer">{study.title}</a>.</figcaption>
          </figure>
        )}
        {study.scope && (
          <section className="case-scope-visual" aria-label="Project focus">
            <div><p className="section-label">Project focus</p><h2>School portal development</h2><p className="scope-description">Purpose-built software for the people behind education programmes</p></div>
            <ul>{study.scope.map(([heading, detail]) => <li key={heading}><strong>{heading}</strong><span>{detail}</span></li>)}</ul>
          </section>
        )}
        <div className="case-content-grid">
          <aside className="case-facts" aria-label="Project at a glance">
            <div className="case-highlight"><p className="section-label">At a glance</p><strong>{study.highlight}</strong><p>{study.highlightNote}</p></div>
            <div className="case-tools"><p className="section-label">Tools &amp; focus</p><ul>{study.tools.map((tool) => <li key={tool}>{tool}</li>)}</ul></div>
          </aside>
          <div className="case-story">
            <section className="case-block"><p className="section-label">Context</p><h2>The challenge</h2><p>{study.challenge}</p></section>
            <section className="case-block"><p className="section-label">My contribution</p><h2>What I owned and delivered</h2><ul className="case-bullets">{study.contributions.map((item) => <li key={item}>{item}</li>)}</ul></section>
            <section className="case-block"><p className="section-label">Engineering focus</p><h2>The work behind the interface</h2><ul className="case-focus-list">{study.focus.map((item) => <li key={item}>{item}</li>)}</ul></section>
            <section className="case-block"><p className="section-label">Result</p><h2>Outcome</h2><p>{study.outcome}</p></section>
            <aside className="case-source-note"><p className="section-label">About this work</p><p>{study.note}</p></aside>
          </div>
        </div>
        <section className="case-next" aria-label="Next project">
          <p className="section-label">Explore another project</p>
          <a href={study.next[1]}><span>{study.next[0]}</span><span className="project-arrow"><ArrowIcon /></span></a>
        </section>
      </main>
    </PageFrame>
  );
}

function NotFound() {
  return (
    <PageFrame className="error-page">
      <main id="main">
        <section className="page-hero not-found">
          <div className="container compact-container">
            <p className="section-label">404 / Page not found</p>
            <h1>Page not found</h1>
            <p>The page you’re looking for isn’t here.</p>
            <a className="button button-primary" href="/">Back to homepage</a>
          </div>
        </section>
      </main>
    </PageFrame>
  );
}

function App() {
  const pathname = window.location.pathname.replace(/\/+$/, '') || '/';
  const routeStudy = pathname.match(/^\/work\/([^/]+)$/);
  const study = routeStudy ? caseStudies[routeStudy[1]] : null;

  useEffect(() => {
    if (pathname === '/work/jobberlad' || pathname === '/work/xtravalue') {
      window.location.replace('/projects/');
    }
  }, [pathname]);

  useEffect(() => {
    const pageTitle = study
      ? `${study.title} — Engineering Case Study | Utibe-Abasi Emmanuel`
      : pathname === '/projects'
        ? 'Selected Projects | Utibe-Abasi Emmanuel'
        : pathname === '/'
          ? 'Utibe-Abasi Emmanuel | Senior Laravel & Full-Stack Engineer'
          : 'Page not found | Utibe-Abasi Emmanuel';
    const pageDescription = study?.lede || (pathname === '/projects'
      ? 'A selection of SaaS, education, healthcare, commerce, and business platforms I’ve helped build.'
      : 'Senior Laravel and full-stack engineer with 6+ years’ experience building production applications across SaaS, health technology, payments, and hospitality.');
    const socialImage = study
      ? `https://utyemma.vercel.app/assets/social/${routeStudy[1]}.png`
      : pathname === '/projects'
          ? 'https://utyemma.vercel.app/assets/social/projects.png'
          : 'https://utyemma.vercel.app/assets/og.png';

    document.title = pageTitle;
    document.querySelector('meta[name="description"]')?.setAttribute('content', pageDescription);
    document.querySelector('meta[property="og:title"]')?.setAttribute('content', pageTitle);
    document.querySelector('meta[property="og:description"]')?.setAttribute('content', pageDescription);
    document.querySelector('meta[property="og:image"]')?.setAttribute('content', socialImage);
  }, [pathname, study, routeStudy]);

  if (pathname === '/') return <HomePage />;
  if (pathname === '/projects') return <ProjectArchive />;
  if (study) return <CaseStudy study={study} />;
  if (pathname === '/work/jobberlad' || pathname === '/work/xtravalue') {
    return <p className="sr-only"><a href="/projects/">Continue to the project archive</a></p>;
  }
  return <NotFound />;
}

const entrancePreference = window.matchMedia('(prefers-reduced-motion: reduce)');
if (!entrancePreference.matches && 'animate' in Element.prototype) {
  const intro = document.querySelector('.identity-intro, .archive-intro, .case-intro, .not-found');
  if (intro) {
    const animation = intro.animate(
      [{ opacity: 0, transform: 'translateY(6px)' }, { opacity: 1, transform: 'translateY(0)' }],
      { duration: 320, easing: 'cubic-bezier(.22, 1, .36, 1)' }
    );
    entrancePreference.addEventListener('change', (event) => {
      if (event.matches) animation.cancel();
    });
  }
}

createRoot(document.getElementById('root')).render(<App />);
