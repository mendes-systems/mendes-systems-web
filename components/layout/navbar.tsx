import { siteConfig } from "@/config/site";

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-800 bg-[#05080]/80 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
            <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-md bg-blue-600 font-bold">
                    {siteConfig.companyName.charAt(0)}
                </div>
                <span className="text-lg font-semibold tracking-tight text-slate-300">
                    {siteConfig.companyName}
                </span>
            </div>
            <nav className="hidden gap-8 text-sm text-slate-300 md:flex">
                <a href="#services" className="transition hover:text-white">
                    Services
                </a>
                <a href="#about" className="transition hover:text-white">
                    About
                </a>
                <a href="#projects" className="transition hover:text-white">
                    Projects
                </a>
                <a href="#contact" className="transition hover:text-white">
                    Contact
                </a>
            </nav>

            <a href="#contact" className="rounded-lg bg-blue-600 px-5 py-3 text-sm font-medium transition hover:bg-blue-500">
                Schedule Consultation
            </a>
        </div>
    </header>
  );
}