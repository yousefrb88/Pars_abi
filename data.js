/* ==========================================================================
   پارس آبی — Data Layer  (v2)
   ذخیره‌سازی: localStorage  |  کلید: parsabi_db_v2
   ========================================================================== */

const PA_ICONS = {
  pump: '<path d="M12 3v3M12 18v3M3 12h3M18 12h3"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/><path d="M17 7l2-2M7 17l-2 2M17 17l2 2M7 7L5 5"/>',
  submersible: '<rect x="9" y="2" width="6" height="20" rx="3"/><path d="M12 6v4M12 14v4"/><path d="M4 12h3M17 12h3"/>',
  industrial: '<rect x="3" y="8" width="8" height="12" rx="2"/><path d="M11 12h5a4 4 0 0 1 4 4v4"/><circle cx="7" cy="13" r="2"/><path d="M3 5h8"/>',
  filter: '<path d="M4 4h16l-6 8v8l-4-2v-6z"/><path d="M9 8h6"/>',
  tank: '<path d="M4 8c0-2 3.6-3 8-3s8 1 8 3v8c0 2-3.6 3-8 3s-8-1-8-3z"/><path d="M4 12c0 2 3.6 3 8 3s8-1 8-3"/>',
  pipe: '<path d="M3 9h6a3 3 0 0 1 3 3v0a3 3 0 0 0 3 3h6"/><rect x="2" y="6" width="4" height="6" rx="1"/><rect x="18" y="12" width="4" height="6" rx="1"/>',
  valve: '<circle cx="12" cy="12" r="4"/><path d="M12 2v6M12 16v6M2 12h6M16 12h6"/><path d="M6 6l3 3M18 18l-3-3"/>',
  gauge: '<circle cx="12" cy="12" r="9"/><path d="M12 12l4-3"/><circle cx="12" cy="12" r="1.5"/>',
  electric: '<rect x="4" y="3" width="16" height="18" rx="2"/><path d="M13 7l-3 5h4l-3 5"/>',
  booster: '<rect x="2" y="9" width="6" height="10" rx="2"/><rect x="16" y="9" width="6" height="10" rx="2"/><path d="M8 14h8"/><path d="M12 4v5"/>',
  pool: '<path d="M2 16c2 0 2 2 4 2s2-2 4-2 2 2 4 2 2-2 4-2 2 2 4 2"/><path d="M2 20c2 0 2 2 4 2s2-2 4-2 2 2 4 2 2-2 4-2 2 2 4 2"/><path d="M8 12V6a2 2 0 0 1 4 0v6"/>',
  automatic: '<rect x="3" y="6" width="18" height="12" rx="3"/><circle cx="8.5" cy="12" r="2"/><path d="M13.5 10h4M13.5 14h3"/>',
  star: '<path d="M12 3l2.9 5.9 6.5.9-4.7 4.6 1.1 6.5L12 17.8 6.2 20.9l1.1-6.5L2.6 9.8l6.5-.9z"/>'
};

