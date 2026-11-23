export type Testimonial = {
  id: string;
  name: string;
  company: string;
  country: string;
  role: string;
  rating: number;
  text: string;
  avatarText: string;
};

export const testimonials: Testimonial[] = [
  {
    id: "ahmed-al-mansoori",
    name: "Ahmed Al Mansoori",
    company: "Gulf Oasis Foodstuff LLC",
    country: "United Arab Emirates",
    role: "Senior Procurement Director",
    rating: 5,
    text: "An illustrative account of consistent almond grading and attentive communication for a wholesale dry-fruit order.",
    avatarText: "AM",
  },
  {
    id: "sarah-mitchell",
    name: "Sarah Mitchell",
    company: "Albion Fine Foods Ltd",
    country: "United Kingdom",
    role: "Import & Supply Chain Head",
    rating: 5,
    text: "An illustrative account of cashew selection, careful packaging and clear product specifications.",
    avatarText: "SM",
  },
  {
    id: "daniel-tan",
    name: "Daniel Tan",
    company: "Asia Pacific Commodities Pte",
    country: "Singapore",
    role: "Managing Director",
    rating: 5,
    text: "An illustrative account of a transparent dry-fruit sourcing discussion and coordinated export documentation.",
    avatarText: "DT",
  },
  {
    id: "omar-al-hassan",
    name: "Omar Al-Hassan",
    company: "Red Sea Dry Fruit Imports",
    country: "Saudi Arabia",
    role: "Commercial Purchasing Manager",
    rating: 5,
    text: "An illustrative account of dates and pistachios packed thoughtfully for an international consignment.",
    avatarText: "OH",
  },
  {
    id: "elena-rossi",
    name: "Elena Rossi",
    company: "Mediterranea Spezie SRL",
    country: "Italy",
    role: "Quality & Sourcing Specialist",
    rating: 5,
    text: "An illustrative account of selected walnuts and hazelnuts for bakery and confectionery ingredients.",
    avatarText: "ER",
  },
  {
    id: "marcus-vance",
    name: "Marcus Vance",
    company: "Great Northern Foods",
    country: "Canada",
    role: "Commodities Broker",
    rating: 5,
    text: "An illustrative account of repeat dry-fruit sourcing supported by practical communication.",
    avatarText: "MV",
  },
];
