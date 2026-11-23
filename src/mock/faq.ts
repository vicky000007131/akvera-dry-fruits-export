export type FAQItem = {
  id: number;
  question: string;
  answer: string;
  category: "General" | "Quality" | "Shipping" | "Ordering";
};

export const faqList: FAQItem[] = [
  {
    "id": 1,
    "question": "Which dry fruits are in your collection?",
    "answer": "Our catalogue includes almonds, cashews, pistachios, walnuts, raisins, dates, figs, apricots, prunes and hazelnuts.",
    "category": "General"
  },
  {
    "id": 2,
    "question": "How do I request a quotation?",
    "answer": "Share the variety, grade, quantity, pack size and destination with our export desk. Commercial terms are confirmed with the quotation.",
    "category": "Ordering"
  },
  {
    "id": 3,
    "question": "Which destinations can you supply?",
    "answer": "Tell us your destination country and port. We confirm product suitability, documentation and freight options for your order.",
    "category": "Shipping"
  },
  {
    "id": 4,
    "question": "What is the minimum order quantity?",
    "answer": "Minimum quantities depend on the product, grade, packaging and shipment method. Ask for the commercial quantity applicable to your requirement.",
    "category": "Ordering"
  },
  {
    "id": 5,
    "question": "Can I request private-label packaging?",
    "answer": "Discuss your pack sizes, artwork and destination labelling requirements with our team. Packaging availability and quantities are confirmed before order acceptance.",
    "category": "Ordering"
  },
  {
    "id": 6,
    "question": "How is dry-fruit quality checked?",
    "answer": "Selection considers size, colour, texture, moisture and condition against agreed specifications. Any required laboratory testing is confirmed for the consignment.",
    "category": "Quality"
  },
  {
    "id": 7,
    "question": "Can I request samples?",
    "answer": "Sample availability, courier charges and dispatch arrangements are discussed individually before a commercial order.",
    "category": "Quality"
  },
  {
    "id": 8,
    "question": "Which Incoterms are available?",
    "answer": "FOB, CFR and CIF options can be discussed. The agreed quotation sets out responsibilities, freight and insurance where applicable.",
    "category": "Shipping"
  },
  {
    "id": 9,
    "question": "How long does an order take?",
    "answer": "Lead time depends on stock, grading, packaging, documents and freight availability. An estimate is provided with the quotation and confirmed for each order.",
    "category": "Shipping"
  },
  {
    "id": 10,
    "question": "What export documents are needed?",
    "answer": "Commercial invoices, packing lists and transport documents form the core. Origin, health, phytosanitary or other documents depend on the product and destination.",
    "category": "Shipping"
  },
  {
    "id": 11,
    "question": "What do cashew grades W240 and W320 mean?",
    "answer": "W indicates white whole cashew kernels. The number identifies the approximate count per pound; W240 kernels are generally larger than W320. Confirm the precise specification before ordering.",
    "category": "Quality"
  },
  {
    "id": 12,
    "question": "What payment terms do you accept?",
    "answer": "Payment method, currency and schedule are mutually confirmed in the commercial offer. Do not make payment based solely on this demonstration website.",
    "category": "Ordering"
  },
  {
    "id": 13,
    "question": "How are shipping updates provided?",
    "answer": "Booking, dispatch and transit details are coordinated with the buyer. Tracking information is shared when the freight booking is confirmed.",
    "category": "Shipping"
  },
  {
    "id": 14,
    "question": "Do you support wholesale and repeat supply?",
    "answer": "We welcome discussions with wholesale buyers, importers, retailers and food businesses about ongoing dry-fruit requirements.",
    "category": "General"
  },
  {
    "id": 15,
    "question": "How should dry fruits be stored?",
    "answer": "Keep products in suitable cool, dry conditions away from sunlight and strong odours. Shelf life, temperature and handling instructions are specific to the product and pack.",
    "category": "Quality"
  }
];

export const faqs: [string,string][] = faqList.map(f => [f.question,f.answer]);
