/* ==========================================================================
   پارس آبی — Admin Panel Logic (v2)
   ========================================================================== */

const AUTH_KEY = 'parsabi_admin_session';

const A_ICONS = {
  dash: '<rect x="3" y="3" width="7" height="9" rx="1.5"/><rect x="14" y="3" width="7" height="5" rx="1.5"/><rect x="14" y="11" width="7" height="10" rx="1.5"/><rect x="3" y="15" width="7" height="6" rx="1.5"/>',
  box: '<path d="M21 8l-9-5-9 5v8l9 5 9-5z"/><path d="M3 8l9 5 9-5M12 13v8"/>',
  tags: '<path d="M20.6 13.4l-7.2 7.2a2 2 0 0 1-2.8 0l-7.2-7.2a2 2 0 0 1-.6-1.4V4a1 1 0 0 1 1-1h8a2 2 0 0 1 1.4.6l7.4 7.4a2 2 0 0 1 0 2.8z"/><circle cx="7.5" cy="7.5" r="1.3"/>',
  cart: '<circle cx="9" cy="20" r="1.6"/><circle cx="18" cy="20" r="1.6"/><path d="M2 3h3l2.4 11.2A2 2 0 0 0 9.4 16h8.2a2 2 0 0 0 2-1.6L21 7H6"/>',
  gear: '<circle cx="12" cy="12" r="3.2"/><path d="M19.4 15a1.7 1.7 0 0 0 .3 1.9l.1.1a2 2 0 1 1-2.8 2.8l-.1-.1a1.7 1.7 0 0 0-1.9-.3 1.7 1.7 0 0 0-1 1.5V21a2 2 0 1 1-4 0v-.1a1.7 1.7 0 0 0-1.1-1.5 1.7 1.7 0 0 0-1.9.3l-.1.1a2 2 0 1 1-2.8-2.8l.1-.1a1.7 1.7 0 0 0 .3-1.9 1.7 1.7 0 0 0-1.5-1H3a2 2 0 1 1 0-4h.1a1.7 1.7 0 0 0 1.5-1.1 1.7 1.7 0 0 0-.3-1.9l-.1-.1a2 2 0 1 1 2.8-2.8l.1.1a1.7 1.7 0 0 0 1.9.3H9a1.7 1.7 0 0 0 1-1.5V3a2 2 0 1 1 4 0v.1a1.7 1.7 0 0 0 1 1.5 1.7 1.7 0 0 0 1.9-.3l.1-.1a2 2 0 1 1 2.8 2.8l-.1.1a1.7 1.7 0 0 0-.3 1.9V9a1.7 1.7 0 0 0 1.5 1H21a2 2 0 1 1 0 4h-.1a1.7 1.7 0 0 0-1.5 1z"/>',
  plus: '<path d="M12 5v14M5 12h14"/>',
  edit: '<path d="M11 4H4v16h16v-7"/><path d="M18.5 2.5a2.1 2.1 0 0 1 3 3L12 15l-4 1 1-4z"/>',
  trash: '<path d="M3 6h18M8 6V4h8v2M19 6l-1 14H6L5 6"/><path d="M10 11v5M14 11v5"/>',
  eye: '<path d="M2 12s3.6-7 10-7 10 7 10 7-3.6 7-10 7-10-7-10-7z"/><circle cx="12" cy="12" r="3"/>',
  search: '<circle cx="11" cy="11" r="7"/><path d="M20 20l-3.5-3.5"/>',
  close: '<path d="M6 6l12 12M18 6L6 18"/>',
  menu: '<path d="M3 6h18M3 12h18M3 18h18"/>',
  logout: '<path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/><path d="M16 17l5-5-5-5M21 12H9"/>',
  money: '<circle cx="12" cy="12" r="9"/><path d="M15 9.5c-.6-.8-1.7-1.3-3-1.3-1.7 0-3 .9-3 2s1.3 1.7 3 2 3 .9 3 2-1.3 2-3 2c-1.3 0-2.4-.5-3-1.3"/><path d="M12 6v2M12 16v2"/>',
  clock: '<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3.5 2"/>',
  check: '<path d="M20 6L9 17l-5-5"/>',
  warn: '<path d="M12 3l9.5 17H2.5z"/><path d="M12 9v5M12 17h.01"/>',
  users: '<circle cx="9" cy="8" r="3.5"/><path d="M2.5 20c0-3.5 2.9-5.5 6.5-5.5s6.5 2 6.5 5.5"/><path d="M17 5.5a3.5 3.5 0 0 1 0 6.5M18.5 20c0-2.4-.8-4-2-5"/>',
  chart: '<path d="M3 3v18h18"/><path d="M7 15l4-5 3 3 5-7"/>',
  image: '<rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><path d="M21 15l-5-5L5 21"/>',
  save: '<path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z"/><path d="M17 21v-8H7v8M7 3v5h8"/>',
  store: '<path d="M3 9l1.5-5h15L21 9"/><path d="M3 9a3 3 0 0 0 6 0 3 3 0 0 0 6 0 3 3 0 0 0 6 0"/><path d="M5 12v9h14v-9"/>',
  ticket: '<path d="M3 8a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v2a2 2 0 0 0 0 4v2a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-2a2 2 0 0 0 0-4z"/><path d="M13 6v2M13 11v2M13 16v2"/>',
  star: '<path d="M12 3l2.9 5.9 6.5.9-4.7 4.6 1.1 6.5L12 17.8 6.2 20.9l1.1-6.5L2.6 9.8l6.5-.9z"/>',
  reply: '<path d="M9 14L4 9l5-5"/><path d="M4 9h11a6 6 0 0 1 6 6v4"/>',
  home: '<path d="M3 11l9-8 9 8"/><path d="M5 10v10h14V10"/>'
};

function ai(name, cls) {
  return '<svg class="' + (cls || '') + '" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round">' + (A_ICONS[name] || '') + '</svg>';
}

/* ---------- Auth ---------- */
function isLoggedIn() {
  return sessionStorage.getItem(AUTH_KEY) === '1';
}
function login(user, pass) {
  const s = Store.settings();
  if (user.trim() === s.adminUser && pass === s.adminPass) {
    sessionStorage.setItem(AUTH_KEY, '1');
    return true;
  }
  return false;
}
function logout() {
  sessionStorage.removeItem(AUTH_KEY);
  location.reload();
}

/* ---------- Shell ---------- */
const MENU = [
  { key: 'dashboard', label: 'داشبورد', icon: 'dash' },
  { key: 'products', label: 'محصولات', icon: 'box' },
  { key: 'categories', label: 'دسته‌بندی‌ها', icon: 'tags' },
  { key: 'orders', label: 'سفارش‌ها', icon: 'cart' },
  { key: 'tickets', label: 'سوالات و تیکت‌ها', icon: 'ticket' },
  { key: 'reviews', label: 'نظرات و امتیازها', icon: 'star' },
  { key: 'users', label: 'کاربران', icon: 'users' },
  { key: 'settings', label: 'تنظیمات سایت', icon: 'gear' }
];

let currentView = 'dashboard';

function renderShell() {
  const s = Store.settings();
  const orders = Store.orders();
  const pending = orders.filter(o => o.status === 'pending').length;
  const newTickets = Store.tickets().filter(t => t.status === 'new').length;

  return `
  <div class="admin">
    <div class="side-back" id="sideBack"></div>
    <aside class="side" id="side">
      <div class="side__brand">
        <span class="logo__mark">${LOGO_MARK}</span>
        <div><b>${esc(s.siteName)}</b><span>پنل مدیریت</span></div>
      </div>

      <div class="side__label">مدیریت فروشگاه</div>
      <nav class="side__nav">
        ${MENU.map(m => {
          let badge = '';
          if (m.key === 'orders' && pending) badge = '<span class="tag">' + faNum(pending) + '</span>';
          if (m.key === 'tickets' && newTickets) badge = '<span class="tag">' + faNum(newTickets) + '</span>';
          return `<a href="#${m.key}" data-view="${m.key}">
            ${ai(m.icon)}<span>${m.label}</span>${badge}
          </a>`;
        }).join('')}
      </nav>

      <div class="side__label">میان‌بر</div>
      <nav class="side__nav">
        <a href="../index.html" target="_blank">${ai('store')}<span>مشاهده سایت</span></a>
        <a href="#" id="resetDb">${ai('warn')}<span>بازنشانی داده‌ها</span></a>
      </nav>

      <div class="side__foot">
        <div class="side__user">
          <span class="side__avatar">${esc((s.adminUser || 'A')[0].toUpperCase())}</span>
          <div style="flex:1;min-width:0">
            <b>${esc(s.adminUser)}</b>
            <span>مدیر کل</span>
          </div>
          <button class="mini-btn" id="logoutBtn" title="خروج" style="background:rgba(255,255,255,.08);border-color:rgba(255,255,255,.12);color:#a9c8e6">${ai('logout')}</button>
        </div>
      </div>
    </aside>

    <div class="main">
      <div class="abar">
        <button class="icon-btn abar__toggle" id="sideToggle">${ai('menu')}</button>
        <div>
          <h1 id="viewTitle">داشبورد</h1>
          <div class="abar__sub" id="viewSub"></div>
        </div>
        <div class="abar__right">
          <a href="../index.html" target="_blank" class="btn btn--ghost btn--sm">${ai('eye')} مشاهده سایت</a>
        </div>
      </div>
      <div class="main__inner" id="viewRoot"></div>
    </div>
  </div>

  <div class="amsg" id="modal">
    <div class="amsg__box" id="modalBox"></div>
  </div>`;
}

