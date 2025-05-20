import type { Metadata } from "next";
import { Header } from "../components/header";

export const metadata: Metadata = {
  title: "Contact | John Developer",
  description:
    "Get in touch with me for job opportunities, collaborations, or project inquiries.",
};

export default function ContactPage() {
  return (
    <>
      <Header />
      <main className="flex-1 pt-24 pb-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
          <h1 className="text-4xl font-bold mb-8">Get In Touch</h1>
          <p className="text-xl text-muted-foreground mb-12">
            Have a project in mind or want to discuss an opportunity? I'd love
            to hear from you.
          </p>

          {/* Contact form would go here */}
          <div className="bg-white dark:bg-slate-800 rounded-lg shadow-md p-8 border border-slate-200 dark:border-slate-700">
            <p className="text-center text-lg text-slate-600 dark:text-slate-300 mb-8">
              Contact form coming soon. In the meantime, you can reach me at:
              <br />
              <a
                href="mailto:hello@johndeveloper.com"
                className="text-blue-600 dark:text-blue-400 font-medium"
              >
                hello@johndeveloper.com
              </a>
            </p>
          </div>
        </div>
      </main>
    </>
  );
}
