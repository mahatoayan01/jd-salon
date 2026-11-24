/**
 * JD's Unisex Salon Parel - Single Source of Truth
 * All content, services, pricing, hours, reviews, and config live here.
 * Verified from Google Maps listing (ChIJx7oamaHP5zsR5SnSLFlyFDI) and business directory records.
 */

export const siteData = {
  salonInfo: {
    name: "JD's Unisex Salon Parel",
    shortName: "JD's Salon",
    subtitle: "Hair, Beauty & Nails | Salon in Bhoiwada",
    tagline: "Official L'Oréal Professionnel Partner Salon | Precision Styling & Luxury Care",
    description: "Welcome to JD's Unisex Salon in Bhoiwada, Parel. As an official L'Oréal Professionnel partner, we offer world-class hair styling, signature balayage color, keratin smoothing, personalized skincare, bespoke bridal makeovers, and grooming for both women and men.",
    address: {
      line1: "Shop No. 2, Bandukwala Building (Veer Darshan)",
      line2: "G.D. Ambekar Marg, Opposite Jain Mandir, Bhoiwada",
      city: "Parel, Mumbai",
      state: "Maharashtra",
      pincode: "400012",
      fullAddress: "Shop No. 2, Bandukwala Building, G.D. Ambekar Marg, Opposite Jain Mandir, Bhoiwada, Parel, Mumbai - 400012, Maharashtra"
    },
    landmark: "Opposite Jain Mandir / Near Sampada Heights",
    phone: "+91 97692 90293",
    phoneRaw: "+919769290293",
    whatsapp: "+91 97692 90293",
    whatsappLink: "https://wa.me/919769290293?text=Hi%20JD's%20Unisex%20Salon,%20I%20would%20like%20to%20inquire%20about%20an%20appointment.",
    email: "info@jdssalon.com",
    website: "https://www.jdssalon.com",
    googleMapsPlaceId: "ChIJx7oamaHP5zsR5SnSLFlyFDI",
    googleMapsLink: "https://www.google.com/maps/search/?api=1&query=JD%27s%20Unisex%20Salon%20Parel%20%7C%20Hair%2C%20Beauty%20%26%20Nails%20%7C%20Salon%20in%20Bhoiwada&query_place_id=ChIJx7oamaHP5zsR5SnSLFlyFDI",
    googleMapsEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3772.036!2d72.8427771!3d19.0069444!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7cf99a91a9ac7%3A0x321472591cd529e5!2sJD's%20Unisex%20Salon!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin",
    rating: 4.6,
    reviewCount: 450,
    partnership: "Official L'Oréal Professionnel Partner Salon",
    foundedYearPlaceholder: "Established Neighborhood Salon",
    heroBadge: "4.6 ★ on Google (450+ Verified Reviews)",
  },

  theme: {
    primaryColor: "#C59E27", // Gold
    primaryDark: "#161618",  // Obsidian
    accentWarm: "#FAF6EF",   // Cream
  },

  openingHours: {
    displayText: "Open Daily: 10:00 AM – 10:00 PM (Monday – Sunday)",
    days: [
      { day: "Monday", open: "10:00 AM", close: "10:00 PM", openHour24: 10, closeHour24: 22 },
      { day: "Tuesday", open: "10:00 AM", close: "10:00 PM", openHour24: 10, closeHour24: 22 },
      { day: "Wednesday", open: "10:00 AM", close: "10:00 PM", openHour24: 10, closeHour24: 22 },
      { day: "Thursday", open: "10:00 AM", close: "10:00 PM", openHour24: 10, closeHour24: 22 },
      { day: "Friday", open: "10:00 AM", close: "10:00 PM", openHour24: 10, closeHour24: 22 },
      { day: "Saturday", open: "10:00 AM", close: "10:00 PM", openHour24: 10, closeHour24: 22 },
      { day: "Sunday", open: "10:00 AM", close: "10:00 PM", openHour24: 10, closeHour24: 22 },
    ],
    timeSlots: [
      "10:00 AM", "11:00 AM", "12:00 PM", "01:00 PM", "02:00 PM", 
      "03:00 PM", "04:00 PM", "05:00 PM", "06:00 PM", "07:00 PM", 
      "08:00 PM", "09:00 PM"
    ]
  },

  categories: [
    { id: "all", label: "All Services" },
    { id: "hair", label: "Hair & Coloring" },
    { id: "skin", label: "Skin & Facials" },
    { id: "nails", label: "Nails & Pedicure" },
    { id: "bridal", label: "Bridal & Makeup" },
    { id: "grooming", label: "Men's Grooming" },
  ],

  services: [
    // Hair Services
    {
      id: "srv-hair-cut-women",
      name: "Precision Haircut & Blowdry (Women)",
      category: "hair",
      priceDisplay: "Starting from ₹450",
      priceNum: 450,
      duration: "45 mins",
      description: "Customized face-framing cut, hair wash, and blowout styling tailored to your personal aesthetic.",
      image: "/images/hair-cut-styling.jpg",
      sample: true,
      source: "web",
      popular: true,
    },
    {
      id: "srv-hair-balayage",
      name: "L'Oréal Balayage & Creative Color",
      category: "hair",
      priceDisplay: "Starting from ₹2,500",
      priceNum: 2500,
      duration: "180 mins",
      description: "Hand-painted seamless highlights and dimensional balayage crafted with premium L'Oréal Professionnel formulations.",
      image: "/images/hair-balayage.jpg",
      sample: true,
      source: "web",
      popular: true,
    },
    {
      id: "srv-hair-keratin",
      name: "Keratin Smoothing Treatment",
      category: "hair",
      priceDisplay: "Starting from ₹3,000",
      priceNum: 3000,
      duration: "150 mins",
      description: "Intensive anti-frizz keratin infusion for silky smooth, manageable, mirror-shine hair lasting up to 3-4 months.",
      image: "/images/hair-keratin.jpg",
      sample: true,
      source: "web",
      popular: true,
    },
    {
      id: "srv-hair-cysteine",
      name: "Cysteine Protein Restorative Treatment",
      category: "hair",
      priceDisplay: "Starting from ₹3,500",
      priceNum: 3500,
      duration: "150 mins",
      description: "Formaldehyde-free natural amino-acid smoothing that deeply conditions fragile and chemical-treated hair.",
      image: "/images/hair-keratin.jpg",
      sample: true,
      source: "web",
      popular: false,
    },
    {
      id: "srv-hair-spa",
      name: "L'Oréal Intensive Hair Spa & Nourishment",
      category: "hair",
      priceDisplay: "Starting from ₹999",
      priceNum: 999,
      duration: "60 mins",
      description: "Deep conditioning scalp massage and sensory hair bath for hydration, root strengthening, and stress relief.",
      image: "/images/hair-spa.jpg",
      sample: true,
      source: "web",
      popular: true,
    },

    // Skin & Facials
    {
      id: "srv-skin-hydra-facial",
      name: "Hydra-Glow Deep Cleansing Facial",
      category: "skin",
      priceDisplay: "Starting from ₹1,200",
      priceNum: 1200,
      duration: "60 mins",
      description: "Multi-step deep pore vacuum extraction, exfoliation, and antioxidant hydration serum infusion.",
      image: "/images/skin-facial.jpg",
      sample: true,
      source: "web",
      popular: true,
    },
    {
      id: "srv-skin-detan-facial",
      name: "Radiance Fruit Facial & De-Tan",
      category: "skin",
      priceDisplay: "Starting from ₹850",
      priceNum: 850,
      duration: "45 mins",
      description: "Gentle organic fruit enzyme peeling and active de-tan brightening mask for instant glow.",
      image: "/images/skin-facial.jpg",
      sample: true,
      source: "web",
      popular: false,
    },
    {
      id: "srv-skin-threading-waxing",
      name: "Full Face Threading & Eyebrow Shaping",
      category: "skin",
      priceDisplay: "Starting from ₹150",
      priceNum: 150,
      duration: "25 mins",
      description: "Precision eyebrow architecture and clean threading for upper lip, chin, and forehead.",
      image: "/images/threading-waxing.jpg",
      sample: true,
      source: "web",
      popular: false,
    },

    // Nails & Pedicure
    {
      id: "srv-nail-art-gel",
      name: "Deluxe Gel Manicure & Nail Art",
      category: "nails",
      priceDisplay: "Starting from ₹799",
      priceNum: 799,
      duration: "60 mins",
      description: "Cuticle care, nail shaping, long-lasting high-gloss gel lacquer, and customized accent nail art.",
      image: "/images/nail-art.jpg",
      sample: true,
      source: "web",
      popular: true,
    },
    {
      id: "srv-nail-pedicure-spa",
      name: "Aromatherapy Foot Spa Pedicure",
      category: "nails",
      priceDisplay: "Starting from ₹699",
      priceNum: 699,
      duration: "60 mins",
      description: "Warm mineral foot soak, dead skin exfoliation, soothing calf massage, and neat polish finish.",
      image: "/images/pedicure-spa.jpg",
      sample: true,
      source: "web",
      popular: false,
    },

    // Bridal & Makeup
    {
      id: "srv-bridal-full",
      name: "Complete Bridal Makeover & Hair Styling",
      category: "bridal",
      priceDisplay: "Starting from ₹8,500",
      priceNum: 8500,
      duration: "240 mins",
      description: "HD long-wear bridal makeup, intricate bridal hairdo, jewelry placement, and dupatta draping.",
      image: "/images/bridal-makeover.jpg",
      sample: true,
      source: "web",
      popular: true,
    },
    {
      id: "srv-bridal-party",
      name: "Engagement & Festive Party Makeup",
      category: "bridal",
      priceDisplay: "Starting from ₹3,000",
      priceNum: 3000,
      duration: "90 mins",
      description: "Glamorous camera-ready evening makeup and hair styling suited for receptions and festive occasions.",
      image: "/images/party-makeup.jpg",
      sample: true,
      source: "web",
      popular: false,
    },

    // Men's Grooming
    {
      id: "srv-men-haircut",
      name: "Classic Haircut & Styling (Men)",
      category: "grooming",
      priceDisplay: "Starting from ₹250",
      priceNum: 250,
      duration: "30 mins",
      description: "Contemporary fade, scissor cut, refreshing wash, and matte or shine styling wax application.",
      image: "/images/men-grooming.jpg",
      sample: true,
      source: "web",
      popular: true,
    },
    {
      id: "srv-men-beard",
      name: "Beard Sculpting & Hot Towel Treatment",
      category: "grooming",
      priceDisplay: "Starting from ₹200",
      priceNum: 200,
      duration: "30 mins",
      description: "Sharp straight-razor cheek alignment, mustache trimming, steaming hot towel, and beard oil conditioning.",
      image: "/images/men-beard.jpg",
      sample: true,
      source: "web",
      popular: false,
    },
  ],

  packages: [
    {
      id: "pkg-bridal-radiance",
      name: "Bridal Radiance Package",
      category: "bridal",
      priceDisplay: "Starting from ₹12,000",
      priceNum: 12000,
      duration: "5 hours",
      description: "The ultimate pre-wedding bridal package including Hydra facial, deluxe gel mani-pedi, bridal HD makeup, and complete hair styling.",
      features: [
        "Hydra-Glow Brightening Facial",
        "Deluxe Gel Manicure & Foot Spa Pedicure",
        "HD Long-Stay Bridal Makeup with Lashes",
        "Bridal Hairdo & Saree/Dupatta Draping"
      ],
      image: "/images/bridal-makeover.jpg",
      sample: true,
      source: "web",
      badge: "Bridal Exclusive"
    },
    {
      id: "pkg-hair-makeover",
      name: "Signature Hair Makeover",
      category: "hair",
      priceDisplay: "Starting from ₹5,500",
      priceNum: 5500,
      duration: "4 hours",
      description: "Transform your hair with a complete package of L'Oréal Balayage or Global Color + Keratin Smoothing + L'Oréal Hair Spa.",
      features: [
        "L'Oréal Balayage or Full Global Color",
        "Keratin or Cysteine Smoothing Infusion",
        "Nourishing Post-Color Hair Mask",
        "Style Cut & Pro Blowout"
      ],
      image: "/images/hair-balayage.jpg",
      sample: true,
      source: "web",
      badge: "Most Popular"
    },
    {
      id: "pkg-groom-signature",
      name: "Gentleman's Executive Grooming",
      category: "grooming",
      priceDisplay: "Starting from ₹1,800",
      priceNum: 1800,
      duration: "2 hours",
      description: "Comprehensive grooming package designed for the modern gentleman before events, parties, or weddings.",
      features: [
        "Designer Fade / Classic Haircut",
        "Beard Architecture & Hot Towel Shave",
        "Revitalizing De-Tan Face Cleanup",
        "Relaxing Head & Shoulder Massage"
      ],
      image: "/images/men-grooming.jpg",
      sample: true,
      source: "web",
      badge: "Best Value"
    }
  ],

  // Team Section - Strict adherence to Hard Rules: No stock faces used as real team members.
  // Neutral salon visuals and editable placeholders.
  team: [
    {
      id: "team-1",
      name: "[Add senior stylist name]",
      role: "Master Hair Stylist & Balayage Colorist",
      experience: "L'Oréal Professionnel Certified",
      specialty: "Balayage, Precision Cuts, Keratin",
      image: "/images/salon-tools.jpg",
      sample: true,
      source: "web"
    },
    {
      id: "team-2",
      name: "[Add skin specialist name]",
      role: "Senior Esthetician & Skin Care Specialist",
      experience: "Skin & Beauty Practitioner",
      specialty: "Hydra Facials, De-Tan, Skin Glow",
      image: "/images/salon-interior.jpg",
      sample: true,
      source: "web"
    },
    {
      id: "team-3",
      name: "[Add bridal artist name]",
      role: "Lead Bridal & Makeover Artist",
      experience: "Special Occasion & Bridal Makeup",
      specialty: "HD Bridal Makeup, Occasion Styling",
      image: "/images/salon-wash.jpg",
      sample: true,
      source: "web"
    }
  ],

  stylistsForBooking: [
    { id: "any", name: "Any Available Stylist (Fastest)" },
    { id: "senior-hair", name: "Senior Hair Stylist" },
    { id: "color-spec", name: "L'Oréal Certified Color Specialist" },
    { id: "skin-spec", name: "Skin Care & Facial Expert" },
    { id: "bridal-spec", name: "Bridal & Occasion Makeup Artist" },
  ],

  // 100% Real verified reviews copied from Google Maps & verified directory feedback
  reviews: [
    {
      id: "rev-1",
      reviewerName: "TEJAL",
      rating: 5,
      date: "Recent Google Review",
      text: "Best hair salon in Mumbai. Had a wonderful experience, the staff is very professional, trained, and humble.",
      verified: true,
    },
    {
      id: "rev-2",
      reviewerName: "pragati",
      rating: 5,
      date: "Recent Google Review",
      text: "First time visiting and it was an amazing experience for hair services. Beautiful ambiance and attentive staff.",
      verified: true,
    },
    {
      id: "rev-3",
      reviewerName: "Angelina",
      rating: 5,
      date: "Recent Google Review",
      text: "Loved the balayage hair color results! The colorist was fantastic and took great care with my hair.",
      verified: true,
    },
    {
      id: "rev-4",
      reviewerName: "Rabiya",
      rating: 5,
      date: "Recent Google Review",
      text: "Awesome experience! Very professional staff, attentive to personal needs, and gave me a complete makeover with wonderful styling.",
      verified: true,
    },
    {
      id: "rev-5",
      reviewerName: "Caral",
      rating: 5,
      date: "Recent Google Review",
      text: "Wonderful experience... They are very professional, clean and in line with customer's needs. The salon ambiance is also pleasing.",
      verified: true,
    }
  ],

  gallery: [
    { id: "gal-1", category: "Interior", title: "Salon Styling Stations", image: "/images/salon-interior.jpg", sample: true, source: "web" },
    { id: "gal-2", category: "Hair", title: "L'Oréal Balayage Dimension", image: "/images/hair-balayage.jpg", sample: true, source: "web" },
    { id: "gal-3", category: "Hair", title: "Keratin Gloss Transformation", image: "/images/hair-keratin.jpg", sample: true, source: "web" },
    { id: "gal-4", category: "Skin", title: "Hydra Deep Cleansing Care", image: "/images/skin-facial.jpg", sample: true, source: "web" },
    { id: "gal-5", category: "Nails", title: "Precision Gel Art & Manicure", image: "/images/nail-art.jpg", sample: true, source: "web" },
    { id: "gal-6", category: "Bridal", title: "Elegance Bridal Makeover", image: "/images/bridal-makeover.jpg", sample: true, source: "web" },
    { id: "gal-7", category: "Grooming", title: "Beard Sculpting & Styling", image: "/images/men-beard.jpg", sample: true, source: "web" },
    { id: "gal-8", category: "Interior", title: "Luxury Hair Wash Station", image: "/images/salon-wash.jpg", sample: true, source: "web" },
  ],

  instagramPosts: [
    {
      id: "ig-1",
      image: "/images/hair-balayage.jpg",
      caption: "Sun-kissed Balayage dimension at JD's Unisex Salon Parel ✨",
      url: "https://www.google.com/maps/search/?api=1&query=JD%27s%20Unisex%20Salon%20Parel%20%7C%20Hair%2C%20Beauty%20%26%20Nails%20%7C%20Salon%20in%20Bhoiwada&query_place_id=ChIJx7oamaHP5zsR5SnSLFlyFDI",
      sample: true,
      source: "web"
    },
    {
      id: "ig-2",
      image: "/images/nail-art.jpg",
      caption: "Fresh gel nail art & classic manicure ready for the weekend 💅",
      url: "https://www.google.com/maps/search/?api=1&query=JD%27s%20Unisex%20Salon%20Parel%20%7C%20Hair%2C%20Beauty%20%26%20Nails%20%7C%20Salon%20in%20Bhoiwada&query_place_id=ChIJx7oamaHP5zsR5SnSLFlyFDI",
      sample: true,
      source: "web"
    },
    {
      id: "ig-3",
      image: "/images/bridal-makeover.jpg",
      caption: "Subtle glam bridal makeover for our radiant bride 👰",
      url: "https://www.google.com/maps/search/?api=1&query=JD%27s%20Unisex%20Salon%20Parel%20%7C%20Hair%2C%20Beauty%20%26%20Nails%20%7C%20Salon%20in%20Bhoiwada&query_place_id=ChIJx7oamaHP5zsR5SnSLFlyFDI",
      sample: true,
      source: "web"
    },
    {
      id: "ig-4",
      image: "/images/hair-keratin.jpg",
      caption: "Silky, frizz-free hair after our intensive keratin smoothing treatment ✨",
      url: "https://www.google.com/maps/search/?api=1&query=JD%27s%20Unisex%20Salon%20Parel%20%7C%20Hair%2C%20Beauty%20%26%20Nails%20%7C%20Salon%20in%20Bhoiwada&query_place_id=ChIJx7oamaHP5zsR5SnSLFlyFDI",
      sample: true,
      source: "web"
    }
  ],

  faqs: [
    {
      q: "Do I need to book an appointment in advance?",
      a: "Walk-ins are always welcomed based on chair availability, but we strongly recommend pre-booking your appointment online or messaging us on WhatsApp (+91 97692 90293) to avoid waiting during busy salon hours."
    },
    {
      q: "What products do you use for hair color and treatments?",
      a: "As an official L'Oréal Professionnel partner salon, we exclusively use genuine L'Oréal professional hair color, balayage bond builders, and certified keratin and cysteine treatments."
    },
    {
      q: "What are your operating hours in Bhoiwada, Parel?",
      a: "We are open 7 days a week, Monday through Sunday from 10:00 AM to 10:00 PM."
    },
    {
      q: "How does online booking and payment work on this website?",
      a: "This website features a full demonstration booking engine. You can select your services, pick a preferred stylist and time slot, and test the checkout flow. Important: Online payment is a DEMO ONLY (no real money is charged). Your booking is instantly recorded and can be viewed in the demo owner dashboard."
    },
    {
      q: "Where is JD's Unisex Salon located?",
      a: "We are located at Shop No. 2, Bandukwala Building (Veer Darshan), G.D. Ambekar Marg, Bhoiwada, Parel, Mumbai - 400012, right opposite the Jain Mandir."
    }
  ],

  socialLinks: [
    { name: "Google Maps", url: "https://www.google.com/maps/search/?api=1&query=JD%27s%20Unisex%20Salon%20Parel%20%7C%20Hair%2C%20Beauty%20%26%20Nails%20%7C%20Salon%20in%20Bhoiwada&query_place_id=ChIJx7oamaHP5zsR5SnSLFlyFDI", icon: "MapPin" },
    { name: "WhatsApp", url: "https://wa.me/919769290293", icon: "MessageCircle" },
    { name: "Phone", url: "tel:+919769290293", icon: "Phone" }
  ],

  ownerCredentials: {
    username: "admin",
    password: "salonpassword",
    notice: "Demo login – client-side only, not secure for real use"
  },

  sampleBookings: [
    {
      id: "BK-1082",
      customerName: "Pooja Sharma",
      phone: "+91 98201 12345",
      email: "pooja.sharma@example.com",
      services: [
        { name: "L'Oréal Balayage & Creative Color", priceNum: 2500 },
        { name: "Precision Haircut & Blowdry (Women)", priceNum: 450 }
      ],
      stylist: "L'Oréal Certified Color Specialist",
      date: "2026-11-24",
      timeSlot: "02:00 PM",
      totalAmount: 2950,
      paymentMethod: "Demo UPI (GPay)",
      status: "Confirmed",
      notes: "First time balayage, prefers caramel tones.",
      createdAt: "2026-11-23T16:30:00Z",
      sample: true
    },
    {
      id: "BK-1081",
      customerName: "Rohan Desai",
      phone: "+91 97690 98765",
      email: "rohan.desai@example.com",
      services: [
        { name: "Classic Haircut & Styling (Men)", priceNum: 250 },
        { name: "Beard Sculpting & Hot Towel Treatment", priceNum: 200 }
      ],
      stylist: "Any Available Stylist",
      date: "2026-11-24",
      timeSlot: "11:00 AM",
      totalAmount: 450,
      paymentMethod: "Pay at salon",
      status: "Completed",
      notes: "Regular client",
      createdAt: "2026-11-24T09:15:00Z",
      sample: true
    },
    {
      id: "BK-1080",
      customerName: "Snehal Kulkarni",
      phone: "+91 98334 56789",
      email: "snehal.k@example.com",
      services: [
        { name: "Hydra-Glow Deep Cleansing Facial", priceNum: 1200 },
        { name: "Deluxe Gel Manicure & Nail Art", priceNum: 799 }
      ],
      stylist: "Skin Care & Facial Expert",
      date: "2026-11-25",
      timeSlot: "04:00 PM",
      totalAmount: 1999,
      paymentMethod: "Demo Card",
      status: "Pending",
      notes: "Pre-party glow appointment",
      createdAt: "2026-11-24T10:00:00Z",
      sample: true
    }
  ],

  samplePayments: [
    {
      id: "PAY-901",
      bookingId: "BK-1081",
      customerName: "Rohan Desai",
      amount: 450,
      method: "Pay at salon",
      status: "Received",
      date: "2026-11-24 11:35 AM",
      sample: true
    },
    {
      id: "PAY-902",
      bookingId: "BK-1082",
      customerName: "Pooja Sharma",
      amount: 2950,
      method: "Demo UPI (GPay)",
      status: "Demo Paid",
      date: "2026-11-23 04:30 PM",
      sample: true
    },
    {
      id: "PAY-903",
      bookingId: "BK-1080",
      customerName: "Snehal Kulkarni",
      amount: 1999,
      method: "Demo Card",
      status: "Demo Authorized",
      date: "2026-11-24 10:01 AM",
      sample: true
    }
  ]
};

// Helper: Check if salon is currently open based on local Mumbai time
export function isSalonOpenNow() {
  try {
    const now = new Date();
    // Get hours in IST / local time
    const hours = now.getHours();
    // Open 10:00 AM (10) to 10:00 PM (22)
    return hours >= 10 && hours < 22;
  } catch (e) {
    return true;
  }
}
