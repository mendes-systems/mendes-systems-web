const services = [
  {
    title: "Infrastructure Automation",
    description: "Automated provisioning, deployment orchestration, configuration management, and operational tooling for scalable environments.",
    icon: "/infra-automation-icon-light.svg"
  },
  {
    title: "DevOps & Platform Engineering",
    description: "Design and implementation of continuous integration, continuous delivery, and continuous testing (CI/CD/CT) platforms to promote modernized software release processes.",
    icon: "/devops-platform-icon-light.svg"
  },
  {
    title: "AI-Driven Operations",
    description: "Leveraging artificial intelligence to optimize and automate operational processes, improving efficiency and reducing costs.",
    icon: "/ai-operations-icon-light.svg"
  }
];

export function Services() {
    return (
        <section
            id="services"
            className="border-t border-slate-800 px-6 py-24"
            > 
            <div className="mx-auto max-w-6xl">
                <div className="text-center">
                    <h2 className="text-4xl font-semibold">
                        Core Engineering Services
                    </h2>
                    <div className="mx-auto mt-4 h-1 w-20 rounded bg-blue-500" />
                </div>

                <div className="mt-16 grid gap-8 md:grid-cols-3">
                    {services.map((services) => (
                        <div
                            key={services.title}
                            className="rounded-2xl border border-slate-800 bg-slate-900/50 p-8 backdrop-blur"
                        >
                            <div className="mb-6 flex h-14 w-14 p-3 items-center justify-center rounded-full bg-blue-500/10 text-blue-400">
                                <img src={services.icon} alt={services.title.charAt(0)} />
                            </div>

                            <h3 className="text-2xl font-semibold">
                                {services.title}
                            </h3>

                            <p className="mt-5 leading-8 text-slate-400">
                                {services.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}