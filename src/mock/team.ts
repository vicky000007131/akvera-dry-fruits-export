export type TeamMember = {
  id: string;
  name: string;
  role: string;
  bio: string;
  location: string;
  experience: string;
  phone?: string;
  email?: string;
};

export const teamMembers: TeamMember[] = [
  {
    id: "avinash-yadav",
    name: "Mr. Avinash Yadav",
    role: "Founder & Managing Director",
    bio: "Focused on thoughtful dry-fruit sourcing, transparent communication and long-term international trading partnerships.",
    location: "Kolhapur, Maharashtra, India",
    experience: "Dry-fruit trade & partnerships",
  },
  {
    id: "priya-deshmukh",
    name: "Priya Deshmukh",
    role: "Head of International Trade & Documentation",
    bio: "Oversees international sales contracts, bank letters of credit, customs compliance, and port clearance across global trade hubs.",
    location: "Mumbai / Kolhapur, India",
    experience: "11+ Years in Export Logistics",
  },
  {
    id: "rajesh-patil",
    name: "Rajesh Patil",
    role: "Dry-Fruit Quality Coordinator",
    bio: "Coordinates dry-fruit grading, sample review and agreed inspection requirements.",
    location: "Kolhapur, Maharashtra, India",
    experience: "Dry-fruit grading & inspection",
  },
  {
    id: "sunil-kulkarni",
    name: "Sunil Kulkarni",
    role: "Director of Supply Chain & Ocean Freight",
    bio: "Manages vessel chartering, container stuffing, reefer temperature integrity, and freight forwarder coordination at Nhava Sheva and Mundra ports.",
    location: "JNPT / Mumbai, India",
    experience: "12+ Years in Maritime Logistics",
  },
];
