/* ============================================
   MAZI GENERAL TRADE — store logic
============================================ */

/* ---------- Category data ---------- */
const CATEGORIES = [
  { id: 'dairy',        name: 'Dairy' },
  { id: 'tea',          name: 'Tea' },
  { id: 'coffee',       name: 'Coffee & Instants' },
  { id: 'beverages',    name: 'Beverages' },
  { id: 'dried-fruits', name: 'Dates & Dried Fruits' },
  { id: 'grains',       name: 'Grains, Cereals & Spreads' },
  { id: 'confectionary',name: 'Confectionary & Snacks' },
  { id: 'canned',       name: 'Canned Foods' },
  { id: 'cooking',      name: 'Cooking & Baking' },
  { id: 'personal-care',name: 'Personal Care' },
  { id: 'sauces',       name: 'Sauces & Oils' },
  { id: 'household',    name: 'Household & Cleaning' },
];

/* ---------- Product data ---------- */
const PRODUCTS = [
  { id:'MZ001', name:'Coast Full Cream Milk Powder 400g', cat:'dairy', icon:'🥛', pack:'Carton', unit:'24 x 400g', price:1180, stock:'out' },
  { id:'MZ002', name:'Dutch Farm UHT Milk 1L', cat:'dairy', icon:'🥛', pack:'Carton', unit:'12 x 1L', price:640, stock:'in' },
  { id:'MZ003', name:'Golden Churn Butter 200g', cat:'dairy', icon:'🧈', pack:'Box', unit:'24 x 200g', price:1450, stock:'in' },
  { id:'MZ004', name:'Cimory Yogurt Drink Strawberry 125ml', cat:'dairy', icon:'🍓', pack:'Carton', unit:'40 x 125ml', price:160, stock:'low' },
  { id:'MZ005', name:'Ceylon Breakfast Tea 100 Bags', cat:'tea', icon:'🍵', pack:'Box', unit:'12 x 100bags', price:920, stock:'in' },
  { id:'MZ006', name:'Green Tea Classic 25 Bags', cat:'tea', icon:'🍃', pack:'Box', unit:'24 x 25bags', price:540, stock:'in' },
  { id:'MZ007', name:'Nescafe Classic Instant Coffee 200g', cat:'coffee', icon:'☕', pack:'Carton', unit:'12 x 200g', price:1980, stock:'low' },
  { id:'MZ008', name:'3-in-1 Instant Coffee Mix 20g', cat:'coffee', icon:'☕', pack:'Box', unit:'30 x 20g', price:310, stock:'in' },
  { id:'MZ009', name:'Sparkling Orange Soda 330ml', cat:'beverages', icon:'🥤', pack:'Carton', unit:'24 x 330ml', price:480, stock:'in' },
  { id:'MZ010', name:'Tropical Fruit Juice 1L', cat:'beverages', icon:'🧃', pack:'Carton', unit:'12 x 1L', price:660, stock:'in' },
  { id:'MZ011', name:'Mineral Water 500ml', cat:'beverages', icon:'💧', pack:'Carton', unit:'24 x 500ml', price:220, stock:'in' },
  { id:'MZ012', name:'Premium Medjool Dates 500g', cat:'dried-fruits', icon:'🌰', pack:'Box', unit:'10 x 500g', price:2100, stock:'low' },
  { id:'MZ013', name:'Mixed Dried Fruits 250g', cat:'dried-fruits', icon:'🍇', pack:'Box', unit:'20 x 250g', price:1350, stock:'in' },
  { id:'MZ014', name:'Basmati Rice 5kg', cat:'grains', icon:'🌾', pack:'Bag', unit:'1 x 5kg', price:340, stock:'in' },
  { id:'MZ015', name:'Rolled Oats 500g', cat:'grains', icon:'🥣', pack:'Carton', unit:'12 x 500g', price:980, stock:'in' },
  { id:'MZ016', name:'Peanut Butter Crunchy 340g', cat:'grains', icon:'🥜', pack:'Carton', unit:'12 x 340g', price:1120, stock:'low' },
  { id:'MZ017', name:'Overload Chocolate Bar 40g', cat:'confectionary', icon:'🍫', pack:'Carton', unit:'24 x 40g', price:790, stock:'low' },
  { id:'MZ018', name:'Butter Cream Crackers 300g', cat:'confectionary', icon:'🍪', pack:'Carton', unit:'12 x 300g', price:860, stock:'in' },
  { id:'MZ019', name:'Assorted Gummy Candy 100g', cat:'confectionary', icon:'🍬', pack:'Box', unit:'30 x 100g', price:610, stock:'in' },
  { id:'MZ020', name:'Chicken Chunk in Sunflower Oil 185g', cat:'canned', icon:'🍗', pack:'Carton', unit:'24 x 185g', price:1750, stock:'in' },
  { id:'MZ021', name:'Tropical Fruit Cocktail 420g', cat:'canned', icon:'🍍', pack:'Carton', unit:'24 x 420g', price:850, stock:'low' },
  { id:'MZ022', name:'Corned Beef 340g', cat:'canned', icon:'🥫', pack:'Carton', unit:'24 x 340g', price:1980, stock:'in' },
  { id:'MZ023', name:'All-Purpose Baking Flour 1kg', cat:'cooking', icon:'🌾', pack:'Bag', unit:'1 x 1kg', price:75, stock:'in' },
  { id:'MZ024', name:'Fine Granulated Sugar 1kg', cat:'cooking', icon:'🧂', pack:'Bag', unit:'1 x 1kg', price:60, stock:'in' },
  { id:'MZ025', name:'Baking Powder 100g', cat:'cooking', icon:'🧁', pack:'Box', unit:'24 x 100g', price:540, stock:'in' },
  { id:'MZ026', name:'Strawberry Body Wash 400ml', cat:'personal-care', icon:'🧴', pack:'Carton', unit:'12 x 400ml', price:960, stock:'in' },
  { id:'MZ027', name:'Refreshing Hand Sanitizer 250ml', cat:'personal-care', icon:'🧼', pack:'Carton', unit:'24 x 250ml', price:1080, stock:'in' },
  { id:'MZ028', name:'Herbal Shampoo 350ml', cat:'personal-care', icon:'🧴', pack:'Carton', unit:'12 x 350ml', price:890, stock:'low' },
  { id:'MZ029', name:'White Vinegar 750ml', cat:'sauces', icon:'🍶', pack:'Carton', unit:'12 x 750ml', price:420, stock:'in' },
  { id:'MZ030', name:'BBQ Flavour Sauce 340g', cat:'sauces', icon:'🍯', pack:'Carton', unit:'24 x 340g', price:920, stock:'in' },
  { id:'MZ031', name:'Pure Sunflower Cooking Oil 5L', cat:'sauces', icon:'🛢️', pack:'Carton', unit:'4 x 5L', price:1450, stock:'low' },
  { id:'MZ032', name:'Multi-Surface Cleaning Liquid 1L', cat:'household', icon:'🧽', pack:'Carton', unit:'12 x 1L', price:780, stock:'in' },
  { id:'MZ033', name:'Glue Stick 21g', cat:'household', icon:'🖇️', pack:'Box', unit:'20 pcs', price:140, stock:'low' },
  { id:'MZ034', name:'Dishwashing Liquid Lemon 900ml', cat:'household', icon:'🧴', pack:'Carton', unit:'12 x 900ml', price:850, stock:'in' },

  /* --- Daiwa --- */
  { id:'MZ035', name:'Daiwa Dishwashing Liquid Lemon 3.6L', cat:'household', icon:'🧴', pack:'Carton', unit:'4 x 3.6L', price:1350, stock:'in' },
  { id:'MZ036', name:'Daiwa Dishwashing Liquid Concentrate & Hygiene 3.6L', cat:'household', icon:'🧴', pack:'Carton', unit:'4 x 3.6L', price:1450, stock:'in' },
  { id:'MZ037', name:'Daiwa Dishwashing Liquid Mint 3.8L', cat:'household', icon:'🧴', pack:'Carton', unit:'12 x 3.8L', price:3200, stock:'in' },
  { id:'MZ038', name:'Daiwa Laundry Liquid Detergent 3.5L', cat:'household', icon:'🧺', pack:'Carton', unit:'4 x 3.5L', price:1550, stock:'in' },
  { id:'MZ039', name:'Daiwa Fabric Softener 3.5L', cat:'household', icon:'🧺', pack:'Carton', unit:'4 x 3.5L', price:1450, stock:'in' },
  { id:'MZ040', name:'Daiwa Powder Detergent 5kg', cat:'household', icon:'📦', pack:'Carton', unit:'4 x 5kg', price:1680, stock:'in' },
  { id:'MZ041', name:'Daiwa Liquid Hand Soap 3.5L', cat:'household', icon:'🧼', pack:'Carton', unit:'4 x 3.5L', price:1250, stock:'in' },
  { id:'MZ042', name:'Daiwa Dust Collector Liquid 3.5L', cat:'household', icon:'🧽', pack:'Carton', unit:'4 x 3.5L', price:1350, stock:'in' },
  { id:'MZ043', name:'Daiwa Glass Cleaner 3.5L', cat:'household', icon:'🪟', pack:'Carton', unit:'4 x 3.5L', price:1350, stock:'in' },
  { id:'MZ044', name:'Daiwa Daily Gloss Liquid 3.5L', cat:'household', icon:'✨', pack:'Carton', unit:'4 x 3.5L', price:1350, stock:'in' },
  { id:'MZ045', name:'Daiwa Turbo Toilet Cleaner 900ml - White', cat:'household', icon:'🚽', pack:'Carton', unit:'12 x 900ml', price:1450, stock:'in', img:'img/household&cleaning/Daiwa Turbo Toilet Cleaner 900 ml.-White.jpg' },
  { id:'MZ074', name:'Daiwa Turbo Toilet Cleaner 900ml - Pink', cat:'household', icon:'🚽', pack:'Carton', unit:'12 x 900ml', price:1450, stock:'in', img:'img/household&cleaning/Daiwa Turbo Toilet Cleaner 900 ml.-Pink.jpg' },
  { id:'MZ075', name:'Daiwa Turbo Toilet Cleaner 900ml - Purple', cat:'household', icon:'🚽', pack:'Carton', unit:'12 x 900ml', price:1450, stock:'in', img:'img/household&cleaning/Daiwa Turbo Toilet Cleaner 900 ml.-Purple.jpg' },
  { id:'MZ046', name:'Daiwa Drain Unblocker 1L', cat:'household', icon:'🚰', pack:'Carton', unit:'12 x 1L', price:1780, stock:'in', img:'img/household&cleaning/Daiwa Drain Unblocker 1000 ml.jpg' },
  { id:'MZ047', name:'Daiwa Disinfectant Deodorizer 3.5L', cat:'household', icon:'🧴', pack:'Carton', unit:'4 x 3.5L', price:1350, stock:'in' },
  { id:'MZ048', name:'Daiwa Floor Cleaner 3.8L (Floral Mist/Lemon/Aqua Blue/Lavender)', cat:'household', icon:'🧹', pack:'Carton', unit:'4 x 3.8L', price:1550, stock:'in' },
  { id:'MZ073', name:'Daiwa Floor Polishing Wax 1L', cat:'household', icon:'✨', pack:'Carton', unit:'12 x 1L', price:850, stock:'in', img:'img/household&cleaning/Daiwa Floor Polishing Wax 1000 ml.jpg' },
  { id:'MZ049', name:'Daiwa Floor Polishing Wax 3.5L', cat:'household', icon:'✨', pack:'Carton', unit:'4 x 3.5L', price:1550, stock:'in', img:'img/household&cleaning/Daiwa Floor Polishing Wax 3500 ml.jpg' },
  { id:'MZ050', name:'Daiwa Hygiene Multi-Use Disinfectant 3.5L', cat:'household', icon:'🧴', pack:'Carton', unit:'4 x 3.5L', price:1450, stock:'in' },

  /* --- Sanzoft --- */
  { id:'MZ051', name:'Sanzoft Laundry Liquid Detergent 5L - Pink Rose Scent', cat:'household', icon:'🧺', pack:'Carton', unit:'4 x 5L', price:1980, stock:'in', img:'img/household&cleaning/Sanzoft Laundry Liquid Detergent 5000 ml.-Pink Rose Scent.jpg' },
  { id:'MZ081', name:'Sanzoft Laundry Liquid Detergent 5L - Violet Scent', cat:'household', icon:'🧺', pack:'Carton', unit:'4 x 5L', price:1980, stock:'in', img:'img/household&cleaning/Sanzoft Laundry Liquid Detergent 5000 ml.-Violet Scent.jpg' },
  { id:'MZ052', name:'Sanzoft Liquid Detergent 5L (Mystical Perfume)', cat:'household', icon:'🧺', pack:'Carton', unit:'4 x 5L', price:1980, stock:'in' },
  { id:'MZ053', name:'Sanzoft Fabric Softener 3.8L - Sunny Sweet', cat:'household', icon:'🧺', pack:'Carton', unit:'4 x 3.8L', price:1450, stock:'in' },
  { id:'MZ078', name:'Sanzoft Fabric Softener 3.8L - Lovely Pink', cat:'household', icon:'🧺', pack:'Carton', unit:'4 x 3.8L', price:1450, stock:'in', img:'img/household&cleaning/Sanzoft Fabric Softener 3800 ml. -Lovely Pink.jpg' },
  { id:'MZ079', name:'Sanzoft Fabric Softener 3.8L - Sense of Violet', cat:'household', icon:'🧺', pack:'Carton', unit:'4 x 3.8L', price:1450, stock:'in', img:'img/household&cleaning/Sanzoft Fabric Softener 3800 ml. -Sense of Violet.jpg' },
  { id:'MZ080', name:'Sanzoft Fabric Softener 3.8L - Softly Touch', cat:'household', icon:'🧺', pack:'Carton', unit:'4 x 3.8L', price:1450, stock:'in', img:'img/household&cleaning/Sanzoft Fabric Softener 3800 ml. -Softly Touch.jpg' },
  { id:'MZ054', name:'Sanzoft Fabric Sensation Spray 270ml (Lavish Pink/Elegant Violet/Deep Blue Cotton)', cat:'household', icon:'🌸', pack:'Carton', unit:'12 x 270ml', price:1080, stock:'in' },

  /* --- Pinto --- */
  { id:'MZ055', name:'Pinto Click Dishwashing Liquid 750ml (Lemon/Kiwi/Pomelo/Passion Fruit)', cat:'household', icon:'🧴', pack:'Carton', unit:'12 x 750ml', price:980, stock:'in' },
  { id:'MZ056', name:'Pinto Click Dishwashing Liquid Pure & Care 750ml', cat:'household', icon:'🧴', pack:'Carton', unit:'12 x 750ml', price:980, stock:'in' },

  /* --- R-Fresh --- */
  { id:'MZ057', name:'R-Fresh Air Freshener Gel 180g - Jasmine', cat:'household', icon:'🌸', pack:'Carton', unit:'24 x 180g', price:1180, stock:'in', img:'img/household&cleaning/R-Fresh Air Freshener Gel 180 gram.- Jasmine.jpg' },
  { id:'MZ069', name:'R-Fresh Air Freshener Gel 180g - Lavender', cat:'household', icon:'🌸', pack:'Carton', unit:'24 x 180g', price:1180, stock:'in', img:'img/household&cleaning/R-Fresh Air Freshener Gel 180 gram.-Lavender.jpg' },
  { id:'MZ070', name:'R-Fresh Air Freshener Gel 180g - Orange', cat:'household', icon:'🌸', pack:'Carton', unit:'24 x 180g', price:1180, stock:'in' },
  { id:'MZ071', name:'R-Fresh Air Freshener Gel 180g - Lemon', cat:'household', icon:'🌸', pack:'Carton', unit:'24 x 180g', price:1180, stock:'in', img:'img/household&cleaning/R-Fresh Air Freshener Gel 180 gram.- Lemon.jpg' },
  { id:'MZ072', name:'R-Fresh Air Freshener Gel 180g - Lily', cat:'household', icon:'🌸', pack:'Carton', unit:'24 x 180g', price:1180, stock:'in', img:'img/household&cleaning/R-Fresh Air Freshener Gel 180 gram.-Lily.jpg' },

  /* --- Carefor --- */
  { id:'MZ058', name:'Carefor Air Freshener Gel 180g - Rose', cat:'household', icon:'🌸', pack:'Carton', unit:'24 x 180g', price:1180, stock:'in', img:'img/household&cleaning/Carefor Air Freshener Gel 180 gram.- Rose.jpg' },
  { id:'MZ076', name:'Carefor Air Freshener Gel 180g - Lemon Grass', cat:'household', icon:'🌸', pack:'Carton', unit:'24 x 180g', price:1180, stock:'in', img:'img/household&cleaning/Carefor Air Freshener Gel 180 gram.- Lemon Grass.jpg' },
  { id:'MZ077', name:'Carefor Air Freshener Gel 180g - Coffee', cat:'household', icon:'🌸', pack:'Carton', unit:'24 x 180g', price:1180, stock:'in', img:'img/household&cleaning/Carefor Air Freshener Gel 180 gram.- Coffee.jpg' },

  /* --- Ninja (car care) --- */
  { id:'MZ059', name:'Ninja Car Wash Clean & Clear 1L', cat:'household', icon:'🚗', pack:'Carton', unit:'12 x 1L', price:1450, stock:'in' },
  { id:'MZ060', name:'Ninja Concentrated Car Wash 1L', cat:'household', icon:'🚗', pack:'Carton', unit:'12 x 1L', price:1650, stock:'in' },
  { id:'MZ061', name:'Ninja Leather Restorer Shine & Protect 400ml', cat:'household', icon:'🛋️', pack:'Carton', unit:'12 x 400ml', price:1180, stock:'in' },
  { id:'MZ062', name:'Ninja Quick Wax Shine & Protect 400ml', cat:'household', icon:'✨', pack:'Carton', unit:'12 x 400ml', price:1180, stock:'in' },
  { id:'MZ063', name:'Ninja Paste Wax 150g', cat:'household', icon:'🪞', pack:'Carton', unit:'24 x 150g', price:1450, stock:'in' },
  { id:'MZ064', name:'Ninja Ultra Gloss Spray Wax 400ml', cat:'household', icon:'✨', pack:'Carton', unit:'12 x 400ml', price:1180, stock:'in' },
  { id:'MZ065', name:'Ninja Tire Shine 400ml', cat:'household', icon:'🛞', pack:'Carton', unit:'12 x 400ml', price:1080, stock:'in' },
  { id:'MZ066', name:'Ninja Black Tires Shine & Protect Spray 510ml', cat:'household', icon:'🛞', pack:'Carton', unit:'12 x 510ml', price:1180, stock:'in' },
  { id:'MZ067', name:'Ninja Automotive Multi Purpose Spray 200ml', cat:'household', icon:'🔧', pack:'Carton', unit:'24 x 200ml', price:1580, stock:'in' },
  { id:'MZ068', name:'Ninja Anti Rat Spray 250ml', cat:'household', icon:'🐭', pack:'Carton', unit:'24 x 250ml', price:1980, stock:'in' },
];

