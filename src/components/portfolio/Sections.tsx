import { useState, type MouseEvent } from "react";
import {
  GraduationCap, MapPin, TrendingUp, Users, Rocket,
  Brain, Target, Clock, Lightbulb, ScanSearch, MessageSquare,
  BarChart3, Database, Megaphone, Settings2, Workflow,
  Trophy, Award, Sparkles, Mail, Phone, Linkedin, ArrowUpRight,
  Building2, Car, FlaskConical, GraduationCap as Cap, ChevronRight,
  FileText, X, MessageCircle, type LucideIcon,
} from "lucide-react";
import portrait from "@/assets/shivansh-portrait.jpeg";
import certICM from "@/assets/cert-icm-2025.jpeg";
import certVW from "@/assets/cert-volkswagen.jpeg";
import certPrabandhan from "@/assets/cert-prabandhan.jpeg";
import certCapacity from "@/assets/cert-capacity-building.jpeg";
import certSaarthi from "@/assets/cert-saarthi.jpeg";
import certNssAppreciation from "@/assets/cert-nss-appreciation.jpeg";
import certNssRepublic from "@/assets/cert-nss-republic.jpeg";


const WHATSAPP_URL = "https://wa.me/917897871818?text=Hi%20Shivansh%2C%20I%20visited%20your%20portfolio.";
const EMAIL_ADDRESS = "sarthakjaiswal2064@gmail.com";
const EMAIL_URL = `mailto:${EMAIL_ADDRESS}?subject=Portfolio%20Inquiry`;
const LINKEDIN_URL = "https://www.linkedin.com/in/shivansh-jaiswal-278a802a3?utm_source=share_via&utm_content=profile&utm_medium=member_android";
const researchPaper = "/shivansh-research-paper.pdf";

function openExternalLink(url: string, label: string) {
  try {
    const isEmbeddedPreview = window.self !== window.top;

    if (isEmbeddedPreview) {
      const opened = window.open(url, "_blank", "noopener,noreferrer");
      if (opened) {
        opened.opener = null;
        return;
      }

      const parentWindow = window.top;
      if (parentWindow) parentWindow.location.href = url;
      return;
    }
  } catch (error) {
    console.error(`Unable to open ${label}.`, error);
  }
}

function handleExternalLinkClick(event: MouseEvent<HTMLAnchorElement>, url: string, label: string) {
  if (window.self === window.top) return;
  event.preventDefault();
  openExternalLink(url, label);
}

