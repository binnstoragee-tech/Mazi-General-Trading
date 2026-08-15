/* ============================================
   MAZI GENERAL TRADING — store logic
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
  { id:'MZ001', name:'Coast Full Cream Milk Powder 400g', cat:'dairy', icon:'🥛', pack:'Carton', unit:'24 x 400g', price:1180, stock:'low' },
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
];

/* ---------- Hero slides ---------- */
/* TODO: paste the Viber community invite link here (e.g. https://invite.viber.com/?g=xxxxxxxx) */
const VIBER_COMMUNITY_LINK = '';

const HERO_SLIDES = [
  { eyebrow:'This Week', title:'Free delivery on orders over MVR 500', desc:"Order today within Male' and get it delivered by tomorrow.", cta:'Start Shopping', icon:'🚚', img:'img/delivery.jpg' },
  { eyebrow:'New Arrivals', title:'New products landing every week', desc:'Join our Viber community to be the first to know when new stock arrives.', cta:'Viber Community', icon:'🆕', img:'img/shipment.jpg', link: VIBER_COMMUNITY_LINK || '#' },
];

/* ---------- State ---------- */
(function migrateRecentSearches(){
  try{
    const old = localStorage.getItem('mazi_recent_searches');
    if (old !== null){
      const session = JSON.parse(localStorage.getItem('mazi_session') || 'null');
      const id = session && session.email ? session.email.toLowerCase() : 'guest';
      const key = 'mazi_recent_searches_' + id;
      if (localStorage.getItem(key) === null){
        localStorage.setItem(key, old);
      }
      localStorage.removeItem('mazi_recent_searches');
    }
  } catch(e){}
})();

function recentSearchesKey(){
  const session = getSession();
  const id = session && session.email ? session.email.toLowerCase() : 'guest';
  return 'mazi_recent_searches_' + id;
}
function loadRecentSearches(){
  try{ return JSON.parse(localStorage.getItem(recentSearchesKey()) || '[]'); }
  catch(e){ return []; }
}

let state = {
  category: 'all',
  query: '',
  cart: JSON.parse(localStorage.getItem('mazi_cart') || '{}'),
  recentSearches: loadRecentSearches(),
};

/* ============ Helpers ============ */
const fmt = n => 'MVR ' + n.toFixed(2);
const $ = sel => document.querySelector(sel);
const $$ = (sel, root) => Array.from((root || document).querySelectorAll(sel));

function saveCart(){
  localStorage.setItem('mazi_cart', JSON.stringify(state.cart));
}

function saveRecentSearches(){
  localStorage.setItem(recentSearchesKey(), JSON.stringify(state.recentSearches));
}