/* ---------- Modal helper ---------- */
function openModal(html, small) {
  const m = document.getElementById('modal');
  const box = document.getElementById('modalBox');
  box.className = 'amsg__box' + (small ? ' amsg--sm' : '');
  box.innerHTML = html;
  m.classList.add('is-open');
  return box;
}
function closeModal() {
  const m = document.getElementById('modal');
  m.classList.remove('is-open');
  const box = document.getElementById('modalBox');
  setTimeout(() => { if (!m.classList.contains('is-open')) box.innerHTML = ''; }, 260);
}
function confirmDialog(title, text, onYes) {
  const box = openModal(`
    <div class="amsg__head"><h3>${esc(title)}</h3></div>
    <div class="amsg__body"><p style="font-size:13.5px;color:var(--ink-soft);line-height:2">${esc(text)}</p></div>
    <div class="amsg__foot">
      <button class="btn btn--ghost btn--sm" id="mNo">انصراف</button>
      <button class="btn btn--danger btn--sm" id="mYes">تأیید و حذف</button>
    </div>`, true);
  box.querySelector('#mNo').onclick = closeModal;
  box.querySelector('#mYes').onclick = () => { closeModal(); onYes(); };
}

/* ==========================================================================
   DASHBOARD
   ========================================================================== */
function viewDashboard() {
  const prods = Store.products();
  const orders = Store.orders();
  const cats = Store.categories();
  const tickets = Store.tickets();
  const rate = Store.overallRating();

  const revenue = orders.filter(o => o.status !== 'cancelled').reduce((s, o) => s + o.total, 0);
  const pending = orders.filter(o => o.status === 'pending').length;
  const lowStock = prods.filter(p => p.stock <= 5);
  const outStock = prods.filter(p => p.stock <= 0);
  const newTickets = tickets.filter(t => t.status === 'new').length;

  const bars = [0, 0, 0, 0, 0, 0, 0];
  orders.forEach((o, i) => { bars[i % 7] += o.total; });
  const maxBar = Math.max(...bars, 1);
  const months = ['فروردین', 'اردیبهشت', 'خرداد', 'تیر', 'مرداد', 'شهریور', 'مهر'];

  const recent = orders.slice(0, 5);

  return `
  <div class="stats">
    <div class="stat">
      <div class="stat__top"><span class="stat__ico">${ai('money')}</span></div>
      <b>${money(revenue)}<small> تومان</small></b>
      <span class="lbl">مجموع فروش</span>
    </div>
    <div class="stat">
      <div class="stat__top"><span class="stat__ico stat__ico--ok">${ai('cart')}</span></div>
      <b>${faNum(orders.length)}</b>
      <span class="lbl">کل سفارش‌ها</span>
    </div>
    <div class="stat">
      <div class="stat__top"><span class="stat__ico stat__ico--warn">${ai('ticket')}</span></div>
      <b>${faNum(newTickets)}</b>
      <span class="lbl">سوال بی‌پاسخ</span>
    </div>
    <div class="stat">
      <div class="stat__top"><span class="stat__ico stat__ico--warn">${ai('star')}</span></div>
      <b>${rate.count ? faNum(rate.percent) + '٪' : '—'}</b>
      <span class="lbl">رضایت مشتریان (${faNum(rate.count)} نظر)</span>
    </div>
  </div>

  <div class="grid-2">
    <div class="panel">
      <div class="panel__head">
        <div><h2>روند فروش</h2><p>مجموع مبلغ سفارش‌ها به تفکیک دوره</p></div>
      </div>
      <div class="panel__body">
        <div class="chart">
          ${bars.map((v, i) => `
            <div class="chart__col">
              <div class="chart__bar" style="height:${Math.max(4, (v / maxBar) * 100)}%" title="${money(v)} تومان"></div>
              <span>${months[i]}</span>
            </div>`).join('')}
        </div>
      </div>
    </div>

    <div class="panel">
      <div class="panel__head"><div><h2>هشدار موجودی</h2><p>محصولات با موجودی کم</p></div></div>
      <div class="panel__body" style="padding:0">
        ${lowStock.length ? `<div class="table-scroll"><table class="tbl" style="min-width:auto">
          <tbody>
            ${lowStock.slice(0, 6).map(p => `
              <tr>
                <td><div class="tbl__prod"><span class="tbl__thumb">${productThumb(p)}</span><div><b>${esc(p.name)}</b><span>${esc(p.brand || '')}</span></div></div></td>
                <td style="text-align:left"><span class="pill ${p.stock <= 0 ? 'pill--danger' : 'pill--warn'}">${p.stock <= 0 ? 'ناموجود' : faNum(p.stock) + ' عدد'}</span></td>
              </tr>`).join('')}
          </tbody>
        </table></div>` : '<div style="padding:30px;text-align:center;font-size:13px;color:var(--ink-mute)">همه محصولات موجودی کافی دارند.</div>'}
      </div>
    </div>
  </div>

  <div class="panel">
    <div class="panel__head">
      <div><h2>آخرین سفارش‌ها</h2></div>
      <div class="spacer"></div>
      <a href="#orders" class="btn btn--ghost btn--sm">همه سفارش‌ها</a>
    </div>
    <div class="panel__body panel__body--flush">
      <div class="table-scroll">
        <table class="tbl">
          <thead><tr><th>کد سفارش</th><th>مشتری</th><th>مبلغ</th><th>وضعیت</th><th>تاریخ</th></tr></thead>
          <tbody>
            ${recent.map(o => {
              const st = statusInfo(o.status);
              return `<tr>
                <td><b dir="ltr">${esc(o.code)}</b></td>
                <td>${esc(o.customer)}</td>
                <td><b>${money(o.total)}</b> تومان</td>
                <td><span class="pill ${st.cls}">${st.label}</span></td>
                <td>${faDateShort(o.date)}</td>
              </tr>`;
            }).join('')}
          </tbody>
        </table>
      </div>
    </div>
  </div>

  <div class="grid-2">
    <div class="panel">
      <div class="panel__head"><div><h2>دسته‌بندی‌ها</h2></div><div class="spacer"></div><a href="#categories" class="btn btn--ghost btn--sm">مدیریت</a></div>
      <div class="panel__body">
        <div style="display:grid;gap:10px">
          ${cats.slice(0, 6).map(c => {
            const n = prods.filter(p => p.cat === c.id).length;
            return `<div style="display:flex;align-items:center;gap:12px;padding:10px 0;border-bottom:1px solid var(--line)">
              <span class="stat__ico" style="width:36px;height:36px;border-radius:10px">${icon(c.icon)}</span>
              <span style="flex:1;font-size:13px;font-weight:600">${esc(c.name)}</span>
              <span class="pill pill--info">${faNum(n)} محصول</span>
            </div>`;
          }).join('')}
        </div>
      </div>
    </div>

    <div class="panel">
      <div class="panel__head"><div><h2>عملیات سریع</h2></div></div>
      <div class="panel__body">
        <div style="display:grid;gap:10px">
          <button class="btn btn--block" id="qAddProduct">${ai('plus')} افزودن محصول جدید</button>
          <button class="btn btn--ghost btn--block" id="qTickets">${ai('ticket')} سوالات بی‌پاسخ (${faNum(newTickets)})</button>
          <button class="btn btn--ghost btn--block" id="qOrders">${ai('cart')} بررسی سفارش‌ها</button>
          <button class="btn btn--ghost btn--block" id="qSettings">${ai('gear')} تنظیمات سایت</button>
        </div>
      </div>
    </div>
  </div>`;
}

/* ==========================================================================
   PRODUCTS
   ========================================================================== */
let prodQuery = '';
let prodCatFilter = '';

function viewProducts() {
  const cats = Store.categories();
  let list = Store.products();

  if (prodQuery) {
    const q = prodQuery.toLowerCase();
    list = list.filter(p => (p.name + ' ' + (p.brand || '') + ' ' + (p.sku || '')).toLowerCase().includes(q));
  }
  if (prodCatFilter) list = list.filter(p => p.cat === prodCatFilter);

  const featuredIds = Store.featuredIds();

  return `
  <div class="toolbar">
    <div class="search">${ai('search')}<input type="search" id="prodSearch" placeholder="جستجوی نام، برند یا کد کالا" value="${esc(prodQuery)}"></div>
    <select id="prodCatSel">
      <option value="">همه دسته‌ها</option>
      ${cats.map(c => `<option value="${c.id}" ${prodCatFilter === c.id ? 'selected' : ''}>${esc(c.name)}</option>`).join('')}
    </select>
    <div class="spacer"></div>
    <button class="btn btn--sm" id="newProduct">${ai('plus')} محصول جدید</button>
  </div>

  <div class="panel">
    <div class="panel__head">
      <div><h2>لیست محصولات</h2><p>${faNum(list.length)} محصول — تیک «صفحه اصلی» پرفروش‌ها را انتخاب می‌کند</p></div>
    </div>
    <div class="panel__body panel__body--flush">
      <div class="table-scroll">
        <table class="tbl">
          <thead>
            <tr>
              <th style="width:64px">صفحه اصلی</th>
              <th>محصول</th><th>دسته</th><th>قیمت</th><th>موجودی</th><th>امتیاز</th><th style="text-align:left">عملیات</th>
            </tr>
          </thead>
          <tbody>
            ${list.length ? list.map(p => {
              const c = Store.category(p.cat);
              const r = Store.rating(p.id);
              return `<tr>
                <td data-label="صفحه اصلی">
                  <label class="switch" style="transform:scale(.82)">
                    <input type="checkbox" data-featured="${p.id}" ${featuredIds.includes(p.id) ? 'checked' : ''}>
                    <i></i>
                  </label>
                </td>
                <td>
                  <div class="tbl__prod">
                    <span class="tbl__thumb">${productThumb(p)}</span>
                    <div><b>${esc(p.name)}</b><span dir="ltr">${esc(p.sku || '—')}</span></div>
                  </div>
                </td>
                <td data-label="دسته">${esc(c ? c.name : '—')}</td>
                <td data-label="قیمت"><b>${money(p.price)}</b> <span style="font-size:11px">تومان</span></td>
                <td data-label="موجودی">${faNum(p.stock)}</td>
                <td data-label="امتیاز">${r.count ? '<span class="pill pill--ok">' + faNum(r.percent) + '٪</span>' : '<span class="pill pill--mute">—</span>'}</td>
                <td>
                  <div class="row-actions">
                    <a class="act" href="../product.html?id=${p.id}" target="_blank" title="مشاهده در سایت">${ai('eye')} نمایش</a>
                    <button class="act act--primary" data-edit="${p.id}" title="ویرایش محصول">${ai('edit')} ویرایش</button>
                    <button class="act act--danger" data-del="${p.id}" title="حذف محصول">${ai('trash')} حذف</button>
                  </div>
                </td>
              </tr>`;
            }).join('') : '<tr><td colspan="7" style="text-align:center;padding:40px;color:var(--ink-mute)">محصولی یافت نشد.</td></tr>'}
          </tbody>
        </table>
      </div>
    </div>
  </div>`;
}

