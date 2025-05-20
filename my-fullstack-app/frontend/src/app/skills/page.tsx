import type { Metadata } from "next";
import { Header } from "../components/header";

export const metadata: Metadata = {
  title: "Skills & Expertise | John Developer",
  description:
    "Learn about my technical skills, expertise, and development experience.",
};

export default function SkillsPage() {
  return (
    <>
      <Header />
      <main className="flex-1 pt-24 pb-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-8">Skills & Expertise</h1>
          <p className="text-xl text-muted-foreground mb-12">
            A detailed overview of my technical skills and areas of expertise.
          </p>

          {/* Detailed skills content would go here - you can expand the SkillsSection component */}
          <div className="text-center py-20">
            <p className="text-lg text-slate-600 dark:text-slate-300">
              Detailed skills page content coming soon...
            </p>
          </div>
        </div>
      </main>
    </>
  );
}
