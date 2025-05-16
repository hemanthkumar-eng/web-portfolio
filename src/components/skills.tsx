import * as React from "react";
import { Code2, Layout, Server, Database, TestTube2 } from "lucide-react";

export function Skills() {
  const skillCategories = [
    {
      category: "Programming Languages",
      skills: ["JavaScript", "TypeScript", "Python"],
      icon: <Code2 className="h-6 w-6 text-primary" />,
    },
    {
      category: "Front-End Development",
      skills: ["React", "React Native", "Next.js", "Bootstrap"],
      icon: <Layout className="h-6 w-6 text-primary" />,
    },
    {
      category: "Back-End Development",
      skills: ["Node.js", "Express.js"],
      icon: <Server className="h-6 w-6 text-primary" />,
    },
    {
      category: "Data Management",
      skills: ["PostgreSQL"],
      icon: <Database className="h-6 w-6 text-primary" />,
    },
    {
      category: "Testing",
      skills: ["Unit and Integration testing"],
      icon: <TestTube2 className="h-6 w-6 text-primary" />,
    },
  ];

  return (
    <section className="mb-12">
      <h2 className="text-2xl font-semibold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
        Skills
      </h2>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {skillCategories.map((category, index) => (
          <div
            key={index}
            className="glass-effect group relative overflow-hidden rounded-xl p-6 shadow-lg transition-all hover:shadow-xl hover:scale-[1.02]"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10 opacity-0 transition-opacity group-hover:opacity-100" />
            <div className="flex items-center gap-3 mb-4">
              {category.icon}
              <h3 className="text-xl font-medium">{category.category}</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {category.skills.map((skill, i) => (
                <span
                  key={i}
                  className="rounded-full bg-primary/10 px-3 py-1 text-sm text-primary transition-colors hover:bg-primary/20"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
