/* ============================================================
   CAPSULE — logique partagée (navbar, drawers, panier)
   ============================================================ */

const NAV_LINKS = [
  { href: 'collection.html', label: 'Collection' },
  { href: 'produit.html', label: 'Produit' },
  { href: 'panier.html', label: 'Panier' },
];

/* ---------- Navbar ---------- */
const HEADER = `
<header id="navbar" class="sticky top-0 z-50 w-full border-b border-transparent bg-white/80 backdrop-blur-md transition-all duration-300">
  <nav class="flex items-center justify-between px-6 py-5 md:px-12 lg:px-20">
    <div class="flex flex-1 items-center">
      <button type="button" aria-label="Ouvrir le menu" data-menu-open class="-ml-1 p-1 text-[#1a1a1a] md:hidden">
        <svg class="h-5 w-5" fill="none" stroke="currentColor" stroke-width="1.25" viewBox="0 0 24 24"><path stroke-linecap="square" d="M3 6h18M3 12h18M3 18h18"/></svg>
      </button>
      <div class="hidden items-center gap-8 md:flex">
        ${NAV_LINKS.map(l => `<a href="${l.href}" class="text-[11px] font-medium uppercase tracking-[0.2em] text-[#1a1a1a]/60 transition-colors hover:text-[#1a1a1a]">${l.label}</a>`).join('')}
      </div>
    </div>

    <a href="index.html" class="shrink-0 text-lg font-light tracking-[0.3em] text-[#1a1a1a] md:text-xl">CAPSULE</a>

    <div class="flex flex-1 items-center justify-end gap-5">
      <button type="button" aria-label="Rechercher" class="hidden p-1 text-[#1a1a1a] transition-opacity hover:opacity-60 sm:block">
        <svg class="h-5 w-5" fill="none" stroke="currentColor" stroke-width="1.25" viewBox="0 0 24 24"><circle cx="11" cy="11" r="7"/><path stroke-linecap="square" d="m20 20-3.5-3.5"/></svg>
      </button>
      <button type="button" aria-label="Panier" data-cart-open class="relative p-1 text-[#1a1a1a] transition-opacity hover:opacity-60">
        <svg class="h-5 w-5" fill="none" stroke="currentColor" stroke-width="1.25" viewBox="0 0 24 24"><path stroke-linecap="square" d="M4 7h16l-1.2 13H5.2L4 7Z"/><path stroke-linecap="square" d="M9 7V5.5a3 3 0 0 1 6 0V7"/></svg>
        <span data-cart-count class="absolute -right-1 -top-1 flex h-4 min-w-4 items-center justify-center rounded-full bg-[#1a1a1a] px-1 text-[10px] font-medium leading-none text-white">2</span>
      </button>
    </div>
  </nav>
</header>

<div data-menu-panel class="pointer-events-none fixed inset-0 z-[60] opacity-0 transition-opacity duration-300">
  <div data-menu-close class="absolute inset-0 bg-black/20"></div>
  <div data-menu-sheet class="absolute inset-y-0 left-0 flex w-[85%] max-w-sm -translate-x-full flex-col bg-white transition-transform duration-300 ease-out">
    <div class="flex items-center justify-between border-b border-[#1a1a1a]/10 px-6 py-5">
      <span class="text-[11px] font-medium uppercase tracking-[0.2em] text-[#1a1a1a]/40">Menu</span>
      <button type="button" aria-label="Fermer" data-menu-close class="p-1 text-[#1a1a1a]">
        <svg class="h-5 w-5" fill="none" stroke="currentColor" stroke-width="1.25" viewBox="0 0 24 24"><path stroke-linecap="square" d="M5 5l14 14M19 5L5 19"/></svg>
      </button>
    </div>
    <nav class="flex flex-col px-6 py-8">
      ${NAV_LINKS.map(l => `<a href="${l.href}" class="border-b border-[#1a1a1a]/5 py-4 text-2xl font-light tracking-tight text-[#1a1a1a]">${l.label}</a>`).join('')}
      <a href="confirmation.html" class="border-b border-[#1a1a1a]/5 py-4 text-2xl font-light tracking-tight text-[#1a1a1a]">Confirmation</a>
    </nav>
  </div>
</div>

<div data-cart-panel class="pointer-events-none fixed inset-0 z-[70] opacity-0 transition-opacity duration-300">
  <div data-cart-close class="absolute inset-0 bg-black/20"></div>
  <aside data-cart-sheet class="absolute inset-y-0 right-0 flex w-full max-w-md translate-x-full flex-col bg-white transition-transform duration-300 ease-out">
    <div class="flex items-center justify-between border-b border-[#1a1a1a]/10 px-6 py-5">
      <h2 class="text-[11px] font-medium uppercase tracking-[0.2em] text-[#1a1a1a]">Panier (2)</h2>
      <button type="button" aria-label="Fermer" data-cart-close class="p-1 text-[#1a1a1a]">
        <svg class="h-5 w-5" fill="none" stroke="currentColor" stroke-width="1.25" viewBox="0 0 24 24"><path stroke-linecap="square" d="M5 5l14 14M19 5L5 19"/></svg>
      </button>
    </div>
    <div class="flex-1 overflow-y-auto px-6 py-6">
      <article class="flex gap-4 border-b border-[#1a1a1a]/5 pb-6">
        <img src="https://placehold.co/200x250/f4f2ef/1a1a1a?text=01" alt="Chemise Lin Écru" class="h-28 w-[88px] shrink-0 object-cover"/>
        <div class="flex flex-1 flex-col">
          <h3 class="text-sm font-normal tracking-wide text-[#1a1a1a]">Chemise Lin Écru</h3>
          <p class="mt-1 text-xs font-light text-[#1a1a1a]/50">Taille M</p>
          <div class="mt-auto flex items-end justify-between">
            <span class="border border-[#1a1a1a]/15 px-3 py-1 text-xs font-light text-[#1a1a1a]">1</span>
            <p class="text-sm font-light text-[#1a1a1a]">180 €</p>
          </div>
        </div>
      </article>
      <article class="flex gap-4 border-b border-[#1a1a1a]/5 py-6">
        <img src="https://placehold.co/200x250/dedad3/1a1a1a?text=03" alt="Veste Structurée" class="h-28 w-[88px] shrink-0 object-cover"/>
        <div class="flex flex-1 flex-col">
          <h3 class="text-sm font-normal tracking-wide text-[#1a1a1a]">Veste Structurée</h3>
          <p class="mt-1 text-xs font-light text-[#1a1a1a]/50">Taille S</p>
          <div class="mt-auto flex items-end justify-between">
            <span class="border border-[#1a1a1a]/15 px-3 py-1 text-xs font-light text-[#1a1a1a]">1</span>
            <p class="text-sm font-light text-[#1a1a1a]">390 €</p>
          </div>
        </div>
      </article>
    </div>
    <div class="border-t border-[#1a1a1a]/10 px-6 py-6">
      <div class="flex items-center justify-between">
        <span class="text-[11px] font-medium uppercase tracking-[0.2em] text-[#1a1a1a]">Sous-total</span>
        <span class="text-lg font-light text-[#1a1a1a]">570 €</span>
      </div>
      <p class="mt-2 text-[11px] font-light text-[#1a1a1a]/40">Livraison offerte dès 200 €.</p>
      <a href="checkout.html" class="mt-5 block w-full bg-[#1a1a1a] px-8 py-4 text-center text-[11px] font-medium uppercase tracking-[0.25em] text-white transition-colors duration-300 hover:bg-[#333]">Passer commande</a>
    </div>
  </aside>
</div>`;

