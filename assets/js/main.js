/**
 * Mohamed Gomaa - Data Analyst Portfolio Main Script
 * Handles navigation, interactive filtering, case study modals, lightbox & utilities.
 */

document.addEventListener('DOMContentLoaded', () => {
  initNavbar();
  initProjectFiltering();
  initCaseStudyModal();
  initLightbox();
  initClipboard();
  initSmoothScroll();
});

// 1. Navbar Scroll & Mobile Menu
function initNavbar() {
  const header = document.querySelector('.header');
  const mobileBtn = document.querySelector('.mobile-menu-btn');
  const navLinks = document.querySelector('.nav-links');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });

  if (mobileBtn && navLinks) {
    mobileBtn.addEventListener('click', () => {
      const isOpen = navLinks.classList.toggle('mobile-open');
      mobileBtn.setAttribute('aria-expanded', isOpen);
    });

    navLinks.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        navLinks.classList.remove('mobile-open');
      });
    });
  }

  // Active link spy
  const sections = document.querySelectorAll('section[id]');
  window.addEventListener('scroll', () => {
    const scrollY = window.pageYOffset;
    sections.forEach(current => {
      const sectionHeight = current.offsetHeight;
      const sectionTop = current.offsetTop - 100;
      const sectionId = current.getAttribute('id');
      const navItem = document.querySelector(`.nav-links a[href*="${sectionId}"]`);
      if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
        navItem?.classList.add('active');
      } else {
        navItem?.classList.remove('active');
      }
    });
  });
}

// 2. Project Filtering
function initProjectFiltering() {
  const tabs = document.querySelectorAll('.filter-tab');
  const cards = document.querySelectorAll('.project-card');

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      tabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');

      const filter = tab.dataset.filter;
      cards.forEach(card => {
        const category = card.dataset.category;
        if (filter === 'all' || category === filter) {
          card.style.display = card.classList.contains('featured') ? 'grid' : 'flex';
          card.style.opacity = '1';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });
}

// 3. Case Study Modal Dialog
let currentModalTab = 'overview';
let activeStudy = null;

function initCaseStudyModal() {
  const modalBackdrop = document.getElementById('case-study-modal');
  const closeBtn = document.querySelector('.modal-close-btn');

  document.querySelectorAll('[data-open-case]').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const studyId = btn.dataset.openCase;
      if (typeof CASE_STUDIES !== 'undefined' && CASE_STUDIES[studyId]) {
        openCaseStudy(CASE_STUDIES[studyId]);
      }
    });
  });

  if (closeBtn && modalBackdrop) {
    closeBtn.addEventListener('click', closeCaseStudy);
    modalBackdrop.addEventListener('click', (e) => {
      if (e.target === modalBackdrop) closeCaseStudy();
    });
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && modalBackdrop.classList.contains('open')) {
        closeCaseStudy();
      }
    });
  }

  // Modal tab navigation
  document.querySelectorAll('.modal-tab-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.modal-tab-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      currentModalTab = btn.dataset.tab;
      renderModalTabContent();
    });
  });
}

function openCaseStudy(study) {
  activeStudy = study;
  const modalBackdrop = document.getElementById('case-study-modal');
  document.body.style.overflow = 'hidden';

  // Set Header
  document.getElementById('modal-study-title').textContent = study.title;
  document.getElementById('modal-study-subtitle').textContent = study.subtitle;

  // Reset tab to overview
  currentModalTab = 'overview';
  document.querySelectorAll('.modal-tab-btn').forEach(b => {
    b.classList.toggle('active', b.dataset.tab === 'overview');
  });

  renderModalTabContent();
  modalBackdrop.classList.add('open');
}

function closeCaseStudy() {
  const modalBackdrop = document.getElementById('case-study-modal');
  modalBackdrop.classList.remove('open');
  document.body.style.overflow = '';
}

