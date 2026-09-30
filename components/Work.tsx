import Section from "./Section";
import { cases } from "@/data/content";

export default function Work() {
  return (
    <Section id="work" title="Selected work">
      <div className="grid gap-6 md:grid-cols-2">
        {cases.map((c) => (
          <article
            key={c.title}
            className="flex flex-col rounded-lg border border-line bg-panel p-6 transition-colors hover:border-accent"
          >
            <p className="text-sm text-mute">{c.org}</p>
            <h3 className="mt-1 font-display text-2xl leading-snug">{c.title}</h3>
            <p className="mt-3 text-sm text-mute">{c.focus}</p>
            <p className="mt-4 leading-7">{c.did}</p>
            <p className="mt-4 border-l-2 border-accent pl-4 leading-7">{c.outcome}</p>
            <ul className="mt-5 flex flex-wrap gap-2 pt-1">
              {c.tools.map((t) => (
                <li key={t} className="rounded-full border border-line px-3 py-1 text-xs text-mute">{t}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </Section>
  );
}
