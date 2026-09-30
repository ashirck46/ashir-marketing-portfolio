import Section from "./Section";
import { skills } from "@/data/content";

export default function Skills() {
  return (
    <Section id="skills" title="Skills">
      <div className="grid gap-x-10 gap-y-8 sm:grid-cols-2">
        {skills.map((g) => (
          <div key={g.group}>
            <h3 className="font-display text-lg">{g.group}</h3>
            <ul className="mt-3 flex flex-wrap gap-2">
              {g.items.map((s) => (
                <li key={s} className="rounded-full border border-line bg-panel px-3 py-1 text-sm">{s}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  );
}