/* ---------- Footer ---------- */
const COLS = [
  { t: 'Boutique', l: ['Collection', 'Archives', 'Carte cadeau'] },
  { t: 'Aide', l: ['Livraison', 'Retours', 'Guide des tailles', 'Contact'] },
  { t: 'Maison', l: ['À propos', 'Matières', 'Ateliers'] },
  { t: 'Suivre', l: ['Instagram', 'Pinterest', 'TikTok'] },
];

const FOOTER = `
<footer class="border-t border-[#1a1a1a]/10 bg-white px-6 pb-10 pt-20 md:px-12 md:pt-28 lg:px-20">
  <div class="mx-auto max-w-2xl text-center">
    <h2 class="font-light leading-tight tracking-tight text-[#1a1a1a] text-3xl md:text-4xl">Prochaine capsule</h2>
    <p class="mx-auto mt-4 max-w-md text-sm font-light leading-relaxed text-[#1a1a1a]/60">Accès anticipé. Trois envois par an. Rien d'autre.</p>
    <form class="mt-10 flex flex-col gap-3 sm:flex-row sm:gap-0" data-newsletter>
      <label for="nl-email" class="sr-only">Adresse e-mail</label>
      <input id="nl-email" type="email" required placeholder="Adresse e-mail" class="w-full border border-[#1a1a1a]/20 bg-transparent px-5 py-4 text-sm font-light tracking-wide text-[#1a1a1a] placeholder:text-[#1a1a1a]/35 focus:border-[#1a1a1a] focus:outline-none sm:border-r-0"/>
      <button type="submit" class="shrink-0 bg-[#1a1a1a] px-10 py-4 text-[11px] font-medium uppercase tracking-[0.25em] text-white transition-colors duration-300 hover:bg-[#333]">S'inscrire</button>
    </form>
    <p data-nl-msg class="mt-4 text-[11px] font-light text-[#1a1a1a]/40">Désinscription à tout moment.</p>
  </div>

  <div class="mt-20 grid grid-cols-2 gap-y-10 border-t border-[#1a1a1a]/10 pt-12 md:mt-28 md:grid-cols-4">
    ${COLS.map(c => `
    <nav class="flex flex-col gap-3">
      <h3 class="mb-2 text-[11px] font-medium uppercase tracking-[0.2em] text-[#1a1a1a]">${c.t}</h3>
      ${c.l.map(x => `<a href="#" class="text-sm font-light text-[#1a1a1a]/60 transition-colors hover:text-[#1a1a1a]">${x}</a>`).join('')}
    </nav>`).join('')}
  </div>

  <div class="mt-16 flex flex-col gap-6 border-t border-[#1a1a1a]/10 pt-8 md:flex-row md:items-center md:justify-between">
    <p class="text-3xl font-light tracking-[0.2em] text-[#1a1a1a] md:text-2xl">CAPSULE</p>
    <div class="flex flex-wrap gap-x-6 gap-y-2">
      <a href="#" class="text-[11px] font-light uppercase tracking-[0.15em] text-[#1a1a1a]/40 transition-colors hover:text-[#1a1a1a]">Mentions légales</a>
      <a href="#" class="text-[11px] font-light uppercase tracking-[0.15em] text-[#1a1a1a]/40 transition-colors hover:text-[#1a1a1a]">CGV</a>
      <a href="#" class="text-[11px] font-light uppercase tracking-[0.15em] text-[#1a1a1a]/40 transition-colors hover:text-[#1a1a1a]">Confidentialité</a>
    </div>
    <p class="text-[11px] font-light tracking-wide text-[#1a1a1a]/40">© 2026 Capsule — projet de démonstration</p>
  </div>
</footer>`;

