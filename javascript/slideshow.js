// slideshow.js — automatic image slideshow using only JavaScript

// List of images
const images = [
  'https://img.pokemondb.net/sprites/scarlet-violet/normal/articuno.png',
    'https://img.pokemondb.net/sprites/scarlet-violet/normal/zapdos.png',
    'https://img.pokemondb.net/sprites/scarlet-violet/normal/moltres.png',
    'https://img.pokemondb.net/sprites/scarlet-violet/normal/mewtwo.png',
    'https://img.pokemondb.net/sprites/scarlet-violet/normal/mew.png',
    'https://img.pokemondb.net/sprites/scarlet-violet/normal/raikou.png',
    'https://img.pokemondb.net/sprites/scarlet-violet/normal/entei.png',
    'https://img.pokemondb.net/sprites/scarlet-violet/normal/suicune.png',
    'https://img.pokemondb.net/sprites/scarlet-violet/normal/lugia.png',
    'https://img.pokemondb.net/sprites/scarlet-violet/normal/ho-oh.png',
    'https://img.pokemondb.net/sprites/black-white/normal/celebi.png',
    'https://img.pokemondb.net/sprites/scarlet-violet/normal/regirock.png',
    'https://img.pokemondb.net/sprites/scarlet-violet/normal/regice.png',
    'https://img.pokemondb.net/sprites/scarlet-violet/normal/registeel.png',
    'https://img.pokemondb.net/sprites/scarlet-violet/normal/latias.png',
    'https://img.pokemondb.net/sprites/scarlet-violet/normal/latios.png',
    'https://img.pokemondb.net/sprites/scarlet-violet/normal/kyogre.png',
    'https://img.pokemondb.net/sprites/scarlet-violet/normal/groudon.png',
    'https://img.pokemondb.net/sprites/scarlet-violet/normal/rayquaza.png',
    'https://img.pokemondb.net/sprites/scarlet-violet/normal/jirachi.png',
    'https://img.pokemondb.net/sprites/scarlet-violet/normal/deoxys.png',
    'https://img.pokemondb.net/sprites/scarlet-violet/normal/uxie.png',
    'https://img.pokemondb.net/sprites/scarlet-violet/normal/mesprit.png',
    'https://img.pokemondb.net/sprites/scarlet-violet/normal/azelf.png',
    'https://img.pokemondb.net/sprites/scarlet-violet/normal/dialga.png',
    'https://img.pokemondb.net/sprites/scarlet-violet/normal/palkia.png',
    'https://img.pokemondb.net/sprites/scarlet-violet/normal/heatran.png',
    'https://img.pokemondb.net/sprites/scarlet-violet/normal/regigigas.png',
    'https://img.pokemondb.net/sprites/scarlet-violet/normal/giratina.png',
    'https://img.pokemondb.net/sprites/scarlet-violet/normal/cresselia.png',
    'https://img.pokemondb.net/sprites/scarlet-violet/normal/phione.png',
    'https://img.pokemondb.net/sprites/scarlet-violet/normal/manaphy.png',
    'https://img.pokemondb.net/sprites/scarlet-violet/normal/darkrai.png',
    'https://img.pokemondb.net/sprites/scarlet-violet/normal/shaymin.png',
    'https://img.pokemondb.net/sprites/scarlet-violet/normal/arceus.png',
    'https://img.pokemondb.net/sprites/black-white/normal/victini.png',
    'https://img.pokemondb.net/sprites/scarlet-violet/normal/reshiram.png',
    'https://img.pokemondb.net/sprites/scarlet-violet/normal/zekrom.png',
    'https://img.pokemondb.net/sprites/scarlet-violet/normal/kyurem.png',
    'https://img.pokemondb.net/sprites/scarlet-violet/normal/keldeo.png',
    'https://img.pokemondb.net/sprites/scarlet-violet/normal/meloetta.png',
    'https://img.pokemondb.net/sprites/black-white/normal/genesect.png',
    'https://img.pokemondb.net/sprites/x-y/normal/xerneas.png',
    'https://img.pokemondb.net/sprites/x-y/normal/zygarde.png',
    'https://img.pokemondb.net/sprites/scarlet-violet/normal/diancie.png',
    'https://img.pokemondb.net/sprites/scarlet-violet/normal/hoopa.png',
    'https://img.pokemondb.net/sprites/scarlet-violet/normal/volcanion.png',
    'https://img.pokemondb.net/sprites/scarlet-violet/normal/magearna.png',
    'https://img.pokemondb.net/sprites/scarlet-violet/normal/cosmog.png',
    'https://img.pokemondb.net/sprites/scarlet-violet/normal/cosmoem.png',
    'https://img.pokemondb.net/sprites/scarlet-violet/normal/solgaleo.png',
    'https://img.pokemondb.net/sprites/scarlet-violet/normal/lunala.png',
    'https://img.pokemondb.net/sprites/scarlet-violet/normal/necrozma.png',
    'https://img.pokemondb.net/sprites/sun-moon/normal/marshadow.png',
    'https://img.pokemondb.net/sprites/ultra-sun-ultra-moon/normal/zeraora.png',
    'https://img.pokemondb.net/sprites/sword-shield/normal/meltan.png',
    'https://img.pokemondb.net/sprites/sword-shield/normal/melmetal.png',
    'https://img.pokemondb.net/sprites/scarlet-violet/normal/zacian.png',
    'https://img.pokemondb.net/sprites/scarlet-violet/normal/zamazenta.png',
    'https://img.pokemondb.net/sprites/scarlet-violet/normal/eternatus.png',
    'https://img.pokemondb.net/sprites/scarlet-violet/normal/kubfu.png',
    'https://img.pokemondb.net/sprites/scarlet-violet/normal/urshifu.png',
    'https://img.pokemondb.net/sprites/scarlet-violet/normal/zarude.png',
    'https://img.pokemondb.net/sprites/scarlet-violet/normal/regieleki.png',
    'https://img.pokemondb.net/sprites/scarlet-violet/normal/regidrago.png',
    'https://img.pokemondb.net/sprites/scarlet-violet/normal/glastrier.png',
    'https://img.pokemondb.net/sprites/scarlet-violet/normal/spectrier.png',
    'https://img.pokemondb.net/sprites/scarlet-violet/normal/calyrex.png',
    'https://img.pokemondb.net/sprites/scarlet-violet/normal/enamorus.png',
    'https://img.pokemondb.net/sprites/scarlet-violet/normal/koraidon.png',
    'https://img.pokemondb.net/sprites/scarlet-violet/normal/miraidon.png',
    'https://img.pokemondb.net/sprites/scarlet-violet/normal/wo-chien.png',
    'https://img.pokemondb.net/sprites/scarlet-violet/normal/chien-pao.png',
    'https://img.pokemondb.net/sprites/scarlet-violet/normal/ting-lu.png',
    'https://img.pokemondb.net/sprites/scarlet-violet/normal/chi-yu.png',
    'https://img.pokemondb.net/sprites/scarlet-violet/normal/ogerpon.png',
    'https://img.pokemondb.net/sprites/scarlet-violet/normal/fezandipiti.png',
    'https://img.pokemondb.net/sprites/scarlet-violet/normal/munkidori.png',
    'https://img.pokemondb.net/sprites/scarlet-violet/normal/okidogi.png',
    'https://img.pokemondb.net/sprites/scarlet-violet/normal/terrapagos.png',
];

// How long each image is shown (in milliseconds)
const intervalTime = 3000;

let currentIndex = 0;

// Create an <img> element dynamically
const img = document.createElement('img');
img.src = images[currentIndex];
img.alt = 'Slideshow image';
img.style.width = '650px';
img.style.display = 'block';
img.style.borderRadius = '12px';

// Append to the page (for example, to the body or a specific div)
document.body.appendChild(img);

// Change image automatically every few seconds
setInterval(() => {
  currentIndex = (currentIndex + 1) % images.length;
  img.src = images[currentIndex];
}, intervalTime);
