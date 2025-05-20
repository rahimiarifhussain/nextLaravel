"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu, X, Github, Linkedin, FileText, Code } from "lucide-react";
import { Button } from "../components/ui/button";
import { ThemeToggle } from "../components/theme-toggle";
import { cn } from "@/lib/utils";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80, // Offset for header height
        behavior: "smooth",
      });
    }
  };

  return (
    <header
      className={cn(
        "fixed top-0 z-50 w-full transition-all duration-300",
        isScrolled
          ? "bg-background/95 backdrop-blur-md shadow-sm"
          : "bg-background/50 backdrop-blur-sm"
      )}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="bg-gradient-to-r from-blue-600 to-cyan-500 p-1.5 rounded-md">
              <Code className="h-5 w-5 text-white" />
            </div>
            <button
              onClick={() => scrollToSection("home")}
              className="font-bold text-xl tracking-tight"
            >
              DevPortfolio
            </button>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {[
              { name: "Home", href: "home" },
              { name: "Projects", href: "projects" },
              { name: "Skills", href: "skills" },
              { name: "Contact", href: "contact" },
            ].map((item) => (
              <button
                key={item.name}
                className="text-sm font-medium relative group"
                onClick={() => scrollToSection(item.href)}
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-cyan-500 transition-all duration-300 group-hover:w-full"></span>
              </button>
            ))}
          </nav>

          {/* Social Links, Theme Toggle & Resume - Desktop */}
          <div className="hidden md:flex items-center space-x-3">
            <ThemeToggle />

            <Link
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                variant="ghost"
                size="icon"
                className="rounded-full h-9 w-9 hover:bg-blue-100 hover:text-blue-600 dark:hover:bg-blue-900/30 dark:hover:text-blue-400"
              >
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </Button>
            </Link>
            <Link
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                variant="ghost"
                size="icon"
                className="rounded-full h-9 w-9 hover:bg-blue-100 hover:text-blue-600 dark:hover:bg-blue-900/30 dark:hover:text-blue-400"
              >
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Button>
            </Link>
            <Link href="/resume.pdf" target="_blank">
              <Button
                variant="outline"
                size="sm"
                className="ml-2 border-blue-200 hover:border-blue-400 hover:bg-blue-50 dark:border-blue-900 dark:hover:border-blue-700 dark:hover:bg-blue-900/30"
              >
                <FileText className="h-4 w-4 mr-2" />
                Resume
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button and Theme Toggle */}
          <div className="flex md:hidden items-center space-x-2">
            <ThemeToggle />
            <Button
              variant="ghost"
              size="icon"
              className="rounded-full h-9 w-9"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
              <span className="sr-only">Toggle menu</span>
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-background/95 backdrop-blur-md border-b">
          <div className="container mx-auto px-4 py-4 space-y-3">
            {[
              { name: "Home", href: "home" },
              { name: "Projects", href: "projects" },
              { name: "Skills", href: "skills" },
              { name: "Contact", href: "contact" },
            ].map((item) => (
              <button
                key={item.name}
                className="block w-full text-left py-2 text-base font-medium hover:text-blue-600 dark:hover:text-blue-400"
                onClick={() => {
                  scrollToSection(item.href);
                  setIsMobileMenuOpen(false);
                }}
              >
                {item.name}
              </button>
            ))}
            <div className="pt-4 flex items-center space-x-2 border-t">
              <Link
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  variant="ghost"
                  size="icon"
                  className="rounded-full h-9 w-9"
                >
                  <Github className="h-5 w-5" />
                  <span className="sr-only">GitHub</span>
                </Button>
              </Link>
              <Link
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  variant="ghost"
                  size="icon"
                  className="rounded-full h-9 w-9"
                >
                  <Linkedin className="h-5 w-5" />
                  <span className="sr-only">LinkedIn</span>
                </Button>
              </Link>
              <Link href="/resume.pdf" target="_blank">
                <Button variant="outline" size="sm" className="ml-2">
                  <FileText className="h-4 w-4 mr-2" />
                  Resume
                </Button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
