import { jsx, jsxs } from "react/jsx-runtime";
import { useState, useEffect, useRef } from "react";
import { ArrowRight, Download, BarChart3, TrendingUp, Users, Briefcase, Smartphone, LineChart, GraduationCap, MapPin, Rocket, Megaphone, Car, FlaskConical, Building2, MessageSquare, Clock, Lightbulb, Target, Brain, Database, ScanSearch, Sparkles, Workflow, Settings2, ArrowUpRight, FileText, Award, Trophy, X, MessageCircle, Mail, Linkedin, ChevronRight } from "lucide-react";
const links = [
  ["About", "about"],
  ["Journey", "journey"],
  ["Experience", "experience"],
  ["Skills", "skills"],
  ["Project", "project"],
  ["Awards", "awards"],
  ["Contact", "contact"]
];
function Nav() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 24);
    on();
    window.addEventListener("scroll", on);
    return () => window.removeEventListener("scroll", on);
  }, []);
  return /* @__PURE__ */ jsx(
    "header",
    {
      className: `fixed top-0 inset-x-0 z-50 transition-all duration-500 ${scrolled ? "py-3" : "py-6"}`,
      children: /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-7xl px-6 flex items-center justify-between", children: [
        /* @__PURE__ */ jsxs(
          "a",
          {
            href: "#top",
            className: `font-display text-lg tracking-tight transition-colors ${scrolled ? "text-forest" : "text-forest"}`,
            children: [
              /* @__PURE__ */ jsx("span", { className: "inline-block w-2 h-2 rounded-full bg-mustard mr-2 align-middle" }),
              "Shivansh",
              /* @__PURE__ */ jsx("span", { className: "text-burnt", children: "." })
            ]
          }
        ),
        /* @__PURE__ */ jsx(
          "nav",
          {
            className: `hidden md:flex items-center gap-1 rounded-full px-2 py-1.5 transition-all ${scrolled ? "glass shadow-md" : "bg-transparent"}`,
            children: links.map(([label, id]) => /* @__PURE__ */ jsx(
              "a",
              {
                href: `#${id}`,
                className: "px-3 py-1.5 text-sm text-forest/80 hover:text-forest hover:bg-cream rounded-full transition-colors",
                children: label
              },
              id
            ))
          }
        ),
        /* @__PURE__ */ jsxs(
          "a",
          {
            href: "#contact",
            className: "hidden md:inline-flex items-center gap-2 rounded-full bg-forest text-cream px-4 py-2 text-sm hover:bg-forest-deep transition-colors",
            children: [
              "Let's talk",
              /* @__PURE__ */ jsx("span", { "aria-hidden": true, children: "→" })
            ]
          }
        )
      ] })
    }
  );
}
const portrait = "/assets/shivansh-portrait-Cp6HRa-4.jpeg";
function Hero() {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const on = (e) => {
      const r = el.getBoundingClientRect();
      const x = (e.clientX - r.left) / r.width - 0.5;
      const y = (e.clientY - r.top) / r.height - 0.5;
      el.style.setProperty("--mx", `${x * 20}px`);
      el.style.setProperty("--my", `${y * 20}px`);
    };
    el.addEventListener("mousemove", on);
    return () => el.removeEventListener("mousemove", on);
  }, []);
  return /* @__PURE__ */ jsxs("section", { id: "top", ref, className: "relative min-h-screen overflow-hidden grain pt-32", children: [
    /* @__PURE__ */ jsxs("div", { className: "absolute inset-0 -z-10", children: [
      /* @__PURE__ */ jsx("div", { className: "absolute top-1/4 -left-32 w-[480px] h-[480px] rounded-full bg-mustard/30 blur-3xl" }),
      /* @__PURE__ */ jsx("div", { className: "absolute bottom-0 right-0 w-[520px] h-[520px] rounded-full bg-forest/20 blur-3xl" })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-7xl px-6 grid lg:grid-cols-12 gap-12 items-center pb-24", children: [
      /* @__PURE__ */ jsxs("div", { className: "lg:col-span-7", children: [
        /* @__PURE__ */ jsxs("div", { className: "inline-flex items-center gap-2 rounded-full glass px-3 py-1.5 text-xs text-forest mb-8", children: [
          /* @__PURE__ */ jsx("span", { className: "w-1.5 h-1.5 rounded-full bg-burnt animate-pulse" }),
          "Available for opportunities · Prayagraj, India"
        ] }),
        /* @__PURE__ */ jsxs("h1", { className: "font-display text-[clamp(2.6rem,7vw,5.6rem)] leading-[0.95] text-forest text-balance", children: [
          "From understanding",
          /* @__PURE__ */ jsx("br", {}),
          /* @__PURE__ */ jsx("span", { className: "italic text-burnt", children: "customers" }),
          " to driving",
          /* @__PURE__ */ jsx("span", { className: "block shimmer-gold", children: "growth." })
        ] }),
        /* @__PURE__ */ jsxs("p", { className: "mt-8 max-w-xl text-lg text-forest/75 text-balance", children: [
          "I'm ",
          /* @__PURE__ */ jsx("strong", { className: "text-forest", children: "Shivansh Jaiswal" }),
          " — a future business leader translating customer insight into marketing, sales, and strategic growth."
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "mt-10 flex flex-wrap gap-3", children: [
          /* @__PURE__ */ jsxs(
            "a",
            {
              href: "#journey",
              className: "group inline-flex items-center gap-2 rounded-full bg-mustard text-ink px-6 py-3.5 font-medium hover:bg-burnt hover:text-cream transition-all duration-300 shadow-[0_8px_30px_-8px_oklch(0.8_0.16_80/0.6)]",
              children: [
                "Explore My Journey",
                /* @__PURE__ */ jsx(ArrowRight, { className: "w-4 h-4 group-hover:translate-x-1 transition-transform" })
              ]
            }
          ),
          /* @__PURE__ */ jsxs(
            "a",
            {
              href: "#contact",
              className: "inline-flex items-center gap-2 rounded-full bg-ink text-cream px-6 py-3.5 font-medium hover:bg-forest transition-colors",
              children: [
                /* @__PURE__ */ jsx(Download, { className: "w-4 h-4" }),
                "Download Resume"
              ]
            }
          )
        ] }),
        /* @__PURE__ */ jsx("div", { className: "mt-14 grid grid-cols-3 gap-6 max-w-md", children: [
          ["3+", "Years studying BBA"],
          ["5%", "Sales lift at VW"],
          ["100+", "Customers engaged"]
        ].map(([n, l]) => /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("div", { className: "font-display text-3xl text-forest", children: n }),
          /* @__PURE__ */ jsx("div", { className: "text-xs text-forest/60 mt-1", children: l })
        ] }, l)) })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "lg:col-span-5 relative h-[520px]", children: /* @__PURE__ */ jsxs(
        "div",
        {
          className: "absolute inset-0 flex items-center justify-center",
          style: {
            transform: "translate3d(var(--mx,0), var(--my,0), 0)",
            transition: "transform .15s ease-out"
          },
          children: [
            /* @__PURE__ */ jsxs("div", { className: "relative w-72 h-72", children: [
              /* @__PURE__ */ jsx("div", { className: "absolute inset-0 rounded-full bg-gradient-to-br from-forest to-forest-deep shadow-[0_40px_80px_-30px_oklch(0.36_0.05_150/0.7)]" }),
              /* @__PURE__ */ jsx("div", { className: "absolute inset-3 rounded-full bg-cream-soft overflow-hidden", children: /* @__PURE__ */ jsx(
                "img",
                {
                  src: portrait.url,
                  alt: "Shivansh Jaiswal",
                  className: "w-full h-full object-cover scale-[1.18]",
                  style: { objectPosition: "50% 22%" }
                }
              ) }),
              /* @__PURE__ */ jsx("div", { className: "absolute -inset-6 rounded-full border border-forest/20 spin-slow" }),
              /* @__PURE__ */ jsx("div", { className: "absolute -inset-14 rounded-full border border-dashed border-burnt/30 spin-slow", style: { animationDuration: "40s", animationDirection: "reverse" } }),
              [
                { Icon: BarChart3, r: 170, dur: "22s", color: "bg-mustard text-ink" },
                { Icon: TrendingUp, r: 200, dur: "30s", color: "bg-burnt text-cream" },
                { Icon: Users, r: 150, dur: "26s", color: "bg-forest text-cream" },
                { Icon: Briefcase, r: 220, dur: "36s", color: "bg-cream text-forest border border-forest/20" },
                { Icon: Smartphone, r: 180, dur: "28s", color: "bg-mustard text-ink" },
                { Icon: LineChart, r: 210, dur: "34s", color: "bg-burnt text-cream" }
              ].map(({ Icon, r, dur, color }, i) => /* @__PURE__ */ jsx(
                "div",
                {
                  className: "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 orbit",
                  style: { ["--r"]: `${r}px`, ["--dur"]: dur, animationDelay: `${-i * 2}s` },
                  children: /* @__PURE__ */ jsx("div", { className: `w-11 h-11 rounded-xl grid place-items-center shadow-lg ${color}`, children: /* @__PURE__ */ jsx(Icon, { className: "w-5 h-5" }) })
                },
                i
              ))
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "absolute top-6 -left-2 glass rounded-2xl p-3 floaty shadow-xl", children: [
              /* @__PURE__ */ jsx("div", { className: "text-[10px] uppercase tracking-widest text-forest/60", children: "Conversion" }),
              /* @__PURE__ */ jsx("div", { className: "font-display text-2xl text-forest", children: "+24%" }),
              /* @__PURE__ */ jsx("div", { className: "mt-1 flex items-end gap-0.5 h-6", children: [3, 5, 4, 6, 8, 7, 9].map((h, i) => /* @__PURE__ */ jsx("div", { className: "w-1.5 rounded-sm bg-burnt", style: { height: `${h * 3}px` } }, i)) })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "absolute bottom-10 -right-2 glass rounded-2xl p-3 floaty shadow-xl", style: { animationDelay: "-2s" }, children: [
              /* @__PURE__ */ jsx("div", { className: "text-[10px] uppercase tracking-widest text-forest/60", children: "CRM Leads" }),
              /* @__PURE__ */ jsx("div", { className: "font-display text-2xl text-forest", children: "1,284" }),
              /* @__PURE__ */ jsx("div", { className: "mt-1 text-[10px] text-forest/60", children: "▲ 12% this week" })
            ] })
          ]
        }
      ) })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "absolute bottom-0 inset-x-0 border-y border-forest/15 bg-cream-soft overflow-hidden", children: /* @__PURE__ */ jsx("div", { className: "flex gap-12 py-4 whitespace-nowrap animate-[shimmer_30s_linear_infinite]", style: { animation: "none" }, children: /* @__PURE__ */ jsx(Marquee, {}) }) })
  ] });
}
function Marquee() {
  const items = [
    "Marketing Strategy",
    "Customer Experience",
    "CRM Management",
    "Lead Generation",
    "Consumer Insights",
    "Sales Excellence",
    "Business Development",
    "Data-Driven Growth"
  ];
  return /* @__PURE__ */ jsxs("div", { className: "flex gap-12 animate-marquee", children: [
    [...items, ...items, ...items].map((t, i) => /* @__PURE__ */ jsxs("span", { className: "text-sm uppercase tracking-[0.25em] text-forest/60 flex items-center gap-12", children: [
      t,
      /* @__PURE__ */ jsx("span", { className: "text-burnt", children: "✦" })
    ] }, i)),
    /* @__PURE__ */ jsx("style", { children: `
        @keyframes marquee { from { transform: translateX(0) } to { transform: translateX(-50%) } }
        .animate-marquee { animation: marquee 40s linear infinite; }
      ` })
  ] });
}
const certICM = "/assets/cert-icm-2025-YVoGfVhV.jpeg";
const certVW = "/assets/cert-volkswagen-CF8m5thH.jpeg";
const certPrabandhan = "/assets/cert-prabandhan-zRST0mmz.jpeg";
const certCapacity = "/assets/cert-capacity-building-BpVzSeYc.jpeg";
const certSaarthi = "/assets/cert-saarthi-D5cjKcPI.jpeg";
const certNssAppreciation = "/assets/cert-nss-appreciation-Bfx_Cgp1.jpeg";
const certNssRepublic = "/assets/cert-nss-republic-BAvsPdb3.jpeg";
const WHATSAPP_URL = "https://wa.me/917897871818?text=Hi%20Shivansh%2C%20I%20visited%20your%20portfolio.";
const EMAIL_ADDRESS = "sarthakjaiswal2064@gmail.com";
const EMAIL_URL = `mailto:${EMAIL_ADDRESS}?subject=Portfolio%20Inquiry`;
const LINKEDIN_URL = "https://https://www.linkedin.com/in/shivansh-jaiswal-278a802a3?utm_source=share_via&utm_content=profile&utm_medium=member_android";
const researchPaper = "/shivansh-research-paper.docx";
function openExternalLink(url, label) {
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
function handleExternalLinkClick(event, url, label) {
  if (window.self === window.top) return;
  event.preventDefault();
  openExternalLink(url, label);
}
function About() {
  return /* @__PURE__ */ jsx("section", { id: "about", className: "py-32 relative", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-7xl px-6 grid lg:grid-cols-12 gap-16 items-center", children: [
    /* @__PURE__ */ jsxs("div", { className: "lg:col-span-5 relative reveal", children: [
      /* @__PURE__ */ jsxs("div", { className: "relative aspect-[4/5] rounded-3xl overflow-hidden bg-gradient-to-br from-forest to-forest-deep shadow-2xl", children: [
        /* @__PURE__ */ jsx("img", { src: portrait.url, alt: "Shivansh Jaiswal portrait", className: "absolute inset-0 w-full h-full object-cover" }),
        /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-forest/80 via-transparent to-transparent" }),
        /* @__PURE__ */ jsxs("div", { className: "absolute bottom-6 left-6 right-6 glass-dark rounded-2xl p-4", children: [
          /* @__PURE__ */ jsx("div", { className: "text-cream/70 text-xs uppercase tracking-widest", children: "Status" }),
          /* @__PURE__ */ jsx("div", { className: "text-cream font-display text-xl mt-1", children: "Graduated · Open To Opportunities" })
        ] })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "absolute -top-6 -right-6 w-32 h-32 rounded-full border-2 border-mustard floaty" }),
      /* @__PURE__ */ jsx("div", { className: "absolute -bottom-8 -left-8 w-24 h-24 rounded-full bg-burnt/80 floaty", style: { animationDelay: "-3s" } })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "lg:col-span-7 reveal", children: [
      /* @__PURE__ */ jsx("div", { className: "text-xs uppercase tracking-[0.3em] text-burnt mb-4", children: "About" }),
      /* @__PURE__ */ jsxs("h2", { className: "font-display text-5xl md:text-6xl text-forest leading-[1.05] text-balance", children: [
        "Who am ",
        /* @__PURE__ */ jsx("em", { className: "text-burnt", children: "I?" })
      ] }),
      /* @__PURE__ */ jsx("p", { className: "mt-6 text-lg text-forest/80 leading-relaxed text-balance", children: "I'm a Business Administration student passionate about understanding customers, crafting impactful marketing strategies, and driving business growth through data-driven decisions." }),
      /* @__PURE__ */ jsx("p", { className: "mt-4 text-forest/70 leading-relaxed", children: "With hands-on experience in digital marketing, CRM management, and automotive sales consulting, I bridge business insight with what customers actually need." }),
      /* @__PURE__ */ jsx("div", { className: "mt-10 grid sm:grid-cols-2 gap-3", children: [
        [GraduationCap, "BBA · 2023 – 2026"],
        [MapPin, "Prayagraj, India"],
        [TrendingUp, "Marketing Enthusiast"],
        [Users, "CRM & Customer Engagement"],
        [Rocket, "Future Business Consultant"]
      ].map(([Icon, label], i) => /* @__PURE__ */ jsxs(
        "div",
        {
          className: "tilt-card group flex items-center gap-3 rounded-2xl bg-card px-4 py-3.5 border border-forest/10",
          children: [
            /* @__PURE__ */ jsx("div", { className: "w-9 h-9 rounded-xl bg-mustard/20 text-burnt grid place-items-center group-hover:bg-mustard group-hover:text-ink transition-colors", children: /* @__PURE__ */ jsx(Icon, { className: "w-4 h-4" }) }),
            /* @__PURE__ */ jsx("span", { className: "text-sm text-forest/90", children: label })
          ]
        },
        i
      )) })
    ] })
  ] }) });
}
function Journey() {
  const steps = [
    { year: "2020", title: "School", desc: "St. Joseph's College Prayagraj.", Icon: GraduationCap },
    { year: "2023", title: "BBA Begins", desc: "United Institute of Management.", Icon: GraduationCap },
    { year: "2024", title: "Digital Marketing Intern", desc: "The Adults · CRM & leads.", Icon: Megaphone },
    { year: "2025", title: "Sales Consultant", desc: "Volkswagen showroom floor.", Icon: Car },
    { year: "2025", title: "Research Projects", desc: "Consumer satisfaction studies.", Icon: FlaskConical },
    { year: "Next", title: "Career Goals", desc: "Strategy · Marketing · Growth.", Icon: Rocket }
  ];
  return /* @__PURE__ */ jsx("section", { id: "journey", className: "py-32 bg-cream-soft relative overflow-hidden", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-7xl px-6", children: [
    /* @__PURE__ */ jsx(Header, { eyebrow: "Timeline", title: "My Journey", italic: "so far" }),
    /* @__PURE__ */ jsxs("div", { className: "relative mt-16", children: [
      /* @__PURE__ */ jsx("div", { className: "absolute left-0 right-0 top-16 h-px bg-gradient-to-r from-transparent via-forest/30 to-transparent" }),
      /* @__PURE__ */ jsx("div", { className: "grid md:grid-cols-3 lg:grid-cols-6 gap-6", children: steps.map((s, i) => /* @__PURE__ */ jsxs("div", { className: "reveal relative", style: { transitionDelay: `${i * 80}ms` }, children: [
        /* @__PURE__ */ jsxs("div", { className: "relative z-10 flex flex-col items-center", children: [
          /* @__PURE__ */ jsx("div", { className: "w-14 h-14 rounded-2xl bg-forest text-cream grid place-items-center shadow-lg group-hover:scale-110 transition-transform", children: /* @__PURE__ */ jsx(s.Icon, { className: "w-6 h-6" }) }),
          /* @__PURE__ */ jsx("div", { className: "mt-1 w-2 h-2 rounded-full bg-mustard" })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "mt-4 tilt-card rounded-2xl bg-card p-5 border border-forest/10 text-center", children: [
          /* @__PURE__ */ jsx("div", { className: "text-[10px] uppercase tracking-widest text-burnt", children: s.year }),
          /* @__PURE__ */ jsx("div", { className: "font-display text-lg text-forest mt-1", children: s.title }),
          /* @__PURE__ */ jsx("div", { className: "text-xs text-forest/60 mt-2", children: s.desc })
        ] })
      ] }, i)) })
    ] })
  ] }) });
}
function Experience() {
  return /* @__PURE__ */ jsx("section", { id: "experience", className: "py-32", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-7xl px-6", children: [
    /* @__PURE__ */ jsx(Header, { eyebrow: "Experience", title: "Business growth,", italic: "in practice." }),
    /* @__PURE__ */ jsxs("div", { className: "mt-16 grid lg:grid-cols-2 gap-8", children: [
      /* @__PURE__ */ jsx(
        ExpCard,
        {
          company: "The Adults",
          role: "Business Associate · Digital Marketing Intern",
          Icon: Building2,
          color: "mustard",
          points: [
            "Generated leads and maintained CRM databases.",
            "Improved customer tracking and engagement.",
            "Collected and synthesized customer feedback.",
            "Identified performance gaps and suggested process improvements."
          ],
          metric: { label: "Funnel Health", value: "92%", sub: "lead → MQL accuracy" }
        }
      ),
      /* @__PURE__ */ jsx(
        ExpCard,
        {
          company: "Volkswagen",
          role: "Sales Consultant",
          Icon: Car,
          color: "burnt",
          points: [
            "Managed customer communications end-to-end.",
            "Assisted in product selection & test drives.",
            "Increased departmental sales by 5%.",
            "Strengthened long-term customer relationships."
          ],
          metric: { label: "Dept. Sales", value: "+5%", sub: "quarter-over-quarter" }
        }
      )
    ] })
  ] }) });
}
function ExpCard({ company, role, points, Icon, color, metric }) {
  return /* @__PURE__ */ jsxs("div", { className: "reveal tilt-card group relative rounded-3xl bg-card border border-forest/10 p-8 overflow-hidden", children: [
    /* @__PURE__ */ jsx("div", { className: `absolute -top-20 -right-20 w-60 h-60 rounded-full blur-3xl ${color === "mustard" ? "bg-mustard/30" : "bg-burnt/25"}` }),
    /* @__PURE__ */ jsxs("div", { className: "relative flex items-start justify-between", children: [
      /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3", children: [
        /* @__PURE__ */ jsx("div", { className: `w-12 h-12 rounded-2xl grid place-items-center ${color === "mustard" ? "bg-mustard text-ink" : "bg-burnt text-cream"}`, children: /* @__PURE__ */ jsx(Icon, { className: "w-5 h-5" }) }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("div", { className: "font-display text-2xl text-forest", children: company }),
          /* @__PURE__ */ jsx("div", { className: "text-xs text-forest/60", children: role })
        ] })
      ] }) }),
      /* @__PURE__ */ jsx(ArrowUpRight, { className: "w-5 h-5 text-forest/40 group-hover:text-burnt group-hover:-translate-y-1 group-hover:translate-x-1 transition-all" })
    ] }),
    /* @__PURE__ */ jsx("ul", { className: "relative mt-8 space-y-3", children: points.map((p, i) => /* @__PURE__ */ jsxs("li", { className: "flex gap-3 text-sm text-forest/80", children: [
      /* @__PURE__ */ jsx(ChevronRight, { className: "w-4 h-4 mt-0.5 text-burnt flex-shrink-0" }),
      /* @__PURE__ */ jsx("span", { children: p })
    ] }, i)) }),
    /* @__PURE__ */ jsxs("div", { className: "relative mt-8 rounded-2xl bg-forest text-cream p-5 flex items-center justify-between", children: [
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("div", { className: "text-[10px] uppercase tracking-widest text-cream/60", children: metric.label }),
        /* @__PURE__ */ jsx("div", { className: "font-display text-3xl mt-1 text-mustard", children: metric.value }),
        /* @__PURE__ */ jsx("div", { className: "text-xs text-cream/60 mt-1", children: metric.sub })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "flex items-end gap-1 h-12", children: [4, 6, 5, 8, 7, 9, 11, 10, 12].map((h, i) => /* @__PURE__ */ jsx("div", { className: "w-1.5 rounded-sm bg-mustard/80", style: { height: `${h * 3}px` } }, i)) })
    ] })
  ] });
}
function Skills() {
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
        [Target, "Decision Making"]
      ]
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
        [Sparkles, "Digital Marketing"]
      ]
    },
    {
      title: "Operations",
      Icon: Settings2,
      color: "burnt",
      items: [
        [Workflow, "Operations Coordination"],
        [Settings2, "Process Management"],
        [Brain, "Critical Thinking"]
      ]
    }
  ];
  return /* @__PURE__ */ jsxs("section", { id: "skills", className: "py-32 bg-forest text-cream relative overflow-hidden grain", children: [
    /* @__PURE__ */ jsxs("div", { className: "absolute inset-0 -z-0 opacity-30", children: [
      /* @__PURE__ */ jsx("div", { className: "absolute top-20 left-1/4 w-96 h-96 rounded-full bg-mustard/30 blur-3xl" }),
      /* @__PURE__ */ jsx("div", { className: "absolute bottom-10 right-10 w-80 h-80 rounded-full bg-burnt/30 blur-3xl" })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "relative mx-auto max-w-7xl px-6", children: [
      /* @__PURE__ */ jsx(Header, { eyebrow: "Capabilities", title: "A skill", italic: "galaxy.", invert: true }),
      /* @__PURE__ */ jsx("div", { className: "mt-16 grid lg:grid-cols-3 gap-6", children: groups.map((g, i) => /* @__PURE__ */ jsxs("div", { className: "reveal glass-dark rounded-3xl p-7", style: { transitionDelay: `${i * 100}ms` }, children: [
        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3", children: [
          /* @__PURE__ */ jsx("div", { className: `w-11 h-11 rounded-xl grid place-items-center ${g.color === "forest" ? "bg-cream text-forest" : g.color === "mustard" ? "bg-mustard text-ink" : "bg-burnt text-cream"}`, children: /* @__PURE__ */ jsx(g.Icon, { className: "w-5 h-5" }) }),
          /* @__PURE__ */ jsx("h3", { className: "font-display text-2xl text-cream", children: g.title })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "mt-6 flex flex-wrap gap-2", children: g.items.map(([Icon, label], j) => /* @__PURE__ */ jsxs("span", { className: "inline-flex items-center gap-2 rounded-full bg-cream/10 hover:bg-cream/20 transition-colors px-3 py-2 text-sm text-cream/90 border border-cream/10", children: [
          /* @__PURE__ */ jsx(Icon, { className: "w-3.5 h-3.5 text-mustard" }),
          label
        ] }, j)) })
      ] }, i)) })
    ] })
  ] });
}
function Project() {
  return /* @__PURE__ */ jsx("section", { id: "project", className: "py-32", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-7xl px-6", children: [
    /* @__PURE__ */ jsx(Header, { eyebrow: "Featured Project", title: "Customer Satisfaction", italic: "in food delivery." }),
    /* @__PURE__ */ jsxs("div", { className: "mt-16 grid lg:grid-cols-12 gap-10", children: [
      /* @__PURE__ */ jsxs("div", { className: "lg:col-span-7 space-y-8 reveal", children: [
        /* @__PURE__ */ jsx(Block, { label: "Objective", children: "Analyze consumer satisfaction levels and identify the factors that shape preferences across leading food delivery apps." }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("div", { className: "text-xs uppercase tracking-[0.3em] text-burnt mb-3", children: "Methodology" }),
          /* @__PURE__ */ jsx("div", { className: "grid sm:grid-cols-2 gap-3", children: ["Consumer Surveys", "Data Collection", "Statistical Analysis", "Feedback Assessment"].map((m, i) => /* @__PURE__ */ jsxs("div", { className: "tilt-card rounded-2xl bg-card border border-forest/10 px-4 py-3.5 flex items-center gap-3", children: [
            /* @__PURE__ */ jsx("div", { className: "w-8 h-8 rounded-lg bg-forest text-cream grid place-items-center text-sm font-display", children: i + 1 }),
            /* @__PURE__ */ jsx("span", { className: "text-sm text-forest/90", children: m })
          ] }, i)) })
        ] }),
        /* @__PURE__ */ jsx(Block, { label: "Key Insights", children: /* @__PURE__ */ jsx("ul", { className: "space-y-2", children: [
          "Delivery speed significantly impacts satisfaction.",
          "Discounts strongly influence repeat purchases.",
          "App usability is a primary retention lever."
        ].map((p, i) => /* @__PURE__ */ jsxs("li", { className: "flex gap-3 text-forest/80", children: [
          /* @__PURE__ */ jsx("span", { className: "text-burnt", children: "●" }),
          p
        ] }, i)) }) }),
        /* @__PURE__ */ jsx(Block, { label: "Recommendations", children: /* @__PURE__ */ jsx("div", { className: "flex flex-wrap gap-2", children: ["Improve customer support", "Enhance personalization", "Optimize delivery efficiency"].map((r, i) => /* @__PURE__ */ jsx("span", { className: "rounded-full bg-mustard/20 border border-mustard/40 text-forest px-4 py-2 text-sm", children: r }, i)) }) })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "lg:col-span-5 reveal", children: /* @__PURE__ */ jsx("div", { className: "sticky top-28", children: /* @__PURE__ */ jsxs("div", { className: "rounded-3xl bg-forest text-cream p-7 shadow-2xl", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between", children: [
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("div", { className: "text-[10px] uppercase tracking-widest text-cream/60", children: "Satisfaction Index" }),
            /* @__PURE__ */ jsxs("div", { className: "font-display text-5xl text-mustard mt-1", children: [
              "8.4",
              /* @__PURE__ */ jsx("span", { className: "text-2xl text-cream/60", children: "/10" })
            ] })
          ] }),
          /* @__PURE__ */ jsx(DonutChart, { pct: 72 })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "mt-6 space-y-3", children: [
          ["Delivery Speed", 88, "mustard"],
          ["App Usability", 76, "burnt"],
          ["Pricing & Offers", 81, "mustard"],
          ["Support Quality", 64, "burnt"]
        ].map(([l, v, c], i) => /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsxs("div", { className: "flex justify-between text-xs text-cream/70 mb-1.5", children: [
            /* @__PURE__ */ jsx("span", { children: l }),
            /* @__PURE__ */ jsxs("span", { children: [
              v,
              "%"
            ] })
          ] }),
          /* @__PURE__ */ jsx("div", { className: "h-1.5 rounded-full bg-cream/10 overflow-hidden", children: /* @__PURE__ */ jsx("div", { className: `h-full rounded-full ${c === "mustard" ? "bg-mustard" : "bg-burnt"}`, style: { width: `${v}%` } }) })
        ] }, i)) }),
        /* @__PURE__ */ jsxs("div", { className: "mt-6 pt-6 border-t border-cream/10 flex justify-between text-xs text-cream/60", children: [
          /* @__PURE__ */ jsx("span", { children: "n = 312 respondents" }),
          /* @__PURE__ */ jsx("span", { children: "Q3 · 2025" })
        ] })
      ] }) }) })
    ] })
  ] }) });
}
function DonutChart({ pct }) {
  const r = 32, c = 2 * Math.PI * r;
  return /* @__PURE__ */ jsxs("svg", { width: "90", height: "90", viewBox: "0 0 80 80", className: "-rotate-90", children: [
    /* @__PURE__ */ jsx("circle", { cx: "40", cy: "40", r, fill: "none", stroke: "oklch(0.96 0.02 85 / 0.15)", strokeWidth: "8" }),
    /* @__PURE__ */ jsx(
      "circle",
      {
        cx: "40",
        cy: "40",
        r,
        fill: "none",
        stroke: "oklch(0.80 0.16 80)",
        strokeWidth: "8",
        strokeDasharray: c,
        strokeDashoffset: c - c * pct / 100,
        strokeLinecap: "round"
      }
    )
  ] });
}
function Block({ label, children }) {
  return /* @__PURE__ */ jsxs("div", { children: [
    /* @__PURE__ */ jsx("div", { className: "text-xs uppercase tracking-[0.3em] text-burnt mb-3", children: label }),
    /* @__PURE__ */ jsx("div", { className: "text-forest/80 leading-relaxed", children })
  ] });
}
function Awards() {
  const certs = [
    { title: "ICM 2025 — Paper Presentation", org: "United Institute of Management", img: certICM.url },
    { title: "Volkswagen Internship", org: "Volkswagen Prayagraj GSR Automobile", img: certVW.url },
    { title: "Prabandhan 2k26 — Core Committee", org: "United Institute of Management · Annual Fest", img: certPrabandhan.url },
    { title: "Capacity Building Program 2025-26", org: "Trainer · Personal Interview & Presentation Skills", img: certCapacity.url },
    { title: "Saarthi 2k26 — Vice Captain", org: "Orator's Guild · BBA Management Clubs", img: certSaarthi.url },
    { title: "NSS Lead Coordinator", org: "7 Days Special NSS Camp · Prayagraj", img: certNssAppreciation.url },
    { title: "Central Zone Pre-Republic Day Parade", org: "Govt. of India · Ministry of Youth Affairs & Sports", img: certNssRepublic.url }
  ];
  const otherCerts = [
    "Barclays LifeSkills Employability Program",
    "Employability Skills Development Program",
    "Event Planning & Management"
  ];
  const [open, setOpen] = useState(null);
  return /* @__PURE__ */ jsxs("section", { id: "awards", className: "py-32 bg-cream-soft", children: [
    /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-7xl px-6", children: [
      /* @__PURE__ */ jsx(Header, { eyebrow: "Recognition", title: "Certifications", italic: "& achievements." }),
      /* @__PURE__ */ jsx("div", { className: "mt-16 grid md:grid-cols-2 gap-8 reveal", children: certs.map((c, i) => /* @__PURE__ */ jsxs(
        "button",
        {
          onClick: () => setOpen(c),
          className: "group text-left tilt-card rounded-3xl bg-card border border-forest/10 overflow-hidden hover:shadow-[0_30px_80px_-30px_oklch(0.36_0.05_150/0.5)] transition-all",
          children: [
            /* @__PURE__ */ jsxs("div", { className: "relative aspect-[4/3] overflow-hidden bg-cream", children: [
              /* @__PURE__ */ jsx("img", { src: c.img, alt: c.title, className: "w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" }),
              /* @__PURE__ */ jsx("div", { className: "absolute top-3 right-3 rounded-full bg-ink/80 text-cream text-[10px] uppercase tracking-widest px-3 py-1.5 backdrop-blur", children: "Click to view" })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "p-6 flex items-center justify-between gap-4", children: [
              /* @__PURE__ */ jsxs("div", { children: [
                /* @__PURE__ */ jsx("div", { className: "text-[10px] uppercase tracking-widest text-burnt", children: "Certificate" }),
                /* @__PURE__ */ jsx("div", { className: "font-display text-xl text-forest mt-1", children: c.title }),
                /* @__PURE__ */ jsx("div", { className: "text-xs text-forest/60 mt-1", children: c.org })
              ] }),
              /* @__PURE__ */ jsx(ArrowUpRight, { className: "w-5 h-5 text-forest/40 group-hover:text-burnt group-hover:-translate-y-1 group-hover:translate-x-1 transition-all" })
            ] })
          ]
        },
        i
      )) }),
      /* @__PURE__ */ jsx("div", { className: "mt-8 reveal", children: /* @__PURE__ */ jsxs(
        "a",
        {
          href: researchPaper,
          target: "_blank",
          rel: "noopener noreferrer",
          className: "group flex items-center gap-5 rounded-3xl bg-forest text-cream p-6 md:p-7 relative overflow-hidden hover:shadow-[0_30px_80px_-20px_oklch(0.36_0.05_150/0.6)] transition-all",
          children: [
            /* @__PURE__ */ jsx("div", { className: "absolute -top-10 -right-10 w-48 h-48 rounded-full bg-mustard/20 blur-3xl" }),
            /* @__PURE__ */ jsx("div", { className: "relative w-14 h-14 rounded-2xl bg-mustard text-ink grid place-items-center group-hover:rotate-6 transition-transform", children: /* @__PURE__ */ jsx(FileText, { className: "w-6 h-6" }) }),
            /* @__PURE__ */ jsxs("div", { className: "relative flex-1", children: [
              /* @__PURE__ */ jsx("div", { className: "text-[10px] uppercase tracking-widest text-mustard", children: "Research Paper" }),
              /* @__PURE__ */ jsx("div", { className: "font-display text-xl md:text-2xl mt-1", children: "Assessing the Spiritual Liberation, Purification of the Divine Soul, Self Actualization & Attaining Salvation: Maha Kumbh Mela 2025" }),
              /* @__PURE__ */ jsx("div", { className: "text-xs text-cream/60 mt-2", children: "Presented at ICM 2025 · Click to open the full paper" })
            ] }),
            /* @__PURE__ */ jsx(ArrowUpRight, { className: "relative w-5 h-5 text-cream/60 group-hover:text-mustard" })
          ]
        }
      ) }),
      /* @__PURE__ */ jsxs("div", { className: "mt-12 grid lg:grid-cols-2 gap-8", children: [
        /* @__PURE__ */ jsxs("div", { className: "reveal", children: [
          /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3 mb-6", children: [
            /* @__PURE__ */ jsx(Award, { className: "w-5 h-5 text-burnt" }),
            /* @__PURE__ */ jsx("h3", { className: "font-display text-2xl text-forest", children: "More Certifications" })
          ] }),
          /* @__PURE__ */ jsx("div", { className: "space-y-4", children: otherCerts.map((c, i) => /* @__PURE__ */ jsxs("div", { className: "group tilt-card glass rounded-2xl p-5 flex items-center gap-4", children: [
            /* @__PURE__ */ jsx("div", { className: "w-12 h-12 rounded-xl bg-gradient-to-br from-mustard to-burnt text-ink grid place-items-center shadow-lg group-hover:rotate-6 transition-transform", children: /* @__PURE__ */ jsx(Trophy, { className: "w-5 h-5" }) }),
            /* @__PURE__ */ jsxs("div", { className: "flex-1", children: [
              /* @__PURE__ */ jsx("div", { className: "text-forest font-medium", children: c }),
              /* @__PURE__ */ jsx("div", { className: "text-xs text-forest/50 mt-0.5", children: "Certified" })
            ] })
          ] }, i)) })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "reveal", style: { transitionDelay: "120ms" }, children: [
          /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3 mb-6", children: [
            /* @__PURE__ */ jsx(Sparkles, { className: "w-5 h-5 text-burnt" }),
            /* @__PURE__ */ jsx("h3", { className: "font-display text-2xl text-forest", children: "Achievements" })
          ] }),
          /* @__PURE__ */ jsx("div", { className: "space-y-4", children: ["Pre-Republic Day Parade Camp 2025", "Research Paper Presentation on Mahakumbh"].map((a, i) => /* @__PURE__ */ jsxs("div", { className: "tilt-card rounded-2xl bg-forest text-cream p-6 relative overflow-hidden", children: [
            /* @__PURE__ */ jsx("div", { className: "absolute -top-10 -right-10 w-32 h-32 rounded-full bg-mustard/20 blur-2xl" }),
            /* @__PURE__ */ jsxs("div", { className: "relative", children: [
              /* @__PURE__ */ jsx("div", { className: "text-[10px] uppercase tracking-widest text-mustard", children: "Achievement" }),
              /* @__PURE__ */ jsx("div", { className: "font-display text-xl mt-2", children: a })
            ] })
          ] }, i)) }),
          /* @__PURE__ */ jsx("div", { className: "mt-8 grid grid-cols-2 gap-4", children: ["Leadership", "Integrity", "Growth", "Innovation"].map((v, i) => /* @__PURE__ */ jsx("div", { className: "rounded-2xl bg-card border border-forest/10 px-4 py-5 text-center", children: /* @__PURE__ */ jsx("div", { className: "font-display text-lg text-forest", children: v }) }, i)) })
        ] })
      ] })
    ] }),
    open && /* @__PURE__ */ jsx(
      "div",
      {
        onClick: () => setOpen(null),
        className: "fixed inset-0 z-[100] bg-ink/85 backdrop-blur-md grid place-items-center p-6 animate-in fade-in",
        children: /* @__PURE__ */ jsxs("div", { className: "relative max-w-5xl w-full", onClick: (e) => e.stopPropagation(), children: [
          /* @__PURE__ */ jsxs(
            "button",
            {
              onClick: () => setOpen(null),
              className: "absolute -top-12 right-0 inline-flex items-center gap-2 text-cream hover:text-mustard text-sm",
              children: [
                "Close ",
                /* @__PURE__ */ jsx(X, { className: "w-4 h-4" })
              ]
            }
          ),
          /* @__PURE__ */ jsx("div", { className: "rounded-2xl overflow-hidden bg-cream shadow-2xl", children: /* @__PURE__ */ jsx("img", { src: open.img, alt: open.title, className: "w-full h-auto object-contain" }) }),
          /* @__PURE__ */ jsx("div", { className: "mt-4 text-center text-cream/80 text-sm", children: open.title })
        ] })
      }
    )
  ] });
}
function Vision() {
  return /* @__PURE__ */ jsxs("section", { className: "py-32 bg-forest text-cream relative overflow-hidden grain", children: [
    /* @__PURE__ */ jsx("div", { className: "absolute inset-0 opacity-20", children: /* @__PURE__ */ jsx("div", { className: "absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[900px] rounded-full bg-mustard/30 blur-3xl" }) }),
    /* @__PURE__ */ jsxs("div", { className: "relative mx-auto max-w-5xl px-6 text-center", children: [
      /* @__PURE__ */ jsx("div", { className: "text-xs uppercase tracking-[0.3em] text-mustard mb-6", children: "Looking Ahead" }),
      /* @__PURE__ */ jsxs("h2", { className: "font-display text-5xl md:text-7xl leading-[1.05] text-balance", children: [
        "A career where ",
        /* @__PURE__ */ jsx("em", { className: "text-mustard", children: "strategy," }),
        " customer understanding & marketing innovation",
        /* @__PURE__ */ jsxs("span", { className: "block mt-2", children: [
          "create ",
          /* @__PURE__ */ jsx("span", { className: "shimmer-gold", children: "meaningful impact." })
        ] })
      ] }),
      /* @__PURE__ */ jsx("p", { className: "mt-10 text-lg text-cream/70 max-w-2xl mx-auto text-balance", children: "I aspire to contribute to organizations by delivering customer-centric solutions, driving sustainable growth, and continuously learning in dynamic business environments." })
    ] })
  ] });
}
function Contact() {
  return /* @__PURE__ */ jsx("section", { id: "contact", className: "py-32", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-7xl px-6", children: [
    /* @__PURE__ */ jsxs("div", { className: "rounded-[2.5rem] bg-gradient-to-br from-cream-soft to-cream border border-forest/10 p-10 md:p-16 relative overflow-hidden", children: [
      /* @__PURE__ */ jsx("div", { className: "absolute -top-32 -right-32 w-96 h-96 rounded-full bg-mustard/30 blur-3xl" }),
      /* @__PURE__ */ jsx("div", { className: "absolute -bottom-32 -left-32 w-96 h-96 rounded-full bg-burnt/20 blur-3xl" }),
      /* @__PURE__ */ jsxs("div", { className: "relative grid lg:grid-cols-12 gap-12 items-center", children: [
        /* @__PURE__ */ jsxs("div", { className: "lg:col-span-7", children: [
          /* @__PURE__ */ jsx("div", { className: "text-xs uppercase tracking-[0.3em] text-burnt mb-4", children: "Contact" }),
          /* @__PURE__ */ jsxs("h2", { className: "font-display text-5xl md:text-7xl text-forest leading-[1.02] text-balance", children: [
            "Let's build ",
            /* @__PURE__ */ jsx("em", { className: "text-burnt", children: "growth" }),
            /* @__PURE__ */ jsx("span", { className: "block", children: "together." })
          ] }),
          /* @__PURE__ */ jsx("p", { className: "mt-6 text-forest/70 max-w-lg", children: "Have a project, opportunity, or idea? I'd love to hear about it." }),
          /* @__PURE__ */ jsxs("div", { className: "mt-10 flex flex-wrap gap-3", children: [
            /* @__PURE__ */ jsxs(
              "a",
              {
                href: WHATSAPP_URL,
                target: "_blank",
                rel: "noopener noreferrer",
                onClick: (event) => handleExternalLinkClick(event, WHATSAPP_URL, "WhatsApp"),
                className: "group/contact inline-flex items-center gap-2 rounded-full bg-mustard text-ink px-6 py-3.5 font-medium shadow-[0_12px_30px_-18px_oklch(0.35_0.05_150/0.6)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-burnt hover:text-cream hover:shadow-[0_20px_42px_-20px_oklch(0.35_0.05_150/0.8)] active:translate-y-0 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-burnt",
                children: [
                  /* @__PURE__ */ jsx(MessageCircle, { className: "w-4 h-4" }),
                  " WhatsApp"
                ]
              }
            ),
            /* @__PURE__ */ jsxs(
              "a",
              {
                href: EMAIL_URL,
                target: "_blank",
                rel: "noopener noreferrer",
                onClick: (event) => handleExternalLinkClick(event, EMAIL_URL, "Email"),
                className: "group/contact inline-flex items-center gap-2 rounded-full bg-ink text-cream px-6 py-3.5 font-medium shadow-[0_12px_30px_-18px_oklch(0.10_0.02_85/0.7)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-forest hover:shadow-[0_20px_42px_-20px_oklch(0.35_0.05_150/0.8)] active:translate-y-0 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-forest",
                children: [
                  /* @__PURE__ */ jsx(Mail, { className: "w-4 h-4" }),
                  " Email Me"
                ]
              }
            ),
            /* @__PURE__ */ jsxs(
              "a",
              {
                href: LINKEDIN_URL,
                target: "_blank",
                rel: "noopener noreferrer",
                onClick: (event) => handleExternalLinkClick(event, LINKEDIN_URL, "LinkedIn"),
                className: "group/contact inline-flex items-center gap-2 rounded-full bg-forest text-cream px-6 py-3.5 font-medium shadow-[0_12px_30px_-18px_oklch(0.35_0.05_150/0.7)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-burnt hover:shadow-[0_20px_42px_-20px_oklch(0.35_0.05_150/0.8)] active:translate-y-0 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-burnt",
                children: [
                  /* @__PURE__ */ jsx(Linkedin, { className: "w-4 h-4" }),
                  " LinkedIn"
                ]
              }
            )
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "lg:col-span-5 space-y-3", children: [
          /* @__PURE__ */ jsx(ContactRow, { Icon: MessageCircle, label: "WhatsApp", value: "+91 78978 71818", href: WHATSAPP_URL }),
          /* @__PURE__ */ jsx(ContactRow, { Icon: Mail, label: "Email", value: EMAIL_ADDRESS, href: EMAIL_URL }),
          /* @__PURE__ */ jsx(ContactRow, { Icon: Linkedin, label: "LinkedIn", value: "https://www.linkedin.com/in/shivansh-jaiswal-278a802a3?utm_source=share_via&utm_content=profile&utm_medium=member_android", href: LINKEDIN_URL }),
          /* @__PURE__ */ jsx(ContactRow, { Icon: MapPin, label: "Location", value: "Prayagraj, Uttar Pradesh" })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "mt-12 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-forest/60", children: [
      /* @__PURE__ */ jsxs("div", { children: [
        "© ",
        (/* @__PURE__ */ new Date()).getFullYear(),
        " Shivansh Jaiswal · Future Business Leader"
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
        /* @__PURE__ */ jsx("span", { className: "w-1.5 h-1.5 rounded-full bg-burnt animate-pulse" }),
        "From understanding customers to driving growth."
      ] })
    ] })
  ] }) });
}
function ContactRow({ Icon, label, value, href }) {
  const Tag = href ? "a" : "div";
  const extra = href ? {
    target: "_blank",
    rel: "noopener noreferrer",
    onClick: (event) => handleExternalLinkClick(event, href, label)
  } : {};
  return /* @__PURE__ */ jsxs(Tag, { href, ...extra, className: "group flex items-center gap-4 rounded-2xl glass p-4 transition-all duration-300 hover:-translate-y-0.5 hover:bg-cream hover:shadow-[0_18px_45px_-28px_oklch(0.35_0.05_150/0.7)] active:translate-y-0 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-burnt", children: [
    /* @__PURE__ */ jsx("div", { className: "w-11 h-11 rounded-xl bg-forest text-cream grid place-items-center transition-all duration-300 group-hover:scale-105 group-hover:bg-burnt", children: /* @__PURE__ */ jsx(Icon, { className: "w-4 h-4" }) }),
    /* @__PURE__ */ jsxs("div", { className: "flex-1 min-w-0", children: [
      /* @__PURE__ */ jsx("div", { className: "text-[10px] uppercase tracking-widest text-forest/50", children: label }),
      /* @__PURE__ */ jsx("div", { className: "text-forest font-medium truncate", children: value })
    ] }),
    href && /* @__PURE__ */ jsx(ArrowUpRight, { className: "w-4 h-4 text-forest/40 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-burnt" })
  ] });
}
function Header({ eyebrow, title, italic, invert }) {
  return /* @__PURE__ */ jsxs("div", { className: "reveal max-w-3xl", children: [
    /* @__PURE__ */ jsx("div", { className: `text-xs uppercase tracking-[0.3em] mb-4 ${invert ? "text-mustard" : "text-burnt"}`, children: eyebrow }),
    /* @__PURE__ */ jsxs("h2", { className: `font-display text-5xl md:text-6xl leading-[1.05] text-balance ${invert ? "text-cream" : "text-forest"}`, children: [
      title,
      " ",
      /* @__PURE__ */ jsx("em", { className: invert ? "text-mustard" : "text-burnt", children: italic })
    ] })
  ] });
}
function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll(".reveal");
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("reveal-in");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12 }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
}
function Index() {
  useReveal();
  return /* @__PURE__ */ jsxs("main", { className: "bg-background text-foreground", children: [
    /* @__PURE__ */ jsx(Nav, {}),
    /* @__PURE__ */ jsx(Hero, {}),
    /* @__PURE__ */ jsx(About, {}),
    /* @__PURE__ */ jsx(Journey, {}),
    /* @__PURE__ */ jsx(Experience, {}),
    /* @__PURE__ */ jsx(Skills, {}),
    /* @__PURE__ */ jsx(Project, {}),
    /* @__PURE__ */ jsx(Awards, {}),
    /* @__PURE__ */ jsx(Vision, {}),
    /* @__PURE__ */ jsx(Contact, {})
  ] });
}
export {
  Index as component
};
