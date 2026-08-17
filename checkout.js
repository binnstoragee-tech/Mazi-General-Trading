/* ============================================
   MAZI GENERAL TRADE — checkout page logic
   Standalone page: reads/writes the same
   localStorage keys as the main store (script.js)
============================================ */

/* ---------- Product data (kept in sync with script.js) ---------- */
const PRODUCTS = [
  { id:'MZ001', name:'Coast Full Cream Milk Powder 400g', cat:'dairy', pack:'Carton', unit:'24 x 400g', price:1180, stock:'out' },
  { id:'MZ002', name:'Dutch Farm UHT Milk 1L', cat:'dairy', pack:'Carton', unit:'12 x 1L', price:640, stock:'in' },
  { id:'MZ003', name:'Golden Churn Butter 200g', cat:'dairy', pack:'Box', unit:'24 x 200g', price:1450, stock:'in' },
  { id:'MZ004', name:'Cimory Yogurt Drink Strawberry 125ml', cat:'dairy', pack:'Carton', unit:'40 x 125ml', price:160, stock:'low' },
  { id:'MZ005', name:'Ceylon Breakfast Tea 100 Bags', cat:'tea', pack:'Box', unit:'12 x 100bags', price:920, stock:'in' },
  { id:'MZ006', name:'Green Tea Classic 25 Bags', cat:'tea', pack:'Box', unit:'24 x 25bags', price:540, stock:'in' },
  { id:'MZ007', name:'Nescafe Classic Instant Coffee 200g', cat:'coffee', pack:'Carton', unit:'12 x 200g', price:1980, stock:'low' },
  { id:'MZ008', name:'3-in-1 Instant Coffee Mix 20g', cat:'coffee', pack:'Box', unit:'30 x 20g', price:310, stock:'in' },
  { id:'MZ009', name:'Sparkling Orange Soda 330ml', cat:'beverages', pack:'Carton', unit:'24 x 330ml', price:480, stock:'in' },
  { id:'MZ010', name:'Tropical Fruit Juice 1L', cat:'beverages', pack:'Carton', unit:'12 x 1L', price:660, stock:'in' },
  { id:'MZ011', name:'Mineral Water 500ml', cat:'beverages', pack:'Carton', unit:'24 x 500ml', price:220, stock:'in' },
  { id:'MZ012', name:'Premium Medjool Dates 500g', cat:'dried-fruits', pack:'Box', unit:'10 x 500g', price:2100, stock:'low' },
  { id:'MZ013', name:'Mixed Dried Fruits 250g', cat:'dried-fruits', pack:'Box', unit:'20 x 250g', price:1350, stock:'in' },
  { id:'MZ014', name:'Basmati Rice 5kg', cat:'grains', pack:'Bag', unit:'1 x 5kg', price:340, stock:'in' },
  { id:'MZ015', name:'Rolled Oats 500g', cat:'grains', pack:'Carton', unit:'12 x 500g', price:980, stock:'in' },
  { id:'MZ016', name:'Peanut Butter Crunchy 340g', cat:'grains', pack:'Carton', unit:'12 x 340g', price:1120, stock:'low' },
  { id:'MZ017', name:'Overload Chocolate Bar 40g', cat:'confectionary', pack:'Carton', unit:'24 x 40g', price:790, stock:'low' },
  { id:'MZ018', name:'Butter Cream Crackers 300g', cat:'confectionary', pack:'Carton', unit:'12 x 300g', price:860, stock:'in' },
  { id:'MZ019', name:'Assorted Gummy Candy 100g', cat:'confectionary', pack:'Box', unit:'30 x 100g', price:610, stock:'in' },
  { id:'MZ020', name:'Chicken Chunk in Sunflower Oil 185g', cat:'canned', pack:'Carton', unit:'24 x 185g', price:1750, stock:'in' },
  { id:'MZ021', name:'Tropical Fruit Cocktail 420g', cat:'canned', pack:'Carton', unit:'24 x 420g', price:850, stock:'low' },
  { id:'MZ022', name:'Corned Beef 340g', cat:'canned', pack:'Carton', unit:'24 x 340g', price:1980, stock:'in' },
  { id:'MZ023', name:'All-Purpose Baking Flour 1kg', cat:'cooking', pack:'Bag', unit:'1 x 1kg', price:75, stock:'in' },
  { id:'MZ024', name:'Fine Granulated Sugar 1kg', cat:'cooking', pack:'Bag', unit:'1 x 1kg', price:60, stock:'in' },
  { id:'MZ025', name:'Baking Powder 100g', cat:'cooking', pack:'Box', unit:'24 x 100g', price:540, stock:'in' },
  { id:'MZ026', name:'Strawberry Body Wash 400ml', cat:'personal-care', pack:'Carton', unit:'12 x 400ml', price:960, stock:'in' },
  { id:'MZ027', name:'Refreshing Hand Sanitizer 250ml', cat:'personal-care', pack:'Carton', unit:'24 x 250ml', price:1080, stock:'in' },
  { id:'MZ028', name:'Herbal Shampoo 350ml', cat:'personal-care', pack:'Carton', unit:'12 x 350ml', price:890, stock:'low' },
  { id:'MZ029', name:'White Vinegar 750ml', cat:'sauces', pack:'Carton', unit:'12 x 750ml', price:420, stock:'in' },
  { id:'MZ030', name:'BBQ Flavour Sauce 340g', cat:'sauces', pack:'Carton', unit:'24 x 340g', price:920, stock:'in' },
  { id:'MZ031', name:'Pure Sunflower Cooking Oil 5L', cat:'sauces', pack:'Carton', unit:'4 x 5L', price:1450, stock:'low' },
  { id:'MZ032', name:'Multi-Surface Cleaning Liquid 1L', cat:'household', pack:'Carton', unit:'12 x 1L', price:780, stock:'in' },
  { id:'MZ033', name:'Glue Stick 21g', cat:'household', pack:'Box', unit:'20 pcs', price:140, stock:'low' },
  { id:'MZ034', name:'Dishwashing Liquid Lemon 900ml', cat:'household', pack:'Carton', unit:'12 x 900ml', price:850, stock:'in' },
];