/* ---------- Hero slides ---------- */
/* TODO: paste the Viber community invite link here (e.g. https://invite.viber.com/?g=xxxxxxxx) */
const VIBER_COMMUNITY_LINK = '';

const HERO_SLIDES = [
  { eyebrow:'This Week', title:'Free delivery on orders over MVR 500', desc:"Order today within Male' and get it delivered by tomorrow.", cta:'Start Shopping', icon:'🚚', img:'img/delivery.jpg' },
  { eyebrow:'New Arrivals', title:'New products landing every week', desc:'Join our Viber community to be the first to know when new stock arrives.', cta:'Viber Community', icon:'🆕', img:'img/shipment.jpg', link: VIBER_COMMUNITY_LINK || '#' },
];

/* ---------- State ---------- */
/* Cart, orders, and recent searches are namespaced per account, so logging
   out hides them and logging back into the same account brings them back. */
function accountId(){
  try{
    const session = JSON.parse(localStorage.getItem('mazi_session') || 'null');
    if (!session) return 'guest';
    // Accounts here are identified by mobile number (see isNewAccount check
    // in the OTP login flow) — email is optional and blank until the person
    // fills it in from Profile. Keying this off email meant every mobile
    // login stayed on the 'guest' bucket, which made the guest cart key and
    // the "logged in" cart key collide and wiped the cart on login.
    const key = (session.mobile || session.email || '').toLowerCase();
    return key || 'guest';
  } catch(e){ return 'guest'; }
}

(function migratePerAccountData(){
  // Older versions of the site stored these globally (shared by every
  // account on the device). Move any leftover data into the "guest" bucket
  // once, so nothing is silently lost.
  const migrations = [
    ['mazi_recent_searches', 'mazi_recent_searches_guest'],
    ['mazi_cart', 'mazi_cart_guest'],
    ['mazi_orders', 'mazi_orders_guest'],
  ];
  migrations.forEach(([oldKey, newKey])=>{
    try{
      const old = localStorage.getItem(oldKey);
      if (old !== null){
        if (localStorage.getItem(newKey) === null){
          localStorage.setItem(newKey, old);
        }
        localStorage.removeItem(oldKey);
      }
    } catch(e){}
  });
})();

function recentSearchesKey(){
  return 'mazi_recent_searches_' + accountId();
}
function loadRecentSearches(){
  try{ return JSON.parse(localStorage.getItem(recentSearchesKey()) || '[]'); }
  catch(e){ return []; }
}

function cartKey(){
  return 'mazi_cart_' + accountId();
}
function loadCart(){
  try{ return JSON.parse(localStorage.getItem(cartKey()) || '{}'); }
  catch(e){ return {}; }
}

function ordersKey(){
  return 'mazi_orders_' + accountId();
}

let state = {
  category: 'all',
  query: '',
  cart: loadCart(),
  recentSearches: loadRecentSearches(),
  pendingQty: {},
};

/* ---------- Checkout config ---------- */
const GST_RATE = 0.08; // product prices already include GST — this is just the informational breakout
let ckMethod = 'pickup'; // 'pickup' | 'delivery' | 'boat'
let ckSlipFile = null;
let ckPickupDayIndex = 0;

/* ============ Helpers ============ */
// Maldivian Rufiyaa is pegged to the US Dollar by the Maldives Monetary
// Authority at MVR 15.42 = USD 1 — this is the standard peg rate used for
// the shop's MVR -> USD display conversion.
const USD_PER_MVR = 1 / 15.42;
function getCurrency(){
  return localStorage.getItem('mazi_currency') || 'MVR';
}
function setCurrency(cur){
  if (cur !== 'MVR' && cur !== 'USD') return;
  localStorage.setItem('mazi_currency', cur);
  const session = getSession();
  if (session) setSession({ ...session, currency: cur });
  syncCurrencyToggleUI();
  refreshVisibleCurrency();
}
// MVR currency icon markup — replaces the plain "MVR" text everywhere a
// price is shown.
const MVR_ICON = '<img class="cur-icon" src="img/mvr-icon-black.png" alt="MVR">';
// Shop-browsing price display — follows the MVR/USD toggle in the header.
// Returns HTML (not plain text) since MVR amounts now include the icon —
// call sites must use innerHTML, not textContent.
const fmt = n => getCurrency() === 'USD'
  ? '$' + (n * USD_PER_MVR).toFixed(2)
  : MVR_ICON + n.toFixed(2);
// Order price display — orders now lock in whichever currency (MVR or
// USD) the shopper had selected at checkout, via order.currency, so
// order history/receipts stay in that currency regardless of what the
// shop-browsing toggle is set to afterward. Also returns HTML.
function fmtCur(n, cur){
  return (cur === 'USD')
    ? '$' + (n * USD_PER_MVR).toFixed(2)
    : MVR_ICON + n.toFixed(2);
}
// Legacy alias for any call site that hasn't been passed an explicit
// currency — falls back to the live toggle.
const fmtMvr = n => fmtCur(n, getCurrency());
const $ = sel => document.querySelector(sel);
const $$ = (sel, root) => Array.from((root || document).querySelectorAll(sel));

function syncCurrencyToggleUI(){
  const cur = getCurrency();
  $$('[data-currency]').forEach(btn=>{
    btn.classList.toggle('active', btn.dataset.currency === cur);
  });
  positionCurrencyThumbs();
}
// Slides the glass thumb behind whichever currency button is active.
// Re-measures on every call so it stays correct across screen sizes
// (mobile hides the icon, which changes the MVR button's width).
function positionCurrencyThumbs(){
  $$('.currency-toggle').forEach(toggle=>{
    const thumb = toggle.querySelector('.currency-toggle-thumb');
    const activeBtn = toggle.querySelector('.currency-toggle-btn.active');
    if (!thumb || !activeBtn) return;
    thumb.style.left = activeBtn.offsetLeft + 'px';
    thumb.style.width = activeBtn.offsetWidth + 'px';
  });
}
window.addEventListener('resize', positionCurrencyThumbs);
// Re-renders whatever price displays are currently on screen after the
// currency toggle changes. Past orders/receipts are intentionally left
// untouched here — they stay in whichever currency they were placed in
// (order.currency), not the live toggle.
function refreshVisibleCurrency(){
  renderProducts();
  updateCartUI();
  if ($('#productView') && $('#productView').classList.contains('open') && state.currentProductId != null){
    const p = PRODUCTS.find(p=>p.id===state.currentProductId);
    if (p){
      renderProductDetail(p);
      renderSimilarProducts(p);
      renderOtherProducts(p);
    }
  }
}

function saveCart(){
  localStorage.setItem(cartKey(), JSON.stringify(state.cart));
}

function saveRecentSearches(){
  localStorage.setItem(recentSearchesKey(), JSON.stringify(state.recentSearches));
}

function getRegisteredAccounts(){
  return JSON.parse(localStorage.getItem('mazi_accounts') || '[]');
}
function saveRegisteredAccount(mobile){
  const accounts = getRegisteredAccounts();
  accounts.push({ mobile });
  localStorage.setItem('mazi_accounts', JSON.stringify(accounts));
}
function clearMobileError(){
  $('#mobileField').classList.remove('has-error');
  $('#mobileError').hidden = true;
}

/* ============ Sign in via mobile number + OTP (demo — no real SMS sent) ============ */
let pendingMobile = null; // full mobile string, e.g. "+9607770010"
let currentOtpCode = null;
function generateOtpCode(){
  return String(Math.floor(100000 + Math.random() * 900000));
}
function maskMobile(mobile){
  if (mobile.length <= 4) return mobile;
  return mobile.slice(0, 2) + '•'.repeat(Math.max(0, mobile.length - 4)) + mobile.slice(-2);
}
function showMobileStep(){
  const authScrollEl = document.querySelector('.auth-card-scroll');
  const authStartHeight = authScrollEl ? authScrollEl.offsetHeight : null;
  pendingMobile = null;
  currentOtpCode = null;
  clearMobileError();
  $('#mobileInput').value = '';
  $('#otpForm').hidden = true;
  $('#mobileForm').hidden = false;
  $('#authIconMobile').hidden = false;
  $('#authIconKey').hidden = true;
  $('#authTitle').textContent = 'Sign In';
  $('#authSubtitle').textContent = 'Maldives mobile number';
  if (authScrollEl && authStartHeight !== null) animateAuthCardHeight(authScrollEl, authStartHeight);
}
function showOtpStep(mobile){
  const authScrollEl = document.querySelector('.auth-card-scroll');
  const authStartHeight = authScrollEl ? authScrollEl.offsetHeight : null;
  pendingMobile = mobile;
  currentOtpCode = generateOtpCode();
  $('#mobileForm').hidden = true;
  $('#otpForm').hidden = false;
  $('#authIconMobile').hidden = true;
  $('#authIconKey').hidden = false;
  $('#authTitle').textContent = 'Enter OTP';
  $('#authSubtitle').textContent = mobile;
  $('#otpDemoHint').textContent = `Demo mode — no SMS is actually sent. Your code is: ${currentOtpCode}`;
  resetOtpBoxes();
  if (authScrollEl && authStartHeight !== null) animateAuthCardHeight(authScrollEl, authStartHeight);
}

/* ============ 6-box OTP input: auto-advance, backspace, paste, and a
   little pop/shake animation feedback ============ */
function getOtpBoxes(){
  return Array.from(document.querySelectorAll('#otpBoxes .otp-box'));
}
function syncOtpValue(){
  $('#otpInput').value = getOtpBoxes().map(b => b.value).join('');
}
function resetOtpBoxes(){
  const boxes = getOtpBoxes();
  boxes.forEach(b => { b.value = ''; b.classList.remove('filled', 'error'); });
  $('#otpBoxes').classList.remove('shake');
  $('#otpField').classList.remove('has-error');
  $('#otpError').hidden = true;
  syncOtpValue();
  if (boxes[0]) setTimeout(() => boxes[0].focus(), 50);
}
function markOtpError(){
  const boxes = getOtpBoxes();
  $('#otpField').classList.add('has-error');
  $('#otpError').hidden = false;
  boxes.forEach(b => b.classList.add('error'));
  $('#otpBoxes').classList.remove('shake');
  void $('#otpBoxes').offsetWidth; // restart animation
  $('#otpBoxes').classList.add('shake');
  if (boxes[0]) { boxes[0].focus(); boxes[0].select(); }
}
function setupOtpBoxes(){
  const boxes = getOtpBoxes();
  boxes.forEach((box, i) => {
    box.addEventListener('input', () => {
      box.value = box.value.replace(/[^0-9]/g, '').slice(0, 1);
      $('#otpField').classList.remove('has-error');
      $('#otpError').hidden = true;
      box.classList.remove('error');
      $('#otpBoxes').classList.remove('shake');
      if (box.value){
        box.classList.remove('filled');
        void box.offsetWidth; // restart pop animation even on repeat digit
        box.classList.add('filled');
        if (i < boxes.length - 1) boxes[i + 1].focus();
      } else {
        box.classList.remove('filled');
      }
      syncOtpValue();
    });
    box.addEventListener('keydown', e => {
      if (e.key === 'Backspace' && !box.value && i > 0){
        const prev = boxes[i - 1];
        prev.value = '';
        prev.classList.remove('filled');
        prev.focus();
        syncOtpValue();
      } else if (e.key === 'ArrowLeft' && i > 0){
        e.preventDefault(); boxes[i - 1].focus();
      } else if (e.key === 'ArrowRight' && i < boxes.length - 1){
        e.preventDefault(); boxes[i + 1].focus();
      }
    });
    box.addEventListener('paste', e => {
      e.preventDefault();
      const digits = (e.clipboardData || window.clipboardData).getData('text').replace(/[^0-9]/g, '');
      if (!digits) return;
      digits.split('').slice(0, boxes.length - i).forEach((ch, j) => {
        boxes[i + j].value = ch;
        boxes[i + j].classList.remove('filled');
        void boxes[i + j].offsetWidth;
        boxes[i + j].classList.add('filled');
      });
      syncOtpValue();
      const nextEmpty = boxes.slice(i).find(b => !b.value);
      (nextEmpty || boxes[boxes.length - 1]).focus();
    });
    box.addEventListener('focus', () => box.select());
  });
}

function cartCount(){
  return Object.values(state.cart).reduce((s,q)=>s+q,0);
}

function showToast(msg, sub){
  const t = $('#toast');
  const iconSvg = `<svg viewBox="0 0 24 24" fill="none"><path d="M5 13l4 4L19 7" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"/></svg>`;

  if (sub){
    t.innerHTML = `<span class="toast-icon">${iconSvg}</span><span class="toast-text"><span class="toast-title"></span><span class="toast-sub"></span></span>`;
    t.querySelector('.toast-title').textContent = msg;
    t.querySelector('.toast-sub').textContent = sub;
  } else {
    t.innerHTML = `<span class="toast-icon">${iconSvg}</span><span class="toast-msg"></span>`;
    t.querySelector('.toast-msg').textContent = msg;
  }

  // restart the icon pop each time
  const icon = t.querySelector('.toast-icon');
  icon.classList.remove('pop');
  void icon.offsetWidth;
  icon.classList.add('pop');

  t.classList.add('show');
  clearTimeout(showToast._timer);
  showToast._timer = setTimeout(()=> t.classList.remove('show'), sub ? 2200 : 1800);
}

