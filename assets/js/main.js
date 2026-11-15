/* ===== Megatek: core (header, footer, interactions) ===== */
(function () {
  'use strict';
  var d = document, root = d.documentElement;
  root.classList.add('js');
  var file = (location.pathname.split('/').pop() || 'index.html');
  var page = file.replace('.html', '') || 'index';
  d.body.classList.add('page-' + page);
  function $(s, c) { return (c || d).querySelector(s); }
  function $$(s, c) { return Array.prototype.slice.call((c || d).querySelectorAll(s)); }

  var PHONE1 = '08033146625', PHONE2 = '08092566265', WA = '2348033146625', MAIL = 'megatek@info.com';
  window.MK = { WA: WA, MAIL: MAIL };

  var mark = '<img class="brand-mark" src="assets/images/logo.png" alt="">';
  window.MK.mark = mark;

  var links = [['index.html', 'Home'], ['services.html', 'Services'], ['portfolio.html', 'Portfolio'], ['products.html', 'Products'], ['academy.html', 'ICT Academy'], ['blog.html', 'Blog'], ['about.html', 'About']];

  /* ---------- Header ---------- */
  var hs = $('[data-site-header]');
  if (hs) {
    hs.outerHTML = '<div class="scroll-progress" aria-hidden="true"></div><header class="site-header"><div class="header-inner">' +
      '<a class="brand" href="index.html" aria-label="MEGATEK home">' + mark + '<span class="brand-name">MEGA<b>TEK</b><small>COMMUNICATIONS &amp; COMPUTERS</small></span></a>' +
      '<button class="nav-toggle" type="button" aria-expanded="false" aria-controls="site-nav" aria-label="Open menu"><span class="burger"></span></button>' +
      '<nav class="site-nav" id="site-nav" aria-label="Main">' + links.map(function (l) {
        return '<a href="' + l[0] + '"' + (l[0] === file || (file === '' && l[0] === 'index.html') ? ' aria-current="page"' : '') + '>' + l[1] + '</a>';
      }).join('') + '<a class="nav-cta" href="contact.html">Start a project</a></nav></div></header>';
  }
  var tg = $('.nav-toggle'), nav = $('.site-nav');
  if (tg) tg.addEventListener('click', function () {
    var o = nav.classList.toggle('is-open'); tg.classList.toggle('is-open', o);
    tg.setAttribute('aria-expanded', o ? 'true' : 'false');
    tg.setAttribute('aria-label', o ? 'Close menu' : 'Open menu');
  });

  /* ---------- Footer ---------- */
  var fs = $('[data-site-footer]');
  if (fs) {
    var footerCta = '';
    if (['index', 'services', 'portfolio', 'products', 'about'].indexOf(page) === -1) {
      var ctaTitle = 'Take your business to the <span class="grad">next level</span>.';
      var ctaCopy = 'Tell us what you want to build. We reply to messages within working hours.';
      var ctaClass = '';

      if (page === 'academy') {
        ctaTitle = 'Turn your ICT skills into <span class="grad">real projects.</span>';
        ctaCopy = 'Ask about our courses or talk to the team about your next digital project.';
        ctaClass = ' footer-cta--centered';
      } else if (page === 'blog') {
        ctaTitle = 'Have a question about <span class="grad">something you read?</span>';
        ctaCopy = 'Talk with the Megatek team about practical digital solutions for your business.';
        ctaClass = ' footer-cta--centered';
      }

      footerCta = `
        <div class="footer-cta${ctaClass}">
          <div>
            <h2>${ctaTitle}</h2>
            <p>${ctaCopy}</p>
          </div>
          <a class="btn" href="contact.html">
            Contact us <i class="bi bi-arrow-up-right" aria-hidden="true"></i>
          </a>
        </div>`;
    }

    var exploreLinks = links.map(function (link) {
      return `<li><a href="${link[0]}">${link[1]}</a></li>`;
    }).join('') + '<li><a href="domains.html">Domains</a></li><li><a href="contact.html">Contact</a></li>';

    var serviceNames = [
      'Web development',
      'eCommerce',
      'Digital marketing',
      'Branding &amp; creative',
      'Hosting &amp; domains',
      'SEO'
    ];
    var serviceLinks = serviceNames.map(function (name) {
      return `<li><a href="services.html">${name}</a></li>`;
    }).join('');

    var contactLinks = `
      <li><span>Phone</span><a href="tel:+234${PHONE1.slice(1)}">${PHONE1}</a></li>
      <li><span>Phone</span><a href="tel:+234${PHONE2.slice(1)}">${PHONE2}</a></li>
      <li><span>Email</span><a href="mailto:${MAIL}">${MAIL}</a></li>
      <li><span>Agege office</span>Primaltek Plaza, Agege, Lagos</li>
      <li><span>Lagos Island office</span>City Hall, Lagos Island</li>
      <li><a href="http://megatek.com.ng:2095/" target="_blank" rel="noreferrer">Staff mail</a></li>`;

    fs.outerHTML = `
      <footer class="site-footer">
        <div class="container">
          ${footerCta}
          <div class="footer-grid">
            <div class="footer-col footer-about">
              <a class="brand" href="index.html" aria-label="MEGATEK home">
                ${mark}
                <span class="brand-name">MEGA<b>TEK</b><small>COMMUNICATIONS &amp; COMPUTERS</small></span>
              </a>
              <p>
                Your trusted development partner: websites, online stores, apps and IT services for
                businesses in Lagos and across Nigeria.
              </p>
              <div class="socials" role="group" aria-label="Social links">
                <a href="https://twitter.com/megatekng" target="_blank" rel="noreferrer" aria-label="Megatek on X">
                  <i class="bi bi-twitter-x" aria-hidden="true"></i>
                </a>
                <a href="https://wa.me/${WA}" target="_blank" rel="noreferrer" aria-label="Megatek on WhatsApp">
                  <i class="bi bi-whatsapp" aria-hidden="true"></i>
                </a>
                <a href="mailto:${MAIL}" aria-label="Email Megatek">
                  <i class="bi bi-envelope-fill" aria-hidden="true"></i>
                </a>
              </div>
            </div>
            <div class="footer-col">
              <h4>Explore</h4>
              <ul>${exploreLinks}</ul>
            </div>
            <div class="footer-col">
              <h4>Services</h4>
              <ul>${serviceLinks}</ul>
            </div>
            <div class="footer-col">
              <h4>Reach us</h4>
              <ul class="footer-contact-list">${contactLinks}</ul>
            </div>
          </div>
          <div class="footer-bottom">
            <span>&copy; <span data-year></span> MEGATEK Communications and Computers. All rights reserved.</span>
            <a href="#top">Back to top &uarr;</a>
          </div>
        </div>
      </footer>`;
    var y = $('[data-year]'); if (y) y.textContent = new Date().getFullYear();
  }

  /* ---------- Scroll progress / header state / reveal ---------- */
  var bar = $('.scroll-progress'), hdr = $('.site-header');
  function onScroll() {
    var h = root, max = h.scrollHeight - h.clientHeight;
    if (bar) bar.style.transform = 'scaleX(' + (max > 0 ? h.scrollTop / max : 0) + ')';
    if (hdr) hdr.classList.toggle('is-scrolled', h.scrollTop > 30);
  }
  window.addEventListener('scroll', onScroll, { passive: true }); onScroll();
  var rv = $$('.reveal');
  if ('IntersectionObserver' in window) {
    var io = new IntersectionObserver(function (es) { es.forEach(function (e) { if (e.isIntersecting) { e.target.classList.add('is-visible'); io.unobserve(e.target); } }); }, { threshold: .12, rootMargin: '0px 0px -40px 0px' });
    rv.forEach(function (el) { io.observe(el); });
  } else rv.forEach(function (el) { el.classList.add('is-visible'); });

  /* ---------- Service tabs ---------- */
  var tabs = $$('.svc-tab'), panels = $$('.svc-panel');
  function openSvc(id) {
    tabs.forEach(function (t) { t.setAttribute('aria-selected', t.dataset.svc === id ? 'true' : 'false'); });
    panels.forEach(function (p) { p.classList.toggle('is-active', p.id === 'svc-' + id); });
  }
  tabs.forEach(function (t) { t.addEventListener('click', function () { openSvc(t.dataset.svc); if (window.innerWidth < 960) { var p = $('#svc-' + t.dataset.svc); p && p.scrollIntoView({ behavior: 'smooth', block: 'start' }); } }); });
  if (tabs.length) openSvc((location.hash || '').replace('#', '') && $('#svc-' + location.hash.replace('#', '')) ? location.hash.replace('#', '') : tabs[0].dataset.svc);

  /* ---------- Portfolio filter ---------- */
  var fl = $$('.filter'), works = $$('.work[data-cat]');
  fl.forEach(function (b) {
    b.addEventListener('click', function () {
      fl.forEach(function (x) { x.setAttribute('aria-pressed', x === b ? 'true' : 'false'); });
      var c = b.dataset.filter, n = 0;
      works.forEach(function (w) {
        var show = c === 'all' || w.dataset.cat === c;
        w.classList.toggle('is-hidden', !show);
        if (show) { w.classList.remove('is-showing'); void w.offsetWidth; w.style.animationDelay = (n++ * 40) + 'ms'; w.classList.add('is-showing'); }
      });
    });
  });

  /* ---------- Blog search ---------- */
  var bs = $('[data-blog-search]');
  if (bs) bs.addEventListener('input', function () {
    var q = bs.value.toLowerCase().trim(), n = 0;
    $$('.post').forEach(function (p) { var m = !q || p.textContent.toLowerCase().indexOf(q) > -1; p.classList.toggle('is-hidden', !m); if (m) n++; });
    var e = $('.empty'); if (e) e.classList.toggle('is-on', n === 0);
  });

  /* ---------- Project configurator ---------- */
  var cfg = $('[data-config]');
  if (cfg) {
    var types = { website: 'business-website', store: 'online-store', app: 'mobile-app', software: 'custom-software' };
    var st = { type: 'store', add: { payments: true, seo: true } };
    var out = $('[data-config-out]'), names = { payments: 'payments', seo: 'seo', hosting: 'hosting', branding: 'branding', maintenance: 'maintenance', chat: 'live-chat' };
    function brief() {
      var f = Object.keys(st.add).filter(function (k) { return st.add[k]; });
      return 'Hello Megatek, I would like to build a ' + types[st.type].replace(/-/g, ' ') + (f.length ? ' with: ' + f.map(function (k) { return names[k]; }).join(', ') : '') + '. Please get in touch.';
    }
    function render() {
      var f = Object.keys(st.add).filter(function (k) { return st.add[k]; });
      var feats = f.length ? f.map(function (k) { return '<span class="t-s">"' + names[k] + '"</span>'; }).join(', ') : '';
      out.innerHTML =
        '<span class="t-c">// project.brief.json</span>\n{\n  <span class="t-f">"type"</span>: <span class="t-s">"' + types[st.type] + '"</span>,\n  <span class="t-f">"features"</span>: [' + feats + '],\n  <span class="t-f">"mobileFirst"</span>: <span class="t-n">true</span>,\n  <span class="t-f">"ssl"</span>: <span class="t-n">true</span>,\n  <span class="t-f">"builtBy"</span>: <span class="t-s">"Megatek"</span>\n}\n<span class="t-o">&gt; ready to build<span class="caret"></span></span>';
      var wa = $('[data-config-wa]'); if (wa) wa.href = 'https://wa.me/' + WA + '?text=' + encodeURIComponent(brief());
    }
    $$('[data-type]', cfg).forEach(function (b) { b.addEventListener('click', function () { st.type = b.dataset.type; $$('[data-type]', cfg).forEach(function (x) { x.setAttribute('aria-pressed', x === b ? 'true' : 'false'); }); render(); }); });
    $$('[data-add]', cfg).forEach(function (b) { b.addEventListener('click', function () { var k = b.dataset.add; st.add[k] = !st.add[k]; b.setAttribute('aria-pressed', st.add[k] ? 'true' : 'false'); render(); }); });
    var send = $('[data-config-send]'); if (send) send.addEventListener('click', function () { try { sessionStorage.setItem('mk-brief', brief()); } catch (e) {} });
    render();
  }

  /* ---------- Contact form (opens the visitor's email app) ---------- */
  var cf = $('[data-contact-form]');
  if (cf) {
    try { var b = sessionStorage.getItem('mk-brief'); if (b) { cf.message.value = b; cf.subject.value = 'New project enquiry'; } } catch (e) {}
    cf.addEventListener('submit', function (e) {
      e.preventDefault();
      var body = 'Name: ' + cf.name.value + '\nEmail: ' + cf.email.value + (cf.phone && cf.phone.value ? '\nPhone: ' + cf.phone.value : '') + '\n\n' + cf.message.value;
      var s = $('.form-status', cf); if (s) s.textContent = '> opening your email app… (or use WhatsApp below)';
      location.href = 'mailto:' + MAIL + '?subject=' + encodeURIComponent(cf.subject.value || 'Website enquiry') + '&body=' + encodeURIComponent(body);
    });
  }

  /* ---------- Domain search (sends the request to the team) ---------- */
  var ds = $('[data-domain-form]');
  if (ds) ds.addEventListener('submit', function (e) {
    e.preventDefault();
    var v = $('input', ds).value.trim().toLowerCase().replace(/^https?:\/\//, '').replace(/\/.*$/, '');
    if (!v) return;
    var r = $('[data-domain-result]');
    var msg = 'Hello Megatek, please check if the domain ' + v + ' is available for registration.';
    r.innerHTML = '<div class="domain-result"><div><b class="mono">' + v.replace(/</g, '') + '</b><p>Send this to our team and we will confirm availability and next steps.</p></div><div class="hero-actions"><a class="btn btn--sm" target="_blank" rel="noreferrer" href="https://wa.me/' + WA + '?text=' + encodeURIComponent(msg) + '"><i class="bi bi-whatsapp"></i> Check on WhatsApp</a><a class="btn btn--sm btn--ghost" href="mailto:' + MAIL + '?subject=' + encodeURIComponent('Domain check: ' + v) + '&body=' + encodeURIComponent(msg) + '"><i class="bi bi-envelope"></i> Email us</a></div></div>';
  });
})();

/* ===== Megatek: effects + chatbot ===== */
(function () {
  'use strict';
  var d = document, root = d.documentElement;
  var fine = window.matchMedia('(hover:hover) and (pointer:fine)').matches;
  var reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  function $(s, c) { return (c || d).querySelector(s); }
  function $$(s, c) { return Array.prototype.slice.call((c || d).querySelectorAll(s)); }
  function store(k, v) { try { if (v === undefined) return sessionStorage.getItem(k); sessionStorage.setItem(k, v); } catch (e) {} }
  var isHome = d.body.classList.contains('page-index');

  /* ---------- Split headline words ---------- */
  var wi;
  function splitNode(node) {
    Array.prototype.slice.call(node.childNodes).forEach(function (n) {
      if (n.nodeType === 3) {
        var frag = d.createDocumentFragment();
        n.textContent.split(/(\s+)/).forEach(function (part) {
          if (!part) return;
          if (/^\s+$/.test(part)) { frag.appendChild(d.createTextNode(' ')); return; }
          var w = d.createElement('span'); w.className = 'word';
          var i = d.createElement('span'); i.textContent = part; i.style.setProperty('--i', wi++);
          w.appendChild(i); w.setAttribute('aria-hidden', 'true'); frag.appendChild(w);
        });
        node.replaceChild(frag, n);
      } else if (n.nodeType === 1) splitNode(n);
    });
  }
  $$('.code-line').forEach(function (l) { l.style.setProperty('--n', l.textContent.length); });
  var heads = $$('.hero h1, .page-hero h1, main h2');
  heads.forEach(function (h) { h.setAttribute('aria-label', h.textContent.replace(/\s+/g, ' ').trim()); wi = 0; splitNode(h); h.classList.add('split'); });
  var heroH = $$('.hero h1, .page-hero h1');
  function go() { heroH.forEach(function (h) { h.classList.add('is-in'); }); root.classList.add('hero-go'); $$('.code-line').forEach(function (l) { l.style.animationPlayState = 'running'; }); }
  if ('IntersectionObserver' in window) {
    var sio = new IntersectionObserver(function (es) { es.forEach(function (e) { if (e.isIntersecting) { e.target.classList.add('is-in'); sio.unobserve(e.target); } }); }, { threshold: .35 });
    heads.forEach(function (h) { if (heroH.indexOf(h) < 0) sio.observe(h); });
  } else heads.forEach(function (h) { h.classList.add('is-in'); });

  /* ---------- Boot screen (home, once per session) ---------- */
  if (isHome && !store('mk-boot') && !reduce) {
    store('mk-boot', '1');
    var b = d.createElement('div'); b.className = 'boot';
    var L = ['> booting megatek.sys', '<span class="ok">✓</span> loading web, ecommerce &amp; app modules', '<span class="ok">✓</span> connecting Paystack · Flutterwave · Interswitch', '<span class="ok">✓</span> ssl certificate .......... active', '<span class="ok">&gt;</span> ready'];
    b.innerHTML = '<div class="boot-box">' + L.map(function (l, i) { return '<span class="l" style="animation-delay:' + (i * .28) + 's">' + l + '</span>'; }).join('') + '<div class="boot-bar"><i></i></div></div>';
    d.body.appendChild(b); root.style.overflow = 'hidden';
    setTimeout(function () { b.classList.add('is-leaving'); root.style.overflow = ''; go(); }, 1900);
    setTimeout(function () { b.remove(); }, 2600);
  } else setTimeout(go, 100);

  /* ---------- Network canvas (hero / page-hero) ---------- */
  function network(host) {
    if (reduce) return;
    var c = d.createElement('canvas'); c.className = 'fx-canvas'; c.setAttribute('aria-hidden', 'true'); host.insertBefore(c, host.firstChild);
    var g = c.getContext('2d'), W, H, dpr = Math.min(window.devicePixelRatio || 1, 2), N = [], run = true, mx = -999, my = -999;
    function size() { W = host.clientWidth; H = host.clientHeight; c.width = W * dpr; c.height = H * dpr; g.setTransform(dpr, 0, 0, dpr, 0, 0); }
    size();
    var n = W < 700 ? 28 : 58;
    for (var i = 0; i < n; i++) N.push({ x: Math.random() * W, y: Math.random() * H, vx: (Math.random() - .5) * .35, vy: (Math.random() - .5) * .35, r: Math.random() * 1.6 + .8 });
    host.addEventListener('mousemove', function (e) { var r = host.getBoundingClientRect(); mx = e.clientX - r.left; my = e.clientY - r.top; });
    host.addEventListener('mouseleave', function () { mx = my = -999; });
    window.addEventListener('resize', size);
    if ('IntersectionObserver' in window) new IntersectionObserver(function (es) { run = es[0].isIntersecting; }).observe(host);
    (function frame() {
      if (run) {
        g.clearRect(0, 0, W, H);
        for (var i = 0; i < N.length; i++) {
          var p = N[i]; p.x += p.vx; p.y += p.vy;
          if (p.x < 0 || p.x > W) p.vx *= -1; if (p.y < 0 || p.y > H) p.vy *= -1;
          var dx = p.x - mx, dy = p.y - my, dm = Math.sqrt(dx * dx + dy * dy);
          if (dm < 140) { p.x += dx / dm * .8; p.y += dy / dm * .8; }
          for (var j = i + 1; j < N.length; j++) {
            var q = N[j], ex = p.x - q.x, ey = p.y - q.y, dist = Math.sqrt(ex * ex + ey * ey);
            if (dist < 135) { g.strokeStyle = 'rgba(198,40,40,' + (1 - dist / 135) * .18 + ')'; g.lineWidth = 1; g.beginPath(); g.moveTo(p.x, p.y); g.lineTo(q.x, q.y); g.stroke(); }
          }
          g.fillStyle = i % 5 === 0 ? 'rgba(181,18,27,.75)' : 'rgba(198,40,40,.55)'; g.beginPath(); g.arc(p.x, p.y, p.r, 0, 6.283); g.fill();
        }
      }
      requestAnimationFrame(frame);
    })();
  }
  $$('.hero, .page-hero').forEach(network);

  /* ---------- Marquee (home + services) ---------- */
  function mq(host, html, speed, rev) {
    var v = d.createElement('div'); v.className = 'mq-viewport'; v.setAttribute('aria-hidden', 'true');
    var t = d.createElement('div'); t.className = 'mq-track' + (rev ? ' is-rev' : ''); t.style.setProperty('--mq', speed + 's'); t.innerHTML = html + html;
    v.appendChild(t); host.appendChild(v);
  }
  var m1 = $('[data-marquee]');
  if (m1) {
    var items = [['bi-credit-card-2-front', 'Paystack'], ['bi-wallet2', 'Flutterwave'], ['bi-bank', 'Interswitch'], ['bi-shield-lock-fill', 'Free SSL'], ['bi-graph-up-arrow', 'SEO'], ['bi-chat-dots-fill', 'Live chat'], ['bi-bar-chart-line-fill', 'Analytics'], ['bi-hdd-network-fill', 'Hosting'], ['bi-globe2', 'Domains'], ['bi-phone-fill', 'Mobile apps']];
    mq(m1, items.map(function (i) { return '<span class="mq-item"><i class="bi ' + i[0] + '"></i>' + i[1] + '</span><i class="bi bi-slash-lg mq-dot"></i>'; }).join(''), 45, false);
  }
  var m2 = $('[data-marquee-big]');
  if (m2) {
    var w = ['Websites', 'Stores', 'Software', 'Apps', 'Branding', 'Hosting'];
    var h = w.map(function (x, i) { return '<span class="mq-item' + (i % 2 ? ' is-fill' : '') + '">' + x + '</span><i class="bi bi-asterisk mq-dot" style="font-size:28px"></i>'; }).join('');
    mq(m2, h, 60, false);
  }

  /* ---------- Tilt + spotlight + magnetic ---------- */
  if (fine && !reduce) {
    $$('.bento-item, .prod-card, .work, .post, .course, .principle, .office, .tld, .feat, .contact-card, .opt, .stat').forEach(function (el) {
      if (el.classList.contains('opt') || el.classList.contains('stat')) { return; }
      el.setAttribute('data-tilt', '');
      var s = d.createElement('span'); s.className = 'spot'; s.setAttribute('aria-hidden', 'true'); el.appendChild(s);
      el.addEventListener('mousemove', function (e) {
        var r = el.getBoundingClientRect(), x = (e.clientX - r.left) / r.width, y = (e.clientY - r.top) / r.height;
        el.style.setProperty('--rx', ((.5 - y) * 7).toFixed(2) + 'deg'); el.style.setProperty('--ry', ((x - .5) * 9).toFixed(2) + 'deg');
        el.style.setProperty('--mx', (x * 100).toFixed(1) + '%'); el.style.setProperty('--my', (y * 100).toFixed(1) + '%');
      });
      el.addEventListener('mouseleave', function () { el.style.setProperty('--rx', '0deg'); el.style.setProperty('--ry', '0deg'); });
    });
    $$('.btn, .nav-cta').forEach(function (b) {
      b.addEventListener('mousemove', function (e) { var r = b.getBoundingClientRect(); b.style.translate = ((e.clientX - r.left - r.width / 2) * .2).toFixed(1) + 'px ' + ((e.clientY - r.top - r.height / 2) * .28).toFixed(1) + 'px'; });
      b.addEventListener('mouseleave', function () { b.style.translate = ''; });
    });
    /* cursor */
    var dot = d.createElement('div'), ring = d.createElement('div'); dot.className = 'cursor-dot'; ring.className = 'cursor-ring'; d.body.appendChild(ring); d.body.appendChild(dot);
    var mx = -100, my = -100, rx = -100, ry = -100;
    window.addEventListener('mousemove', function (e) { mx = e.clientX; my = e.clientY; root.classList.add('has-cursor'); dot.style.transform = 'translate(' + mx + 'px,' + my + 'px)'; });
    (function l() { rx += (mx - rx) * .16; ry += (my - ry) * .16; ring.style.transform = 'translate(' + rx + 'px,' + ry + 'px)'; requestAnimationFrame(l); })();
    d.addEventListener('mouseover', function (e) { ring.classList.toggle('is-hover', !!e.target.closest('a, button, input, textarea, select')); });
  }

  /* ---------- Counters ---------- */
  var cs = $$('[data-count]');
  function count(el) {
    var target = parseInt(el.dataset.count, 10), suf = el.dataset.suffix || '', t0 = null;
    function step(t) { if (!t0) t0 = t; var k = Math.min((t - t0) / 1800, 1), e = k === 1 ? 1 : 1 - Math.pow(2, -10 * k); el.textContent = Math.round(target * e) + suf; if (k < 1) requestAnimationFrame(step); }
    requestAnimationFrame(step);
  }
  if ('IntersectionObserver' in window && !reduce) {
    var cio = new IntersectionObserver(function (es) { es.forEach(function (e) { if (e.isIntersecting) { count(e.target); cio.unobserve(e.target); } }); }, { threshold: .6 });
    cs.forEach(function (c) { c.textContent = '0' + (c.dataset.suffix || ''); cio.observe(c); });
  } else cs.forEach(function (c) { c.textContent = c.dataset.count + (c.dataset.suffix || ''); });

  /* ---------- Image fallbacks (hotlinked screenshots) ---------- */
  $$('img[data-fallback]').forEach(function (im) {
    im.addEventListener('error', function () { im.style.display = 'none'; });
  });

  /* ---------- To top + page transitions ---------- */
  var top = d.createElement('button'); top.type = 'button'; top.className = 'to-top'; top.setAttribute('aria-label', 'Back to top'); top.innerHTML = '<i class="bi bi-arrow-up"></i>';
  top.addEventListener('click', function () { window.scrollTo({ top: 0, behavior: 'smooth' }); }); d.body.appendChild(top);
  window.addEventListener('scroll', function () { top.classList.toggle('is-on', window.scrollY > 700); }, { passive: true });
  d.addEventListener('click', function (e) {
    var a = e.target.closest('a[href]');
    if (!a || e.defaultPrevented || e.metaKey || e.ctrlKey || e.shiftKey || a.target === '_blank') return;
    var h = a.getAttribute('href');
    if (!/^[\w-]+\.html(\?[^#]*)?(#.*)?$/.test(h)) return;
    e.preventDefault(); d.body.classList.add('page-leave'); setTimeout(function () { location.href = h; }, 280);
  });
  window.addEventListener('pageshow', function (e) { if (e.persisted) d.body.classList.remove('page-leave'); });

  /* ---------- Chatbot "Mega" ---------- */
  var KB = [
    { k: ['service', 'offer', 'what do you do', 'what you do'], a: 'We offer web development, eCommerce, digital marketing, branding & creative, web maintenance, hosting, SEO, social media management, web design, data recovery, video animation and networking.', l: ['services.html', 'See all services'] },
    { k: ['ecommerce', 'store', 'shop', 'sell online', 'payment', 'paystack', 'flutterwave', 'interswitch', 'gateway'], a: 'We design and build online stores and integrate payment gateways such as Paystack, Flutterwave and Interswitch, plus eCommerce strategy, marketing and management.', l: ['services.html#ecommerce', 'eCommerce details'] },
    { k: ['domain', 'register', '.com', '.ng', 'extension'], a: 'Domain registration per year: .com $11.99, .net $12.99, .tech $4.99, .co $9.99, .website $11.99. Send us the name you want and we will confirm availability.', l: ['domains.html', 'Domains page'] },
    { k: ['host', 'hosting', 'server', 'vps', 'dedicated'], a: 'We offer web hosting from shared hosting up to dedicated servers, with free SSL and website maintenance available.', l: ['services.html#hosting', 'Hosting details'] },
    { k: ['seo', 'google', 'rank', 'traffic'], a: 'Our SEO service aims to increase site traffic, multiply leads and boost sales.', l: ['services.html#seo', 'SEO details'] },
    { k: ['price', 'cost', 'quote', 'how much', 'budget'], a: 'Pricing depends on what you need. Tell us your idea and we will send a quote. You can build a quick brief on the home page and send it to us.', l: ['contact.html', 'Request a quote'] },
    { k: ['portfolio', 'work', 'project', 'client', 'example'], a: 'We have built sites for banks & financial firms, schools, churches, stores, law firms, clinics and more. Browse the portfolio and open any live site.', l: ['portfolio.html', 'View portfolio'] },
    { k: ['product', 'software', 'hotel', 'school software', 'erp'], a: 'Our software products include Hotel Software, School Software and E-Commerce Software.', l: ['products.html', 'See products'] },
    { k: ['academy', 'course', 'train', 'autocad', 'revit', 'oracle', 'project management', 'learn'], a: 'ICT Academy courses include AutoCAD 2D & 3D, AutoCAD P&ID, Plant 3D and Electrical, Revit Architecture, Microsoft Project and Oracle 12c, and many more.', l: ['academy.html', 'ICT Academy'] },
    { k: ['blog', 'article', 'news', 'post'], a: 'Our blog covers payment gateways, website and mobile app security, app development and Nigerian fintech.', l: ['blog.html', 'Read the blog'] },
    { k: ['where', 'address', 'office', 'location', 'lagos', 'agege', 'island'], a: 'Mainland office: Suite B28, Primaltek Plaza, opposite Iju Garage, Pencinema, Agege, Lagos. Island office: City Hall, Catholic Mission Street, Lagos Island.', l: ['contact.html', 'Contact page'] },
    { k: ['phone', 'call', 'number', 'email', 'mail', 'whatsapp', 'contact', 'reach'], a: 'Call 08033146625 or 08092566265, email megatek@info.com, or message us on WhatsApp.', l: ['contact.html', 'Contact page'] },
    { k: ['about', 'who are you', 'company', 'megatek'], a: 'Megatek Communications and Computers is a Lagos-based web services company: your trusted development partner for websites, online stores and IT solutions.', l: ['about.html', 'About us'] },
    { k: ['hello', 'hi', 'hey', 'good morning', 'good afternoon', 'good evening'], a: 'Hello! I am Mega. Ask me about services, domains, hosting, products or how to reach the team.' },
    { k: ['thank'], a: 'You are welcome! Anything else I can help with?' }
  ];
  function answer(q) {
    q = q.toLowerCase(); var best = null, sc = 0;
    KB.forEach(function (it) { var s = 0; it.k.forEach(function (w) { if (q.indexOf(w) > -1) s += w.length; }); if (s > sc) { sc = s; best = it; } });
    return best || { a: 'I am not sure about that. Our team can help directly: call 08033146625 or send a message.', l: ['contact.html', 'Contact us'] };
  }
  var bot = d.createElement('div'); bot.className = 'chatbot';
  bot.innerHTML = '<button class="chatbot-fab" type="button" aria-expanded="false" aria-label="Open chat"><i class="bi bi-chat-dots-fill o"></i><i class="bi bi-x-lg x"></i></button>' +
    '<section class="chatbot-panel" aria-label="Chat with Mega" hidden><header class="chatbot-head">' + (window.MK ? window.MK.mark : '') + '<div><strong>Mega</strong><span>online · megatek assistant</span></div></header><div class="chatbot-body" aria-live="polite"></div><div class="chatbot-chips"></div><form class="chatbot-form"><input type="text" placeholder="Ask about our services…" aria-label="Your question" autocomplete="off"><button type="submit" aria-label="Send"><i class="bi bi-send-fill"></i></button></form></section>' +
    '<div class="chatbot-teaser">Questions? Ask Mega <b style="color:var(--mint)">✦</b></div>';
  d.body.appendChild(bot);
  var fab = $('.chatbot-fab', bot), panel = $('.chatbot-panel', bot), body = $('.chatbot-body', bot), chips = $('.chatbot-chips', bot), form = $('.chatbot-form', bot), inp = $('input', form), tz = $('.chatbot-teaser', bot), greeted = false;
  function add(t, who, l) {
    var m = d.createElement('div'); m.className = 'chatbot-msg chatbot-msg--' + who; m.textContent = t;
    if (l) { var a = d.createElement('a'); a.href = l[0]; a.textContent = l[1] + ' →'; m.appendChild(d.createElement('br')); m.appendChild(a); }
    body.appendChild(m); body.scrollTop = body.scrollHeight;
  }
  function ask(q) {
    if (!q.trim()) return; add(q, 'user');
    var t = d.createElement('div'); t.className = 'chatbot-msg chatbot-msg--bot chatbot-typing'; t.innerHTML = '<span></span><span></span><span></span>'; body.appendChild(t); body.scrollTop = body.scrollHeight;
    setTimeout(function () { t.remove(); var r = answer(q); add(r.a, 'bot', r.l); }, 600);
  }
  ['Services', 'Domain prices', 'Hosting', 'Contact', 'Products'].forEach(function (c) { var b = d.createElement('button'); b.type = 'button'; b.textContent = c; b.addEventListener('click', function () { ask(c); }); chips.appendChild(b); });
  fab.addEventListener('click', function () {
    var open = panel.hasAttribute('hidden'); tz.classList.remove('is-on');
    if (open) { panel.removeAttribute('hidden'); requestAnimationFrame(function () { bot.classList.add('is-open'); }); if (!greeted) { greeted = true; add('Hi, I am Mega. I can help with services, domains, hosting, products and contact details.', 'bot'); } setTimeout(function () { inp.focus(); }, 250); }
    else { bot.classList.remove('is-open'); setTimeout(function () { panel.setAttribute('hidden', ''); }, 250); }
    fab.setAttribute('aria-expanded', open ? 'true' : 'false');
  });
  form.addEventListener('submit', function (e) { e.preventDefault(); var q = inp.value; inp.value = ''; ask(q); });
  setTimeout(function () { if (!bot.classList.contains('is-open')) tz.classList.add('is-on'); }, 7000);
  setTimeout(function () { tz.classList.remove('is-on'); }, 17000);
})();