const ATOLLS = {
  'Haa Alif (HA)': ['Dhidhdhoo', 'Hoarafushi', 'Kelaa', 'Ihavandhoo'],
  'Haa Dhaalu (HDh)': ['Kulhudhuffushi', 'Nolhivaranfaru', 'Hanimaadhoo'],
  'Shaviyani (Sh)': ['Funadhoo', 'Feydhoo', 'Milandhoo'],
  'Noonu (N)': ['Manadhoo', 'Holhudhoo', 'Velidhoo'],
  'Raa (R)': ['Ungoofaaru', 'Dhuvaafaru', 'Alifushi'],
  'Baa (B)': ['Eydhafushi', 'Thulhaadhoo', 'Dharavandhoo'],
  'Lhaviyani (Lh)': ['Naifaru', 'Hinnavaru'],
  'Kaafu (K)': ["Male'", "Hulhumale'", 'Vilingili', 'Dhiffushi', 'Gaafaru', 'Gulhi', 'Guraidhoo', 'Hinmafushi', 'Huraa', 'Kaashidhoo', 'Maafushi', 'Thulusdhoo'],
  'Alif Alif (AA)': ['Rasdhoo', 'Thoddoo', 'Ukulhas'],
  'Alif Dhaalu (ADh)': ['Mahibadhoo', 'Dhigurah', 'Dhangethi'],
  'Vaavu (V)': ['Felidhoo', 'Keyodhoo'],
  'Meemu (M)': ['Muli', 'Naalaafushi', 'Dhiggaru'],
  'Faafu (F)': ['Nilandhoo', 'Magoodhoo'],
  'Dhaalu (Dh)': ['Kudahuvadhoo', 'Meedhoo'],
  'Thaa (Th)': ['Veymandoo', 'Thimarafushi', 'Guraidhoo'],
  'Laamu (L)': ['Fonadhoo', 'Gan', 'Maabaidhoo'],
  'Gaafu Alif (GA)': ['Villingili', 'Maamendhoo'],
  'Gaafu Dhaalu (GDh)': ['Thinadhoo', 'Madaveli'],
  'Gnaviyani (Gn)': ['Fuvahmulah'],
  'Seenu (Addu) (S)': ['Hithadhoo', 'Maradhoo', 'Feydhoo', 'Hulhudhoo'],
};

