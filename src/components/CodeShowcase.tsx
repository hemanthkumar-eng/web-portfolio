"use client";

import * as React from "react";
import { motion } from "framer-motion";

const codeSnippets = [
  {
    language: "TypeScript",
    code: `const createModernPortfolio = () => {
  return {
    tech: ['React', 'Next.js', 'TypeScript'],
    features: ['Animations', 'Responsive', 'Modern UI'],
    deploy: 'Vercel'
  };
};`,
  },
  {
    language: "React",
    code: `function Portfolio() {
  const [skills, setSkills] = useState([
    'Frontend', 'Backend', 'Mobile'
  ]);
  
  return (
    <AnimatedSection>
      {skills.map(skill => (
        <SkillCard key={skill} />
      ))}
    </AnimatedSection>
  );
}`,
  },
  {
    language: "CSS",
    code: `.modern-card {
  backdrop-filter: blur(20px);
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.18);
  transition: transform 0.3s ease;
}

.modern-card:hover {
  transform: translateY(-5px);
}`,
  },
];

export function CodeShowcase() {
  const [currentIndex, setCurrentIndex] = React.useState(0);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % codeSnippets.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="relative w-full max-w-2xl mx-auto"
    >
      <div className="glass-card rounded-xl p-6 overflow-hidden">
        <div className="flex items-center gap-2 mb-4">
          <div className="flex gap-2">
            <div className="w-3 h-3 rounded-full bg-red-500" />
            <div className="w-3 h-3 rounded-full bg-yellow-500" />
            <div className="w-3 h-3 rounded-full bg-green-500" />
          </div>
          <span className="ml-4 text-sm text-gray-400 font-mono">
            {codeSnippets[currentIndex].language}
          </span>
        </div>
        <motion.pre
          key={currentIndex}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 20 }}
          transition={{ duration: 0.3 }}
          className="text-sm font-mono text-gray-300 overflow-x-auto"
        >
          <code>{codeSnippets[currentIndex].code}</code>
        </motion.pre>
        <div className="mt-4 flex gap-2">
          {codeSnippets.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`h-2 rounded-full transition-all ${
                index === currentIndex
                  ? "w-8 bg-purple-500"
                  : "w-2 bg-gray-600"
              }`}
              aria-label={`Show ${codeSnippets[index].language} code`}
            />
          ))}
        </div>
      </div>
    </motion.div>
  );
}

