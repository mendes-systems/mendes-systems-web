import { siteConfig } from "@/config/site";

export function Hero() {
  return (
    <section className="relative overflow-hidden px-6 py-32">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#1d4ed8_0%,transparent_45%)] opacity-20" />
        <div className="relative mx-auto flex max-w-5xl flex-col items-center text-center">
            <div className="mb-10 rounded-full border border-blue-500/30 bg-blue-500/10 px-5 py-2 text-sm text-blue-300">
                {siteConfig.tagline}
            </div>
            <h1 className="max-w-5xl text-6xl font-bold tracking-tight sm:text-7xl">
                <a href={siteConfig.logo} target="_blank" rel="noopener noreferrer">
                    <img src={siteConfig.logo} alt={siteConfig.companyName} className="mx-auto mb-4 w-84" />
                </a>
            </h1>
            <p className="mt-8 max-w-3xl text-xl leading-9 text-slate-300">
                {siteConfig.description}
            </p>
            <div className="mt-12 flex flex-col gap-4 sm:flex-row">
                <a href="#contact" className="rounded-lg bg-blue-600 px-8 py-4 text-sm font-medium transition hover:bg-blue-500">
                    Schedule Consultation
                </a>
                <a href="#services" className="rounded-lg border border-slate-700 px-8 py-4 text-sm font-medium transition hover:border-slate-500 hover:bg-slate-900">
                    View Services
                </a>
            </div>
        </div>
    </section>
  );
}