function getRegisteredAccounts(){
  return JSON.parse(localStorage.getItem('mazi_accounts') || '[]');
}
function saveRegisteredAccount(mobile, email){
  const accounts = getRegisteredAccounts();
  accounts.push({ mobile, email: email.toLowerCase() });
  localStorage.setItem('mazi_accounts', JSON.stringify(accounts));
}
function clearRegisterErrors(){
  $('#regMobileField').classList.remove('has-error');
  $('#regMobileError').hidden = true;
  $('#regEmailField').classList.remove('has-error');
  $('#regEmailError').hidden = true;
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
      state.category = btn.dataset.cat;
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

/* ============ Hero slideshow ============ */
let heroIndex = 0;
let heroTimer = null;

function renderHero(){
  $('#heroTrack').innerHTML = HERO_SLIDES.map(s => {
    const isExternal = !!s.link && s.link !== '#';
    const href = s.link || '#productGrid';
    const target = isExternal ? ' target="_blank" rel="noopener"' : '';
    return `
    <div class="hero-slide" style="${s.img ? `background-image:url('${s.img}')` : ''}">
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

  $('#heroDots').innerHTML = HERO_SLIDES.map((_,i)=>`<button data-i="${i}" class="${i===0?'active':''}"></button>`).join('');

  $$('#heroDots button').forEach(b=>{
    b.addEventListener('click', ()=> goToSlide(parseInt(b.dataset.i)));
  });

  startHeroAuto();
}

function goToSlide(i){
  heroIndex = i;
  $('#heroTrack').style.transform = `translateX(-${i*100}%)`;
  $$('#heroDots button').forEach((b,idx)=> b.classList.toggle('active', idx===i));
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
  return PRODUCTS.filter(p=>{
    const matchCat = state.category==='all' || p.cat===state.category;
    const matchQuery = !state.query || p.name.toLowerCase().includes(state.query) || p.id.toLowerCase().includes(state.query);
    return matchCat && matchQuery;
  });
}

function cardActionHtml(p){
  const qty = state.cart[p.id] || 0;
  if (qty > 0){
    return `<div class="card-qty" data-id="${p.id}">
      <button class="qty-btn" data-dir="-1" aria-label="Decrease quantity">&minus;</button>
      <span class="qty-val">${qty}</span>
      <button class="qty-btn" data-dir="1" aria-label="Increase quantity">&plus;</button>
    </div>`;
  }
  return `<button class="card-add" data-id="${p.id}">
    <svg class="card-add-icon" viewBox="0 0 24 24"><path d="M6 6h15l-1.5 9h-12z" fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="round"/><circle cx="9" cy="20" r="1.4" fill="currentColor"/><circle cx="17" cy="20" r="1.4" fill="currentColor"/></svg>
    <span class="card-add-label">Add to Cart</span>
    <span class="card-add-dots"><span></span><span></span><span></span></span>
  </button>`;
}

function bindCardSlot(el){
  if (!el) return;
  if (el.classList.contains('card-add')){
    el.addEventListener('click', (e)=>{
      e.stopPropagation();
      if (el.classList.contains('loading')) return;
      el.classList.add('loading');
      setTimeout(()=>{ addToCart(el.dataset.id); }, 1500);
    });
  } else if (el.classList.contains('card-qty')){
    const id = el.dataset.id;
    el.querySelectorAll('.qty-btn').forEach(b=>{
      b.addEventListener('click', (e)=>{ e.stopPropagation(); changeQty(id, parseInt(b.dataset.dir, 10)); });
    });
  }
}

function refreshCardSlot(id){
  // Update every instance of this product's add/qty control on the page —
  // it can appear in the main grid, the product detail view, and the
  // similar-products strip all at once.
  const olds = $$(`.card-add[data-id="${id}"], .card-qty[data-id="${id}"]`);
  if (!olds.length) return;
  const p = PRODUCTS.find(p=>p.id===id);
  olds.forEach(old=>{
    const temp = document.createElement('div');
    temp.innerHTML = cardActionHtml(p).trim();
    const fresh = temp.firstElementChild;
    fresh.classList.add('swap-in');
    old.replaceWith(fresh);
    bindCardSlot(fresh);
  });
}

function productCardHtml(p){
  return `
    <div class="product-card" data-id="${p.id}">
      <div class="card-media">
        <span class="stock-badge ${p.stock==='in'?'in':''}">${p.stock==='low'?'Low Stock':'In Stock'}</span>
        <img class="card-img" src="${productImg(p)}" alt="${p.name}" loading="lazy" onerror="this.classList.add('img-missing')">
      </div>
      <div class="card-body">
        <div class="card-title">${p.name}</div>
        <div class="card-code">${p.id}</div>
        <div class="card-meta">
          <div class="card-unit"><small>${p.pack}</small><strong>${p.unit}</strong></div>
          <div class="card-price">${fmt(p.price)}</div>
        </div>
        ${cardActionHtml(p)}
      </div>
    </div>
  `;
}

function bindProductCardClicks(container){
  $$('.product-card', container).forEach(card=>{
    card.addEventListener('click', (e)=>{
      if (e.target.closest('.card-add, .card-qty')) return;
      openProductView(card.dataset.id);
    });
  });
}

function productImg(p){
  // Placeholder path convention — drop matching files in img/products/
  // (e.g. img/products/MZ001.png) and they'll show automatically.
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

  $$('#productGrid .card-add, #productGrid .card-qty').forEach(bindCardSlot);
  bindProductCardClicks($('#productGrid'));
}

/* ============ Product detail view ============ */
function renderProductDetail(p){
  $('#productDetailCard').innerHTML = `
    <div class="pd-media">
      <span class="stock-badge ${p.stock==='in'?'in':''}">${p.stock==='low'?'Low Stock':'In Stock'}</span>
      <img src="${productImg(p)}" alt="${p.name}" onerror="this.classList.add('img-missing')">
    </div>
    <div class="pd-info">
      <div>
        <div class="pd-title">${p.name}</div>
        <div class="pd-code">${p.id}</div>
      </div>
      <div class="pd-divider"></div>
      <div class="pd-meta">
        <div class="pd-unit"><small>${p.pack}</small><strong>${p.unit}</strong></div>
        <div class="pd-price">${fmt(p.price)}</div>
      </div>
      <div class="pd-divider"></div>
      <div class="pd-actions" data-id="${p.id}">${cardActionHtml(p)}</div>
    </div>
  `;
  bindCardSlot($('#productDetailCard .card-add') || $('#productDetailCard .card-qty'));
}

function renderSimilarProducts(p){
  const similar = PRODUCTS.filter(x => x.cat === p.cat && x.id !== p.id).slice(0, 8);
  const section = $('#similarProductsSection');
  if (!similar.length){ section.hidden = true; return; }
  section.hidden = false;
  $('#similarProductsGrid').innerHTML = similar.map(x => productCardHtml(x)).join('');
  $$('#similarProductsGrid .card-add, #similarProductsGrid .card-qty').forEach(bindCardSlot);
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
  loadMoreOtherProducts();
}
function loadMoreOtherProducts(){
  const pool = state.otherProductsPool || [];
  const shown = state.otherProductsShown || [];
  const next = pool.filter(x => !shown.includes(x.id)).slice(0, 4);
  if (!next.length) return;
  state.otherProductsShown = shown.concat(next.map(x=>x.id));
  $('#otherProductsGrid').insertAdjacentHTML('beforeend', next.map(x => productCardHtml(x)).join(''));
  $$('#otherProductsGrid .card-add, #otherProductsGrid .card-qty').forEach(bindCardSlot);
  bindProductCardClicks($('#otherProductsGrid'));
  const remaining = pool.length - state.otherProductsShown.length;
  $('#otherProductsSeeAllBtn').hidden = remaining <= 0;
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
function addToCart(id){
  state.cart[id] = (state.cart[id] || 0) + 1;
  saveCart();
  updateCartUI();
  refreshCardSlot(id);
  const p = PRODUCTS.find(p=>p.id===id);
  showToast(p.name, 'Added to cart');
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
    $('#cartSubtotal').textContent = fmt(0);
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
          <button class="cart-row-remove" data-remove="${id}">Remove</button>
        </div>
      </div>
    `;
  }).join('');

  $('#cartSubtotal').textContent = fmt(subtotal);

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
  setAuthTab('login');
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
function setSession(data){
  localStorage.setItem('mazi_session', JSON.stringify(data));
  state.recentSearches = loadRecentSearches();
  refreshOpenSearchPanel();
  renderAuthButton();
}
function clearSession(){
  localStorage.removeItem('mazi_session');
  state.recentSearches = loadRecentSearches();
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
function openConfirmModal({ title, sub, confirmLabel = 'Confirm', onConfirm }){
  $('#logoutConfirmModal').querySelector('.confirm-title').textContent = title;
  $('#logoutConfirmModal').querySelector('.confirm-sub').textContent = sub;
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
  return JSON.parse(localStorage.getItem('mazi_orders') || '[]');
}
function saveOrders(orders){
  localStorage.setItem('mazi_orders', JSON.stringify(orders));
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
  const total = items.reduce((s,it)=> s + it.price*it.qty, 0);

  const orders = getOrders();
  const orderNo = `MZ${new Date().getFullYear()}${String(orders.length+1).padStart(4,'0')}`;
  const order = { id:orderNo, placedAt:Date.now(), items, total, customer: customer || null };
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

/* ============ Delivered-order notifications ============ */
function isDelivered(order){
  return !order.cancelled && orderStatusIndex(order) === ORDER_STEPS.length - 1;
}
function getUnseenDeliveredCount(){
  return getOrders().filter(o => isDelivered(o) && !o.deliveredSeen).length;
}
function markDeliveredOrdersSeen(){
  const orders = getOrders();
  let changed = false;
  orders.forEach(o=>{
    if (isDelivered(o) && !o.deliveredSeen){ o.deliveredSeen = true; changed = true; }
  });
  if (changed) saveOrders(orders);
  return changed;
}
function updateOrdersNotifBadge(){
  const count = getUnseenDeliveredCount();
  const badge = $('#bnOrdersCount');
  if (badge){
    badge.textContent = count;
    badge.hidden = count === 0;
  }
  $$('.js-profile-orders-btn, #pmOrdersBtn').forEach(el=>{
    el.classList.toggle('has-notif', count > 0);
  });
}

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
    confirmLabel: 'Cancel Order',
    onConfirm: ()=> withAuthLoading(()=> cancelOrder(orderId), 700),
  });
}

function formatOrderDate(ts){
  return new Date(ts).toLocaleDateString('en-GB', { day:'numeric', month:'short', year:'numeric', hour:'2-digit', minute:'2-digit' });
}

function renderOrdersView(){
  markDeliveredOrdersSeen();
  updateOrdersNotifBadge();
  const orders = getOrders();
  $('#ordersCount').textContent = orders.length ? `${orders.length} order${orders.length!==1?'s':''}` : '';

  if (orders.length === 0){
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

  $('#ordersCardBody').innerHTML = `
    <div class="orders-list">
      ${orders.map(order => `
        <div class="order-card">
          <div class="order-card-head">
            <div>
              <div class="order-card-id">Order #${order.id}</div>
              <div class="order-card-date">${formatOrderDate(order.placedAt)}</div>
            </div>
            ${orderStatusBadge(order)}
          </div>
          <div class="order-items">
            ${order.items.map(it => `
              <div class="order-item-row">
                <div class="order-item-media"><img src="img/products/${it.id}.png" alt="${it.name}" onerror="this.classList.add('img-missing')"></div>
                <div class="order-item-info">
                  <div class="order-item-name">${it.name}</div>
                  <div class="order-item-meta">${it.pack} · Qty ${it.qty}</div>
                </div>
                <div class="order-item-price">${fmt(it.price*it.qty)}</div>
              </div>
            `).join('')}
          </div>
          <div class="order-total-row">
            <span class="label">Order Total</span>
            <span class="value">${fmt(order.total)}</span>
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
      `).join('')}
    </div>
  `;
  $$('[data-cancel-order]').forEach(btn=>{
    btn.addEventListener('click', ()=> openCancelOrderConfirm(btn.dataset.cancelOrder));
  });
  $$('[data-receipt-order]').forEach(btn=>{
    btn.addEventListener('click', ()=> openReceiptModal(btn.dataset.receiptOrder));
  });
}

function openOrdersView(){
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
}

/* ============ Order Confirmation (shown right after checkout, before admin processes) ============ */
function openOrderConfirmModal(order){
  const session = getSession() || {};
  const customer = order.customer || {};
  const firstName = (customer.name || '').split(' ')[0] || session.firstName || session.name || 'there';
  const itemCount = order.items.reduce((s,it)=> s + it.qty, 0);

  $('#ocSub').textContent = `Hi ${firstName}, your order for ${itemCount} product${itemCount!==1?'s':''} has been received and is now pending confirmation from our team.`;

  $('#ocItems').innerHTML = order.items.map((it,i) => `
    ${i>0 ? '<div class="oc-item-divider"></div>' : ''}
    <div class="oc-item-row">
      <div class="oc-item-media"><img src="img/products/${it.id}.png" alt="${it.name}" onerror="this.classList.add('img-missing')"></div>
      <div class="oc-item-info">
        <div class="oc-item-name">${it.name}</div>
        <div class="oc-item-meta">${it.pack} &middot; Qty ${it.qty}</div>
      </div>
      <div class="oc-item-price">${fmt(it.price * it.qty)}</div>
    </div>
  `).join('');

  $('#ocTotals').innerHTML = `
    <div class="oc-total-row"><span>Subtotal</span><span>${fmt(order.total)}</span></div>
    <div class="oc-total-row"><span>Delivery Fee</span><span>To be confirmed</span></div>
    <div class="oc-total-row oc-grand"><span>Order Total</span><span>${fmt(order.total)}</span></div>
  `;

  const contact = customer.mobile || session.mobile || session.email || '—';
  const loc = customer.location;
  const locationHtml = (loc && loc.mapUrl)
    ? `${loc.address ? `${loc.address}<br>` : ''}<a href="${loc.mapUrl}" target="_blank" rel="noopener" class="oc-map-link">View pinned location ↗</a>`
    : (session.city || '—');

  $('#ocDetails').innerHTML = `
    <div><div class="oc-detail-key">Order ID</div><div class="oc-detail-val">${order.id}</div></div>
    <div><div class="oc-detail-key">Order Date</div><div class="oc-detail-val">${formatOrderDate(order.placedAt)}</div></div>
    <div><div class="oc-detail-key">Status</div><div class="oc-detail-val">Pending Confirmation</div></div>
    <div><div class="oc-detail-key">Contact</div><div class="oc-detail-val">${contact}</div></div>
    <div><div class="oc-detail-key">Delivery To</div><div class="oc-detail-val">${locationHtml}</div></div>
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

/* ============ Checkout Details (name / mobile / location, asked right before placing the order) ============ */
let _cdMap = null;
let _cdMarker = null;
let _cdPin = null; // { lat, lng }
const CD_MAP_DEFAULT_CENTER = [4.1755, 73.5093]; // Male', Maldives
const CD_MAP_DEFAULT_ZOOM = 13;

function initCdMap(){
  if (_cdMap || typeof L === 'undefined') return;
  _cdMap = L.map('cdMap', { attributionControl:false }).setView(CD_MAP_DEFAULT_CENTER, CD_MAP_DEFAULT_ZOOM);
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
  }).addTo(_cdMap);
  L.control.attribution({ prefix:false }).addTo(_cdMap);

  _cdMap.on('click', e=> setCdPin(e.latlng.lat, e.latlng.lng));
}

function setCdPin(lat, lng){
  _cdPin = { lat, lng };
  if (!_cdMarker){
    _cdMarker = L.marker([lat, lng], { draggable:true }).addTo(_cdMap);
    _cdMarker.on('dragend', ()=>{
      const pos = _cdMarker.getLatLng();
      _cdPin = { lat: pos.lat, lng: pos.lng };
      updateCdMapHint();
    });
  } else {
    _cdMarker.setLatLng([lat, lng]);
  }
  updateCdMapHint();
  $('#cdLocationField').classList.remove('pin-error');
  $('#cdPinError').hidden = true;
}

function clearCdPin(){
  _cdPin = null;
  if (_cdMarker){
    _cdMap.removeLayer(_cdMarker);
    _cdMarker = null;
  }
  updateCdMapHint();
}

function updateCdMapHint(){
  const hint = $('#cdMapHint');
  if (_cdPin){
    hint.textContent = `Pin dropped ✓  (${_cdPin.lat.toFixed(5)}, ${_cdPin.lng.toFixed(5)})`;
    hint.classList.add('pinned');
  } else {
    hint.textContent = 'Tap the map to drop a pin at your location';
    hint.classList.remove('pinned');
  }
}

function openCheckoutDetailsModal(){
  const session = getSession() || {};
  $('#cdName').value = [session.firstName, session.lastName].filter(Boolean).join(' ') || session.name || '';
  $('#cdMobile').value = session.mobile || '';
  $('#cdAddress').value = '';
  clearCdPin();
  ['cdNameField','cdMobileField'].forEach(id=>{
    $('#'+id).classList.remove('has-error');
  });
  $('#cdLocationField').classList.remove('pin-error','address-error');
  $('#cdPinError').hidden = true;
  $('#cdAddressError').hidden = true;
  $('#checkoutDetailsBackdrop').classList.add('show');
  $('#checkoutDetailsModal').classList.add('open');
  document.body.style.overflow = 'hidden';

  initCdMap();
  // Map container is laid out only once its wrapper becomes visible/sized,
  // so give the open transition a moment then force Leaflet to recalc size.
  setTimeout(()=>{ if (_cdMap) _cdMap.invalidateSize(); }, 250);
}
function closeCheckoutDetailsModal(){
  $('#checkoutDetailsBackdrop').classList.remove('show');
  $('#checkoutDetailsModal').classList.remove('open');
  document.body.style.overflow = '';
}

/* ============ Receipt (view / print / save as PDF) ============ */
const RECEIPT_SIZES = {
  '58mm':  { label:'58mm',  page:'58mm auto',   width:'58mm'  },
  '80mm':  { label:'80mm',  page:'80mm auto',   width:'80mm'  },
  'a5':    { label:'A5',    page:'A5 portrait', width:'148mm' },
  'a4':    { label:'A4',    page:'A4 portrait', width:'210mm' },
  'letter':{ label:'Letter',page:'letter portrait', width:'216mm' },
};
let _receiptOrderId = null;
let _receiptSize = '80mm';

function receiptStoreInfo(){
  return {
    name: 'MAZI General Trading',
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
            <span>${it.pack} &times; ${it.qty} @ ${fmt(it.price)}</span>
            <span>${fmt(it.price * it.qty)}</span>
          </div>
        </div>
      `).join('')}
    </div>
    <div class="receipt-divider"></div>
    <div class="receipt-total-row">
      <span>Total</span>
      <span>${fmt(order.total)}</span>
    </div>
    <div class="receipt-divider"></div>
    <div class="receipt-footer">Thank you for shopping with us!</div>
    <div class="receipt-footer-small">This is a computer-generated receipt.</div>
  `;
}

function selectReceiptSize(sizeKey){
  if (!RECEIPT_SIZES[sizeKey]) return;
  _receiptSize = sizeKey;
  const cfg = RECEIPT_SIZES[sizeKey];
  const isWide = sizeKey === 'a4' || sizeKey === 'a5' || sizeKey === 'letter';
  $('#receiptPaper').style.width = cfg.width;
  $('#receiptPaper').className = `receipt-paper receipt-size-${sizeKey}`;
  $('#receiptModal .receipt-modal-card').classList.toggle('receipt-modal-wide', isWide);
  $$('.receipt-size-btn').forEach(btn=>{
    btn.classList.toggle('active', btn.dataset.size === sizeKey);
  });
  requestAnimationFrame(fitReceiptPaper);
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
  // Thermal receipts (58mm/80mm) are physically tiny, so scale them UP to
  // comfortably fill the preview instead of showing true-to-life mm size.
  // A4/A5/Letter are the opposite problem (too wide) so we still shrink
  // those down to fit. Either way we just fit the available width, capped
  // so it never blows up into blurry oversized text.
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
  selectReceiptSize(_receiptSize);
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
  const cfg = RECEIPT_SIZES[_receiptSize];
  let styleTag = document.getElementById('receiptPrintStyle');
  if (!styleTag){
    styleTag = document.createElement('style');
    styleTag.id = 'receiptPrintStyle';
    document.head.appendChild(styleTag);
  }
  styleTag.textContent = `@page{ size:${cfg.page}; margin:${_receiptSize==='58mm'||_receiptSize==='80mm' ? '2mm' : '12mm'}; }`;
  window.print();
}

function buildReceiptStandaloneHtml(order){
  const cfg = RECEIPT_SIZES[_receiptSize];
  const isThermal = _receiptSize === '58mm' || _receiptSize === '80mm';
  return `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<title>Receipt - Order #${order.id}</title>
<style>
  @page{ size:${cfg.page}; margin:${isThermal ? '2mm' : '12mm'}; }
  *{box-sizing:border-box;}
  body{margin:0;background:#F8F7F2;font-family:'Courier New',Courier,monospace;color:#16211C;display:flex;justify-content:center;padding:24px 12px;}
  .receipt-paper{background:#fff;width:${cfg.width};max-width:100%;box-shadow:0 2px 10px rgba(15,58,46,.14);padding:${isThermal ? '18px 16px' : '28px 26px'};}
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
  a.download = `receipt-${order.id}-${_receiptSize}.html`;
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
  $('#pvMobile').value = session.mobile || '';
  $('#pvCurrentPassword').value = '';
  $('#pvNewPassword').value = '';
  $('#pvConfirmPassword').value = '';
  closeOtherFullScreenViews('profileView');
  $('#profileView').classList.add('open');
  document.body.style.overflow = 'hidden';
}
function closeProfileView(){
  $('#profileView').classList.remove('open');
  document.body.style.overflow = '';
}
function saveProfileView(){
  const newPass = $('#pvNewPassword').value;
  const confirmPass = $('#pvConfirmPassword').value;
  if (newPass && newPass !== confirmPass){
    showToast("Passwords don't match");
    return;
  }
  const session = getSession() || {};
  const firstName = $('#pvFirstName').value.trim() || session.firstName || 'Account';
  setSession({
    ...session,
    name: firstName,
    firstName,
    lastName: $('#pvLastName').value.trim(),
    email: $('#pvEmail').value.trim(),
    mobile: $('#pvMobile').value.trim(),
  });
  closeProfileView();
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

function setAuthTab(tab){
  const isLogin = tab === 'login';
  clearRegisterErrors();
  $$('.auth-tab').forEach(t => t.classList.toggle('active', t.dataset.tab === tab));
  $('#authTabHighlight').classList.toggle('to-register', !isLogin);
  $('#loginForm').hidden = !isLogin;
  $('#registerForm').hidden = isLogin;
  $('#authGoogleSection').hidden = !isLogin;
  $('#authTerms').hidden = isLogin;
  $('#authSubtitle').hidden = !isLogin;
  $('#authSubtitle').textContent = 'Login with your mobile number / email & password';
  $('#authSwitchLine').innerHTML = isLogin
    ? `Don't have an account? <button type="button" id="authSwitchBtn">Register</button>`
    : `Already have an account? <button type="button" id="authSwitchBtn">Login</button>`;
  $('#authSwitchBtn').addEventListener('click', ()=> setAuthTab(isLogin ? 'register' : 'login'));
  $('.auth-card').classList.toggle('auth-card-login', isLogin);
  $('.auth-card').classList.toggle('auth-card-register', !isLogin);
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
      <button class="ms-clear-all" id="msClearAll">Clear All</button>
    </div>
    ${state.recentSearches.map(term => `
      <div class="ms-recent-row">
        <svg class="ms-row-icon" viewBox="0 0 24 24"><path d="M12 8v5l3 2M12 3a9 9 0 100 18 9 9 0 000-18z" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg>
        <button class="ms-row-text" data-recent="${term.replace(/"/g,'&quot;')}" style="text-align:left;">${term}</button>
        <button class="ms-row-remove" data-remove-recent="${term.replace(/"/g,'&quot;')}" aria-label="Remove">&times;</button>
      </div>
    `).join('')}
  `;

  $('#msClearAll')?.addEventListener('click', clearAllRecentSearches);
  $$('[data-recent]').forEach(btn=>{
    btn.addEventListener('click', ()=> commitMobileSearch(btn.dataset.recent));
  });
  $$('[data-remove-recent]').forEach(btn=>{
    btn.addEventListener('click', (e)=>{ e.stopPropagation(); removeRecentSearch(btn.dataset.removeRecent); });
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
  renderCategoryNav();
  renderHero();
  renderProducts();
  updateCartUI();
  initNavScroll();
  initSidebarRail();

  updateOrdersNotifBadge();
  setInterval(updateOrdersNotifBadge, 20000);

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
    closeCart();
    openCheckoutDetailsModal();
  });

  $('#checkoutDetailsBackdrop').addEventListener('click', closeCheckoutDetailsModal);
  $('#checkoutDetailsCloseBtn').addEventListener('click', closeCheckoutDetailsModal);
  $('#checkoutDetailsForm').addEventListener('submit', e=>{
    e.preventDefault();

    const name = $('#cdName').value.trim();
    const mobile = $('#cdMobile').value.trim();
    const address = $('#cdAddress').value.trim();

    const nameOk = name.length > 0;
    const mobileOk = /^[0-9+\-\s]{6,}$/.test(mobile);
    const pinOk = !!_cdPin;
    const addressOk = address.length >= 5;

    $('#cdNameField').classList.toggle('has-error', !nameOk);
    $('#cdMobileField').classList.toggle('has-error', !mobileOk);
    $('#cdLocationField').classList.toggle('pin-error', !pinOk);
    $('#cdLocationField').classList.toggle('address-error', !addressOk);
    $('#cdNameError').hidden = nameOk;
    $('#cdMobileError').hidden = mobileOk;
    $('#cdPinError').hidden = pinOk;
    $('#cdAddressError').hidden = addressOk;

    if (!nameOk || !mobileOk || !pinOk || !addressOk) return;

    const location = {
      lat: _cdPin.lat,
      lng: _cdPin.lng,
      mapUrl: `https://www.google.com/maps?q=${_cdPin.lat},${_cdPin.lng}`,
      address,
    };

    closeCheckoutDetailsModal();
    withAuthLoading(()=>{
      const order = placeOrder({ name, mobile, location });
      if (!order) return;
      renderProducts();
      openOrderConfirmModal(order);
    }, 2000);
  });
  ['cdName','cdMobile'].forEach(id=>{
    const el = $('#'+id);
    const clearError = ()=> $('#'+id+'Field').classList.remove('has-error');
    el.addEventListener('input', clearError);
    el.addEventListener('change', clearError);
  });
  $('#cdAddress').addEventListener('input', ()=>{
    $('#cdLocationField').classList.remove('address-error');
    $('#cdAddressError').hidden = true;
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
      state.category = link.dataset.footerCat;
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
  $$('.receipt-size-btn').forEach(btn=>{
    btn.addEventListener('click', ()=> selectReceiptSize(btn.dataset.size));
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
  $('#otherProductsSeeAllBtn').addEventListener('click', loadMoreOtherProducts);
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
  $$('.auth-tab').forEach(tab=>{
    tab.addEventListener('click', ()=> setAuthTab(tab.dataset.tab));
  });
  $('#authGoogleBtn').addEventListener('click', ()=>{
    showToast('Google sign-in coming soon');
  });
  $('#loginForm').addEventListener('submit', e=>{
    e.preventDefault();
    const email = $('#loginForm input[type="email"]').value.trim();
    const displayName = email ? email.split('@')[0].replace(/[._-]/g,' ').replace(/\b\w/g, c=>c.toUpperCase()) : '';
    closeLogin();
    withAuthLoading(()=>{
      setSession({ name: displayName || 'Account', firstName: displayName || 'Account', lastName: '', email, mobile: '' });
      openOnboarding(displayName);
    });
  });
  $('#registerForm').addEventListener('submit', e=>{
    e.preventDefault();
    const firstName = $('#registerForm input[placeholder="Juan"]').value.trim();
    const lastName = $('#registerForm input[placeholder="Dela Cruz"]').value.trim();
    const mobileInput = $('#registerForm input[type="tel"]');
    const emailInput = $('#registerForm input[type="email"]');
    const mobile = mobileInput.value.trim();
    const email = emailInput.value.trim();

    const accounts = getRegisteredAccounts();
    const mobileTaken = !!mobile && accounts.some(a => a.mobile === mobile);
    const emailTaken = !!email && accounts.some(a => a.email === email.toLowerCase());

    $('#regMobileField').classList.toggle('has-error', mobileTaken);
    $('#regMobileError').hidden = !mobileTaken;
    $('#regEmailField').classList.toggle('has-error', emailTaken);
    $('#regEmailError').hidden = !emailTaken;

    if (mobileTaken || emailTaken) return;

    saveRegisteredAccount(mobile, email);
    closeLogin();
    withAuthLoading(()=>{
      setSession({ name: firstName || 'Account', firstName: firstName || 'Account', lastName, email, mobile });
      openOnboarding(firstName);
    });
  });
  $('#registerForm input[type="tel"]').addEventListener('input', ()=>{
    $('#regMobileField').classList.remove('has-error');
    $('#regMobileError').hidden = true;
  });
  $('#registerForm input[type="email"]').addEventListener('input', ()=>{
    $('#regEmailField').classList.remove('has-error');
    $('#regEmailError').hidden = true;
  });

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

  $('#mobileSearchBtn').addEventListener('click', openMobileSearch);
  $('#mobileSearchClose').addEventListener('click', closeMobileSearch);
  $('#mobileSearchBackdrop').addEventListener('click', closeMobileSearch);
  $('#mobileSearchInput').addEventListener('input', e=>{
    renderMobileSearchBody(e.target.value);
    if (!e.target.value.trim()){
      // Box is empty again — clear the active filter so the grid returns to normal.
      $('#searchInput').value = '';
      handleSearch('');
    }
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
  if (!open) return;

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
      if (isMobile) openProfileMenu();
      else toggleProfileDropdown($('#profileDropdown'));
    } else {
      openLogin();
    }
  }

  history.replaceState(null, '', window.location.pathname + window.location.hash);
}

document.addEventListener('DOMContentLoaded', init);