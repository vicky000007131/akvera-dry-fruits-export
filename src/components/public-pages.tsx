import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { ArrowRight, ChevronDown } from "lucide-react";
import { Button } from "./ui/button";
import { CtaBand, PageBanner, SiteShell, TestimonialCard } from "./site";
import { blogs, countryList, faqList, testimonials } from "@/mock/data";
export { AboutPage, ProductsPage, ProductDetailPage, QualityPage, GalleryPage, ContactPage, QualityPage as IndustriesPage, QualityPage as ProcessPage } from "./dry-fruit-pages";
const heroAsset = {url:"/images/hero-export-shipment.webp"};
const warehouseAsset = {url:"/images/quality-inspection.webp"};
const collectionAsset = {url:"/images/gallery-premium-collection.webp"};
const getAssetUrl = (asset: {url: string}, _fallback: string) => asset.url;

export function BlogPage() {
  const [query, setQuery] = useState("");

  const hero = getAssetUrl(
    heroAsset,
    "/images/hero-dry-fruits.webp"
  );
  const warehouse = getAssetUrl(
    warehouseAsset,
    "/images/hero-dry-fruits.webp"
  );
  const collection = getAssetUrl(
    collectionAsset,
    "/images/hero-dry-fruits.webp"
  );

  const getImage = (key: string) => {
    if (key === "warehouse") return warehouse;
    if (key === "products") return collection;
    return hero;
  };

  const filtered = blogs.filter((b) =>
    `${b.title} ${b.category} ${b.intro}`.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <SiteShell>
      <PageBanner
        title="Dry-Fruit Export Insights & Guides"
        subtitle="Practical export guides, maritime container packaging tips, and international dry-fruit market updates."
      />

      <section className="section-band">
        <div className="container-wide">
          <div className="mb-8 max-w-sm">
            <input
              className="field text-xs"
              placeholder="Search insights..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {filtered.map((blog) => (
              <article key={blog.id} className="flex flex-col justify-between rounded-xl border bg-card p-5 shadow-sm">
                <div>
                  <div className="aspect-[1.6] overflow-hidden rounded-lg bg-muted">
                    <img
                      src={getImage(blog.image)}
                      alt={blog.title}
                      className="h-full w-full object-cover"
                      loading="lazy"
                    />
                  </div>
                  <div className="mt-4 flex items-center justify-between text-[11px] font-semibold text-primary">
                    <span>{blog.category}</span>
                    <span className="text-muted-foreground">{blog.readTime}</span>
                  </div>
                  <h2 className="mt-2 text-base font-bold text-foreground">
                    <Link to="/blog/$slug" params={{ slug: blog.id }}>
                      {blog.title}
                    </Link>
                  </h2>
                  <p className="mt-2 text-xs leading-relaxed text-muted-foreground line-clamp-3">{blog.intro}</p>
                </div>

                <div className="mt-5 border-t pt-4 flex items-center justify-between">
                  <span className="text-[11px] text-muted-foreground">{blog.date}</span>
                  <Link
                    to="/blog/$slug"
                    params={{ slug: blog.id }}
                    className="flex items-center gap-1 text-xs font-semibold text-primary hover:underline"
                  >
                    Read More <ArrowRight size={13} />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <CtaBand />
    </SiteShell>
  );
}

export function ArticlePage({ slug }: { slug: string }) {
  const b = blogs.find((item) => item.id === slug);

  const hero = getAssetUrl(
    heroAsset,
    "/images/hero-dry-fruits.webp"
  );
  const warehouse = getAssetUrl(
    warehouseAsset,
    "/images/hero-dry-fruits.webp"
  );
  const collection = getAssetUrl(
    collectionAsset,
    "/images/hero-dry-fruits.webp"
  );

  const getImage = (key: string) => {
    if (key === "warehouse") return warehouse;
    if (key === "products") return collection;
    return hero;
  };

  if (!b) {
    return (
      <SiteShell>
        <PageBanner title="Article Unavailable" subtitle="The requested editorial article was not found." />
        <div className="container-wide py-16 text-center">
          <Button asChild>
            <Link to="/blog">All Insights</Link>
          </Button>
        </div>
      </SiteShell>
    );
  }

  return (
    <SiteShell>
      <article className="container-wide max-w-4xl py-14">
        <Link to="/blog" className="text-xs font-semibold text-primary hover:underline">
          ← Back to All Articles
        </Link>
        <div className="eyebrow mt-6">
          {b.category} · {b.date} · {b.readTime}
        </div>
        <h1 className="text-3xl font-extrabold sm:text-4xl text-foreground leading-tight">{b.title}</h1>
        <p className="mt-3 text-xs font-semibold text-muted-foreground">Author: {b.author}</p>
        <p className="section-copy mt-4 text-base font-medium">{b.intro}</p>

        <img
          src={getImage(b.image)}
          alt={b.title}
          className="my-8 aspect-[1.8] w-full rounded-2xl object-cover shadow-lg"
        />

        <div className="space-y-5 text-sm leading-relaxed text-foreground/90">
          {b.body.split("\n\n").map((para, i) => (
            <p key={i}>{para}</p>
          ))}
        </div>
      </article>

      <CtaBand />
    </SiteShell>
  );
}

