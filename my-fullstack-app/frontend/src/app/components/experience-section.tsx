import { Calendar, Briefcase } from "lucide-react";

const experiences = [
  {
    title: "Senior Frontend Developer",
    company: "Tech Innovations Inc.",
    period: "2021 - Present",
    description:
      "Lead the development of modern web applications using React and Next.js. Implemented CI/CD pipelines and mentored junior developers.",
  },
  {
    title: "Full Stack Developer",
    company: "Digital Solutions Ltd.",
    period: "2018 - 2021",
    description:
      "Developed and maintained full-stack applications using React, Node.js, and MongoDB. Collaborated with design and product teams to deliver high-quality software.",
  },
  {
    title: "Junior Web Developer",
    company: "Creative Web Agency",
    period: "2016 - 2018",
    description:
      "Built responsive websites and implemented frontend features using HTML, CSS, and JavaScript. Worked with WordPress and PHP-based applications.",
  },
];

export function ExperienceSection() {
  return (
    <section className="py-20 bg-white dark:bg-slate-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Professional Experience
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
            My career journey and the companies I've had the pleasure to work
            with over the years.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="relative border-l-2 border-blue-500 dark:border-blue-400 ml-3 md:ml-6 pl-8 space-y-10">
            {experiences.map((experience, index) => (
              <div key={index} className="relative">
                {/* Timeline dot */}
                <div className="absolute -left-[41px] md:-left-[44px] p-2 bg-white dark:bg-slate-900 rounded-full border-2 border-blue-500 dark:border-blue-400">
                  <Briefcase className="h-4 w-4 text-blue-600 dark:text-blue-400" />
                </div>

                <div className="bg-white dark:bg-slate-800 rounded-lg shadow-md p-6 border border-slate-200 dark:border-slate-700">
                  <div className="flex flex-col md:flex-row md:items-center justify-between mb-2">
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                      {experience.title}
                    </h3>
                    <div className="flex items-center text-blue-600 dark:text-blue-400 text-sm mt-1 md:mt-0">
                      <Calendar className="h-4 w-4 mr-1" />
                      {experience.period}
                    </div>
                  </div>
                  <p className="text-slate-600 dark:text-slate-300 font-medium mb-3">
                    {experience.company}
                  </p>
                  <p className="text-slate-600 dark:text-slate-300">
                    {experience.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