function productForm(p) {
  const cats = Store.categories();
  const isEdit = !!p;
  p = p || { name: '', brand: '', cat: cats[0] ? cats[0].id : '', price: 0, oldPrice: 0, stock: 0, sku: '', icon: 'pump', featured: false, badge: '', image: null, desc: '', specs: {} };

  const specRows = Object.entries(p.specs || {});
  const iconKeys = Object.keys(PA_ICONS);

  return `
  <div class="amsg__head">
    <h3>${isEdit ? 'ویرایش محصول' : 'افزودن محصول جدید'}</h3>
    <div class="spacer"></div>
    <button class="mini-btn" id="mClose">${ai('close')}</button>
  </div>
  <div class="amsg__body">
    <div class="form-grid">
      <div class="field full"><label>نام محصول *</label><input id="fName" value="${esc(p.name)}" placeholder="مثلاً پمپ آب خانگی پنتاکس PM45"></div>

      <div class="field"><label>برند</label><input id="fBrand" value="${esc(p.brand)}" placeholder="پنتاکس"></div>
      <div class="field"><label>کد کالا (SKU)</label><input id="fSku" value="${esc(p.sku)}" placeholder="PTX-PM45" dir="ltr"></div>

      <div class="field"><label>دسته‌بندی *</label>
        <select id="fCat">${cats.map(c => `<option value="${c.id}" ${p.cat === c.id ? 'selected' : ''}>${esc(c.name)}</option>`).join('')}</select>
      </div>
      <div class="field"><label>آیکن محصول</label>
        <select id="fIcon">${iconKeys.map(k => `<option value="${k}" ${p.icon === k ? 'selected' : ''}>${k}</option>`).join('')}</select>
      </div>

      <div class="field"><label>قیمت (تومان) *</label><input id="fPrice" type="number" value="${p.price || ''}" min="0" step="1000"></div>
      <div class="field"><label>قیمت قبل از تخفیف</label><input id="fOldPrice" type="number" value="${p.oldPrice || ''}" min="0" step="1000" placeholder="خالی = بدون تخفیف"></div>

      <div class="field"><label>موجودی انبار</label><input id="fStock" type="number" value="${p.stock || 0}" min="0"></div>
      <div class="field"><label>برچسب ویژه</label>
        <select id="fBadge">
          <option value="">بدون برچسب</option>
          ${['پرفروش', 'جدید', 'تخفیف', 'پیشنهاد ویژه'].map(b => `<option value="${b}" ${p.badge === b ? 'selected' : ''}>${b}</option>`).join('')}
        </select>
      </div>

      <div class="field full"><label>توضیحات محصول</label><textarea id="fDesc" placeholder="توضیح کامل محصول، کاربرد و مزایا">${esc(p.desc)}</textarea></div>

      <div class="field full">
        <label>تصویر محصول</label>
        <div class="img-pick">
          <span class="img-pick__box" id="imgBox">${p.image ? '<img src="' + p.image + '" alt="">' : ai('image')}</span>
          <div style="flex:1">
            <input type="file" id="fImage" accept="image/*" style="padding:8px;font-size:12px">
            <div class="img-pick__hint">تصویر مربعی یا افقی، حداکثر ۲ مگابایت. اگر تصویری انتخاب نکنید، آیکن محصول نمایش داده می‌شود.</div>
          </div>
        </div>
      </div>

      <div class="form-section">
        <h4>${ai('chart')} مشخصات فنی</h4>
        <div id="specRows">
          ${specRows.map(([k, v], i) => `
            <div class="field--row" style="margin-bottom:10px" data-spec>
              <input placeholder="عنوان (مثلاً توان موتور)" value="${esc(k)}" data-k>
              <div style="display:flex;gap:8px">
                <input placeholder="مقدار (مثلاً ۰.۵ اسب بخار)" value="${esc(v)}" data-v style="flex:1">
                <button class="mini-btn mini-btn--danger" data-specdel>${ai('close')}</button>
              </div>
            </div>`).join('')}
        </div>
        <button class="btn btn--ghost btn--sm" id="addSpec" style="margin-top:6px">${ai('plus')} افزودن مشخصه</button>
      </div>

      <div class="form-section">
        <div class="switch-row">
          <div><b>نمایش در بخش «پرفروش‌ترین‌ها» صفحه اصلی</b><span>در صفحه اصلی سایت نمایش داده می‌شود</span></div>
          <label class="switch"><input type="checkbox" id="fFeatured" ${p.featured ? 'checked' : ''}><i></i></label>
        </div>
      </div>
    </div>
  </div>
  <div class="amsg__foot">
    <button class="btn btn--ghost btn--sm" id="mCancel">انصراف</button>
    <button class="btn btn--sm" id="mSave">${ai('save')} ${isEdit ? 'ذخیره تغییرات' : 'افزودن محصول'}</button>
  </div>`;
}

function openProductForm(id) {
  const p = id ? Store.product(id) : null;
  const box = openModal(productForm(p));

  let imgData = p ? p.image : null;

  box.querySelector('#mClose').onclick = closeModal;
  box.querySelector('#mCancel').onclick = closeModal;

  box.querySelector('#addSpec').onclick = () => {
    const row = document.createElement('div');
    row.className = 'field--row';
    row.style.marginBottom = '10px';
    row.setAttribute('data-spec', '');
    row.innerHTML = '<input placeholder="عنوان" data-k><div style="display:flex;gap:8px"><input placeholder="مقدار" data-v style="flex:1"><button class="mini-btn mini-btn--danger" data-specdel>' + ai('close') + '</button></div>';
    box.querySelector('#specRows').appendChild(row);
    row.querySelector('[data-specdel]').onclick = () => row.remove();
  };

  box.querySelectorAll('[data-specdel]').forEach(b => b.onclick = () => b.closest('[data-spec]').remove());

  box.querySelector('#fImage').onchange = e => {
    const f = e.target.files[0];
    if (!f) return;
    if (f.size > 2 * 1024 * 1024) { toast('حجم تصویر بیش از ۲ مگابایت است', 'err'); e.target.value = ''; return; }
    const r = new FileReader();
    r.onload = ev => {
      imgData = ev.target.result;
      box.querySelector('#imgBox').innerHTML = '<img src="' + imgData + '" alt="">';
    };
    r.readAsDataURL(f);
  };

  box.querySelector('#mSave').onclick = () => {
    const name = box.querySelector('#fName').value.trim();
    const price = Number(box.querySelector('#fPrice').value);
    if (name.length < 3) { toast('نام محصول را کامل وارد کنید', 'err'); return; }
    if (!price || price <= 0) { toast('قیمت محصول را وارد کنید', 'err'); return; }

    const specs = {};
    box.querySelectorAll('[data-spec]').forEach(r => {
      const k = r.querySelector('[data-k]').value.trim();
      const v = r.querySelector('[data-v]').value.trim();
      if (k && v) specs[k] = v;
    });

    const data = {
      name,
      brand: box.querySelector('#fBrand').value.trim(),
      sku: box.querySelector('#fSku').value.trim(),
      cat: box.querySelector('#fCat').value,
      icon: box.querySelector('#fIcon').value,
      price,
      oldPrice: Number(box.querySelector('#fOldPrice').value) || 0,
      stock: Number(box.querySelector('#fStock').value) || 0,
      badge: box.querySelector('#fBadge').value,
      desc: box.querySelector('#fDesc').value.trim(),
      image: imgData,
      specs,
      featured: box.querySelector('#fFeatured').checked
    };

    try {
      let savedId = id;
      if (id) { Store.updateProduct(id, data); toast('محصول ویرایش شد'); }
      else { const np = Store.addProduct(data); savedId = np.id; toast('محصول جدید اضافه شد'); }

      // همگام‌سازی لیست پرفروش‌های صفحه اصلی
      const feats = Store.featuredIds();
      const isIn = feats.includes(savedId);
      if (data.featured && !isIn) Store.toggleFeatured(savedId);
      if (!data.featured && isIn) Store.toggleFeatured(savedId);

      closeModal();
      renderView();
    } catch (err) {
      toast('ذخیره نشد — احتمالاً حجم تصویر زیاد است', 'err');
    }
  };
}

/* ==========================================================================
   CATEGORIES
   ========================================================================== */
