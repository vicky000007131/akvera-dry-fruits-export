import { Link, useLocation } from "@tanstack/react-router";
import { useEffect, useRef, useState, type ReactNode } from "react";
import { ArrowRight, ArrowUp, Check, ChevronDown, Globe2, Leaf, Mail, MapPin, Menu, MessageCircle, Package, Phone, ShieldCheck, Sprout, Star, X } from "lucide-react";
import { Button } from "./ui/button";
import { useDemo } from "@/mock/store";
import { companyInfo, type Product } from "@/mock/data";

export const navItems = [["Home", "/"], ["About", "/about"], ["Product", "/products"], ["Gallery", "/gallery"], ["Contact", "/contact"], ["Quality", "/quality"]] as const;
const qualityLinks = [["Quality Assurance", "quality-assurance"], ["Industries", "industries"], ["Export Process", "export-process"]] as const;

export function Brand() {
  return <span className="brand"><span className="brand-mark"><Sprout size={30} strokeWidth={1.3} /></span><span><span className="brand-name">AKVERA</span><span className="brand-sub">UNIVERSAL</span></span></span>;
}

export function SiteShell({ children }: { children: ReactNode }) {
  const { pathname } = useLocation();
  const { openQuote } = useDemo();
  const [menu, setMenu] = useState(false);
  const [quality, setQuality] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => { const onScroll = () => setScrolled(window.scrollY > 300); window.addEventListener("scroll", onScroll); return () => window.removeEventListener("scroll", onScroll); }, []);
  useEffect(() => { setMenu(false); setQuality(false); }, [pathname]);
  const active = (path: string) => path === "/" ? pathname === "/" : pathname.startsWith(path);
  return <div className="site-shell">
    <div className="trade-bar"><div className="container-wide"><span>ROOTED IN QUALITY. CONNECTED TO THE WORLD.</span><a href={companyInfo.socials.email}><Mail size={12} />{companyInfo.email}</a></div></div>
    <header className="site-header"><div className="container-wide header-inner">
      <Link to="/" aria-label="Akvera Universal Home"><Brand /></Link>
      <nav className="desktop-nav" aria-label="Main navigation">{navItems.map(([name,path]) => name !== "Quality" ? <Link key={path} to={path} className={`nav-link ${active(path) ? "active" : ""}`} aria-current={active(path) ? "page" : undefined}>{name}</Link> : <div key={path} className="quality-nav" onMouseEnter={() => setQuality(true)} onMouseLeave={() => setQuality(false)} onKeyDown={e => { if(e.key === "Escape") setQuality(false); }} onBlur={e => { if(!e.currentTarget.contains(e.relatedTarget)) setQuality(false); }}>
        <div className="quality-trigger"><Link to="/quality" className={`nav-link ${active(path) ? "active" : ""}`} aria-current={active(path) ? "page" : undefined}>Quality</Link><Button variant="ghost" size="icon" className="quality-arrow" aria-label="Quality sections" aria-expanded={quality} onClick={() => setQuality(!quality)}><ChevronDown size={12} /></Button></div>
        {quality && <div className="quality-menu">{qualityLinks.map(([label,hash]) => <Link key={hash} to="/quality" hash={hash} onClick={() => setQuality(false)}>{label}<ArrowRight size={13} /></Link>)}</div>}
      </div>)}</nav>
      <div className="header-actions"><Button variant="default" onClick={() => openQuote()} className="quote-button">Request a Quote <ArrowRight size={15} /></Button><Button variant="ghost" size="icon" className="mobile-nav-toggle" aria-label={menu ? "Close menu" : "Open menu"} aria-expanded={menu} onClick={() => setMenu(!menu)}>{menu ? <X /> : <Menu />}</Button></div>
    </div>{menu && <nav className="mobile-menu" aria-label="Mobile navigation">{navItems.map(([name,path]) => <div key={path}><Link to={path} className={`nav-link ${active(path) ? "active" : ""}`} onClick={() => setMenu(false)}>{name}</Link>{name === "Quality" && <div className="mobile-quality-links">{qualityLinks.map(([label,hash]) => <Link key={hash} to="/quality" hash={hash} onClick={() => setMenu(false)}>{label}</Link>)}</div>}</div>)}</nav>}</header>
    <main className="flex-1">{children}</main>
    <footer className="site-footer"><div className="container-wide footer-grid"><div><Link to="/" aria-label="Akvera Universal Home"><Brand /></Link><p className="footer-intro">Premium dry fruits. Thoughtful sourcing. Lasting global partnerships. Your dry-fruit export and international trading partner, based in India.</p><div className="footer-socials"><Button asChild variant="footer" size="icon"><a href={companyInfo.socials.whatsapp} target="_blank" rel="noreferrer" aria-label="WhatsApp Akvera Universal" title="WhatsApp"><MessageCircle size={17} /></a></Button><Button asChild variant="footer" size="icon"><a href={companyInfo.socials.email} aria-label="Email Akvera Universal" title="Email"><Mail size={17} /></a></Button></div></div>
      <div><h3>Explore</h3><div className="footer-links">{navItems.map(([name,path]) => <Link key={path} to={path}>{name}</Link>)}</div></div>
      <div><h3>Our dry fruits</h3><div className="footer-links">{["Almonds","Cashews","Pistachios","Walnuts","Dates","Figs"].map(name => <Link key={name} to="/products/$slug" params={{slug:name.toLowerCase()}}>{name}</Link>)}<Link to="/products">View all products <ArrowRight size={12} /></Link></div></div>
      <div><h3>Let’s connect</h3><div className="footer-contact"><p><MapPin size={16} />{companyInfo.address}</p><a href={`tel:${companyInfo.phone.replace(/\s/g,"")}`}><Phone size={15}/>{companyInfo.phone}</a><a href={companyInfo.socials.email}><Mail size={15}/>{companyInfo.email}</a><span>{companyInfo.clientName}</span></div><Link to="/contact" className="footer-enquiry">Discuss your requirements <ArrowRight size={14}/></Link></div></div>
      <div className="footer-line"><div className="container-wide footer-bottom"><span>© {new Date().getFullYear()} Akvera Universal. All rights reserved.</span><span>Designed and development by SOSynch Ai Tech</span><Link to="/admin/login">Admin Login <ArrowRight size={12}/></Link></div></div>
    </footer>
    <div className="floating-contact"><Button asChild aria-label="Chat on WhatsApp" title="Chat on WhatsApp"><a href={companyInfo.socials.whatsapp} target="_blank" rel="noreferrer"><MessageCircle size={21}/></a></Button>{scrolled && <Button variant="outline" size="icon" aria-label="Back to top" title="Back to top" onClick={() => window.scrollTo({top:0,behavior:"smooth"})}><ArrowUp size={18}/></Button>}</div><QuoteModal />
  </div>;
}