const GST_RATE = 0.08;
const fmt = n => 'MVR ' + n.toFixed(2);
const $ = sel => document.querySelector(sel);
const $$ = (sel, root) => Array.from((root || document).querySelectorAll(sel));

let coMethod = 'pickup';
let coPickupDayIndex = 0;
let coSlipFile = null;

/* Cart and orders are namespaced per account (same scheme as script.js),
   so they're only ever read/written for whoever is currently signed in. */
function getSession(){
  try{ return JSON.parse(localStorage.getItem('mazi_session') || 'null'); }
  catch(e){ return null; }
}
function accountId(){
  const session = getSession();
  return session && session.email ? session.email.toLowerCase() : 'guest';
}
function cartKey(){
  return 'mazi_cart_' + accountId();
}
function ordersKey(){
  return 'mazi_orders_' + accountId();
}
function getCart(){
  try{ return JSON.parse(localStorage.getItem(cartKey()) || '{}'); }
  catch(e){ return {}; }
}
function saveCart(cart){
  localStorage.setItem(cartKey(), JSON.stringify(cart));
}
function getOrders(){
  try{ return JSON.parse(localStorage.getItem(ordersKey()) || '[]'); }
  catch(e){ return []; }
}
function saveOrders(orders){
  localStorage.setItem(ordersKey(), JSON.stringify(orders));
}
function productImg(p){
  return `img/products/${p.id}.png`;
}

/* ---------- Guard: needs a logged-in user with items in cart ---------- */
let cart = getCart();
const session = getSession();
if (!session){
  window.location.href = 'index.html?open=login';
}
if (Object.keys(cart).length === 0){
  window.location.href = 'index.html?open=cart';
}

/* ---------- Contact ---------- */
function renderContact(){
  const s = getSession() || {};
  const name = [s.firstName, s.lastName].filter(Boolean).join(' ') || s.name || 'there';
  $('#coContactName').textContent = `Signed in as ${name}`;
  $('#coContactMobile').textContent = s.mobile ? `+960${String(s.mobile).replace(/^\+?960/,'')}` : '';
  $('#coName').value = name !== 'there' ? name : '';
  $('#coMobile').value = s.mobile || '';
}

/* ---------- Review items ---------- */
function lineItems(){
  return Object.keys(cart).map(id=>{
    const p = PRODUCTS.find(p=>p.id===id);
    return p ? { p, qty: cart[id] } : null;
  }).filter(Boolean);
}

function renderItems(){
  const items = lineItems();
  const count = items.reduce((s,it)=> s + it.qty, 0);
  $('#coItemCount').textContent = count ? `(${count} unit${count!==1?'s':''})` : '';
  $('#coTitleSub').textContent = count ? `${count} item${count!==1?'s':''} in your order.` : 'Your cart is empty.';

  if (items.length === 0){
    $('#coItems').innerHTML = `<div class="co-items-empty">Your cart is empty.</div>`;
  } else {
    $('#coItems').innerHTML = items.map(({p,qty})=>`
      <div class="co-item-row" data-id="${p.id}">
        <div class="co-item-media"><img src="${productImg(p)}" alt="${p.name}" onerror="this.classList.add('img-missing')"></div>
        <div class="co-item-info">
          <div class="co-item-name">${p.name}</div>
          <div class="co-item-meta">${p.pack}</div>
          <div class="co-item-qty">
            <button type="button" data-minus="${p.id}">&minus;</button>
            <span>${qty}</span>
            <button type="button" data-plus="${p.id}">&plus;</button>
          </div>
        </div>
        <div class="co-item-price">${fmt(p.price * qty)}</div>
      </div>
    `).join('');
  }

  $$('[data-minus]', $('#coItems')).forEach(btn=> btn.addEventListener('click', ()=> changeQty(btn.dataset.minus, -1)));
  $$('[data-plus]', $('#coItems')).forEach(btn=> btn.addEventListener('click', ()=> changeQty(btn.dataset.plus, 1)));
  $$('[data-remove]', $('#coItems')).forEach(btn=> btn.addEventListener('click', ()=> removeItem(btn.dataset.remove)));
}