function viewCategories() {
  const cats = Store.categories();
  const prods = Store.products();

  return `
  <div class="toolbar">
    <div class="spacer"></div>
    <button class="btn btn--sm" id="newCat">${ai('plus')} دسته‌بندی جدید</button>
  </div>

  <div class="panel">
    <div class="panel__head"><div><h2>دسته‌بندی‌ها</h2><p>${faNum(cats.length)} دسته</p></div></div>
    <div class="panel__body panel__body--flush">
      <div class="table-scroll">
        <table class="tbl">
          <thead><tr><th>دسته</th><th>نامک</th><th>تعداد محصول</th><th style="text-align:left">عملیات</th></tr></thead>
          <tbody>
            ${cats.map(c => {
              const n = prods.filter(p => p.cat === c.id).length;
              return `<tr>
                <td data-label="">
                  <div class="tbl__prod">
                    <span class="tbl__thumb">${icon(c.icon)}</span>
                    <div><b>${esc(c.name)}</b><span>${esc(c.desc || '')}</span></div>
                  </div>
                </td>
                <td data-label="نامک" dir="ltr" style="font-size:12px">${esc(c.slug)}</td>
                <td data-label="تعداد محصول"><span class="pill pill--info">${faNum(n)}</span></td>
                <td>
                  <div class="row-actions">
                    <button class="act act--primary" data-cedit="${c.id}">${ai('edit')} ویرایش</button>
                    <button class="act act--danger" data-cdel="${c.id}">${ai('trash')} حذف</button>
                  </div>
                </td>
              </tr>`;
            }).join('')}
          </tbody>
        </table>
      </div>
    </div>
  </div>`;
}

function openCatForm(id) {
  const found = id ? Store.category(id) : null;
  const isEdit = !!found;
  const c = found || { name: '', slug: '', icon: 'pump', desc: '' };
  const iconKeys = Object.keys(PA_ICONS);

  const box = openModal(`
    <div class="amsg__head"><h3>${isEdit ? 'ویرایش دسته‌بندی' : 'دسته‌بندی جدید'}</h3><div class="spacer"></div><button class="mini-btn" id="mClose">${ai('close')}</button></div>
    <div class="amsg__body">
      <div class="field"><label>نام دسته *</label><input id="cName" value="${esc(c.name)}" placeholder="مثلاً پمپ خانگی"></div>
      <div class="field"><label>نامک (slug)</label><input id="cSlug" value="${esc(c.slug)}" placeholder="home-pump" dir="ltr"></div>
      <div class="field"><label>آیکن</label><select id="cIcon">${iconKeys.map(k => `<option value="${k}" ${c.icon === k ? 'selected' : ''}>${k}</option>`).join('')}</select></div>
      <div class="field"><label>توضیح کوتاه</label><textarea id="cDesc" placeholder="توضیح یک‌خطی برای کارت دسته">${esc(c.desc)}</textarea></div>
    </div>
    <div class="amsg__foot">
      <button class="btn btn--ghost btn--sm" id="mCancel">انصراف</button>
      <button class="btn btn--sm" id="mSave">${ai('save')} ذخیره</button>
    </div>`, true);

  box.querySelector('#mClose').onclick = closeModal;
  box.querySelector('#mCancel').onclick = closeModal;
  box.querySelector('#mSave').onclick = () => {
    const name = box.querySelector('#cName').value.trim();
    if (name.length < 2) { toast('نام دسته را وارد کنید', 'err'); return; }
    const data = {
      name,
      slug: box.querySelector('#cSlug').value.trim() || name.replace(/\s+/g, '-'),
      icon: box.querySelector('#cIcon').value,
      desc: box.querySelector('#cDesc').value.trim()
    };
    if (id) { Store.updateCategory(id, data); toast('دسته ویرایش شد'); }
    else { Store.addCategory(data); toast('دسته اضافه شد'); }
    closeModal();
    renderView();
  };
}

/* ==========================================================================
   ORDERS
   ========================================================================== */
let orderStatusFilter = '';

function viewOrders() {
  let list = Store.orders();
  if (orderStatusFilter) list = list.filter(o => o.status === orderStatusFilter);

  const statuses = [
    { v: '', l: 'همه' },
    { v: 'pending', l: 'در انتظار پرداخت' },
    { v: 'processing', l: 'در حال پردازش' },
    { v: 'shipped', l: 'ارسال شده' },
    { v: 'delivered', l: 'تحویل شده' },
    { v: 'cancelled', l: 'لغو شده' }
  ];

  return `
  <div class="toolbar">
    <select id="orderStatusSel">
      ${statuses.map(s => `<option value="${s.v}" ${orderStatusFilter === s.v ? 'selected' : ''}>${s.l}</option>`).join('')}
    </select>
    <div class="spacer"></div>
    <span style="font-size:12.5px;color:var(--ink-mute)">${faNum(list.length)} سفارش</span>
  </div>

  <div class="panel">
    <div class="panel__head"><div><h2>سفارش‌ها</h2></div></div>
    <div class="panel__body panel__body--flush">
      <div class="table-scroll">
        <table class="tbl">
          <thead><tr><th>کد</th><th>مشتری</th><th>اقلام</th><th>مبلغ</th><th>وضعیت</th><th>تاریخ</th><th style="text-align:left">عملیات</th></tr></thead>
          <tbody>
            ${list.length ? list.map(o => {
              const st = statusInfo(o.status);
              const qty = o.items.reduce((s, i) => s + i.qty, 0);
              return `<tr>
                <td data-label="کد"><b dir="ltr">${esc(o.code)}</b></td>
                <td data-label="مشتری"><div><b>${esc(o.customer)}</b><br><span style="font-size:11px" dir="ltr">${faNum(o.phone)}</span></div></td>
                <td data-label="اقلام">${faNum(qty)} عدد</td>
                <td data-label="مبلغ"><b>${money(o.total)}</b></td>
                <td data-label="وضعیت"><span class="pill ${st.cls}">${st.label}</span></td>
                <td data-label="تاریخ">${faDateShort(o.date)}</td>
                <td>
                  <div class="row-actions">
                    <button class="act act--primary" data-oedit="${o.id}" title="جزئیات سفارش">${ai('eye')} جزئیات</button>
                    <button class="act act--danger" data-odel="${o.id}" title="حذف سفارش">${ai('trash')} حذف</button>
                  </div>
                </td>
              </tr>`;
            }).join('') : '<tr><td colspan="7" style="text-align:center;padding:40px;color:var(--ink-mute)">سفارشی با این وضعیت نیست.</td></tr>'}
          </tbody>
        </table>
      </div>
    </div>
  </div>`;
}

function openOrderForm(id) {
  const o = Store.orders().find(x => x.id === id);
  if (!o) return;

  const box = openModal(`
    <div class="amsg__head"><h3>سفارش <span dir="ltr">${esc(o.code)}</span></h3><div class="spacer"></div><button class="mini-btn" id="mClose">${ai('close')}</button></div>
    <div class="amsg__body">
      <div class="dl" style="margin-bottom:22px">
        <div class="dl__row"><span>مشتری</span><b>${esc(o.customer)}</b></div>
        <div class="dl__row"><span>تلفن</span><b dir="ltr">${faNum(o.phone)}</b></div>
        <div class="dl__row"><span>آدرس</span><b style="max-width:64%;text-align:left">${esc(o.address)}</b></div>
        <div class="dl__row"><span>تاریخ ثبت</span><b>${faDate(o.date)}</b></div>
        ${o.note ? '<div class="dl__row"><span>یادداشت مشتری</span><b style="max-width:64%;text-align:left">' + esc(o.note) + '</b></div>' : ''}
      </div>

      <h4 style="font-size:13px;color:var(--blue-800);margin-bottom:12px">اقلام سفارش</h4>
      <div class="table-scroll" style="border:1px solid var(--line);border-radius:12px;margin-bottom:20px">
        <table class="tbl" style="min-width:auto">
          <thead><tr><th>کالا</th><th>قیمت واحد</th><th>تعداد</th><th>جمع</th></tr></thead>
          <tbody>
            ${o.items.map(i => `<tr>
              <td><b>${esc(i.name)}</b></td>
              <td>${money(i.price)}</td>
              <td>${faNum(i.qty)}</td>
              <td><b>${money(i.price * i.qty)}</b></td>
            </tr>`).join('')}
          </tbody>
        </table>
      </div>

      <div class="field">
        <label>تغییر وضعیت سفارش</label>
        <select id="oStatus">
          <option value="pending" ${o.status === 'pending' ? 'selected' : ''}>در انتظار پرداخت</option>
          <option value="processing" ${o.status === 'processing' ? 'selected' : ''}>در حال پردازش</option>
          <option value="shipped" ${o.status === 'shipped' ? 'selected' : ''}>ارسال شده</option>
          <option value="delivered" ${o.status === 'delivered' ? 'selected' : ''}>تحویل شده</option>
          <option value="cancelled" ${o.status === 'cancelled' ? 'selected' : ''}>لغو شده</option>
        </select>
      </div>

      <div style="display:flex;justify-content:space-between;align-items:center;padding:14px 18px;background:var(--blue-50);border-radius:12px;border:1px solid var(--blue-100)">
        <span style="font-size:13px;color:var(--ink-soft)">مبلغ کل</span>
        <b style="font-size:18px;color:var(--blue-800)">${money(o.total)} تومان</b>
      </div>
    </div>
    <div class="amsg__foot">
      <button class="btn btn--ghost btn--sm" id="mCancel">بستن</button>
      <button class="btn btn--sm" id="mSave">${ai('save')} ذخیره وضعیت</button>
    </div>`);

  box.querySelector('#mClose').onclick = closeModal;
  box.querySelector('#mCancel').onclick = closeModal;
  box.querySelector('#mSave').onclick = () => {
    Store.updateOrder(id, { status: box.querySelector('#oStatus').value });
    toast('وضعیت سفارش به‌روز شد');
    closeModal();
    renderView();
  };
}

