// products.js — shared catalog data, loaded by MP_Marains.html and product.html
// Photos are optional (without them the line-art icon is shown). One main photo + any number of extra views:
//   image:   'images/x-front.jpg'                 the main photo (also used on the catalog card)
//   gallery: [ 'images/x-side.jpg',               extra views (n of them) - a plain path is enough,
//              { src: 'images/x-rear.jpg', label: 'Rear' } ]   or add { src, label } to name the button
// Views whose file can't be found are skipped automatically.
const products = [
  {
    id: 1,
    name: 'HMS Victory',
    category: 'Wooden Kits',
    brand: 'OcCre',
    era: 'Launched 1765',
    scale: '1:98',
    material: 'Wood + Brass',
    difficulty: 'Advanced',
    dimensions: '47 in × 16 in × 36 in',
    parts: 'Approx. 9,000',
    sku: 'FK-0104-HV',
    price: 129.99,
    stock: 12,
    icon: 'sail',
    image: 'model.jpg',                      // main photo (the +1) - also used on the catalog card
    gallery: [                               // extra views (n) - shown after the main photo
      { src: 'images/victory-rigging.jpg',    label: 'Rigging & sails' },
      { src: 'images/victory-hull.jpg',       label: 'Hull & stand' },
      { src: 'images/victory-bow.jpg',        label: 'Bow & jib' },
      { src: 'images/victory-tools.jpg',      label: 'Tools & instruments' }
    ],
    desc: 'A first-rate ship of the line, built plank-on-frame with laser-cut wood, brass fittings, and full standing and running rigging. Expect 200+ build hours for a museum-grade result.'
  },
  {
    id: 2,
    name: 'Titanic',
    category: 'Display Models',
    brand: 'Premier Line',
    era: 'Launched 1911',
    scale: '1:400',
    material: 'Cast Resin',
    difficulty: 'Intermediate',
    dimensions: '32 in × 4 in × 9 in',
    parts: 'Approx. 240',
    sku: 'FK-0087-TT',
    price: 89.50,
    stock: 8,
    icon: 'liner',
    desc: 'Pre-cast hull sections with painted detailing and a weighted display stand. Assembly is glue-and-paint rather than plank work — a strong entry point into display-grade modeling.'
  },
  {
    id: 3,
    name: 'Harbor Patrol RC',
    category: 'RC Ships',
    brand: 'Aqua Speed',
    era: 'Modern hull',
    scale: '1:36',
    material: 'ABS Plastic + Electronics',
    difficulty: 'Beginner',
    dimensions: '24 in × 7 in × 10 in',
    parts: 'Kit + 2.4GHz controller',
    sku: 'FK-0212-HP',
    price: 159.00,
    stock: 5,
    icon: 'patrol',
    desc: 'A pond-ready radio-control hull with sealed electronics bay, twin-prop drive, and a 20-minute run time per charge. Controller and charger included.'
  },
  {
    id: 4,
    name: 'Container Carrier',
    category: 'Die-Cast',
    brand: 'Registry Series',
    era: 'Modern hull',
    scale: '1:700',
    material: 'Zinc Alloy',
    difficulty: 'Beginner',
    dimensions: '8 in × 1.5 in × 2 in',
    parts: '1 piece, pre-assembled',
    sku: 'FK-0331-CC',
    price: 44.99,
    stock: 20,
    icon: 'cargo',
    desc: 'A pre-finished collectible with printed container detail and a weighted keel for a true waterline sit. No assembly required.'
  },
  {
    id: 5,
    name: 'Rigging & Fitting Set',
    category: 'Accessories',
    brand: 'Shipwright Tools',
    era: '—',
    scale: 'Universal',
    material: 'Waxed Thread, Brass, Wood',
    difficulty: 'Beginner',
    dimensions: 'Boxed set',
    parts: '86 pieces',
    sku: 'FK-0450-RF',
    price: 19.99,
    stock: 30,
    icon: 'tools',
    desc: 'Blocks, deadeyes, waxed rigging thread, and brass cleats sized for 1:75–1:100 kits. The set most builders reach for on a second pass.'
  }
];

// ---- merge things saved in the browser: admin-added entries + remaining stock after orders ----
(function () {
  function load(key, fallback) { try { const v = localStorage.getItem(key); return v ? JSON.parse(v) : fallback; } catch (e) { return fallback; } }
  products.unshift(...load('fk_custom', []));
  const stock = load('fk_stock', {});
  products.forEach(p => { if (stock[p.id] !== undefined) p.stock = stock[p.id]; });
})();
