/* ============================================================
   CAPSULE — chrome partagé : navbar, menu mobile, pied de page
   Une seule source de vérité pour toutes les pages.
   ============================================================ */

/* Navigation : on ne met JAMAIS un produit isolé dans le menu.
   Les produits se découvrent depuis la collection. */
const NAV = [
  { href: 'collection.html', label: 'Collection' },
  { href: 'index.html#histoire', label: 'Histoire' },
  { href: 'index.html#capsule', label: 'La capsule' },
];

const ANNONCES = [
  'Livraison offerte dès 200 €',
  'Série limitée — 120 exemplaires',
  'Retours gratuits 30 jours',
  'Ateliers portugais',
];

const marqueeGroup = () => ANNONCES.map(t =>
  `<span class="flex items-center gap-3 px-8 text-[10px] font-medium uppercase tracking-[0.28em] text-white/85">${t}<span class="text-white/25">✦</span></span>`
).join('');

const HEADER = `
<div class="group/announce relative overflow-hidden bg-[#111] py-2.5">
  <div class="flex w-max animate-[marquee_38s_linear_infinite] group-hover/announce:[animation-play-state:paused]">
    <div class="flex shrink-0 items-center">${marqueeGroup()}</div>
    <div class="flex shrink-0 items-center" aria-hidden="true">${marqueeGroup()}</div>
  </div>
</div>

<header id="nav" class="sticky top-0 z-50 border-b border-[#111]/[0.07] bg-[#FAF9F7]/85 backdrop-blur-xl transition-all duration-500 ease-out">
  <nav class="mx-auto flex max-w-[1600px] items-center gap-6 px-5 py-4 md:px-10 lg:px-14">

    <div class="flex flex-1 items-center gap-8">
      <button type="button" aria-label="Ouvrir le menu" data-menu-open class="-ml-1 p-1 lg:hidden">
        <span class="block h-px w-6 bg-[#111] transition-all duration-500"></span>
        <span class="mt-[7px] block h-px w-4 bg-[#111] transition-all duration-500"></span>
      </button>

      <div class="hidden items-center gap-9 lg:flex">
        ${NAV.map(l => `
        <a href="${l.href}" data-nav class="group relative py-1 text-[11px] font-medium uppercase tracking-[0.22em] text-[#111]/55 transition-colors duration-500 hover:text-[#111]">
          ${l.label}<span class="absolute -bottom-0.5 left-0 h-px w-0 bg-[#111] transition-all duration-500 ease-out group-hover:w-full"></span>
        </a>`).join('')}
      </div>
    </div>

    <a href="index.html" class="shrink-0 text-center">
      <span class="block font-serif text-[26px] leading-none tracking-[0.16em] text-[#111] md:text-[30px]">CAPSULE</span>
      <span class="mt-1 hidden text-[8px] font-medium uppercase tracking-[0.4em] text-[#111]/35 md:block">Paris — Édition 03</span>
    </a>

    <div class="flex flex-1 items-center justify-end gap-1.5 md:gap-3">
      <button type="button" aria-label="Rechercher" class="hidden rounded-full p-2.5 transition-all duration-500 ease-out hover:bg-[#111]/[0.06] sm:block">
        <svg class="h-[18px] w-[18px] text-[#111]" fill="none" stroke="currentColor" stroke-width="1.3" viewBox="0 0 24 24"><circle cx="11" cy="11" r="7"/><path stroke-linecap="round" d="m20 20-3.5-3.5"/></svg>
      </button>
      <button type="button" aria-label="Compte" class="hidden rounded-full p-2.5 transition-all duration-500 ease-out hover:bg-[#111]/[0.06] md:block">
        <svg class="h-[18px] w-[18px] text-[#111]" fill="none" stroke="currentColor" stroke-width="1.3" viewBox="0 0 24 24"><circle cx="12" cy="8" r="4"/><path stroke-linecap="round" d="M4.5 20a7.5 7.5 0 0 1 15 0"/></svg>
      </button>

      <a href="panier.html" class="group ml-1 flex items-center gap-2.5 rounded-full bg-[#111] py-2.5 pl-4 pr-2.5 transition-all duration-500 ease-out hover:bg-[#2b2b2b]">
        <span class="text-[10px] font-medium uppercase tracking-[0.18em] text-white">Panier</span>
        <span data-count class="flex h-6 w-6 items-center justify-center rounded-full bg-white text-[11px] font-medium text-[#111] transition-transform duration-500 ease-out group-hover:scale-110">2</span>
      </a>
    </div>
  </nav>
</header>

<div data-menu-panel class="pointer-events-none fixed inset-0 z-[60] opacity-0 transition-opacity duration-500 lg:hidden">
  <div data-menu-close class="absolute inset-0 bg-black/25"></div>
  <div data-menu-sheet class="absolute inset-y-0 left-0 flex w-[86%] max-w-sm -translate-x-full flex-col bg-[#FAF9F7] transition-transform duration-500 ease-out">
    <div class="flex items-center justify-between border-b border-[#111]/10 px-6 py-5">
      <span class="font-serif text-xl tracking-[0.16em] text-[#111]">CAPSULE</span>
      <button type="button" aria-label="Fermer" data-menu-close class="p-1">
        <svg class="h-5 w-5 text-[#111]" fill="none" stroke="currentColor" stroke-width="1.3" viewBox="0 0 24 24"><path stroke-linecap="round" d="M5 5l14 14M19 5L5 19"/></svg>
      </button>
    </div>
    <nav class="flex flex-col px-6 py-8">
      ${NAV.map(l => `<a href="${l.href}" data-menu-close class="border-b border-[#111]/[0.07] py-5 font-serif text-3xl font-light text-[#111]">${l.label}</a>`).join('')}
      <a href="panier.html" class="border-b border-[#111]/[0.07] py-5 font-serif text-3xl font-light text-[#111]">Panier</a>
    </nav>
    <div class="mt-auto border-t border-[#111]/10 px-6 py-6">
      <p class="text-[10px] font-medium uppercase tracking-[0.2em] text-[#111]/40">Livraison offerte dès 200 €</p>
    </div>
  </div>
</div>`;

