import Image from "next/image";
import { Footer } from "@/components/layout/footer";
import { Navbar } from "@/components/layout/navbar";
import { Hero } from "@/components/sections/hero";
import { Services } from "@/components/sections/services";

export default function Home() {
  return (
      <main className="min-h-screen bg-[#050816] text-white">
        {/* <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black"></div> */}
        {/*<Image
          className="dark"
          src="/mendes-systems-logo.png"
          alt="Next.js logo"
          width={350}
          height={100}
          priority
        /> */}
        <Navbar />
        <Hero />
        <Services />
        <Footer />
        {/* <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left">
          ______________________
          <h1 className="max-w-xs text-2xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50">
            Simplified Infrastructure Modernization and Automation Solutions for Current and Future Business Operations.
          </h1>
          ______________________
          <p className="max-w-md text-lg leading-8 text-zinc-600 dark:text-zinc-400">
            Mendes Systems is an organization that specializes in creating innovative solutions for businesses of all sizes. Our team is dedicated to delivering high-quality software that meets the unique needs of our clients.
          </p>
          <p className="max-w-md text-lg leading-8 text-zinc-600 dark:text-zinc-400">
            At Mendes Systems, we believe that technology should be accessible to everyone. That's why we work closely with our clients to understand their goals and develop custom software solutions that help them achieve success.
          </p>
          <p className="max-w-md text-lg leading-8 text-zinc-600 dark:text-zinc-400">
            Whether you're looking to build a new web application, mobile app, or custom software solution, our team has the expertise and experience to help you succeed. Contact us today to learn more about how we can help your business thrive in the digital age.
          </p>
          <p className="max-w-md text-lg leading-8 text-zinc-600 dark:text-zinc-400">
            Our team is passionate about technology and dedicated to helping our clients achieve their business objectives. We pride ourselves on our ability to deliver innovative solutions that drive growth and improve efficiency.
          </p>
          <p className="max-w-md text-lg leading-8 text-zinc-600 dark:text-zinc-400">
            If you're looking for a reliable software development partner, look no further than Mendes Systems. Contact us today to learn more about how we can help your business thrive in the digital age.
          </p>
        </div>
        <div className="flex flex-col gap-10 text-lg font-medium sm:flex-col">
          ______________________
          <a
            className="flex h-12 w-full items-center justify-center rounded-full border border-solid border-black/[.08] px-5 transition-colors hover:border-transparent hover:bg-black/[.04] dark:border-white/[.145] dark:hover:bg-[#1a1a1a] md:w-[158px]"
            href="mailto:contact@mendes-systems.com"
            target="_blank"
            rel="noopener noreferrer"
          > Contact Us
          </a>
        </div> */}
      </main>
  );
}
