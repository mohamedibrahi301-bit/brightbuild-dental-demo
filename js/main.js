/* BrightBuild Studio — Dental Practice HTML Template v1.0 */

(function () {
  'use strict';

  /* ─── Demo mode (GitHub Pages preview only) ─── */
  if (window.location.hostname === 'mohamedibrahi301-bit.github.io') {
    /* Buy banner */
    var banner = document.createElement('div');
    banner.style.cssText = 'position:fixed;top:0;left:0;right:0;z-index:9999;background:#1a3a5c;color:#fff;text-align:center;padding:10px 48px 10px 16px;font:600 13px/1.4 Inter,sans-serif;';
    banner.innerHTML = 'You are viewing the live demo. <a href="https://brightbuild.gumroad.com/l/dental-practice-website-template" style="color:#7dd3fc;text-decoration:underline;">Get the full 4-page template for $15 →</a><button onclick="this.parentElement.remove();document.body.style.paddingTop=\'\';" style="position:absolute;right:12px;top:50%;transform:translateY(-50%);background:none;border:none;color:#fff;font-size:20px;cursor:pointer;line-height:1;">×</button>';
    document.body.prepend(banner);
    document.body.style.paddingTop = '42px';

    /* Replace hero city placeholder */
    document.querySelectorAll('.eyebrow').forEach(function(el) {
      if (el.textContent.includes('[Your City')) el.textContent = 'Dental Care in Scarsdale, NY';
    });

    /* Replace hero image placeholder with a styled stand-in */
    var heroImg = document.querySelector('.hero-img');
    if (heroImg) {
      heroImg.innerHTML = '';
      heroImg.style.cssText += 'background:linear-gradient(135deg,#e8f4fd 0%,#c8e6f9 50%,#a8d8f0 100%);border-radius:12px;display:flex;align-items:center;justify-content:center;min-height:280px;';
      var imgLabel = document.createElement('p');
      imgLabel.style.cssText = 'color:#2a6496;font-weight:600;font-size:15px;text-align:center;padding:20px;';
      imgLabel.textContent = 'Your clinic photo goes here';
      heroImg.appendChild(imgLabel);
    }

    /* Replace testimonial cite placeholders with real-sounding names */
    var cites = document.querySelectorAll('cite');
    var names = ['— Sarah M., Google Review', '— James K., Google Review', '— David L., Yelp Review'];
    cites.forEach(function(cite, i) {
      if (cite.textContent.includes('Patient Name')) cite.textContent = names[i] || names[0];
    });

    /* Hide instructional text in review section */
    document.querySelectorAll('.section-sub').forEach(function(el) {
      if (el.textContent.includes('Replace these')) el.style.display = 'none';
    });

    /* Point footer attribution links to Gumroad (brightbuild.online not live yet) */
    document.querySelectorAll('a[href*="brightbuild.online"]').forEach(function(a) {
      a.href = 'https://brightbuild.gumroad.com';
      a.target = '_blank';
    });

    /* Contact form: show fake success on demo instead of posting to dead endpoint */
    document.addEventListener('submit', function(e) {
      if (e.target && e.target.id === 'contact-form') {
        e.preventDefault();
        var msg = document.getElementById('form-msg');
        if (msg) {
          msg.textContent = 'Demo only — in your live site this sends a real message.';
          msg.style.color = '#2a6496';
          msg.style.display = 'block';
        }
      }
    }, true);
  }

  /* ─── Mobile nav ─── */
  var hamburger = document.getElementById('hamburger');
  var mobileNav = document.getElementById('mobile-nav');
  if (hamburger && mobileNav) {
    hamburger.addEventListener('click', function () {
      var isOpen = mobileNav.classList.toggle('open');
      hamburger.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    });
    document.addEventListener('click', function (e) {
      if (!hamburger.contains(e.target) && !mobileNav.contains(e.target)) {
        mobileNav.classList.remove('open');
        hamburger.setAttribute('aria-expanded', 'false');
      }
    });
  }

  /* ─── Active nav link ─── */
  var page = location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a, .mobile-nav a').forEach(function (a) {
    if (a.getAttribute('href') === page) a.classList.add('active');
  });

  /* ─── Scroll fade-in animations ─── */
  var fadeEls = document.querySelectorAll('.fade-in');
  if ('IntersectionObserver' in window && fadeEls.length) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) {
          e.target.classList.add('visible');
          io.unobserve(e.target);
        }
      });
    }, { threshold: 0.1 });
    fadeEls.forEach(function (el) { io.observe(el); });
  } else {
    fadeEls.forEach(function (el) { el.classList.add('visible'); });
  }

  /* ─── Contact form basic validation ─── */
  var form = document.getElementById('contact-form');
  if (form) {
    form.addEventListener('submit', function (e) {
      var valid = true;
      form.querySelectorAll('[required]').forEach(function (field) {
        if (!field.value.trim()) {
          field.style.borderColor = '#e05252';
          valid = false;
        } else {
          field.style.borderColor = '';
        }
      });
      if (!valid) {
        e.preventDefault();
        var msg = document.getElementById('form-msg');
        if (msg) {
          msg.textContent = 'Please fill in all required fields.';
          msg.style.color = '#b3261e';
          msg.style.display = 'block';
        }
      }
    });
  }

})();