/* ---------- Seed ---------- */
const PA_SEED = {
  settings: {
    siteName: 'پارس آبی',
    tagline: 'تأمین‌کننده تخصصی پمپ و تجهیزات آب',
    logo: null,

    phone: '021-88776655',
    mobile: '0912-3456789',
    email: 'info@parsabi.ir',
    address: 'تهران، خیابان ولیعصر، بالاتر از میدان ونک، پلاک ۲۴۸، طبقه سوم',
    workHours: 'شنبه تا پنجشنبه، ۸:۳۰ تا ۱۸:۰۰',
    mapUrl: '',
    instagram: 'parsabi.official',
    telegram: 'parsabi_support',
    whatsapp: '09123456789',

    freeShipLimit: 20000000,
    shipCost: 450000,
    taxPercent: 9,

    heroTitle: 'آب را به جریان بیندازید',
    heroText: 'از پمپ خانگی تا تجهیزات تصفیه و اتصالات؛ تجهیزات آب با ضمانت اصالت، مشاوره مهندسی رایگان و ارسال به سراسر کشور.',
    announcement: 'ارسال رایگان سفارش‌های بالای ۲۰ میلیون تومان',

    /* آمار صفحه اصلی — دستی */
    statYears: '۱۵',
    statProvinces: '۳۱',
    showCustomersStat: true,

    /* ضمانت و اصالت */
    warrantyTitle: 'ضمانت اصالت کالا',
    warrantyText: 'گارانتی رسمی شرکتی',
    warrantyNote: '۱۸ ماه گارانتی رسمی',
    authenticityTitle: 'اصالت قابل اثبات',
    authenticityText: 'فاکتور رسمی و کارت گارانتی',

    /* ارسال */
    shippingTitle: 'ارسال ۲۴ ساعته',
    shippingCities: 'تهران و کرج',
    shippingNote: 'ارسال به سراسر کشور',

    /* درباره ما */
    aboutTitle: 'از یک انبار کوچک تا تأمین‌کننده ۳۱ استان',
    aboutText: 'پارس آبی کار خود را با یک انبار کوچک در بازار تهران و تمرکز روی پمپ‌های خانگی آغاز کرد. آن روزها مشکل اصلی مشتری‌ها فقط پیدا کردن کالا نبود؛ نبودن مشاوره درست بود. پمپی که برای یک ساختمان چهار طبقه مناسب نبود، یا پمپی که سه برابر ظرفیت لازم بود و برق مصرف می‌کرد.\n\nتصمیم گرفتیم قبل از فروش، محاسبه کنیم. امروز تیم فنی ما برای هر پروژه دبی و ارتفاع مورد نیاز را محاسبه می‌کند و بعد پیشنهاد می‌دهد. این کار سرعت فروش را کم می‌کند، اما مشتری برنمی‌گردد که بگوید پمپ اشتباهی خریده.\n\nحالا با انبار مرکزی در تهران، بیش از ۲۶۰ مدل تجهیزات آب از برندهای معتبر را تأمین می‌کنیم.',
    aboutStats: [
      { v: '۱۵+', l: 'سال تجربه در صنعت آب' },
      { v: '{products}+', l: 'مدل محصول فعال' },
      { v: '۴٬۲۰۰', l: 'مشتری حقیقی و حقوقی' },
      { v: '۳۱', l: 'استان تحت پوشش ارسال' }
    ],

    /* پرفروش‌های صفحه اصلی — با تیک انتخاب می‌شود */
    featuredIds: ['p1', 'p2', 'p4', 'p5', 'p7', 'p10', 'p11', 'p14'],

    /* دسترسی سریع فوتر — از پنل قابل ویرایش است */
    quickLinks: [
      { href: 'shop.html?sort=popular', label: 'پرفروش‌ها' },
      { href: 'shop.html?cat=c1', label: 'پمپ‌ها' },
      { href: 'shop.html?cat=c6', label: 'لوله‌ها و اتصالات' },
      { href: 'shop.html?cat=c9', label: 'اتومات و ست کنترل' }
    ],

    adminUser: 'admin',
    adminPass: 'parsabi1234'
  },

  categories: [
    { id: 'c1', name: 'پمپ خانگی', slug: 'home-pump', icon: 'pump', desc: 'پمپ‌های محیطی و بشقابی برای آبرسانی ساختمان' },
    { id: 'c3', name: 'پمپ شناور و چاه', slug: 'well-pump', icon: 'submersible', desc: 'پمپ‌های چاه عمیق و شناور چهار اینچ' },
    { id: 'c4', name: 'تصفیه آب', slug: 'water-treatment', icon: 'filter', desc: 'دستگاه‌های تصفیه خانگی و پکیج‌های صنعتی RO' },
    { id: 'c5', name: 'مخزن و منبع آب', slug: 'tank', icon: 'tank', desc: 'مخزن پلی‌اتیلن، استیل و منبع انبساط' },
    { id: 'c6', name: 'لوله و اتصالات', slug: 'pipes', icon: 'pipe', desc: 'لوله پلی‌اتیلن، پی‌وی‌سی و اتصالات فشاری' },
    { id: 'c7', name: 'شیرآلات و کنترل', slug: 'valves', icon: 'valve', desc: 'شیر فلکه، یکطرفه، پرس استات و کنترل سطح' },
    { id: 'c9', name: 'اتومات و ست کنترل', slug: 'automatic', icon: 'automatic', desc: 'کلید اتومات، ست کنترل، تابلو برق و بوستر پمپ' }
  ],

  products: [
    { id: 'p1', name: 'پمپ آب خانگی پنتاکس PM45', brand: 'پنتاکس', cat: 'c1', price: 4850000, oldPrice: 5400000, stock: 24, sku: 'PTX-PM45', icon: 'pump', featured: true, badge: 'پرفروش', image: null, desc: 'پمپ محیطی پنتاکس مدل PM45 با بدنه برنجی و موتور ۰.۵ اسب بخار، انتخاب استاندارد برای آبرسانی آپارتمان‌های تا ۴ طبقه. عملکرد کم‌صدا، مصرف برق پایین و عمر مفید بالا از ویژگی‌های اصلی این مدل است.', specs: { 'توان موتور': '۰.۵ اسب بخار', 'حداکثر ارتفاع': '۴۵ متر', 'حداکثر دبی': '۴۵ لیتر بر دقیقه', 'قطر دهانه': '۱ اینچ', 'ولتاژ': '۲۲۰ ولت تک‌فاز', 'گارانتی': '۱۸ ماه' }, createdAt: 1730000000000 },
    { id: 'p2', name: 'پمپ آب خانگی پنتاکس PM80', brand: 'پنتاکس', cat: 'c1', price: 6200000, oldPrice: 0, stock: 16, sku: 'PTX-PM80', icon: 'pump', featured: true, badge: '', image: null, desc: 'نسخه قدرتمندتر خانواده PM با موتور یک اسب بخار، مناسب ساختمان‌های بلندمرتبه و ویلاهایی با چند نقطه مصرف همزمان.', specs: { 'توان موتور': '۱ اسب بخار', 'حداکثر ارتفاع': '۶۰ متر', 'حداکثر دبی': '۸۰ لیتر بر دقیقه', 'قطر دهانه': '۱ اینچ', 'ولتاژ': '۲۲۰ ولت تک‌فاز', 'گارانتی': '۱۸ ماه' }, createdAt: 1730100000000 },
    { id: 'p3', name: 'پمپ بشقابی پمپیران ۲ اسب بخار', brand: 'پمپیران', cat: 'c1', price: 9400000, oldPrice: 10200000, stock: 9, sku: 'PMP-T2HP', icon: 'pump', featured: false, badge: 'تخفیف', image: null, desc: 'پمپ بشقابی (جت) پمپیران با مکانیزم خودمکش قوی، مناسب چاه‌های کم‌عمق و آبرسانی ویلا. بدنه چدنی و پروانه برنجی.', specs: { 'توان موتور': '۲ اسب بخار', 'حداکثر ارتفاع': '۷۵ متر', 'حداکثر دبی': '۱۲۰ لیتر بر دقیقه', 'قطر دهانه': '۱.۲۵ اینچ', 'ولتاژ': '۲۲۰ ولت', 'گارانتی': '۱۲ ماه' }, createdAt: 1730200000000 },
    { id: 'p4', name: 'پمپ شناور چهار اینچ لئو ۱.۵ اسب', brand: 'لئو', cat: 'c3', price: 12800000, oldPrice: 0, stock: 12, sku: 'LEO-4SR15', icon: 'submersible', featured: true, badge: 'جدید', image: null, desc: 'پمپ شناور چهار اینچ لئو با پروانه‌های استیل ضدزنگ، مناسب چاه‌های با عمق متوسط. مقاوم در برابر شن و مواد معلق.', specs: { 'توان موتور': '۱.۵ اسب بخار', 'حداکثر ارتفاع': '۹۰ متر', 'حداکثر دبی': '۹۰ لیتر بر دقیقه', 'قطر بدنه': '۴ اینچ', 'ولتاژ': '۲۲۰ ولت', 'گارانتی': '۲۴ ماه' }, createdAt: 1730300000000 },
    { id: 'p5', name: 'پمپ چاه عمیق پدرولو 4SR ۲ اسب', brand: 'پدرولو', cat: 'c3', price: 24500000, oldPrice: 26800000, stock: 6, sku: 'PED-4SR2', icon: 'submersible', featured: true, badge: '', image: null, desc: 'پمپ چاه عمیق پدرولو ایتالیا با راندمان بالا و بدنه استیل ۳۰۴. طراحی‌شده برای کارکرد مداوم در چاه‌های عمیق.', specs: { 'توان موتور': '۲ اسب بخار', 'حداکثر ارتفاع': '۱۳۰ متر', 'حداکثر دبی': '۷۵ لیتر بر دقیقه', 'قطر بدنه': '۴ اینچ', 'ولتاژ': '۲۲۰ ولت', 'گارانتی': '۲۴ ماه' }, createdAt: 1730400000000 },
    { id: 'p6', name: 'پمپ سانتریفیوژ کالپدا NM4', brand: 'کالپدا', cat: 'c1', price: 18900000, oldPrice: 0, stock: 7, sku: 'CAL-NM4', icon: 'industrial', featured: false, badge: '', image: null, desc: 'الکتروپمپ سانتریفیوژ تک‌پروانه کالپدا با بدنه چدن و شفت استیل، مناسب انتقال آب تمیز در مصارف ساختمانی.', specs: { 'توان موتور': '۳ اسب بخار', 'حداکثر ارتفاع': '۵۵ متر', 'حداکثر دبی': '۴۵۰ لیتر بر دقیقه', 'قطر دهانه': '۲ اینچ', 'ولتاژ': '۳۸۰ ولت سه‌فاز', 'گارانتی': '۱۸ ماه' }, createdAt: 1730500000000 },
    { id: 'p7', name: 'پمپ دور متغیر گراندفوس CMBE', brand: 'گراندفوس', cat: 'c1', price: 42000000, oldPrice: 45500000, stock: 4, sku: 'GRF-CMBE', icon: 'booster', featured: true, badge: 'پیشنهاد ویژه', image: null, desc: 'بوستر پمپ دور متغیر گراندفوس با اینورتر داخلی، فشار ثابت در تمام نقاط مصرف و صرفه‌جویی چشمگیر در انرژی. مناسب ساختمان‌های لوکس و هتل.', specs: { 'توان موتور': '۱.۵ اسب بخار', 'حداکثر ارتفاع': '۶۰ متر', 'حداکثر دبی': '۱۱۰ لیتر بر دقیقه', 'نوع کنترل': 'اینورتر دور متغیر', 'ولتاژ': '۲۲۰ ولت', 'گارانتی': '۲۴ ماه' }, createdAt: 1730600000000 },
    { id: 'p8', name: 'پمپ استخر داب یوروپرو', brand: 'داب', cat: 'c4', price: 15300000, oldPrice: 0, stock: 11, sku: 'DAB-EURO', icon: 'pool', featured: false, badge: '', image: null, desc: 'پمپ فیلتراسیون استخر داب با پیش‌فیلتر بزرگ و بدنه مقاوم، مناسب استخرهای خانگی و نیمه‌المپیک. کارکرد پیوسته و کم‌صدا.', specs: { 'توان موتور': '۱ اسب بخار', 'حداکثر دبی': '۳۲۰ لیتر بر دقیقه', 'حداکثر ارتفاع': '۱۸ متر', 'قطر دهانه': '۱.۵ اینچ', 'ولتاژ': '۲۲۰ ولت', 'گارانتی': '۱۲ ماه' }, createdAt: 1730700000000 },
    { id: 'p9', name: 'پمپ کف‌کش نیمه صنعتی ویلو', brand: 'ویلو', cat: 'c3', price: 7600000, oldPrice: 8200000, stock: 18, sku: 'WIL-DRAIN', icon: 'industrial', featured: false, badge: '', image: null, desc: 'پمپ کف‌کش ویلو برای تخلیه آب‌های سطحی، زیرزمین و استخر. عبور ذرات تا ۵ میلی‌متر و بدنه کامپوزیت مقاوم.', specs: { 'توان موتور': '۰.۷۵ اسب بخار', 'حداکثر ارتفاع': '۱۴ متر', 'حداکثر دبی': '۲۴۰ لیتر بر دقیقه', 'قطر دهانه': '۱.۵ اینچ', 'ولتاژ': '۲۲۰ ولت', 'گارانتی': '۱۲ ماه' }, createdAt: 1730800000000 },
    { id: 'p10', name: 'بوستر پمپ آبرسانی دو پمپ ۳ اسب', brand: 'پمپیران', cat: 'c9', price: 68000000, oldPrice: 0, stock: 3, sku: 'BST-DUAL3', icon: 'booster', featured: true, badge: '', image: null, desc: 'سیستم بوستر پمپ دوبل با تابلوی کنترل هوشمند، تغییر خودکار پمپ‌ها و محافظت کامل الکترونیکی. طراحی و مونتاژ سفارشی بر اساس دبی و ارتفاع مورد نیاز.', specs: { 'تعداد پمپ': '۲ عدد', 'توان هر پمپ': '۳ اسب بخار', 'حداکثر ارتفاع': '۷۰ متر', 'حداکثر دبی': '۶۰۰ لیتر بر دقیقه', 'نوع کنترل': 'تابلو اتوماتیک دوبل', 'گارانتی': '۱۸ ماه' }, createdAt: 1730900000000 },
    { id: 'p11', name: 'دستگاه تصفیه آب خانگی ۶ مرحله', brand: 'آکوا', cat: 'c4', price: 5400000, oldPrice: 6100000, stock: 32, sku: 'AQ-RO6', icon: 'filter', featured: true, badge: 'پرفروش', image: null, desc: 'دستگاه تصفیه آب اسمز معکوس شش مرحله با فیلتر ممبران ۷۵ گالن، پمپ تقویتی و شیر مینرال. حذف کامل نیترات، فلزات سنگین و املاح مضر.', specs: { 'تعداد مراحل': '۶ مرحله', 'ظرفیت ممبران': '۷۵ گالن', 'مخزن ذخیره': '۱۲ لیتر', 'ولتاژ': '۲۲۰ ولت', 'ابعاد': '۴۰×۳۵×۲۰ سانتی‌متر', 'گارانتی': '۱۲ ماه' }, createdAt: 1731000000000 },
    { id: 'p12', name: 'پکیج تصفیه آب صنعتی RO ۲۰۰۰', brand: 'آکوا', cat: 'c4', price: 185000000, oldPrice: 0, stock: 2, sku: 'AQ-RO2000', icon: 'filter', featured: false, badge: '', image: null, desc: 'پکیج اسمز معکوس صنعتی با ظرفیت ۲۰۰۰ لیتر در ساعت، شامل پیش‌فیلتر شنی، فیلتر کربنی، ممبران‌های ۴۰۴۰ و پنل کنترل دیجیتال.', specs: { 'ظرفیت تولید': '۲۰۰۰ لیتر بر ساعت', 'تعداد ممبران': '۴ عدد ۴۰۴۰', 'پیش‌تصفیه': 'شنی + کربنی', 'فشار کاری': '۱۰ تا ۱۵ بار', 'ولتاژ': '۳۸۰ ولت سه‌فاز', 'گارانتی': '۱۸ ماه' }, createdAt: 1731100000000 },
    { id: 'p13', name: 'فیلتر شنی استخر ۱۹ اینچ', brand: 'آکوا', cat: 'c4', price: 21000000, oldPrice: 23000000, stock: 8, sku: 'AQ-SAND19', icon: 'pool', featured: false, badge: '', image: null, desc: 'مخزن فیلتر شنی فایبرگلاس با شیر شش‌کاره، مناسب استخرهای تا ۶۰ متر مکعب. بدنه ضد UV و مقاوم در برابر فشار.', specs: { 'قطر مخزن': '۱۹ اینچ', 'حداکثر فشار': '۳.۵ بار', 'نوع بدنه': 'فایبرگلاس', 'شیر': 'شش‌کاره', 'حجم استخر': 'تا ۶۰ متر مکعب', 'گارانتی': '۱۲ ماه' }, createdAt: 1731200000000 },
    { id: 'p14', name: 'مخزن پلی‌اتیلن سه لایه ۱۰۰۰ لیتری', brand: 'حافظ', cat: 'c5', price: 6900000, oldPrice: 0, stock: 21, sku: 'HFZ-PE1000', icon: 'tank', featured: true, badge: '', image: null, desc: 'مخزن آب سه لایه بهداشتی با تاییدیه وزارت بهداشت، مقاوم در برابر نور خورشید و جلبک. مناسب مصارف آشامیدنی.', specs: { 'حجم': '۱۰۰۰ لیتر', 'تعداد لایه': '۳ لایه', 'جنس': 'پلی‌اتیلن بهداشتی', 'قطر دهانه': '۴۰ سانتی‌متر', 'ضخامت دیواره': '۶ میلی‌متر', 'گارانتی': '۱۰ سال' }, createdAt: 1731300000000 },
    { id: 'p15', name: 'مخزن آب استیل ۲۰۰۰ لیتری', brand: 'حافظ', cat: 'c5', price: 38000000, oldPrice: 41500000, stock: 5, sku: 'HFZ-SS2000', icon: 'tank', featured: false, badge: '', image: null, desc: 'مخزن استیل ۳۰۴ عایق‌دار با جوش آرگون و شیر تخلیه، مناسب مصارف آشامیدنی حساس و صنایع غذایی.', specs: { 'حجم': '۲۰۰۰ لیتر', 'جنس': 'استیل ۳۰۴', 'عایق': 'پلی‌یورتان ۵ سانتی', 'نوع جوش': 'آرگون', 'ضخامت ورق': '۲ میلی‌متر', 'گارانتی': '۵ سال' }, createdAt: 1731400000000 },
    { id: 'p16', name: 'منبع انبساط ۲۴ لیتری', brand: 'ویلو', cat: 'c5', price: 2850000, oldPrice: 0, stock: 27, sku: 'WIL-EXP24', icon: 'tank', featured: false, badge: '', image: null, desc: 'منبع انبساط بسته با دیافراگم EPDM برای سیستم‌های گرمایش و آب گرم مصرفی. جذب نوسانات فشار و جلوگیری از ضربه قوچ.', specs: { 'حجم': '۲۴ لیتر', 'حداکثر فشار': '۱۰ بار', 'دمای کاری': 'تا ۹۰ درجه', 'نوع دیافراگم': 'EPDM', 'اتصال': '۱ اینچ', 'گارانتی': '۲۴ ماه' }, createdAt: 1731500000000 },
    { id: 'p17', name: 'شیر یکطرفه برنجی ۱ اینچ', brand: 'حافظ', cat: 'c7', price: 380000, oldPrice: 0, stock: 120, sku: 'HFZ-CV1', icon: 'valve', featured: false, badge: '', image: null, desc: 'شیر یکطرفه فنری برنجی با آب‌بندی کامل، مناسب خطوط آب سرد و گرم. جلوگیری از بازگشت آب و حفاظت از پمپ.', specs: { 'سایز': '۱ اینچ', 'جنس': 'برنج', 'نوع': 'فنری', 'حداکثر فشار': '۱۶ بار', 'دمای کاری': 'تا ۱۱۰ درجه', 'گارانتی': '۱۲ ماه' }, createdAt: 1731600000000 },
    { id: 'p18', name: 'شیر فلکه کشویی چدنی ۲ اینچ', brand: 'حافظ', cat: 'c7', price: 1450000, oldPrice: 1620000, stock: 64, sku: 'HFZ-GV2', icon: 'valve', featured: false, badge: '', image: null, desc: 'شیر فلکه کشویی با بدنه چدنی و فلکه چرخان، مناسب خطوط آبرسانی. آب‌بندی مطمئن و افت فشار کم.', specs: { 'سایز': '۲ اینچ', 'جنس بدنه': 'چدن', 'نوع اتصال': 'فلنجی', 'حداکثر فشار': '۱۶ بار', 'دمای کاری': 'تا ۱۲۰ درجه', 'گارانتی': '۱۲ ماه' }, createdAt: 1731700000000 },
    { id: 'p19', name: 'مانومتر عقربه‌ای ۱۰ بار', brand: 'لئو', cat: 'c9', price: 420000, oldPrice: 0, stock: 88, sku: 'LEO-MAN10', icon: 'gauge', featured: false, badge: '', image: null, desc: 'فشارسنج عقربه‌ای با صفحه گلیسیرین‌دار، مناسب نصب روی خطوط پمپ و فیلتر. بدنه استیل و دقت ۱.۶ درصد.', specs: { 'بازه اندازه‌گیری': '۰ تا ۱۰ بار', 'قطر صفحه': '۶۳ میلی‌متر', 'دقت': '۱.۶ درصد', 'جنس بدنه': 'استیل', 'اتصال': '۱/۴ اینچ', 'گارانتی': '۱۲ ماه' }, createdAt: 1731800000000 },
    { id: 'p20', name: 'فلومتر الکترومغناطیسی DN50', brand: 'گراندفوس', cat: 'c9', price: 46000000, oldPrice: 0, stock: 3, sku: 'GRF-FM50', icon: 'gauge', featured: false, badge: 'جدید', image: null, desc: 'فلومتر الکترومغناطیسی با لاینر PTFE و الکترود استیل، خروجی ۴ تا ۲۰ میلی‌آمپر و نمایشگر دیجیتال. دقت بالا برای آب تمیز و پساب.', specs: { 'قطر': 'DN50', 'دقت': '۰.۵ درصد', 'خروجی': '۴ تا ۲۰ میلی‌آمپر', 'لاینر': 'PTFE', 'الکترود': 'استیل ۳۱۶', 'گارانتی': '۱۸ ماه' }, createdAt: 1731900000000 },
    { id: 'p21', name: 'لوله پلی‌اتیلن PE100 شاخه ۶ متری ۳۲', brand: 'حافظ', cat: 'c6', price: 1150000, oldPrice: 1290000, stock: 210, sku: 'HFZ-PE32', icon: 'pipe', featured: false, badge: '', image: null, desc: 'لوله پلی‌اتیلن چگالی بالا PE100 با فشار کاری ۱۰ اتمسفر، مناسب خطوط انتقال آب. انعطاف بالا و مقاوم در برابر خوردگی.', specs: { 'قطر خارجی': '۳۲ میلی‌متر', 'فشار کاری': '۱۰ اتمسفر', 'طول شاخه': '۶ متر', 'جنس': 'PE100', 'استاندارد': 'ISIRI 14427', 'گارانتی': 'اصالت کالا' }, createdAt: 1732000000000 },
    { id: 'p22', name: 'اتصالات پی‌وی‌سی ۲ اینچ', brand: 'حافظ', cat: 'c6', price: 240000, oldPrice: 0, stock: 340, sku: 'HFZ-PVC2', icon: 'pipe', featured: false, badge: '', image: null, desc: 'ست اتصالات پی‌وی‌سی شامل زانو، سه‌راه و کوپلر برای خطوط آب سرد. اتصال چسبی و آب‌بندی کامل.', specs: { 'سایز': '۲ اینچ', 'جنس': 'پی‌وی‌سی', 'نوع اتصال': 'چسبی', 'فشار کاری': '۶ اتمسفر', 'تعداد در بسته': '۵ عدد', 'گارانتی': 'اصالت کالا' }, createdAt: 1732100000000 },
    { id: 'p23', name: 'کلید اتوماتیک فشار (پرس استات)', brand: 'لئو', cat: 'c9', price: 1980000, oldPrice: 2200000, stock: 45, sku: 'LEO-PS10', icon: 'electric', featured: true, badge: '', image: null, desc: 'کلید اتوماتیک فشار با تنظیم دقیق بازه قطع و وصل، مناسب کنترل پمپ‌های خانگی. کنتاکت‌های نقره‌ای و عمر مکانیکی بالا.', specs: { 'بازه فشار': '۱ تا ۵ بار', 'جریان مجاز': '۱۰ آمپر', 'ولتاژ': '۲۲۰ ولت', 'نوع اتصال': '۱/۴ اینچ', 'درجه حفاظت': 'IP44', 'گارانتی': '۱۲ ماه' }, createdAt: 1732200000000 },
    { id: 'p24', name: 'تابلو برق پمپ سه فاز', brand: 'پمپیران', cat: 'c9', price: 8400000, oldPrice: 0, stock: 10, sku: 'PMP-PNL3', icon: 'electric', featured: false, badge: '', image: null, desc: 'تابلوی کنترل پمپ سه فاز با استارتر، محافظ جریان، کلید سلکتور و چراغ سیگنال. مونتاژ شده با قطعات استاندارد.', specs: { 'ولتاژ': '۳۸۰ ولت سه‌فاز', 'توان قابل پشتیبانی': 'تا ۷.۵ اسب بخار', 'محافظت': 'اضافه بار و فاز', 'درجه حفاظت': 'IP54', 'جنس بدنه': 'فلزی رنگ کوره‌ای', 'گارانتی': '۱۲ ماه' }, createdAt: 1732300000000 },
    { id: 'p25', name: 'پمپ آتش‌نشانی ۵ اسب بخار', brand: 'کالپدا', cat: 'c1', price: 95000000, oldPrice: 0, stock: 2, sku: 'CAL-FIRE5', icon: 'industrial', featured: false, badge: '', image: null, desc: 'الکتروپمپ آتش‌نشانی مطابق استاندارد NFPA با عملکرد پایدار در فشار بالا. مناسب سیستم‌های اسپرینکلر و آتش‌نشانی ساختمان.', specs: { 'توان موتور': '۵ اسب بخار', 'حداکثر ارتفاع': '۹۰ متر', 'حداکثر دبی': '۵۰۰ لیتر بر دقیقه', 'استاندارد': 'NFPA 20', 'ولتاژ': '۳۸۰ ولت سه‌فاز', 'گارانتی': '۱۸ ماه' }, createdAt: 1732400000000 },
    { id: 'p26', name: 'الکتروپمپ محیطی لئو ۰.۵ اسب', brand: 'لئو', cat: 'c1', price: 3650000, oldPrice: 3950000, stock: 30, sku: 'LEO-PER05', icon: 'pump', featured: false, badge: '', image: null, desc: 'الکتروپمپ محیطی جمع‌وجور با بدنه برنجی و موتور خنک‌شونده با هوا، مناسب آبرسانی واحدهای مسکونی کوچک و باغچه.', specs: { 'توان موتور': '۰.۵ اسب بخار', 'حداکثر ارتفاع': '۳۵ متر', 'حداکثر دبی': '۴۰ لیتر بر دقیقه', 'قطر دهانه': '۱ اینچ', 'ولتاژ': '۲۲۰ ولت', 'گارانتی': '۱۲ ماه' }, createdAt: 1732500000000 }
  ],

  orders: [
    { id: 'o1', code: 'PA-1403-1042', customer: 'مهدی رضایی', phone: '09121234567', address: 'تهران، سعادت‌آباد، بلوار دریا، کوچه ۱۲', items: [{ pid: 'p1', name: 'پمپ آب خانگی پنتاکس PM45', price: 4850000, qty: 1 }], total: 4850000, status: 'delivered', date: 1731200000000, note: '' },
    { id: 'o2', code: 'PA-1403-1043', customer: 'شرکت آب‌گستر پارس', phone: '02188776611', address: 'کرج، شهرک صنعتی بهارستان، سالن ۴', items: [{ pid: 'p12', name: 'پکیج تصفیه آب صنعتی RO ۲۰۰۰', price: 185000000, qty: 1 }], total: 185000000, status: 'processing', date: 1731300000000, note: 'نیاز به فاکتور رسمی' },
    { id: 'o3', code: 'PA-1403-1044', customer: 'سارا محمدی', phone: '09351112233', address: 'اصفهان، خیابان چهارباغ بالا، پلاک ۸۸', items: [{ pid: 'p11', name: 'دستگاه تصفیه آب خانگی ۶ مرحله', price: 5400000, qty: 1 }, { pid: 'p19', name: 'مانومتر عقربه‌ای ۱۰ بار', price: 420000, qty: 2 }], total: 6240000, status: 'pending', date: 1731400000000, note: '' },
    { id: 'o4', code: 'PA-1403-1045', customer: 'حسین کریمی', phone: '09127778899', address: 'شیراز، بلوار زند، کوچه ۵، پلاک ۲۲', items: [{ pid: 'p4', name: 'پمپ شناور چهار اینچ لئو ۱.۵ اسب', price: 12800000, qty: 2 }], total: 25600000, status: 'shipped', date: 1731500000000, note: '' },
    { id: 'o5', code: 'PA-1403-1046', customer: 'مجتمع کشت و صنعت دشت', phone: '09131234455', address: 'همدان، جاده ملایر، کیلومتر ۱۲', items: [{ pid: 'p5', name: 'پمپ چاه عمیق پدرولو 4SR ۲ اسب', price: 24500000, qty: 3 }], total: 73500000, status: 'processing', date: 1731600000000, note: 'ارسال با باربری' },
    { id: 'o6', code: 'PA-1403-1047', customer: 'علی نوروزی', phone: '09019876543', address: 'مشهد، بلوار وکیل‌آباد، برج آسمان، واحد ۱۴', items: [{ pid: 'p7', name: 'پمپ دور متغیر گراندفوس CMBE', price: 42000000, qty: 1 }], total: 42000000, status: 'pending', date: 1731700000000, note: '' },
    { id: 'o7', code: 'PA-1403-1048', customer: 'فاطمه احمدی', phone: '09123334455', address: 'تبریز، خیابان ولیعصر، کوچه گلستان ۳', items: [{ pid: 'p14', name: 'مخزن پلی‌اتیلن سه لایه ۱۰۰۰ لیتری', price: 6900000, qty: 1 }], total: 6900000, status: 'delivered', date: 1731800000000, note: '' },
    { id: 'o8', code: 'PA-1403-1049', customer: 'پیمانکاری سازه آب', phone: '02155443322', address: 'تهران، جاده مخصوص، خیابان صنعت ۹', items: [{ pid: 'p10', name: 'بوستر پمپ آبرسانی دو پمپ ۳ اسب', price: 68000000, qty: 1 }, { pid: 'p24', name: 'تابلو برق پمپ سه فاز', price: 8400000, qty: 2 }], total: 84800000, status: 'cancelled', date: 1731900000000, note: 'انصراف مشتری' }
  ],

  /* کاربران فروشگاه */
  users: [],

  /* نظرات و امتیازها */
  reviews: [
    { id: 'r1', pid: 'p1', name: 'مهدی ر.', stars: 5, text: 'دقیقاً همون چیزی بود که کارشناس گفت. روی ساختمون چهار طبقه عالی جواب داد.', date: 1731200000000, status: 'approved' },
    { id: 'r2', pid: 'p1', name: 'امیر ک.', stars: 4, text: 'کیفیت خوب، فقط ارسالش یک روز دیرتر رسید.', date: 1731600000000, status: 'approved' },
    { id: 'r3', pid: 'p11', name: 'سارا م.', stars: 5, text: 'آب‌ش خیلی بهتر شد. نصبش هم ساده بود.', date: 1731400000000, status: 'approved' },
    { id: 'r4', pid: 'p4', name: 'حسین ک.', stars: 4, text: 'برای چاه ۴۰ متری مناسبه، صدای کمی داره.', date: 1731500000000, status: 'approved' },
    { id: 'r5', pid: 'p14', name: 'فاطمه ا.', stars: 5, text: 'سه لایه بودنش واقعاً فرق داره، آب بوی پلاستیک نمی‌ده.', date: 1731800000000, status: 'approved' },
    { id: 'r6', pid: 'p7', name: 'علی ن.', stars: 5, text: 'گرون بود ولی ارزشش رو داشت. فشار آب ثابت می‌مونه.', date: 1731700000000, status: 'approved' }
  ],

  /* تیکت‌ها و سوالات */
  tickets: []
};