/* ============ Sidebar / category strip / pills ============ */
// Switching category always clears any active search — otherwise the
// heading/results stay stuck on "Results for ..." (and filtered by the old
// keyword) instead of reflecting the category the person just tapped.
function setCategory(catId){
  state.category = catId;
  state.query = '';
  $('#searchInput').value = '';
  $('#mobileSearchInput').value = '';
}

function renderCategoryNav(){
  // Sidebar (desktop) — highlight pill is rebuilt as the first list item each render
  const sidebarItems = [
    `<li><button data-cat="all" class="${state.category==='all'?'active':''}">All Categories</button></li>`,
    ...CATEGORIES.map(c => `<li><button data-cat="${c.id}" class="${state.category===c.id?'active':''}">${c.name}</button></li>`)
  ].join('');
  const sidebarHtml = `<div class="sidebar-highlight" id="sidebarHighlight"></div>${sidebarItems}`;
  const mobileHtml = `<div class="sidebar-highlight" id="mobileMenuHighlight"></div>${sidebarItems}`;
  $('#sidebarList').innerHTML = sidebarHtml;
  $('#mobileMenuList').innerHTML = mobileHtml;

  $$('[data-cat]').forEach(btn=>{
    btn.addEventListener('click', ()=>{
      setCategory(btn.dataset.cat);
      $$('[data-cat]').forEach(b=> b.classList.toggle('active', b.dataset.cat === state.category));
      renderProducts();
      closeMenu();
    });
  });

  // Position all three sliding highlights on the frame after render so
  // layout has settled (needed for accurate getBoundingClientRect reads).
  requestAnimationFrame(updateCategoryHighlights);
  requestAnimationFrame(updateSidebarRail);
}

/* ============ Sidebar custom scrollbar (rail) ============ */
function updateSidebarRail(){
  const wrap = $('#sidebarScrollwrap');
  const rail = $('#sidebarRail');
  const track = $('#sidebarRailTrack');
  const thumb = $('#sidebarRailThumb');
  const upBtn = $('#sidebarRailUp');
  const downBtn = $('#sidebarRailDown');
  if (!wrap || !rail || !track || !thumb) return;

  const scrollable = wrap.scrollHeight > wrap.clientHeight + 1;
  rail.hidden = !scrollable;
  if (!scrollable) return;

  // Pin the rail's height to the list's own rendered height so the track
  // never runs longer than the visible category list.
  rail.style.height = wrap.clientHeight + 'px';

  const trackHeight = track.clientHeight;
  const thumbHeight = Math.max(24, (wrap.clientHeight / wrap.scrollHeight) * trackHeight);
  const maxScroll = wrap.scrollHeight - wrap.clientHeight;
  const maxThumbTop = trackHeight - thumbHeight;
  const thumbTop = maxScroll > 0 ? (wrap.scrollTop / maxScroll) * maxThumbTop : 0;

  thumb.style.height = thumbHeight + 'px';
  thumb.style.top = thumbTop + 'px';

  if (upBtn) upBtn.disabled = wrap.scrollTop <= 0;
  if (downBtn) downBtn.disabled = wrap.scrollTop >= maxScroll - 1;
}

function initSidebarRail(){
  const wrap = $('#sidebarScrollwrap');
  const upBtn = $('#sidebarRailUp');
  const downBtn = $('#sidebarRailDown');
  if (!wrap) return;

  wrap.addEventListener('scroll', updateSidebarRail, { passive:true });
  window.addEventListener('resize', updateSidebarRail);

  if (upBtn) upBtn.addEventListener('click', ()=>{
    wrap.scrollBy({ top: -96, behavior: 'smooth' });
  });
  if (downBtn) downBtn.addEventListener('click', ()=>{
    wrap.scrollBy({ top: 96, behavior: 'smooth' });
  });
}

function positionHighlight(container, highlightEl, horizontal){
  if (!container || !highlightEl) return;
  const activeBtn = container.querySelector('button.active');
  if (!activeBtn){ highlightEl.classList.remove('ready'); return; }
  const btnRect = activeBtn.getBoundingClientRect();
  const boxRect = container.getBoundingClientRect();
  if (horizontal){
    highlightEl.style.transform = `translateX(${btnRect.left - boxRect.left}px)`;
    highlightEl.style.width = btnRect.width + 'px';
    highlightEl.style.height = btnRect.height + 'px';
  } else {
    highlightEl.style.transform = `translateY(${btnRect.top - boxRect.top}px)`;
    highlightEl.style.width = btnRect.width + 'px';
    highlightEl.style.height = btnRect.height + 'px';
  }
  highlightEl.classList.add('ready');
}

function updateCategoryHighlights(){
  positionHighlight($('#sidebarList'), $('#sidebarHighlight'), false);
  positionHighlight($('#mobileMenuList'), $('#mobileMenuHighlight'), false);
}

/* ============ Brands ticker: auto-scroll that pauses on drag/hover
   and resumes the loop after the user lets go ============ */
function initBrandsTicker(){
  const viewport = document.querySelector('.brands-ticker-viewport');
  const track = $('#brandsTickerTrack');
  if (!viewport || !track) return;

  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const SPEED = 42; // px per second

  let setWidth = 0;    // width of one (of the 3 duplicated) item sets
  let pos = 0;         // current translateX, always <= 0
  let dragging = false;
  let hovering = false;
  let pausedAfterDrag = false;
  let dragStartX = 0;
  let dragStartPos = 0;
  let resumeTimer = null;
  let lastTime = null;

  function measure(){
    // The track markup has 4 duplicated sets of logos (A, B, C, D) so the
    // loop never shows a gap on wide screens — must match that here or the
    // wrap point falls mid-set and the loop stutters/jumps.
    setWidth = track.scrollWidth / 4 || 0;
  }
  function applyTransform(){
    track.style.transform = `translateX(${pos}px)`;
  }
  function wrap(){
    if (setWidth <= 0) return;
    while (pos <= -setWidth * 2) pos += setWidth;
    while (pos > 0) pos -= setWidth;
  }

  function tick(t){
    if (lastTime === null) lastTime = t;
    const dt = (t - lastTime) / 1000;
    lastTime = t;
    if (!reduceMotion && !dragging && !hovering && !pausedAfterDrag){
      pos -= SPEED * dt;
      wrap();
      applyTransform();
    }
    requestAnimationFrame(tick);
  }

  function pointerX(e){
    return e.touches && e.touches.length ? e.touches[0].clientX : e.clientX;
  }

  function onDown(e){
    dragging = true;
    pausedAfterDrag = false;
    clearTimeout(resumeTimer);
    dragStartX = pointerX(e);
    dragStartPos = pos;
  }
  function onMove(e){
    if (dragging){
      const delta = pointerX(e) - dragStartX;
      pos = dragStartPos + delta;
      wrap();
      applyTransform();
      return;
    }
    // Robust hover check (works even if mouseenter/mouseleave get missed
    // due to overlapping elements) — purely geometric, based on cursor
    // position vs the viewport's box.
    if (typeof e.clientX === 'number'){
      const r = viewport.getBoundingClientRect();
      hovering = e.clientX >= r.left && e.clientX <= r.right && e.clientY >= r.top && e.clientY <= r.bottom;
    }
  }
  function onUp(){
    if (!dragging) return;
    dragging = false;
    pausedAfterDrag = true;
    clearTimeout(resumeTimer);
    // brief pause before the auto-scroll loop continues on its own
    resumeTimer = setTimeout(()=>{ pausedAfterDrag = false; lastTime = null; }, 1000);
  }

  track.addEventListener('touchstart', onDown, {passive:true});
  track.addEventListener('touchmove', onMove, {passive:true});
  track.addEventListener('touchend', onUp);
  track.addEventListener('touchcancel', onUp);

  track.addEventListener('mousedown', onDown);
  window.addEventListener('mousemove', onMove);
  window.addEventListener('mouseup', onUp);

  viewport.addEventListener('mouseenter', ()=>{ hovering = true; });
  viewport.addEventListener('mouseleave', ()=>{ hovering = false; });
  document.addEventListener('mouseleave', ()=>{ hovering = false; });

  window.addEventListener('resize', measure);
  measure();

  // Images load async — re-measure once they've all settled so the loop
  // width is accurate from the very first frame (avoids a jump/stutter
  // partway through once late-loading logos change the track's size).
  const imgs = track.querySelectorAll('img');
  let pending = imgs.length;
  if (pending){
    imgs.forEach(img=>{
      if (img.complete){ pending--; return; }
      img.addEventListener('load', ()=>{ if(--pending<=0) measure(); }, {once:true});
      img.addEventListener('error', ()=>{ if(--pending<=0) measure(); }, {once:true});
    });
    if (pending<=0) measure();
  }

  requestAnimationFrame(tick);
}


let heroIndex = 0;
let heroTimer = null;

function renderHero(){
  $('#heroTrack').innerHTML = HERO_SLIDES.map(s => {
    const isExternal = !!s.link && s.link !== '#';
    const href = s.link || '#productGrid';
    const target = isExternal ? ' target="_blank" rel="noopener"' : '';
    return `
    <div class="hero-slide${s.img ? ' has-img' : ''}" style="${s.img ? `background-image:url('${s.img}')` : ''}">
      <div class="hero-slide-content">
        <div class="hero-eyebrow">${s.eyebrow}</div>
        <h2 class="hero-title">${s.title}</h2>
        <p class="hero-desc">${s.desc}</p>
        <a href="${href}" class="hero-cta"${target}>${s.cta}</a>
      </div>
      ${s.img
        ? ``
        : `<div class="hero-visual">${s.icon}</div>`}
    </div>
  `;
  }).join('');

  $('#heroDots').innerHTML = HERO_SLIDES.map((_,i)=>`<button data-i="${i}" class="${i===0?'active':''}"></button>`).join('')
    + `<span class="hero-dot-highlight"></span>`;

  $$('#heroDots button').forEach(b=>{
    b.addEventListener('click', ()=> goToSlide(parseInt(b.dataset.i)));
  });

  positionHeroDotHighlight();
  window.addEventListener('resize', positionHeroDotHighlight);

  startHeroAuto();
}

function positionHeroDotHighlight(){
  const container = $('#heroDots');
  const highlight = container && container.querySelector('.hero-dot-highlight');
  const activeBtn = container && container.querySelector('button.active');
  if (!container || !highlight || !activeBtn) return;
  const hw = highlight.offsetWidth;
  const left = activeBtn.offsetLeft + (activeBtn.offsetWidth/2) - (hw/2);
  highlight.style.transform = `translate(${left}px, -50%)`;
}

function goToSlide(i){
  heroIndex = i;
  $('#heroTrack').style.transform = `translateX(-${i*100}%)`;
  $$('#heroDots button').forEach((b,idx)=> b.classList.toggle('active', idx===i));
  positionHeroDotHighlight();
  startHeroAuto();
}

function startHeroAuto(){
  clearInterval(heroTimer);
  heroTimer = setInterval(()=>{
    goToSlide((heroIndex+1)%HERO_SLIDES.length);
  }, 5000);
}

/* ============ Product grid ============ */
function getFilteredProducts(){
  const filtered = PRODUCTS.filter(p=>{
    const matchCat = state.category==='all' || p.cat===state.category;
    const matchQuery = !state.query || p.name.toLowerCase().includes(state.query) || p.id.toLowerCase().includes(state.query);
    return matchCat && matchQuery;
  });
  // Products with a real uploaded photo (p.img set) go first; the rest
  // (falling back to the default img/products/ID.png convention, which may
  // still be a placeholder) come after. Sort is stable, so order within
  // each group is unchanged.
  return filtered.slice().sort((a, b) => (a.img ? 0 : 1) - (b.img ? 0 : 1));
}

function stockMeta(p){
  if (p.stock === 'out') return { cls: 'out-stock', label: 'Out of Stock' };
  if (p.stock === 'low') return { cls: 'low-stock', label: 'Low Stock' };
  return { cls: 'in-stock', label: 'In Stock' };
}

function cardActionHtml(p, opts){
  opts = opts || {};
  const detailed = !!opts.detailed;
  const qty = state.cart[p.id] || 0;
  if (qty > 0){
    return `<button class="card-add card-add-done" data-id="${p.id}">
      <span class="card-add-success">
        <span class="card-add-success-icon"><svg viewBox="0 0 24 24" fill="none"><path d="M5 13l4 4L19 7" stroke="currentColor" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"/></svg></span>
        Added to cart
      </span>
    </button>
    <button class="card-remove-link" data-id="${p.id}">Click to remove</button>`;
  }
  if (p.stock === 'out'){
    return `<button class="card-add card-add-disabled" disabled>
      <span class="card-add-label">Out of Stock</span>
    </button>`;
  }
  const pendingQty = detailed ? (state.pendingQty[p.id] || 1) : 1;
  const qtySelector = detailed ? `
    <div class="pd-qty-select">
      <div class="pd-qty-label">Quantity</div>
      <div class="card-qty pd-qty" data-id="${p.id}">
        <button class="qty-btn" data-dir="-1" ${pendingQty<=1?'disabled':''}>&minus;</button>
        <span class="qty-val">${pendingQty}</span>
        <button class="qty-btn" data-dir="1">&plus;</button>
      </div>
    </div>` : '';
  return `${qtySelector}
  <button class="card-add" data-id="${p.id}" data-qty="${pendingQty}">
    <svg class="card-add-icon" viewBox="0 0 24 24"><path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><circle cx="8" cy="21" r="1.4" fill="currentColor"/><circle cx="19" cy="21" r="1.4" fill="currentColor"/></svg>
    <span class="card-add-label">Add to Cart</span>
    <span class="card-add-dots"><span></span><span></span><span></span></span>
    <span class="card-add-success">
      <span class="card-add-success-icon"><svg viewBox="0 0 24 24" fill="none"><path d="M5 13l4 4L19 7" stroke="currentColor" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"/></svg></span>
      Added to cart
    </span>
  </button>`;
}

function bindCardSlot(slot){
  if (!slot) return;
  const addBtn = slot.classList && slot.classList.contains('card-add') ? slot : slot.querySelector && slot.querySelector('.card-add');
  const id = slot.dataset.id || (addBtn && addBtn.dataset.id);

  if (addBtn && addBtn.classList.contains('card-add-done')){
    addBtn.addEventListener('click', (e)=>{ e.stopPropagation(); openCart(); });
  } else if (addBtn && addBtn.classList.contains('card-add-disabled')){
    // Out of stock — no action.
  } else if (addBtn){
    addBtn.addEventListener('click', (e)=>{
      e.stopPropagation();
      if (addBtn.classList.contains('loading') || addBtn.classList.contains('success')) return;
      const qty = parseInt(addBtn.dataset.qty || '1', 10);
      addBtn.classList.add('loading');
      setTimeout(()=>{
        addBtn.classList.remove('loading');
        addBtn.classList.add('success');
        setTimeout(()=>{ addToCart(addBtn.dataset.id, qty); }, 900);
      }, 1500);
    });
  }

  const removeLink = slot.classList && slot.classList.contains('card-remove-link') ? slot : slot.querySelector && slot.querySelector('.card-remove-link');
  if (removeLink){
    removeLink.addEventListener('click', (e)=>{ e.stopPropagation(); removeFromCart(removeLink.dataset.id); });
  }

  const pdQty = slot.classList && slot.classList.contains('card-qty') ? slot : slot.querySelector && slot.querySelector('.card-qty');
  if (pdQty){
    const qId = pdQty.dataset.id || id;
    const container = slot.classList && slot.classList.contains('card-action-slot') ? slot : pdQty.closest('.card-action-slot');
    pdQty.querySelectorAll('.qty-btn').forEach(b=>{
      b.addEventListener('click', (e)=>{
        e.stopPropagation();
        const dir = parseInt(b.dataset.dir, 10);
        const next = (state.pendingQty[qId] || 1) + dir;
        state.pendingQty[qId] = Math.max(1, next);
        if (container){
          const p = PRODUCTS.find(p=>p.id===qId);
          container.innerHTML = cardActionHtml(p, { detailed: true }).trim();
          bindCardSlot(container);
        }
      });
    });
  }
}

function refreshCardSlot(id, detailed){
  // Update every instance of this product's action controls on the page —
  // it can appear in the main grid, the product detail view, and the
  // similar-products strip all at once.
  const olds = $$(`.card-action-slot[data-id="${id}"]`);
  if (!olds.length) return;
  const p = PRODUCTS.find(p=>p.id===id);
  olds.forEach(old=>{
    const isDetailed = typeof detailed === 'boolean' ? detailed : old.classList.contains('pd-actions');
    old.innerHTML = cardActionHtml(p, { detailed: isDetailed }).trim();
    old.classList.add('swap-in');
    bindCardSlot(old);
  });
}

