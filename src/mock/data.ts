import { products, type Product, type ProductSpecification } from "./products";
import { testimonials, type Testimonial } from "./testimonials";
import { blogs, type BlogPost } from "./blogs";
import { galleryItems, type GalleryItem } from "./gallery";
import { countryList, countries, type CountryExport } from "./countries";
import { teamMembers, type TeamMember } from "./team";
import { serviceList, type ServiceItem } from "./services";
import { faqList, faqs, type FAQItem } from "./faq";

export {
  products,
  type Product,
  type ProductSpecification,
  testimonials,
  type Testimonial,
  blogs,
  type BlogPost,
  galleryItems,
  type GalleryItem,
  countryList,
  countries,
  type CountryExport,
  teamMembers,
  type TeamMember,
  serviceList,
  type ServiceItem,
  faqList,
  faqs,
  type FAQItem,
};

export const companyInfo = {
  clientName: "Mr. Avinash Yadav",
  businessName: "Akvera Universal",
  tagline: "Premium Dry Fruits, Global Partnerships",
  address: "Kolhapur, Maharashtra, India",
  phone: "+91 902 1300 674",
  email: "info@akverauniversal.com",
  whatsapp: "+91 902 1300 674",
  workingHours: "Monday – Saturday: 9:00 AM – 7:00 PM IST (Export operations 24/7)",
  socials: {
    
    whatsapp: "https://wa.me/919021300674",
    email: "mailto:info@akverauniversal.com",
  },
  introduction:
    "Akvera Universal connects international buyers with carefully selected premium dry fruits. Based in Kolhapur, Maharashtra, India, we bring together thoughtful sourcing, consistent grading and clear communication for dependable global trade.",
};

export const processSteps: [string, string][] = [
  ["Sourcing", "Select suitable dry-fruit varieties and suppliers against the buyer’s agreed specification."],
  ["Quality Inspection", "Check size, colour, texture, moisture and condition before approving the consignment."],
  ["Packaging", "Prepare food-grade bulk or retail packs suited to the product and destination."],
  ["Documentation", "Coordinate commercial invoices, packing lists, origin and destination-specific documents."],
  ["Container Loading", "Check container condition, secure the packed cartons and record shipment details."],
  ["Shipping", "Coordinate freight bookings and communicate dispatch and transit milestones."],
  ["Delivery", "Support destination coordination and follow up on the consignment after arrival."],
];
export const industriesServed = [
 { name: "Importers & distributors", description: "A focused dry-fruit sourcing partner for international supply networks." },
 { name: "Retail & supermarkets", description: "Selected nuts and dried fruits for consumer packs and private-label ranges." },
 { name: "Wholesale", description: "Bulk packaging and agreed grading for commercial dry-fruit buyers." },
 { name: "Food manufacturers", description: "Whole kernels and pieces for consistent ingredient specifications." },
 { name: "Bakery & confectionery", description: "Almonds, walnuts, hazelnuts and dried fruit for distinctive recipes." },
 { name: "Hospitality", description: "Premium selections for hotels, professional kitchens and catering." },
 { name: "Gifting", description: "Beautifully selected varieties for festive assortments and corporate gifts." },
 { name: "Snack brands", description: "Versatile dry-fruit ingredients for trail mixes and snack ranges." },
];
export const statistics = [
 { value: "10", label: "Dry-fruit varieties", subtitle: "A focused, carefully selected catalogue" },
 { value: "7", label: "Export stages", subtitle: "From sourcing to delivery" },
 { value: "B2B", label: "Trade focused", subtitle: "For wholesale and international buyers" },
 { value: "Global", label: "Outlook", subtitle: "Supply tailored to your market" },
];
export const whyChooseUs = [
 { title: "Thoughtful sourcing", text: "The right variety, origin and grade for your market." },
 { title: "Consistent selection", text: "Size, texture and appearance checked against the agreed specification." },
 { title: "Careful packing", text: "Food-grade packaging designed around the dry fruit and its journey." },
 { title: "Export coordination", text: "Support with documents, freight bookings and shipment milestones." },
 { title: "Open communication", text: "Clear requirements and practical updates throughout your order." },
 { title: "Long-term partnerships", text: "A focused approach to dependable, repeat dry-fruit supply." },
];

