/* ==========================================================================
   پارس آبی — Shared UI  (v2)
   ========================================================================== */

/* ناوبری اصلی — «محصولات» کشویی است و از دسته‌بندی‌های پنل پر می‌شود */
const NAV = [
  { href: 'index.html', label: 'خانه' },
  { href: 'about.html', label: 'درباره ما' },
  { href: 'contact.html', label: 'تماس با ما' }
];

/* لینک‌های «دسترسی سریع» فوتر — از پنل قابل تنظیم است */
const QUICK_LINKS_DEFAULT = [
  { href: 'shop.html?sort=popular', label: 'پرفروش‌ها' },
  { href: 'shop.html?cat=c1', label: 'پمپ‌ها' },
  { href: 'shop.html?cat=c6', label: 'لوله‌ها و اتصالات' },
  { href: 'shop.html?cat=c9', label: 'اتومات و ست کنترل' }
];

const ICONS_UI = {
  search: '<circle cx="11" cy="11" r="7"/><path d="M20 20l-3.5-3.5"/>',
  cart: '<circle cx="9" cy="20" r="1.6"/><circle cx="18" cy="20" r="1.6"/><path d="M2 3h3l2.4 11.2A2 2 0 0 0 9.4 16h8.2a2 2 0 0 0 2-1.6L21 7H6"/>',
  user: '<circle cx="12" cy="8" r="4"/><path d="M4 21c0-4 3.6-6.5 8-6.5s8 2.5 8 6.5"/>',
  heart: '<path d="M12 20s-7-4.4-7-9.2A4 4 0 0 1 12 8a4 4 0 0 1 7 2.8C19 15.6 12 20 12 20z"/>',
  menu: '<path d="M3 6h18M3 12h18M3 18h18"/>',
  close: '<path d="M6 6l12 12M18 6L6 18"/>',
  arrow: '<path d="M5 12h14M13 6l6 6-6 6"/>',
  phone: '<path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 1.9.7 2.8a2 2 0 0 1-.5 2.1L8.1 9.9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.8.7a2 2 0 0 1 1.7 2z"/>',
  mail: '<rect x="2" y="4" width="20" height="16" rx="2"/><path d="M2 7l10 6 10-6"/>',
  pin: '<path d="M21 10c0 6-9 12-9 12s-9-6-9-12a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/>',
  clock: '<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3.5 2"/>',
  truck: '<rect x="1" y="6" width="13" height="10" rx="2"/><path d="M14 9h4l3 3v4h-7z"/><circle cx="5.5" cy="18.5" r="1.8"/><circle cx="17.5" cy="18.5" r="1.8"/>',
  shield: '<path d="M12 2l8 3.5v6c0 5-3.4 9.2-8 10.5-4.6-1.3-8-5.5-8-10.5v-6z"/><path d="M9 12l2 2 4-4"/>',
  badge: '<circle cx="12" cy="9" r="6"/><path d="M8.5 14L7 22l5-2.5L17 22l-1.5-8"/>',
  headset: '<path d="M3 14v-2a9 9 0 0 1 18 0v2"/><rect x="1" y="13" width="4" height="7" rx="2"/><rect x="19" y="13" width="4" height="7" rx="2"/><path d="M21 19v1a3 3 0 0 1-3 3h-3"/>',
  plus: '<path d="M12 5v14M5 12h14"/>',
  check: '<path d="M20 6L9 17l-5-5"/>',
  trash: '<path d="M3 6h18M8 6V4h8v2M19 6l-1 14H6L5 6"/><path d="M10 11v5M14 11v5"/>',
  instagram: '<rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1"/>',
  telegram: '<path d="M21 4L2.5 11.5l5.5 2 2 6 3-3.5 5 3.5z"/><path d="M8 13.5L21 4"/>',
  whatsapp: '<path d="M21 12a9 9 0 0 1-13.3 7.9L3 21l1.2-4.6A9 9 0 1 1 21 12z"/><path d="M8.5 9.5c0 4 3 6.5 6 6.5.8 0 1.5-.7 1.5-1.5l-2-1-1 1c-1-.5-2-1.5-2.5-2.5l1-1-1-2c-.8 0-2 .7-2 1.5z"/>',
  filter: '<path d="M4 4h16l-6 8v8l-4-2v-6z"/>',
  grid: '<rect x="3" y="3" width="7" height="7" rx="1.5"/><rect x="14" y="3" width="7" height="7" rx="1.5"/><rect x="3" y="14" width="7" height="7" rx="1.5"/><rect x="14" y="14" width="7" height="7" rx="1.5"/>',
  spark: '<path d="M12 3l2 6 6 2-6 2-2 6-2-6-6-2 6-2z"/>',
  wave: '<path d="M2 12c2 0 2 2 4 2s2-2 4-2 2 2 4 2 2-2 4-2 2 2 4 2"/><path d="M2 18c2 0 2 2 4 2s2-2 4-2 2 2 4 2 2-2 4-2 2 2 4 2"/>',
  logout: '<path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/><path d="M16 17l5-5-5-5M21 12H9"/>',
  box: '<path d="M21 8l-9-5-9 5v8l9 5 9-5z"/><path d="M3 8l9 5 9-5M12 13v8"/>',
  lock: '<rect x="4" y="10" width="16" height="11" rx="2"/><path d="M8 10V7a4 4 0 0 1 8 0v3"/>'
};

