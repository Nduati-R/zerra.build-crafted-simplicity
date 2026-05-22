import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Zerra — Building toward zero." },
      {
        name: "description",
        content:
          "Zerra is a non-profit building open tools and research for a zero-waste, zero-emission future.",
      },
      { property: "og:title", content: "Zerra — Building toward zero." },
      {
        property: "og:description",
        content:
          "A non-profit building open tools and research for a zero-waste, zero-emission future.",
      },
    ],
  }),
});

function Nav() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur-xl bg-background/70 border-b border-[var(--color-hairline)]">
      <nav className="mx-auto max-w-6xl px-6 h-14 flex items-center justify-between">
        <Link
          to="/"
          className="font-display text-[15px] tracking-tighter font-medium"
        >
          Zerra
        </Link>
        <div className="flex items-center gap-8 text-[13px] text-muted-foreground">
          <a href="#mission" className="hover:text-foreground transition-colors">Mission</a>
          <a href="#work" className="hover:text-foreground transition-colors">Work</a>
          <a href="#support" className="hover:text-foreground transition-colors">Support</a>
        </div>
      </nav>
    </header>
  );
}

function Hero() {
  return (
    <section className="px-6 pt-32 pb-40 md:pt-48 md:pb-56">
      <div className="mx-auto max-w-5xl text-center">
        <p className="text-[12px] uppercase tracking-[0.2em] text-muted-foreground mb-8">
          A non-profit
        </p>
        <h1 className="font-display font-medium text-[44px] leading-[1.05] tracking-tightest md:text-[88px]">
          Building toward zero.
        </h1>
        <p className="mx-auto mt-8 max-w-xl text-balance text-[17px] leading-[1.5] text-muted-foreground md:text-[19px]">
          Zerra builds open tools and research for a world with less waste,
          fewer emissions, and more shared knowledge.
        </p>
      </div>
    </section>
  );
}

function Mission() {
  return (
    <section id="mission" className="border-t border-[var(--color-hairline)] px-6 py-32 md:py-48">
      <div className="mx-auto max-w-4xl">
        <p className="text-[12px] uppercase tracking-[0.2em] text-muted-foreground mb-10">
          Mission
        </p>
        <p className="font-display text-[28px] leading-[1.25] tracking-tighter md:text-[44px]">
          We believe the tools to repair the planet should belong to everyone.
          So we build them in the open, give them away, and measure what matters.
        </p>
      </div>
    </section>
  );
}

const work = [
  {
    label: "Research",
    title: "Open emissions data",
    body: "A public dataset tracking embodied carbon across common building materials, updated quarterly.",
  },
  {
    label: "Software",
    title: "Zerra Ledger",
    body: "A free, auditable carbon accounting tool for small organizations and community groups.",
  },
  {
    label: "Field",
    title: "Repair commons",
    body: "Funding neighborhood repair workshops in twelve cities, with shared curriculum and tooling.",
  },
];

function Work() {
  return (
    <section id="work" className="border-t border-[var(--color-hairline)] px-6 py-32 md:py-48">
      <div className="mx-auto max-w-6xl">
        <div className="flex items-baseline justify-between mb-16">
          <p className="text-[12px] uppercase tracking-[0.2em] text-muted-foreground">
            The work
          </p>
          <p className="text-[12px] text-muted-foreground">2026</p>
        </div>
        <div className="grid gap-px bg-[var(--color-hairline)] md:grid-cols-3 border border-[var(--color-hairline)]">
          {work.map((w) => (
            <article key={w.title} className="bg-background p-10 md:p-12 min-h-[320px] flex flex-col">
              <p className="text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
                {w.label}
              </p>
              <h3 className="font-display mt-8 text-[22px] leading-tight tracking-tighter md:text-[26px]">
                {w.title}
              </h3>
              <p className="mt-4 text-[15px] leading-relaxed text-muted-foreground">
                {w.body}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Numbers() {
  const stats = [
    { n: "1.2M", l: "tonnes CO₂e tracked" },
    { n: "12", l: "cities" },
    { n: "100%", l: "open source" },
  ];
  return (
    <section className="border-t border-[var(--color-hairline)] px-6 py-32 md:py-40">
      <div className="mx-auto max-w-6xl grid gap-16 md:grid-cols-3">
        {stats.map((s) => (
          <div key={s.l}>
            <div className="font-display text-[56px] leading-none tracking-tightest md:text-[80px]">
              {s.n}
            </div>
            <div className="mt-4 text-[13px] text-muted-foreground">{s.l}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

function Support() {
  return (
    <section id="support" className="border-t border-[var(--color-hairline)] px-6 py-32 md:py-48">
      <div className="mx-auto max-w-3xl text-center">
        <p className="text-[12px] uppercase tracking-[0.2em] text-muted-foreground mb-8">
          Support the work
        </p>
        <h2 className="font-display text-[36px] leading-[1.1] tracking-tightest md:text-[56px]">
          Small gifts, compounded.
        </h2>
        <p className="mx-auto mt-6 max-w-xl text-[16px] leading-relaxed text-muted-foreground">
          Zerra is funded entirely by individuals and small grants. Every
          contribution goes directly to research, software, and field programs.
        </p>
        <div className="mt-12 flex items-center justify-center gap-3">
          <a
            href="#"
            className="inline-flex items-center justify-center rounded-full bg-foreground px-6 h-11 text-[14px] font-medium text-background transition-opacity hover:opacity-90"
          >
            Donate
          </a>
          <a
            href="mailto:hello@zerra.build"
            className="inline-flex items-center justify-center rounded-full border border-[var(--color-hairline)] px-6 h-11 text-[14px] font-medium text-foreground transition-colors hover:bg-secondary"
          >
            Get in touch
          </a>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-[var(--color-hairline)] px-6 py-12">
      <div className="mx-auto max-w-6xl flex flex-col md:flex-row md:items-center md:justify-between gap-4 text-[12px] text-muted-foreground">
        <div>© {new Date().getFullYear()} Zerra. A registered non-profit.</div>
        <div className="flex gap-6">
          <a href="#" className="hover:text-foreground transition-colors">Annual report</a>
          <a href="#" className="hover:text-foreground transition-colors">GitHub</a>
          <a href="mailto:hello@zerra.build" className="hover:text-foreground transition-colors">hello@zerra.build</a>
        </div>
      </div>
    </footer>
  );
}

function Index() {
  return (
    <main className="min-h-screen">
      <Nav />
      <Hero />
      <Mission />
      <Work />
      <Numbers />
      <Support />
      <Footer />
    </main>
  );
}
