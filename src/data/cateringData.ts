export interface DishItem {
  id: string;
  name: string;
  tamilName: string;
  category: 'condiment' | 'crisp' | 'vegetable' | 'curry' | 'rice' | 'sweet' | 'digestif';
  description: string;
  leafZone: 'top-left' | 'top-center' | 'top-right' | 'center' | 'bottom-left' | 'bottom-right';
  icon: string;
  image: string;
  isHeritage1924Signature?: boolean;
  calories?: number;
}

export interface FeastPackage {
  id: string;
  name: string;
  tamilName: string;
  tagline: string;
  dishCount: number;
  basePricePerPlate?: number;
  idealFor: string;
  signatureSpecialty: string;
  dishIds: string[];
}

export interface MandapamTheme {
  id: string;
  name: string;
  tamilName: string;
  description: string;
  palette: string;
  image: string;
  highlights: string[];
  recommendedSeason: string;
}

export interface HeritageMilestone {
  year: number;
  title: string;
  tamilTitle: string;
  description: string;
  location: string;
  highlight: string;
}

export const ALL_DISHES: DishItem[] = [
  // Condiments
  {
    id: 'uppu',
    name: 'Kal Uppu (Rock Salt)',
    tamilName: 'கல் உப்பு',
    category: 'condiment',
    description: 'Natural sun-evaporated Tuticorin sea salt placed first to invoke divine blessings and purity.',
    leafZone: 'top-left',
    icon: '🧂',
    image: 'https://images.unsplash.com/photo-1518110925495-5fe2fda0442c?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'inji-puli',
    name: 'Inji Puli Thokku',
    tamilName: 'இஞ்சி புளி தொக்கு',
    category: 'condiment',
    description: '100-year recipe: Sun-dried ginger slow-simmered in jaggery and aged tamarind syrup.',
    leafZone: 'top-left',
    icon: '🍯',
    image: 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=600&q=80',
    isHeritage1924Signature: true
  },
  {
    id: 'vadu-maangai',
    name: 'Kumbakonam Vadu Maangai',
    tamilName: 'வடு மாங்காய் ஊறுகாய்',
    category: 'condiment',
    description: 'Tender baby mangoes steeped in sea salt brine and stone-ground mustard paste.',
    leafZone: 'top-left',
    icon: '🥭',
    image: 'https://images.unsplash.com/photo-1596797038530-2c107229654b?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'nellikkai-thuvaiyal',
    name: 'Paruppu & Nellikkai Thuvaiyal',
    tamilName: 'நெல்லிக்காய் துவையல்',
    category: 'condiment',
    description: 'Fresh Indian gooseberry pounded on granite stone with roasted lentils and red chilies.',
    leafZone: 'top-left',
    icon: '🌿',
    image: 'https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?auto=format&fit=crop&w=600&q=80'
  },

  // Crisps & Starters
  {
    id: 'medu-vadai',
    name: 'Peppercorn Medu Vadai',
    tamilName: 'மெது வடை',
    category: 'crisp',
    description: 'Crisp-shelled, cloud-soft urad dal donut infused with crushed Tellicherry black pepper and curry leaves.',
    leafZone: 'bottom-left',
    icon: '🥯',
    image: 'https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'vazhaipoo-vadai',
    name: 'Madurai Vazhaipoo Vadai',
    tamilName: 'வாழைப்பூ வடை',
    category: 'crisp',
    description: 'Crispy patties crafted from fresh farm-plucked banana blossom and aromatic country spices.',
    leafZone: 'bottom-left',
    icon: '🌸',
    image: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=600&q=80',
    isHeritage1924Signature: true
  },
  {
    id: 'appalam',
    name: 'Papad / Madras Appalam',
    tamilName: 'அப்பளம்',
    category: 'crisp',
    description: 'Golden fried handmade cumin urad appalam, puffed to delicate crackling lightness.',
    leafZone: 'bottom-left',
    icon: '🍘',
    image: 'https://images.unsplash.com/photo-1565557623262-b51c2513a641?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'elai-vadam',
    name: 'Steam-Cooked Elai Vadam',
    tamilName: 'இலை வடம்',
    category: 'crisp',
    description: 'Traditional rice-batter thin discs steamed over banana leaves then crisp-fried to perfection.',
    leafZone: 'bottom-left',
    icon: '✨',
    image: 'https://images.unsplash.com/photo-1606491956689-2ea866880c84?auto=format&fit=crop&w=600&q=80'
  },

  // Vegetables & Poriyals
  {
    id: 'avial',
    name: 'Royal Thiruvithamkoor Avial',
    tamilName: 'திருவிதாங்கூர் அவியல்',
    category: 'vegetable',
    description: 'Twelve seasonal vegetables steamed with freshly crushed coconut, green chilies, and virgin cold-pressed coconut oil.',
    leafZone: 'top-center',
    icon: '🥗',
    image: 'https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?auto=format&fit=crop&w=600&q=80',
    isHeritage1924Signature: true
  },
  {
    id: 'vazhaikkai-roast',
    name: 'Vazhaikkai Podi Roast',
    tamilName: 'வாழைக்காய் வறுவல்',
    category: 'vegetable',
    description: 'Tender raw plantain disks roasted golden with our ancestral 1924 spiced masala podi.',
    leafZone: 'top-center',
    icon: '🍌',
    image: 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'chettinad-urulai',
    name: 'Chettinad Urulaikizhangu Roast',
    tamilName: 'செட்டிநாடு உருளை வறுவல்',
    category: 'vegetable',
    description: 'Baby potatoes parboiled and crusted with roasted fennel, shallots, and fresh curry leaves.',
    leafZone: 'top-center',
    icon: '🥔',
    image: 'https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'chow-chow-kootu',
    name: 'Chow Chow Paruppu Kootu',
    tamilName: 'சௌ சௌ கூட்டு',
    category: 'vegetable',
    description: 'Mild stew of chayote squash and split yellow moong dal with cumin-coconut tempering.',
    leafZone: 'top-center',
    icon: '🥣',
    image: 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'vellarikka-pachadi',
    name: 'Vellarikka Inji Thayir Pachadi',
    tamilName: 'வெள்ளரிக்காய் பச்சடி',
    category: 'vegetable',
    description: 'Cooling grated cucumber and ginger folded into whipped fresh village curd with mustard crackle.',
    leafZone: 'top-center',
    icon: '🥒',
    image: 'https://images.unsplash.com/photo-1596797038530-2c107229654b?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'kosumalli',
    name: 'Tanjore Moong Kosumalli',
    tamilName: 'கோசுமல்லி',
    category: 'vegetable',
    description: 'Auspicious celebratory salad of split moong, finely shredded carrots, green chilies, and lemon juice.',
    leafZone: 'top-center',
    icon: '🥕',
    image: 'https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=600&q=80'
  },

  // Mains & Curries
  {
    id: 'ponni-rice',
    name: 'Steamed Thanjavur Ponni Rice',
    tamilName: 'தஞ்சாவூர் பொன்னி சாதம்',
    category: 'rice',
    description: 'Aged single-origin Thanjavur Ponni rice, steam-cooked in traditional wood-fired copper cauldrons.',
    leafZone: 'center',
    icon: '🍚',
    image: 'https://images.unsplash.com/photo-1516684732162-798a0062be99?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'pasu-nei-paruppu',
    name: 'Nattu Pasu Ghee & Nei Paruppu',
    tamilName: 'பசு நெய் & நெய் பருப்பு',
    category: 'curry',
    description: 'First serving: Slow-cooked yellow toor dal crowned with warm ladle of country cow ghee.',
    leafZone: 'center',
    icon: '🧈',
    image: 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=600&q=80',
    isHeritage1924Signature: true
  },
  {
    id: 'kumbakonam-sambar',
    name: 'Kumbakonam Murungakkai Sambar',
    tamilName: 'கும்பகோணம் முருங்கை சாம்பார்',
    category: 'curry',
    description: 'The centenary legend: Tender drumsticks and Madras shallots simmered with fresh-roasted coriander sambar podi.',
    leafZone: 'center',
    icon: '🍲',
    image: 'https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?auto=format&fit=crop&w=600&q=80',
    isHeritage1924Signature: true
  },
  {
    id: 'milagu-rasam',
    name: 'Tellicherry Milagu Poondu Rasam',
    tamilName: 'மிளகு பூண்டு ரசம்',
    category: 'curry',
    description: 'Simmered in pure tin-coated brass (Eyya Chombu) vessel with crushed black pepper and garlic.',
    leafZone: 'center',
    icon: '🫕',
    image: 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=600&q=80',
    isHeritage1924Signature: true
  },
  {
    id: 'mor-kozhambu',
    name: 'Vendakkai Mor Kozhambu',
    tamilName: 'வெண்டைக்காய் மோர் குழம்பு',
    category: 'curry',
    description: 'Okra simmered in a velvety golden gravy of churned village buttermilk, soaked lentils, and coconut.',
    leafZone: 'center',
    icon: '🥣',
    image: 'https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'chettinad-kathirikai',
    name: 'Ennai Kathirikai Kara Kozhambu',
    tamilName: 'எண்ணெய் கத்திரிக்காய் குழம்பு',
    category: 'curry',
    description: 'Purple baby brinjals slit and pan-seared with sesame oil and deep roasted Chettinad spices.',
    leafZone: 'center',
    icon: '🍆',
    image: 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=600&q=80'
  },

  // Sweets & Payasams
  {
    id: 'asoka-halwa',
    name: 'Tiruvaiyaru Asoka Halwa',
    tamilName: 'அசோகா அல்வா',
    category: 'sweet',
    description: 'Velvety golden moong dal halwa roasted in copious desi ghee and jeweled with crunchy cashews.',
    leafZone: 'top-right',
    icon: '🍮',
    image: 'https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=600&q=80',
    isHeritage1924Signature: true
  },
  {
    id: 'elaneer-payasam',
    name: 'Royal Elaneer Payasam',
    tamilName: 'இளநீர் பாயாசம்',
    category: 'sweet',
    description: 'Tender coconut water, silky malai pulp, and reduced whole milk infused with green cardamom.',
    leafZone: 'top-right',
    icon: '🥥',
    image: 'https://images.unsplash.com/photo-1541658016709-82535e94bc69?auto=format&fit=crop&w=600&q=80',
    isHeritage1924Signature: true
  },
  {
    id: 'palada-payasam',
    name: 'Ambalapuzha Style Palada Pradhaman',
    tamilName: 'பாலடை பாயாசம்',
    category: 'sweet',
    description: 'Handmade rice ribbons slow-simmered for 5 hours until the milk turns into a pale rose caramel.',
    leafZone: 'top-right',
    icon: '🥛',
    image: 'https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'jangiri',
    name: 'Ghee Saffron Jangiri',
    tamilName: 'நெய் ஜாங்கிரி',
    category: 'sweet',
    description: 'Intricately piped floral urad spirals fried in ghee and steeped in saffron-scented sugar nectar.',
    leafZone: 'top-right',
    icon: '🏵️',
    image: 'https://images.unsplash.com/photo-1599488615731-7e5c2823ff28?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'mysore-pak',
    name: 'Melt-in-Mouth Nei Mysore Pak',
    tamilName: 'நெய் மைசூர் பாக்',
    category: 'sweet',
    description: 'Silken porous confection of roasted besan, boiling hot pure butter ghee, and sugar.',
    leafZone: 'top-right',
    icon: '🧈',
    image: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=600&q=80'
  },

  // Digestifs & Refreshers
  {
    id: 'pasu-thayir',
    name: 'Mattu Thayir Sadham & Maangai Inji',
    tamilName: 'பசு தயிர் சாதம்',
    category: 'digestif',
    description: 'Silky whipped country curd rice tempered with mustard, ginger, green chilies, and ruby pomegranate pearls.',
    leafZone: 'bottom-right',
    icon: '🍚',
    image: 'https://images.unsplash.com/photo-1516684732162-798a0062be99?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'degree-coffee',
    name: 'Kumbakonam Brass Degree Filter Kaapi',
    tamilName: 'கும்பகோணம் டிகிரி காபி',
    category: 'digestif',
    description: 'The golden finale: First decoction of chicory-peaberry roast pulled with boiling frothy farm milk in brass davarah-tumbler.',
    leafZone: 'bottom-right',
    icon: '☕',
    image: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=600&q=80',
    isHeritage1924Signature: true
  },
  {
    id: 'neer-mor',
    name: 'Curry Leaf & Inji Neer Mor',
    tamilName: 'தாளித்த நீர் மோர்',
    category: 'digestif',
    description: 'Cool earthen-pot buttermilk churned with crushed shallots, green chilies, coriander, and asafoetida.',
    leafZone: 'bottom-right',
    icon: '🥛',
    image: 'https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'panakam',
    name: 'Temple Tulasi Panakam',
    tamilName: 'துளசி பானகம்',
    category: 'digestif',
    description: 'Organic Palm jaggery nectar chilled with crushed dry ginger, green cardamom, and sacred basil leaves.',
    leafZone: 'bottom-right',
    icon: '🍯',
    image: 'https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'beeda',
    name: 'Madurai Kalanji Vetrilai Beeda',
    tamilName: 'வெற்றிலை பாக்கு பீடா',
    category: 'digestif',
    description: 'Fresh pepper betel leaves folded with damask rose gulkand, menthol, and digestive aromatics.',
    leafZone: 'bottom-right',
    icon: '🍃',
    image: 'https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?auto=format&fit=crop&w=600&q=80'
  }
];