export function TestimonialsPage() {
  const [index, setIndex] = useState(0);

  return (
    <SiteShell>
      <PageBanner
        title="Global Client Testimonials"
        subtitle="Illustrative partner stories from our original demonstration data; not verified customer endorsements."
      />

      <section className="section-band">
        <div className="container-wide">
          {/* Active Highlight */}
          <div className="mx-auto max-w-3xl">
            {testimonials[index] && <TestimonialCard {...testimonials[index]} />}
            <div className="mt-6 flex justify-center gap-2">
              {testimonials.map((t, i) => (
                <button
                  key={t.id}
                  type="button"
                  onClick={() => setIndex(i)}
                  className={`size-3 rounded-full transition-all ${
                    index === i ? "w-8 bg-primary" : "bg-muted-foreground/30"
                  }`}
                  aria-label={`Show testimonial ${i + 1}`}
                />
              ))}
            </div>
          </div>

          {/* Grid of All Testimonials */}
          <div className="mt-16 grid gap-6 md:grid-cols-3">
            {testimonials.map((t) => (
              <TestimonialCard key={t.id} {...t} />
            ))}
          </div>
        </div>
      </section>

      <CtaBand />
    </SiteShell>
  );
}

export function FAQPage() {
  const [open, setOpen] = useState<number | null>(0);
  const [query, setQuery] = useState("");

  const filtered = faqList.filter((f) =>
    `${f.question} ${f.answer} ${f.category}`.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <SiteShell>
      <PageBanner
        title="15 Frequently Asked Questions"
        subtitle="Full transparency on ordering, laboratory inspections, ocean shipping terms, and payment methods."
      />

      <section className="section-band">
        <div className="container-wide max-w-4xl">
          <input
            className="field mb-8 text-xs"
            placeholder="Search FAQs by question or keyword..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />

          <div className="divide-y rounded-2xl border bg-card p-6 shadow-sm">
            {filtered.map((item, i) => (
              <div key={item.id} className="py-4 first:pt-0 last:pb-0">
                <button
                  type="button"
                  onClick={() => setOpen(open === i ? null : i)}
                  className="flex w-full items-center justify-between gap-4 text-left text-sm font-bold text-foreground transition-colors hover:text-primary"
                  aria-expanded={open === i}
                >
                  <span>
                    <span className="mr-2 text-primary">Q{item.id}.</span> {item.question}
                  </span>
                  <ChevronDown
                    size={18}
                    className={`shrink-0 transition-transform ${open === i ? "rotate-180 text-primary" : ""}`}
                  />
                </button>
                {open === i && (
                  <p className="mt-3 text-xs leading-relaxed text-muted-foreground sm:text-sm pl-6">
                    {item.answer}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaBand />
    </SiteShell>
  );
}

export function CountriesPage() {
  const [selected, setSelected] = useState(countryList[0]);
  const hero = getAssetUrl(
    heroAsset,
    "/images/hero-dry-fruits.webp"
  );

  if (!selected) return null;
  return (
    <SiteShell>
      <PageBanner
        title="Our Global Export Reach"
        subtitle="Illustrative dry-fruit destination profiles. Availability and freight timings are confirmed for each order."
      />

      <section className="section-band">
        <div className="container-wide grid gap-10 lg:grid-cols-[1.2fr_1fr]">
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
            {countryList.map((c) => (
              <button
                key={c.id}
                type="button"
                onClick={() => setSelected(c)}
                className={`flex flex-col justify-between rounded-xl border p-4 text-left transition-all ${
                  selected.id === c.id
                    ? "border-primary bg-primary text-primary-foreground shadow-md scale-[1.02]"
                    : "border-border bg-card text-foreground hover:bg-muted"
                }`}
              >
                <span className="text-xs font-bold">{c.code}</span>
                <div className="mt-3">
                  <p className="text-sm font-bold">{c.name}</p>
                  <p className={`text-[10px] ${selected.id === c.id ? "opacity-80" : "text-muted-foreground"}`}>
                    {c.region}
                  </p>
                </div>
              </button>
            ))}
          </div>

          <div className="rounded-2xl border bg-card p-6 shadow-sm flex flex-col justify-between">
            <div>
              <img
                src={hero}
                alt="Ocean vessel container logistics from India"
                className="aspect-[1.6] w-full rounded-xl object-cover shadow-md"
              />
              <div className="mt-6">
                <span className="rounded bg-secondary px-2.5 py-0.5 text-xs font-bold text-primary">
                  {selected.region}
                </span>
                <h2 className="mt-2 text-2xl font-bold">India → {selected.name}</h2>
                <div className="mt-4 space-y-2 text-xs text-muted-foreground">
                  <p>
                    <span className="font-semibold text-foreground">Ports:</span> {selected.ports.join(", ")}
                  </p>
                  <p>
                    <span className="font-semibold text-foreground">Estimated Transit:</span> {selected.transitDays}
                  </p>
                  <p>
                    <span className="font-semibold text-foreground">Key Products:</span>{" "}
                    {selected.topProducts.join(", ")}
                  </p>
                  <p className="mt-3 leading-relaxed">{selected.description}</p>
                </div>
              </div>
            </div>

            <Button asChild className="mt-6 font-semibold">
              <Link to="/contact">Discuss Shipments to {selected.name} →</Link>
            </Button>
          </div>
        </div>
      </section>

      <CtaBand />
    </SiteShell>
  );
}

export function LegalPage({ kind }: { kind: "privacy" | "terms" | "sitemap" }) {
  const title = kind === "privacy" ? "Privacy Policy" : kind === "terms" ? "Terms & Conditions" : "Sitemap";

  return (
    <SiteShell>
      <PageBanner title={title} subtitle="Akvera Universal · Corporate Trade & Export Documentation" />

      <section className="section-band">
        <div className="container-wide max-w-4xl space-y-6 text-xs sm:text-sm leading-relaxed text-foreground/90">
          {kind === "sitemap" ? (
            <div className="grid gap-4 sm:grid-cols-3">
              {([
                ["Home", "/"],
                ["About", "/about"],
                ["Products", "/products"],
                ["Industries", "/industries"],
                ["Export Process", "/export-process"],
                ["Quality Assurance", "/quality"],
                ["Gallery", "/gallery"],
                ["Blog", "/blog"],
                ["Testimonials", "/testimonials"],
                ["FAQ", "/faq"],
                ["Contact", "/contact"],
                ["Countries", "/countries"],
                ["Privacy Policy", "/privacy-policy"],
                ["Terms & Conditions", "/terms"],
                ["Admin Login", "/admin/login"],
              ] as const).map(([name, path]) => (
                <Link
                  key={path}
                  to={path}
                  className="rounded-lg border bg-card p-3 font-semibold text-primary transition-colors hover:bg-muted"
                >
                  {name} →
                </Link>
              ))}
            </div>
          ) : (
            <>
              <h2 className="text-xl font-bold text-foreground">
                {kind === "privacy" ? "Data Protection & Privacy Policy" : "Commercial Terms & Conditions"}
              </h2>
              <p>
                {kind === "privacy"
                  ? "This site is a demonstration. Enquiries and catalogue edits are held in the current browser session only and are lost when the page is refreshed. Form submission does not send an email. To contact Akvera Universal directly, use the listed company email or phone."
                  : "All dry-fruit quotations, proforma invoices, and export sales confirmations issued by Akvera Universal are governed by standard International Chamber of Commerce (ICC) Incoterms 2020. Final contract specifications, payment terms (including Letters of Credit), and shipping schedules must be mutually confirmed prior to container booking."}
              </p>
              <h3 className="text-lg font-bold text-foreground">Jurisdiction & Contact</h3>
              <p>
                Official communication regarding contracts, phytosanitary requirements, or data privacy should be
                addressed to Mr. Avinash Yadav at info@akverauniversal.com or +91 902 1300 674.
              </p>
            </>
          )}
        </div>
      </section>

      <CtaBand />
    </SiteShell>
  );
}