/* ==========================================================================
   TICKETS
   ========================================================================== */
let ticketFilter = '';

function viewTickets() {
  let list = Store.tickets();
  if (ticketFilter) list = list.filter(t => t.status === ticketFilter);

  const counts = {
    '': Store.tickets().length,
    new: Store.tickets().filter(t => t.status === 'new').length,
    answered: Store.tickets().filter(t => t.status === 'answered').length,
    closed: Store.tickets().filter(t => t.status === 'closed').length
  };

  return `
  <div class="toolbar">
    <select id="ticketStatusSel">
      <option value="" ${ticketFilter === '' ? 'selected' : ''}>همه (${faNum(counts[''])})</option>
      <option value="new" ${ticketFilter === 'new' ? 'selected' : ''}>جدید (${faNum(counts.new)})</option>
      <option value="answered" ${ticketFilter === 'answered' ? 'selected' : ''}>پاسخ داده شده (${faNum(counts.answered)})</option>
      <option value="closed" ${ticketFilter === 'closed' ? 'selected' : ''}>بسته شده (${faNum(counts.closed)})</option>
    </select>
    <div class="spacer"></div>
    <span style="font-size:12.5px;color:var(--ink-mute)">${faNum(list.length)} تیکت</span>
  </div>

  <div class="panel">
    <div class="panel__head"><div><h2>سوالات و تیکت‌ها</h2><p>سوالات مشتریان از فرم تماس و پنل کاربری</p></div></div>
    <div class="panel__body panel__body--flush">
      <div class="table-scroll">
        <table class="tbl">
          <thead><tr><th>کد</th><th>فرستنده</th><th>موضوع</th><th>متن</th><th>وضعیت</th><th>تاریخ</th><th style="text-align:left">عملیات</th></tr></thead>
          <tbody>
            ${list.length ? list.map(t => {
              const st = ticketStatusInfo(t.status);
              return `<tr>
                <td data-label="کد"><b dir="ltr">${esc(t.code)}</b></td>
                <td data-label="فرستنده">
                  <div><b>${esc(t.name)}</b><br><span style="font-size:11px" dir="ltr">${faNum(t.phone || '')}</span></div>
                </td>
                <td data-label="موضوع">${esc(t.subject || '—')}</td>
                <td data-label="متن" style="max-width:280px">
                  <span style="font-size:12px;color:var(--ink-soft);display:block;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${esc(t.message)}</span>
                </td>
                <td data-label="وضعیت"><span class="pill ${st.cls}">${st.label}</span></td>
                <td data-label="تاریخ">${faDateShort(t.date)}</td>
                <td>
                  <div class="row-actions">
                    <button class="act act--primary" data-tview="${t.id}">${ai('reply')} پاسخ</button>
                    <button class="act act--danger" data-tdel="${t.id}">${ai('trash')} حذف</button>
                  </div>
                </td>
              </tr>`;
            }).join('') : '<tr><td colspan="7" style="text-align:center;padding:40px;color:var(--ink-mute)">تیکتی با این وضعیت نیست.</td></tr>'}
          </tbody>
        </table>
      </div>
    </div>
  </div>`;
}

function openTicketForm(id) {
  const t = Store.ticket(id);
  if (!t) return;
  const st = ticketStatusInfo(t.status);

  const box = openModal(`
    <div class="amsg__head"><h3>تیکت <span dir="ltr">${esc(t.code)}</span></h3><div class="spacer"></div><button class="mini-btn" id="mClose">${ai('close')}</button></div>
    <div class="amsg__body">
      <div class="dl" style="margin-bottom:20px">
        <div class="dl__row"><span>فرستنده</span><b>${esc(t.name)}</b></div>
        <div class="dl__row"><span>تلفن</span><b dir="ltr">${faNum(t.phone || '—')}</b></div>
        ${t.email ? '<div class="dl__row"><span>ایمیل</span><b dir="ltr">' + esc(t.email) + '</b></div>' : ''}
        <div class="dl__row"><span>موضوع</span><b>${esc(t.subject || '—')}</b></div>
        <div class="dl__row"><span>تاریخ</span><b>${faDate(t.date)}</b></div>
        <div class="dl__row"><span>وضعیت</span><b><span class="pill ${st.cls}">${st.label}</span></b></div>
      </div>

      <div style="padding:16px 18px;background:var(--paper);border:1px solid var(--line);border-radius:12px;margin-bottom:20px">
        <div style="font-size:11.5px;font-weight:800;color:var(--blue-600);margin-bottom:7px">متن پیام مشتری</div>
        <p style="font-size:13px;color:var(--ink-soft);line-height:2">${esc(t.message)}</p>
      </div>

      <div class="field">
        <label>پاسخ شما</label>
        <textarea id="tReply" placeholder="پاسخ خود را بنویسید. مشتری آن را در حساب کاربری می‌بیند." style="min-height:130px">${esc(t.reply || '')}</textarea>
      </div>

      <div class="field">
        <label>وضعیت تیکت</label>
        <select id="tStatus">
          <option value="new" ${t.status === 'new' ? 'selected' : ''}>جدید</option>
          <option value="answered" ${t.status === 'answered' ? 'selected' : ''}>پاسخ داده شد</option>
          <option value="closed" ${t.status === 'closed' ? 'selected' : ''}>بسته شده</option>
        </select>
      </div>
    </div>
    <div class="amsg__foot">
      <button class="btn btn--ghost btn--sm" id="mCancel">بستن</button>
      <button class="btn btn--sm" id="mSave">${ai('save')} ذخیره پاسخ</button>
    </div>`);

  box.querySelector('#mClose').onclick = closeModal;
  box.querySelector('#mCancel').onclick = closeModal;
  box.querySelector('#mSave').onclick = () => {
    const reply = box.querySelector('#tReply').value.trim();
    let status = box.querySelector('#tStatus').value;
    if (reply && status === 'new') status = 'answered';
    Store.updateTicket(id, { reply, status });
    toast('پاسخ ذخیره شد');
    closeModal();
    renderView();
  };
}

/* ==========================================================================
   REVIEWS
   ========================================================================== */
function viewReviews() {
  const list = Store.allReviews();
  const rate = Store.overallRating();

  return `
  <div class="toolbar">
    <div class="spacer"></div>
    <span style="font-size:12.5px;color:var(--ink-mute)">
      میانگین ${rate.count ? faNum(rate.avg.toFixed(1)) + ' از ۵ — ' + faNum(rate.percent) + '٪ رضایت' : 'بدون نظر'}
    </span>
  </div>

  <div class="panel">
    <div class="panel__head"><div><h2>نظرات و امتیازها</h2><p>${faNum(list.length)} نظر ثبت‌شده</p></div></div>
    <div class="panel__body panel__body--flush">
      <div class="table-scroll">
        <table class="tbl">
          <thead><tr><th>محصول</th><th>کاربر</th><th>امتیاز</th><th>متن</th><th>وضعیت</th><th>تاریخ</th><th style="text-align:left">عملیات</th></tr></thead>
          <tbody>
            ${list.length ? list.map(r => {
              const p = Store.product(r.pid);
              return `<tr>
                <td data-label="محصول"><b style="font-size:12.5px">${esc(p ? p.name : 'محصول حذف‌شده')}</b></td>
                <td data-label="کاربر">${esc(r.name || '—')}</td>
                <td data-label="امتیاز">
                  <div style="display:flex;align-items:center;gap:6px">
                    ${starsHtml(r.stars, 'sm')}<b style="font-size:12px">${faNum(r.stars)}</b>
                  </div>
                </td>
                <td data-label="متن" style="max-width:260px">
                  <span style="font-size:12px;color:var(--ink-soft);display:block;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${esc(r.text || '—')}</span>
                </td>
                <td data-label="وضعیت">
                  <span class="pill ${r.status === 'approved' ? 'pill--ok' : 'pill--warn'}">${r.status === 'approved' ? 'تأیید شده' : 'در انتظار'}</span>
                </td>
                <td data-label="تاریخ">${faDateShort(r.date)}</td>
                <td>
                  <div class="row-actions">
                    <button class="act act--primary" data-rtoggle="${r.id}">${r.status === 'approved' ? 'مخفی کن' : 'تأیید'}</button>
                    <button class="act act--danger" data-rdel="${r.id}">${ai('trash')} حذف</button>
                  </div>
                </td>
              </tr>`;
            }).join('') : '<tr><td colspan="7" style="text-align:center;padding:40px;color:var(--ink-mute)">هنوز نظری ثبت نشده است.</td></tr>'}
          </tbody>
        </table>
      </div>
    </div>
  </div>`;
}

/* ==========================================================================
   USERS
   ========================================================================== */
function viewUsers() {
  const users = Store.users();
  const orders = Store.orders();

  return `
  <div class="panel">
    <div class="panel__head"><div><h2>کاربران فروشگاه</h2><p>${faNum(users.length)} کاربر ثبت‌نام‌شده</p></div></div>
    <div class="panel__body panel__body--flush">
      <div class="table-scroll">
        <table class="tbl">
          <thead><tr><th>نام</th><th>ایمیل</th><th>تلفن</th><th>سفارش‌ها</th><th>تاریخ عضویت</th><th style="text-align:left">عملیات</th></tr></thead>
          <tbody>
            ${users.length ? users.map(u => {
              const n = orders.filter(o => o.userId === u.id).length;
              return `<tr>
                <td data-label="نام"><b>${esc(u.name)}</b></td>
                <td data-label="ایمیل" dir="ltr" style="font-size:12px">${esc(u.email)}</td>
                <td data-label="تلفن" dir="ltr" style="font-size:12px">${faNum(u.phone)}</td>
                <td data-label="سفارش‌ها"><span class="pill pill--info">${faNum(n)}</span></td>
                <td data-label="تاریخ عضویت">${faDateShort(u.createdAt)}</td>
                <td>
                  <div class="row-actions">
                    <button class="act act--danger" data-udel="${u.id}">${ai('trash')} حذف</button>
                  </div>
                </td>
              </tr>`;
            }).join('') : '<tr><td colspan="6" style="text-align:center;padding:40px;color:var(--ink-mute)">هنوز کاربری ثبت‌نام نکرده است.</td></tr>'}
          </tbody>
        </table>
      </div>
    </div>
  </div>`;
}