/* ============ ABOUT ============ */
export function About() {
  return (
    <section id="about" className="py-32 relative">
      <div className="mx-auto max-w-7xl px-6 grid lg:grid-cols-12 gap-16 items-center">
        <div className="lg:col-span-5 relative reveal">
          <div className="relative aspect-[4/5] rounded-3xl overflow-hidden bg-gradient-to-br from-forest to-forest-deep shadow-2xl">
            <img src={portrait} alt="Shivansh Jaiswal portrait" className="absolute inset-0 w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-forest/80 via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 glass-dark rounded-2xl p-4">
              <div className="text-cream/70 text-xs uppercase tracking-widest">Status</div>
              <div className="text-cream font-display text-xl mt-1">Graduated · Open To Opportunities</div>
            </div>
          </div>
          <div className="absolute -top-6 -right-6 w-32 h-32 rounded-full border-2 border-mustard floaty" />
          <div className="absolute -bottom-8 -left-8 w-24 h-24 rounded-full bg-burnt/80 floaty" style={{animationDelay:"-3s"}} />
        </div>

        <div className="lg:col-span-7 reveal">
          <div className="text-xs uppercase tracking-[0.3em] text-burnt mb-4">About</div>
          <h2 className="font-display text-5xl md:text-6xl text-forest leading-[1.05] text-balance">
            Who am <em className="text-burnt">I?</em>
          </h2>
          <p className="mt-6 text-lg text-forest/80 leading-relaxed text-balance">
            I'm a Business Administration student passionate about understanding
            customers, crafting impactful marketing strategies, and driving business
            growth through data-driven decisions.
          </p>
          <p className="mt-4 text-forest/70 leading-relaxed">
            With hands-on experience in digital marketing, CRM management, and
            automotive sales consulting, I bridge business insight with what
            customers actually need.
          </p>

          <div className="mt-10 grid sm:grid-cols-2 gap-3">
            {[
              [GraduationCap, "BBA · 2023 – 2026"],
              [MapPin, "Prayagraj, India"],
              [TrendingUp, "Marketing Enthusiast"],
              [Users, "CRM & Customer Engagement"],
              [Rocket, "Future Business Consultant"],
            ].map(([Icon, label], i) => (
              <div
                key={i}
                className="tilt-card group flex items-center gap-3 rounded-2xl bg-card px-4 py-3.5 border border-forest/10"
              >
                <div className="w-9 h-9 rounded-xl bg-mustard/20 text-burnt grid place-items-center group-hover:bg-mustard group-hover:text-ink transition-colors">
                  
                  <Icon className="w-4 h-4" />
                </div>
                <span className="text-sm text-forest/90">{label as string}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ============ JOURNEY ============ */
export function Journey() {
  const steps = [
    { year: "2020", title: "School", desc: "St. Joseph's College Prayagraj." , Icon: Cap},
    { year: "2023", title: "BBA Begins", desc: "United Institute of Management.", Icon: GraduationCap },
    { year: "2024", title: "Digital Marketing Intern", desc: "The Adults · CRM & leads.", Icon: Megaphone },
    { year: "2025", title: "Sales Consultant", desc: "Volkswagen showroom floor.", Icon: Car },
    { year: "2025", title: "Research Projects", desc: "Consumer satisfaction studies.", Icon: FlaskConical },
    { year: "Next", title: "Career Goals", desc: "Strategy · Marketing · Growth.", Icon: Rocket },
  ];
  return (
    <section id="journey" className="py-32 bg-cream-soft relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-6">
        <Header eyebrow="Timeline" title="My Journey" italic="so far" />
        <div className="relative mt-16">
          <div className="absolute left-0 right-0 top-16 h-px bg-gradient-to-r from-transparent via-forest/30 to-transparent" />
          <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-6">
            {steps.map((s, i) => (
              <div key={i} className="reveal relative" style={{ transitionDelay: `${i*80}ms` }}>
                <div className="relative z-10 flex flex-col items-center">
                  <div className="w-14 h-14 rounded-2xl bg-forest text-cream grid place-items-center shadow-lg group-hover:scale-110 transition-transform">
                    <s.Icon className="w-6 h-6" />
                  </div>
                  <div className="mt-1 w-2 h-2 rounded-full bg-mustard" />
                </div>
                <div className="mt-4 tilt-card rounded-2xl bg-card p-5 border border-forest/10 text-center">
                  <div className="text-[10px] uppercase tracking-widest text-burnt">{s.year}</div>
                  <div className="font-display text-lg text-forest mt-1">{s.title}</div>
                  <div className="text-xs text-forest/60 mt-2">{s.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ============ EXPERIENCE ============ */
export function Experience() {
  return (
    <section id="experience" className="py-32">
      <div className="mx-auto max-w-7xl px-6">
        <Header eyebrow="Experience" title="Business growth," italic="in practice." />
        <div className="mt-16 grid lg:grid-cols-2 gap-8">
          <ExpCard
            company="The Adults"
            role="Business Associate · Digital Marketing Intern"
            Icon={Building2}
            color="mustard"
            points={[
              "Generated leads and maintained CRM databases.",
              "Improved customer tracking and engagement.",
              "Collected and synthesized customer feedback.",
              "Identified performance gaps and suggested process improvements.",
            ]}
            metric={{ label: "Funnel Health", value: "92%", sub: "lead → MQL accuracy" }}
          />
          <ExpCard
            company="Volkswagen"
            role="Sales Consultant"
            Icon={Car}
            color="burnt"
            points={[
              "Managed customer communications end-to-end.",
              "Assisted in product selection & test drives.",
              "Increased departmental sales by 5%.",
              "Strengthened long-term customer relationships.",
            ]}
            metric={{ label: "Dept. Sales", value: "+5%", sub: "quarter-over-quarter" }}
          />
        </div>
      </div>
    </section>
  );
}

function ExpCard({ company, role, points, Icon, color, metric }: {
  company: string; role: string; points: string[]; Icon: typeof Building2;
  color: "mustard" | "burnt"; metric: { label: string; value: string; sub: string };
}) {
  return (
    <div className="reveal tilt-card group relative rounded-3xl bg-card border border-forest/10 p-8 overflow-hidden">
      <div className={`absolute -top-20 -right-20 w-60 h-60 rounded-full blur-3xl ${color==="mustard"?"bg-mustard/30":"bg-burnt/25"}`} />
      <div className="relative flex items-start justify-between">
        <div>
          <div className="flex items-center gap-3">
            <div className={`w-12 h-12 rounded-2xl grid place-items-center ${color==="mustard"?"bg-mustard text-ink":"bg-burnt text-cream"}`}>
              <Icon className="w-5 h-5" />
            </div>
            <div>
              <div className="font-display text-2xl text-forest">{company}</div>
              <div className="text-xs text-forest/60">{role}</div>
            </div>
          </div>
        </div>
        <ArrowUpRight className="w-5 h-5 text-forest/40 group-hover:text-burnt group-hover:-translate-y-1 group-hover:translate-x-1 transition-all" />
      </div>

      <ul className="relative mt-8 space-y-3">
        {points.map((p, i) => (
          <li key={i} className="flex gap-3 text-sm text-forest/80">
            <ChevronRight className="w-4 h-4 mt-0.5 text-burnt flex-shrink-0" />
            <span>{p}</span>
          </li>
        ))}
      </ul>

      <div className="relative mt-8 rounded-2xl bg-forest text-cream p-5 flex items-center justify-between">
        <div>
          <div className="text-[10px] uppercase tracking-widest text-cream/60">{metric.label}</div>
          <div className="font-display text-3xl mt-1 text-mustard">{metric.value}</div>
          <div className="text-xs text-cream/60 mt-1">{metric.sub}</div>
        </div>
        <div className="flex items-end gap-1 h-12">
          {[4,6,5,8,7,9,11,10,12].map((h,i)=>(
            <div key={i} className="w-1.5 rounded-sm bg-mustard/80" style={{height:`${h*3}px`}}/>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ============ SKILLS GALAXY ============ */
export function Skills() {
  const groups = [
    {
      title: "Leadership & Business",
      Icon: Brain,
      color: "forest",
      items: [
        [Users, "Leadership & Team Mgmt"],
        [MessageSquare, "Communication"],
        [Clock, "Time Management"],
        [Lightbulb, "Problem Solving"],
        [Target, "Decision Making"],
      ],
    },
    {
      title: "Marketing & Sales",
      Icon: TrendingUp,
      color: "mustard",
      items: [
        [Database, "CRM"],
        [Megaphone, "Lead Generation"],
        [Users, "Sales Support"],
        [ScanSearch, "Market Research"],
        [BarChart3, "Consumer Analysis"],
        [Sparkles, "Digital Marketing"],
      ],
    },
    {
      title: "Operations",
      Icon: Settings2,
      color: "burnt",
      items: [
        [Workflow, "Operations Coordination"],
        [Settings2, "Process Management"],
        [Brain, "Critical Thinking"],
      ],
    },
  ] as const;

  return (
    <section id="skills" className="py-32 bg-forest text-cream relative overflow-hidden grain">
      <div className="absolute inset-0 -z-0 opacity-30">
        <div className="absolute top-20 left-1/4 w-96 h-96 rounded-full bg-mustard/30 blur-3xl" />
        <div className="absolute bottom-10 right-10 w-80 h-80 rounded-full bg-burnt/30 blur-3xl" />
      </div>
      <div className="relative mx-auto max-w-7xl px-6">
        <Header eyebrow="Capabilities" title="A skill" italic="galaxy." invert />
        <div className="mt-16 grid lg:grid-cols-3 gap-6">
          {groups.map((g, i) => (
            <div key={i} className="reveal glass-dark rounded-3xl p-7" style={{transitionDelay:`${i*100}ms`}}>
              <div className="flex items-center gap-3">
                <div className={`w-11 h-11 rounded-xl grid place-items-center ${
                  g.color==="forest" ? "bg-cream text-forest"
                  : g.color==="mustard" ? "bg-mustard text-ink" : "bg-burnt text-cream"
                }`}>
                  <g.Icon className="w-5 h-5" />
                </div>
                <h3 className="font-display text-2xl text-cream">{g.title}</h3>
              </div>
              <div className="mt-6 flex flex-wrap gap-2">
                {g.items.map(([Icon, label], j) => (
                  <span key={j} className="inline-flex items-center gap-2 rounded-full bg-cream/10 hover:bg-cream/20 transition-colors px-3 py-2 text-sm text-cream/90 border border-cream/10">
                    
                    <Icon className="w-3.5 h-3.5 text-mustard" />
                    {label as string}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ============ PROJECT CASE STUDY ============ */
export function Project() {
  return (
    <section id="project" className="py-32">
      <div className="mx-auto max-w-7xl px-6">
        <Header eyebrow="Featured Project" title="Customer Satisfaction" italic="in food delivery." />

        <div className="mt-16 grid lg:grid-cols-12 gap-10">
          <div className="lg:col-span-7 space-y-8 reveal">
            <Block label="Objective">
              Analyze consumer satisfaction levels and identify the factors that
              shape preferences across leading food delivery apps.
            </Block>
            <div>
              <div className="text-xs uppercase tracking-[0.3em] text-burnt mb-3">Methodology</div>
              <div className="grid sm:grid-cols-2 gap-3">
                {["Consumer Surveys","Data Collection","Statistical Analysis","Feedback Assessment"].map((m,i)=>(
                  <div key={i} className="tilt-card rounded-2xl bg-card border border-forest/10 px-4 py-3.5 flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-forest text-cream grid place-items-center text-sm font-display">{i+1}</div>
                    <span className="text-sm text-forest/90">{m}</span>
                  </div>
                ))}
              </div>
            </div>
            <Block label="Key Insights">
              <ul className="space-y-2">
                {[
                  "Delivery speed significantly impacts satisfaction.",
                  "Discounts strongly influence repeat purchases.",
                  "App usability is a primary retention lever.",
                ].map((p,i)=>(
                  <li key={i} className="flex gap-3 text-forest/80">
                    <span className="text-burnt">●</span>{p}
                  </li>
                ))}
              </ul>
            </Block>
            <Block label="Recommendations">
              <div className="flex flex-wrap gap-2">
                {["Improve customer support","Enhance personalization","Optimize delivery efficiency"].map((r,i)=>(
                  <span key={i} className="rounded-full bg-mustard/20 border border-mustard/40 text-forest px-4 py-2 text-sm">{r}</span>
                ))}
              </div>
            </Block>
          </div>

          {/* Analytics dashboard */}
          <div className="lg:col-span-5 reveal">
            <div className="sticky top-28">
              <div className="rounded-3xl bg-forest text-cream p-7 shadow-2xl">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-[10px] uppercase tracking-widest text-cream/60">Satisfaction Index</div>
                    <div className="font-display text-5xl text-mustard mt-1">8.4<span className="text-2xl text-cream/60">/10</span></div>
                  </div>
                  <DonutChart pct={72} />
                </div>
                <div className="mt-6 space-y-3">
                  {[
                    ["Delivery Speed", 88, "mustard"],
                    ["App Usability", 76, "burnt"],
                    ["Pricing & Offers", 81, "mustard"],
                    ["Support Quality", 64, "burnt"],
                  ].map(([l,v,c],i)=>(
                    <div key={i}>
                      <div className="flex justify-between text-xs text-cream/70 mb-1.5">
                        <span>{l as string}</span><span>{v}%</span>
                      </div>
                      <div className="h-1.5 rounded-full bg-cream/10 overflow-hidden">
                        <div className={`h-full rounded-full ${c==="mustard"?"bg-mustard":"bg-burnt"}`} style={{width:`${v}%`}}/>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-6 pt-6 border-t border-cream/10 flex justify-between text-xs text-cream/60">
                  <span>n = 312 respondents</span>
                  <span>Q3 · 2025</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function DonutChart({ pct }: { pct: number }) {
  const r = 32, c = 2 * Math.PI * r;
  return (
    <svg width="90" height="90" viewBox="0 0 80 80" className="-rotate-90">
      <circle cx="40" cy="40" r={r} fill="none" stroke="oklch(0.96 0.02 85 / 0.15)" strokeWidth="8" />
      <circle cx="40" cy="40" r={r} fill="none" stroke="oklch(0.80 0.16 80)" strokeWidth="8"
        strokeDasharray={c} strokeDashoffset={c - (c * pct) / 100} strokeLinecap="round" />
    </svg>
  );
}

function Block({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div>
      <div className="text-xs uppercase tracking-[0.3em] text-burnt mb-3">{label}</div>
      <div className="text-forest/80 leading-relaxed">{children}</div>
    </div>
  );
}

/* ============ AWARDS / CERTS ============ */
export function Awards() {
  const certs = [
    { title: "ICM 2025 — Paper Presentation", org: "United Institute of Management", img: certICM },
    { title: "Volkswagen Internship", org: "Volkswagen Prayagraj GSR Automobile", img: certVW },
    { title: "Prabandhan 2k26 — Core Committee", org: "United Institute of Management · Annual Fest", img: certPrabandhan },
    { title: "Capacity Building Program 2025-26", org: "Trainer · Personal Interview & Presentation Skills", img: certCapacity },
    { title: "Saarthi 2k26 — Vice Captain", org: "Orator's Guild · BBA Management Clubs", img: certSaarthi},
    { title: "NSS Lead Coordinator", org: "7 Days Special NSS Camp · Prayagraj", img: certNssAppreciation },
    { title: "Central Zone Pre-Republic Day Parade", org: "Govt. of India · Ministry of Youth Affairs & Sports", img: certNssRepublic },
  ];
  const otherCerts = [
    "Barclays LifeSkills Employability Program",
    "Employability Skills Development Program",
    "Event Planning & Management",
  ];
  const [open, setOpen] = useState<null | { title: string; img: string }>(null);

  return (
    <section id="awards" className="py-32 bg-cream-soft">
      <div className="mx-auto max-w-7xl px-6">
        <Header eyebrow="Recognition" title="Certifications" italic="& achievements." />

        {/* Featured clickable certificates */}
        <div className="mt-16 grid md:grid-cols-2 gap-8 reveal">
          {certs.map((c, i) => (
            <button
              key={i}
              onClick={() => setOpen(c)}
              className="group text-left tilt-card rounded-3xl bg-card border border-forest/10 overflow-hidden hover:shadow-[0_30px_80px_-30px_oklch(0.36_0.05_150/0.5)] transition-all"
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-cream">
                <img src={c.img} alt={c.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                <div className="absolute top-3 right-3 rounded-full bg-ink/80 text-cream text-[10px] uppercase tracking-widest px-3 py-1.5 backdrop-blur">
                  Click to view
                </div>
              </div>
              <div className="p-6 flex items-center justify-between gap-4">
                <div>
                  <div className="text-[10px] uppercase tracking-widest text-burnt">Certificate</div>
                  <div className="font-display text-xl text-forest mt-1">{c.title}</div>
                  <div className="text-xs text-forest/60 mt-1">{c.org}</div>
                </div>
                <ArrowUpRight className="w-5 h-5 text-forest/40 group-hover:text-burnt group-hover:-translate-y-1 group-hover:translate-x-1 transition-all" />
              </div>
            </button>
          ))}
        </div>

        {/* Research paper */}
        <div className="mt-8 reveal">
          <a
            href={researchPaper}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-5 rounded-3xl bg-forest text-cream p-6 md:p-7 relative overflow-hidden hover:shadow-[0_30px_80px_-20px_oklch(0.36_0.05_150/0.6)] transition-all"
          >
            <div className="absolute -top-10 -right-10 w-48 h-48 rounded-full bg-mustard/20 blur-3xl" />
            <div className="relative w-14 h-14 rounded-2xl bg-mustard text-ink grid place-items-center group-hover:rotate-6 transition-transform">
              <FileText className="w-6 h-6" />
            </div>
            <div className="relative flex-1">
              <div className="text-[10px] uppercase tracking-widest text-mustard">Research Paper</div>
              <div className="font-display text-xl md:text-2xl mt-1">
                Assessing the Spiritual Liberation, Purification of the Divine Soul, Self Actualization & Attaining Salvation: Maha Kumbh Mela 2025
              </div>
              <div className="text-xs text-cream/60 mt-2">Presented at ICM 2025 · Click to open the full paper</div>
            </div>
            <ArrowUpRight className="relative w-5 h-5 text-cream/60 group-hover:text-mustard" />
          </a>
        </div>

        <div className="mt-12 grid lg:grid-cols-2 gap-8">
          <div className="reveal">
            <div className="flex items-center gap-3 mb-6">
              <Award className="w-5 h-5 text-burnt" />
              <h3 className="font-display text-2xl text-forest">More Certifications</h3>
            </div>
            <div className="space-y-4">
              {otherCerts.map((c,i)=>(
                <div key={i} className="group tilt-card glass rounded-2xl p-5 flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-mustard to-burnt text-ink grid place-items-center shadow-lg group-hover:rotate-6 transition-transform">
                    <Trophy className="w-5 h-5" />
                  </div>
                  <div className="flex-1">
                    <div className="text-forest font-medium">{c}</div>
                    <div className="text-xs text-forest/50 mt-0.5">Certified</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="reveal" style={{transitionDelay:"120ms"}}>
            <div className="flex items-center gap-3 mb-6">
              <Sparkles className="w-5 h-5 text-burnt" />
              <h3 className="font-display text-2xl text-forest">Achievements</h3>
            </div>
            <div className="space-y-4">
              {["Pre-Republic Day Parade Camp 2025", "Research Paper Presentation on Mahakumbh"].map((a,i)=>(
                <div key={i} className="tilt-card rounded-2xl bg-forest text-cream p-6 relative overflow-hidden">
                  <div className="absolute -top-10 -right-10 w-32 h-32 rounded-full bg-mustard/20 blur-2xl" />
                  <div className="relative">
                    <div className="text-[10px] uppercase tracking-widest text-mustard">Achievement</div>
                    <div className="font-display text-xl mt-2">{a}</div>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-8 grid grid-cols-2 gap-4">
              {["Leadership","Integrity","Growth","Innovation"].map((v,i)=>(
                <div key={i} className="rounded-2xl bg-card border border-forest/10 px-4 py-5 text-center">
                  <div className="font-display text-lg text-forest">{v}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Lightbox */}
      {open && (
        <div
          onClick={() => setOpen(null)}
          className="fixed inset-0 z-[100] bg-ink/85 backdrop-blur-md grid place-items-center p-6 animate-in fade-in"
        >
          <div className="relative max-w-5xl w-full" onClick={(e) => e.stopPropagation()}>
            <button
              onClick={() => setOpen(null)}
              className="absolute -top-12 right-0 inline-flex items-center gap-2 text-cream hover:text-mustard text-sm"
            >
              Close <X className="w-4 h-4" />
            </button>
            <div className="rounded-2xl overflow-hidden bg-cream shadow-2xl">
              <img src={open.img} alt={open.title} className="w-full h-auto object-contain" />
            </div>
            <div className="mt-4 text-center text-cream/80 text-sm">{open.title}</div>
          </div>
        </div>
      )}
    </section>
  );
}

/* ============ VISION ============ */
export function Vision() {
  return (
    <section className="py-32 bg-forest text-cream relative overflow-hidden grain">
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[900px] rounded-full bg-mustard/30 blur-3xl" />
      </div>
      <div className="relative mx-auto max-w-5xl px-6 text-center">
        <div className="text-xs uppercase tracking-[0.3em] text-mustard mb-6">Looking Ahead</div>
        <h2 className="font-display text-5xl md:text-7xl leading-[1.05] text-balance">
          A career where <em className="text-mustard">strategy,</em> customer
          understanding & marketing innovation
          <span className="block mt-2">create <span className="shimmer-gold">meaningful impact.</span></span>
        </h2>
        <p className="mt-10 text-lg text-cream/70 max-w-2xl mx-auto text-balance">
          I aspire to contribute to organizations by delivering customer-centric
          solutions, driving sustainable growth, and continuously learning in
          dynamic business environments.
        </p>
      </div>
    </section>
  );
}

/* ============ CONTACT ============ */
export function Contact() {
  return (
    <section id="contact" className="py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="rounded-[2.5rem] bg-gradient-to-br from-cream-soft to-cream border border-forest/10 p-10 md:p-16 relative overflow-hidden">
          <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-mustard/30 blur-3xl" />
          <div className="absolute -bottom-32 -left-32 w-96 h-96 rounded-full bg-burnt/20 blur-3xl" />
          <div className="relative grid lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7">
              <div className="text-xs uppercase tracking-[0.3em] text-burnt mb-4">Contact</div>
              <h2 className="font-display text-5xl md:text-7xl text-forest leading-[1.02] text-balance">
                Let's build <em className="text-burnt">growth</em>
                <span className="block">together.</span>
              </h2>
              <p className="mt-6 text-forest/70 max-w-lg">
                Have a project, opportunity, or idea? I'd love to hear about it.
              </p>

              <div className="mt-10 flex flex-wrap gap-3">
                <a href={WHATSAPP_URL}
                  target="_blank" rel="noopener noreferrer" onClick={(event) => handleExternalLinkClick(event, WHATSAPP_URL, "WhatsApp")}
                  className="group/contact inline-flex items-center gap-2 rounded-full bg-mustard text-ink px-6 py-3.5 font-medium shadow-[0_12px_30px_-18px_oklch(0.35_0.05_150/0.6)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-burnt hover:text-cream hover:shadow-[0_20px_42px_-20px_oklch(0.35_0.05_150/0.8)] active:translate-y-0 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-burnt">
                  <MessageCircle className="w-4 h-4" /> WhatsApp
                </a>
                <a href={EMAIL_URL} target="_blank" rel="noopener noreferrer" onClick={(event) => handleExternalLinkClick(event, EMAIL_URL, "Email")}
                  className="group/contact inline-flex items-center gap-2 rounded-full bg-ink text-cream px-6 py-3.5 font-medium shadow-[0_12px_30px_-18px_oklch(0.10_0.02_85/0.7)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-forest hover:shadow-[0_20px_42px_-20px_oklch(0.35_0.05_150/0.8)] active:translate-y-0 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-forest">
                  <Mail className="w-4 h-4" /> Email Me
                </a>
                <a href={LINKEDIN_URL} target="_blank" rel="noopener noreferrer" onClick={(event) => handleExternalLinkClick(event, LINKEDIN_URL, "LinkedIn")}
                  className="group/contact inline-flex items-center gap-2 rounded-full bg-forest text-cream px-6 py-3.5 font-medium shadow-[0_12px_30px_-18px_oklch(0.35_0.05_150/0.7)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-burnt hover:shadow-[0_20px_42px_-20px_oklch(0.35_0.05_150/0.8)] active:translate-y-0 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-burnt">
                  <Linkedin className="w-4 h-4" /> LinkedIn
                </a>
              </div>
            </div>
<div className="lg:col-span-5 space-y-3">
  <ContactRow
    Icon={MessageCircle}
    label="WhatsApp"
    value="+91 78978 71818"
    href={WHATSAPP_URL}
  />

  <ContactRow
    Icon={Mail}
    label="Email"
    value={EMAIL_ADDRESS}
    href={EMAIL_URL}
  />

  <ContactRow
    Icon={Linkedin}
    label="LinkedIn"
    value="linkedin.com/in/shivansh-jaiswal"
    href={LINKEDIN_URL}
  />

  <ContactRow
    Icon={MapPin}
    label="Location"
    value="Prayagraj, Uttar Pradesh"
  />
</div>
          </div>
        </div>

        <div className="mt-12 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-forest/60">
          <div>© {new Date().getFullYear()} Shivansh Jaiswal · Future Business Leader</div>
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-burnt animate-pulse" />
            From understanding customers to driving growth.
          </div>
        </div>
      </div>
    </section>
  );
}

function ContactRow({ Icon, label, value, href }: { Icon: LucideIcon; label: string; value: string; href?: string }) {
  const Tag = (href ? "a" : "div") as React.ElementType;
  const extra = href ? {
    target: "_blank",
    rel: "noopener noreferrer",
    onClick: (event: MouseEvent<HTMLAnchorElement>) => handleExternalLinkClick(event, href, label),
  } : {};
  return (
    <Tag href={href} {...extra} className="group flex items-center gap-4 rounded-2xl glass p-4 transition-all duration-300 hover:-translate-y-0.5 hover:bg-cream hover:shadow-[0_18px_45px_-28px_oklch(0.35_0.05_150/0.7)] active:translate-y-0 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-burnt">
      <div className="w-11 h-11 rounded-xl bg-forest text-cream grid place-items-center transition-all duration-300 group-hover:scale-105 group-hover:bg-burnt">
        <Icon className="w-4 h-4" />
      </div>
      <div className="flex-1 min-w-0">
        <div className="text-[10px] uppercase tracking-widest text-forest/50">{label}</div>
        <div className="text-forest font-medium truncate">{value}</div>
      </div>
      {href && <ArrowUpRight className="w-4 h-4 text-forest/40 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-burnt" />}
    </Tag>
  );
}

/* ============ Shared header ============ */
function Header({ eyebrow, title, italic, invert }: { eyebrow: string; title: string; italic: string; invert?: boolean }) {
  return (
    <div className="reveal max-w-3xl">
      <div className={`text-xs uppercase tracking-[0.3em] mb-4 ${invert?"text-mustard":"text-burnt"}`}>{eyebrow}</div>
      <h2 className={`font-display text-5xl md:text-6xl leading-[1.05] text-balance ${invert?"text-cream":"text-forest"}`}>
        {title} <em className={invert?"text-mustard":"text-burnt"}>{italic}</em>
      </h2>
    </div>
  );
}
