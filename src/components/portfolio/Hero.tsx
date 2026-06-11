import { useEffect, useRef } from "react";
import { ArrowRight, Download, BarChart3, TrendingUp, Users, Briefcase, Smartphone, LineChart } from "lucide-react";
import portrait from "@/assets/shivansh-portrait.jpeg";

export function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const on = (e: MouseEvent) => {
      const r = el.getBoundingClientRect();
      const x = (e.clientX - r.left) / r.width - 0.5;
      const y = (e.clientY - r.top) / r.height - 0.5;
      el.style.setProperty("--mx", `${x * 20}px`);
      el.style.setProperty("--my", `${y * 20}px`);
    };
    el.addEventListener("mousemove", on);
    return () => el.removeEventListener("mousemove", on);
  }, []);

  return (
    <section id="top" ref={ref} className="relative min-h-screen overflow-hidden grain pt-32">
      {/* background radial */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 -left-32 w-[480px] h-[480px] rounded-full bg-mustard/30 blur-3xl" />
        <div className="absolute bottom-0 right-0 w-[520px] h-[520px] rounded-full bg-forest/20 blur-3xl" />
      </div>

      <div className="mx-auto max-w-7xl px-6 grid lg:grid-cols-12 gap-12 items-center pb-24">
        <div className="lg:col-span-7">
          <div className="inline-flex items-center gap-2 rounded-full glass px-3 py-1.5 text-xs text-forest mb-8">
            <span className="w-1.5 h-1.5 rounded-full bg-burnt animate-pulse" />
            Available for opportunities · Prayagraj, India
          </div>
          <h1 className="font-display text-[clamp(2.6rem,7vw,5.6rem)] leading-[0.95] text-forest text-balance">
            From understanding<br />
            <span className="italic text-burnt">customers</span> to driving
            <span className="block shimmer-gold">growth.</span>
          </h1>
          <p className="mt-8 max-w-xl text-lg text-forest/75 text-balance">
            I'm <strong className="text-forest">Shivansh Jaiswal</strong> — a future business
            leader translating customer insight into marketing, sales, and strategic
            growth.
          </p>
          <div className="mt-10 flex flex-wrap gap-3">
            <a
              href="#journey"
              className="group inline-flex items-center gap-2 rounded-full bg-mustard text-ink px-6 py-3.5 font-medium hover:bg-burnt hover:text-cream transition-all duration-300 shadow-[0_8px_30px_-8px_oklch(0.8_0.16_80/0.6)]"
            >
              Explore My Journey
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full bg-ink text-cream px-6 py-3.5 font-medium hover:bg-forest transition-colors"
            >
              <Download className="w-4 h-4" />
              Download Resume
            </a>
          </div>

          <div className="mt-14 grid grid-cols-3 gap-6 max-w-md">
            {[
              ["3+", "Years studying BBA"],
              ["5%", "Sales lift at VW"],
              ["100+", "Customers engaged"],
            ].map(([n, l]) => (
              <div key={l}>
                <div className="font-display text-3xl text-forest">{n}</div>
                <div className="text-xs text-forest/60 mt-1">{l}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Right: 3D-ish dashboard scene */}
        <div className="lg:col-span-5 relative h-[520px]">
          <div
            className="absolute inset-0 flex items-center justify-center"
            style={{
              transform: "translate3d(var(--mx,0), var(--my,0), 0)",
              transition: "transform .15s ease-out",
            }}
          >
            {/* Avatar disk */}
            <div className="relative w-72 h-72">
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-forest to-forest-deep shadow-[0_40px_80px_-30px_oklch(0.36_0.05_150/0.7)]" />
              <div className="absolute inset-3 rounded-full bg-cream-soft overflow-hidden">
                <img
                  src={portrait}
                  alt="Shivansh Jaiswal"
                  className="w-full h-full object-cover scale-[1.18]"
                  style={{ objectPosition: "50% 22%" }}
                />
              </div>
              {/* rings */}
              <div className="absolute -inset-6 rounded-full border border-forest/20 spin-slow" />
              <div className="absolute -inset-14 rounded-full border border-dashed border-burnt/30 spin-slow" style={{ animationDuration: "40s", animationDirection: "reverse" }} />

              {/* orbiting icons */}
              {[
                { Icon: BarChart3, r: 170, dur: "22s", color: "bg-mustard text-ink" },
                { Icon: TrendingUp, r: 200, dur: "30s", color: "bg-burnt text-cream" },
                { Icon: Users, r: 150, dur: "26s", color: "bg-forest text-cream" },
                { Icon: Briefcase, r: 220, dur: "36s", color: "bg-cream text-forest border border-forest/20" },
                { Icon: Smartphone, r: 180, dur: "28s", color: "bg-mustard text-ink" },
                { Icon: LineChart, r: 210, dur: "34s", color: "bg-burnt text-cream" },
              ].map(({ Icon, r, dur, color }, i) => (
                <div
                  key={i}
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 orbit"
                  style={{ ["--r" as never]: `${r}px`, ["--dur" as never]: dur, animationDelay: `${-i * 2}s` }}
                >
                  <div className={`w-11 h-11 rounded-xl grid place-items-center shadow-lg ${color}`}>
                    <Icon className="w-5 h-5" />
                  </div>
                </div>
              ))}
            </div>

            {/* floating cards */}
            <div className="absolute top-6 -left-2 glass rounded-2xl p-3 floaty shadow-xl">
              <div className="text-[10px] uppercase tracking-widest text-forest/60">Conversion</div>
              <div className="font-display text-2xl text-forest">+24%</div>
              <div className="mt-1 flex items-end gap-0.5 h-6">
                {[3,5,4,6,8,7,9].map((h,i)=>(
                  <div key={i} className="w-1.5 rounded-sm bg-burnt" style={{height:`${h*3}px`}}/>
                ))}
              </div>
            </div>
            <div className="absolute bottom-10 -right-2 glass rounded-2xl p-3 floaty shadow-xl" style={{animationDelay:"-2s"}}>
              <div className="text-[10px] uppercase tracking-widest text-forest/60">CRM Leads</div>
              <div className="font-display text-2xl text-forest">1,284</div>
              <div className="mt-1 text-[10px] text-forest/60">▲ 12% this week</div>
            </div>
          </div>
        </div>
      </div>

      {/* marquee */}
      <div className="absolute bottom-0 inset-x-0 border-y border-forest/15 bg-cream-soft overflow-hidden">
        <div className="flex gap-12 py-4 whitespace-nowrap animate-[shimmer_30s_linear_infinite]" style={{animation:"none"}}>
          <Marquee />
        </div>
      </div>
    </section>
  );
}

function Marquee() {
  const items = [
    "Marketing Strategy", "Customer Experience", "CRM Management",
    "Lead Generation", "Consumer Insights", "Sales Excellence",
    "Business Development", "Data-Driven Growth",
  ];
  return (
    <div className="flex gap-12 animate-marquee">
      {[...items, ...items, ...items].map((t, i) => (
        <span key={i} className="text-sm uppercase tracking-[0.25em] text-forest/60 flex items-center gap-12">
          {t}<span className="text-burnt">✦</span>
        </span>
      ))}
      <style>{`
        @keyframes marquee { from { transform: translateX(0) } to { transform: translateX(-50%) } }
        .animate-marquee { animation: marquee 40s linear infinite; }
      `}</style>
    </div>
  );
}