/* ==========================================================================
   SETTINGS
   ========================================================================== */
const QUICK_LINKS_SEED = [
  { href: 'shop.html?sort=popular', label: 'پرفروش‌ها' },
  { href: 'shop.html?cat=c1', label: 'پمپ‌ها' },
  { href: 'shop.html?cat=c6', label: 'لوله‌ها و اتصالات' },
  { href: 'shop.html?cat=c9', label: 'اتومات و ست کنترل' }
];

function viewSettings() {
  const s = Store.settings();
  const rate = Store.overallRating();

  return `
  <!-- لوگو -->
  <div class="panel">
    <div class="panel__head"><div><h2>لوگوی سایت</h2><p>در هدر، فوتر و پنل نمایش داده می‌شود</p></div></div>
    <div class="panel__body">
      <div class="img-pick">
        <span class="img-pick__box" id="logoBox" style="width:130px;height:96px">
          ${s.logo ? '<img src="' + s.logo + '" alt="لوگو" style="object-fit:contain">' : ai('image')}
        </span>
        <div style="flex:1">
          <input type="file" id="sLogo" accept="image/*" style="padding:8px;font-size:12px">
          <div class="img-pick__hint">
            تصویر PNG یا SVG با پس‌زمینه شفاف، حداکثر ۵۰۰ کیلوبایت.
            لوگو بدون کادر و درشت، کنار نام سایت در هدر نمایش داده می‌شود — پس بهترین حالت، یک تصویر افقی یا مربع با پس‌زمینه شفاف است.
            اگر خالی بگذارید، نشان پیش‌فرض نمایش داده می‌شود.
          </div>
          ${s.logo ? '<button class="btn btn--ghost btn--sm" id="sLogoClear" style="margin-top:10px">حذف لوگو</button>' : ''}
        </div>
      </div>
    </div>
  </div>

  <!-- اطلاعات فروشگاه -->
  <div class="panel">
    <div class="panel__head"><div><h2>اطلاعات فروشگاه</h2><p>در هدر، فوتر و صفحات سایت نمایش داده می‌شود</p></div></div>
    <div class="panel__body">
      <div class="form-grid">
        <div class="field"><label>نام سایت</label><input id="sSiteName" value="${esc(s.siteName)}"></div>
        <div class="field"><label>شعار / توضیح کوتاه</label><input id="sTagline" value="${esc(s.tagline)}"></div>
        <div class="field full"><label>متن کوتاه فوتر (زیر لوگو)</label><textarea id="sFooterAbout" style="min-height:70px">${esc(s.footerAbout || s.tagline)}</textarea></div>
      </div>
    </div>
  </div>

  <!-- راه‌های ارتباطی -->
  <div class="panel">
    <div class="panel__head"><div><h2>راه‌های ارتباطی</h2><p>در صفحه تماس با ما و فوتر نمایش داده می‌شود</p></div></div>
    <div class="panel__body">
      <div class="form-grid">
        <div class="field"><label>تلفن ثابت</label><input id="sPhone" value="${esc(s.phone)}" dir="ltr"></div>
        <div class="field"><label>موبایل</label><input id="sMobile" value="${esc(s.mobile)}" dir="ltr"></div>
        <div class="field"><label>ایمیل</label><input id="sEmail" value="${esc(s.email)}" dir="ltr"></div>
        <div class="field"><label>ساعات کاری</label><input id="sWorkHours" value="${esc(s.workHours)}"></div>
        <div class="field"><label>واتساپ (شماره)</label><input id="sWhatsapp" value="${esc(s.whatsapp)}" dir="ltr"></div>
        <div class="field"><label>تلگرام (بدون @)</label><input id="sTelegram" value="${esc(s.telegram)}" dir="ltr"></div>
        <div class="field"><label>اینستاگرام (بدون @)</label><input id="sInstagram" value="${esc(s.instagram)}" dir="ltr"></div>
        <div class="field"><label>لینک نقشه (embed)</label><input id="sMapUrl" value="${esc(s.mapUrl)}" dir="ltr" placeholder="https://www.google.com/maps/embed?..."></div>
        <div class="field full"><label>آدرس مغازه</label><textarea id="sAddress">${esc(s.address)}</textarea></div>
      </div>
    </div>
  </div>

  <!-- آمار صفحه اصلی -->
  <div class="panel">
    <div class="panel__head"><div><h2>آمار صفحه اصلی</h2><p>سال تجربه و استان تحت پوشش را خودتان وارد کنید. «مشتری راضی» و «محصول» خودکار محاسبه می‌شوند.</p></div></div>
    <div class="panel__body">
      <div class="form-grid">
        <div class="field">
          <label>سال تجربه</label>
          <input id="sStatYears" value="${esc(s.statYears)}" placeholder="۱۵">
          <div class="field__hint">خالی بگذارید تا در صفحه اصلی نمایش داده نشود.</div>
        </div>
        <div class="field">
          <label>تعداد استان تحت پوشش</label>
          <input id="sStatProvinces" value="${esc(s.statProvinces)}" placeholder="۳۱">
          <div class="field__hint">خالی بگذارید تا نمایش داده نشود.</div>
        </div>
        <div class="field">
          <label>درصد رضایت مشتریان (خودکار)</label>
          <input value="${rate.count ? faNum(rate.percent) + '٪ از ' + faNum(rate.count) + ' نظر' : 'بدون نظر'}" disabled>
          <div class="field__hint">از میانگین ستاره‌های محصولات محاسبه می‌شود.</div>
        </div>
        <div class="field">
          <label>مشتری راضی (خودکار)</label>
          <input value="${faNum(Store.happyCustomers())} مشتری" disabled>
          <div class="field__hint">از تعداد سفارش‌ها و نظرات یکتا محاسبه می‌شود.</div>
        </div>
      </div>
    </div>
  </div>

  <!-- ضمانت و اصالت -->
  <div class="panel">
    <div class="panel__head"><div><h2>ضمانت و اصالت</h2><p>در نوار اعتماد صفحه اصلی و صفحه محصول</p></div></div>
    <div class="panel__body">
      <div class="form-grid">
        <div class="field"><label>عنوان ضمانت</label><input id="sWarrantyTitle" value="${esc(s.warrantyTitle)}"></div>
        <div class="field"><label>متن ضمانت</label><input id="sWarrantyText" value="${esc(s.warrantyText)}"></div>
        <div class="field"><label>توضیح گارانتی</label><input id="sWarrantyNote" value="${esc(s.warrantyNote)}"></div>
        <div class="field"><label>عنوان اصالت کالا</label><input id="sAuthTitle" value="${esc(s.authenticityTitle)}"></div>
        <div class="field full"><label>متن اصالت کالا</label><input id="sAuthText" value="${esc(s.authenticityText)}"></div>
      </div>
    </div>
  </div>

  <!-- ارسال -->
  <div class="panel">
    <div class="panel__head"><div><h2>ارسال ۲۴ ساعته</h2><p>شهرهایی که ارسال ۲۴ ساعته دارند را خودتان تعیین کنید</p></div></div>
    <div class="panel__body">
      <div class="form-grid">
        <div class="field"><label>عنوان</label><input id="sShipTitle" value="${esc(s.shippingTitle)}"></div>
        <div class="field"><label>شهرهای ارسال ۲۴ ساعته</label><input id="sShipCities" value="${esc(s.shippingCities)}" placeholder="تهران و کرج"></div>
        <div class="field full"><label>توضیح ارسال</label><input id="sShipNote" value="${esc(s.shippingNote)}"></div>
      </div>
    </div>
  </div>

  <!-- متن صفحه اصلی -->
  <div class="panel">
    <div class="panel__head"><div><h2>متن صفحه اصلی</h2></div></div>
    <div class="panel__body">
      <div class="form-grid">
        <div class="field full"><label>تیتر اصلی</label><input id="sHeroTitle" value="${esc(s.heroTitle)}"></div>
        <div class="field full"><label>متن زیر تیتر</label><textarea id="sHeroText">${esc(s.heroText)}</textarea></div>
        <div class="field full"><label>نوار اعلان بالای سایت</label><input id="sAnnouncement" value="${esc(s.announcement)}"></div>
      </div>
    </div>
  </div>

  <!-- درباره ما -->
  <div class="panel">
    <div class="panel__head"><div><h2>درباره ما</h2><p>متن و آمار کنار آن، قابل ویرایش</p></div></div>
    <div class="panel__body">
      <div class="form-grid">
        <div class="field full"><label>تیتر درباره ما</label><input id="sAboutTitle" value="${esc(s.aboutTitle)}"></div>
        <div class="field full">
          <label>متن درباره ما</label>
          <textarea id="sAboutText" style="min-height:190px">${esc(s.aboutText)}</textarea>
          <div class="field__hint">هر پاراگراف را با یک خط خالی از پاراگراف بعدی جدا کنید.</div>
        </div>
      </div>

      <h4 style="font-size:13px;color:var(--blue-800);margin:22px 0 12px">آمار کنار متن (چهار عدد)</h4>
      <div class="form-grid" id="aboutStatsFields">
        ${(s.aboutStats || []).map((st, i) => `
          <div class="field"><label>عدد ${faNum(i + 1)}</label><input data-statv="${i}" value="${esc(st.v)}"></div>
          <div class="field"><label>برچسب ${faNum(i + 1)}</label><input data-statl="${i}" value="${esc(st.l)}"></div>
        `).join('')}
      </div>
      <div class="field__hint" style="margin-top:8px">
        می‌توانید از این کدها استفاده کنید: <b dir="ltr">{products}</b> تعداد محصول، <b dir="ltr">{customers}</b> مشتری راضی، <b dir="ltr">{years}</b> سال تجربه، <b dir="ltr">{provinces}</b> استان.
      </div>
    </div>
  </div>

  <!-- فروش و ارسال -->
  <div class="panel">
    <div class="panel__head"><div><h2>فروش و ارسال</h2></div></div>
    <div class="panel__body">
      <div class="form-grid">
        <div class="field"><label>سقف ارسال رایگان (تومان)</label><input id="sFreeShip" type="number" value="${s.freeShipLimit}" step="100000"></div>
        <div class="field"><label>هزینه ارسال (تومان)</label><input id="sShipCost" type="number" value="${s.shipCost}" step="10000"></div>
        <div class="field"><label>درصد مالیات بر ارزش افزوده</label><input id="sTax" type="number" value="${s.taxPercent}" min="0" max="30"></div>
      </div>
    </div>
  </div>

  <!-- دسترسی سریع فوتر -->
  <div class="panel">
    <div class="panel__head"><div><h2>دسترسی سریع فوتر</h2><p>لینک‌هایی که در ستون «دسترسی سریع» پایین سایت نمایش داده می‌شوند</p></div></div>
    <div class="panel__body">
      <div id="quickRows" style="display:grid;gap:10px">
        ${(Array.isArray(s.quickLinks) && s.quickLinks.length ? s.quickLinks : QUICK_LINKS_SEED).map((l, i) => `
          <div class="field--row" data-quick style="margin-bottom:0">
            <input placeholder="عنوان (مثلاً پرفروش‌ها)" value="${esc(l.label)}" data-qlabel>
            <div style="display:flex;gap:8px">
              <input placeholder="لینک (shop.html?cat=c1)" value="${esc(l.href)}" data-qhref dir="ltr" style="flex:1">
              <button class="mini-btn mini-btn--danger" data-qdel>${ai('close')}</button>
            </div>
          </div>`).join('')}
      </div>
      <button class="btn btn--ghost btn--sm" id="addQuick" style="margin-top:12px">${ai('plus')} افزودن لینک</button>
      <div class="field__hint" style="margin-top:10px">
        نمونه لینک‌ها: <b dir="ltr">shop.html</b> فروشگاه، <b dir="ltr">shop.html?sort=popular</b> پرفروش‌ها،
        <b dir="ltr">shop.html?cat=c1</b> یک دسته خاص (شناسه دسته از بخش «دسته‌بندی‌ها»).
      </div>
    </div>
  </div>

  <!-- حساب مدیریت -->
  <div class="panel">
    <div class="panel__head"><div><h2>حساب مدیریت</h2><p>نام کاربری و رمز ورود به پنل</p></div></div>
    <div class="panel__body">
      <div class="form-grid">
        <div class="field"><label>نام کاربری</label><input id="sAdminUser" value="${esc(s.adminUser)}" dir="ltr"></div>
        <div class="field"><label>رمز عبور</label><input id="sAdminPass" value="${esc(s.adminPass)}" dir="ltr"></div>
      </div>
      <div class="login-hint" style="margin-top:6px">
        <b>توجه:</b> این پنل بدون سرور کار می‌کند و داده‌ها در حافظه مرورگر ذخیره می‌شوند. برای فروشگاه واقعی روی اینترنت، به بک‌اند و دیتابیس نیاز دارید.
      </div>
    </div>
  </div>

  <div style="display:flex;gap:10px;justify-content:flex-end;flex-wrap:wrap">
    <button class="btn btn--ghost" id="sReset">بازنشانی به داده‌های اولیه</button>
    <button class="btn" id="sSave">${ai('save')} ذخیره تنظیمات</button>
  </div>`;
}