function productCardHtml(p){
  return `
    <div class="product-card" data-id="${p.id}">
      <div class="card-media">
        <img class="card-img" src="${productImg(p)}" alt="${p.name}" loading="lazy" onerror="this.classList.add('img-missing')">
      </div>
      <div class="card-body">
        <div class="stock-indicator ${stockMeta(p).cls}">
          <span class="stock-dot"></span>
          <span class="stock-text">${stockMeta(p).label}</span>
        </div>
        <div class="card-title">${p.name}</div>
        <div class="card-code">${p.id}</div>
        <div class="card-meta">
          <div class="card-unit"><small>${p.pack}</small><strong>${p.unit}</strong></div>
          <div class="card-price">${fmt(p.price)}</div>
        </div>
        <div class="card-action-slot" data-id="${p.id}">${cardActionHtml(p)}</div>
      </div>
    </div>
  `;
}

function bindProductCardClicks(container){
  $$('.product-card', container).forEach(card=>{
    card.addEventListener('click', (e)=>{
      if (e.target.closest('.card-add, .card-qty, .card-remove-link')) return;
      openProductView(card.dataset.id);
    });
  });
}

function productImg(p){
  // Some products (e.g. specific brand scents/variants) ship with a real
  // photo already placed at a custom path — use that if set on the product.
  if (p.img) return p.img;
  // Default placeholder path convention — drop matching files in
  // img/products/ (e.g. img/products/MZ001.png) and they'll show automatically.
  // Falls back to the emoji if the file isn't there yet.
  return `img/products/${p.id}.png`;
}

function renderSkeletons(count = 6){
  $('#emptyState').hidden = true;
  $('#productGrid').style.display = 'grid';
  $('#productGrid').innerHTML = Array.from({length: count}).map(() => `
    <div class="skeleton-card">
      <div class="skeleton-media"></div>
      <div class="skeleton-body">
        <div class="skeleton-line"></div>
        <div class="skeleton-line short"></div>
      </div>
    </div>
  `).join('');
}

function renderProducts(){
  const list = getFilteredProducts();
  const catName = state.category==='all' ? 'All Products' : CATEGORIES.find(c=>c.id===state.category)?.name || 'All Products';
  $('#sectionTitle').textContent = state.query ? `Results for "${state.query}"` : catName;
  $('#resultCount').textContent = `${list.length} item${list.length!==1?'s':''}`;

  $('#emptyState').hidden = list.length !== 0;
  $('#productGrid').style.display = list.length === 0 ? 'none' : 'grid';

  $('#productGrid').innerHTML = list.map(p => productCardHtml(p)).join('');

  $$('#productGrid .card-action-slot').forEach(bindCardSlot);
  bindProductCardClicks($('#productGrid'));
}

/* ============ Product detail view ============ */
function renderProductDetail(p){
  $('#productDetailCard').innerHTML = `
    <div class="pd-media">
      <img src="${productImg(p)}" alt="${p.name}" onerror="this.classList.add('img-missing')">
    </div>
    <div class="pd-info">
      <div>
        <div class="stock-indicator ${stockMeta(p).cls}">
          <span class="stock-dot"></span>
          <span class="stock-text">${stockMeta(p).label}</span>
        </div>
        <div class="pd-title">${p.name}</div>
        <div class="pd-code">${p.id}</div>
      </div>
      <div class="pd-divider"></div>
      <div class="pd-meta">
        <div class="pd-unit"><small>${p.pack}</small><strong>${p.unit}</strong></div>
        <div class="pd-price">${fmt(p.price)}</div>
      </div>
      <div class="pd-divider"></div>
      <div class="pd-actions card-action-slot" data-id="${p.id}">${cardActionHtml(p, { detailed: true })}</div>
    </div>
  `;
  bindCardSlot($('#productDetailCard .pd-actions'));
}

function renderSimilarProducts(p){
  const similar = PRODUCTS.filter(x => x.cat === p.cat && x.id !== p.id).slice(0, 8);
  const section = $('#similarProductsSection');
  if (!similar.length){ section.hidden = true; return; }
  section.hidden = false;
  $('#similarProductsGrid').innerHTML = similar.map(x => productCardHtml(x)).join('');
  $$('#similarProductsGrid .card-action-slot').forEach(bindCardSlot);
  bindProductCardClicks($('#similarProductsGrid'));
  $('#similarProductsGrid').scrollLeft = 0;
  updateSimilarCarouselArrows();
}
function updateSimilarCarouselArrows(){
  const track = $('#similarProductsGrid');
  const prevBtn = $('#similarPrevBtn');
  const nextBtn = $('#similarNextBtn');
  if (!track || !prevBtn || !nextBtn) return;
  prevBtn.disabled = track.scrollLeft <= 4;
  nextBtn.disabled = track.scrollLeft >= track.scrollWidth - track.clientWidth - 4;
}
function scrollSimilarCarousel(dir){
  const track = $('#similarProductsGrid');
  if (!track) return;
  const card = track.querySelector('.product-card');
  const step = card ? card.getBoundingClientRect().width + 16 : 220;
  track.scrollBy({ left: dir * step * 2, behavior: 'smooth' });
}