const COLS = [
  { t: 'Boutique', l: [['Collection', 'collection.html'], ['La capsule', 'index.html#capsule'], ['Carte cadeau', '#']] },
  { t: 'Aide', l: [['Livraison', '#'], ['Retours', '#'], ['Guide des tailles', '#'], ['Contact', '#']] },
  { t: 'Maison', l: [['Notre histoire', 'index.html#histoire'], ['Matières', '#'], ['Ateliers', '#']] },
  { t: 'Suivre', l: [['Instagram', '#'], ['Pinterest', '#'], ['TikTok', '#']] },
];

const FOOTER = `
<footer class="border-t border-[#111]/10 bg-[#FAF9F7] px-5 pb-10 pt-20 md:px-10 md:pt-28 lg:px-14">
  <div class="mx-auto max-w-[1600px]">

    <div class="mx-auto max-w-2xl text-center">
      <h2 class="font-serif text-3xl font-light leading-tight text-[#111] md:text-4xl">Prochaine capsule</h2>
      <p class="mx-auto mt-4 max-w-md text-sm font-light leading-relaxed text-[#111]/55">Accès anticipé. Trois envois par an. Rien d'autre.</p>
      <form data-newsletter class="mt-8 flex flex-col gap-3 sm:flex-row sm:gap-0">
        <label for="nl" class="sr-only">Adresse e-mail</label>
        <input id="nl" type="email" required placeholder="Adresse e-mail" class="w-full border border-[#111]/20 bg-transparent px-5 py-4 text-sm font-light text-[#111] transition-colors duration-500 placeholder:text-[#111]/35 focus:border-[#111] focus:outline-none sm:border-r-0">
        <button type="submit" class="shrink-0 bg-[#111] px-10 py-4 text-[11px] font-medium uppercase tracking-[0.24em] text-white transition-colors duration-500 ease-out hover:bg-[#C7513A]">S'inscrire</button>
      </form>
      <p data-nl-msg class="mt-4 text-[11px] font-light text-[#111]/40">Désinscription à tout moment.</p>
    </div>

    <div class="mt-20 grid grid-cols-2 gap-y-10 border-t border-[#111]/10 pt-12 md:mt-28 md:grid-cols-4">
      ${COLS.map(c => `
      <nav class="flex flex-col gap-3">
        <h3 class="mb-2 text-[11px] font-medium uppercase tracking-[0.2em] text-[#111]">${c.t}</h3>
        ${c.l.map(([label, href]) => `<a href="${href}" class="text-sm font-light text-[#111]/55 transition-colors duration-500 hover:text-[#C7513A]">${label}</a>`).join('')}
      </nav>`).join('')}
    </div>

    <div class="mt-16 flex flex-col gap-6 border-t border-[#111]/10 pt-8 md:flex-row md:items-center md:justify-between">
      <p class="font-serif text-2xl tracking-[0.16em] text-[#111]">CAPSULE</p>
      <div class="flex flex-wrap gap-x-6 gap-y-2">
        <a href="#" class="text-[11px] font-light uppercase tracking-[0.15em] text-[#111]/40 transition-colors duration-500 hover:text-[#111]">Mentions légales</a>
        <a href="#" class="text-[11px] font-light uppercase tracking-[0.15em] text-[#111]/40 transition-colors duration-500 hover:text-[#111]">CGV</a>
        <a href="#" class="text-[11px] font-light uppercase tracking-[0.15em] text-[#111]/40 transition-colors duration-500 hover:text-[#111]">Confidentialité</a>
      </div>
      <p class="text-[11px] font-light text-[#111]/40">© 2026 Capsule — projet de démonstration</p>
    </div>
  </div>
</footer>`;

