// Scroll reveal
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry, i) => {
    if (entry.isIntersecting) {
      setTimeout(() => entry.target.classList.add('on'), i * 60);
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.08 });
document.querySelectorAll('.r').forEach(el => observer.observe(el));

// Nav scroll state
const nav = document.getElementById('nav');
window.addEventListener('scroll', () => {
  nav.classList.toggle('scrolled', window.scrollY > 40);
}, { passive: true });

// Mobile menu
const burger = document.querySelector('.nav-burger');
const navMobile = document.getElementById('navMobile');

burger?.addEventListener('click', () => {
  navMobile.classList.toggle('open');
});

navMobile?.querySelectorAll('a').forEach(a => {
  a.addEventListener('click', () => navMobile.classList.remove('open'));
});

// FAQ accordion
document.querySelectorAll('.faq-q').forEach(btn => {
  btn.addEventListener('click', () => {
    const answer = btn.closest('.faq-item').querySelector('.faq-a');
    const isOpen = btn.classList.contains('open');

    document.querySelectorAll('.faq-q').forEach(b => {
      b.classList.remove('open');
      b.closest('.faq-item').querySelector('.faq-a').classList.remove('open');
    });

    if (!isOpen) {
      btn.classList.add('open');
      answer.classList.add('open');
    }
  });
});

// Smooth anchor scroll with nav offset
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    const target = document.querySelector(a.getAttribute('href'));
    if (!target) return;
    e.preventDefault();
    const offset = 72;
    const top = target.getBoundingClientRect().top + window.scrollY - offset;
    window.scrollTo({ top, behavior: 'smooth' });
  });
});