export function Modal({
  title,
  children,
  onClose,
}: {
  title: string;
  children: ReactNode;
  onClose: () => void;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const previous = document.activeElement;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    ref.current?.focus();

    function key(e: KeyboardEvent) {
      if (e.key === "Escape") onClose();
      if (e.key === "Tab") {
        const els = ref.current?.querySelectorAll<HTMLElement>(
          'button,input,select,textarea,a[href],[tabindex="0"]'
        );
        if (!els?.length) return;
        const first = els[0];
        const last = els[els.length - 1];
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last?.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first?.focus();
        }
      }
    }

    document.addEventListener("keydown", key);
    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", key);
      if (previous instanceof HTMLElement) previous.focus();
    };
  }, [onClose]);

  return (
    <div
      className="modal-overlay"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-label={title}
        className="modal-box"
        ref={ref}
        tabIndex={-1}
      >
        <div className="mb-6 flex items-center justify-between gap-4 border-b pb-4">
          <h2 className="text-lg font-bold tracking-tight">{title}</h2>
          <Button
            variant="ghost"
            size="icon"
            aria-label="Close dialog"
            onClick={onClose}
            className="size-8 rounded-full"
          >
            <X size={18} />
          </Button>
        </div>
        {children}
      </div>
    </div>
  );
}

function QuoteModal() {
  const { quoteOpen, setQuoteOpen, quoteProduct } = useDemo();
  if (!quoteOpen) return null;
  return (
    <Modal title="Request an Official Export Quote" onClose={() => setQuoteOpen(false)}>
      <InquiryForm kind="quote" product={quoteProduct} />
    </Modal>
  );
}


