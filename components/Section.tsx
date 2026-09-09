import Reveal from "./Reveal";

export default function Section({
  id,
  page,
  total,
  title,
  children,
}: {
  id: string;
  page: number;
  total: number;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section
      id={id}
      className="mx-auto max-w-5xl scroll-mt-24 px-6 py-20 sm:px-8"
    >
      <Reveal className="mb-4 flex items-center gap-3">
        <span className="flex items-center gap-1.5 rounded-md border border-amber/30 bg-amber/10 px-2 py-0.5 font-mono text-[11px] font-semibold tick-mono text-amber">
          <span>0{page}</span>
          <span className="text-amber/50">/</span>
          <span>0{total}</span>
        </span>
        <div className="h-px flex-1 bg-gradient-to-r from-line via-line/60 to-transparent" />
      </Reveal>
      <Reveal delay={0.05}>
        <h2 className="mb-10 text-2xl font-bold tracking-tight text-ink sm:text-3xl">
          {title}
        </h2>
      </Reveal>
      {children}
    </section>
  );
}
