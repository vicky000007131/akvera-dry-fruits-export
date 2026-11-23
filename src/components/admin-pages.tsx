import { Link, useNavigate } from "@tanstack/react-router";
import {
  Activity,
  ArrowDownWideNarrow,
  ArrowLeft,
  ArrowRight,
  Bell,
  Box,
  Building2,
  Calendar,
  Check,
  ChevronLeft,
  ChevronRight,
  CircleHelp,
  ClipboardList,
  Compass,
  FileCheck,
  FileText,
  Globe2,
  Image as ImageIcon,
  KeyRound,
  Layers,
  LayoutDashboard,
  LogOut,
  Mail,
  Menu,
  Moon,
  Package,
  Pencil,
  Phone,
  Plus,
  Search,
  Settings,
  Share2,
  ShieldAlert,
  ShieldCheck,
  Ship,
  Sliders,
  Sparkles,
  Sprout,
  Sun,
  Trash2,
  TrendingUp,
  Truck,
  User,
  Users,
  X,
} from "lucide-react";
import { useMemo, useState, type FormEvent, type ReactNode } from "react";
import { Button } from "@/components/ui/button";
import { Modal, Brand } from "@/components/site";
import { modules, moduleSlug, type DemoRow, type Product, companyInfo } from "@/mock/data";
import { useDemo } from "@/mock/store";

export const moduleIcons: Record<string, typeof Package> = {
  products: Package,
  categories: Layers,
  countries: Globe2,
  "export-destinations": Ship,
  gallery: ImageIcon,
  blogs: FileText,
  testimonials: Users,
  faqs: CircleHelp,
  "quality-certificates": ShieldCheck,
  "export-process": Truck,
  services: Sprout,
  "team-members": Users,
  "homepage-banner": ImageIcon,
  "hero-slider": Sliders,
  "contact-requests": Mail,
  "quote-requests": ClipboardList,
  "newsletter-subscribers": Mail,
  "site-settings": Settings,
  profile: User,
  "change-password": KeyRound,
  "media-library": ImageIcon,
  "seo-settings": Compass,
  "menu-management": Menu,
  "footer-management": Building2,
  "theme-settings": Sliders,
  "analytics-dashboard": TrendingUp,
  "activity-logs": Activity,
  notifications: Bell,
};

function StarIconFallback(props: { size?: number; className?: string }) {
  return <Users {...props} />;
}

