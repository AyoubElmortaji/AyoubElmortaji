const app = document.getElementById('app');
const navbar = document.getElementById('navbar');
const footer = document.getElementById('footer');
const toastStack = document.getElementById('toastStack');
const scrollTopButton = document.getElementById('scrollTop');
const lightbox = document.getElementById('lightbox');
const lightboxContent = document.getElementById('lightboxContent');
const lightboxThumbs = document.getElementById('lightboxThumbs');
const lightboxClose = document.getElementById('lightboxClose');

const state = {
  content: null,
  activeFilter: 'All',
  lightboxImages: [],
  lightboxIndex: 0
};

const showToast = (message) => {
  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.textContent = message;
  toastStack.appendChild(toast);
  setTimeout(() => {
    toast.remove();
  }, 3200);
};

const setTheme = (theme) => {
  document.documentElement.setAttribute('data-theme', theme);
  localStorage.setItem('neon-theme', theme);
};

const toggleTheme = () => {
  const current = document.documentElement.getAttribute('data-theme') || 'dark';
  setTheme(current === 'dark' ? 'light' : 'dark');
  renderNavbar();
};

const createSectionHeader = (title, subtitle) => `
  <div class="section-header">
    <p class="section-eyebrow">${subtitle}</p>
    <h2>${title}</h2>
  </div>
`;

const createChip = (label) => `<span class="chip">${label}</span>`;

const createImageWithFallback = (sources, className) => {
  const wrapper = document.createElement('div');
  const image = document.createElement('img');
  let index = 0;

  const setSource = () => {
    image.src = sources[index];
  };

  image.className = className;
  image.loading = 'lazy';
  image.alt = '';
  image.addEventListener('error', () => {
    if (index < sources.length - 1) {
      index += 1;
      setSource();
    } else {
      wrapper.innerHTML = `
        <div class="image-placeholder">
          <div class="image-placeholder__glow"></div>
          <div class="image-placeholder__text">${state.content.ui.placeholders.image}</div>
        </div>
      `;
    }
  });

  setSource();
  wrapper.appendChild(image);
  return wrapper;
};

const buildLightbox = (images, startIndex = 0) => {
  state.lightboxImages = images;
  state.lightboxIndex = startIndex;
  lightbox.classList.add('open');
  lightbox.setAttribute('aria-hidden', 'false');
  renderLightbox();
};

const renderLightbox = () => {
  const current = state.lightboxImages[state.lightboxIndex];
  lightboxContent.innerHTML = '';
  const image = document.createElement('img');
  image.src = current;
  image.alt = 'Project preview';
  lightboxContent.appendChild(image);

  lightboxThumbs.innerHTML = '';
  state.lightboxImages.forEach((src, index) => {
    const button = document.createElement('button');
    button.className = `lightbox__thumb ${index === state.lightboxIndex ? 'active' : ''}`;
    const thumb = document.createElement('img');
    thumb.src = src;
    thumb.alt = 'thumbnail';
    button.appendChild(thumb);
    button.addEventListener('click', () => {
      state.lightboxIndex = index;
      renderLightbox();
    });
    lightboxThumbs.appendChild(button);
  });
};

const closeLightbox = () => {
  lightbox.classList.remove('open');
  lightbox.setAttribute('aria-hidden', 'true');
  state.lightboxImages = [];
};

lightboxClose.addEventListener('click', closeLightbox);
lightbox.addEventListener('click', (event) => {
  if (event.target === lightbox) {
    closeLightbox();
  }
});

const renderNavbar = () => {
  const { ui, personal } = state.content;
  const activeHash = window.location.hash || '#/';
  const navLinks = ui.nav
    .map((item) => {
      const isActive = activeHash.startsWith(item.href);
      return `<a class="nav-link ${isActive ? 'active' : ''}" href="${item.href}">${item.label}</a>`;
    })
    .join('');

  navbar.innerHTML = `
    <div class="navbar__inner">
      <a class="brand" href="#/">
        <span class="brand__glow">AE</span>
        <span class="brand__text">Ayoub</span>
      </a>
      <nav class="nav" id="navLinks">${navLinks}</nav>
      <div class="nav-actions">
        <button class="theme-toggle" id="themeToggle" aria-label="Toggle theme">
          <span class="theme-toggle__orbit"></span>
          <span class="theme-toggle__label">${(document.documentElement.getAttribute('data-theme') || 'dark') === 'dark' ? 'Dark' : 'Light'}</span>
        </button>
        <a class="btn btn-ghost" href="assets/Ayoub-ELMORTAJI-CV.pdf">${ui.buttons.resume}</a>
        <button class="nav-toggle" id="navToggle" aria-label="Toggle navigation">
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </div>
  `;

  const nav = document.getElementById('navLinks');
  const navToggle = document.getElementById('navToggle');
  navToggle.addEventListener('click', () => {
    nav.classList.toggle('open');
  });
  nav.addEventListener('click', () => nav.classList.remove('open'));
  document.getElementById('themeToggle').addEventListener('click', toggleTheme);
};