/* ---------- Montage + comportements ---------- */
document.addEventListener('DOMContentLoaded', () => {
  const h = document.getElementById('site-header');
  const f = document.getElementById('site-footer');
  if (h) h.innerHTML = HEADER;
  if (f) f.innerHTML = FOOTER;

  // Lien actif
  const page = location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('[data-nav]').forEach(a => {
    if (a.getAttribute('href').split('#')[0] === page) {
      a.classList.remove('text-[#111]/55');
      a.classList.add('text-[#111]');
    }
  });

  const nav = document.getElementById('nav');
  if (nav) {
    const onScroll = () => nav.classList.toggle('shadow-[0_1px_24px_rgba(0,0,0,0.06)]', scrollY > 10);
    addEventListener('scroll', onScroll);
    onScroll();
  }

  const panel = document.querySelector('[data-menu-panel]');
  if (panel) {
    const sheet = panel.querySelector('[data-menu-sheet]');
    const set = open => {
      panel.classList.toggle('pointer-events-none', !open);
      panel.classList.toggle('opacity-0', !open);
      sheet.classList.toggle('-translate-x-full', !open);
      document.body.style.overflow = open ? 'hidden' : '';
    };
    document.querySelectorAll('[data-menu-open]').forEach(b => b.addEventListener('click', () => set(true)));
    panel.querySelectorAll('[data-menu-close]').forEach(b => b.addEventListener('click', () => set(false)));
    addEventListener('keydown', e => { if (e.key === 'Escape') set(false); });
  }

  const nl = document.querySelector('[data-newsletter]');
  if (nl) nl.addEventListener('submit', e => {
    e.preventDefault();
    const msg = document.querySelector('[data-nl-msg]');
    msg.textContent = 'Inscription enregistrée — démo, aucun e-mail envoyé.';
    msg.classList.replace('text-[#111]/40', 'text-[#111]');
    nl.reset();
  });
});

/* ---------- Toast d'ajout au panier, réutilisable ---------- */
window.capsuleToast = (titre, sous) => {
  let toast = document.querySelector('[data-toast]');
  if (!toast) {
    toast = document.createElement('div');
    toast.setAttribute('data-toast', '');
    toast.className = 'pointer-events-none fixed bottom-6 left-1/2 z-[80] w-[calc(100%-2rem)] max-w-sm -translate-x-1/2 translate-y-6 opacity-0 transition-all duration-500 ease-out';
    toast.innerHTML = `
      <div class="flex items-center gap-4 bg-[#111] p-4 shadow-2xl">
        <span class="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#C7513A]">
          <svg class="h-4 w-4 text-white" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" d="m5 13 4 4L19 7"/></svg>
        </span>
        <div class="flex-1">
          <p data-toast-title class="text-[12px] font-medium text-white"></p>
          <p data-toast-sub class="mt-0.5 text-[11px] font-light text-white/50"></p>
        </div>
        <a href="panier.html" class="pointer-events-auto shrink-0 border-b border-white/30 pb-0.5 text-[10px] font-medium uppercase tracking-[0.16em] text-white transition-colors duration-500 hover:border-[#C7513A]">Voir</a>
      </div>`;
    document.body.append(toast);
  }

  toast.querySelector('[data-toast-title]').textContent = titre;
  toast.querySelector('[data-toast-sub]').textContent = sous;

  const count = document.querySelector('[data-count]');
  if (count) {
    count.textContent = +count.textContent + 1;
    count.animate([{ transform: 'scale(1)' }, { transform: 'scale(1.35)' }, { transform: 'scale(1)' }], { duration: 450, easing: 'ease-out' });
  }

  toast.classList.remove('translate-y-6', 'opacity-0');
  clearTimeout(window.__toastTimer);
  window.__toastTimer = setTimeout(() => toast.classList.add('translate-y-6', 'opacity-0'), 3200);
};
