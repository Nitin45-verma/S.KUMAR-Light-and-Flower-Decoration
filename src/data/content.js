// ── Local Gallery & Asset Imports ───────────────────────────────────────────
import imgGallery1 from '../assets/gallery/gallery1.webp';
import imgGallery2 from '../assets/gallery/gallery2.webp';
import imgGallery3 from '../assets/gallery/gallery3.webp';
import imgGallery4 from '../assets/gallery/gallery4.webp';
import imgGallery5 from '../assets/gallery/gallery5.webp';
import imgGallery7 from '../assets/gallery/gallery7.webp';
import imgEntryReal from '../assets/gallery/entry_real_clean.webp';
import imgLightsReal from '../assets/gallery/lights_real.webp';
// ─────────────────────────────────────────────────────────────────────────────

export const businessInfo = {
  name: "S.KUMAR Light and Flower Decoration",
  shortName: "S.KUMAR",
  subTitle: "Light and Flower Decoration",
  plusCode: "QM5X+WP6",
  address: "QM5X+WP6, Kishanpura at Khatipura, Jaipur, Rajasthan - 302029",
  shortLocation: "Khatipura, Jaipur",
  taglineHindi: "आपके हर खास मौके को बनाएं और भी खास, हमारी लाइटिंग से दें एक नई पहचान!",
  taglineEnglish: "Make every special occasion even more special — give it a new identity with our lighting",
  phone: "9079689655",
  phoneFormatted: "+91 9079689655",
  whatsappNumber: "919079689655",
  whatsappUrl: "https://wa.me/919079689655?text=Hello%20S.Kumar%20Light%20and%20Flower%20Decoration%2C%20I%20want%20to%20inquire%20about%20event%20decoration.",
  mapIframeSrc: "https://maps.google.com/maps?q=QM5X%2BWP6%20Kishanpura%20at%20Khatipura%2C%20Rajasthan&t=&z=16&ie=UTF8&iwloc=&output=embed",
  heroBgImage: imgLightsReal,
  aboutImage: imgGallery1,
  stats: [
    { number: 200, suffix: "+", label: "Events Lit Up", labelHindi: "सफल इवेंट्स (Lit Up)" },
    { number: 15, suffix: "+", label: "Years Experience", labelHindi: "वर्षों का अनुभव" },
    { number: 100, suffix: "%", label: "Happy Clients", labelHindi: "संतुष्ट ग्राहक" },
    { number: 50, suffix: "+", label: "Lighting Themes", labelHindi: "विशेष लाइटिंग व फ्लावर थीम्स" }
  ]
};

export const services = [
  {
    id: "lighting",
    title: "Wedding Lighting",
    titleHindi: "वेडिंग लाइटिंग",
    emoji: "💡",
    iconName: "Lightbulb",
    shortDesc: "शाही वेडिंग लाइटिंग, एल.ई.डी. टनल, क्रिस्टल झूमर और एंबियंट फोकस लाइटिंग।",
    fullDesc: "Transform your wedding venue into a glowing fairytale palace with our custom ceiling string light tunnels, royal hanging crystal chandeliers, architectural focus spots, and dynamic LED wedding lights.",
    image: imgLightsReal,
    features: [
      "Fairy Light Canopies & Tunnels",
      "Royal Hanging Crystal Chandeliers",
      "Building Architectural Illumination",
      "RGB LED Dynamic Focus Lighting"
    ]
  },
  {
    id: "flower",
    title: "Flower Decoration",
    titleHindi: "फूलों की सजावट",
    emoji: "🌸",
    iconName: "Flower2",
    shortDesc: "ताजा गुलाब, गेंदा और ऑर्किड से बनी आकर्षक जयमाला, मंडप और प्रवेश द्वार सजावट।",
    fullDesc: "Experience the fragrant luxury of fresh marigold cascades, sweet roses, and orchid arches for mandaps, varmala stages, entry pathways, and car decorations.",
    image: imgGallery2,
    features: [
      "Fresh Exotic Flower Mandaps",
      "Royal Varmala Stage Backdrops",
      "Floral Entrance Pathway Arches",
      "Custom Car & Table Centerpieces"
    ]
  },
  {
    id: "stage",
    title: "Stage Decoration",
    titleHindi: "स्टेज सजावट",
    emoji: "🎪",
    iconName: "Sparkles",
    shortDesc: "शाही थ्रोन बैकड्रॉप, मखमली कर्टेन, ब्रास पॉट्स और रॉयल वेडिंग स्टेज सेटअप।",
    fullDesc: "Create unforgettable photo backdrops with plush velvet curtains, metallic gold pillars, crystal paneling, and opulent sofa arrangements for the bride and groom.",
    image: imgGallery1,
    features: [
      "Plush Velvet & Gold Backdrop",
      "Luxury Bride & Groom Sofa",
      "Brass Urli & Decorative Pillars",
      "Illuminated Crystal & Acrylic Panels"
    ]
  },
  {
    id: "dj",
    title: "DJ System",
    titleHindi: "डीजे एवं साउंड सिस्टम",
    emoji: "🎧",
    iconName: "Music",
    shortDesc: "पावरफुल बेस साउंड, डिस्को बीट्स, लेजर लाइट, फॉग मशीन और लाइव म्यूजिक सेटअप।",
    fullDesc: "Keep your guests dancing all night with high-output line array speakers, heavy bass subwoofers, RGB moving head lasers, and cold pyro sparklers.",
    image: imgGallery4,
    features: [
      "High-Power Line Array Sound",
      "Dry Ice Fog & Smoke Effects",
      "RGB Lasers & Moving Head Spotlights",
      "Custom Sangeet & Party Playlist Setup"
    ]
  },
  {
    id: "bride-entry",
    title: "Bride Entry (Dulhan Entry)",
    titleHindi: "दुल्हन एंट्री",
    emoji: "👰",
    iconName: "Crown",
    shortDesc: "शाही दुल्हन एंट्री, ब्राइडल फूलों की चादर, कोल्ड पायरो व ग्रैंड वॉकवे सेटअप।",
    fullDesc: "Make a breathtaking royal entry with illuminated floral walkways, dazzling cold pyro sparklers, traditional phoolon ki chaadar, and dry ice fog walk.",
    image: imgEntryReal,
    features: [
      "Royal Phoolon Ki Chaadar",
      "Cold Pyro Sparklers & Dry Ice Fog",
      "Illuminated Floral Aisle Walkway",
      "Grand Entry Gate & Cold Fireworks"
    ]
  },
  {
    id: "tent-light",
    title: "Tent & Light Setup",
    titleHindi: "टेंट एवं लाइट सेटअप",
    emoji: "⛺",
    iconName: "Tent",
    shortDesc: "ग्रैंड वेडिंग टेंट, वाटरप्रूफ शामियाना, पोलर लाइटिंग व वेन्यू पावर सेटअप।",
    fullDesc: "Complete venue transformations with heavy-duty waterproof tents, decorative ceiling drapes, high-capacity electrical setups, and grand venue entry gates.",
    image: imgGallery5,
    features: [
      "Waterproof Luxury Tents & Shamiana",
      "Decorative Fabric Ceiling Canopy",
      "Heavy Duty Wiring & Power Backup Setup",
      "Grand Gate & Perimeter Lighting"
    ]
  }
];