function renderOtherProducts(p){
  const pool = shuffleArray(PRODUCTS.filter(x => x.cat !== p.cat && x.id !== p.id));
  state.otherProductsPool = pool;
  state.otherProductsShown = [];
  const section = $('#otherProductsSection');
  if (!pool.length){ section.hidden = true; return; }
  section.hidden = false;
  $('#otherProductsGrid').innerHTML = '';
  loadMoreOtherProducts(Infinity);
}
function loadMoreOtherProducts(count = 4){
  const pool = state.otherProductsPool || [];
  const shown = state.otherProductsShown || [];
  const next = pool.filter(x => !shown.includes(x.id)).slice(0, count);
  if (!next.length) return;
  state.otherProductsShown = shown.concat(next.map(x=>x.id));
  $('#otherProductsGrid').insertAdjacentHTML('beforeend', next.map(x => productCardHtml(x)).join(''));
  $$('#otherProductsGrid .card-action-slot').forEach(bindCardSlot);
  bindProductCardClicks($('#otherProductsGrid'));
}
function shuffleArray(arr){
  const a = arr.slice();
  for (let i = a.length - 1; i > 0; i--){
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function openProductView(id){
  const p = PRODUCTS.find(p=>p.id===id);
  if (!p) return;
  state.currentProductId = id;
  renderProductDetail(p);
  renderSimilarProducts(p);
  renderOtherProducts(p);
  closeOtherFullScreenViews('productView');
  $('#productView').classList.add('open');
  document.body.style.overflow = 'hidden';
  $('#productView').scrollTop = 0;
}
function closeProductView(){
  $('#productView').classList.remove('open');
  document.body.style.overflow = '';
}

// Only one full-screen .profile-view panel (Profile / My Orders / Product
// detail) should be open at a time — they all share the same z-index, and
// #productView sits later in the DOM, so if it's left open it silently
// paints over Profile/Orders when those are opened from within it.
function closeOtherFullScreenViews(exceptId){
  ['profileView','ordersView','productView'].forEach(id=>{
    if (id === exceptId) return;
    const el = $('#' + id);
    if (el) el.classList.remove('open');
  });
}

/* ============ Cart logic ============ */
function addToCart(id, qty){
  qty = qty || 1;
  state.cart[id] = (state.cart[id] || 0) + qty;
  delete state.pendingQty[id];
  saveCart();
  updateCartUI();
  refreshCardSlot(id);
  openCart();
}

function changeQty(id, delta){
  const next = (state.cart[id] || 0) + delta;
  if (next <= 0) { delete state.cart[id]; }
  else { state.cart[id] = next; }
  saveCart();
  updateCartUI();
  refreshCardSlot(id);
}

function removeFromCart(id){
  delete state.cart[id];
  delete state.pendingQty[id];
  saveCart();
  updateCartUI();
  refreshCardSlot(id);
}

function updateCartUI(){
  const count = cartCount();
  $$('.js-cart-count').forEach(el=>{
    el.textContent = count;
    el.style.display = count>0 ? 'flex' : 'none';
  });

  const ids = Object.keys(state.cart);
  if (ids.length===0){
    $('#cartItems').innerHTML = `<div class="cart-empty">Your cart is empty.<br>Add some products to get started.</div>`;
    $('#cartSubtotal').innerHTML = fmt(0);
    return;
  }

  let subtotal = 0;
  $('#cartItems').innerHTML = ids.map(id=>{
    const p = PRODUCTS.find(p=>p.id===id);
    const qty = state.cart[id];
    const lineTotal = p.price * qty;
    subtotal += lineTotal;
    return `
      <div class="cart-row">
        <div class="cart-row-media"><img class="cart-row-img" src="${productImg(p)}" alt="${p.name}" onerror="this.classList.add('img-missing')"></div>
        <div class="cart-row-info">
          <div class="cart-row-title">${p.name}</div>
          <div class="cart-row-price">${fmt(lineTotal)}</div>
          <div class="cart-row-qty">
            <button data-qty-minus="${id}">&minus;</button>
            <span>${qty}</span>
            <button data-qty-plus="${id}">&plus;</button>
          </div>
        </div>
        <button class="cart-row-delete" data-remove="${id}" aria-label="Remove item" title="Remove item">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M3 6h18"/>
            <path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/>
            <path d="M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6"/>
            <line x1="10" y1="11" x2="10" y2="17"/>
            <line x1="14" y1="11" x2="14" y2="17"/>
          </svg>
        </button>
      </div>
    `;
  }).join('');

  $('#cartSubtotal').innerHTML = fmt(subtotal);

  $$('[data-qty-plus]').forEach(b=> b.addEventListener('click', ()=> changeQty(b.dataset.qtyPlus, 1)));
  $$('[data-qty-minus]').forEach(b=> b.addEventListener('click', ()=> changeQty(b.dataset.qtyMinus, -1)));
  $$('[data-remove]').forEach(b=> b.addEventListener('click', ()=> removeFromCart(b.dataset.remove)));
}

/* ============ Drawer / menu toggles ============ */
function openCart(){
  $('#cartDrawer').classList.add('open');
  $('#drawerBackdrop').classList.add('show');
}
function closeCart(){
  $('#cartDrawer').classList.remove('open');
  $('#drawerBackdrop').classList.remove('show');
}
function openMenu(){
  $('#mobileMenu').classList.add('open');
  $('#menuBackdrop').classList.add('show');
}
function closeMenu(){
  $('#mobileMenu').classList.remove('open');
  $('#menuBackdrop').classList.remove('show');
}
function openLogin(){
  $('#authBackdrop').classList.add('show');
  $('#authModal').classList.add('open');
  showMobileStep();
}
function closeLogin(){
  $('#authBackdrop').classList.remove('show');
  $('#authModal').classList.remove('open');
}

/* ============ Session (login state) ============ */
function getSession(){
  try{ return JSON.parse(localStorage.getItem('mazi_session') || 'null'); }
  catch{ return null; }
}
// Whatever a shopper added to the cart before logging in lives under the
// "guest" bucket. On login/register we fold those items into the account's
// own cart — for any product that's in both, the guest quantity wins and
// overwrites whatever qty was already saved on the account (not added on
// top of it), so nothing picked before signing in gets left behind, but
// old account quantities don't silently inflate.
function mergeGuestCartIntoAccount(){
  const GUEST_KEY = 'mazi_cart_guest';
  const targetKey = cartKey();
  if (targetKey === GUEST_KEY) return; // still on the guest bucket — nothing to merge, and merging into itself would wipe it
  try{
    const guestCart = JSON.parse(localStorage.getItem(GUEST_KEY) || '{}');
    const guestIds = Object.keys(guestCart);
    if (guestIds.length === 0) return;
    const accountCart = JSON.parse(localStorage.getItem(targetKey) || '{}');
    guestIds.forEach(id=>{
      accountCart[id] = guestCart[id]; // overwrite — guest qty wins over whatever qty was already in the account cart for this item
    });
    localStorage.setItem(targetKey, JSON.stringify(accountCart));
    localStorage.removeItem(GUEST_KEY);
  } catch(e){}
}
function setSession(data){
  localStorage.setItem('mazi_session', JSON.stringify(data));
  mergeGuestCartIntoAccount();
  recoverMisfiledGuestOrders();
  state.recentSearches = loadRecentSearches();
  state.cart = loadCart();
  refreshVisibleCurrency(); // re-renders product grid + open product detail so Add to Cart / Added-to-cart state matches the new account's cart
  updateOrdersNotifBadge();
  initOrdersNotifPrompt(); // re-check auth state so the prompt reflects being logged in right away
  refreshOpenSearchPanel();
  renderAuthButton();
}
// One-time recovery: checkout.js used to key orders off session.email alone,
// so anyone who logged in via mobile OTP (email left blank) had their
// placed orders silently saved under the "guest" bucket instead of their
// real mobile-keyed bucket. checkout.js now matches script.js's accountId()
// logic, but past orders are still stranded under mazi_orders_guest — pull
// them into the current (real) account's order history so nothing placed
// before the fix looks like it disappeared. Since checkout.js has always
// required a logged-in session to place an order, mazi_orders_guest can
// only contain orders misfiled by that bug, never genuine guest orders —
// safe to fold in and clear.
function recoverMisfiledGuestOrders(){
  const GUEST_KEY = 'mazi_orders_guest';
  const targetKey = ordersKey();
  if (targetKey === GUEST_KEY) return; // not logged in — nothing to recover into
  try{
    const misfiled = JSON.parse(localStorage.getItem(GUEST_KEY) || '[]');
    if (!Array.isArray(misfiled) || misfiled.length === 0) return;
    const existing = JSON.parse(localStorage.getItem(targetKey) || '[]');
    const existingIds = new Set(existing.map(o=> o.id));
    const merged = existing.concat(misfiled.filter(o=> !existingIds.has(o.id)));
    merged.sort((a,b)=> (b.placedAt||0) - (a.placedAt||0));
    localStorage.setItem(targetKey, JSON.stringify(merged));
    localStorage.removeItem(GUEST_KEY);
  } catch(e){}
}
function clearSession(){
  localStorage.removeItem('mazi_session');
  state.recentSearches = loadRecentSearches();
  state.cart = loadCart();
  refreshVisibleCurrency(); // re-renders product grid + open product detail so Add to Cart / Added-to-cart state resets back to the guest cart
  updateOrdersNotifBadge();
  initOrdersNotifPrompt(); // re-check auth state so the "Get notified" prompt/toggle doesn't stay stuck visible after logout
  refreshOpenSearchPanel();
  renderAuthButton();
}
function refreshOpenSearchPanel(){
  const panel = $('#mobileSearchPanel');
  if (panel && panel.classList.contains('open')){
    renderMobileSearchBody($('#mobileSearchInput').value);
  }
}
function renderAuthButton(){
  const session = getSession();
  $$('.js-login-btn').forEach(btn=>{ btn.hidden = !!session; });
  $$('.js-profile-wrap').forEach(wrap=>{ wrap.hidden = !session; });
  if (!session) closeProfileDropdown();
}
function toggleProfileDropdown(dropdown){
  $$('.profile-dropdown').forEach(d=>{
    if (d !== dropdown) d.classList.remove('open');
  });
  dropdown.classList.toggle('open');
}
function closeProfileDropdown(){
  $$('.profile-dropdown').forEach(d=> d.classList.remove('open'));
}
function openProfileMenu(){
  $('#profileMenuBackdrop').classList.add('show');
  $('#profileMenu').classList.add('open');
}
function closeProfileMenu(){
  $('#profileMenuBackdrop').classList.remove('show');
  $('#profileMenu').classList.remove('open');
}

/* ============ Viber chat bubble popup ============ */
function openViberPopup(){
  $('#viberPopupBackdrop').classList.add('show');
  $('#viberPopup').classList.add('open');
  $('#viberFab').classList.add('is-open');
  $('#viberFab').setAttribute('aria-expanded','true');
}
function closeViberPopup(){
  $('#viberPopupBackdrop').classList.remove('show');
  $('#viberPopup').classList.remove('open');
  $('#viberFab').classList.remove('is-open');
  $('#viberFab').setAttribute('aria-expanded','false');
}

/* ============ Auth loading (3-dot) ============ */
function showAuthLoading(){
  $('#authLoading').classList.add('show');
}
function hideAuthLoading(){
  $('#authLoading').classList.remove('show');
}
function withAuthLoading(action, delay = 900){
  showAuthLoading();
  setTimeout(()=>{
    hideAuthLoading();
    action();
  }, delay);
}

/* ============ Generic confirm modal ============ */
let _confirmAction = null;
function openConfirmModal({ title, sub, note, confirmLabel = 'Confirm', onConfirm }){
  $('#logoutConfirmModal').querySelector('.confirm-title').textContent = title;
  $('#logoutConfirmModal').querySelector('.confirm-sub').textContent = sub;
  const noteEl = $('#confirmNote');
  if (note){
    noteEl.textContent = note;
    noteEl.hidden = false;
  } else {
    noteEl.textContent = '';
    noteEl.hidden = true;
  }
  $('#logoutConfirmBtn').textContent = confirmLabel;
  _confirmAction = onConfirm;
  $('#logoutConfirmBackdrop').classList.add('show');
  $('#logoutConfirmModal').classList.add('open');
}
function openLogoutConfirm(){
  openConfirmModal({
    title: 'Are you sure you want to log out?',
    sub: "You'll need to log in again to access your account.",
    confirmLabel: 'Log out',
    onConfirm: performLogout,
  });
}
function openDeleteAccountConfirm(){
  openConfirmModal({
    title: 'Are you sure you want to delete your account?',
    sub: 'This will permanently remove your account and cannot be undone.',
    confirmLabel: 'Delete account',
    onConfirm: ()=>{
      withAuthLoading(()=>{
        clearSession();
        showToast('Account deleted');
      }, 800);
    },
  });
}
function closeLogoutConfirm(){
  $('#logoutConfirmBackdrop').classList.remove('show');
  $('#logoutConfirmModal').classList.remove('open');
}
function performLogout(){
  withAuthLoading(()=>{
    clearSession();
    showToast('Logged out');
  }, 800);
}

/* ============ Orders ============ */
const ORDER_STEPS = [
  { key:'placed',     label:'Order Placed' },
  { key:'processing', label:'Processing' },
  { key:'delivery',   label:'Out for Delivery' },
  { key:'delivered',  label:'Delivered' },
];

// Demo progression: an order's status advances automatically over time
// so the tracker below has something real to show as it "completes",
// instead of every order sitting frozen at step 1 forever.
const ORDER_STAGE_MINUTES = [0, 1, 3, 6]; // minutes after placement each step unlocks

function getOrders(){
  return JSON.parse(localStorage.getItem(ordersKey()) || '[]');
}
function saveOrders(orders){
  localStorage.setItem(ordersKey(), JSON.stringify(orders));
}

function orderStatusIndex(order){
  const minutesElapsed = (Date.now() - order.placedAt) / 60000;
  let idx = 0;
  ORDER_STAGE_MINUTES.forEach((m, i)=>{ if (minutesElapsed >= m) idx = i; });
  return idx;
}

function placeOrder(customer){
  const ids = Object.keys(state.cart);
  if (ids.length === 0) return null;

  const items = ids.map(id=>{
    const p = PRODUCTS.find(p=>p.id===id);
    const qty = state.cart[id];
    return { id:p.id, name:p.name, pack:p.pack, unit:p.unit, price:p.price, qty };
  });
  const subtotal = items.reduce((s,it)=> s + it.price*it.qty, 0);
  const deliveryFee = customer && typeof customer.deliveryFee === 'number' ? customer.deliveryFee : null;
  const total = customer && typeof customer.total === 'number' ? customer.total : subtotal;

  const orders = getOrders();
  const orderNo = `MZ${new Date().getFullYear()}${String(orders.length+1).padStart(4,'0')}`;
  const order = { id:orderNo, placedAt:Date.now(), items, subtotal, deliveryFee, total, currency:getCurrency(), customer: customer || null };
  orders.unshift(order);
  saveOrders(orders);

  state.cart = {};
  saveCart();
  updateCartUI();

  return order;
}

function orderStepDotContent(done){
  return done
    ? `<svg viewBox="0 0 24 24" fill="none"><path d="M5 13l4 4L19 7" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/></svg>`
    : '';
}

function renderOrderStatus(order){
  const idx = orderStatusIndex(order);
  return ORDER_STEPS.map((step, i)=>{
    const done = i < idx || (i === idx && idx === ORDER_STEPS.length-1);
    const active = i === idx && !done;
    const cls = done ? 'done' : (active ? 'active' : '');
    return `
      <div class="order-step ${cls}">
        <div class="order-step-dot">${done ? orderStepDotContent(true) : (i+1)}</div>
        <div class="order-step-label">${step.label}</div>
      </div>
    `;
  }).join('');
}

function orderStatusBadge(order){
  if (order.cancelled) return `<span class="order-status-badge cancelled">Cancelled</span>`;
  const idx = orderStatusIndex(order);
  const step = ORDER_STEPS[idx];
  const cls = idx===0?'placed':idx===1?'processing':idx===2?'delivery':'delivered';
  return `<span class="order-status-badge ${cls}">${step.label}</span>`;
}

function canCancelOrder(order){
  return !order.cancelled && orderStatusIndex(order) === 0;
}
function showCancelButton(order){
  return !order.cancelled && orderStatusIndex(order) < ORDER_STEPS.length - 1;
}

/* ============ Order notifications (glass popups + Orders badge) ============ */
function isDelivered(order){
  return !order.cancelled && orderStatusIndex(order) === ORDER_STEPS.length - 1;
}
// An order lights up the Orders badge once it's confirmed as "successful"
// (moved past Placed into Processing) and again when it's Delivered.
function getUnseenNotifCount(){
  return getOrders().filter(o => !o.cancelled && o.badgeUnseen).length;
}
function markOrdersSeen(){
  const orders = getOrders();
  let changed = false;
  orders.forEach(o=>{
    if (o.badgeUnseen){ o.badgeUnseen = false; changed = true; }
  });
  if (changed) saveOrders(orders);
  return changed;
}
function updateOrdersNotifBadge(){
  const count = getSession() ? getUnseenNotifCount() : 0;
  const badge = $('#bnOrdersCount');
  if (badge){
    badge.textContent = count;
    badge.hidden = count === 0;
  }
  $$('.js-profile-orders-btn, #pmOrdersBtn').forEach(el=>{
    el.classList.toggle('has-notif', count > 0);
  });
}

const ORDER_NOTIF_ICONS = {
  processing: `<svg viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="9" stroke="currentColor" stroke-width="2"/><path d="M12 7v5l3.5 2" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
  delivery: `<svg viewBox="0 0 24 24" fill="none"><path d="M3 7h11v8H3z" stroke="currentColor" stroke-width="2" stroke-linejoin="round"/><path d="M14 11h4l3 3v1h-7z" stroke="currentColor" stroke-width="2" stroke-linejoin="round"/><circle cx="7.5" cy="18" r="1.6" fill="currentColor"/><circle cx="17.5" cy="18" r="1.6" fill="currentColor"/></svg>`,
  delivered: `<svg viewBox="0 0 24 24" fill="none"><path d="M5 13l4 4L19 7" stroke="currentColor" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
};
const ORDER_NOTIF_SUBS = {
  processing: "We're getting your order ready.",
  delivery: 'Your rider is on the way.',
  delivered: 'Your order has arrived. Enjoy!',
};
function orderNotifClass(idx){
  return idx===1?'processing':idx===2?'delivery':'delivered';
}

// Shows one glass notification card for an order's new status. Cards stack
// in #orderNotifStack, auto-dismiss after 5s, and tapping one opens Orders.
function showOrderNotif(order, idx){
  const stack = $('#orderNotifStack');
  if (!stack) return;
  const step = ORDER_STEPS[idx];
  const cls = orderNotifClass(idx);

  const el = document.createElement('div');
  el.className = 'order-notif';
  el.innerHTML = `
    <span class="order-notif-icon ${cls}">${ORDER_NOTIF_ICONS[cls]}</span>
    <span class="order-notif-body">
      <span class="order-notif-top">
        <span class="order-notif-title">${step.label}</span>
        <button type="button" class="order-notif-close" aria-label="Dismiss">
          <svg viewBox="0 0 24 24" fill="none"><path d="M6 6l12 12M18 6L6 18" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>
        </button>
      </span>
      <span class="order-notif-sub">${ORDER_NOTIF_SUBS[cls]}</span>
      <span class="order-notif-id">Order #${order.id}</span>
    </span>
  `;

  let timer;
  const remove = ()=>{
    clearTimeout(timer);
    el.classList.remove('show');
    el.classList.add('hide');
    setTimeout(()=>{ if (el.parentNode) el.parentNode.removeChild(el); }, 320);
  };
  el.addEventListener('click', (e)=>{
    if (e.target.closest('.order-notif-close')){ e.stopPropagation(); remove(); return; }
    remove();
    openOrdersView();
  });

  stack.appendChild(el);
  requestAnimationFrame(()=> requestAnimationFrame(()=> el.classList.add('show')));
  timer = setTimeout(remove, 5000);
}

// Polls each order's time-based status against what's already been notified.
// Fires a glass popup the moment an order reaches Processing, Out for
// Delivery, or Delivered — and lights up the Orders badge for the
// "successful" (Processing) and Delivered milestones.
function checkOrderUpdates(){
  if (!getSession()) return;
  const orders = getOrders();
  let changed = false;
  let badgeChanged = false;

  orders.forEach(o=>{
    if (o.cancelled) return;
    if (o.notifiedIdx === undefined) o.notifiedIdx = 0;
    const idx = orderStatusIndex(o);
    if (idx > o.notifiedIdx){
      showOrderNotif(o, idx);
      fireDeviceNotification(o, idx);
      if (idx === 1 || idx === ORDER_STEPS.length - 1){
        o.badgeUnseen = true;
        badgeChanged = true;
      }
      o.notifiedIdx = idx;
      changed = true;
    }
  });

  if (changed) saveOrders(orders);
  if (badgeChanged) updateOrdersNotifBadge();
}

/* ============ Device (OS-level) order notifications ============ */
// These are real notifications from the browser/OS — they can show on a
// phone's lock screen or a desktop's notification tray, even if this tab
// isn't focused, as long as the browser is running.
const NOTIF_ICON = 'img/logo.png';

function notifSupported(){
  return typeof window !== 'undefined' && 'Notification' in window;
}

// App-level on/off switch, separate from the browser's own permission.
// Browser permission can only ever be granted once (the "Enable" prompt);
// after that, the user turns notifications on/off for the app itself from
// their Profile page instead of being asked again.
function getNotifPref(){
  return localStorage.getItem('mazi_notif_pref') || 'on';
}
function setNotifPref(val){
  localStorage.setItem('mazi_notif_pref', val);
}

function registerNotifServiceWorker(){
  if (!('serviceWorker' in navigator)) return Promise.resolve(null);
  return navigator.serviceWorker.register('sw.js').catch(()=> null);
}

// Must be called from inside a real click/tap so mobile browsers allow the
// permission prompt. Calls back with the resulting permission string
// ('granted' | 'denied' | 'default' | 'unsupported').
function requestDeviceNotifPermission(onDone){
  if (!notifSupported()){ if (onDone) onDone('unsupported'); return; }
  if (Notification.permission !== 'default'){ if (onDone) onDone(Notification.permission); return; }
  registerNotifServiceWorker();
  Notification.requestPermission().then(perm=>{ if (onDone) onDone(perm); });
}

// Fires a real device notification for an order status change. Prefers the
// service worker path (required on Android Chrome — the plain Notification
// constructor is blocked there) and falls back to the constructor directly
// on desktop browsers that support it without a worker.
function fireDeviceNotification(order, idx){
  if (!notifSupported() || Notification.permission !== 'granted') return;
  if (getNotifPref() === 'off') return;
  const step = ORDER_STEPS[idx];
  const cls = orderNotifClass(idx);
  const title = `${step.label} — Order #${order.id}`;
  const options = {
    body: ORDER_NOTIF_SUBS[cls],
    icon: NOTIF_ICON,
    badge: NOTIF_ICON,
    tag: `mazi-order-${order.id}`,
    renotify: true,
    data: { url: 'index.html?open=orders' },
  };
  if ('serviceWorker' in navigator){
    navigator.serviceWorker.ready.then(reg=> reg.showNotification(title, options))
      .catch(()=>{ try{ new Notification(title, options); } catch(err){} });
  } else {
    try{ new Notification(title, options); } catch(err){}
  }
}

// Inline banner (shown in the Orders view) offering to turn device
// notifications on. Unlike before, it no longer disappears once granted —
// instead it morphs into a persistent on/off toggle right there, so the
// person can turn order + future offer/sale alerts back on or off anytime
// without digging into Profile settings. Only fully hides itself when
// notifications are unsupported or the browser permission was denied.
function initOrdersNotifPrompt(){
  const el = $('#ordersNotifPrompt');
  const action = $('#ordersNotifAction');
  if (!el || !action) return;

  if (!notifSupported() || !getSession() || Notification.permission === 'denied'){
    el.hidden = true;
    return;
  }
  el.hidden = false;

  if (Notification.permission === 'granted'){
    renderNotifToggle(action, 'ordersNotifToggle');
  } else {
    renderNotifEnableButton(action, 'ordersNotifBtn', ()=> renderNotifToggle(action, 'ordersNotifToggle'), el);
  }
}

// Renders the "Enable" button with the add-to-cart-style loading → success
// animation. On success, calls onEnabled() to swap in the toggle.
function renderNotifEnableButton(action, btnId, onEnabled, promptEl){
  action.innerHTML = `
    <button type="button" class="notif-prompt-btn" id="${btnId}">
      <span class="notif-btn-label">Enable</span>
      <span class="notif-btn-dots"><span></span><span></span><span></span></span>
      <span class="notif-btn-success">
        <span class="notif-btn-success-icon"><svg viewBox="0 0 24 24" fill="none"><path d="M5 13l4 4L19 7" stroke="currentColor" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"/></svg></span>
        Enabled
      </span>
    </button>`;
  const btn = document.getElementById(btnId);
  if (!btn) return;
  btn.addEventListener('click', ()=>{
    if (btn.classList.contains('loading') || btn.classList.contains('success')) return;
    btn.classList.add('loading');
    requestDeviceNotifPermission((perm)=>{
      // Keep the loading state on screen briefly (same rhythm as Add to
      // Cart) so the animation reads as real work happening, not a flicker.
      setTimeout(()=>{
        btn.classList.remove('loading');
        if (perm === 'granted'){
          setNotifPref('on');
          btn.classList.add('success');
          setTimeout(onEnabled, 900);
        } else if (perm === 'denied'){
          if (promptEl) promptEl.hidden = true;
        }
        // perm === 'default' (dismissed) — button just resets, user can retry
      }, 900);
    });
  });
}

// Renders the persistent on/off toggle shown once permission is granted.
// Toggling plays the same shrink-to-circle loading animation as Add to Cart:
// tap -> collapses into a small pulsing-dot circle -> expands back showing
// the new On/Off state.
function renderNotifToggle(action, toggleId){
  const on = getNotifPref() !== 'off';
  action.innerHTML = `
    <div class="notif-inline-toggle-wrap" id="${toggleId}Wrap">
      <span class="notif-toggle-caption" id="${toggleId}Caption">${on ? 'On' : 'Off'}</span>
      <label class="pv-toggle-switch" aria-label="Order &amp; offer notifications">
        <input type="checkbox" id="${toggleId}" ${on ? 'checked' : ''}>
        <span class="pv-toggle-slider"></span>
      </label>
    </div>`;
  const wrap = document.getElementById(`${toggleId}Wrap`);
  const toggle = document.getElementById(toggleId);
  if (!toggle) return;
  toggle.addEventListener('change', ()=>{
    const isOn = toggle.checked;
    if (wrap) wrap.innerHTML = `<span class="notif-toggle-dots"><span></span><span></span><span></span></span>`;
    setTimeout(()=>{
      setNotifPref(isOn ? 'on' : 'off');
      showToast(isOn ? "Notifications on — you'll also hear about offers & sales" : 'Notifications turned off');
      renderNotifToggle(action, toggleId);
    }, 700);
  });
}

// Order-notifications toggle shown on the Profile page. Only appears once
// the browser permission has actually been granted (there's nothing to
// toggle before that) — this is where the user turns notifications back
// off if they no longer want them, without needing browser-level settings.
function initProfileNotifToggle(){
  const card = $('#pvNotifCard');
  const toggle = $('#pvNotifToggle');
  if (!card || !toggle) return;

  if (!notifSupported() || Notification.permission !== 'granted'){
    card.hidden = true;
    return;
  }
  card.hidden = false;
  toggle.checked = getNotifPref() !== 'off';

  if (!toggle._wired){
    toggle._wired = true;
    toggle.addEventListener('change', ()=>{
      setNotifPref(toggle.checked ? 'on' : 'off');
      showToast(toggle.checked ? 'Order notifications enabled' : 'Order notifications turned off');
    });
  }
}

/* ============ Install App (PWA) ============ */
// Intentionally no custom install button/modal here — the manifest.json +
// service worker below already make the site installable, and browsers
// that support it (Chrome/Edge desktop & Android) show their own native
// "Install" icon in the address bar / menu automatically. Building a
// custom prompt on top of that used to call preventDefault() on
// beforeinstallprompt, which suppressed that native icon — removed so the
// browser's own install UI is what people see and use.

function cancelOrder(orderId){
  const orders = getOrders();
  const order = orders.find(o=> o.id === orderId);
  if (!order) return;
  order.cancelled = true;
  saveOrders(orders);
  renderOrdersView();
  showToast('Order cancelled');
}

function openCancelOrderConfirm(orderId){
  openConfirmModal({
    title: 'Cancel this order?',
    sub: "This order hasn't been approved yet. Once cancelled, this can't be undone.",
    note: "If you've already sent payment via bank transfer or QR code, it won't be refunded instantly — refunds are processed manually by our team and may take a few business days.",
    confirmLabel: 'Cancel Order',
    onConfirm: ()=> withAuthLoading(()=> cancelOrder(orderId), 700),
  });
}

function formatOrderDate(ts){
  return new Date(ts).toLocaleDateString('en-GB', { day:'numeric', month:'short', year:'numeric', hour:'2-digit', minute:'2-digit' });
}

let ordersVisibleCount = 10;
const ORDERS_PAGE_SIZE = 10;

function renderOrdersView(){
  markOrdersSeen();
  updateOrdersNotifBadge();
  initOrdersNotifPrompt();

  if (!getSession()){
    $('#ordersCount').textContent = '';
    $('#ordersCardBody').innerHTML = `
      <div class="orders-empty">
        <div class="orders-empty-icon">
          <svg viewBox="0 0 24 24" fill="none"><path d="M12 12a4.5 4.5 0 100-9 4.5 4.5 0 000 9zM4.5 20.25a7.5 7.5 0 0115 0" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg>
        </div>
        <p>Log in to view your orders</p>
        <a href="#" class="orders-empty-cta" id="ordersEmptyCta">Login / Register</a>
      </div>
    `;
    $('#ordersEmptyCta').addEventListener('click', e=>{
      e.preventDefault();
      closeOrdersView();
      openLogin();
    });
    return;
  }

  const allOrders = getOrders();
  $('#ordersCount').textContent = allOrders.length ? `${allOrders.length} order${allOrders.length!==1?'s':''}` : '';

  if (allOrders.length === 0){
    $('#ordersCardBody').innerHTML = `
      <div class="orders-empty">
        <div class="orders-empty-icon">
          <svg viewBox="0 0 24 24" fill="none"><path d="M4 7h16l-1.5 12h-13z" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"/><path d="M8 7a4 4 0 018 0" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/></svg>
        </div>
        <p>You didn't order anything yet</p>
        <a href="#" class="orders-empty-cta" id="ordersEmptyCta">Start Shopping</a>
      </div>
    `;
    $('#ordersEmptyCta').addEventListener('click', e=>{
      e.preventDefault();
      closeOrdersView();
    });
    return;
  }

  const ORDER_VISIBLE_ITEMS = 3;
  const orderRenderItemRow = (it, order) => `
    <div class="order-item-row">
      <div class="order-item-media"><img src="${productImg(PRODUCTS.find(p=>p.id===it.id) || it)}" alt="${it.name}" onerror="this.classList.add('img-missing')"></div>
      <div class="order-item-info">
        <div class="order-item-name">${it.name}</div>
        <div class="order-item-meta">${it.pack} · Qty ${it.qty}</div>
      </div>
      <div class="order-item-price">${fmtCur(it.price*it.qty, order.currency || 'MVR')}</div>
    </div>
  `;

  const orders = allOrders.slice(0, ordersVisibleCount);
  const remaining = allOrders.length - orders.length;

  $('#ordersCardBody').innerHTML = `
    <div class="orders-list">
      ${orders.map(order => {
        const visibleItems = order.items.slice(0, ORDER_VISIBLE_ITEMS);
        const hiddenItems = order.items.slice(ORDER_VISIBLE_ITEMS);
        return `
        <div class="order-card">
          <div class="order-card-head">
            <div>
              <div class="order-card-id">Order #${order.id}</div>
              <div class="order-card-date">${formatOrderDate(order.placedAt)}</div>
            </div>
            ${orderStatusBadge(order)}
          </div>
          <div class="order-items">
            ${visibleItems.map(it => orderRenderItemRow(it, order)).join('')}
            ${hiddenItems.length ? `
              <div class="order-items-hidden" id="orderItemsHidden-${order.id}">
                ${hiddenItems.map(it => orderRenderItemRow(it, order)).join('')}
              </div>
              <button type="button" class="order-see-more-btn" id="orderSeeMoreBtn-${order.id}" data-order-toggle="${order.id}">
                <span id="orderSeeMoreLabel-${order.id}">See ${hiddenItems.length} more item${hiddenItems.length!==1?'s':''}</span>
                <svg viewBox="0 0 24 24" class="order-see-more-icon"><path d="M6 9l6 6 6-6" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
              </button>
            ` : ''}
          </div>
          <div class="order-total-row">
            <span class="label">Order Total</span>
            <span class="value">${fmtCur(order.total, order.currency || 'MVR')}</span>
          </div>
          <div class="order-receipt-row">
            <button type="button" class="order-receipt-btn" data-receipt-order="${order.id}">
              <svg viewBox="0 0 24 24"><path d="M6 2h9l3 3v17l-2.5-1.5L13 22l-2.5-1.5L8 22l-2-12.5V2z" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"/><path d="M8 8h8M8 12h8M8 16h5" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/></svg>
              View Receipt
            </button>
          </div>
          ${order.cancelled ? `
            <div class="order-cancelled-note">This order was cancelled.</div>
          ` : `
            <div class="order-steps">
              ${renderOrderStatus(order)}
            </div>
          `}
          ${showCancelButton(order) ? `
            <div class="order-cancel-row">
              <button type="button" class="order-cancel-btn" data-cancel-order="${order.id}" ${canCancelOrder(order) ? '' : 'disabled'}>Cancel Order</button>
            </div>
          ` : ''}
        </div>
      `;
      }).join('')}
    </div>
    ${remaining > 0 ? `
      <button type="button" class="orders-load-more-btn" id="ordersLoadMoreBtn">
        Load ${Math.min(remaining, ORDERS_PAGE_SIZE)} more order${Math.min(remaining, ORDERS_PAGE_SIZE)!==1?'s':''}
      </button>
    ` : ''}
  `;
  $('#ordersLoadMoreBtn')?.addEventListener('click', ()=>{
    ordersVisibleCount += ORDERS_PAGE_SIZE;
    renderOrdersView();
  });
  $$('[data-order-toggle]').forEach(btn=>{
    btn.addEventListener('click', ()=> toggleOrderItems(btn.dataset.orderToggle));
  });
  $$('[data-cancel-order]').forEach(btn=>{
    btn.addEventListener('click', ()=> openCancelOrderConfirm(btn.dataset.cancelOrder));
  });
  $$('[data-receipt-order]').forEach(btn=>{
    btn.addEventListener('click', ()=> openReceiptModal(btn.dataset.receiptOrder));
  });
}

function toggleOrderItems(orderId){
  const hidden = document.getElementById('orderItemsHidden-'+orderId);
  const btn = document.getElementById('orderSeeMoreBtn-'+orderId);
  const label = document.getElementById('orderSeeMoreLabel-'+orderId);
  if (!hidden || !btn || !label) return;
  const expanded = hidden.classList.toggle('show');
  btn.classList.toggle('expanded', expanded);
  const hiddenCount = hidden.querySelectorAll('.order-item-row').length;
  label.textContent = expanded ? 'See less' : `See ${hiddenCount} more item${hiddenCount!==1?'s':''}`;
}

function openOrdersView(){
  ordersVisibleCount = ORDERS_PAGE_SIZE;
  renderOrdersView();
  closeOtherFullScreenViews('ordersView');
  $('#ordersView').classList.add('open');
  document.body.style.overflow = 'hidden';
  clearInterval(openOrdersView._timer);
  openOrdersView._timer = setInterval(renderOrdersView, 15000);
}
function closeOrdersView(){
  $('#ordersView').classList.remove('open');
  document.body.style.overflow = '';
  clearInterval(openOrdersView._timer);
  returnToCheckoutIfNeeded();
}

/* ============ Order Confirmation (shown right after checkout, before admin processes) ============ */
function openOrderConfirmModal(order){
  const session = getSession() || {};
  const customer = order.customer || {};
  const firstName = (customer.name || '').split(' ')[0] || session.firstName || session.name || 'there';
  const itemCount = order.items.reduce((s,it)=> s + it.qty, 0);

  $('#ocSub').textContent = `Hi ${firstName}, your order for ${itemCount} product${itemCount!==1?'s':''} has been received and is now pending confirmation from our team.`;

  const OC_VISIBLE_ITEMS = 4;
  const ocRenderItemRow = (it, idx) => `
    ${idx>0 ? '<div class="oc-item-divider"></div>' : ''}
    <div class="oc-item-row">
      <div class="oc-item-media"><img src="${productImg(PRODUCTS.find(p=>p.id===it.id) || it)}" alt="${it.name}" onerror="this.classList.add('img-missing')"></div>
      <div class="oc-item-info">
        <div class="oc-item-name">${it.name}</div>
        <div class="oc-item-meta">${it.pack} &middot; Qty ${it.qty}</div>
      </div>
      <div class="oc-item-price">${fmtCur(it.price * it.qty, order.currency || 'MVR')}</div>
    </div>
  `;
  const ocVisibleItems = order.items.slice(0, OC_VISIBLE_ITEMS);
  const ocHiddenItems = order.items.slice(OC_VISIBLE_ITEMS);

  $('#ocItems').innerHTML = `
    ${ocVisibleItems.map((it,i)=> ocRenderItemRow(it,i)).join('')}
    ${ocHiddenItems.length ? `
      <div class="oc-items-hidden" id="ocItemsHidden">
        ${ocHiddenItems.map((it,i)=> ocRenderItemRow(it, i + OC_VISIBLE_ITEMS)).join('')}
      </div>
      <button type="button" class="oc-see-more-btn" id="ocSeeMoreBtn" onclick="toggleOcItems()">
        <span id="ocSeeMoreLabel">See ${ocHiddenItems.length} more item${ocHiddenItems.length!==1?'s':''}</span>
        <svg viewBox="0 0 24 24" class="oc-see-more-icon"><path d="M6 9l6 6 6-6" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
      </button>
    ` : ''}
  `;

  const orderCur = order.currency || 'MVR';
  const subtotal = typeof order.subtotal === 'number' ? order.subtotal : order.total;
  const feeLabel = order.deliveryFee === 0 ? 'Complimentary' : (order.deliveryFee == null ? 'To be confirmed' : fmtCur(order.deliveryFee, orderCur));
  $('#ocTotals').innerHTML = `
    <div class="oc-total-row"><span>Subtotal</span><span>${fmtCur(subtotal, orderCur)}</span></div>
    <div class="oc-total-row"><span>Delivery Fee</span><span>${feeLabel}</span></div>
    <div class="oc-total-row oc-grand"><span>Order Total</span><span>${fmtCur(order.total, orderCur)}</span></div>
  `;

  const contact = customer.mobile || session.mobile || session.email || '—';
  const methodLabels = { pickup:"Showroom Pickup — Male'", delivery:'Home Delivery', boat:'Boat / Dhoni Delivery' };
  const loc = customer.location;
  let locationHtml = '—';
  if (customer.method === 'delivery' && loc && loc.address){
    locationHtml = loc.address + (loc.note ? `<br>${loc.note}` : '');
  } else if (customer.method === 'boat' && loc && loc.boatDetails){
    locationHtml = `${loc.boatName} &middot; ${loc.boatContact}${loc.boatDeparture ? `<br>Departs ${new Date(loc.boatDeparture).toLocaleString('en-GB',{day:'2-digit',month:'short',hour:'2-digit',minute:'2-digit'})}` : ''}<br>${loc.address}, ${loc.islandName} (${loc.islandCode})${loc.note ? `<br>${loc.note}` : ''}`;
  } else if (customer.method === 'pickup' && loc){
    locationHtml = `${loc.store}${loc.day ? ` &middot; ${loc.day}` : ''}${loc.note ? `<br>${loc.note}` : ''}`;
  }

  $('#ocDetails').innerHTML = `
    <div><div class="oc-detail-key">Order ID</div><div class="oc-detail-val">${order.id}</div></div>
    <div><div class="oc-detail-key">Order Date</div><div class="oc-detail-val">${formatOrderDate(order.placedAt)}</div></div>
    <div><div class="oc-detail-key">Status</div><div class="oc-detail-val">Pending Confirmation</div></div>
    <div><div class="oc-detail-key">Contact</div><div class="oc-detail-val">${contact}</div></div>
    <div><div class="oc-detail-key">${customer.method === 'pickup' ? 'Pickup' : 'Delivery'} Method</div><div class="oc-detail-val">${methodLabels[customer.method] || '—'}</div></div>
    <div><div class="oc-detail-key">${customer.method === 'pickup' ? 'Pickup Details' : 'Delivery To'}</div><div class="oc-detail-val">${locationHtml}</div></div>
  `;

  $('#ocBackdrop').classList.add('show');
  $('#ocModal').classList.add('open');
  document.body.style.overflow = 'hidden';
}
function closeOrderConfirmModal(){
  $('#ocBackdrop').classList.remove('show');
  $('#ocModal').classList.remove('open');
  document.body.style.overflow = '';
}
function toggleOcItems(){
  const hidden = $('#ocItemsHidden');
  const btn = $('#ocSeeMoreBtn');
  const label = $('#ocSeeMoreLabel');
  if (!hidden || !btn || !label) return;
  const expanded = hidden.classList.toggle('show');
  btn.classList.toggle('expanded', expanded);
  const hiddenCount = hidden.querySelectorAll('.oc-item-row').length;
  label.textContent = expanded ? 'See less' : `See ${hiddenCount} more item${hiddenCount!==1?'s':''}`;
}

/* ============ Receipt (view / print / save as PDF) ============ */
const RECEIPT_SIZE = { page:'80mm auto', width:'80mm' };
let _receiptOrderId = null;

function receiptStoreInfo(){
  return {
    name: 'MAZI General Trade',
    addr: "Male', Republic of Maldives",
    email: 'info@mazitrading.mv',
  };
}

function renderReceiptContent(order){
  const store = receiptStoreInfo();
  return `
    <div class="receipt-store-name">${store.name}</div>
    <div class="receipt-store-addr">${store.addr}</div>
    <div class="receipt-store-addr">${store.email}</div>
    <div class="receipt-divider"></div>
    <div class="receipt-meta-row"><span>Order #</span><span>${order.id}</span></div>
    <div class="receipt-meta-row"><span>Date</span><span>${formatOrderDate(order.placedAt)}</span></div>
    <div class="receipt-meta-row"><span>Status</span><span>${order.cancelled ? 'Cancelled' : ORDER_STEPS[orderStatusIndex(order)].label}</span></div>
    <div class="receipt-divider"></div>
    <div class="receipt-items">
      ${order.items.map(it => `
        <div class="receipt-item">
          <div class="receipt-item-name">${it.name}</div>
          <div class="receipt-item-sub">
            <span>${it.pack} &times; ${it.qty} @ ${fmtCur(it.price, order.currency || 'MVR')}</span>
            <span>${fmtCur(it.price * it.qty, order.currency || 'MVR')}</span>
          </div>
        </div>
      `).join('')}
    </div>
    <div class="receipt-divider"></div>
    <div class="receipt-total-row">
      <span>Total</span>
      <span>${fmtCur(order.total, order.currency || 'MVR')}</span>
    </div>
    <div class="receipt-divider"></div>
    <div class="receipt-footer">Thank you for shopping with us!</div>
    <div class="receipt-footer-small">This is a computer-generated receipt.</div>
  `;
}

function fitReceiptPaper(){
  const scroll = $('#receiptPreviewScroll');
  const wrap = $('#receiptPaperWrap');
  const paper = $('#receiptPaper');
  if (!scroll || !paper) return;
  paper.style.transform = 'none';
  const availWidth = scroll.clientWidth - 24; // account for scroll padding
  const naturalWidth = paper.offsetWidth;
  const naturalHeight = paper.offsetHeight;
  // Thermal receipts are physically tiny, so scale them UP to
  // comfortably fill the preview instead of showing true-to-life mm size,
  // capped so it never blows up into blurry oversized text.
  const scale = Math.min(2.4, availWidth / naturalWidth);
  paper.style.transform = `scale(${scale})`;
  wrap.style.height = (naturalHeight * scale) + 'px';
}

function openReceiptModal(orderId){
  const orders = getOrders();
  const order = orders.find(o=> o.id === orderId);
  if (!order) return;
  _receiptOrderId = orderId;
  $('#receiptContent').innerHTML = renderReceiptContent(order);
  requestAnimationFrame(fitReceiptPaper);
  $('#receiptBackdrop').classList.add('show');
  $('#receiptModal').classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeReceiptModal(){
  $('#receiptBackdrop').classList.remove('show');
  $('#receiptModal').classList.remove('open');
  document.body.style.overflow = '';
}

function printReceipt(){
  let styleTag = document.getElementById('receiptPrintStyle');
  if (!styleTag){
    styleTag = document.createElement('style');
    styleTag.id = 'receiptPrintStyle';
    document.head.appendChild(styleTag);
  }
  styleTag.textContent = `@page{ size:${RECEIPT_SIZE.page}; margin:2mm; }`;
  window.print();
}

function buildReceiptStandaloneHtml(order){
  return `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<title>Receipt - Order #${order.id}</title>
<style>
  @page{ size:${RECEIPT_SIZE.page}; margin:2mm; }
  *{box-sizing:border-box;}
  body{margin:0;background:#F8F7F2;font-family:'Courier New',Courier,monospace;color:#16211C;display:flex;justify-content:center;padding:24px 12px;}
  .receipt-paper{background:#fff;width:${RECEIPT_SIZE.width};max-width:100%;box-shadow:0 2px 10px rgba(15,58,46,.14);padding:18px 16px;}
  .receipt-store-name{font-size:14px;font-weight:700;text-align:center;letter-spacing:.02em;}
  .receipt-store-addr{font-size:10.5px;text-align:center;color:#5C6B63;margin-top:2px;}
  .receipt-divider{border-top:1px dashed #b9b6a9;margin:10px 0;}
  .receipt-meta-row{display:flex;justify-content:space-between;font-size:11px;margin-bottom:3px;}
  .receipt-items{display:flex;flex-direction:column;gap:8px;}
  .receipt-item-name{font-size:11.5px;font-weight:700;}
  .receipt-item-sub{display:flex;justify-content:space-between;font-size:11px;color:#5C6B63;margin-top:1px;}
  .receipt-total-row{display:flex;justify-content:space-between;font-size:13.5px;font-weight:700;}
  .receipt-footer{font-size:11.5px;text-align:center;font-weight:700;margin-top:2px;}
  .receipt-footer-small{font-size:9.5px;text-align:center;color:#5C6B63;margin-top:3px;}
  @media print{ body{background:#fff;padding:0;} .receipt-paper{box-shadow:none;margin:0 auto;} }
</style>
</head>
<body>
  <div class="receipt-paper">${renderReceiptContent(order)}</div>
</body>
</html>`;
}

function downloadReceipt(){
  const orders = getOrders();
  const order = orders.find(o=> o.id === _receiptOrderId);
  if (!order) return;
  const html = buildReceiptStandaloneHtml(order);
  const blob = new Blob([html], { type:'text/html' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `receipt-${order.id}.html`;
  document.body.appendChild(a);
  a.click();
  a.remove();
  URL.revokeObjectURL(url);
  showToast('Receipt downloaded');
}

/* ============ Profile page ============ */
function openProfileView(){
  const session = getSession() || {};
  $('#pvFirstName').value = session.firstName || session.name || '';
  $('#pvLastName').value = session.lastName || '';
  $('#pvEmail').value = session.email || '';
  $('#pvMobile').value = (session.mobile || '').replace('+960', '');
  $('#pvDob').value = session.dob || '';
  syncCurrencyToggleUI();
  initProfileNotifToggle();
  closeOtherFullScreenViews('profileView');
  $('#profileView').classList.add('open');
  document.body.style.overflow = 'hidden';
}
function closeProfileView(){
  $('#profileView').classList.remove('open');
  document.body.style.overflow = '';
  returnToCheckoutIfNeeded();
}
function saveProfileView(){
  const session = getSession() || {};
  const firstName = $('#pvFirstName').value.trim() || session.firstName || 'Account';
  const mobileDigits = $('#pvMobile').value.trim().replace(/[^0-9]/g, '');
  setSession({
    ...session,
    name: firstName,
    firstName,
    lastName: $('#pvLastName').value.trim(),
    email: $('#pvEmail').value.trim(),
    mobile: mobileDigits ? `+960${mobileDigits}` : (session.mobile || ''),
    dob: $('#pvDob').value,
    currency: getCurrency(),
  });
  showToast('Profile updated');
}

/* ============ Onboarding (first login account setup) ============ */
const ATOLLS = {
  'HA (Haa Alif)': ['Dhidhdhoo', 'Hoarafushi', 'Kelaa', 'Ihavandhoo'],
  'HDh (Haa Dhaalu)': ['Kulhudhuffushi', 'Nolhivaranfaru', 'Hanimaadhoo'],
  'Sh (Shaviyani)': ['Funadhoo', 'Feydhoo', 'Milandhoo'],
  'N (Noonu)': ['Manadhoo', 'Holhudhoo', 'Velidhoo'],
  'R (Raa)': ['Ungoofaaru', 'Dhuvaafaru', 'Alifushi'],
  'B (Baa)': ['Eydhafushi', 'Thulhaadhoo', 'Dharavandhoo'],
  'Lh (Lhaviyani)': ['Naifaru', 'Hinnavaru'],
  'K (Kaafu)': ["Male'", "Hulhumale'", 'Thulusdhoo', 'Guraidhoo', 'Maafushi'],
  'AA (Alifu Alifu)': ['Rasdhoo', 'Thoddoo', 'Ukulhas'],
  'ADh (Alifu Dhaalu)': ['Mahibadhoo', 'Dhigurah', 'Dhangethi'],
  'V (Vaavu)': ['Felidhoo', 'Keyodhoo'],
  'M (Meemu)': ['Muli', 'Naalaafushi', 'Dhiggaru'],
  'F (Faafu)': ['Nilandhoo', 'Magoodhoo'],
  'Dh (Dhaalu)': ['Kudahuvadhoo', 'Meedhoo'],
  'Th (Thaa)': ['Veymandoo', 'Thimarafushi', 'Guraidhoo'],
  'L (Laamu)': ['Fonadhoo', 'Gan', 'Maabaidhoo'],
  'GA (Gaafu Alifu)': ['Villingili', 'Maamendhoo'],
  'GDh (Gaafu Dhaalu)': ['Thinadhoo', 'Madaveli'],
  'Gn (Gnaviyani)': ['Fuvahmulah'],
  'S (Addu)': ['Hithadhoo', 'Maradhoo', 'Feydhoo', 'Hulhudhoo'],
};

function populateAllCities(){
  const sel = $('#obCity');
  sel.innerHTML = '<option value="">Select city/island</option>' +
    `<optgroup label="Popular"><option>Male'</option><option>Hulhumale'</option></optgroup>` +
    Object.entries(ATOLLS).map(([atoll, cities]) =>
      `<optgroup label="${atoll}">${cities.map(c => `<option>${c}</option>`).join('')}</optgroup>`
    ).join('');
}

function populateAtollSelect(selectId){
  const sel = $(selectId);
  sel.innerHTML = Object.keys(ATOLLS).map(atoll => `<option value="${atoll}">${atoll}</option>`).join('');
}
function populateIslandSelect(selectId, atoll){
  const sel = $(selectId);
  const cities = ATOLLS[atoll] || [];
  sel.innerHTML = cities.map(c => `<option>${c}</option>`).join('');
}
function ckIsMaleIsland(island){
  return island === "Male'" || island === "Hulhumale'";
}
function renderDeliveryEstimate(){
  const island = $('#cdIsland').value;
  const male = ckIsMaleIsland(island);
  $('#cdEstimateTitle').textContent = male ? "Male' Delivery" : `${island || 'Island'} Delivery`;
  $('#cdEstimateSub').textContent = 'Cargo boat / speedboat / air freight';
  const feeEl = $('#cdEstimateFee');
  const etaEl = $('#cdEstimateEta');
  if (male){
    feeEl.textContent = 'Complimentary';
    feeEl.classList.add('ck-complimentary');
    feeEl.classList.remove('ck-tbc');
    etaEl.textContent = 'Same Day';
  } else {
    feeEl.textContent = 'To be confirmed';
    feeEl.classList.remove('ck-complimentary');
    feeEl.classList.add('ck-tbc');
    etaEl.textContent = '2–4 Working Days';
  }
}

function toggleBusinessFields(){
  const isBusiness = $('#obAccountType').value === 'business';
  $('#obBusinessFields').hidden = !isBusiness;
}

function openOnboarding(displayName){
  $('#onboardTitle').textContent = displayName ? `Welcome ${displayName}!` : 'Welcome!';
  $('#obAccountType').value = 'business';
  toggleBusinessFields();
  populateAllCities();
  $('#onboardBackdrop').classList.add('show');
  $('#onboardModal').classList.add('open');
}
function closeOnboarding(){
  $('#onboardBackdrop').classList.remove('show');
  $('#onboardModal').classList.remove('open');
}

// Smooth height morph used when the auth card switches between the mobile-
// number step and the OTP step (they're different heights) so it resizes
// instead of jumping.
function animateAuthCardHeight(scrollEl, startHeight){
  scrollEl.style.transition = 'none';
  scrollEl.style.overflow = 'hidden';
  scrollEl.style.height = startHeight + 'px';
  // eslint-disable-next-line no-unused-expressions
  void scrollEl.offsetHeight; // force reflow so the browser registers the start height
  const endHeight = scrollEl.scrollHeight;
  scrollEl.style.transition = 'height .38s var(--ease-glass)';
  scrollEl.style.height = endHeight + 'px';

  const cleanup = () => {
    scrollEl.style.height = '';
    scrollEl.style.overflow = '';
    scrollEl.style.transition = '';
    scrollEl.removeEventListener('transitionend', cleanup);
  };
  scrollEl.addEventListener('transitionend', cleanup);
  // Safety fallback in case transitionend doesn't fire (e.g. height didn't change)
  setTimeout(cleanup, 450);
}

/* ============ Search ============ */
let searchDebounceTimer = null;
const SEARCH_LOADING_DELAY = 450; // ms — how long the skeleton shows before results render

function handleSearch(value){
  const query = value.trim().toLowerCase();
  clearTimeout(searchDebounceTimer);

  // Empty query (e.g. clearing the search box) — no need to fake a loading state.
  if (!query){
    state.query = query;
    renderProducts();
    return;
  }

  renderSkeletons();
  searchDebounceTimer = setTimeout(()=>{
    state.query = query;
    renderProducts();
  }, SEARCH_LOADING_DELAY);
}

const MAX_RECENT_SEARCHES = 8;

function addRecentSearch(term){
  term = term.trim();
  if (!term) return;
  state.recentSearches = [term, ...state.recentSearches.filter(t => t.toLowerCase() !== term.toLowerCase())].slice(0, MAX_RECENT_SEARCHES);
  saveRecentSearches();
}

function removeRecentSearch(term){
  state.recentSearches = state.recentSearches.filter(t => t !== term);
  saveRecentSearches();
  renderMobileSearchBody($('#mobileSearchInput').value);
}

function clearAllRecentSearches(){
  state.recentSearches = [];
  saveRecentSearches();
  renderMobileSearchBody($('#mobileSearchInput').value);
}

function commitMobileSearch(term){
  term = term.trim();
  if (!term) return;
  addRecentSearch(term);
  $('#searchInput').value = term;
  handleSearch(term);
  closeMobileSearch();
  $('#productGrid').scrollIntoView({behavior:'smooth', block:'start'});
}

function renderMobileSearchBody(rawValue){
  const value = (rawValue || '').trim().toLowerCase();
  const body = $('#mobileSearchBody');

  if (value){
    const matches = PRODUCTS.filter(p => p.name.toLowerCase().includes(value)).slice(0, 8);
    if (matches.length === 0){
      body.innerHTML = `<p class="ms-empty">No suggestions for "${rawValue}"</p>`;
      return;
    }
    body.innerHTML = `
      <div class="ms-section-head"><span>Suggestions</span></div>
      ${matches.map(p => `
        <button class="ms-suggest-row" data-suggest="${p.name.replace(/"/g,'&quot;')}">
          <span class="ms-row-icon"><img src="${productImg(p)}" alt="" onerror="this.classList.add('img-missing')"></span>
          <span class="ms-row-text">${p.name}</span>
        </button>
      `).join('')}
    `;
    $$('[data-suggest]').forEach(btn=>{
      btn.addEventListener('click', ()=> commitMobileSearch(btn.dataset.suggest));
    });
    return;
  }

  if (state.recentSearches.length === 0){
    body.innerHTML = `<p class="ms-empty">No recent searches yet.</p>`;
    return;
  }

  body.innerHTML = `
    <div class="ms-section-head">
      <span>Recent Searches</span>
      <button class="ms-clear-all" id="msClearAll">Clear all</button>
    </div>
    <div class="ms-recent-tags">
      ${state.recentSearches.map(term => `
        <button class="ms-recent-tag" data-recent="${term.replace(/"/g,'&quot;')}">
          <span>${term}</span>
          <span class="ms-recent-tag-remove" data-remove-recent="${term.replace(/"/g,'&quot;')}" aria-label="Remove">&times;</span>
        </button>
      `).join('')}
    </div>
  `;

  $('#msClearAll')?.addEventListener('click', clearAllRecentSearches);
  $$('[data-recent]').forEach(btn=>{
    btn.addEventListener('click', (e)=>{
      if (e.target.closest('[data-remove-recent]')) return;
      commitMobileSearch(btn.dataset.recent);
    });
  });
  $$('[data-remove-recent]').forEach(el=>{
    el.addEventListener('click', (e)=>{ e.stopPropagation(); removeRecentSearch(el.dataset.removeRecent); });
  });
}