export function InquiryForm({ kind = "contact", product = "" }: { kind?: "quote" | "contact"; product?: string }) {
 const {products, setRecords} = useDemo();
 const [success,setSuccess] = useState(false);
 if(success) return <div className="form-success" role="status"><Check size={28}/><h3>Enquiry added to the demo workspace.</h3><p>This preview keeps enquiries for this session only. For a live response, please email or call our export desk.</p><a href={companyInfo.socials.email}>{companyInfo.email}</a></div>;
 return <form className="grid gap-5" onSubmit={e => {
   e.preventDefault(); const f = new FormData(e.currentTarget); const get = (key:string) => f.get(key)?.toString().trim() || "";
   const key=kind === "quote" ? "quote-requests" : "contact-requests";
   setRecords(r => ({...r,[key]:[{id:crypto.randomUUID(),name:get("name"),detail:[get("email"),get("phone"),get("company"),get("country"),get("product"),get("quantity"),get("message")].filter(Boolean).join(" · "),status:true},...(r[key] || [])]})); setSuccess(true);
 }}>
  <div className="grid gap-5 sm:grid-cols-2"><label><span className="field-label">Name *</span><input className="field" name="name" autoComplete="name" placeholder="Your full name" required maxLength={150}/></label><label><span className="field-label">Email *</span><input className="field" type="email" name="email" autoComplete="email" placeholder="you@company.com" required maxLength={254}/></label></div>
  <div className="grid gap-5 sm:grid-cols-2"><label><span className="field-label">Phone *</span><input className="field" type="tel" name="phone" autoComplete="tel" placeholder="Include country code" required maxLength={40}/></label><label><span className="field-label">Company Name</span><input className="field" name="company" autoComplete="organization" placeholder="Your company" maxLength={200}/></label></div>
  <div className="grid gap-5 sm:grid-cols-2"><label><span className="field-label">Country *</span><input className="field" name="country" autoComplete="country-name" placeholder="Destination country" required maxLength={100}/></label><label><span className="field-label">Product Interested In *</span><select className="field" name="product" defaultValue={product} required><option value="">Select a dry fruit</option>{products.filter(p => p.status).map(p => <option key={p.id} value={p.name}>{p.name}</option>)}<option value="Mixed dry fruits">Mixed dry fruits</option></select></label></div>
  {kind === "quote" && <label><span className="field-label">Required Quantity *</span><input className="field" name="quantity" placeholder="Quantity and preferred pack size" required maxLength={150}/></label>}
  <label><span className="field-label">Message *</span><textarea className="field min-h-32" name="message" placeholder="Tell us about your preferred grade, quantity, packaging and destination." required maxLength={5000}/></label>
  <p className="text-xs leading-relaxed text-muted-foreground">Demo enquiry · Saved in the current session only; no email is sent.</p>
  <Button type="submit" className="h-12 justify-between">{kind === "quote" ? "Request Quotation" : "Submit Enquiry"}<ArrowRight size={16}/></Button>
 </form>;
}

export function PageBanner({title,subtitle}:{title:string;subtitle:string}) {
 return <section className="page-banner"><div className="container-wide"><div className="breadcrumbs"><Link to="/">Home</Link><ArrowRight size={12}/><span>{title}</span></div><h1>{title}</h1><p className="section-copy mt-4 max-w-2xl">{subtitle}</p></div></section>;
}

export function ProductPhoto({product,className=""}:{product:Product;className?:string}) {
 return <div className={`product-photo ${className}`}><img src={product.imageUrl || `/images/product-${product.id}.webp`} alt={`${product.name} — selected premium dry fruits`} width={800} height={800} loading="lazy"/></div>;
}
export function ProductCard({product}:{product:Product}) {
 const {openQuote}=useDemo();
 return <article className="product-card group"><Link to="/products/$slug" params={{slug:product.id}} aria-label={`View ${product.name}`}><ProductPhoto product={product}/></Link><div className="product-body"><span className="product-category">{product.category}</span><h3><Link to="/products/$slug" params={{slug:product.id}}>{product.name}</Link></h3><p>{product.description}</p><span className="product-grade"><Check size={12}/>{product.qualityGrade}</span></div><div className="product-actions"><Button variant="link" asChild><Link to="/products/$slug" params={{slug:product.id}}>View Details<ArrowRight size={13}/></Link></Button><Button variant="ghost" size="icon" onClick={() => openQuote(product.name)} aria-label={`Enquire about ${product.name}`} title={`Enquire about ${product.name}`}><Mail size={16}/></Button></div></article>;
}
export function CtaBand() {
 const {openQuote}=useDemo();
 return <section className="cta-band"><div className="container-wide"><div><span className="eyebrow">A GOOD PARTNERSHIP STARTS WITH A CONVERSATION</span><h2>Let’s grow something lasting.</h2><p>Tell us what your market needs. We’ll help you find the right dry-fruit selection.</p></div><Button variant="hero" size="lg" onClick={() => openQuote()}>Request an Export Quote<ArrowRight size={16}/></Button></div></section>;
}

export function TestimonialCard({
  name,
  company,
  country,
  role,
  text,
  rating = 5,
}: {
  name: string;
  company?: string;
  country: string;
  role: string;
  text: string;
  rating?: number;
}) {
  return (
    <article className="rounded-lg border bg-card p-7 shadow-sm transition-shadow hover:shadow-md">
      <div className="mb-4 flex gap-1 text-accent">
        {Array.from({ length: rating }).map((_, i) => (
          <Star key={i} size={15} fill="currentColor" />
        ))}
      </div>
      <p className="text-xs leading-relaxed text-foreground/90 sm:text-sm">“{text}”</p>
      <div className="mt-6 flex items-center gap-3 border-t pt-5">
        <div className="grid size-11 shrink-0 place-items-center rounded-full bg-secondary font-bold text-primary">
          {name
            .split(" ")
            .map((s) => s[0])
            .slice(0, 2)
            .join("")}
        </div>
        <div>
          <h3 className="text-xs font-bold sm:text-sm">{name}</h3>
          <p className="text-[11px] text-muted-foreground">
            {role} {company ? `· ${company}` : ""} ({country})
          </p>
        </div>
      </div>
    </article>
  );
}

export const trustIcons = { Globe2, Leaf, ShieldCheck, Sprout };
