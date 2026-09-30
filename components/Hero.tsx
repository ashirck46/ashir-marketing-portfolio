import { profile, ledger } from "@/data/content";

export default function Hero() {
  return (
    <section id="top" className="mx-auto max-w-5xl px-5 pb-16 pt-14 sm:pb-24 sm:pt-24">
      <p className="rise text-sm text-mute">{profile.title}. {profile.focus}.</p>
      <h1 className="rise rise-2 mt-4 max-w-3xl font-display text-4xl leading-[1.1] tracking-tight sm:text-6xl">
        {profile.headline}
      </h1>
      <p className="rise rise-2 mt-5 max-w-2xl text-lg leading-relaxed text-mute sm:text-xl">
        {profile.positioning}
      </p>
      <div className="rise rise-2 mt-8 flex flex-wrap gap-3">
        <a href="#work" className="rounded-full bg-accent px-5 py-2.5 text-sm font-medium text-bg transition-opacity hover:opacity-90">
          See the campaign results
        </a>
        <a href={profile.cv} className="rounded-full border border-line px-5 py-2.5 text-sm transition-colors hover:border-accent">
          Download CV
        </a>
      </div>

      {/* Results ledger, laid out like a campaign report */}
      <div className="rise rise-3 mt-14 overflow-hidden rounded-lg border border-line bg-panel">
        <p className="border-b border-line px-5 py-3 text-sm text-mute">Gursaya Real Estate, Dubai. Results since Dec 2025.</p>
        <dl className="divide-y divide-line">
          {ledger.map((row) => (
            <div key={row.label} className="grid grid-cols-[1fr_auto] items-baseline gap-x-6 gap-y-1 px-5 py-4 sm:grid-cols-[14rem_1fr_auto]">
              <dt className="text-sm text-mute">{row.label}</dt>
              <dd className="order-3 col-span-2 text-sm text-mute sm:order-none sm:col-span-1">{row.note}</dd>
              <dd className="text-right font-display text-3xl tabular-nums text-accent sm:text-4xl">{row.value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