export const FEAST_PACKAGES: FeastPackage[] = [
  {
    id: 'shatabdi-kalyana',
    name: 'Centennial Shatabdi Feast (100-Year Signature)',
    tamilName: 'நூற்றாண்டு சதாப்தி கல்யாண விருந்து',
    tagline: 'The timeless 28-course royal wedding banquet that defined South Indian high society since 1924.',
    dishCount: 28,
    idealFor: 'Grand Muhurtham Weddings (500 to 5,000+ Guests)',
    signatureSpecialty: 'Includes 1924 Stone-Ground Rasam, Royal Elaneer Payasam & Brass Filter Kaapi theatre.',
    dishIds: [
      'uppu', 'inji-puli', 'vadu-maangai', 'nellikkai-thuvaiyal',
      'medu-vadai', 'vazhaipoo-vadai', 'appalam', 'elai-vadam',
      'avial', 'vazhaikkai-roast', 'chow-chow-kootu', 'vellarikka-pachadi', 'kosumalli',
      'ponni-rice', 'pasu-nei-paruppu', 'kumbakonam-sambar', 'milagu-rasam', 'mor-kozhambu',
      'asoka-halwa', 'elaneer-payasam', 'jangiri', 'mysore-pak',
      'pasu-thayir', 'degree-coffee', 'neer-mor', 'beeda'
    ]
  },
  {
    id: 'chettinad-raja',
    name: 'Chettinad Raja Virundhu (Palace Banquet)',
    tamilName: 'செட்டிநாடு ராஜா விருந்து',
    tagline: 'Opulent aristocratic feast honoring the merchant princes of Karaikudi with hand-pounded masalas.',
    dishCount: 24,
    idealFor: 'Royal Receptions & High Heritage Nuptials',
    signatureSpecialty: 'Ennai Kathirikai Kara Kozhambu, Vazhaipoo Vadai & Tiruvaiyaru Nei Halwa.',
    dishIds: [
      'uppu', 'inji-puli', 'vadu-maangai',
      'vazhaipoo-vadai', 'appalam', 'elai-vadam',
      'chettinad-urulai', 'avial', 'vellarikka-pachadi',
      'ponni-rice', 'pasu-nei-paruppu', 'kumbakonam-sambar', 'chettinad-kathirikai', 'milagu-rasam',
      'asoka-halwa', 'palada-payasam', 'jangiri',
      'pasu-thayir', 'degree-coffee', 'panakam', 'beeda'
    ]
  },
  {
    id: 'meenakshi-vaibhavam',
    name: 'Madurai Meenakshi Kalyana Vaibhavam',
    tamilName: 'மீனாட்சி கல்யாண வைபவம்',
    tagline: 'Temple-tradition divine wedding spread steeped in sacred mantras, cow ghee, and fragrant spices.',
    dishCount: 22,
    idealFor: 'Traditional Muhurthams & Temple Mandapam Celebrations',
    signatureSpecialty: 'Thiruvithamkoor Avial, Asoka Halwa & Kumbakonam Degree Filter Kaapi.',
    dishIds: [
      'uppu', 'vadu-maangai', 'nellikkai-thuvaiyal',
      'medu-vadai', 'appalam',
      'avial', 'vazhaikkai-roast', 'chow-chow-kootu', 'vellarikka-pachadi',
      'ponni-rice', 'pasu-nei-paruppu', 'kumbakonam-sambar', 'milagu-rasam', 'mor-kozhambu',
      'asoka-halwa', 'elaneer-payasam', 'mysore-pak',
      'pasu-thayir', 'degree-coffee', 'neer-mor', 'beeda'
    ]
  },
  {
    id: 'satvik-divine',
    name: 'Bespoke Satvik Sacred Feast (Devasvav)',
    tamilName: 'சாத்விக மகா நிவேதன விருந்து',
    tagline: 'Zero onion, zero garlic sacred temple feast prepared strictly in virgin bronze degchis with A2 cow milk.',
    dishCount: 20,
    idealFor: 'Sashtiapthapoorthi (60th Birthdays), Seemanthams & Sacred Grihapravesam',
    signatureSpecialty: 'Pounded Pepper Cumin Rasam, Nei Paruppu, Palada Pradhaman & Tulasi Panakam.',
    dishIds: [
      'uppu', 'inji-puli', 'vadu-maangai',
      'medu-vadai', 'appalam',
      'avial', 'chow-chow-kootu', 'vellarikka-pachadi', 'kosumalli',
      'ponni-rice', 'pasu-nei-paruppu', 'kumbakonam-sambar', 'milagu-rasam',
      'elaneer-payasam', 'asoka-halwa', 'mysore-pak',
      'pasu-thayir', 'panakam', 'degree-coffee', 'beeda'
    ]
  }
];