export const galleryCategories = [
  "All",
  "Lighting",
  "Flowers",
  "Stage",
  "DJ",
  "Bride Entry",
  "Tent"
];

export const galleryItems = [
  {
    id: 1,
    title: "Warm Golden String Light Illumination",
    category: "Lighting",
    image: imgLightsReal,
    desc: "सुनहरी वार्म स्ट्रिंग लाइट्स और LED से जगमगाती इमारत — शादी और उत्सव के लिए शानदार लाइटिंग।"
  },
  {
    id: 2,
    title: "Neon Floral Stage Setup",
    category: "Stage",
    image: imgGallery1,
    desc: "शाही नियॉन लाइट्स और फूलों से सजा भव्य स्टेज — रॉयल सोफे के साथ परफेक्ट शादी का सेटअप।"
  },
  {
    id: 3,
    title: "Yellow & Magenta Flower Stage",
    category: "Flowers",
    image: imgGallery2,
    desc: "पीले-गुलाबी कर्टेन, रंग-बिरंगे फूलों और वेलवेट सोफे से सजा रॉयल वेडिंग स्टेज।"
  },
  {
    id: 4,
    title: "Mehendi Flower Ring Decor",
    category: "Flowers",
    image: imgGallery3,
    desc: "गुलाब और गेंदे के फूलों से बनी खूबसूरत मेहंदी रिंग — हल्दी और मेहंदी सेरेमनी के लिए परफेक्ट।"
  },
  {
    id: 5,
    title: "Blue LED Building Illumination",
    category: "Lighting",
    image: imgGallery4,
    desc: "ब्लू-पर्पल एलईडी लाइट्स से जगमगाती बिल्डिंग — नाइट सेलिब्रेशन के लिए शानदार लाइटिंग सेटअप।"
  },
  {
    id: 6,
    title: "Colorful Mandap with Bulb Canopy",
    category: "Stage",
    image: imgGallery5,
    desc: "रंग-बिरंगे फूलों और वार्म बल्ब कैनोपी से सजा मंडप — गणेश पूजा व शादी के लिए आदर्श डेकोरेशन।"
  },
  {
    id: 7,
    title: "Grand Floral Walkway & Chandelier Stage",
    category: "Bride Entry",
    image: imgEntryReal,
    desc: "झूमरों से सजा भव्य फूलों का वॉकवे — रॉयल दुल्हन एंट्री के लिए परफेक्ट इल्यूमिनेटेड पाथवे।"
  },
  {
    id: 8,
    title: "Building Night Illumination Light Decor",
    category: "Lighting",
    image: imgGallery7,
    desc: "सुनहरी वार्म स्ट्रिंग लाइट्स और ब्लू LED से जगमगाती इमारत — शादी और उत्सव के लिए शानदार लाइटिंग।"
  },
  {
    id: 9,
    title: "Royal Bride Entry Pathway",
    category: "Bride Entry",
    image: imgEntryReal,
    desc: "फूलों की जगमगाती चादर और कोल्ड पायरो के साथ दुल्हन की शाही एंट्री।"
  },
  {
    id: 10,
    title: "Waterproof Canopy & Light Setup",
    category: "Tent",
    image: imgGallery5,
    desc: "वाटरप्रूफ टेंट, फैब्रिक सीलिंग व पिलर लाइटिंग सेट अप।"
  },
  {
    id: 11,
    title: "High-Power DJ Party Lighting",
    category: "DJ",
    image: imgGallery4,
    desc: "रंगीन लेजर बीम्स, मूविंग हेड्स और दमदार बेस साउंड - संगीत नाइट के लिए बेस्ट डीजे।"
  },
  {
    id: 12,
    title: "Vibrant Haldi Flower Mandap",
    category: "Flowers",
    image: imgGallery3,
    desc: "ताजे गेंदे व ऑर्किड से सजी हल्दी व मेहंदी सेरेमनी डेकोरेशन।"
  }
];