/* ---------- Montage ---------- */
document.addEventListener('DOMContentLoaded', () => {
  const h = document.getElementById('site-header');
  const f = document.getElementById('site-footer');
  if (h) h.innerHTML = HEADER;
  if (f) f.innerHTML = FOOTER;

  const nav = document.getElementById('navbar');
  if (nav) {
    const onScroll = () => nav.classList.toggle('border-[#1a1a1a]/10', scrollY > 8);
    addEventListener('scroll', onScroll);
    onScroll();
  }

  const bind = (name, hiddenClass) => {
    const panel = document.querySelector(`[data-${name}-panel]`);
    if (!panel) return () => {};
    const sheet = panel.querySelector(`[data-${name}-sheet]`);
    const set = (open) => {
      panel.classList.toggle('pointer-events-none', !open);
      panel.classList.toggle('opacity-0', !open);
      sheet.classList.toggle(hiddenClass, !open);
      document.body.style.overflow = open ? 'hidden' : '';
    };
    document.querySelectorAll(`[data-${name}-open]`).forEach(b => b.addEventListener('click', () => set(true)));
    panel.querySelectorAll(`[data-${name}-close]`).forEach(b => b.addEventListener('click', () => set(false)));
    return set;
  };

  const closeMenu = bind('menu', '-translate-x-full');
  const closeCart = bind('cart', 'translate-x-full');
  addEventListener('keydown', e => { if (e.key === 'Escape') { closeMenu(false); closeCart(false); } });

  const nl = document.querySelector('[data-newsletter]');
  if (nl) nl.addEventListener('submit', e => {
    e.preventDefault();
    const msg = document.querySelector('[data-nl-msg]');
    msg.textContent = 'Inscription enregistrée — démo, aucun e-mail envoyé.';
    msg.classList.replace('text-[#1a1a1a]/40', 'text-[#1a1a1a]');
    nl.reset();
  });
});
