"use client";

import { ArrowRight, Github, ExternalLink } from "lucide-react";
import { Button } from "../components/ui/button";

export function HeroSection() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="relative py-20 md:py-28 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-slate-50 dark:from-slate-950/50 dark:to-blue-950/30 -z-10" />

      {/* Decorative elements */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-blue-300 dark:via-blue-700 to-transparent opacity-20" />
      <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-200 dark:bg-blue-900/20 rounded-full blur-3xl opacity-30" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left column - Text content */}
          <div className="space-y-8">
            <div className="space-y-2">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
                <span className="block">Hi, I'm</span>
                <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
                  John Developer
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-slate-600 dark:text-slate-300">
                Full-Stack Developer & Problem Solver
              </p>
            </div>

            <p className="text-lg text-slate-600 dark:text-slate-300 max-w-xl">
              I build exceptional digital experiences with modern technologies.
              Specializing in creating robust, scalable applications that solve
              real-world problems.
            </p>

            <div className="flex flex-wrap gap-4">
              <Button
                size="lg"
                className="bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-blue-600"
                onClick={() => scrollToSection("projects")}
              >
                View Projects
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-blue-200 hover:border-blue-400 dark:border-blue-800 dark:hover:border-blue-700"
                onClick={() => scrollToSection("contact")}
              >
                Contact Me
              </Button>
            </div>

            <div className="pt-4 flex items-center gap-3">
              <div className="text-sm text-slate-500 dark:text-slate-400">
                Featured on:
              </div>
              <div className="flex gap-4">
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="opacity-70 hover:opacity-100 transition-opacity"
                >
                  <Github className="h-5 w-5" />
                  <span className="sr-only">GitHub</span>
                </a>
                <a
                  href="#"
                  className="opacity-70 hover:opacity-100 transition-opacity"
                >
                  <ExternalLink className="h-5 w-5" />
                  <span className="sr-only">External Link</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right column - Code snippet */}
          <div className="relative">
            <div className="relative bg-white dark:bg-slate-900 rounded-lg shadow-xl p-2 md:p-6 border border-slate-200 dark:border-slate-800">
              <div className="absolute top-4 left-4 flex space-x-2">
                <div className="w-3 h-3 rounded-full bg-red-500" />
                <div className="w-3 h-3 rounded-full bg-yellow-500" />
                <div className="w-3 h-3 rounded-full bg-green-500" />
              </div>
              <pre className="text-sm md:text-base font-mono bg-slate-50 dark:bg-slate-900 p-4 rounded overflow-x-auto">
                <code className="language-typescript">
                  {`// Welcome to my portfolio
function Developer() {
  const skills = [
    "JavaScript", "TypeScript",
    "React", "Next.js",
    "Node.js", "Express"
  ];
  
  const passion = "Building amazing web apps";
  
  return {
    code,
    collaborate,
    createValue
  };
}`}
                </code>
              </pre>
            </div>

            {/* Decorative elements */}
            <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-blue-600/20 rounded-full blur-xl" />
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-cyan-600/20 rounded-full blur-xl" />
          </div>
        </div>
      </div>
    </section>
  );
}
