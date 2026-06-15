/* BrightBuild Studio — Dental Practice HTML Template v1.0 */

(function () {
  'use strict';

  /* ─── Demo banner (GitHub Pages preview only) ─── */
  if (window.location.hostname === 'mohamedibrahi301-bit.github.io') {
    var banner = document.createElement('div');
    banner.style.cssText = 'position:fixed;top:0;left:0;right:0;z-index:9999;background:#1a3a5c;color:#fff;text-align:center;padding:10px 48px 10px 16px;font:600 13px/1.4 Inter,sans-serif;';
    banner.innerHTML = 'You are viewing the live demo. <a href="https://brightbuild.gumroad.com/l/dental-practice-website-template" style="color:#7dd3fc;text-decoration:underline;">Get the full 4-page template for $15 →</a><button onclick="this.parentElement.remove();document.body.style.paddingTop=\'\';" style="position:absolute;right:12px;top:50%;transform:translateY(-50%);background:none;border:none;color:#fff;font-size:20px;cursor:pointer;line-height:1;">×</button>';
    document.body.prepend(banner);
    document.body.style.paddingTop = '42px';
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
