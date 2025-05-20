import type { Metadata } from "next";
import { Header } from "../components/header";

export const metadata: Metadata = {
  title: "Projects | John Developer",
  description:
    "Explore my portfolio of web development and software engineering projects.",
};

export default function ProjectsPage() {
  return (
    <>
      <Header />
      <main className="flex-1 pt-24 pb-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-8">My Projects</h1>
          <p className="text-xl text-muted-foreground mb-12">
            Here's a comprehensive collection of my work and side projects.
          </p>

          {/* Projects grid would go here - you can reuse and expand the ProjectsSection component */}
          <div className="text-center py-20">
            <p className="text-lg text-slate-600 dark:text-slate-300">
              Detailed projects page content coming soon...
            </p>
          </div>
        </div>
      </main>
    </>
  );
}