export const whyChooseUsFeatures = [
  {
    id: "premium-lighting",
    titleHindi: "प्रीमियम लाइटिंग",
    titleEng: "Premium Lighting",
    icon: "Sparkles",
    desc: "उच्चतम गुणवत्ता की LED स्ट्रिंग लाइट्स, क्रिस्टल झूमर, 3D टनल व अत्याधुनिक लाइटिंग टेक्नोलॉजी जिससे आपका इवेंट चमक उठे।"
  },
  {
    id: "ontime-service",
    titleHindi: "समय पर सेवा",
    titleEng: "On-Time Service",
    icon: "Clock",
    desc: "कार्यक्रम शुरू होने से काफी पहले 100% परफेक्ट तैयारी का वादा। हमारी प्रोफेशनल टीम हर पल आपके साथ रहती है।"
  },
  {
    id: "fair-pricing",
    titleHindi: "उचित मूल्य",
    titleEng: "Fair Pricing",
    icon: "BadgePercent",
    desc: "खातीपुरा, किशनपुरा व संपूर्ण जयपुर में सबसे किफ़ायती और पारदर्शी दरों पर शाही व लग्जरी सजावट। कोई छुपा हुआ खर्च नहीं।"
  }
];

export const testimonials = [
  {
    id: 1,
    name: "सुरेश & सुनीता शर्मा (Suresh & Sunita Sharma)",
    location: "किशनपुरा, खातीपुरा, जयपुर (Kishanpura at Khatipura, Jaipur)",
    rating: 5,
    event: "Wedding Lighting & Mandap Setup",
    review: "S.Kumar Light and Flower Decoration ने हमारी बेटी की शादी में जो लाइटिंग और फ्लावर डेकोरेशन की, उसने पूरे मैरिज गार्डन को किसी महल जैसा बना दिया! समय पर काम पूरा किया और रेट्स भी बेहद उचित थे।",
    date: "दिसंबर 2025"
  },
  {
    id: 2,
    name: "विक्रम सिंह राठौड़ (Vikram Singh Rathore)",
    location: "खातीपुरा रोड, जयपुर (Khatipura Road, Jaipur)",
    rating: 5,
    event: "Grand Sangeet & DJ Setup",
    review: "डीजे साउंड की क्वालिटी और स्टेज की लाइटिंग एकदम 5-स्टार थी। दुल्हन एंट्री का कोल्ड पायरो शो देखकर सब मेहमान खुश हो गए। S.Kumar जी की टीम का काम वाकई तारीफ के काबिल है!",
    date: "जनवरी 2026"
  },
  {
    id: 3,
    name: "अनिल & रेखा अग्रवाल (Anil & Rekha Agarwal)",
    location: "वैशाली नगर, जयपुर (Vaishali Nagar, Jaipur)",
    rating: 5,
    event: "Ring Ceremony & Stage Decoration",
    review: "हमारे रिंग सेरेमनी के लिए स्टेज और फूलों का काम इतना खूबसूरत था कि सबने बहुत तारीफ की। 'हमारी लाइटिंग से दें एक नई पहचान' - यह बात इन्होंने सच साबित कर दी!",
    date: "फरवरी 2026"
  },
  {
    id: 4,
    name: "महेश कुमार सैनी (Mahesh Kumar Saini)",
    location: "किशनपुरा, जयपुर (Kishanpura, Jaipur)",
    rating: 5,
    event: "Tent & Venue Illumination",
    review: "घर और रिसॉर्ट की पूरी लाइटिंग S.Kumar Light and Flower Decoration ने की। रात में पूरी बिल्डिंग जगमगा रही थी। जयपुर में इवेंट लाइटिंग के लिए 100% बेस्ट टीम!",
    date: "मार्च 2026"
  }
];