function ui(name, cls) {
  return '<svg class="' + (cls || '') + '" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round">' + (ICONS_UI[name] || '') + '</svg>';
}

const LOGO_MARK = '<svg viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2.5c3.6 4.2 6 7.4 6 10.4a6 6 0 0 1-12 0c0-3 2.4-6.2 6-10.4z"/><path d="M9.5 13.5a2.5 2.5 0 0 0 2.5 2.5"/></svg>';

/* لوگو: اگر آپلود شده باشد تصویر، وگرنه نشان پیش‌فرض */
function logoMarkHtml(s) {
  if (s && s.logo) return '<span class="logo__mark logo__mark--img"><img src="' + s.logo + '" alt="' + esc(s.siteName) + '"></span>';
  return '<span class="logo__mark">' + LOGO_MARK + '</span>';
}

/* ---------- active nav ---------- */
function currentKey() {
  const file = (location.pathname.split('/').pop() || 'index.html');
  return file + location.search;
}
function navIsActive(href) {
  return currentKey() === href;
}
/* آیا صفحه فعلی زیرمجموعه «محصولات» است؟ */
function productsNavActive() {
  const file = (location.pathname.split('/').pop() || 'index.html');
  return file === 'shop.html' || file === 'product.html';
}

/* ---------- Header ---------- */
function renderHeader() {
  const s = Store.settings();
  const count = Store.cartCount();
  const sess = Store.session();
  const cats = Store.categories();
  const prods = Store.products();

  const navHtml = NAV.map(n =>
    '<a href="' + n.href + '" class="' + (navIsActive(n.href) ? 'is-active' : '') + '">' + n.label + '</a>'
  ).join('');

  /* کشویی محصولات — همه دسته‌ها از پنل مدیریت می‌آید */
  const catItems = cats.map(c => {
    const n = prods.filter(p => p.cat === c.id).length;
    return `<a href="shop.html?cat=${c.id}" class="nav__cat">
      <span class="nav__cat-ico">${icon(c.icon)}</span>
      <span class="nav__cat-body">
        <b>${esc(c.name)}</b>
        <span>${faNum(n)} محصول</span>
      </span>
    </a>`;
  }).join('');

  const productsDrop = `
    <div class="nav__drop ${productsNavActive() ? 'is-active' : ''}" id="navDrop">
      <button type="button" class="nav__btn" id="navDropBtn" aria-haspopup="true" aria-expanded="false">
        محصولات
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"><path d="M6 9l6 6 6-6"/></svg>
      </button>
      <div class="nav__panel" id="navPanel">
        <div class="nav__panel-head">
          <b>دسته‌بندی محصولات</b>
          <a href="shop.html">مشاهده همه محصولات ←</a>
        </div>
        <div class="nav__cats">
          ${catItems || '<div class="nav__empty">هنوز دسته‌بندی‌ای در پنل ساخته نشده است.</div>'}
        </div>
      </div>
    </div>`;

  const accountHtml = sess
    ? `<div class="acct" id="acctWrap">
         <button class="acct__btn" id="acctBtn" aria-haspopup="true" aria-expanded="false">
           ${ui('user')}<span>${esc(sess.name || 'حساب من')}</span>
         </button>
         <div class="acct__menu" id="acctMenu">
           <a href="account.html">${ui('user')} حساب کاربری</a>
           <a href="account.html#orders">${ui('box')} سفارش‌های من</a>
           <button type="button" id="acctLogout">${ui('logout')} خروج از حساب</button>
         </div>
       </div>`
    : `<a href="account.html" class="acct__login">${ui('user')}<span>ورود / ثبت‌نام</span></a>`;

  return `
  <header class="header" id="siteHeader">
    <div class="wrap header__inner">
      <a href="index.html" class="logo">
        ${logoMarkHtml(s)}
        <span class="logo__text"><b>${esc(s.siteName)}</b><span>PARS ABI</span></span>
      </a>
      <nav class="nav">${navHtml}${productsDrop}</nav>
      <div class="header__actions">
        <form class="search" id="headerSearch" role="search">
          ${ui('search')}
          <input type="search" name="q" placeholder="جستجوی محصول..." aria-label="جستجو">
        </form>
        ${accountHtml}
        <a href="cart.html" class="icon-btn" aria-label="سبد خرید">
          ${ui('cart')}
          <span class="icon-btn__count" data-empty="${count ? 0 : 1}">${faNum(count)}</span>
        </a>
        <button class="icon-btn burger" id="burgerBtn" aria-label="منو">${ui('menu')}</button>
      </div>
    </div>
  </header>

  <div class="drawer" id="drawer">
    <div class="drawer__panel">
      <button class="icon-btn drawer__close" id="drawerClose" aria-label="بستن">${ui('close')}</button>
      ${NAV.map(n => '<a href="' + n.href + '" class="' + (navIsActive(n.href) ? 'is-active' : '') + '">' + n.label + '</a>').join('')}
      <div class="drawer__group">
        <b>محصولات</b>
        ${cats.map(c => '<a href="shop.html?cat=' + c.id + '">' + esc(c.name) + '</a>').join('')}
      </div>
      <a href="cart.html">سبد خرید (${faNum(count)})</a>
      ${sess ? '<a href="account.html">حساب کاربری</a><a href="#" id="drawerLogout">خروج از حساب</a>'
             : '<a href="account.html">ورود / ثبت‌نام</a>'}
    </div>
  </div>`;
}