function changeQty(id, delta){
  const next = (cart[id] || 0) + delta;
  if (next <= 0) delete cart[id];
  else cart[id] = next;
  saveCart(cart);
  refreshCart();
}
function removeItem(id){
  delete cart[id];
  saveCart(cart);
  refreshCart();
}
function refreshCart(){
  if (Object.keys(cart).length === 0){
    window.location.href = 'index.html?open=cart';
    return;
  }
  renderItems();
  renderSummary();
}

/* ---------- Order summary ---------- */
function subtotal(){
  return lineItems().reduce((s,{p,qty})=> s + p.price*qty, 0);
}
function deliveryFee(){
  return coMethod === 'pickup' ? 0 : null; // null = "to be confirmed"
}
function renderSummary(){
  const sub = subtotal();
  const gst = sub - (sub / (1 + GST_RATE));
  const fee = deliveryFee();
  const total = sub + (fee || 0);

  $('#coSubtotal').textContent = fmt(sub);
  $('#coGst').textContent = fmt(gst);
  const feeEl = $('#coDeliveryFee');
  if (fee === 0){ feeEl.textContent = 'Complimentary'; feeEl.classList.add('co-complimentary'); }
  else { feeEl.textContent = 'To be confirmed'; feeEl.classList.remove('co-complimentary'); }
  $('#coTotal').textContent = fmt(total);

}

/* ---------- Delivery preferences ---------- */
function pickupDayOptions(){
  const labels = ['TODAY', 'TOMORROW'];
  const out = [];
  for (let i=0;i<6;i++){
    const d = new Date();
    d.setDate(d.getDate()+i);
    const dayLabel = i < labels.length
      ? `${labels[i]} &middot; ${d.toLocaleDateString('en-GB',{weekday:'short',day:'2-digit',month:'short'}).toUpperCase()}`
      : d.toLocaleDateString('en-GB',{weekday:'short',day:'2-digit',month:'short'}).toUpperCase();
    out.push(dayLabel);
  }
  return out;
}
function renderPickupDays(){
  const days = pickupDayOptions();
  $('#coPickupDays').innerHTML = days.map((label,i)=>
    `<button type="button" class="co-day${i===coPickupDayIndex?' active':''}" data-day="${i}">${label}</button>`
  ).join('');
  $$('[data-day]', $('#coPickupDays')).forEach(btn=> btn.addEventListener('click', ()=>{
    coPickupDayIndex = Number(btn.dataset.day);
    renderPickupDays();
  }));
}

