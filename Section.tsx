export default function Section({ id, title, children }: { id: string; title: string; children: React.ReactNode }) {
  return (
    <section id={id} className="border-t border-line">
      <div className="mx-auto max-w-5xl px-5 py-16 sm:py-24">
        <h2 className="font-display text-3xl tracking-tight sm:text-4xl">{title}</h2>
        <div className="mt-10">{children}</div>
      </div>
    </section>
  );
}
