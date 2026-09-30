import Section from "./Section";
import { experience } from "@/data/content";

export default function Experience() {
  return (
    <Section id="experience" title="Experience">
      <ol className="space-y-10">
        {experience.map((job) => (
          <li key={job.org + job.period} className="grid gap-2 sm:grid-cols-[13rem_1fr] sm:gap-8">
            <div className="text-sm text-mute">
              <p>{job.period}</p>
              {job.place && <p>{job.place}</p>}
            </div>
            <div>
              <h3 className="font-display text-xl">{job.role}, {job.org}</h3>
              <ul className="mt-3 list-disc space-y-2 pl-5 leading-7 marker:text-accent">
                {job.points.map((p) => <li key={p}>{p}</li>)}
              </ul>
            </div>
          </li>
        ))}
      </ol>
    </Section>
  );
}