function openMobileSearch(){
  $('#mobileSearchPanel').classList.add('open');
  $('#mobileSearchBackdrop').classList.add('show');
  document.body.style.overflow = 'hidden';
  const current = $('#searchInput').value || '';
  $('#mobileSearchInput').value = current;
  renderMobileSearchBody(current);
  setTimeout(()=> $('#mobileSearchInput').focus(), 100);
}

function closeMobileSearch(){
  $('#mobileSearchPanel').classList.remove('open');
  $('#mobileSearchBackdrop').classList.remove('show');
  document.body.style.overflow = '';
}

/* ============ Navbar hide on scroll + sidebar pin ============ */
// The sidebar card uses `position: sticky; top: var(--nav-offset)` in CSS,
// so the browser handles pinning/unpinning natively (including stopping at
// the bottom of the tall sidebar column) — no manual fixed/bottom class
// juggling needed. We only need to keep --nav-offset in sync with whether
// the navbar is currently shown or hidden, and CSS transitions the `top`
// value smoothly in step with the navbar's own reveal animation so no gap
// ever flashes open above the card.
function initNavScroll(){
  const nav = $('.navbar');
  const root = document.documentElement;
  const gap = 8; // breathing room below the navbar when it's visible

  function setOffset(){
    const hidden = nav.classList.contains('nav-hidden');
    const rawH = hidden ? 0 : nav.offsetHeight;
    const h = hidden ? 20 : rawH + gap;
    root.style.setProperty('--nav-offset', h + 'px');
    root.style.setProperty('--nav-flush', rawH + 'px');
    return h;
  }

  let lastY = window.scrollY;
  let ticking = false;

  function tick(){
    const currentY = window.scrollY;
    const isMobile = window.innerWidth <= 980;

    const wasHidden = nav.classList.contains('nav-hidden');
    const shouldHide = !isMobile && currentY > lastY && currentY > 4;
    if (shouldHide !== wasHidden){
      nav.classList.toggle('nav-hidden', shouldHide);
      // Hiding/showing the navbar only moves it (transform), it doesn't
      // change its own box size, so ResizeObserver never fires for this —
      // update the offset by hand or the sticky categories sidebar is left
      // pinned to where the navbar used to be, leaving a blank gap above it.
      setOffset();
    }

    // Hysteresis on the compact toggle: enter compact only past 60px,
    // exit only once scrolled back under 12px. A single shared threshold
    // caused rapid on/off flapping (and a visible jitter/"explosion")
    // whenever scroll position hovered near it, which happens constantly
    // on touch scroll.
    const wasCompact = nav.classList.contains('nav-compact');
    let isCompact = wasCompact;
    if (!wasCompact && currentY > 60) isCompact = true;
    else if (wasCompact && currentY < 12) isCompact = false;
    if (isCompact !== wasCompact){
      nav.classList.toggle('nav-compact', isCompact);
    }

    lastY = currentY;
    ticking = false;
  }

  setOffset();

  // Keep --nav-offset/--nav-flush glued to the navbar's real, current
  // height at all times, including mid-transition. A ResizeObserver fires
  // on every actual layout change the navbar goes through (each frame of
  // the compact-mode shrink/grow), so the sticky categories bar below it
  // never reads a stale height — no more guessing how long the CSS
  // transition takes.
  if ('ResizeObserver' in window){
    new ResizeObserver(setOffset).observe(nav);
  }

  window.addEventListener('scroll', ()=>{
    if (ticking) return;
    ticking = true;
    requestAnimationFrame(tick);
  });

  window.addEventListener('resize', ()=>{
    setOffset();
    updateCategoryHighlights();
  });
}