const renderFooter = () => {
  const { personal } = state.content;
  footer.innerHTML = `
    <div>
      <strong>${personal.name}</strong>
      <p>${personal.title}</p>
    </div>
    <div class="footer__links">
      <a href="${personal.github}" target="_blank" rel="noreferrer">GitHub</a>
      <a href="${personal.linkedin}" target="_blank" rel="noreferrer">LinkedIn</a>
      <a href="mailto:${personal.email}">Email</a>
    </div>
    <p class="footer__note">© ${new Date().getFullYear()} ${personal.name}. All rights reserved.</p>
  `;
};

const renderHero = () => {
  const { personal, highlights, ui } = state.content;
  return `
    <section class="section hero">
      <div>
        <p class="hero__eyebrow">${personal.title}</p>
        <h1>${personal.name}</h1>
        <p class="hero__summary">${personal.objective}</p>
        <div class="hero__actions">
          <a class="btn" href="#/projects">${ui.buttons.viewProjects}</a>
          <a class="btn btn-outline" href="#/contact">${ui.buttons.contact}</a>
        </div>
        <div class="hero__highlights">
          ${highlights.map((item) => `<span class="hero__highlight">${item}</span>`).join('')}
        </div>
      </div>
      <div class="hero__card">
        <p class="hero__label">${ui.labels.location}</p>
        <p>${personal.location}</p>
        <p class="hero__label">${ui.labels.email}</p>
        <p>${personal.email}</p>
        <p class="hero__label">${ui.labels.phone}</p>
        <p>${personal.phone}</p>
        <div class="hero__socials">
          <a href="${personal.github}" target="_blank" rel="noreferrer">GitHub</a>
          <a href="${personal.linkedin}" target="_blank" rel="noreferrer">LinkedIn</a>
        </div>
      </div>
    </section>
  `;
};

const renderProjectsGrid = (projects) => {
  return `
    <div class="grid two">
      ${projects
        .map(
          (project) => `
        <div class="card">
          <div class="project-card__header">
            <h3>${project.title}</h3>
            <span>${project.timeline}</span>
          </div>
          <p>${project.overview}</p>
          <div class="project-card__tags">
            ${project.tags.map(createChip).join('')}
          </div>
          <a class="project-card__link" href="#/projects/${project.slug}">Explore project</a>
        </div>
      `
        )
        .join('')}
    </div>
  `;
};

const renderHome = () => {
  const { ui, projects, awards } = state.content;
  const featured = projects.slice(0, 2);
  return `
    ${renderHero()}
    <section class="section">
      ${createSectionHeader(ui.sections.featuredProjects, ui.sectionEyebrows.showcase)}
      ${renderProjectsGrid(featured)}
    </section>
    <section class="section">
      ${createSectionHeader(ui.sections.awardsSpotlight, ui.sectionEyebrows.recognition)}
      <div class="grid two">
        ${awards
          .map(
            (award) => `
          <div class="card">
            <h3>${award.title}</h3>
            <p>${award.issuer}</p>
          </div>
        `
          )
          .join('')}
      </div>
    </section>
  `;
};

const renderAbout = () => {
  const { ui, about, skills, leadership } = state.content;
  return `
    <section class="section">
      ${createSectionHeader(ui.sections.aboutMe, ui.sectionEyebrows.profile)}
      <div class="card">
        <h3>${about.headline}</h3>
        <p>${about.summary}</p>
      </div>
    </section>
    <section class="section">
      ${createSectionHeader(ui.sections.skills, ui.sectionEyebrows.capabilities)}
      <div class="grid three">
        ${Object.entries(skills)
          .map(
            ([group, list]) => `
          <div class="card">
            <h3>${group}</h3>
            <div class="project-card__tags">
              ${list.map(createChip).join('')}
            </div>
          </div>
        `
          )
          .join('')}
      </div>
    </section>
    <section class="section">
      ${createSectionHeader(ui.sections.leadership, ui.sectionEyebrows.community)}
      <div class="grid two">
        ${leadership
          .map(
            (item) => `
          <div class="card">
            <h3>${item.organization}</h3>
            <p>${item.role}</p>
            <span>${item.period}</span>
          </div>
        `
          )
          .join('')}
      </div>
    </section>
  `;
};

