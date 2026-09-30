import Section from "./Section";
import { education, certifications, languages } from "@/data/content";

export default function Credentials() {
  return (
    <Section id="education" title="Education and certifications">
      <div className="grid gap-10 md:grid-cols-2">
        <div>
          <h3 className="font-display text-lg">Education</h3>
          <ul className="mt-4 space-y-3">
            {education.map((e) => (
              <li key={e.name}>
                <p>{e.name}</p>
                <p className="text-sm text-mute">{e.place}, {e.year}</p>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="font-display text-lg">Certifications</h3>
          <ul className="mt-4 space-y-2">
            {certifications.map((c) => <li key={c}>{c}</li>)}
          </ul>
          <p className="mt-6 text-sm text-mute">Languages: {languages.join(", ")}</p>
        </div>
      </div>
    </Section>
  );
}