/* ============ Init / event wiring ============ */
function init(){
  recoverMisfiledGuestOrders(); // heal already-logged-in sessions right away, not just on next login

  renderCategoryNav();
  renderHero();
  renderProducts();
  syncCurrencyToggleUI();
  updateCartUI();
  initNavScroll();
  initSidebarRail();
  initBrandsTicker();

  updateOrdersNotifBadge();
  setInterval(updateOrdersNotifBadge, 20000);

  // Live order-status glass notifications: check immediately, then poll,
  // then re-check whenever the tab/app regains focus.
  checkOrderUpdates();
  setInterval(checkOrderUpdates, 5000);
  document.addEventListener('visibilitychange', ()=>{
    if (!document.hidden) checkOrderUpdates();
  });

  // Register the notifications service worker up front (permission is
  // requested separately, via the "Enable" prompt) and listen for taps on
  // a device notification so we can open the Orders view in-app.
  registerNotifServiceWorker();
  if ('serviceWorker' in navigator){
    navigator.serviceWorker.addEventListener('message', (e)=>{
      if (e.data && e.data.type === 'mazi-open-orders') openOrdersView();
    });
  }


  $('#closeCart').addEventListener('click', closeCart);
  $('#drawerBackdrop').addEventListener('click', closeCart);
  $('#checkoutBtn').addEventListener('click', ()=>{
    if (cartCount()===0){ showToast('Your cart is empty'); return; }
    if (!getSession()){
      closeCart();
      showToast('Please log in to place your order');
      openLogin();
      return;
    }
    document.body.classList.add('is-checkout-leaving');
    $('#checkoutBtn').disabled = true;
    setTimeout(()=> { window.location.href = 'checkout.html'; }, 360);
  });

  $('#closeMenu').addEventListener('click', closeMenu);
  $('#menuBackdrop').addEventListener('click', closeMenu);

  $('#viberFab').addEventListener('click', ()=>{
    $('#viberPopup').classList.contains('open') ? closeViberPopup() : openViberPopup();
  });
  $('#viberPopupClose').addEventListener('click', closeViberPopup);
  $('#viberPopupBackdrop').addEventListener('click', closeViberPopup);

  $('#loginBtn').addEventListener('click', openLogin);
  renderAuthButton();

  // Cart, login, offers, search, and profile buttons — bound generically so
  // the same actions work from the main navbar and from the profile/orders/
  // product view topbars.
  $$('.js-cart-btn').forEach(btn=> btn.addEventListener('click', openCart));
  $$('.js-login-btn').forEach(btn=> btn.addEventListener('click', openLogin));
  $$('.js-offers-btn').forEach(btn=> btn.addEventListener('click', ()=> showToast('No offers saved yet')));
  $$('.js-search-btn').forEach(btn=> btn.addEventListener('click', openMobileSearch));
  $$('.js-profile-toggle').forEach(btn=>{
    btn.addEventListener('click', e=>{
      e.stopPropagation();
      const dropdown = btn.parentElement.querySelector('.profile-dropdown');
      toggleProfileDropdown(dropdown);
    });
  });
  document.addEventListener('click', e=>{
    $$('.js-profile-wrap').forEach(wrap=>{
      if (!wrap.contains(e.target)) wrap.querySelector('.profile-dropdown').classList.remove('open');
    });
  });
  $$('.js-profile-orders-btn').forEach(btn=>{
    btn.addEventListener('click', ()=>{
      closeProfileDropdown();
      openOrdersView();
    });
  });
  $$('.js-profile-profile-btn').forEach(btn=>{
    btn.addEventListener('click', ()=>{
      closeProfileDropdown();
      openProfileView();
    });
  });
  $$('.js-profile-logout-btn').forEach(btn=>{
    btn.addEventListener('click', ()=>{
      closeProfileDropdown();
      openLogoutConfirm();
    });
  });

  $('#closeProfileMenu').addEventListener('click', closeProfileMenu);
  $('#profileMenuBackdrop').addEventListener('click', closeProfileMenu);
  $('#pmProfileBtn').addEventListener('click', ()=>{
    closeProfileMenu();
    openProfileView();
  });
  $('#pmOrdersBtn').addEventListener('click', ()=>{
    closeProfileMenu();
    openOrdersView();
  });
  $('#pmLogoutBtn').addEventListener('click', ()=>{
    closeProfileMenu();
    openLogoutConfirm();
  });
  $('#wishlistBtn').addEventListener('click', ()=> showToast('No offers saved yet'));

  // Footer links
  $$('[data-footer-cat]').forEach(link=>{
    link.addEventListener('click', (e)=>{
      e.preventDefault();
      setCategory(link.dataset.footerCat);
      renderCategoryNav();
      renderProducts();
      window.scrollTo({top:0, behavior:'smooth'});
    });
  });
  const footerLoginLink = $('#footerLoginLink');
  if (footerLoginLink) footerLoginLink.addEventListener('click', (e)=>{ e.preventDefault(); openLogin(); });
  const footerOrdersLink = $('#footerOrdersLink');
  if (footerOrdersLink) footerOrdersLink.addEventListener('click', (e)=>{ e.preventDefault(); openOrdersView(); });
  const footerCartLink = $('#footerCartLink');
  if (footerCartLink) footerCartLink.addEventListener('click', (e)=>{ e.preventDefault(); openCart(); });

  $('#logoutCancelBtn').addEventListener('click', closeLogoutConfirm);
  $('#logoutConfirmBackdrop').addEventListener('click', closeLogoutConfirm);

  $('#receiptCloseBtn').addEventListener('click', closeReceiptModal);
  $('#receiptBackdrop').addEventListener('click', closeReceiptModal);
  $('#receiptDownloadBtn').addEventListener('click', downloadReceipt);
  $('#receiptPrintBtn').addEventListener('click', printReceipt);

  $('#ocCloseBtn').addEventListener('click', closeOrderConfirmModal);
  $('#ocBackdrop').addEventListener('click', closeOrderConfirmModal);
  $('#ocOrdersBtn').addEventListener('click', ()=>{
    closeOrderConfirmModal();
    openOrdersView();
  });
  window.addEventListener('resize', ()=>{
    if ($('#receiptModal').classList.contains('open')) fitReceiptPaper();
  });
  $('#logoutConfirmBtn').addEventListener('click', ()=>{
    closeLogoutConfirm();
    if (_confirmAction) _confirmAction();
  });

  $('#profileViewClose').addEventListener('click', closeProfileView);
  $('#productViewClose').addEventListener('click', closeProductView);
  $('#similarPrevBtn').addEventListener('click', ()=> scrollSimilarCarousel(-1));
  $('#similarNextBtn').addEventListener('click', ()=> scrollSimilarCarousel(1));
  $('#similarProductsGrid').addEventListener('scroll', ()=> updateSimilarCarouselArrows());
  $('#pvSaveBtn').addEventListener('click', saveProfileView);
  $('#ordersViewClose').addEventListener('click', closeOrdersView);
  $('#pvDeleteAccountLink').addEventListener('click', e=>{
    e.preventDefault();
    closeProfileView();
    openDeleteAccountConfirm();
  });
  $('#pvLogoutBtn').addEventListener('click', ()=>{
    closeProfileView();
    openLogoutConfirm();
  });
  $('#catToggleBtn').addEventListener('click', openMenu);

  $('#authClose').addEventListener('click', closeLogin);
  $('#authBackdrop').addEventListener('click', closeLogin);
  $('#mobileForm').addEventListener('submit', e=>{
    e.preventDefault();
    const digits = $('#mobileInput').value.trim();
    const valid = /^[0-9]{7}$/.test(digits);
    $('#mobileField').classList.toggle('has-error', !valid);
    $('#mobileError').hidden = valid;
    if (!valid) return;

    const mobile = `+960${digits}`;
    showOtpStep(mobile);
  });
  $('#mobileInput').addEventListener('input', clearMobileError);
  $('#otpForm').addEventListener('submit', e=>{
    e.preventDefault();
    if (!pendingMobile) return;
    const entered = $('#otpInput').value.trim();
    if (entered.length < 6 || entered !== currentOtpCode){
      markOtpError();
      return;
    }
    const mobile = pendingMobile;
    const accounts = getRegisteredAccounts();
    const isNewAccount = !accounts.some(a => a.mobile === mobile);
    if (isNewAccount) saveRegisteredAccount(mobile);
    pendingMobile = null;
    currentOtpCode = null;
    closeLogin();
    withAuthLoading(()=>{
      setSession({ name: 'Account', firstName: 'Account', lastName: '', email: '', mobile });
      if (isNewAccount) openOnboarding();
    });
  });
  setupOtpBoxes();
  $$('.pv-currency-btn').forEach(btn=>{
    btn.addEventListener('click', ()=> setCurrency(btn.dataset.currency));
  });
  $$('.currency-toggle-btn').forEach(btn=>{
    btn.addEventListener('click', ()=> setCurrency(btn.dataset.currency));
  });
  $('#otpResendBtn').addEventListener('click', ()=>{
    if (!pendingMobile) return;
    currentOtpCode = generateOtpCode();
    $('#otpDemoHint').textContent = `Demo mode — no SMS is actually sent. Your code is: ${currentOtpCode}`;
    resetOtpBoxes();
  });
  $('#otpBackBtn').addEventListener('click', showMobileStep);

  $('#obAccountType').addEventListener('change', toggleBusinessFields);
  $('#onboardBackdrop').addEventListener('click', closeOnboarding);
  $('#onboardForm').addEventListener('submit', e=>{
    e.preventDefault();
    closeOnboarding();
    showToast('Account setup saved');
  });

  $$('[data-eye-toggle]').forEach(btn=>{
    btn.addEventListener('click', ()=>{
      const input = btn.closest('.auth-password-wrap').querySelector('input');
      const willShow = input.type === 'password';
      input.type = willShow ? 'text' : 'password';
      btn.classList.toggle('showing', willShow);
      btn.setAttribute('aria-label', willShow ? 'Hide password' : 'Show password');
    });
  });

  $('#searchInput').addEventListener('input', e=> handleSearch(e.target.value));
  $('#searchInput').addEventListener('focus', e=>{
    // On mobile the inline pill is just a trigger — actual typing and live
    // results happen in the full-screen mobile search panel.
    if (window.matchMedia('(max-width: 720px)').matches){
      e.target.blur();
      openMobileSearch();
    }
  });

  $('#mobileSearchBtn').addEventListener('click', openMobileSearch);
  $('#mobileSearchClose').addEventListener('click', closeMobileSearch);
  $('#mobileSearchBackdrop').addEventListener('click', closeMobileSearch);
  $('#mobileSearchInput').addEventListener('input', e=>{
    const value = e.target.value;
    renderMobileSearchBody(value);
    // Mirror the desktop search bar: filter the product grid live (with the
    // same loading-skeleton debounce) as the person types, instead of only
    // updating once they hit Enter or tap a suggestion.
    $('#searchInput').value = value;
    handleSearch(value);
  });
  $('#mobileSearchInput').addEventListener('keydown', e=>{
    if (e.key === 'Enter') commitMobileSearch(e.target.value);
  });

  if (document.fonts && document.fonts.ready){
    document.fonts.ready.then(updateCategoryHighlights);
  }

  $$('.bn-item[data-action]').forEach(btn=>{
    btn.addEventListener('click', ()=>{
      $$('.bn-item[data-action]').forEach(b=>b.classList.remove('active'));
      btn.classList.add('active');
      const action = btn.dataset.action;
      if (action==='cart') openCart();
      else if (action==='profile'){
        if (getSession()) openProfileMenu();
        else openLogin();
      }
      else if (action==='home') window.scrollTo({top:0, behavior:'smooth'});
      else if (action==='orders') openOrdersView();
    });
  });

  handleOpenParam();
}