/* ---------- Store ---------- */
const Store = (() => {
  const KEY = 'parsabi_db_v2';
  const LEGACY_KEY = 'parsabi_db_v1';
  let db = null;

  function clone(o) { return JSON.parse(JSON.stringify(o)); }

  function load() {
    if (db) return db;
    try {
      const raw = localStorage.getItem(KEY);
      if (raw) {
        db = JSON.parse(raw);
        migrate(db);
        return db;
      }
    } catch (e) { console.warn('DB read failed, reseeding', e); }

    // مهاجرت از نسخه ۱ (اگر وجود داشت)
    let legacy = null;
    try {
      const old = localStorage.getItem(LEGACY_KEY);
      if (old) legacy = JSON.parse(old);
    } catch (e) { legacy = null; }

    db = clone(PA_SEED);
    if (legacy) {
      if (legacy.products) db.products = legacy.products;
      if (legacy.orders) db.orders = legacy.orders;
      if (legacy.categories) db.categories = legacy.categories;
      if (legacy.settings) db.settings = Object.assign({}, PA_SEED.settings, legacy.settings);
      migrate(db);
    }
    save();
    return db;
  }

  /* پر کردن کلیدهای جدید + اصلاح دسته‌های حذف‌شده */
  function migrate(d) {
    Object.keys(PA_SEED).forEach(k => { if (d[k] === undefined) d[k] = clone(PA_SEED[k]); });
    Object.keys(PA_SEED.settings).forEach(k => {
      if (d.settings[k] === undefined) d.settings[k] = PA_SEED.settings[k];
    });

    // دسته‌های حذف‌شده: پمپ صنعتی و کشاورزی (c2) و ابزار اندازه‌گیری (c8)
    const validIds = d.categories.map(c => c.id);
    if (!validIds.includes('c9')) {
      d.categories.push({ id: 'c9', name: 'اتومات و ست کنترل', slug: 'automatic', icon: 'automatic', desc: 'کلید اتومات، ست کنترل، تابلو برق و بوستر پمپ' });
    }
    d.categories = d.categories.filter(c => c.id !== 'c2' && c.id !== 'c8');
    d.products.forEach(p => {
      if (p.cat === 'c2') p.cat = 'c1';
      if (p.cat === 'c8') p.cat = 'c9';
      if (!d.categories.some(c => c.id === p.cat)) p.cat = d.categories[0] ? d.categories[0].id : '';
    });

    // featuredIds را با محصولات همگام کن
    if (!Array.isArray(d.settings.featuredIds)) d.settings.featuredIds = [];
  }

  function save() {
    try { localStorage.setItem(KEY, JSON.stringify(db)); }
    catch (e) { console.error('DB save failed', e); throw e; }
  }

  function uid(prefix) { return prefix + Date.now().toString(36) + Math.random().toString(36).slice(2, 6); }

  const api = {
    get data() { return load(); },
    save,
    reset() { db = clone(PA_SEED); save(); localStorage.removeItem('parsabi_user_session'); },

    /* ---------- products ---------- */
    products() { return load().products.slice(); },
    product(id) { return load().products.find(p => p.id === id) || null; },
    addProduct(p) {
      const d = load();
      p.id = uid('p');
      p.createdAt = Date.now();
      d.products.unshift(p); save(); return p;
    },
    updateProduct(id, patch) {
      const d = load();
      const i = d.products.findIndex(p => p.id === id);
      if (i < 0) return null;
      d.products[i] = Object.assign({}, d.products[i], patch);
      save(); return d.products[i];
    },
    deleteProduct(id) {
      const d = load();
      d.products = d.products.filter(p => p.id !== id);
      d.settings.featuredIds = (d.settings.featuredIds || []).filter(x => x !== id);
      d.reviews = d.reviews.filter(r => r.pid !== id);
      save();
    },

    /* ---------- categories ---------- */
    categories() { return load().categories.slice(); },
    category(id) { return load().categories.find(c => c.id === id) || null; },
    addCategory(c) {
      const d = load();
      c.id = uid('c');
      d.categories.push(c); save(); return c;
    },
    updateCategory(id, patch) {
      const d = load();
      const i = d.categories.findIndex(c => c.id === id);
      if (i < 0) return null;
      d.categories[i] = Object.assign({}, d.categories[i], patch);
      save(); return d.categories[i];
    },
    deleteCategory(id) {
      const d = load();
      d.categories = d.categories.filter(c => c.id !== id);
      d.products.forEach(p => { if (p.cat === id) p.cat = ''; });
      save();
    },

    /* ---------- orders ---------- */
    orders() { return load().orders.slice(); },
    ordersOf(userId) { return load().orders.filter(o => o.userId === userId); },
    addOrder(o) {
      const d = load();
      const n = d.orders.length + 1042;
      o.id = uid('o');
      o.code = 'PA-1403-' + n;
      o.date = Date.now();
      o.status = o.status || 'pending';
      d.orders.unshift(o); save(); return o;
    },
    updateOrder(id, patch) {
      const d = load();
      const i = d.orders.findIndex(o => o.id === id);
      if (i < 0) return null;
      d.orders[i] = Object.assign({}, d.orders[i], patch);
      save(); return d.orders[i];
    },
    deleteOrder(id) {
      const d = load();
      d.orders = d.orders.filter(o => o.id !== id);
      save();
    },

    /* ---------- settings ---------- */
    settings() { return load().settings; },
    updateSettings(patch) {
      const d = load();
      d.settings = Object.assign({}, d.settings, patch);
      save(); return d.settings;
    },

    /* ---------- featured (پرفروش‌های صفحه اصلی) ---------- */
    featuredIds() {
      const d = load();
      return (d.settings.featuredIds || []).filter(id => d.products.some(p => p.id === id));
    },
    toggleFeatured(id) {
      const d = load();
      const list = d.settings.featuredIds || (d.settings.featuredIds = []);
      const i = list.indexOf(id);
      if (i >= 0) list.splice(i, 1); else list.push(id);
      const p = d.products.find(x => x.id === id);
      if (p) p.featured = list.includes(id);
      save();
      return list;
    },
    featuredProducts() {
      const d = load();
      const ids = api.featuredIds();
      return ids.map(id => d.products.find(p => p.id === id)).filter(Boolean);
    },

    /* ---------- reviews / امتیاز ---------- */
    reviews(pid) {
      const list = load().reviews.filter(r => r.status === 'approved');
      return pid ? list.filter(r => r.pid === pid) : list;
    },
    allReviews() { return load().reviews.slice(); },
    addReview(r) {
      const d = load();
      r.id = uid('r');
      r.date = Date.now();
      r.status = 'approved';
      d.reviews.unshift(r); save(); return r;
    },
    setReviewStatus(id, status) {
      const d = load();
      const r = d.reviews.find(x => x.id === id);
      if (r) { r.status = status; save(); }
      return r;
    },
    deleteReview(id) {
      const d = load();
      d.reviews = d.reviews.filter(r => r.id !== id);
      save();
    },
    /* {avg, count, percent} */
    rating(pid) {
      const list = api.reviews(pid);
      if (!list.length) return { avg: 0, count: 0, percent: 0 };
      const sum = list.reduce((s, r) => s + (Number(r.stars) || 0), 0);
      const avg = sum / list.length;
      return { avg, count: list.length, percent: Math.round(avg / 5 * 100) };
    },
    /* درصد رضایت کل فروشگاه */
    overallRating() {
      const list = api.reviews();
      if (!list.length) return { avg: 0, count: 0, percent: 0 };
      const sum = list.reduce((s, r) => s + (Number(r.stars) || 0), 0);
      const avg = sum / list.length;
      return { avg, count: list.length, percent: Math.round(avg / 5 * 100) };
    },
    /* تعداد مشتری راضی = مشتریان یکتای سفارش‌ها + نویسندگان نظر */
    happyCustomers() {
      const d = load();
      const phones = new Set();
      d.orders.forEach(o => { if (o.phone) phones.add(String(o.phone).replace(/[\s-]/g, '')); });
      d.reviews.filter(r => r.status === 'approved').forEach(r => {
        if (r.userId) phones.add('u:' + r.userId);
        else if (r.name) phones.add('n:' + r.name);
      });
      return phones.size;
    },

    /* ---------- tickets ---------- */
    tickets() { return load().tickets.slice(); },
    ticket(id) { return load().tickets.find(t => t.id === id) || null; },
    addTicket(t) {
      const d = load();
      t.id = uid('t');
      t.code = 'TK-' + String(d.tickets.length + 1001);
      t.date = Date.now();
      t.status = 'new';
      t.reply = '';
      d.tickets.unshift(t); save(); return t;
    },
    updateTicket(id, patch) {
      const d = load();
      const i = d.tickets.findIndex(t => t.id === id);
      if (i < 0) return null;
      d.tickets[i] = Object.assign({}, d.tickets[i], patch);
      save(); return d.tickets[i];
    },
    deleteTicket(id) {
      const d = load();
      d.tickets = d.tickets.filter(t => t.id !== id);
      save();
    },

    /* ---------- users ---------- */
    users() { return load().users.slice(); },
    user(id) { return load().users.find(u => u.id === id) || null; },
    findUser(login) {
      const key = String(login || '').trim().toLowerCase().replace(/[\s-]/g, '');
      if (!key) return null;
      return load().users.find(u =>
        String(u.email || '').toLowerCase() === key ||
        String(u.phone || '').replace(/[\s-]/g, '') === key
      ) || null;
    },
    addUser(u) {
      const d = load();
      u.id = uid('u');
      u.createdAt = Date.now();
      d.users.push(u); save(); return u;
    },
    updateUser(id, patch) {
      const d = load();
      const i = d.users.findIndex(u => u.id === id);
      if (i < 0) return null;
      d.users[i] = Object.assign({}, d.users[i], patch);
      save(); return d.users[i];
    },
    deleteUser(id) {
      const d = load();
      d.users = d.users.filter(u => u.id !== id);
      save();
    },

    /* ---------- session ---------- */
    session() {
      try {
        const raw = localStorage.getItem('parsabi_user_session');
        if (!raw) return null;
        const s = JSON.parse(raw);
        return api.user(s.id) ? s : null;
      } catch (e) { return null; }
    },
    setSession(u) {
      localStorage.setItem('parsabi_user_session', JSON.stringify({ id: u.id, name: u.name, email: u.email, phone: u.phone }));
    },
    clearSession() { localStorage.removeItem('parsabi_user_session'); },

    /* ---------- cart ---------- */
    cart() {
      try { return JSON.parse(localStorage.getItem('parsabi_cart') || '[]'); } catch (e) { return []; }
    },
    setCart(items) { localStorage.setItem('parsabi_cart', JSON.stringify(items)); },
    addToCart(pid, qty) {
      const c = api.cart();
      const found = c.find(i => i.pid === pid);
      if (found) found.qty += (qty || 1);
      else c.push({ pid, qty: qty || 1 });
      api.setCart(c); return c;
    },
    updateCartQty(pid, qty) {
      const c = api.cart();
      const f = c.find(i => i.pid === pid);
      if (f) { f.qty = Math.max(1, qty); api.setCart(c); }
      return c;
    },
    removeFromCart(pid) {
      const c = api.cart().filter(i => i.pid !== pid);
      api.setCart(c); return c;
    },
    clearCart() { api.setCart([]); },
    cartCount() { return api.cart().reduce((s, i) => s + i.qty, 0); },

    /* ---------- wishlist ---------- */
    wishlist() {
      try { return JSON.parse(localStorage.getItem('parsabi_wish') || '[]'); } catch (e) { return []; }
    },
    toggleWish(pid) {
      const w = api.wishlist();
      const i = w.indexOf(pid);
      if (i >= 0) w.splice(i, 1); else w.push(pid);
      localStorage.setItem('parsabi_wish', JSON.stringify(w));
      return w;
    }
  };

  return api;
})();