const renderTimeline = (items) => {
  return `
    <div class="grid">
      ${items
        .map(
          (item) => `
        <div class="card timeline__item">
          <div class="project-card__header">
            <h3>${item.institution || item.company}</h3>
            <span>${item.period}</span>
          </div>
          <p class="meta-label">${item.program || item.role}</p>
          <ul>
            ${item.details.map((detail) => `<li>${detail}</li>`).join('')}
          </ul>
        </div>
      `
        )
        .join('')}
    </div>
  `;
};

const renderListSection = (items) => {
  return `
    <div class="grid two">
      ${items
        .map(
          (item) => `
        <div class="card">
          <h3>${item.title || item}</h3>
          ${item.issuer ? `<p>${item.issuer}</p>` : ''}
        </div>
      `
        )
        .join('')}
    </div>
  `;
};

const renderProjects = () => {
  const { ui, projects } = state.content;
  const tags = Array.from(new Set(projects.flatMap((project) => project.tags)));
  const filterTags = ['All', ...tags];
  const filtered =
    state.activeFilter === 'All'
      ? projects
      : projects.filter((project) => project.tags.includes(state.activeFilter));

  return `
    <section class="section">
      ${createSectionHeader(ui.sections.projects, ui.sectionEyebrows.portfolio)}
      <div class="filters">
        ${filterTags
          .map(
            (tag) => `
          <button class="filter ${state.activeFilter === tag ? 'active' : ''}" data-tag="${tag}">
            ${createChip(tag)}
          </button>
        `
          )
          .join('')}
      </div>
      ${renderProjectsGrid(filtered)}
    </section>
  `;
};

const renderProjectDetails = (slug) => {
  const { ui, projects } = state.content;
  const project = projects.find((item) => item.slug === slug);
  if (!project) {
    return `
      <section class="section">
        ${createSectionHeader(ui.placeholders.notFound, ui.sectionEyebrows.portfolio)}
        <a class="btn btn-outline" href="#/projects">${ui.buttons.backToProjects}</a>
      </section>
    `;
  }

  const architecture = `assets/projects/${project.slug}/${project.architecture}`;
  const gallery = project.gallery.map((file) => `assets/projects/${project.slug}/${file}`);
  const lightboxImages = [architecture, ...gallery];

  const architectureContainer = createImageWithFallback(
    [architecture, architecture.replace('.webp', '.png'), architecture.replace('.webp', '.jpg')],
    'project-detail__architecture'
  );

  architectureContainer.querySelector('img')?.addEventListener('click', () => buildLightbox(lightboxImages, 0));

  const galleryMarkup = gallery
    .map((src, index) => {
      return `
        <div class="gallery-item" data-index="${index + 1}">
          <img class="gallery-image" src="${src}" alt="${project.title} gallery" loading="lazy" />
        </div>
      `;
    })
    .join('');

  const container = document.createElement('div');
  container.innerHTML = `
    <section class="section project-detail">
      <div class="project-detail__header">
        <div>
          <p class="section-eyebrow">${project.type}</p>
          <h1>${project.title}</h1>
          <p class="project-detail__overview">${project.overview}</p>
          <div class="project-detail__meta">
            <div>
              <span class="meta-label">${ui.labels.role}</span>
              <p>${project.role}</p>
            </div>
            <div>
              <span class="meta-label">${ui.labels.timeline}</span>
              <p>${project.timeline}</p>
            </div>
          </div>
          <div class="project-detail__stack">
            ${project.stack.map(createChip).join('')}
          </div>
        </div>
        <div class="project-detail__card">
          <h3>${ui.sections.architecture}</h3>
          <div class="architecture-slot"></div>
        </div>
      </div>
      <div class="project-detail__sections">
        <div>
          ${createSectionHeader(ui.sections.features, ui.sectionEyebrows.scope)}
          <ul>${project.features.map((item) => `<li>${item}</li>`).join('')}</ul>
        </div>
        <div>
          ${createSectionHeader(ui.sections.challenges, ui.sectionEyebrows.problems)}
          <ul>${project.challenges.map((item) => `<li>${item}</li>`).join('')}</ul>
        </div>
        <div>
          ${createSectionHeader(ui.sections.solutions, ui.sectionEyebrows.approach)}
          <ul>${project.solutions.map((item) => `<li>${item}</li>`).join('')}</ul>
        </div>
        ${project.results?.length ? `
        <div>
          ${createSectionHeader(ui.sections.results, ui.sectionEyebrows.impact)}
          <ul>${project.results.map((item) => `<li>${item}</li>`).join('')}</ul>
        </div>
        ` : ''}
      </div>
      <div class="project-detail__gallery">
        ${createSectionHeader(ui.sections.gallery, ui.sectionEyebrows.screens)}
        <div class="gallery-grid">${galleryMarkup}</div>
      </div>
      <div class="project-detail__cta">
        <a class="btn btn-outline" href="#/projects">${ui.buttons.backToProjects}</a>
      </div>
    </section>
  `;

  container.querySelector('.architecture-slot').appendChild(architectureContainer);
  container.querySelectorAll('.gallery-item').forEach((item) => {
    item.addEventListener('click', () => {
      const index = Number(item.dataset.index);
      buildLightbox(lightboxImages, index);
    });
  });

  return container.innerHTML;
};