/* ============ Deep-link actions (from legal pages, etc.) ============ */
function handleOpenParam(){
  const params = new URLSearchParams(window.location.search);
  const open = params.get('open');
  const cat = params.get('cat');
  const from = params.get('from');

  if (from === 'checkout'){
    sessionStorage.setItem('mazi_return_to_checkout', '1');
  }

  if (cat){
    setCategory(cat);
    renderCategoryNav();
    renderProducts();
    window.scrollTo({top:0, behavior:'smooth'});
  }

  if (!open){
    if (cat) history.replaceState(null, '', window.location.pathname + window.location.hash);
    return;
  }

  const isMobile = window.matchMedia('(max-width: 980px)').matches;

  if (open === 'cart'){
    openCart();
  } else if (open === 'login'){
    openLogin();
  } else if (open === 'search'){
    const q = params.get('q') || '';
    if (q){
      if (isMobile){
        openMobileSearch();
        $('#mobileSearchInput').value = q;
        commitMobileSearch(q);
      } else {
        $('#searchInput').value = q;
        handleSearch(q);
        $('#searchInput').focus();
        $('#productGrid')?.scrollIntoView({behavior:'smooth', block:'start'});
      }
    } else if (isMobile){
      openMobileSearch();
    } else {
      $('#searchInput').focus();
    }
  } else if (open === 'offers'){
    showToast('No offers saved yet');
  } else if (open === 'profile'){
    if (getSession()){
      if (from === 'checkout'){
        openProfileView();
      } else if (isMobile){
        openProfileMenu();
      } else {
        toggleProfileDropdown($('#profileDropdown'));
      }
    } else {
      openLogin();
    }
  } else if (open === 'orders'){
    openOrdersView();
  }

  history.replaceState(null, '', window.location.pathname + window.location.hash);
}

/* If the account/profile flow was entered from the checkout page (via the
   checkout header's profile icon), closing it should return the person to
   checkout instead of stranding them on the homepage. */
function returnToCheckoutIfNeeded(){
  if (sessionStorage.getItem('mazi_return_to_checkout')){
    sessionStorage.removeItem('mazi_return_to_checkout');
    window.location.href = 'checkout.html';
    return true;
  }
  return false;
}

document.addEventListener('DOMContentLoaded', init);