export const MANDAPAM_THEMES: MandapamTheme[] = [
  {
    id: 'chola-temple',
    name: 'Chola Dynasty Temple Mandapam',
    tamilName: 'சோழப் பேரரசு ஆலய மண்டபம்',
    description: 'Sculpted brass pillars, 15,000 strings of golden marigold & Madurai malli, antique Urli water basins with floating lotus.',
    palette: 'Cream, Antique Gold & Deep Vermilion',
    image: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1200&q=80',
    highlights: ['20-ft Handcrafted Brass Kuthuvilakku Entrance', 'Live Nadaswaram & Thavil Orchestra Dais', 'Vedic Agni Kundam with Sandalwood Embers'],
    recommendedSeason: 'Thai & Chithirai (Winter to Spring)'
  },
  {
    id: 'chettinad-heritage',
    name: 'Chettinad Teak & Athangudi Palace',
    tamilName: 'செட்டிநாடு அரண்மனை பந்தல்',
    description: 'Authentic 19th-century Burma teakwood pillars, geometric Athangudi handmade floor runner, handloom Kanchipuram silk drapes.',
    palette: 'Warm Espresso Wood, Cream & Terracotta',
    image: 'https://images.unsplash.com/photo-1544077960-604201fe74bc?auto=format&fit=crop&w=1200&q=80',
    highlights: ['Chettinad Antique Brass Collectibles', 'Vintage Thanjavur Painting Photo Backdrop', 'Hand-woven Coconut Leaf Pandal Ceiling'],
    recommendedSeason: 'Vaigasi & Aavani (Pre-Harvest Festive)'
  },
  {
    id: 'lotus-water-pavilion',
    name: 'Sacred Lotus Water Pavilion',
    tamilName: 'தாமரை மலர்ப் பந்தல்',
    description: 'A serene sanctum featuring stepped stone reflecting ponds, floating brass lamps, and cascading fragrant tube-roses.',
    palette: 'Ivory Cream, Lotus Rose & Emerald Green',
    image: 'https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&w=1200&q=80',
    highlights: ['1,008 Pink Sacred Lotus Floral Canopy', 'Mirror-finish Brass Davarah Kaapi Lounge', 'Floating Brass Urli Candle Installations'],
    recommendedSeason: 'Karthigai & Margazhi (Temple Bell Season)'
  },
  {
    id: 'minimalist-royal-brass',
    name: 'Old-Money Cream & Minimalist Brass',
    tamilName: 'செழுமைமிகு பாரம்பரிய தற்கால வடிவம்',
    description: 'Understated aristocratic elegance: linen cream textures, brushed matte Kumbakonam brass accents, sculptural banana blossom florals.',
    palette: 'Pure Cream, Deep Walnut Brown & Antique Brass',
    image: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=1200&q=80',
    highlights: ['Bespoke Geometric Kolam Runway with Rice-Flour Inlay', 'Ambient Acoustic String Seating Area', 'Live Silverware & Banana Leaf Dining Pavilion'],
    recommendedSeason: 'Year-Round Destination Muhurthams'
  }
];