/* ---------- Footer ---------- */
function renderFooter() {
  const s = Store.settings();
  const cats = Store.categories();
  const rate = Store.overallRating();

  const socials = [];
  if (s.instagram) socials.push('<a href="https://instagram.com/' + esc(s.instagram) + '" target="_blank" rel="noopener" aria-label="اینستاگرام">' + ui('instagram') + '</a>');
  if (s.telegram) socials.push('<a href="https://t.me/' + esc(s.telegram) + '" target="_blank" rel="noopener" aria-label="تلگرام">' + ui('telegram') + '</a>');
  if (s.whatsapp) socials.push('<a href="https://wa.me/' + esc(String(s.whatsapp).replace(/[^\d]/g, '')) + '" target="_blank" rel="noopener" aria-label="واتساپ">' + ui('whatsapp') + '</a>');

  /* دسترسی سریع: از پنل مدیریت، وگرنه پیش‌فرض */
  const quick = Array.isArray(s.quickLinks) && s.quickLinks.length ? s.quickLinks : QUICK_LINKS_DEFAULT;

  return `
  <footer class="footer">
    <div class="wrap">
      <div class="footer__grid">
        <div>
          <a href="index.html" class="logo">
            ${logoMarkHtml(s)}
            <span class="logo__text"><b>${esc(s.siteName)}</b><span>PARS ABI</span></span>
          </a>
          <p class="about">${esc(s.footerAbout || s.tagline)}</p>
          ${rate.count ? '<div class="footer__rate">' + starsHtml(rate.avg, 'sm') + '<span>' + faNum(rate.percent) + '٪ رضایت از ' + faNum(rate.count) + ' نظر</span></div>' : ''}
          <div class="socials">${socials.join('')}</div>
        </div>
        <div>
          <h4>دسته‌بندی‌ها</h4>
          <div class="footer__links">
            ${cats.map(c => '<a href="shop.html?cat=' + c.id + '">' + esc(c.name) + '</a>').join('')}
          </div>
        </div>
        <div>
          <h4>دسترسی سریع</h4>
          <div class="footer__links">
            ${quick.map(l => '<a href="' + esc(l.href) + '">' + esc(l.label) + '</a>').join('')}
          </div>
        </div>
        <div>
          <h4>تماس با ما</h4>
          <ul class="footer__contact">
            <li>${ui('pin')}<span>${esc(s.address)}</span></li>
            <li>${ui('phone')}<span dir="ltr">${faNum(s.phone)}${s.mobile ? ' — ' + faNum(s.mobile) : ''}</span></li>
            <li>${ui('mail')}<span dir="ltr">${esc(s.email)}</span></li>
            <li>${ui('clock')}<span>${esc(s.workHours)}</span></li>
          </ul>
        </div>
      </div>
      <div class="footer__bottom">
        <span>© ${faNum(1404)} ${esc(s.siteName)} — تمامی حقوق محفوظ است.</span>
        <span>${esc(s.tagline)}</span>
      </div>
    </div>
  </footer>`;
}