/* ---------- Helpers ---------- */
function faNum(n) {
  return String(n).replace(/\d/g, d => '۰۱۲۳۴۵۶۷۸۹'[d]);
}
function money(n) {
  return faNum(Number(n || 0).toLocaleString('en-US'));
}
function moneyT(n) { return money(n) + ' تومان'; }
function faDate(ts) {
  try {
    return new Intl.DateTimeFormat('fa-IR', { year: 'numeric', month: 'long', day: 'numeric' }).format(new Date(ts));
  } catch (e) { return '—'; }
}
function faDateShort(ts) {
  try {
    const d = new Date(ts);
    const p = new Intl.DateTimeFormat('fa-IR-u-nu-latn', { year: 'numeric', month: '2-digit', day: '2-digit' }).format(d);
    return faNum(p.replace(/\//g, '/'));
  } catch (e) { return '—'; }
}
function esc(s) {
  return String(s == null ? '' : s)
    .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;').replace(/'/g, '&#39;');
}
/* متن چندپاراگرافی را به HTML امن تبدیل می‌کند */
function paragraphs(text) {
  return String(text || '')
    .split(/\n{2,}/)
    .map(p => p.trim())
    .filter(Boolean)
    .map(p => '<p>' + esc(p).replace(/\n/g, '<br>') + '</p>')
    .join('');
}
/* جایگزینی توکن‌های آماری */
function tokens(text) {
  const s = Store.settings();
  return String(text == null ? '' : text)
    .replace(/\{products\}/g, faNum(Store.products().length))
    .replace(/\{years\}/g, faNum(s.statYears || ''))
    .replace(/\{provinces\}/g, faNum(s.statProvinces || ''))
    .replace(/\{customers\}/g, faNum(Store.happyCustomers()));
}
function icon(name, cls) {
  const p = PA_ICONS[name] || PA_ICONS.pump;
  return '<svg class="' + (cls || '') + '" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">' + p + '</svg>';
}
function productThumb(p, cls) {
  if (p.image) return '<img src="' + p.image + '" alt="' + esc(p.name) + '" loading="lazy">';
  return icon(p.icon || 'pump', cls || 'ph');
}
function statusInfo(s) {
  return {
    pending:    { label: 'در انتظار پرداخت', cls: 'pill--warn' },
    processing: { label: 'در حال پردازش', cls: 'pill--info' },
    shipped:    { label: 'ارسال شده', cls: 'pill--info' },
    delivered:  { label: 'تحویل شده', cls: 'pill--ok' },
    cancelled:  { label: 'لغو شده', cls: 'pill--danger' }
  }[s] || { label: s, cls: 'pill--mute' };
}
function ticketStatusInfo(s) {
  return {
    new:      { label: 'جدید', cls: 'pill--warn' },
    answered: { label: 'پاسخ داده شد', cls: 'pill--ok' },
    closed:   { label: 'بسته شده', cls: 'pill--mute' }
  }[s] || { label: s, cls: 'pill--mute' };
}

/* ستاره‌های نمایشی — مقدار اعشاری پشتیبانی می‌شود */
function starsHtml(avg, size) {
  const v = Math.max(0, Math.min(5, Number(avg) || 0));
  let out = '<span class="stars' + (size ? ' stars--' + size : '') + '" aria-label="' + v.toFixed(1) + ' از ۵">';
  for (let i = 1; i <= 5; i++) {
    const fill = Math.max(0, Math.min(1, v - (i - 1)));
    out += '<span class="star"><span class="star__bg">' + icon('star') + '</span>' +
           '<span class="star__fg" style="width:' + (fill * 100) + '%">' + icon('star') + '</span></span>';
  }
  return out + '</span>';
}

/* ---------- Toast ---------- */
function toast(msg, type) {
  let wrap = document.querySelector('.toast-wrap');
  if (!wrap) {
    wrap = document.createElement('div');
    wrap.className = 'toast-wrap';
    document.body.appendChild(wrap);
  }
  const el = document.createElement('div');
  el.className = 'toast' + (type === 'err' ? ' toast--err' : '');
  el.innerHTML = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">' +
    (type === 'err'
      ? '<circle cx="12" cy="12" r="10"/><path d="M15 9l-6 6M9 9l6 6"/>'
      : '<circle cx="12" cy="12" r="10"/><path d="M8 12.5l2.5 2.5L16 9.5"/>') +
    '</svg><span>' + esc(msg) + '</span>';
  wrap.appendChild(el);
  setTimeout(() => {
    el.classList.add('is-out');
    setTimeout(() => el.remove(), 320);
  }, 2600);
}