export const HERITAGE_TIMELINE: HeritageMilestone[] = [
  {
    year: 1924,
    title: 'The Sacred Hearth Ignited in Kumbakonam',
    tamilTitle: 'கும்பகோணத்தில் புனித தொடக்கம்',
    description: 'Sundaram Achariyar begins cooking wedding feasts for the royal temple patrons of Thanjavur using virgin firewood hearths (Viragu Aduppu) and bronze degchis.',
    location: 'Kumbakonam, Thanjavur District',
    highlight: 'Birth of the 1924 Secret Stone-Ground Rasam Podi recipe.'
  },
  {
    year: 1947,
    title: 'Independence State Banquets & Royal Patronage',
    tamilTitle: 'சுதந்திர திருநாள் அரசு விருந்து',
    description: 'Entrusted with catering the historic celebrations at Fort St. George and high-profile Zamindar weddings across the Madras Presidency.',
    location: 'Madras (Chennai)',
    highlight: 'Serving 5,000 dignitaries on freshly cut Cauvery delta plantain leaves.'
  },
  {
    year: 1972,
    title: 'Pioneering the 32-Course Royal Leaf Protocol',
    tamilTitle: '32 பதார்த்த தலைவாழை விருந்து முறை',
    description: 'Second-generation patriarch K. Sundaram systematizes the exact ritual sequence of leaf placement, ensuring every diner receives dishes at peak aroma.',
    location: 'Mylapore, Madras',
    highlight: 'Establishment of the Sundaram Master Chef Guild.'
  },
  {
    year: 1995,
    title: 'Architectural Mandapam & Event Planning Division',
    tamilTitle: 'பாரம்பரிய திருமண நிகழ்வு வடிவமைப்பு',
    description: 'Expanded from premier catering into complete event architectural planning: procuring vintage Chettinad pillars, heirloom brassware, and temple floral artists.',
    location: 'Pan-South India',
    highlight: 'Curating turnkey multi-day nuptials from Nichayathartham to Reception.'
  },
  {
    year: 2012,
    title: 'Farm-to-Leaf Organic Mission & Heritage Revival',
    tamilTitle: 'இயற்கை வேளாண்மை & பாரம்பரிய மீட்பு',
    description: 'Partnered directly with heritage organic paddy growers in Thanjavur and native dairy goshala for pure A2 cow ghee, banishing all artificial essences.',
    location: 'Cauvery River Basin',
    highlight: '100% Biodegradable, zero-plastic banquet pledge.'
  },
  {
    year: 2026,
    title: '102 Years of Culinary Splendour & Smart Logistics',
    tamilTitle: 'நூற்றாண்டு கடந்த புனித விருந்தோம்பல்',
    description: 'Fourth-generation family leadership merges century-old recipes with cutting-edge tech: real-time banquet calculators, temperature-controlled brass transport, and global destination wedding planning.',
    location: 'Global (Chennai, Kumbakonam, Bangalore, Singapore, Dubai)',
    highlight: 'Over 10,000 weddings and 4 generations of satisfied families.'
  }
];