/* ==========================================================================
   ROUTER
   ========================================================================== */
function renderView() {
  const root = document.getElementById('viewRoot');
  const title = document.getElementById('viewTitle');
  const sub = document.getElementById('viewSub');
  if (!root) return;

  const titles = {
    dashboard: ['داشبورد', 'خلاصه وضعیت فروشگاه'],
    products: ['محصولات', 'افزودن، ویرایش و انتخاب پرفروش‌های صفحه اصلی'],
    categories: ['دسته‌بندی‌ها', 'ساختار محصولات فروشگاه'],
    orders: ['سفارش‌ها', 'پیگیری و تغییر وضعیت'],
    tickets: ['سوالات و تیکت‌ها', 'پاسخ به سوالات مشتریان'],
    reviews: ['نظرات و امتیازها', 'مدیریت امتیازهای ثبت‌شده'],
    users: ['کاربران', 'کاربران ثبت‌نام‌شده فروشگاه'],
    settings: ['تنظیمات سایت', 'محتوای صفحات، آمار، ضمانت و ارسال']
  };

  const t = titles[currentView] || titles.dashboard;
  title.textContent = t[0];
  sub.textContent = t[1];

  document.querySelectorAll('.side__nav a[data-view]').forEach(a => {
    a.classList.toggle('is-active', a.dataset.view === currentView);
  });

  if (currentView === 'dashboard') root.innerHTML = viewDashboard();
  else if (currentView === 'products') root.innerHTML = viewProducts();
  else if (currentView === 'categories') root.innerHTML = viewCategories();
  else if (currentView === 'orders') root.innerHTML = viewOrders();
  else if (currentView === 'tickets') root.innerHTML = viewTickets();
  else if (currentView === 'reviews') root.innerHTML = viewReviews();
  else if (currentView === 'users') root.innerHTML = viewUsers();
  else if (currentView === 'settings') root.innerHTML = viewSettings();

  wireView();
}

