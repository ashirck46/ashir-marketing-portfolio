import Section from "./Section";
import { profile } from "@/data/content";

export default function Contact() {
  const rows: [string, string, string][] = [
    ["Email", profile.email, `mailto:${profile.email}`],
    ["Phone", profile.phone, `tel:${profile.phone.replace(/\s/g, "")}`],
    ["Website", profile.website.replace("https://", ""), profile.website],
  ];
  if (profile.linkedin) rows.push(["LinkedIn", "Profile", profile.linkedin]);

  return (
    <Section id="contact" title="Contact">
      <p className="max-w-xl text-lg leading-8">
        Hiring for a marketing role, or need a campaign that brings in qualified leads? Email me.
      </p>
      <a
        href={`mailto:${profile.email}`}
        className="mt-6 inline-block rounded-full bg-accent px-6 py-3 font-medium text-bg transition-opacity hover:opacity-90"
      >
        Email {profile.email}
      </a>
      <dl className="mt-10 divide-y divide-line border-y border-line">
        {rows.map(([label, text, href]) => (
          <div key={label} className="flex justify-between gap-6 py-3">
            <dt className="text-mute">{label}</dt>
            <dd><a href={href} className="hover:text-accent">{text}</a></dd>
          </div>
        ))}
        <div className="flex justify-between gap-6 py-3">
          <dt className="text-mute">Location</dt>
          <dd>{profile.location}</dd>
        </div>
      </dl>
    </Section>
  );
}