const renderContact = () => {
  const { ui, contact, personal } = state.content;
  return `
    <section class="section">
      ${createSectionHeader(ui.sections.contact, ui.sectionEyebrows.connect)}
      <div class="contact-grid">
        <div class="card">
          <h3>${contact.headline}</h3>
          <p>${contact.cta}</p>
          <div class="hero__actions">
            <button class="btn btn-outline" id="copyEmail">${ui.buttons.copyEmail}</button>
            <a class="btn" href="mailto:${personal.email}">${ui.buttons.sendEmail}</a>
          </div>
          <p class="hero__summary">${personal.email}</p>
        </div>
        <form class="contact-form" id="contactForm">
          <label>
            ${contact.form.name}
            <input name="name" required />
          </label>
          <label>
            ${contact.form.email}
            <input type="email" name="email" required />
          </label>
          <label>
            ${contact.form.message}
            <textarea name="message" rows="5" required></textarea>
          </label>
          <button class="btn" type="submit">${ui.buttons.submit}</button>
        </form>
      </div>
    </section>
  `;
};

const renderRoute = () => {
  const hash = window.location.hash.replace('#', '') || '/';
  const [path, slug] = hash.split('/').filter(Boolean);

  let content = '';

  if (hash === '/' || hash === '') {
    content = renderHome();
  } else if (path === 'about') {
    content = renderAbout();
  } else if (path === 'education') {
    content = `${createSectionHeader(state.content.ui.sections.education, state.content.ui.sectionEyebrows.timeline)}${renderTimeline(state.content.education)}`;
  } else if (path === 'experience') {
    content = `${createSectionHeader(state.content.ui.sections.experience, state.content.ui.sectionEyebrows.timeline)}${renderTimeline(state.content.experience)}`;
  } else if (path === 'certifications') {
    content = `${createSectionHeader(state.content.ui.sections.certifications, state.content.ui.sectionEyebrows.credentials)}${renderListSection(state.content.certifications)}`;
  } else if (path === 'awards') {
    content = `${createSectionHeader(state.content.ui.sections.awards, state.content.ui.sectionEyebrows.recognition)}${renderListSection(state.content.awards)}`;
  } else if (path === 'projects' && slug) {
    content = renderProjectDetails(slug);
  } else if (path === 'projects') {
    content = renderProjects();
  } else if (path === 'contact') {
    content = renderContact();
  } else {
    content = renderHome();
  }

  app.innerHTML = content;
  renderNavbar();
  renderFooter();
  bindDynamicEvents();
  setupReveal();
  window.scrollTo({ top: 0, behavior: 'smooth' });
};

const bindDynamicEvents = () => {
  document.querySelectorAll('.filter').forEach((button) => {
    button.addEventListener('click', () => {
      state.activeFilter = button.dataset.tag;
      renderRoute();
    });
  });

  const copyButton = document.getElementById('copyEmail');
  if (copyButton) {
    copyButton.addEventListener('click', async () => {
      await navigator.clipboard.writeText(state.content.personal.email);
      showToast('Email copied to clipboard.');
    });
  }

  const contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', (event) => {
      event.preventDefault();
      contactForm.reset();
      showToast('Message queued. Thanks for reaching out!');
    });
  }
};

const setupReveal = () => {
  document.querySelectorAll('.section').forEach((section) => section.classList.add('reveal'));
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.2 }
  );
  document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));
};

const updateScrollButton = () => {
  if (window.scrollY > 400) {
    scrollTopButton.classList.add('visible');
  } else {
    scrollTopButton.classList.remove('visible');
  }
};

scrollTopButton.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

window.addEventListener('scroll', updateScrollButton);
window.addEventListener('hashchange', () => {
  renderRoute();
});

const init = async () => {
  const response = await fetch('content/profile.json');
  state.content = await response.json();
  document.title = state.content.seo.defaultTitle;
  const storedTheme = localStorage.getItem('neon-theme') || 'dark';
  setTheme(storedTheme);
  renderRoute();
  updateScrollButton();
};

init();