/* ---------- Product card ---------- */
function productCard(p) {
  const cat = Store.category(p.cat);
  const off = p.oldPrice && p.oldPrice > p.price ? Math.round((1 - p.price / p.oldPrice) * 100) : 0;
  const wished = Store.wishlist().includes(p.id);
  const rate = Store.rating(p.id);
  const badge = p.badge
    ? '<span class="badge ' + (p.badge === 'تخفیف' ? 'badge--hot' : p.badge === 'جدید' ? 'badge--new' : '') + '">' + esc(p.badge) + '</span>'
    : (off ? '<span class="badge badge--hot">' + faNum(off) + '٪ تخفیف</span>' : '');

  return `
  <article class="pcard reveal" data-id="${p.id}">
    ${badge}
    <div class="pcard__media">
      <a href="product.html?id=${p.id}" aria-label="${esc(p.name)}">${productThumb(p)}</a>
      <button class="pcard__fav ${wished ? 'is-on' : ''}" data-wish="${p.id}" aria-label="علاقه‌مندی">${ui('heart')}</button>
      ${p.stock <= 0 ? '<div class="stock-out"><span>ناموجود</span></div>' : ''}
    </div>
    <div class="pcard__body">
      <div class="pcard__brand">${esc(p.brand || '')}</div>
      <a href="product.html?id=${p.id}" class="pcard__title">${esc(p.name)}</a>
      <div class="pcard__rate">
        ${rate.count
          ? starsHtml(rate.avg, 'sm') + '<span class="pcard__rate-num">' + faNum(rate.percent) + '٪ رضایت</span>'
          : '<span class="pcard__rate-num pcard__rate-num--empty">بدون امتیاز</span>'}
      </div>
      <div class="pcard__meta">
        <span>${esc(cat ? cat.name : 'متفرقه')}</span>
        <span>${p.stock > 0 ? 'موجود' : 'ناموجود'}</span>
      </div>
      <div class="pcard__foot">
        <div class="price">
          <b>${money(p.price)}<small>تومان</small></b>
          ${p.oldPrice ? '<del>' + money(p.oldPrice) + '<small> تومان</small></del>' : ''}
        </div>
        <button class="add-btn" data-add="${p.id}" aria-label="افزودن به سبد" ${p.stock <= 0 ? 'disabled' : ''}>${ui('plus')}</button>
      </div>
    </div>
  </article>`;
}

