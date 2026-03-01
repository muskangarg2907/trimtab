import Link from "next/link";

export default function Home() {
  return (
    <main className="pb-20">
      <section className="section-shell relative overflow-hidden py-20 md:py-28">
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute -left-20 top-10 h-72 w-72 rounded-full bg-teal-900/20 blur-3xl" />
          <div className="absolute right-0 top-24 h-96 w-96 rounded-full bg-slate-300/5 blur-3xl" />
          <div className="absolute bottom-0 left-1/2 h-64 w-96 -translate-x-1/2 rounded-full bg-amber-200/10 blur-3xl" />
        </div>

        <div className="grid items-center gap-12 lg:grid-cols-[1.15fr_0.85fr]">
          <div>
            <p className="mb-5 text-xs uppercase tracking-[0.24em] text-[color:var(--muted)]">
              Strategic Leadership Transformation
            </p>
            <h1 className="max-w-3xl text-4xl font-semibold tracking-tight text-slate-100 md:text-6xl md:leading-[1.08]">
              Build leadership systems that scale trust, speed, and enterprise performance.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-[color:var(--muted)]">
              We partner with executive teams to align culture, strategy, and execution across complex organizations—turning leadership intent into measurable outcomes.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link href="#philosophy" className="btn-primary">
                Our Philosophy
              </Link>
              <Link href="#approach" className="btn-secondary">
                Explore Our Approach
              </Link>
            </div>
          </div>

          <div className="panel relative min-h-80 overflow-hidden p-8">
            <div className="absolute -right-16 top-12 h-52 w-52 rounded-full border border-slate-500/40" />
            <div className="absolute -left-10 bottom-10 h-44 w-44 rounded-full border border-slate-500/30" />
            <div className="relative space-y-8">
              <div className="rounded-xl border border-slate-600/70 bg-[color:var(--surface-soft)]/80 p-5">
                <p className="text-xs uppercase tracking-[0.2em] text-[color:var(--muted)]">Leadership Signal</p>
                <p className="mt-2 text-2xl font-semibold text-slate-100">+27%</p>
                <p className="mt-1 text-sm text-[color:var(--muted)]">Cross-functional decision velocity</p>
              </div>
              <div className="rounded-xl border border-slate-600/70 bg-transparent p-5">
                <p className="text-xs uppercase tracking-[0.2em] text-[color:var(--muted)]">Operating Cadence</p>
                <p className="mt-2 text-lg text-slate-100">From fragmented initiatives to a unified enterprise rhythm.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="philosophy" className="section-shell py-12 md:py-16">
        <div className="mb-10 flex flex-col gap-4 md:max-w-3xl">
          <p className="text-xs uppercase tracking-[0.2em] text-[color:var(--muted)]">What We Prioritize</p>
          <h2 className="text-3xl font-semibold tracking-tight text-slate-100 md:text-4xl">
            Enduring leadership capability over short-term fixes.
          </h2>
          <p className="text-base leading-7 text-[color:var(--muted)]">
            Our work combines strategic clarity, disciplined execution, and executive alignment to create institutions that adapt with confidence.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-3">
          {[
            {
              title: "Strategic Clarity",
              text: "Translate enterprise ambition into a leadership agenda with concrete priorities and decision rights.",
            },
            {
              title: "Leadership Alignment",
              text: "Strengthen trust and accountability across senior teams to reduce friction and improve execution quality.",
            },
            {
              title: "Transformation Governance",
              text: "Install operating mechanisms that sustain momentum from boardroom strategy to frontline action.",
            },
          ].map((item) => (
            <article key={item.title} className="panel p-6">
              <h3 className="text-xl font-semibold text-slate-100">{item.title}</h3>
              <p className="mt-3 text-sm leading-7 text-[color:var(--muted)]">{item.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="approach" className="section-shell py-12 md:py-16">
        <div className="grid gap-6">
          <article className="panel p-8 md:p-10">
            <p className="text-xs uppercase tracking-[0.2em] text-[color:var(--muted)]">Enterprise Outcomes</p>
            <h3 className="mt-3 text-3xl font-semibold tracking-tight text-slate-100">Leadership impact that compounds across the organization.</h3>
            <p className="mt-5 max-w-xl text-base leading-8 text-[color:var(--muted)]">
              We design interventions that connect executive behavior, team dynamics, and operating structures—so performance gains become systemic, not episodic.
            </p>
            <Link
              href="/contact"
              className="mt-8 inline-flex items-center justify-center rounded-md border border-[color:var(--accent)] bg-[color:var(--accent)] px-6 py-3 text-sm font-semibold text-slate-950 shadow-[0_10px_30px_-14px_rgba(217,179,102,0.75)]"
            >
              Speak With Our Team
            </Link>
          </article>
        </div>
      </section>
    </main>
  );
}
