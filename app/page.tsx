import Image from "next/image";
import { resumeData } from "@/data/resume";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header Section */}
        <header className="text-center mb-12">
          <div className="mb-6">
            <Image
              src="/avatar.png"
              alt="Michael Endo Avatar"
              width={150}
              height={150}
              className="mx-auto rounded-full border-4 border-primary shadow-xl"
              priority
            />
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-2">
            {resumeData.name}
          </h1>
          <p className="text-lg text-text-muted">
            {resumeData.location}
          </p>
        </header>

        {/* Summary Section */}
        <section className="mb-12 bg-card-bg border border-card-border rounded-lg p-6 shadow-sm">
          <h2 className="text-2xl font-semibold mb-4 text-primary">Summary</h2>
          <p className="text-foreground leading-relaxed">
            {resumeData.summary}
          </p>
        </section>

        {/* Experience Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-6 text-primary">Work Experience</h2>
          <div className="space-y-8">
            {resumeData.experience.map((job, index) => (
              <div
                key={index}
                className="bg-card-bg border border-card-border rounded-lg p-6 shadow-sm hover:shadow-md transition-all hover:border-primary/30"
              >
                <div className="mb-4">
                  <h3 className="text-xl font-semibold text-foreground">
                    {job.title}
                  </h3>
                  <div className="text-text-muted">
                    <p className="font-medium">{job.company}, {job.location}</p>
                    <p className="text-sm">{job.period}</p>
                    {job.description && (
                      <p className="text-sm italic mt-1">{job.description}</p>
                    )}
                  </div>
                </div>
                <ul className="space-y-2">
                  {job.bullets.map((bullet, bulletIndex) => (
                    <li
                      key={bulletIndex}
                      className="flex items-start text-foreground"
                    >
                      <span className="text-primary mr-2 mt-1">•</span>
                      <span className="text-sm leading-relaxed">{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Education Section */}
        <section className="mb-12 bg-card-bg border border-card-border rounded-lg p-6 shadow-sm">
          <h2 className="text-2xl font-semibold mb-4 text-primary">Education</h2>
          <div>
            <h3 className="text-lg font-semibold text-foreground">
              {resumeData.education.degree}
            </h3>
            <p className="text-text-muted">
              {resumeData.education.school} – {resumeData.education.location}
            </p>
          </div>
        </section>

        {/* Technical Expertise Section */}
        <section className="mb-12 hidden">
          <h2 className="text-2xl font-semibold mb-6 text-primary">Technical Expertise</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-card-bg border border-card-border rounded-lg p-6 shadow-sm">
              <h3 className="font-semibold text-lg mb-3 text-foreground">
                Software & Frameworks
              </h3>
              <div className="flex flex-wrap gap-2">
                {resumeData.technicalExpertise.software.map((item, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-primary/10 text-primary-dark rounded-full text-sm font-medium"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>

            <div className="bg-card-bg border border-card-border rounded-lg p-6 shadow-sm">
              <h3 className="font-semibold text-lg mb-3 text-foreground">
                Programming Languages
              </h3>
              <div className="flex flex-wrap gap-2">
                {resumeData.technicalExpertise.languages.map((item, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-accent/10 text-accent rounded-full text-sm font-medium"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>

            <div className="bg-card-bg border border-card-border rounded-lg p-6 shadow-sm">
              <h3 className="font-semibold text-lg mb-3 text-foreground">
                Databases
              </h3>
              <div className="flex flex-wrap gap-2">
                {resumeData.technicalExpertise.databases.map((item, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-primary/10 text-primary-dark rounded-full text-sm font-medium"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>

            <div className="bg-card-bg border border-card-border rounded-lg p-6 shadow-sm">
              <h3 className="font-semibold text-lg mb-3 text-foreground">
                Business Skills
              </h3>
              <div className="flex flex-wrap gap-2">
                {resumeData.technicalExpertise.business.map((item, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-accent/10 text-accent rounded-full text-sm font-medium"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>
        <section className="mb-12 text-center">

          <div className="mt-6">
            <a
                href="/Michael_Endo_Resume.pdf"
                download
                className="inline-flex items-center px-6 py-3 bg-primary hover:bg-primary-dark text-white font-medium rounded-lg shadow-md hover:shadow-lg transition-all"
            >
              <svg
                  className="w-5 h-5 mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
              >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                />
              </svg>
              Download Resume
            </a>
          </div>

        </section>
      </div>
    </div>
  );
}