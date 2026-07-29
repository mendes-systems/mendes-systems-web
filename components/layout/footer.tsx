import { siteConfig } from "@/config/site";

export function Footer() {
    return (
        <footer className="border-t border-slate-800 px-6 py-12">
            <div className="mx-auto grid max-w-7xl justify-center gap-10 md:grid-cols-4">
                <p className="text-slate-500">
                    {siteConfig.companyAbout}
                </p>
                
                <div>
                    <h4 className="font-semibold">
                        Quick Links
                    </h4>

                    <div className="mt-4 flex md:flex-col gap-3 text-slate-400">
                        <a href="#services">Services</a>
                        <a href="#about">About</a>
                        <a href="#projects">Projects</a>
                        <a href="#contact">Contact</a>
                    </div>
                </div>

                <div >
                    <h4 className="font-semibold">Connect</h4>

                    <div className="mt-4 flex md:flex-col gap-3 text-slate-400">
                        <a href={`mailto:${siteConfig.email}`} target="_blank" rel="noopener noreferrer">Email Us</a>
                        <a href={siteConfig.github} target="_blank" rel="noopener noreferrer">GitHub</a>
                    </div>
                </div>

                <div className="text-slate-500">
                    © {new Date().getFullYear()} {siteConfig.companyOfficialName} 
                    <br /> All Rights Reserved.
                </div>
            </div>
        </footer>
    );
}