function setMethod(method){
  coMethod = method;
  $$('.co-tab', $('#coDeliveryTabs')).forEach(tab=> tab.classList.toggle('active', tab.dataset.method === method));
  $('#coPanelPickup').hidden = method !== 'pickup';
  $('#coPanelDelivery').hidden = method !== 'delivery';
  $('#coPanelBoat').hidden = method !== 'boat';
  if (method === 'delivery') renderDeliveryEstimate();
  renderSummary();
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
function isMaleIsland(island){
  return island === "Male'" || island === "Hulhumale'";
}
function renderDeliveryEstimate(){
  const island = $('#coIsland').value;
  const male = isMaleIsland(island);
  $('#coEstimateTitle').textContent = male ? "Male' Delivery" : `${island || 'Island'} Delivery`;
  $('#coEstimateSub').textContent = 'Cargo boat / speedboat / air freight';
  const feeEl = $('#coEstimateFee');
  const etaEl = $('#coEstimateEta');
  if (male){
    feeEl.textContent = 'Complimentary';
    feeEl.classList.add('co-complimentary');
    feeEl.classList.remove('co-tbc');
    etaEl.textContent = 'Same Day';
  } else {
    feeEl.textContent = 'To be confirmed';
    feeEl.classList.remove('co-complimentary');
    feeEl.classList.add('co-tbc');
    etaEl.textContent = '2–4 Working Days';
  }
}

/* ---------- Payment ---------- */
function renderSlip(){
  const wrap = $('#coUploadWrap');
  const label = $('#coUploadLabel');
  if (coSlipFile){
    wrap.classList.add('has-file');
    label.textContent = `Selected: ${coSlipFile.name}`;
  } else {
    wrap.classList.remove('has-file');
    label.textContent = 'Tap to upload slip (JPG, PNG, PDF — max 5MB)';
  }
}

/* ---------- Order placement ---------- */
function placeOrder(customer){
  const ids = Object.keys(cart);
  if (ids.length === 0) return null;

  const items = ids.map(id=>{
    const p = PRODUCTS.find(p=>p.id===id);
    const qty = cart[id];
    return { id:p.id, name:p.name, pack:p.pack, unit:p.unit, price:p.price, qty };
  });
  const sub = items.reduce((s,it)=> s + it.price*it.qty, 0);
  const fee = customer && typeof customer.deliveryFee === 'number' ? customer.deliveryFee : null;
  const total = customer && typeof customer.total === 'number' ? customer.total : sub;

  const orders = getOrders();
  const orderNo = `MZ${new Date().getFullYear()}${String(orders.length+1).padStart(4,'0')}`;
  const order = { id:orderNo, placedAt:Date.now(), items, subtotal:sub, deliveryFee:fee, total, customer: customer || null };
  orders.unshift(order);
  saveOrders(orders);

  cart = {};
  saveCart(cart);

  return order;
}

function showSuccess(order, contactLabel){
  $('#coContent').style.display = 'none';
  document.title = 'Order Placed — MAZI General Trade';

  const s = getSession() || {};
  const customer = order.customer || {};
  const firstName = (customer.name || '').split(' ')[0] || s.firstName || s.name || 'there';
  const itemCount = order.items.reduce((sum,it)=> sum + it.qty, 0);

  $('#coSuccessSub').textContent = `Hi ${firstName}, your order for ${itemCount} product${itemCount!==1?'s':''} has been received and is now pending confirmation from our team.`;
  $('#coSuccessTotal').textContent = fmt(order.total);
  $('#coSuccessOrderId').textContent = order.id;
  const d = new Date(order.placedAt);
  $('#coSuccessDate').textContent = d.toLocaleDateString('en-GB', {day:'2-digit', month:'short', year:'numeric'}) + ', ' + d.toLocaleTimeString('en-GB', {hour:'2-digit', minute:'2-digit'});
  $('#coSuccessContact').textContent = contactLabel || '—';

  initNotifPrompt();

  $('#coSuccess').classList.add('show');
  window.scrollTo({top:0, behavior:'smooth'});
}

/* ============ Device (OS-level) order notifications ============ */
// Same mechanism as script.js on the main site — a real browser/OS
// notification, backed by a service worker so it also works on Android
// Chrome (which blocks the plain Notification constructor).
function notifSupported(){
  return typeof window !== 'undefined' && 'Notification' in window;
}
function registerNotifServiceWorker(){
  if (!('serviceWorker' in navigator)) return Promise.resolve(null);
  return navigator.serviceWorker.register('sw.js').catch(()=> null);
}
function requestDeviceNotifPermission(onDone){
  if (!notifSupported()){ if (onDone) onDone('unsupported'); return; }
  if (Notification.permission !== 'default'){ if (onDone) onDone(Notification.permission); return; }
  registerNotifServiceWorker();
  Notification.requestPermission().then(perm=>{ if (onDone) onDone(perm); });
}

// App-level on/off preference, shared (same localStorage key) with the
// main site's script.js — so toggling it here or in Profile settings
// stays in sync everywhere.
function getNotifPref(){
  return localStorage.getItem('mazi_notif_pref') || 'on';
}
function setNotifPref(val){
  localStorage.setItem('mazi_notif_pref', val);
}

// Shown on the success screen. Stays visible (not hidden) once permission
// is granted — it morphs into a persistent on/off toggle instead, so the
// person can turn order + future offer/sale alerts back on or off right
// there. Only hides fully when unsupported or the browser permission was
// denied outright.
function initNotifPrompt(){
  const el = $('#coNotifPrompt');
  const action = $('#coNotifAction');
  if (!el || !action) return;

  if (!notifSupported() || Notification.permission === 'denied'){
    el.hidden = true;
    return;
  }
  el.hidden = false;

  if (Notification.permission === 'granted'){
    renderNotifToggle(action, 'coNotifToggle');
  } else {
    renderNotifEnableButton(action, 'coNotifBtn', ()=> renderNotifToggle(action, 'coNotifToggle'), el);
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
      setTimeout(()=>{
        btn.classList.remove('loading');
        if (perm === 'granted'){
          setNotifPref('on');
          btn.classList.add('success');
          setTimeout(onEnabled, 900);
        } else if (perm === 'denied'){
          if (promptEl) promptEl.hidden = true;
        }
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
      renderNotifToggle(action, toggleId);
    }, 700);
  });
}

