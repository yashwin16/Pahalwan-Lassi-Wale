export interface MenuItem {
  category: string;
  subCategory?: string;
  name: string;
  unit: string;
  price?: number;
  pricing?: {
    "250gm"?: number;
    "500gm"?: number;
    "1kg"?: number;
  };
  image?: string;
}

export const menuData: MenuItem[] = [
  {
    "category": "Beverages",
    "name": "Special Pahalwan lassi",
    "unit": "per glass",
    "price": 60,
    "image": "/images/lassi/splLassi.webp"
  },
  {
    "category": "Beverages",
    "name": "Special pineapple lassi",
    "unit": "per glass",
    "price": 60,
    "image": "/images/lassi/pineApple.webp"
  },
  {
    "category": "Beverages",
    "name": "Special Mango lassi",
    "unit": "per glass",
    "price": 60,
    "image": "/images/lassi/mango.webp"
  },
  {
    "category": "Beverages",
    "name": "Special kesarbadam lassi",
    "unit": "per glass",
    "price": 60,
    "image": "/images/lassi/kesar.webp"
  },
  {
    "category": "Beverages",
    "name": "Special kulhad lassi",
    "unit": "per glass",
    "price": 60,
    "image": "/images/lassi/kulhad.webp"
  },
  {
    "category": "Beverages",
    "name": "Special sugarfree lassi",
    "unit": "per glass",
    "price": 60,
    "image": "/images/lassi/sugarFree.webp"
  },
  {
    "category": "Beverages",
    "name": "Special big lassi",
    "unit": "per glass",
    "price": 80,
    "image": "/images/lassi/bigLassi.webp"
  },
  {
    "category": "Beverages",
    "name": "Sepcial Badam milk",
    "unit": "per glass",
    "price": 80,
    "image": "/images/lassi/badam.webp"
  },
  {
    "category": "Dessert",
    "name": "lachcha rabdi",
    "unit": "kg",
    "pricing": {
      "250gm": 130,
      "500gm": 260,
      "1kg": 520
    },
    "image": "/images/sweets/desserts/lacchaRabri.webp"
  },
  {
    "category": "Dessert",
    "name": "Special Rasmalai",
    "unit": "per piece",
    "price": 60,
    "image": "/images/sweets/desserts/rasmalai.webp"
  },
  {
    "category": "Dessert",
    "name": "Sponge rasgulla",
    "unit": "per piece",
    "price": 35,
    "image": "/images/sweets/desserts/spongeRasgulla.webp"
  },
  {
    "category": "Dessert",
    "name": "Gulab jamun",
    "unit": "per piece",
    "price": 30,
    "image": "/images/sweets/desserts/gulabjamun.webp"
  },
  {
    "category": "Dessert",
    "name": "Kulfi falooda",
    "unit": "per glass",
    "price": 110,
    "image": "/images/sweets/desserts/kulfiFaluda.webp"
  },
  {
    "category": "Dessert",
    "name": "Rabdi falooda",
    "unit": "per glass",
    "price": 130,
    "image": "/images/sweets/desserts/rabriFaluda.webp"
  },
  {
    "category": "Dessert",
    "name": "Gajar halwa",
    "unit": "kg",
    "pricing": {
      "250gm": 113,
      "500gm": 226,
      "1kg": 452
    },
    "image": "/images/sweets/desserts/gazarHalwa.webp"
  },
  {
    "category": "Dessert",
    "name": "makkhan tarbooj(winter special)",
    "unit": "per ball",
    "price": 120,
    "image": "/images/sweets/desserts/tarbuj.webp"
  },
  {
    "category": "Dessert",
    "name": "Doodh pakodi",
    "unit": "kg",
    "pricing": {
      "250gm": 120,
      "500gm": 240,
      "1kg": 480
    },
    "image": "/images/sweets/desserts/dudhPakori.webp"
  },
  {
    "category": "Snacks",
    "name": "Samosa",
    "unit": "per piece",
    "price": 15,
    "image": "/images/snacks/samose.webp"
  },
  {
    "category": "Snacks",
    "name": "Bread pakoda",
    "unit": "per piece",
    "price": 15,
    "image": "/images/snacks/bread.webp"
  },
  {
    "category": "Snacks",
    "name": "Kachodi",
    "unit": "per piece",
    "price": 25,
    "image": "/images/snacks/kachori.webp"
  },
  {
    "category": "Snacks",
    "name": "Aloo Khasta",
    "unit": "per piece",
    "price": 25,
    "image": "/images/snacks/alooKhasta.webp"
  },
  {
    "category": "Snacks",
    "name": "Dal khasta",
    "unit": "per piece",
    "price": 25,
    "image": "/images/snacks/dalKhasta.webp"
  },
  {
    "category": "Snacks",
    "name": "Special Paneer veg bread pakoda",
    "unit": "per piece",
    "price": 55,
    "image": "/images/snacks/paneerBread.webp"
  },
  {
    "category": "Chena",
    "name": "Rasgulla (small)",
    "unit": "kg",
    "pricing": {
      "250gm": 100,
      "500gm": 200,
      "1kg": 400
    },
    "image": "/images/sweets/chena/smallRasgulla.webp"
  },
  {
    "category": "Chena",
    "name": "Chena coconut rasgulla",
    "unit": "kg",
    "pricing": {
      "250gm": 100,
      "500gm": 200,
      "1kg": 400
    },
    "image": "/images/sweets/chena/chenaCoconut.webp"
  },
  {
    "category": "Chena",
    "name": "Chena green rasgulla",
    "unit": "kg",
    "pricing": {
      "250gm": 100,
      "500gm": 200,
      "1kg": 400
    },
    "image": "/images/sweets/chena/chenaGreenRasgulla.webp"
  },
  {
    "category": "Chena",
    "name": "Chena white rasgulla",
    "unit": "kg",
    "pricing": {
      "250gm": 100,
      "500gm": 200,
      "1kg": 400
    },
    "image": "/images/sweets/chena/chenaWhite.webp"
  },
  {
    "category": "Chena",
    "name": "Chena yellow rasgulla",
    "unit": "kg",
    "pricing": {
      "250gm": 100,
      "500gm": 200,
      "1kg": 400
    },
    "image": "/images/sweets/chena/chenaYellowRasgulla.webp"
  },
  {
    "category": "Chena",
    "name": "Chena coconut roll",
    "unit": "kg",
    "pricing": {
      "250gm": 100,
      "500gm": 200,
      "1kg": 400
    },
    "image": "/images/sweets/chena/chenaCoconutRoll.webp"
  },
  {
    "category": "Chena",
    "name": "Chena white roll",
    "unit": "kg",
    "pricing": {
      "250gm": 100,
      "500gm": 200,
      "1kg": 400
    },
    "image": "/images/sweets/chena/chenaWhiteRoll.webp"
  },
  {
    "category": "Chena",
    "name": "Chena green roll",
    "unit": "kg",
    "pricing": {
      "250gm": 100,
      "500gm": 200,
      "1kg": 400
    },
    "image": "/images/sweets/chena/chenaGreenRoll.webp"
  },
  {
    "category": "Chena",
    "name": "chena yellow roll",
    "unit": "kg",
    "pricing": {
      "250gm": 100,
      "500gm": 200,
      "1kg": 400
    },
    "image": "/images/sweets/chena/chenaYellowRoll.webp"
  },
  {
    "category": "Chena",
    "name": "Chena white kesar roll",
    "unit": "kg",
    "pricing": {
      "250gm": 100,
      "500gm": 200,
      "1kg": 400
    },
    "image": "/images/sweets/chena/whiteKesarRoll.webp"
  },
  {
    "category": "Chena",
    "name": "Chena white Coconut kesarvati",
    "unit": "kg",
    "pricing": {
      "250gm": 100,
      "500gm": 200,
      "1kg": 400
    },
    "image": "/images/sweets/chena/whiteCoconutKesarwati.webp"
  },
  {
    "category": "Chena",
    "name": "Chena green kesarvati",
    "unit": "kg",
    "pricing": {
      "250gm": 100,
      "500gm": 200,
      "1kg": 400
    },
    "image": "/images/sweets/chena/greenKesarwati.webp"
  },
  {
    "category": "Chena",
    "name": "Chena yellow kesarvati",
    "unit": "kg",
    "pricing": {
      "250gm": 100,
      "500gm": 200,
      "1kg": 400
    },
    "image": "/images/sweets/chena/yellowKesarwati.webp"
  },
  {
    "category": "Chena",
    "name": "Chena orange Coconut kesarvati",
    "unit": "kg",
    "pricing": {
      "250gm": 100,
      "500gm": 200,
      "1kg": 400
    },
    "image": "/images/sweets/chena/orangeKesarwati.webp"
  },
  {
    "category": "Barfi sweets",
    "name": "Mawa barfi",
    "unit": "kg",
    "pricing": {
      "250gm": 112.5,
      "500gm": 225,
      "1kg": 450
    },
    "image": "/images/sweets/barfi/mawaBarfii.webp"
  },
  {
    "category": "Barfi sweets",
    "name": "Doda barfi",
    "unit": "kg",
    "pricing": {
      "250gm": 112.5,
      "500gm": 225,
      "1kg": 450
    },
    "image": "/images/sweets/barfi/dodaBarfii.webp"
  },
  {
    "category": "Barfi sweets",
    "name": "Milkcake",
    "unit": "kg",
    "pricing": {
      "250gm": 112.5,
      "500gm": 225,
      "1kg": 450
    },
    "image": "/images/sweets/barfi/milkcake.webp"
  },
  {
    "category": "Barfi sweets",
    "name": "Coconut barfi",
    "unit": "kg",
    "pricing": {
      "250gm": 112.5,
      "500gm": 225,
      "1kg": 450
    },
    "image": "/images/sweets/barfi/coconutBarfi.webp"
  },
  {
    "category": "Barfi sweets",
    "name": "kesar mawa barfi",
    "unit": "kg",
    "pricing": {
      "250gm": 112.5,
      "500gm": 225,
      "1kg": 450
    },
    "image": "/images/sweets/barfi/kesarBarfi.webp"
  },
  {
    "category": "Barfi sweets",
    "name": "pedha",
    "unit": "kg",
    "pricing": {
      "250gm": 112.5,
      "500gm": 225,
      "1kg": 450
    },
    "image": "/images/sweets/barfi/peda.webp"
  },
  {
    "category": "Barfi sweets",
    "name": "chocolate mawa barfi",
    "unit": "kg",
    "pricing": {
      "250gm": 112.5,
      "500gm": 225,
      "1kg": 450
    },
    "image": "/images/sweets/barfi/chocolateBarfii.webp"
  },
  {
    "category": "Barfi sweets",
    "name": "elaichi mawa barfi",
    "unit": "kg",
    "pricing": {
      "250gm": 112.5,
      "500gm": 225,
      "1kg": 450
    },
    "image": "/images/sweets/barfi/elaichiBarfi.webp"
  },
  {
    "category": "Barfi sweets",
    "name": "kaju katli",
    "unit": "kg",
    "pricing": {
      "250gm": 250,
      "500gm": 500,
      "1kg": 1000
    },
    "image": "/images/sweets/barfi/kajuKatli.webp"
  },
  {
    "category": "Barfi sweets",
    "name": "strawberry mawa barfi",
    "unit": "kg",
    "pricing": {
      "250gm": 112.5,
      "500gm": 225,
      "1kg": 450
    },
    "image": "/images/sweets/barfi/strawBarfi.webp"
  },
  {
    "category": "Barfi sweets",
    "name": "Mawa roll",
    "unit": "kg",
    "pricing": {
      "250gm": 135,
      "500gm": 270,
      "1kg": 540
    },
    "image": "/images/sweets/barfi/mawaRoll.webp"
  },
  {
    "category": "Barfi sweets",
    "name": "Dry fruit laddu",
    "unit": "kg",
    "pricing": {
      "250gm": 337.5,
      "500gm": 675,
      "1kg": 1350
    },
    "image": "/images/sweets/barfi/dryFruit.webp"
  },
  {
    "category": "ghee sweets",
    "name": "Soan papdi",
    "unit": "kg",
    "pricing": {
      "250gm": 75,
      "500gm": 150,
      "1kg": 300
    },
    "image": "/images/sweets/ghee/soan.webp"
  },
  {
    "category": "ghee sweets",
    "name": "Churma laddu",
    "unit": "kg",
    "pricing": {
      "250gm": 75,
      "500gm": 150,
      "1kg": 300
    },
    "image": "/images/sweets/ghee/churma.webp"
  },
  {
    "category": "ghee sweets",
    "name": "Besan laddu",
    "unit": "kg",
    "pricing": {
      "250gm": 75,
      "500gm": 150,
      "1kg": 300
    },
    "image": "/images/sweets/ghee/besan.webp"
  },
  {
    "category": "ghee sweets",
    "name": "Boondi laddu",
    "unit": "kg",
    "pricing": {
      "250gm": 75,
      "500gm": 150,
      "1kg": 300
    },
    "image": "/images/sweets/ghee/boondi.webp"
  },
  {
    "category": "ghee sweets",
    "name": "Jodhpuri laddu",
    "unit": "kg",
    "pricing": {
      "250gm": 75,
      "500gm": 150,
      "1kg": 300
    },
    "image": "/images/sweets/ghee/jodhpuri.webp"
  },
  {
    "category": "ghee sweets",
    "name": "Balushahi",
    "unit": "kg",
    "pricing": {
      "250gm": 75,
      "500gm": 150,
      "1kg": 300
    },
    "image": "/images/sweets/ghee/baluu.webp"
  },
  {
    "category": "Gajak",
    "name": "Khasta gajak",
    "unit": "kg",
    "pricing": {
      "250gm": 95,
      "500gm": 190,
      "1kg": 380
    },
    "image": "/images/sweets/gazak/khastaGazak.webp"
  },
  {
    "category": "Gajak",
    "name": "Moongfali gajak",
    "unit": "kg",
    "pricing": {
      "250gm": 95,
      "500gm": 190,
      "1kg": 380
    },
    "image": "/images/sweets/gazak/moongfali.webp"
  },
  {
    "category": "Gajak",
    "name": "Chatka gajak(gudh)",
    "unit": "kg",
    "pricing": {
      "250gm": 95,
      "500gm": 190,
      "1kg": 380
    },
    "image": "/images/sweets/gazak/chatka.webp"
  },
  {
    "category": "Gajak",
    "name": "Rebdi",
    "unit": "kg",
    "pricing": {
      "250gm": 95,
      "500gm": 190,
      "1kg": 380
    },
    "image": "/images/sweets/gazak/rebdi.webp"
  },
  {
    "category": "Gajak",
    "name": "Til laddu",
    "unit": "kg",
    "pricing": {
      "250gm": 100,
      "500gm": 200,
      "1kg": 400
    },
    "image": "/images/sweets/gazak/tillLadoo.webp"
  },
  {
    "category": "Gajak",
    "name": "Roll gajak(chini)",
    "unit": "kg",
    "pricing": {
      "250gm": 100,
      "500gm": 200,
      "1kg": 400
    },
    "image": "/images/sweets/gazak/gazakRollChini.webp"
  },
  {
    "category": "Gajak",
    "name": "Roll gajak(gudh)",
    "unit": "kg",
    "pricing": {
      "250gm": 100,
      "500gm": 200,
      "1kg": 400
    },
    "image": "/images/sweets/gazak/gazakRollGudh.webp"
  },
  {
    "category": "Gajak",
    "name": "Khoya gajak",
    "unit": "kg",
    "pricing": {
      "250gm": 105,
      "500gm": 210,
      "1kg": 420
    },
    "image": "/images/sweets/gazak/khoyaGazak.webp"
  },
  {
    "category": "Gajak",
    "name": "Desi ghee kaju gajak(gudh)",
    "unit": "kg",
    "pricing": {
      "250gm": 125,
      "500gm": 250,
      "1kg": 500
    },
    "image": "/images/sweets/gazak/kajuGudh.webp"
  },
  {
    "category": "Gajak",
    "name": "Desi ghee kaju gajak(chini)",
    "unit": "kg",
    "pricing": {
      "250gm": 125,
      "500gm": 250,
      "1kg": 500
    },
    "image": "/images/sweets/gazak/kajuChini.webp"
  },
  {
    "category": "Gajak",
    "name": "Desi ghee chikki gajak",
    "unit": "kg",
    "pricing": {
      "250gm": 115,
      "500gm": 230,
      "1kg": 460
    },
    "image": "/images/sweets/gazak/chikki.webp"
  }
];