export const TESTIMONIALS = [
  {
    quote: "Sundaram & Sons catered my grandfather’s wedding in 1958, my parents' in 1989, and last week they orchestrated my daughter’s 3-day wedding in Chennai. Their Asoka Halwa and Kumbakonam Sambar taste exactly the same as in my childhood memories — pure soul.",
    author: "Dr. R. Natarajan & Family",
    event: "Three-Generational Family Wedding (1,800 Guests)",
    location: "Mylapore, Chennai",
    year: "Client since 1958"
  },
  {
    quote: "As an event planner in high demand, finding a catering and decor team that respects 100-year traditions while operating with military clockwork logistics is rare. Sundaram’s leaf service captains served 2,500 guests piping hot rasam in under 18 minutes.",
    author: "Mrs. Soundarya Ramachandran",
    event: "Royal Chettinad Muhurtham & Reception",
    location: "Karaikudi Heritage Palace",
    year: "Recent Client (2025)"
  },
  {
    quote: "The cream and brass mandapam decor looked like an old-money dream. Every guest raved about the Woodfire Filter Kaapi bar and the Elaneer Payasam. Truly the gold standard of South Indian hospitality.",
    author: "K. S. Venkataraman",
    event: "Sashtiapthapoorthi & Shasti Poorthi Gala",
    location: "Coimbatore",
    year: "Client since 1994"
  }
];
