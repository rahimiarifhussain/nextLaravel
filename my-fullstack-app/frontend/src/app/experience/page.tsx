import type { Metadata } from "next";
import { Header } from "../components/header";

export const metadata: Metadata = {
  title: "Experience | John Developer",
  description:
    "My professional experience and career journey in software development.",
};

export default function ExperiencePage() {
  return (
    <>
      <Header />
      <main className="flex-1 pt-24 pb-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-8">Professional Experience</h1>
          <p className="text-xl text-muted-foreground mb-12">
            My career journey and professional experience in software
            development.
          </p>

          {/* Experience timeline would go here */}
          <div className="text-center py-20">
            <p className="text-lg text-slate-600 dark:text-slate-300">
              Detailed experience page content coming soon...
            </p>
          </div>
        </div>
      </main>
    </>
  );
}
