import * as React from "react";

export function Experience() {
  const experiences = [
    {
      title: "App Developer",
      company: "Avacend Inc",
      location: "Bengaluru, India",
      period: "02/2025 - Present",
      website: "https://avacendsolutions.com",
      description: [
        "Developed a mobile dashboard application for supervisors using static Excel-based data to provide on the go access to work order status, worker assignments, and departmental metrics.",
        "Built reusable, responsive UI components using React Native enabling intuitive navigation across work orders, worker details, and SLA compliance metrics.",
        "Integrated structured data parsing logic to transform Excel input into clean, interactive frontend views with filtering, sorting, and dynamic data mapping.",
        "Engineered a scalable layout with card-based views and modular design patterns to support future additions like graphical visualizations and adaptive interfaces.",
      ],
      skills: ["React Native", "TypeScript", "Redux"],
    },
    {
      title: "Front End Web Developer",
      company: "Constient Global Solutions",
      location: "Bengaluru, India",
      period: "06/2023 - 12/2023",
      website: "https://www.constient.com",
      description: [
        "Worked on a cloud-native log monitoring system",
        "Making the website responsive to different devices",
        "Adding theme toggling to the website",
        "Unit testing",
      ],
      skills: ["React", "JavaScript", "CSS"],
    },
  ];

  const [expandedExp, setExpandedExp] = React.useState("Avacend Inc");

  return (
    <div className="space-y-4">
      {experiences.map((exp) => (
        <div key={exp.company} className="w-full">
          <button
            onClick={() =>
              setExpandedExp(expandedExp === exp.company ? "" : exp.company)
            }
            className={`w-full flex justify-between items-center p-6 rounded-lg text-left transition-colors border border-white/10 backdrop-blur-sm ${
              expandedExp === exp.company
                ? "bg-black/90"
                : "bg-black/80 hover:bg-black/90"
            }`}
          >
            <div>
              <h3 className="text-xl font-semibold text-white">
                {exp.title} @ {exp.company}
              </h3>
            </div>
            <div className="flex items-center gap-4">
              <span className="text-white/80">{exp.period}</span>
              <span className="text-2xl text-white">
                {expandedExp === exp.company ? "−" : "+"}
              </span>
            </div>
          </button>
          {expandedExp === exp.company && (
            <div className="bg-black/80 backdrop-blur-sm p-8 rounded-b-lg border border-white/10 mt-1">
              <div className="flex items-center gap-4 mb-4">
                <span className="text-white/60">📍 {exp.location}</span>
                <a
                  href={exp.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/80 hover:text-white"
                >
                  {exp.website.replace("https://", "")}
                </a>
              </div>
              <ul className="list-disc list-inside text-white/80 text-sm space-y-2">
                {exp.description.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
              <div className="flex flex-wrap gap-2 mt-6">
                {exp.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 bg-white/5 rounded-full text-sm text-white/80"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
