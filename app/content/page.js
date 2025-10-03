"use client";

import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import {
  Github,
  Linkedin,
  Mail,
  Phone,
  Download,
  ExternalLink,
  Sun,
  Moon,
  ArrowRight,
  MapPin,
  Menu, // ADDED: Icon for hamburger button
  X, // ADDED: Icon for close button
} from "lucide-react";

/**
 * Drop this file into: app/page.tsx  (or app/page.jsx)
 * Tailwind required. Dark mode uses the `dark` class on <html> and Tailwind's `dark:` variants.
 * Replace placeholder content (name, links, projects, experience) with your details.
 */

export default function PortfolioPage() {
  // ---------- Dark Mode ----------
  const [theme, setTheme] = useState("light");
  useEffect(() => {
    const preferred =
      (typeof window !== "undefined" && localStorage.getItem("theme")) ||
      (window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light");
    setTheme(preferred);
  }, []);
  useEffect(() => {
    if   
       (typeof document !== "undefined") {
      document.documentElement.classList.toggle("dark", theme === "dark");
      localStorage.setItem("theme", theme);
      document.documentElement.style.scrollBehavior = "smooth";
    }
  }, [theme]);

  const toggleTheme = () => setTheme((t) => (t === "dark" ? "light" : "dark"));

  // ADDED: State for mobile menu
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  // ADDED: Effect to disable body scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [isMenuOpen]);

  // ---------- Data ----------
  const skills = useMemo(
    () => [
      { name: "JavaScript / TypeScript", level: 90 },
      { name: "React / Next.js", level: 88 },
      { name: "Node.js", level: 80 },
      { name: "Tailwind CSS", level: 85 },
      { name: "Python", level: 70 },
      { name: "SQL", level: 72 },
      { name: "Git / GitHub", level: 86 },
      { name: "Docker", level: 87 },
    ],
    []
  );

  const projects = useMemo(
    () => [
      {
        title: "Project One",
        description:
          "A short sentence about what the project does and why it’s cool. Tech stack and a key result.",
        imageAlt: "Project One screenshot placeholder",
        github: "https://github.com/yourname/project-one",
        demo: "https://project-one-demo.example.com",
      },
      {
        title: "Project Two",
        description:
          "Brief description highlighting the problem solved, your role, and any metrics if available.",
        imageAlt: "Project Two screenshot placeholder",
        github: "https://github.com/yourname/project-two",
        demo: "https://project-two-demo.example.com",
      },
      {
        title: "Project Three",
        description:
          "What it is, how it works, and what makes it unique. Mention APIs, libraries, or performance.",
        imageAlt: "Project Three screenshot placeholder",
        github: "https://github.com/yourname/project-three",
        demo: "https://project-three-demo.example.com",
      },
      {
        title: "Project Four",
        description:
          "Optional extra project card. Keep copy short and skimmable for recruiters.",
        imageAlt: "Project Four screenshot placeholder",
        github: "https://github.com/yourname/project-four",
        demo: "https://project-four-demo.example.com",
      },
    ],
    []
  );

  const experience = useMemo(
    () => [
      {
        title: "Software Engineer Intern",
        org: "Acme Corp",
        location: "Remote",
        period: "May 2024 – Aug 2024",
        bullets: [
          "Built a Next.js dashboard with charts and role-based auth.",
          "Improved page load time by ~30% via image optimization and caching.",
        ],
      },
      {
        title: "Open Source Contributor",
        org: "Various",
        location: "Global",
        period: "2023 – Present",
        bullets: [
          "Contributed features/bug fixes to popular React libraries.",
          "Reviewed PRs, wrote docs, and improved DX for maintainers.",
        ],
      },
    ],
    []
  );

  const education = useMemo(
    () => [
      {
        title: "B.Tech in CSE (AIML)",
        org: "VIT Chennai",
        location: "Chennai, IN",
        period: "2025 – 2029 (expected)",
        bullets: [
          "Coursework: DSA, OS, DBMS, ML, DL, Web Dev",
          "Clubs: IEEE RAS, HackClub (Projects & Events)",
        ],
      },
    ],
    []
  );
  
  // ---------- Helpers ----------
  const sectionVariant = {
    hidden: { opacity: 0, y: 12 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  const navLinks = [
    { href: "#about", label: "About" },
    { href: "#skills", label: "Skills" },
    { href: "#projects", label: "Projects" },
    { href: "#experience", label: "Experience" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <div className="min-h-screen bg-neutral-50 text-neutral-900 dark:bg-neutral-900 dark:text-neutral-100">
      {/* Navbar */}
      <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/60 dark:supports-[backdrop-filter]:bg-neutral-900/60 border-b border-black/5 dark:border-white/10">
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
          <a href="#home" className="font-semibold tracking-tight text-lg">
            Gnana Harish
          </a>
          <div className="hidden gap-6 md:flex">
            {navLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-sm hover:opacity-80 transition-opacity"
              >
                {l.label}
              </a>
            ))}
          </div>
          <div className="flex items-center gap-2">
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-2xl border border-black/10 dark:border-white/10 px-3 py-1.5 text-sm font-medium hover:shadow-sm hover:-translate-y-0.5 transition-all"
            >
              <Download className="h-4 w-4" />
              Resume
            </a>
            <button
              aria-label="Toggle theme"
              onClick={toggleTheme}
              className="inline-flex items-center justify-center rounded-2xl border border-black/10 dark:border-white/10 p-2 hover:shadow-sm hover:-translate-y-0.5 transition-all"
            >
              {theme === "dark" ? (
                <Sun className="h-4 w-4" />
              ) : (
                <Moon className="h-4 w-4" />
              )}
            </button>
            {/* ADDED: Hamburger Menu Button */}
            <button
              aria-label="Toggle menu"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center rounded-2xl border border-black/10 dark:border-white/10 p-2 hover:shadow-sm hover:-translate-y-0.5 transition-all md:hidden"
            >
              <Menu className="h-4 w-4" />
            </button>
          </div>
        </nav>
      </header>
      
      {/* ADDED: Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-neutral-50 dark:bg-neutral-900 md:hidden">
          <button
            aria-label="Close menu"
            onClick={() => setIsMenuOpen(false)}
            className="absolute top-4 right-4 rounded-2xl p-2"
          >
            <X className="h-6 w-6" />
          </button>
          <div className="flex flex-col gap-8 text-center">
            {navLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-2xl font-medium hover:opacity-80 transition-opacity"
                onClick={() => setIsMenuOpen(false)} // Close menu on click
              >
                {l.label}
              </a>
            ))}
          </div>
        </div>
      )}

      <main id="home" className="mx-auto max-w-6xl px-4">
        {/* Hero */}
        <motion.section
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          variants={sectionVariant}
          className="grid grid-cols-1 items-center gap-8 py-16 md:grid-cols-2 md:py-24"
        >
          <div>
            <h1 className="text-4xl font-bold tracking-tight md:text-5xl">
              Hey, I’m <span className="text-blue-600 dark:text-blue-400">Gnana Harish</span>
            </h1>
            <p className="mt-4 text-base text-neutral-600 dark:text-neutral-300 md:text-lg">
              I build clean, performant web apps with Next.js, Tailwind, and a dash of ML curiosity.
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-3">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 rounded-2xl bg-blue-600 px-4 py-2 text-white shadow hover:bg-blue-700 active:scale-[.99]"
              >
                View Projects <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-2xl border border-black/10 dark:border-white/10 px-4 py-2 hover:shadow-sm"
              >
                <Download className="h-4 w-4" /> Download Resume
              </a>
            </div>
            <div className="mt-6 flex flex-wrap items-center gap-4 text-sm text-neutral-600 dark:text-neutral-300">
              <span className="inline-flex items-center gap-1"><MapPin className="h-4 w-4" /> Chennai, IN</span>
              <a href="mailto:harishgnana2021@gmail.com" className="inline-flex items-center gap-1 hover:underline">
                <Mail className="h-4 w-4" /> harishgnana2021@gmail.com
              </a>
            </div>
          </div>
         
        </motion.section>

        {/* About */}
        <motion.section
          id="about"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          variants={sectionVariant}
          className="py-12 md:py-16"
        >
          <SectionHeading title="About" subtitle="A quick snapshot of who I am" />
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            <div className="md:col-span-2">
              <Card>
                <p>
                  I’m a developer focused on building modern, accessible web apps. I enjoy working across the stack, from crafting sleek UIs to shipping robust APIs. I’m currently exploring AI-assisted tooling and ways to make interfaces faster and more intuitive.
                </p>
              </Card>
            </div>
            <div className="space-y-4">
              <Card>
                <h4 className="mb-2 text-sm font-semibold tracking-tight">Education Summary</h4>
                <ul className="list-disc pl-5 text-sm text-neutral-700 dark:text-neutral-300">
                  <li>VIT Chennai — B.Tech CSE (AIML), 2025–2029 (expected)</li>
                  <li>Interests: Web, ML, Systems</li>
                </ul>
              </Card>
              <Card>
                <h4 className="mb-2 text-sm font-semibold tracking-tight">Highlights</h4>
                <ul className="list-disc pl-5 text-sm text-neutral-700 dark:text-neutral-300">
                  <li>Built 6+ personal/club projects</li>
                  <li>Open source contributor</li>
                  <li>Hackathon finalist</li>
                </ul>
              </Card>
            </div>
          </div>
        </motion.section>

        {/* Skills */}
        <motion.section
          id="skills"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          variants={sectionVariant}
          className="py-12 md:py-16"
        >
          <SectionHeading title="Skills" subtitle="A focused stack I keep sharpening" />
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
            {skills.map((s) => (
              <div key={s.name} className="rounded-2xl border border-black/10 dark:border-white/10 p-4">
                <div className="mb-2 flex items-center justify-between">
                  <span className="text-sm font-medium">{s.name}</span>
                  <span className="text-xs text-neutral-500 dark:text-neutral-400">{s.level}%</span>
                </div>
                <div className="h-2 w-full overflow-hidden rounded-full bg-black/10 dark:bg-white/10">
                  <div
                    className="h-full rounded-full bg-blue-600 transition-[width] duration-700 ease-out dark:bg-blue-500"
                    style={{ width: `${s.level}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </motion.section>

        {/* Projects */}
        <motion.section
          id="projects"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionVariant}
          className="py-12 md:py-16"
        >
          <SectionHeading title="Projects" subtitle="Things I’ve built and shipped" />
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            {projects.map((p) => (
              <ProjectCard key={p.title} {...p} />
            ))}
          </div>
        </motion.section>

        {/* Experience & Education Timeline */}
        <motion.section
          id="experience"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          variants={sectionVariant}
          className="py-12 md:py-16"
        >
          <SectionHeading title="Experience & Education" subtitle="A simple timeline view" />
          <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
            <div>
              <h4 className="mb-3 text-sm font-semibold tracking-tight">Experience</h4>
              <Timeline items={experience} />
            </div>
            <div>
              <h4 className="mb-3 text-sm font-semibold tracking-tight">Education</h4>
              <Timeline items={education} />
            </div>
          </div>
        </motion.section>

        {/* Contact */}
        <motion.section
          id="contact"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          variants={sectionVariant}
          className="py-12 md:py-20"
        >
          <SectionHeading title="Contact" subtitle="Let’s build something together" />

          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            <div className="space-y-4 md:col-span-1">
              <Card>
                <div className="flex items-center gap-2 text-sm">
                  <Mail className="h-4 w-4" />
                  <a href="mailto:harishgnana2021" className="hover:underline">
                    harishgnana2021@gmail.com
                  </a>
                </div>
                <div className="mt-2 flex items-center gap-2 text-sm">
                  <Linkedin className="h-4 w-4" />
                  <a
                    href="https://www.linkedin.com/in/gnana-harish18"
                    target="_blank"
                    rel="noreferrer noopener"
                    className="hover:underline"
                  >
                    linkedin.com/in/gnana-harish-18
                  </a>
                </div>
                <div className="mt-2 flex items-center gap-2 text-sm">
                  <Github className="h-4 w-4" />
                  <a
                    href="https://github.com/gnanaharoid"
                    target="_blank"
                    rel="noreferrer noopener"
                    className="hover:underline"
                  >
                    github.com/gnanaharoid
                  </a>
                </div>
                <div className="mt-2 flex items-center gap-2 text-sm">
                  <Phone className="h-4 w-4" />
                  <span>+91-8015716216</span>
                </div>
              </Card>
            </div>
            <div className="md:col-span-2">
              <Card>
                <form
                  className="grid grid-cols-1 gap-4"
                  onSubmit={(e) => {
                    e.preventDefault();
                    const form = e.currentTarget;
                    const data = new FormData(form);
                    const name = data.get("name");
                    const email = data.get("email");
                    const message = data.get("message");
                    window.location.href = `mailto: harishgnana2021@gmail.com?subject=Portfolio%20Contact%20from%20${encodeURIComponent(
                      String(name || "")
                    )}&body=${encodeURIComponent(
                      `Email: ${email}\n\n${message}`
                    )}`;
                  }}
                >
                  <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                    <Input label="Name" name="name" required />
                    <Input label="Email" name="email" type="email" required />
                  </div>
                  <TextArea label="Message" name="message" rows={5} required />
                  {/* CHANGED: Adjusted layout for small screens */}
                  <div className="flex flex-col items-start gap-3 sm:flex-row sm:items-center">
                    <button
                      type="submit"
                      className="inline-flex items-center gap-2 rounded-2xl bg-blue-600 px-4 py-2 text-white shadow hover:bg-blue-700 active:scale-[.99]"
                    >
                      Send Message <ArrowRight className="h-4 w-4" />
                    </button>
                    
                  </div>
                </form>
              </Card>
            </div>
          </div>
        </motion.section>
      </main>

      {/* Footer */}
      <footer className="border-t border-black/5 dark:border-white/10">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-4 py-8 text-sm md:flex-row">
          <p className="text-neutral-600 dark:text-neutral-400">
            © {new Date().getFullYear()} Gnana Harish. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <a
              href="https://github.com/gnanaharoid"
              target="_blank"
              rel="noreferrer noopener"
              className="hover:opacity-80"
            >
              <Github className="h-4 w-4" />
            </a>
            <a
              href="https://www.linkedin.com/in/gnana-harish18/"
              target="_blank"
              rel="noreferrer noopener"
              className="hover:opacity-80"
            >
              <Linkedin className="h-4 w-4" />
            </a>
            <a href="mailto:harishgnana2021@gmail.com" className="hover:opacity-80">
              <Mail className="h-4 w-4" />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

// ---------- UI Primitives (No changes needed below this line) ----------
function SectionHeading({ title, subtitle }) {
  return (
    <div className="mb-8 flex flex-col items-start gap-1">
      <h3 className="text-2xl font-semibold tracking-tight md:text-3xl">{title}</h3>
      {subtitle ? (
        <p className="text-sm text-neutral-600 dark:text-neutral-400">{subtitle}</p>
      ) : null}
    </div>
  );
}

function Card({ children }) {
  return (
    <div className="rounded-3xl border border-black/10 dark:border-white/10 bg-white/70 dark:bg-neutral-900/70 p-5 shadow-sm">
      {children}
    </div>
  );
}

function Input({ label, ...props }) {
  return (
    <label className="grid gap-1 text-sm">
      <span className="text-neutral-700 dark:text-neutral-300">{label}</span>
      <input
        {...props}
        className="rounded-2xl border border-black/10 dark:border-white/10 bg-white/70 dark:bg-neutral-900/70 px-3 py-2 outline-none ring-0 focus:border-blue-500"
      />
    </label>
  );
}

function TextArea({ label, ...props }) {
  return (
    <label className="grid gap-1 text-sm">
      <span className="text-neutral-700 dark:text-neutral-300">{label}</span>
      <textarea
        {...props}
        className="rounded-2xl border border-black/10 dark:border-white/10 bg-white/70 dark:bg-neutral-900/70 px-3 py-2 outline-none ring-0 focus:border-blue-500"
      />
    </label>
  );
}

function ProjectCard({
  title,
  description,
  imageAlt,
  github,
  demo,
}) {
  return (
    <div className="group rounded-3xl border border-black/10 dark:border-white/10 bg-white/60 dark:bg-neutral-900/60 overflow-hidden hover:shadow-md transition-shadow">
      <div className="relative">
        <div className="aspect-video w-full bg-gradient-to-br from-neutral-100 to-neutral-200 dark:from-neutral-800 dark:to-neutral-700" aria-label={imageAlt} />
      </div>
      <div className="p-5">
        <h4 className="font-semibold tracking-tight">{title}</h4>
        <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-300">{description}</p>
        <div className="mt-4 flex items-center gap-3 text-sm">
          <a
            href={github}
            target="_blank"
            rel="noreferrer noopener"
            className="inline-flex items-center gap-1 rounded-2xl border border-black/10 dark:border-white/10 px-3 py-1.5 hover:-translate-y-0.5 hover:shadow-sm transition-all"
          >
            <Github className="h-4 w-4" /> Code
          </a>
          <a
            href={demo}
            target="_blank"
            rel="noreferrer noopener"
            className="inline-flex items-center gap-1 rounded-2xl bg-neutral-900 text-white px-3 py-1.5 dark:bg-white dark:text-neutral-900 hover:-translate-y-0.5 hover:shadow-sm transition-all"
          >
            <ExternalLink className="h-4 w-4" /> Live
          </a>
        </div>
      </div>
    </div>
  );
}

function Timeline({
  items,
}) {
  return (
    <div className="relative pl-5">
      <div className="absolute left-1 top-0 h-full w-0.5 bg-black/10 dark:bg-white/10" />
      <div className="space-y-8">
        {items.map((item, idx) => (
          <div key={idx} className="relative">
            <div className="absolute -left-[7px] mt-1 h-3 w-3 rounded-full bg-blue-600 dark:bg-blue-500" />
            <div className="rounded-2xl border border-black/10 dark:border-white/10 p-4">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <h5 className="font-medium">
                  {item.title} · <span className="text-neutral-600 dark:text-neutral-400">{item.org}</span>
                </h5>
                <span className="text-xs text-neutral-500 dark:text-neutral-400">{item.period}</span>
              </div>
              <p className="mt-1 text-xs text-neutral-500 dark:text-neutral-400">{item.location}</p>
              <ul className="mt-2 list-disc pl-5 text-sm text-neutral-700 dark:text-neutral-300">
                {item.bullets.map((b, i) => (
                  <li key={i}>{b}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}