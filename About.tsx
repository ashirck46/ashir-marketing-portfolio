import Section from "./Section";
import { about } from "@/data/content";

export default function About() {
  return (
    <Section id="about" title="About">
      <div className="max-w-2xl space-y-5 text-lg leading-8 text-ink/90">
        {about.map((p) => <p key={p}>{p}</p>)}
      </div>
    </Section>
  );
}