export const modules = [
  "Products",
  "Categories",
  "Countries",
  "Export Destinations",
  "Gallery",
  "Blogs",
  "Testimonials",
  "FAQs",
  "Quality Certificates",
  "Export Process",
  "Services",
  "Team Members",
  "Homepage Banner",
  "Hero Slider",
  "Contact Requests",
  "Quote Requests",
  "Newsletter Subscribers",
  "Site Settings",
  "Profile",
  "Change Password",
  "Media Library",
  "SEO Settings",
  "Menu Management",
  "Footer Management",
  "Theme Settings",
  "Analytics Dashboard",
  "Activity Logs",
  "Notifications",
];

export const moduleSlug = (name: string) => name.toLowerCase().replaceAll(" ", "-");

export type DemoRow = { id: string; name: string; detail: string; status: boolean };

export const initialModules: Record<string, DemoRow[]> = Object.fromEntries(
  modules.map((name) => {
    let rows: [string, string][] = [[`${name} sample`, "Active record in Akvera Universal workspace"]];
    if (name === "Categories") rows = [...new Set(products.map((p) => p.category))].map((c) => [c, "Active dry-fruit category"]);
    if (["Countries", "Export Destinations"].includes(name)) rows = countryList.map((c) => [c.name, `${c.region} · ${c.ports.join(", ")}`]);
    if (name === "Blogs") rows = blogs.map((b) => [b.title, `${b.category} · ${b.date} · ${b.readTime}`]);
    if (name === "FAQs") rows = faqList.map((f) => [f.question, f.answer]);
    if (name === "Testimonials") rows = testimonials.map((t) => [t.name, `${t.company} (${t.country}) · 5 Stars`]);
    if (name === "Export Process") rows = processSteps;
    if (name === "Team Members") rows = teamMembers.map((m) => [m.name, `${m.role} · ${m.location}`]);
    if (name === "Services") rows = serviceList.map((s) => [s.title, s.description]);
    if (name === "Contact Requests")
      rows = [
        ["Ahmed Al Mansoori", "info@gulfoasis.ae · UAE · Inquiring about 50 MT Almonds to Jebel Ali · Pending proforma invoice"],
        ["James Wilson", "j.wilson@ukfooddist.co.uk · UK · Inquiring about 10 MT Cashews and Raisins · Organic requirements"],
        ["Daniel Tan", "daniel@singaporetrading.sg · Singapore · Inquiring about Dates and Figs · In transit"],
      ];
    if (name === "Quote Requests")
      rows = [
        ["Gulf Oasis Trading", "25 MT Cashews · CIF Jebel Ali · Need BOPP 10kg bags"],
        ["Red Sea Dry Fruit Imports", "50 MT Raisins · CFR Jeddah · Jumbo bags"],
        ["Albion Fine Foods Ltd", "15 MT Walnuts & Pistachios · FOB Nhava Sheva"],
        ["Pacific Foods Singapore", "20 MT Dates · 40ft Reefer Container"],
      ];
    if (name === "Newsletter Subscribers")
      rows = [
        ["procurement@gulffoods.ae", "Subscribed via corporate portal · Verified trade buyer"],
        ["importer@eurograins.de", "Subscribed via global market insights · Verified European buyer"],
        ["sourcing@asiacommodities.sg", "Subscribed via product catalogue"],
      ];
    if (name === "Quality Certificates")
      rows = [
        ["Food safety documentation", "Demo record · Documents confirmed per consignment"],
        ["APEDA Export Registration Certificate", "Agricultural & Processed Food Products Export Development Authority"],
        ["Dry-fruit quality report", "Demo record · Size, moisture and condition checks"],
        ["ISO 22000:2018 Food Safety Management", "Audited sorting, handling, and export packaging processes"],
        ["Phytosanitary & Fumigation Protocol Standard", "National Plant Protection Organization (NPPO) compliance"],
      ];
    if (name === "Gallery" || name === "Media Library")
      rows = galleryItems.map((g) => [g.title, `${g.category} · ${g.description}`]);
    if (name === "Homepage Banner" || name === "Hero Slider")
      rows = [
        ["Premium Dry Fruits, Global Partnerships", "Primary banner · Premium dry-fruit selection"],
        ["Carefully Selected Dry Fruits", "Secondary banner · Dry-fruit export logistics"],
        ["Thoughtful sourcing for global buyers", "Dry-fruit trade highlights"],
      ];
    if (name === "Site Settings")
      rows = [
        ["Company Name", "Akvera Universal"],
        ["Managing Director", "Mr. Avinash Yadav"],
        ["Registered Address", "Kolhapur, Maharashtra, India"],
        ["Official Email", "info@akverauniversal.com"],
        ["Direct Phone / WhatsApp", "+91 902 1300 674"],
      ];
    if (name === "SEO Settings")
      rows = [
        ["Primary Meta Title", "Akvera Universal | Premium Dry Fruits Exporter"],
        ["Meta Description", "Premium Dry Fruits, Global Partnerships. Premium dry-fruit exports delivered with trust, quality, and transparency."],
        ["Target Keywords", "dry-fruit exporter, wholesale nuts, dried fruits, international trading"],
      ];
    if (name === "Menu Management")
      rows = [
        ["Main Header Navigation", "Home, About, Product, Gallery, Contact, Quality"],
        ["Footer Quick Links", "Home, About, Product, Gallery, Contact, Quality"],
      ];
    if (name === "Footer Management")
      rows = [
        ["Copyright Notice", "© 2026 Akvera Universal. All rights reserved."],
        ["Admin Login Link", "Rendered securely at bottom right footer with route redirect to /admin/login"],
      ];
    if (name === "Theme Settings")
      rows = [
        ["Primary Color", "Deep Forest Green (#1E5631)"],
        ["Secondary Color", "Natural Leaf Green (#4CAF50)"],
        ["Accent Color", "Subtle Gold (#D4A017)"],
        ["Background Color", "Off White (#FAFAF7) / Dark (#1B1B1B)"],
      ];
    if (name === "Analytics Dashboard")
      rows = [
        ["Total Monthly Export Volume", "1,850 Metric Tonnes"],
        ["Active Container Shipments", "28 FCL Containers in Transit"],
        ["Annual Customer Retention", "94.6% Repeat Global Buyers"],
        ["Average Port Dispatch Time", "12 Calendar Days"],
      ];
    if (name === "Activity Logs")
      rows = [
        ["Product catalogue updated", "Updated Hazelnut selection · Admin user · 10 mins ago"],
        ["Quote request reviewed", "Al Mansoori (UAE) proforma generated · Admin user · 1 hour ago"],
        ["Phytosanitary certificate uploaded", "Consignment #AKV-2026-88 · 3 hours ago"],
        ["Shipment departed JNPT", "Vessel MSC LORETTA loaded with 4x40ft Cashews · Yesterday"],
      ];
    if (name === "Notifications")
      rows = [
        ["New Quote Request Received", "Gulf Oasis Foodstuff requested quote for 25 MT Almonds · 15 mins ago"],
        ["Bill of Lading Confirmed", "Shipping line issued BL for Container #MSCU4920194 · 2 hours ago"],
        ["New Newsletter Subscriber", "procurement@gulffoods.ae joined updates list · 4 hours ago"],
      ];
    if (name === "Profile")
      rows = [
        ["Name", "Mr. Avinash Yadav"],
        ["Role", "Managing Director & Chief Export Officer"],
        ["Location", "Kolhapur, Maharashtra, India"],
        ["Email", "info@akverauniversal.com"],
      ];
    if (name === "Change Password")
      rows = [
        ["Password Security", "Demo administrator session authenticated · No reset required in demo"],
      ];

    return [
      moduleSlug(name),
      rows.map((r, i) => ({
        id: `${moduleSlug(name)}-${i}`,
        name: r[0],
        detail: r[1],
        status: true,
      })),
    ];
  })
);