export function AdminShell({ children, title }: { children: ReactNode; title: string }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [navSearch, setNavSearch] = useState("");
  const [showNotifications, setShowNotifications] = useState(false);
  const { dark, toggleDark, records } = useDemo();
  const navigate = useNavigate();

  const notifications = records["notifications"] ?? [];

  const filteredModules = modules.filter((m) =>
    m.toLowerCase().includes(navSearch.trim().toLowerCase())
  );

  return (
    <div className="admin-shell min-h-screen bg-muted/30 text-foreground transition-colors">
      {/* Sidebar */}
      <aside
        className={`admin-sidebar fixed bottom-0 left-0 top-0 z-50 flex w-64 flex-col border-r bg-card p-4 transition-transform duration-300 ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
        }`}
      >
        <div className="flex items-center justify-between border-b pb-4">
          <Link to="/" aria-label="Akvera Universal Home">
            <Brand />
          </Link>
          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden"
            onClick={() => setSidebarOpen(false)}
            aria-label="Close menu"
          >
            <X size={18} />
          </Button>
        </div>

        {/* Sidebar Search Filter */}
        <div className="my-3">
          <label className="relative block">
            <Search className="absolute left-2.5 top-2.5 text-muted-foreground" size={13} />
            <input
              className="field h-8 pl-8 text-xs"
              placeholder="Filter modules..."
              value={navSearch}
              onChange={(e) => setNavSearch(e.target.value)}
            />
          </label>
        </div>

        {/* Navigation Modules */}
        <div className="flex-1 overflow-y-auto space-y-1 pr-1">
          <Link
            to="/admin"
            className="admin-nav flex items-center gap-2.5 rounded-lg px-3 py-2 text-xs font-semibold text-foreground/80 transition-colors hover:bg-primary/10 hover:text-primary"
            onClick={() => setSidebarOpen(false)}
          >
            <LayoutDashboard size={15} /> Dashboard Overview
          </Link>

          <p className="px-3 pt-3 text-[10px] font-bold uppercase tracking-wider text-muted-foreground">
            Modules ({filteredModules.length})
          </p>

          <nav className="space-y-0.5">
            {filteredModules.map((name) => {
              const slug = moduleSlug(name);
              const Icon = moduleIcons[slug] || Box;
              return (
                <Link
                  key={slug}
                  to="/admin/$module"
                  params={{ module: slug }}
                  onClick={() => setSidebarOpen(false)}
                  className="admin-nav flex items-center justify-between rounded-md px-3 py-1.5 text-xs font-medium text-foreground/75 transition-colors hover:bg-muted hover:text-primary"
                >
                  <span className="flex items-center gap-2.5 truncate">
                    <Icon size={14} className="shrink-0 text-muted-foreground" />
                    <span className="truncate">{name}</span>
                  </span>
                </Link>
              );
            })}
          </nav>
        </div>

        {/* Sidebar Footer */}
        <div className="mt-4 border-t pt-3 space-y-1">
          <Link
            to="/"
            className="flex items-center gap-2 rounded-md px-3 py-2 text-xs font-semibold text-primary transition-colors hover:bg-primary/10"
          >
            <ArrowLeft size={14} /> Back to Live Website
          </Link>
          <Link
            to="/admin/login"
            className="flex items-center gap-2 rounded-md px-3 py-2 text-xs font-semibold text-destructive transition-colors hover:bg-destructive/10"
          >
            <LogOut size={14} /> Exit Demo Session
          </Link>
        </div>
      </aside>

      {/* Main Content Area */}
      <div className="admin-main min-h-screen lg:ml-64">
        {/* Top Navbar */}
        <header className="sticky top-0 z-40 flex h-16 items-center justify-between border-b bg-card px-5 sm:px-8 shadow-sm">
          <div className="flex items-center gap-3">
            <Button
              variant="ghost"
              size="icon"
              className="lg:hidden"
              onClick={() => setSidebarOpen(true)}
              aria-label="Open sidebar"
            >
              <Menu size={20} />
            </Button>
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">
                Akvera Universal · Admin Control Panel
              </p>
              <h1 className="text-base font-bold text-foreground sm:text-lg">{title}</h1>
            </div>
          </div>

          <div className="flex items-center gap-3">
            {/* Dark Mode Toggle */}
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleDark}
              className="size-9 rounded-full"
              aria-label="Toggle theme"
            >
              {dark ? <Sun size={17} /> : <Moon size={17} />}
            </Button>

            {/* Notifications Popover Trigger */}
            <div className="relative">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setShowNotifications(!showNotifications)}
                className="relative size-9 rounded-full"
                aria-label="Notifications"
              >
                <Bell size={17} />
                <span className="absolute right-1 top-1 grid size-4 place-items-center rounded-full bg-accent text-[9px] font-bold text-primary">
                  {notifications.length}
                </span>
              </Button>

              {showNotifications && (
                <div className="absolute right-0 top-11 z-50 w-80 rounded-xl border bg-card p-4 shadow-xl">
                  <div className="flex items-center justify-between border-b pb-2">
                    <span className="text-xs font-bold">Notifications</span>
                    <span className="text-[10px] text-muted-foreground">{notifications.length} unread</span>
                  </div>
                  <div className="mt-2 divide-y max-h-64 overflow-y-auto text-xs">
                    {notifications.map((n) => (
                      <div key={n.id} className="py-2.5">
                        <p className="font-semibold text-foreground">{n.name}</p>
                        <p className="mt-0.5 text-[11px] text-muted-foreground">{n.detail}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Profile Avatar */}
            <div className="flex items-center gap-2.5 border-l pl-3">
              <div className="grid size-9 place-items-center rounded-full bg-secondary font-bold text-primary text-xs">
                AY
              </div>
              <div className="hidden sm:block text-left text-xs">
                <p className="font-bold text-foreground">Mr. Avinash Yadav</p>
                <p className="text-[10px] text-muted-foreground">Founder & Admin</p>
              </div>
            </div>
          </div>
        </header>

        <main className="p-5 sm:p-8 max-w-7xl mx-auto">{children}</main>
      </div>
    </div>
  );
}

export function AdminOverview() {
  const { products, records } = useDemo();
  const quotes = records["quote-requests"] ?? [];
  const contacts = records["contact-requests"] ?? [];
  const activity = records["activity-logs"] ?? [];

  return (
    <AdminShell title="Dashboard Overview">
      {/* Top Welcome Band */}
      <div className="mb-8 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <span className="text-xs font-bold uppercase tracking-wider text-primary">Export Command Center</span>
          <h2 className="text-2xl font-bold sm:text-3xl text-foreground">Welcome, Mr. Avinash Yadav</h2>
          <p className="text-xs text-muted-foreground mt-1">
            Illustrative dry-fruit shipments, enquiries and catalogue items. Changes are kept for this session only.
          </p>
        </div>
        <Button asChild variant="outline" className="font-semibold text-xs">
          <Link to="/">View Public Website →</Link>
        </Button>
      </div>

      {/* 6 Metric KPI Cards */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
        <article className="rounded-xl border bg-card p-4 shadow-sm">
          <p className="text-[11px] font-semibold text-muted-foreground">Listed Products</p>
          <p className="mt-2 text-2xl font-extrabold text-foreground">{products.filter((p) => p.status).length}</p>
          <span className="mt-1 block text-[10px] text-emerald-600 font-semibold">100% Export Ready</span>
        </article>

        <article className="rounded-xl border bg-card p-4 shadow-sm">
          <p className="text-[11px] font-semibold text-muted-foreground">Quote Requests</p>
          <p className="mt-2 text-2xl font-extrabold text-accent">{quotes.length}</p>
          <span className="mt-1 block text-[10px] text-accent font-semibold">Pending Review</span>
        </article>

        <article className="rounded-xl border bg-card p-4 shadow-sm">
          <p className="text-[11px] font-semibold text-muted-foreground">Contact Enquiries</p>
          <p className="mt-2 text-2xl font-extrabold text-foreground">{contacts.length}</p>
          <span className="mt-1 block text-[10px] text-muted-foreground font-semibold">Active Inquiries</span>
        </article>

        <article className="rounded-xl border bg-card p-4 shadow-sm">
          <p className="text-[11px] font-semibold text-muted-foreground">Export Markets</p>
          <p className="mt-2 text-2xl font-extrabold text-primary">35+</p>
          <span className="mt-1 block text-[10px] text-primary font-semibold">6 Continents</span>
        </article>

        <article className="rounded-xl border bg-card p-4 shadow-sm">
          <p className="text-[11px] font-semibold text-muted-foreground">Monthly Volume</p>
          <p className="mt-2 text-2xl font-extrabold text-foreground">1,850 MT</p>
          <span className="mt-1 block text-[10px] text-emerald-600 font-semibold">+14% vs Last Month</span>
        </article>

        <article className="rounded-xl border bg-card p-4 shadow-sm">
          <p className="text-[11px] font-semibold text-muted-foreground">Containers in Transit</p>
          <p className="mt-2 text-2xl font-extrabold text-primary">28 FCL</p>
          <span className="mt-1 block text-[10px] text-accent font-semibold">Active Maritime Freight</span>
        </article>
      </div>

      {/* Mock Analytics Charts */}
      <div className="mt-8 grid gap-6 lg:grid-cols-12">
        {/* Monthly Export Volume Bar Chart */}
        <section className="rounded-2xl border bg-card p-6 shadow-sm lg:col-span-8">
          <div className="flex items-center justify-between border-b pb-4">
            <div>
              <h3 className="text-base font-bold text-foreground">Monthly Export Volume (Metric Tonnes)</h3>
              <p className="text-xs text-muted-foreground">Illustrative dry-fruit export volumes</p>
            </div>
            <span className="rounded-lg bg-secondary px-2.5 py-1 text-xs font-bold text-primary">
              2026 Season
            </span>
          </div>

          <div className="mt-6 flex h-48 items-end gap-3 pt-4 sm:gap-4">
            {[
              ["Jan", 1100],
              ["Feb", 1250],
              ["Mar", 1400],
              ["Apr", 1650],
              ["May", 1500],
              ["Jun", 1300],
              ["Jul", 1450],
              ["Aug", 1600],
              ["Sep", 1720],
              ["Oct", 1850],
              ["Nov", 1920],
              ["Dec", 2050],
            ].map(([month, val]) => (
              <div key={month as string} className="flex flex-1 flex-col items-center gap-2">
                <div
                  className="w-full rounded-t-md bg-primary transition-all duration-500 hover:bg-accent"
                  style={{ height: `${((val as number) / 2200) * 100}%` }}
                  title={`${month}: ${val} MT`}
                />
                <span className="text-[10px] font-medium text-muted-foreground">{month as string}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Commodity Distribution Breakdown */}
        <section className="rounded-2xl border bg-card p-6 shadow-sm lg:col-span-4 flex flex-col justify-between">
          <div>
            <h3 className="text-base font-bold text-foreground">Export Category Share</h3>
            <p className="text-xs text-muted-foreground">Distribution across volume categories</p>

            <div className="mt-6 space-y-4">
              <div>
                <div className="flex justify-between text-xs font-semibold">
                  <span>Almonds & Cashews</span>
                  <span className="text-primary font-bold">38%</span>
                </div>
                <div className="mt-1.5 h-2 w-full rounded-full bg-muted overflow-hidden">
                  <div className="h-full bg-primary w-[38%]" />
                </div>
              </div>

              <div>
                <div className="flex justify-between text-xs font-semibold">
                  <span>Pistachios & Walnuts</span>
                  <span className="text-accent font-bold">26%</span>
                </div>
                <div className="mt-1.5 h-2 w-full rounded-full bg-muted overflow-hidden">
                  <div className="h-full bg-accent w-[26%]" />
                </div>
              </div>

              <div>
                <div className="flex justify-between text-xs font-semibold">
                  <span>Dates & Raisins</span>
                  <span className="text-leaf font-bold">20%</span>
                </div>
                <div className="mt-1.5 h-2 w-full rounded-full bg-muted overflow-hidden">
                  <div className="h-full bg-leaf w-[20%]" />
                </div>
              </div>

              <div>
                <div className="flex justify-between text-xs font-semibold">
                  <span>Figs, Apricots, Prunes & Hazelnuts</span>
                  <span className="text-foreground font-bold">16%</span>
                </div>
                <div className="mt-1.5 h-2 w-full rounded-full bg-muted overflow-hidden">
                  <div className="h-full bg-foreground/60 w-[16%]" />
                </div>
              </div>
            </div>
          </div>

          <div className="mt-6 rounded-xl bg-muted/50 p-3 text-[11px] text-muted-foreground">
            <span className="font-bold text-foreground">Port Note:</span> Mundra and Nhava Sheva (JNPT) handle 92% of our export container traffic.
          </div>
        </section>
      </div>

      {/* Inquiries & Recent Activity */}
      <div className="mt-8 grid gap-6 lg:grid-cols-2">
        {/* Latest Quote Requests */}
        <section className="rounded-2xl border bg-card p-6 shadow-sm">
          <div className="flex items-center justify-between border-b pb-4">
            <h3 className="text-base font-bold text-foreground">Recent Quote Requests</h3>
            <Button asChild variant="link" size="sm" className="text-xs">
              <Link to="/admin/$module" params={{ module: "quote-requests" }}>
                View All Quotes →
              </Link>
            </Button>
          </div>

          <div className="mt-4 divide-y">
            {quotes.slice(0, 5).map((q) => (
              <div key={q.id} className="py-3 flex items-start justify-between gap-4">
                <div>
                  <p className="text-xs font-bold text-foreground">{q.name}</p>
                  <p className="mt-0.5 text-[11px] text-muted-foreground">{q.detail}</p>
                </div>
                <span className="rounded bg-secondary px-2 py-0.5 text-[10px] font-bold text-primary">
                  New
                </span>
              </div>
            ))}
          </div>
        </section>

        {/* Activity Logs */}
        <section className="rounded-2xl border bg-card p-6 shadow-sm">
          <div className="flex items-center justify-between border-b pb-4">
            <h3 className="text-base font-bold text-foreground">Operational Activity Logs</h3>
            <Button asChild variant="link" size="sm" className="text-xs">
              <Link to="/admin/$module" params={{ module: "activity-logs" }}>
                Full Log History →
              </Link>
            </Button>
          </div>

          <div className="mt-4 divide-y">
            {activity.slice(0, 5).map((act) => (
              <div key={act.id} className="py-3 flex items-start gap-3">
                <span className="grid size-7 place-items-center rounded-lg bg-secondary text-primary shrink-0 mt-0.5">
                  <Activity size={14} />
                </span>
                <div>
                  <p className="text-xs font-bold text-foreground">{act.name}</p>
                  <p className="mt-0.5 text-[11px] text-muted-foreground">{act.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </AdminShell>
  );
}

type EditorMode = { mode: "add" | "edit" | "view"; row?: DemoRow };
const pageSize = 8;

export function AdminModulePage({ module }: { module: string }) {
  const { products, setProducts, records, setRecords } = useDemo();
  const moduleName = modules.find((m) => moduleSlug(m) === module) ?? "Module Management";
  const isProducts = module === "products";

  const rows: DemoRow[] = isProducts
    ? products.map((p) => ({
        id: p.id,
        name: p.name,
        detail: `${p.category} · ${p.origin} · ${p.qualityGrade} · Packaging: ${p.packaging}`,
        status: p.status,
      }))
    : records[module] ?? [];

  const [query, setQuery] = useState("");
  const [sort, setSort] = useState<"newest" | "name" | "status">("newest");
  const [page, setPage] = useState(1);
  const [editor, setEditor] = useState<EditorMode | null>(null);
  const [pendingDelete, setPendingDelete] = useState<DemoRow | null>(null);

  const filtered = useMemo(() => {
    let result = rows.filter((r) =>
      `${r.name} ${r.detail}`.toLowerCase().includes(query.trim().toLowerCase())
    );
    if (sort === "name") {
      result = [...result].sort((a, b) => a.name.localeCompare(b.name));
    } else if (sort === "status") {
      result = [...result].sort((a, b) => Number(b.status) - Number(a.status));
    }
    return result;
  }, [rows, query, sort]);

  const totalPages = Math.max(1, Math.ceil(filtered.length / pageSize));
  const pageRows = filtered.slice((page - 1) * pageSize, page * pageSize);

  function saveRecord(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!editor || editor.mode === "view") return;

    const f = new FormData(e.currentTarget);
    const name = String(f.get("name") ?? "").trim();
    const detail = String(f.get("detail") ?? "").trim();
    const status = f.get("status") === "on";

    if (!name) return;

    if (isProducts) {
      setProducts((current) => {
        if (editor.mode === "edit" && editor.row) {
          return current.map((p) =>
            p.id === editor.row?.id ? { ...p, name, description: detail, status } : p
          );
        }
        const id = `${name.toLowerCase().replace(/[^a-z0-9]+/g, "-")}-${Date.now()}`;
        return [
          ...current,
          {
            id,
            name,
            category: "Dried Fruits",
            origin: "Kolhapur, Maharashtra, India",
            description: detail,
            packaging: "Food-grade bulk cartons",
            countriesExported: ["UAE", "UK", "USA"],
            qualityGrade: "Grade A Export Standard",
            specifications: [{ label: "Selection", value: "Confirm against the approved sample" }],
            shippingTerms: "FOB Nhava Sheva / Mundra",
            availability: "Year Round",
            qualityStandards: "Inspection requirements confirmed per consignment",
            image: 0,
            imageUrl: "/images/gallery-bulk-varieties.webp",
            status,
          },
        ];
      });
    } else {
      setRecords((curr) => {
        const list = curr[module] ?? [];
        if (editor.mode === "edit" && editor.row) {
          return {
            ...curr,
            [module]: list.map((item) =>
              item.id === editor.row?.id ? { ...item, name, detail, status } : item
            ),
          };
        }
        return {
          ...curr,
          [module]: [...list, { id: crypto.randomUUID(), name, detail, status }],
        };
      });
    }

    setEditor(null);
  }

  function deleteRecord(row: DemoRow) {
    if (isProducts) {
      setProducts((curr) => curr.filter((p) => p.id !== row.id));
    } else {
      setRecords((curr) => ({
        ...curr,
        [module]: (curr[module] ?? []).filter((item) => item.id !== row.id),
      }));
    }
    setPendingDelete(null);
  }

  function toggleStatus(row: DemoRow) {
    if (isProducts) {
      setProducts((curr) =>
        curr.map((p) => (p.id === row.id ? { ...p, status: !p.status } : p))
      );
    } else {
      setRecords((curr) => ({
        ...curr,
        [module]: (curr[module] ?? []).map((item) =>
          item.id === row.id ? { ...item, status: !item.status } : item
        ),
      }));
    }
  }

  return (
    <AdminShell title={moduleName}>
      <div className="mb-6 flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
        <div>
          <span className="text-xs font-bold uppercase tracking-wider text-primary">Content Control</span>
          <h2 className="text-2xl font-bold text-foreground">{moduleName}</h2>
          <p className="text-xs text-muted-foreground mt-0.5">
            Manage records, toggle active visibility, or add entries to this workspace.
          </p>
        </div>
        <Button onClick={() => setEditor({ mode: "add" })} className="font-semibold text-xs h-10">
          <Plus size={15} /> Add New {moduleName.slice(0, -1) || "Item"}
        </Button>
      </div>

      {/* Table Container */}
      <div className="rounded-2xl border bg-card shadow-sm overflow-hidden">
        {/* Search & Sort Controls */}
        <div className="flex flex-col gap-3 border-b p-4 sm:flex-row sm:items-center sm:justify-between bg-muted/20">
          <label className="relative min-w-0 sm:w-80">
            <Search className="absolute left-3 top-2.5 text-muted-foreground" size={14} />
            <input
              className="field h-9 pl-9 text-xs"
              placeholder={`Search in ${moduleName.toLowerCase()}...`}
              value={query}
              onChange={(e) => {
                setQuery(e.target.value);
                setPage(1);
              }}
            />
          </label>

          <div className="flex items-center gap-2 text-xs text-muted-foreground">
            <ArrowDownWideNarrow size={14} />
            <select
              className="field h-9 text-xs w-36"
              value={sort}
              onChange={(e) => setSort(e.target.value as typeof sort)}
            >
              <option value="newest">Default Order</option>
              <option value="name">Name (A–Z)</option>
              <option value="status">Status (Active first)</option>
            </select>
          </div>
        </div>

        {/* Modern Table */}
        <div className="overflow-x-auto">
          <table className="admin-table w-full">
            <thead>
              <tr className="border-b bg-muted/40 text-left text-[11px] font-bold text-muted-foreground uppercase">
                <th className="px-5 py-3.5">Name / Title</th>
                <th className="px-5 py-3.5">Description & Parameters</th>
                <th className="px-5 py-3.5">Visibility Status</th>
                <th className="px-5 py-3.5 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y text-xs">
              {pageRows.map((row) => (
                <tr key={row.id} className="hover:bg-muted/30 transition-colors">
                  <td className="px-5 py-4 font-bold text-foreground max-w-xs">{row.name}</td>
                  <td className="px-5 py-4 text-muted-foreground max-w-md">
                    <p className="line-clamp-2 leading-relaxed">{row.detail}</p>
                  </td>
                  <td className="px-5 py-4">
                    <button
                      type="button"
                      onClick={() => toggleStatus(row)}
                      className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-[10px] font-bold transition-colors ${
                        row.status
                          ? "bg-secondary text-primary hover:bg-secondary/80"
                          : "bg-muted text-muted-foreground hover:bg-muted/80"
                      }`}
                    >
                      <span className={`size-1.5 rounded-full ${row.status ? "bg-primary" : "bg-muted-foreground"}`} />
                      {row.status ? "Active" : "Disabled"}
                    </button>
                  </td>
                  <td className="px-5 py-4 text-right">
                    <div className="flex justify-end gap-1">
                      <Button
                        size="icon"
                        variant="ghost"
                        onClick={() => setEditor({ mode: "view", row })}
                        aria-label={`View ${row.name}`}
                        className="size-8 text-muted-foreground hover:text-foreground"
                      >
                        <Search size={14} />
                      </Button>
                      <Button
                        size="icon"
                        variant="ghost"
                        onClick={() => setEditor({ mode: "edit", row })}
                        aria-label={`Edit ${row.name}`}
                        className="size-8 text-muted-foreground hover:text-primary"
                      >
                        <Pencil size={14} />
                      </Button>
                      <Button
                        size="icon"
                        variant="ghost"
                        onClick={() => setPendingDelete(row)}
                        aria-label={`Delete ${row.name}`}
                        className="size-8 text-muted-foreground hover:text-destructive"
                      >
                        <Trash2 size={14} />
                      </Button>
                    </div>
                  </td>
                </tr>
              ))}

              {!pageRows.length && (
                <tr>
                  <td colSpan={4} className="py-16 text-center text-xs text-muted-foreground">
                    No entries match your search query.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        {/* Pagination Bar */}
        <div className="flex flex-wrap items-center justify-between gap-3 border-t px-5 py-3.5 text-xs text-muted-foreground">
          <p>
            Showing {filtered.length ? (page - 1) * pageSize + 1 : 0}–
            {Math.min(page * pageSize, filtered.length)} of {filtered.length} entries
          </p>

          <div className="flex items-center gap-2">
            <Button
              size="icon"
              variant="outline"
              disabled={page <= 1}
              onClick={() => setPage((p) => Math.max(1, p - 1))}
              className="size-8"
              aria-label="Previous page"
            >
              <ChevronLeft size={14} />
            </Button>
            <span className="min-w-16 text-center font-medium">
              Page {page} of {totalPages}
            </span>
            <Button
              size="icon"
              variant="outline"
              disabled={page >= totalPages}
              onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
              className="size-8"
              aria-label="Next page"
            >
              <ChevronRight size={14} />
            </Button>
          </div>
        </div>
      </div>

      {/* Add / Edit / View Modal */}
      {editor && (
        <Modal
          title={
            editor.mode === "view"
              ? "Entry Details"
              : editor.mode === "edit"
              ? "Edit Record"
              : `Add New ${moduleName.slice(0, -1) || "Item"}`
          }
          onClose={() => setEditor(null)}
        >
          {editor.mode === "view" ? (
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-bold text-foreground">{editor.row?.name}</h3>
                <p className="mt-2 text-xs leading-relaxed text-muted-foreground">{editor.row?.detail}</p>
              </div>
              <div className="border-t pt-3 flex items-center justify-between text-xs">
                <span className="font-semibold text-muted-foreground">Current Status:</span>
                <span className={editor.row?.status ? "font-bold text-primary" : "text-muted-foreground"}>
                  {editor.row?.status ? "Active (Visible publicly)" : "Inactive"}
                </span>
              </div>
            </div>
          ) : (
            <form className="grid gap-4" onSubmit={saveRecord}>
              <label>
                <span className="field-label">Name / Title *</span>
                <input
                  className="field"
                  name="name"
                  required
                  defaultValue={editor.row?.name ?? ""}
                  placeholder="Enter record name or title"
                />
              </label>

              <label>
                <span className="field-label">Details / Description</span>
                <textarea
                  className="field min-h-24"
                  name="detail"
                  defaultValue={editor.row?.detail ?? ""}
                  placeholder="Enter specifications, description, or notes..."
                />
              </label>

              <label className="flex items-center gap-2.5 text-xs font-semibold">
                <input type="checkbox" name="status" defaultChecked={editor.row?.status ?? true} />
                <span>Mark as Active (Visible across demo site)</span>
              </label>

              <div className="mt-4 flex justify-end gap-2 border-t pt-4">
                <Button type="button" variant="outline" onClick={() => setEditor(null)}>
                  Cancel
                </Button>
                <Button type="submit">
                  Save Changes <Check size={14} />
                </Button>
              </div>
            </form>
          )}
        </Modal>
      )}

      {/* Confirmation Delete Modal */}
      {pendingDelete && (
        <Modal title="Confirm Removal" onClose={() => setPendingDelete(null)}>
          <p className="text-xs sm:text-sm text-foreground">
            Are you sure you want to remove <strong className="text-destructive">“{pendingDelete.name}”</strong> from
            this temporary demo session?
          </p>
          <div className="mt-6 flex justify-end gap-2 border-t pt-4">
            <Button variant="outline" onClick={() => setPendingDelete(null)}>
              Cancel
            </Button>
            <Button variant="destructive" onClick={() => deleteRecord(pendingDelete)}>
              <Trash2 size={14} /> Remove Entry
            </Button>
          </div>
        </Modal>
      )}
    </AdminShell>
  );
}

export function AdminLoginPage() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("admin@akverauniversal.com");
  const [password, setPassword] = useState("admin123");

  function submit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    void navigate({ to: "/admin" });
  }

  return (
    <main className="grid min-h-screen place-items-center bg-muted/40 p-4">
      <div className="w-full max-w-md rounded-2xl border bg-card p-8 shadow-xl">
        <div className="text-center">
          <Link to="/" className="inline-block" aria-label="Akvera Universal Home">
            <Brand />
          </Link>
          <p className="eyebrow mx-auto justify-center mt-6">Administrative Portal</p>
          <h1 className="text-2xl font-bold text-foreground">Sign In to Dashboard</h1>
          <p className="mt-2 text-xs text-muted-foreground">
            Explore the Akvera Universal portfolio controls. No authentication required in this demonstration.
          </p>
        </div>

        <form className="mt-8 grid gap-4" onSubmit={submit}>
          <label>
            <span className="field-label">Administrator Email</span>
            <input
              className="field"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </label>

          <label>
            <span className="field-label">Password</span>
            <input
              className="field"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </label>

          <Button type="submit" className="mt-2 h-11 font-semibold text-xs">
            Open Dashboard Overview <ArrowRight size={15} />
          </Button>
        </form>

        <div className="mt-6 border-t pt-4 text-center">
          <Link to="/" className="text-xs font-semibold text-primary hover:underline">
            ← Return to Live Website
          </Link>
        </div>
      </div>
    </main>
  );
}