/* ---------- Init ---------- */
function init(){
  if (!session || Object.keys(cart).length === 0) return;

  renderContact();
  renderItems();
  renderSummary();

  coMethod = 'pickup';
  coPickupDayIndex = 0;
  coSlipFile = null;
  renderSlip();
  renderPickupDays();

  populateAtollSelect('#coAtoll');
  $('#coAtoll').value = 'Kaafu (K)';
  populateIslandSelect('#coIsland', $('#coAtoll').value);

  setMethod('pickup');

  const sessionName = [session.firstName, session.lastName].filter(Boolean).join(' ') || session.name || '';
  $('#coBoatCustomerName').value = sessionName;
  $('#coBoatCustomerContact').value = session.mobile || '';

  $$('.co-tab', $('#coDeliveryTabs')).forEach(tab=>{
    tab.addEventListener('click', ()=> setMethod(tab.dataset.method));
  });

  $('#coAtoll').addEventListener('change', ()=>{
    populateIslandSelect('#coIsland', $('#coAtoll').value);
    renderDeliveryEstimate();
  });
  $('#coIsland').addEventListener('change', renderDeliveryEstimate);

  $('#coSlip').addEventListener('change', e=>{
    const file = e.target.files[0];
    coSlipFile = file || null;
    renderSlip();
    if (coSlipFile){
      $('#coUploadWrap').classList.remove('error');
      $('#coSlipError').style.display = 'none';
    }
  });

  $('#coName').addEventListener('input', ()=> $('#coNameField').classList.remove('has-error'));
  $('#coMobile').addEventListener('input', ()=> $('#coMobileField').classList.remove('has-error'));
  $('#coHouse').addEventListener('input', ()=> $('#coHouseField').classList.remove('has-error'));
  [
    'coBoatName','coBoatContact','coBoatDeparture','coBoatCustomerName',
    'coBoatCustomerContact','coBoatAddress','coBoatIslandName','coBoatIslandCode'
  ].forEach(id=>{
    $('#'+id).addEventListener('input', ()=> $('#'+id+'Field').classList.remove('has-error'));
  });

  $('#coTerms').addEventListener('change', ()=>{
    if ($('#coTerms').checked){
      $('#coTermsField').classList.remove('has-error');
      $('#coTermsError').style.display = 'none';
    }
  });

  $('#checkoutForm').addEventListener('submit', e=>{
    e.preventDefault();

    const name = $('#coName').value.trim();
    const nameOk = name.length >= 2;
    $('#coNameField').classList.toggle('has-error', !nameOk);
    const mobile = $('#coMobile').value.trim();
    const mobileOk = /^[0-9+\-\s]{6,}$/.test(mobile);
    $('#coMobileField').classList.toggle('has-error', !mobileOk);

    let deliveryDetails = null;
    let methodOk = true;

    if (coMethod === 'delivery'){
      const atoll = $('#coAtoll').value;
      const island = $('#coIsland').value;
      const house = $('#coHouse').value.trim();
      const landmark = $('#coLandmark').value.trim();
      const note = $('#coDeliveryNote').value.trim();
      const houseOk = house.length >= 2;
      $('#coHouseField').classList.toggle('has-error', !houseOk);
      methodOk = houseOk;
      if (methodOk){
        const address = [house, landmark, island, atoll].filter(Boolean).join(', ');
        deliveryDetails = { atoll, island, house, landmark, note, address };
      }
    } else if (coMethod === 'boat'){
      const boatFields = [
        { id:'coBoatName', min:2 },
        { id:'coBoatContact', min:6 },
        { id:'coBoatDeparture', min:1 },
        { id:'coBoatCustomerName', min:2 },
        { id:'coBoatCustomerContact', min:6 },
        { id:'coBoatAddress', min:5 },
        { id:'coBoatIslandName', min:2 },
        { id:'coBoatIslandCode', min:1 },
      ];
      methodOk = true;
      const boatVals = {};
      boatFields.forEach(f=>{
        const val = $('#'+f.id).value.trim();
        const ok = val.length >= f.min;
        $('#'+f.id+'Field').classList.toggle('has-error', !ok);
        boatVals[f.id] = val;
        if (!ok) methodOk = false;
      });
      if (methodOk){
        deliveryDetails = {
          boatName: boatVals.coBoatName,
          boatContact: boatVals.coBoatContact,
          boatDeparture: boatVals.coBoatDeparture,
          customerName: boatVals.coBoatCustomerName,
          customerContact: boatVals.coBoatCustomerContact,
          address: boatVals.coBoatAddress,
          islandName: boatVals.coBoatIslandName,
          islandCode: boatVals.coBoatIslandCode,
          note: $('#coBoatNote').value.trim(),
        };
      }
    } else {
      deliveryDetails = {
        store: "Male' Showroom",
        day: pickupDayOptions()[coPickupDayIndex].replace(/&middot;/g,'·').replace(/<[^>]+>/g,''),
        note: $('#coPickupNote').value.trim(),
      };
    }

    const slipOk = !!coSlipFile;
    $('#coUploadWrap').classList.toggle('error', !slipOk);
    $('#coSlipError').style.display = slipOk ? 'none' : 'block';

    const termsOk = $('#coTerms').checked;
    $('#coTermsField').classList.toggle('has-error', !termsOk);
    $('#coTermsError').style.display = termsOk ? 'none' : 'block';

    if (!nameOk || !mobileOk || !methodOk || !slipOk || !termsOk){
      const firstError = document.querySelector('.co-field.has-error, .co-upload.error, #coTermsField.has-error');
      if (firstError) firstError.scrollIntoView({behavior:'smooth', block:'center'});
      return;
    }

    const sub = subtotal();
    const fee = deliveryFee();
    const total = sub + (fee || 0);

    const submitBtn = $('#coSubmitBtn');
    submitBtn.disabled = true;
    submitBtn.textContent = 'Placing order…';
    document.getElementById('coPage').classList.add('co-placing');

    setTimeout(()=>{
      const order = placeOrder({
        name, mobile,
        method: coMethod,
        location: deliveryDetails,
        deliveryFee: fee,
        gst: sub - (sub / (1 + GST_RATE)),
        total,
        paymentSlip: coSlipFile ? coSlipFile.name : null,
      });
      if (!order){
        submitBtn.disabled = false;
        submitBtn.textContent = 'Place Your Order';
        document.getElementById('coPage').classList.remove('co-placing');
        return;
      }
      document.getElementById('coPage').classList.remove('co-placing');
      showSuccess(order, mobile ? `+960${mobile.replace(/^\+?960/,'')}` : '');
    }, 1400);
  });
}

document.addEventListener('DOMContentLoaded', init);