function wireView() {
  const root = document.getElementById('viewRoot');

  /* dashboard quick actions */
  const qa = root.querySelector('#qAddProduct');
  if (qa) qa.onclick = () => openProductForm(null);
  const qt = root.querySelector('#qTickets');
  if (qt) qt.onclick = () => { location.hash = '#tickets'; };
  const qo = root.querySelector('#qOrders');
  if (qo) qo.onclick = () => { location.hash = '#orders'; };
  const qs = root.querySelector('#qSettings');
  if (qs) qs.onclick = () => { location.hash = '#settings'; };

  /* products */
  const np = root.querySelector('#newProduct');
  if (np) np.onclick = () => openProductForm(null);

  const ps = root.querySelector('#prodSearch');
  if (ps) {
    ps.oninput = () => {
      prodQuery = ps.value;
      const pos = ps.selectionStart;
      renderView();
      const n = document.getElementById('prodSearch');
      if (n) { n.focus(); n.setSelectionRange(pos, pos); }
    };
  }
  const pcs = root.querySelector('#prodCatSel');
  if (pcs) pcs.onchange = () => { prodCatFilter = pcs.value; renderView(); };

  root.querySelectorAll('[data-edit]').forEach(b => b.onclick = () => openProductForm(b.dataset.edit));
  root.querySelectorAll('[data-del]').forEach(b => b.onclick = () => {
    const p = Store.product(b.dataset.del);
    confirmDialog('حذف محصول', 'محصول «' + (p ? p.name : '') + '» برای همیشه حذف می‌شود. مطمئن هستید؟', () => {
      Store.deleteProduct(b.dataset.del);
      toast('محصول حذف شد');
      renderView();
    });
  });

  /* تیک پرفروش صفحه اصلی */
  root.querySelectorAll('[data-featured]').forEach(sw => {
    sw.onchange = () => {
      Store.toggleFeatured(sw.dataset.featured);
      toast(sw.checked ? 'به پرفروش‌های صفحه اصلی اضافه شد' : 'از پرفروش‌های صفحه اصلی حذف شد');
    };
  });

  /* categories */
  const nc = root.querySelector('#newCat');
  if (nc) nc.onclick = () => openCatForm(null);
  root.querySelectorAll('[data-cedit]').forEach(b => b.onclick = () => openCatForm(b.dataset.cedit));
  root.querySelectorAll('[data-cdel]').forEach(b => b.onclick = () => {
    const c = Store.category(b.dataset.cdel);
    const n = Store.products().filter(p => p.cat === b.dataset.cdel).length;
    confirmDialog('حذف دسته‌بندی',
      'دسته «' + (c ? c.name : '') + '» حذف می‌شود.' + (n ? ' ' + faNum(n) + ' محصول بدون دسته خواهند شد.' : ''),
      () => { Store.deleteCategory(b.dataset.cdel); toast('دسته حذف شد'); renderView(); });
  });

  /* orders */
  const oss = root.querySelector('#orderStatusSel');
  if (oss) oss.onchange = () => { orderStatusFilter = oss.value; renderView(); };
  root.querySelectorAll('[data-oedit]').forEach(b => b.onclick = () => openOrderForm(b.dataset.oedit));
  root.querySelectorAll('[data-odel]').forEach(b => b.onclick = () => {
    confirmDialog('حذف سفارش', 'این سفارش از لیست حذف می‌شود. مطمئن هستید؟', () => {
      Store.deleteOrder(b.dataset.odel);
      toast('سفارش حذف شد');
      renderView();
    });
  });

  /* tickets */
  const tss = root.querySelector('#ticketStatusSel');
  if (tss) tss.onchange = () => { ticketFilter = tss.value; renderView(); };
  root.querySelectorAll('[data-tview]').forEach(b => b.onclick = () => openTicketForm(b.dataset.tview));
  root.querySelectorAll('[data-tdel]').forEach(b => b.onclick = () => {
    confirmDialog('حذف تیکت', 'این تیکت حذف می‌شود. مطمئن هستید؟', () => {
      Store.deleteTicket(b.dataset.tdel);
      toast('تیکت حذف شد');
      renderView();
    });
  });

  /* reviews */
  root.querySelectorAll('[data-rtoggle]').forEach(b => b.onclick = () => {
    const r = Store.allReviews().find(x => x.id === b.dataset.rtoggle);
    if (!r) return;
    Store.setReviewStatus(r.id, r.status === 'approved' ? 'pending' : 'approved');
    toast('وضعیت نظر تغییر کرد');
    renderView();
  });
  root.querySelectorAll('[data-rdel]').forEach(b => b.onclick = () => {
    confirmDialog('حذف نظر', 'این نظر حذف می‌شود. مطمئن هستید؟', () => {
      Store.deleteReview(b.dataset.rdel);
      toast('نظر حذف شد');
      renderView();
    });
  });

  /* users */
  root.querySelectorAll('[data-udel]').forEach(b => b.onclick = () => {
    confirmDialog('حذف کاربر', 'حساب این کاربر حذف می‌شود. مطمئن هستید؟', () => {
      Store.deleteUser(b.dataset.udel);
      toast('کاربر حذف شد');
      renderView();
    });
  });

  /* settings */
  const sSave = root.querySelector('#sSave');
  if (sSave) sSave.onclick = () => {
    const g = id => root.querySelector('#' + id);
    const val = id => { const el = g(id); return el ? el.value.trim() : ''; };

    const aboutStats = (Store.settings().aboutStats || []).map((st, i) => ({
      v: (root.querySelector('[data-statv="' + i + '"]') || {}).value || st.v,
      l: (root.querySelector('[data-statl="' + i + '"]') || {}).value || st.l
    }));

    /* دسترسی سریع فوتر */
    const quickLinks = [];
    root.querySelectorAll('[data-quick]').forEach(r => {
      const label = (r.querySelector('[data-qlabel]') || {}).value || '';
      const href = (r.querySelector('[data-qhref]') || {}).value || '';
      if (label.trim() && href.trim()) quickLinks.push({ label: label.trim(), href: href.trim() });
    });

    Store.updateSettings({
      siteName: val('sSiteName'),
      tagline: val('sTagline'),
      footerAbout: val('sFooterAbout'),
      phone: val('sPhone'),
      mobile: val('sMobile'),
      email: val('sEmail'),
      workHours: val('sWorkHours'),
      whatsapp: val('sWhatsapp'),
      telegram: val('sTelegram'),
      instagram: val('sInstagram'),
      mapUrl: val('sMapUrl'),
      address: val('sAddress'),
      statYears: val('sStatYears'),
      statProvinces: val('sStatProvinces'),
      warrantyTitle: val('sWarrantyTitle'),
      warrantyText: val('sWarrantyText'),
      warrantyNote: val('sWarrantyNote'),
      authenticityTitle: val('sAuthTitle'),
      authenticityText: val('sAuthText'),
      shippingTitle: val('sShipTitle'),
      shippingCities: val('sShipCities'),
      shippingNote: val('sShipNote'),
      heroTitle: val('sHeroTitle'),
      heroText: val('sHeroText'),
      announcement: val('sAnnouncement'),
      aboutTitle: val('sAboutTitle'),
      aboutText: val('sAboutText'),
      aboutStats,
      quickLinks,
      freeShipLimit: Number(val('sFreeShip')) || 0,
      shipCost: Number(val('sShipCost')) || 0,
      taxPercent: Number(val('sTax')) || 0,
      adminUser: val('sAdminUser') || 'admin',
      adminPass: val('sAdminPass') || 'parsabi1234'
    });
    toast('تنظیمات ذخیره شد');
    renderShellBrand();
    renderView();
  };

  /* لوگو */
  const logoInput = root.querySelector('#sLogo');
  if (logoInput) {
    logoInput.onchange = e => {
      const f = e.target.files[0];
      if (!f) return;
      if (f.size > 500 * 1024) { toast('حجم لوگو بیش از ۵۰۰ کیلوبایت است', 'err'); e.target.value = ''; return; }
      const r = new FileReader();
      r.onload = ev => {
        Store.updateSettings({ logo: ev.target.result });
        toast('لوگو ذخیره شد');
        renderView();
        renderShellBrand();
      };
      r.readAsDataURL(f);
    };
  }
  const logoClear = root.querySelector('#sLogoClear');
  if (logoClear) logoClear.onclick = () => {
    Store.updateSettings({ logo: null });
    toast('لوگو حذف شد');
    renderView();
    renderShellBrand();
  };

  /* دسترسی سریع فوتر */
  const addQuick = root.querySelector('#addQuick');
  if (addQuick) addQuick.onclick = () => {
    const row = document.createElement('div');
    row.className = 'field--row';
    row.style.marginBottom = '0';
    row.setAttribute('data-quick', '');
    row.innerHTML = '<input placeholder="عنوان" data-qlabel><div style="display:flex;gap:8px">' +
      '<input placeholder="shop.html?cat=c1" data-qhref dir="ltr" style="flex:1">' +
      '<button class="mini-btn mini-btn--danger" data-qdel>' + ai('close') + '</button></div>';
    root.querySelector('#quickRows').appendChild(row);
    row.querySelector('[data-qdel]').onclick = () => row.remove();
  };
  root.querySelectorAll('[data-qdel]').forEach(b => b.onclick = () => b.closest('[data-quick]').remove());

  const sReset = root.querySelector('#sReset');
  if (sReset) sReset.onclick = () => {
    confirmDialog('بازنشانی داده‌ها', 'همه محصولات، سفارش‌ها و تنظیمات به حالت اولیه برمی‌گردد. این کار قابل بازگشت نیست.', () => {
      Store.reset();
      toast('داده‌ها بازنشانی شد');
      renderShellBrand();
      renderView();
    });
  };
}

function renderShellBrand() {
  const s = Store.settings();
  const b = document.querySelector('.side__brand b');
  if (b) b.textContent = s.siteName;
  const mark = document.querySelector('.side__brand .logo__mark');
  if (mark) {
    mark.className = 'logo__mark' + (s.logo ? ' logo__mark--img' : '');
    mark.innerHTML = s.logo ? '<img src="' + s.logo + '" alt="">' : LOGO_MARK;
  }
}

/* ==========================================================================
   BOOT
   ========================================================================== */
function boot() {
  const app = document.getElementById('app');

  if (!isLoggedIn()) {
    app.innerHTML = `
    <div class="login-wrap">
      <div class="login-card">
        <a href="../index.html" class="logo">
          <span class="logo__mark">${LOGO_MARK}</span>
          <span class="logo__text"><b>${esc(Store.settings().siteName)}</b><span>PARS ABI</span></span>
        </a>
        <h2>ورود به پنل مدیریت</h2>
        <p>برای مدیریت محصولات و سفارش‌ها وارد شوید</p>
        <form id="loginForm">
          <div class="field"><label for="lUser">نام کاربری</label><input id="lUser" placeholder="admin" autocomplete="username" dir="ltr"></div>
          <div class="field"><label for="lPass">رمز عبور</label><input id="lPass" type="password" placeholder="••••••••" autocomplete="current-password" dir="ltr"></div>
          <button class="btn btn--block btn--lg" type="submit">ورود</button>
        </form>
        <div class="login-hint">
          <b>ورود پیش‌فرض:</b> نام کاربری <b>admin</b> و رمز <b>parsabi1234</b><br>
          این اطلاعات را می‌توانید در بخش تنظیمات پنل تغییر دهید.
        </div>
      </div>
    </div>`;

    document.getElementById('loginForm').onsubmit = e => {
      e.preventDefault();
      const u = document.getElementById('lUser').value;
      const p = document.getElementById('lPass').value;
      if (login(u, p)) {
        boot();
      } else {
        toast('نام کاربری یا رمز عبور اشتباه است', 'err');
        document.getElementById('lPass').value = '';
      }
    };
    return;
  }

  app.innerHTML = renderShell();

  const side = document.getElementById('side');
  const back = document.getElementById('sideBack');
  const toggle = document.getElementById('sideToggle');
  if (toggle) toggle.onclick = () => { side.classList.add('is-open'); back.classList.add('is-open'); };
  if (back) back.onclick = () => { side.classList.remove('is-open'); back.classList.remove('is-open'); };

  document.getElementById('logoutBtn').onclick = logout;
  document.getElementById('resetDb').onclick = e => {
    e.preventDefault();
    confirmDialog('بازنشانی داده‌ها', 'همه داده‌ها به حالت اولیه برمی‌گردد. مطمئن هستید؟', () => {
      Store.reset();
      toast('داده‌ها بازنشانی شد');
      renderView();
    });
  };

  document.getElementById('modal').addEventListener('click', e => {
    if (e.target.id === 'modal') closeModal();
  });

  const fromHash = () => {
    const k = (location.hash || '#dashboard').replace('#', '');
    currentView = MENU.some(m => m.key === k) ? k : 'dashboard';
    renderView();
    if (window.innerWidth <= 900) { side.classList.remove('is-open'); back.classList.remove('is-open'); }
  };
  window.addEventListener('hashchange', fromHash);
  fromHash();
}

document.addEventListener('DOMContentLoaded', boot);
