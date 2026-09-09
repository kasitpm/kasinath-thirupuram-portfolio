import Hero from "@/components/Hero";
import Section from "@/components/Section";
import PageTabs from "@/components/PageTabs";
import Navbar from "@/components/Navbar";
import ScrollProgress from "@/components/ScrollProgress";
import SpotlightBackground from "@/components/SpotlightBackground";
import ProjectsFilter from "@/components/ProjectsFilter";
import ExperienceTimeline from "@/components/ExperienceTimeline";
import SkillsSection from "@/components/SkillsSection";
import ContactCard from "@/components/ContactCard";
import Reveal from "@/components/Reveal";
import RevealLi from "@/components/RevealLi";
import {
  profile,
  education,
  involvement,
  languages,
} from "@/data/profile";

const TOTAL_PAGES = 5;

export default function Home() {
  return (
    <main className="relative min-h-screen pb-32">
      {/* Interactive Ambience & Scroll Tracker */}
      <ScrollProgress />
      <SpotlightBackground />
      <Navbar />

      {/* Hero Section */}
      <Hero />

      {/* Section 1: Overview */}
      <Section id="overview" page={1} total={TOTAL_PAGES} title="Profile Overview">
        <div className="rounded-2xl border border-line bg-panel/80 p-6 shadow-card backdrop-blur-sm sm:p-8">
          <p className="text-base leading-relaxed text-ink/90 sm:text-lg">
            {profile.summary}
          </p>
        </div>

        <div className="mt-12 grid gap-8 sm:grid-cols-2">
          {/* Education */}
          <div className="rounded-2xl border border-line bg-panel/60 p-6 shadow-card">
            <h3 className="mb-5 flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-amber">
              <span>🎓</span> Education & Academics
            </h3>
            <ul className="space-y-5">
              {education.map((e, i) => (
                <RevealLi key={e.qualification} delay={i * 0.08} className="border-b border-line/40 pb-4 last:border-b-0 last:pb-0">
                  <div className="flex items-baseline justify-between gap-2">
                    <p className="text-sm font-bold text-ink">
                      {e.qualification}
                    </p>
                    <span className="rounded-md border border-line bg-panel2 px-2 py-0.5 font-mono text-[10.5px] text-mute">
                      {e.period}
                    </span>
                  </div>
                  <p className="mt-1 text-xs text-mute">{e.institution}</p>
                  <span className="mt-2 inline-block rounded-full border border-teal/30 bg-teal/10 px-2.5 py-0.5 font-mono text-[11px] font-medium text-teal">
                    {e.status}
                  </span>
                </RevealLi>
              ))}
            </ul>
          </div>

          {/* Involvement & Languages */}
          <div className="space-y-6">
            <div className="rounded-2xl border border-line bg-panel/60 p-6 shadow-card">
              <h3 className="mb-4 flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-amber">
                <span>🤝</span> Leadership & Involvement
              </h3>
              <ul className="space-y-2.5">
                {involvement.map((item, i) => (
                  <RevealLi
                    key={item}
                    delay={i * 0.06}
                    className="flex items-start gap-2.5 text-xs text-mute"
                  >
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-amber" />
                    <span className="leading-relaxed">{item}</span>
                  </RevealLi>
                ))}
              </ul>
            </div>

            <div className="rounded-2xl border border-line bg-panel/60 p-6 shadow-card">
              <h3 className="mb-4 flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-amber">
                <span>🌐</span> Languages Spoken
              </h3>
              <div className="flex flex-wrap gap-2">
                {languages.map((l) => (
                  <span
                    key={l.name}
                    className="flex items-center gap-1.5 rounded-xl border border-line bg-panel2 px-3 py-1.5 font-mono text-xs text-ink/90 transition-colors hover:border-lineHover"
                  >
                    <span className="font-semibold">{l.name}</span>
                    <span className="text-mute">· {l.level}</span>
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Section 2: Experience & Achievements */}
      <Section id="experience" page={2} total={TOTAL_PAGES} title="Work Experience & Impact">
        <ExperienceTimeline />
      </Section>

      {/* Section 3: Projects */}
      <Section id="projects" page={3} total={TOTAL_PAGES} title="Featured Projects & Analytics">
        <ProjectsFilter />
      </Section>

      {/* Section 4: Skills & Certifications */}
      <Section id="skills" page={4} total={TOTAL_PAGES} title="Technical Stack & Credentials">
        <SkillsSection />
      </Section>

      {/* Section 5: Contact */}
      <Section id="contact" page={5} total={TOTAL_PAGES} title="Get In Touch">
        <div className="mb-8 max-w-xl">
          <p className="text-base leading-relaxed text-mute">
            Seeking opportunities as a Data Analyst where I can architect intuitive BI dashboards, optimize query performance, and derive measurable business impact.
          </p>
        </div>
        <ContactCard />
      </Section>

      {/* Navigation Dock */}
      <PageTabs />

      {/* Footer */}
      <footer className="mx-auto mt-20 max-w-5xl px-6 pb-28 pt-8 text-center sm:px-8 border-t border-line/60">
        <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
          <p className="font-mono text-xs text-mute">
            Designed & Engineered for <span className="text-ink font-semibold">{profile.name}</span> · {profile.title}
          </p>
          <div className="flex items-center gap-3 font-mono text-[11px] text-mute">
            <span className="rounded-md border border-line bg-panel px-2 py-0.5">Next.js 14</span>
            <span className="rounded-md border border-line bg-panel px-2 py-0.5">Tailwind CSS</span>
            <span className="rounded-md border border-line bg-panel px-2 py-0.5">Framer Motion</span>
          </div>
        </div>
      </footer>
    </main>
  );
}