/* ---------- Wire up ---------- */
function initCommon() {
  const headerSlot = document.getElementById('site-header');
  const footerSlot = document.getElementById('site-footer');
  if (headerSlot) headerSlot.innerHTML = renderHeader();
  if (footerSlot) footerSlot.innerHTML = renderFooter();

  // sticky header
  const h = document.getElementById('siteHeader');
  if (h) {
    const onScroll = () => h.classList.toggle('is-stuck', window.scrollY > 8);
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  }

  // drawer
  const burger = document.getElementById('burgerBtn');
  const drawer = document.getElementById('drawer');
  const dClose = document.getElementById('drawerClose');
  if (burger && drawer) {
    burger.addEventListener('click', () => drawer.classList.add('is-open'));
    dClose && dClose.addEventListener('click', () => drawer.classList.remove('is-open'));
    drawer.addEventListener('click', e => { if (e.target === drawer) drawer.classList.remove('is-open'); });
  }

  // dropdown «محصولات»
  const drop = document.getElementById('navDrop');
  const dropBtn = document.getElementById('navDropBtn');
  if (drop && dropBtn) {
    const setOpen = open => {
      drop.classList.toggle('is-open', open);
      dropBtn.setAttribute('aria-expanded', open ? 'true' : 'false');
    };
    dropBtn.addEventListener('click', e => {
      e.stopPropagation();
      setOpen(!drop.classList.contains('is-open'));
    });
    drop.addEventListener('mouseenter', () => setOpen(true));
    drop.addEventListener('mouseleave', () => setOpen(false));
    document.addEventListener('click', e => { if (!drop.contains(e.target)) setOpen(false); });
    document.addEventListener('keydown', e => { if (e.key === 'Escape') setOpen(false); });
  }

  // account menu
  const acctBtn = document.getElementById('acctBtn');
  const acctMenu = document.getElementById('acctMenu');
  if (acctBtn && acctMenu) {
    acctBtn.addEventListener('click', e => {
      e.stopPropagation();
      const open = acctMenu.classList.toggle('is-open');
      acctBtn.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
    document.addEventListener('click', () => {
      acctMenu.classList.remove('is-open');
      acctBtn.setAttribute('aria-expanded', 'false');
    });
  }
  const doLogout = e => {
    if (e) e.preventDefault();
    Store.clearSession();
    toast('از حساب خارج شدید');
    setTimeout(() => location.reload(), 400);
  };
  const lo = document.getElementById('acctLogout');
  if (lo) lo.onclick = doLogout;
  const dlo = document.getElementById('drawerLogout');
  if (dlo) dlo.onclick = doLogout;

  // header search
  const hs = document.getElementById('headerSearch');
  if (hs) hs.addEventListener('submit', e => {
    e.preventDefault();
    const q = hs.querySelector('input').value.trim();
    location.href = 'shop.html' + (q ? '?q=' + encodeURIComponent(q) : '');
  });

  // global add-to-cart / wishlist delegation
  document.addEventListener('click', e => {
    const add = e.target.closest('[data-add]');
    if (add) {
      e.preventDefault();
      const id = add.dataset.add;
      const p = Store.product(id);
      if (!p || p.stock <= 0) { toast('این محصول موجود نیست', 'err'); return; }
      Store.addToCart(id, 1);
      updateCartBadge();
      add.classList.add('is-done');
      add.innerHTML = ui('check');
      setTimeout(() => { add.classList.remove('is-done'); add.innerHTML = ui('plus'); }, 1400);
      toast('«' + p.name + '» به سبد اضافه شد');
      return;
    }
    const wish = e.target.closest('[data-wish]');
    if (wish) {
      e.preventDefault();
      const list = Store.toggleWish(wish.dataset.wish);
      wish.classList.toggle('is-on', list.includes(wish.dataset.wish));
      toast(list.includes(wish.dataset.wish) ? 'به علاقه‌مندی‌ها اضافه شد' : 'از علاقه‌مندی‌ها حذف شد');
    }
  });

  // reveal on scroll
  const io = new IntersectionObserver(entries => {
    entries.forEach(en => { if (en.isIntersecting) { en.target.classList.add('in'); io.unobserve(en.target); } });
  }, { threshold: .08, rootMargin: '0px 0px -40px' });
  document.querySelectorAll('.reveal').forEach((el, i) => {
    el.style.transitionDelay = Math.min(i % 8 * 45, 300) + 'ms';
    io.observe(el);
  });

  updateCartBadge();
}

function updateCartBadge() {
  const el = document.querySelector('.icon-btn__count');
  if (!el) return;
  const n = Store.cartCount();
  el.textContent = faNum(n);
  el.dataset.empty = n ? 0 : 1;
}

function observeNew(scope) {
  const io = new IntersectionObserver(entries => {
    entries.forEach(en => { if (en.isIntersecting) { en.target.classList.add('in'); io.unobserve(en.target); } });
  }, { threshold: .08 });
  (scope || document).querySelectorAll('.reveal:not(.in)').forEach(el => io.observe(el));
}

function pageHead(title, sub, crumbs) {
  return `
  <section class="pagehead">
    <div class="wrap">
      <div class="crumbs">
        <a href="index.html">خانه</a>
        ${(crumbs || []).map(c => ui('arrow') + (c.href ? '<a href="' + c.href + '">' + esc(c.label) + '</a>' : '<span>' + esc(c.label) + '</span>')).join('')}
      </div>
      <h1>${esc(title)}</h1>
      ${sub ? '<p>' + esc(sub) + '</p>' : ''}
    </div>
  </section>`;
}

/* ---------- Auth guard ----------
   هر جا نیاز به ورود بود، این را صدا بزنید. اگر کاربر وارد نشده باشد
   به صفحه حساب کاربری با بازگشت به همین صفحه می‌رود. */
function requireLogin(returnTo) {
  const sess = Store.session();
  if (sess) return sess;
  const back = returnTo || (location.pathname.split('/').pop() + location.search);
  location.href = 'account.html?next=' + encodeURIComponent(back);
  return null;
}