function renderModalTabContent() {
  const body = document.getElementById('modal-tab-content');
  if (!activeStudy || !body) return;

  if (currentModalTab === 'overview') {
    let metricsHtml = '<div class="modal-metrics-strip">';
    activeStudy.metrics.forEach(m => {
      metricsHtml += `
        <div class="modal-metric-box">
          <div class="modal-metric-label">${m.label}</div>
          <div class="modal-metric-val">${m.value}</div>
        </div>
      `;
    });
    metricsHtml += '</div>';

    let objectivesHtml = '<ul class="modal-list">';
    activeStudy.objectives.forEach(obj => {
      objectivesHtml += `<li>${obj}</li>`;
    });
    objectivesHtml += '</ul>';

    body.innerHTML = `
      ${metricsHtml}
      <h3 class="modal-section-title">📌 Executive Overview</h3>
      <p class="modal-text">${activeStudy.overview}</p>
      
      <h3 class="modal-section-title">🛑 The Analytical Problem</h3>
      <p class="modal-text">${activeStudy.problem}</p>

      <h3 class="modal-section-title">🎯 Project Objectives</h3>
      ${objectivesHtml}

      <h3 class="modal-section-title">📁 Dataset & Data Quality Audits</h3>
      <p class="modal-text"><strong>Source Data:</strong> ${activeStudy.dataset.sources}</p>
      <p class="modal-text"><strong>Scale & Scope:</strong> ${activeStudy.dataset.volume}</p>
      <p class="modal-text"><strong>Integrity Checks:</strong> ${activeStudy.dataset.qualityChecks}</p>
    `;
  } else if (currentModalTab === 'architecture') {
    let cleaningHtml = '<ul class="modal-list">';
    activeStudy.cleaningSteps.forEach(step => {
      cleaningHtml += `<li>${step}</li>`;
    });
    cleaningHtml += '</ul>';

    let factTablesHtml = activeStudy.architecture.factTables.map(t => `<li><strong>Fact:</strong> ${t}</li>`).join('');
    let dimTablesHtml = activeStudy.architecture.dimensionTables.map(t => `<li><strong>Dimension:</strong> ${t}</li>`).join('');

    body.innerHTML = `
      <h3 class="modal-section-title">🧹 Data Cleaning & ETL Pipelines</h3>
      ${cleaningHtml}

      <h3 class="modal-section-title">🏗️ Relational Schema Design (${activeStudy.architecture.modelType})</h3>
      <ul class="modal-list">
        ${factTablesHtml}
        ${dimTablesHtml}
      </ul>

      <h3 class="modal-section-title">💻 Technical Implementation (${activeStudy.codeSnippet.language})</h3>
      <div class="code-block-box">
        <div class="code-block-header">
          <span>${activeStudy.codeSnippet.title}</span>
          <span>${activeStudy.codeSnippet.language}</span>
        </div>
        <pre><code>${escapeHtml(activeStudy.codeSnippet.code)}</code></pre>
      </div>
    `;
  } else if (currentModalTab === 'visuals') {
    let galleryHtml = '<div class="modal-gallery-grid">';
    activeStudy.visualizations.forEach((v, idx) => {
      galleryHtml += `
        <div class="gallery-item" onclick="openLightbox('${v.url}', '${escapeHtml(v.caption)}')">
          <div class="gallery-thumb">
            <img src="${v.url}" alt="Screenshot ${idx + 1}" loading="lazy">
          </div>
          <div class="gallery-caption">${v.caption}</div>
        </div>
      `;
    });
    galleryHtml += '</div>';

    body.innerHTML = `
      <h3 class="modal-section-title">📊 Visualizations & Dashboard Gallery</h3>
      <p class="modal-text">Click on any image to inspect high-resolution details.</p>
      ${galleryHtml}
    `;
  } else if (currentModalTab === 'findings') {
    let findingsHtml = '<ul class="modal-list">';
    activeStudy.findings.forEach(f => {
      findingsHtml += `<li><strong>Verified Finding:</strong> ${f}</li>`;
    });
    findingsHtml += '</ul>';

    let recsHtml = '<ul class="modal-list">';
    activeStudy.recommendations.forEach(r => {
      recsHtml += `<li><strong>Strategic Action:</strong> ${r}</li>`;
    });
    recsHtml += '</ul>';

    body.innerHTML = `
      <h3 class="modal-section-title">💡 Key Data-Backed Findings</h3>
      ${findingsHtml}

      <h3 class="modal-section-title">🚀 Actionable Recommendations</h3>
      ${recsHtml}

      <div style="margin-top: 30px; padding: 20px; background: rgba(56, 189, 248, 0.08); border: 1px solid rgba(56, 189, 248, 0.2); border-radius: var(--radius-md);">
        <h4 style="font-size: 1rem; color: var(--accent-cyan); margin-bottom: 6px;">🔗 Open Source Repository</h4>
        <p style="font-size: 0.88rem; color: var(--text-secondary); margin-bottom: 12px;">Review complete source code, dataset definitions, and documentation on GitHub.</p>
        <a href="${activeStudy.githubUrl}" target="_blank" class="btn btn-primary" style="display: inline-flex;">View Project on GitHub &rarr;</a>
      </div>
    `;
  }
}

// 4. Lightbox functionality
function initLightbox() {
  const lightbox = document.getElementById('lightbox-modal');
  const closeBtn = document.querySelector('.lightbox-close');

  if (closeBtn && lightbox) {
    closeBtn.addEventListener('click', closeLightbox);
    lightbox.addEventListener('click', (e) => {
      if (e.target === lightbox) closeLightbox();
    });
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && lightbox.classList.contains('open')) {
        closeLightbox();
      }
    });
  }
}

window.openLightbox = function(url, caption) {
  const lightbox = document.getElementById('lightbox-modal');
  const img = document.getElementById('lightbox-img');
  const captionEl = document.getElementById('lightbox-caption');

  if (lightbox && img) {
    img.src = url;
    captionEl.textContent = caption || '';
    lightbox.classList.add('open');
  }
};

function closeLightbox() {
  const lightbox = document.getElementById('lightbox-modal');
  if (lightbox) lightbox.classList.remove('open');
}

// 5. Clipboard & Toast
function initClipboard() {
  const copyBtn = document.getElementById('copy-email-btn');
  if (copyBtn) {
    copyBtn.addEventListener('click', () => {
      navigator.clipboard.writeText('mg6666558@gmail.com').then(() => {
        showToast('Email copied to clipboard: mg6666558@gmail.com');
      }).catch(err => {
        console.error('Copy failed:', err);
      });
    });
  }
}

function showToast(msg) {
  let toast = document.getElementById('toast-msg');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'toast-msg';
    toast.className = 'toast-msg';
    document.body.appendChild(toast);
  }
  toast.innerHTML = `<span>✓</span> <span>${msg}</span>`;
  toast.classList.add('show');
  setTimeout(() => {
    toast.classList.remove('show');
  }, 3200);
}

// 6. Smooth Scroll
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const targetId = this.getAttribute('href');
      if (targetId === '#' || targetId === '') return;
      const targetEl = document.querySelector(targetId);
      if (targetEl) {
        e.preventDefault();
        targetEl.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });
}

function escapeHtml(str) {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}
