"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { getAssetPath } from "@/utils/path";
import { Typewriter } from "@/components/Typewriter";
import { ParticleBackground } from "@/components/ParticleBackground";
import { CodeShowcase } from "@/components/CodeShowcase";

const NAV_ITEMS = [
  { label: "home", href: "#home" },
  { label: "expertise", href: "#expertise" },
  { label: "work", href: "#work" },
  { label: "experience", href: "#experience" },
  { label: "education", href: "#education" },
  { label: "contact", href: "#contact" },
];

const projects = [
  {
    title: "PupMatcher",
    emoji: "🐕",
    slug: "pupmatcher",
    image: getAssetPath("/projects/pupmatcher/PupMatcher/1.png"),
    description:
      "Developed a responsive website that functions like a matchmaking platform for dogs, similar to Tinder. Allows users to view dog profiles and swipe through potential matches, creating an engaging and fun experience for dog owners seeking social connections for their pets.",
  },
  {
    title: "MoveEasy",
    emoji: "📦",
    slug: "moveeasy",
    image: getAssetPath("/projects/moveeasy/MoveEasy/1.png"),
    description:
      "Created a responsive website to promote and showcase shipping services. Emphasized a clean, structured design and user-friendly navigation, allowing visitors to easily browse shipping options and service details.",
  },
  {
    title: "Figma Merch Store",
    emoji: "🎯",
    slug: "figmamerch",
    image: getAssetPath("/projects/figmamerch/Figma Merch Store/1.png"),
    description:
      "The Figma Merch Store was an e-commerce website designed for selling Figma-branded merchandise. It allowed users to browse products, view detailed product descriptions, add items to their cart, and complete purchases through a checkout process.",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.3,
      ease: "easeOut",
    },
  },
};

export default function Home() {
  const [expandedExp, setExpandedExp] = React.useState("Avacend Inc");
  const [activeSection, setActiveSection] = React.useState("home");
  const { scrollY } = useScroll();
  const navOpacity = useTransform(scrollY, [0, 100], [0.8, 1]);

  React.useEffect(() => {
    const handleScroll = () => {
      const sections = NAV_ITEMS.map((item) => item.href.substring(1));
      const current = sections.find((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <main className="relative min-h-screen flex flex-col bg-black overflow-x-hidden">
      {/* Modern Navigation */}
      <motion.nav
        style={{ opacity: navOpacity }}
        className="w-full flex justify-center pt-8 pb-4 z-50 fixed top-0 left-0 glass-effect border-b border-white/10"
      >
        <ul className="flex gap-6 md:gap-8 text-xs md:text-sm font-mono text-white">
          {NAV_ITEMS.map((item) => {
            const isActive = activeSection === item.href.substring(1);
            return (
              <li key={item.label} className="uppercase tracking-widest">
                <a
                  href={item.href}
                  className={`relative transition-colors flex items-center ${
                    isActive
                      ? "text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400"
                      : "hover:text-purple-400"
                  }`}
                >
                  {item.label}
                  {isActive && (
                    <motion.div
                      layoutId="activeSection"
                      className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-purple-400 to-pink-400"
                      initial={false}
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </a>
              </li>
            );
          })}
        </ul>
      </motion.nav>

      {/* Hero Section */}
      <section
        id="home"
        className="flex flex-col items-center justify-center text-center min-h-screen pt-24 select-none relative z-0 overflow-hidden"
        style={{
          backgroundImage: `url("${getAssetPath(
            "/projects/Background/hero-bg.jpg"
          )}")`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/80 z-0" />
        <ParticleBackground />
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="relative z-10"
        >
          <motion.h1
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="text-6xl md:text-8xl lg:text-9xl font-extrabold tracking-tight leading-none mb-6"
          >
            <span className="text-gradient">HEMANTH</span>
            <br />
            <span className="text-white">KUMAR G</span>
          </motion.h1>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="text-white font-mono text-lg md:text-2xl tracking-widest mb-4"
          >
            SOFTWARE ENGINEER,{" "}
            <Typewriter
              words={["FRONTEND", "BACKEND", "FULL STACK", "MOBILE"]}
              className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400"
            />
            <br />
            I ENGINEER IT ALL.
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.3 }}
            className="flex gap-4 justify-center mt-8"
          >
            <motion.a
              href="#work"
              whileHover={{ scale: 1.1, y: -5, rotate: -2 }}
              whileTap={{ scale: 0.9 }}
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.7, type: "spring", stiffness: 200 }}
              className="glass-card px-8 py-3 rounded-full text-white font-mono text-sm uppercase tracking-widest hover:glow-effect transition-all relative overflow-hidden group"
            >
              <motion.span
                className="relative z-10 flex items-center gap-2"
                whileHover={{ x: 3 }}
              >
                View My Work
                <motion.span
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1, repeat: Infinity }}
                >
                  →
                </motion.span>
              </motion.span>
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-pink-500/20"
                initial={{ x: "-100%" }}
                whileHover={{ x: "100%" }}
                transition={{ duration: 0.3 }}
              />
            </motion.a>
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.1, y: -5, rotate: 2 }}
              whileTap={{ scale: 0.9 }}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.8, type: "spring", stiffness: 200 }}
              className="border border-white/30 px-8 py-3 rounded-full text-white font-mono text-sm uppercase tracking-widest hover:bg-white/10 transition-all relative overflow-hidden group"
            >
              <motion.span
                className="relative z-10 flex items-center gap-2"
                whileHover={{ x: 3 }}
              >
                Get In Touch
                <motion.span
                  animate={{ rotate: [0, 15] }}
                  transition={{ duration: 1.5, repeat: Infinity, repeatType: "reverse" }}
                >
                  ✉️
                </motion.span>
              </motion.span>
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-pink-500/10 to-purple-500/10"
                initial={{ scale: 0 }}
                whileHover={{ scale: 1 }}
                transition={{ duration: 0.3 }}
              />
            </motion.a>
          </motion.div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="text-white/60 cursor-pointer"
            whileHover={{ scale: 1.2, y: 5 }}
          >
            <motion.svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              animate={{
                y: [0, 5, 0],
                opacity: [0.6, 1, 0.6],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              whileHover={{
                scale: 1.3,
                rotate: 10,
              }}
            >
              <motion.path
                d="M12 5v14"
                animate={{ pathLength: [0, 1] }}
                transition={{ duration: 1.5, repeat: Infinity, repeatType: "reverse" }}
              />
              <motion.path
                d="M19 12l-7 7-7-7"
                animate={{ y: [0, 3] }}
                transition={{ duration: 1.5, repeat: Infinity, repeatType: "reverse" }}
              />
            </motion.svg>
          </motion.div>
        </motion.div>
      </section>

      {/* Code Showcase Section */}
      <section className="w-full max-w-6xl mx-auto py-24 px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-4">
            <span className="text-gradient">Code</span> Showcase
          </h2>
          <p className="text-gray-400 font-mono">
            Demonstrating modern development practices
          </p>
        </motion.div>
        <CodeShowcase />
      </section>

      {/* Expertise Section */}
      <section
        id="expertise"
        className="w-full max-w-6xl mx-auto py-24 px-4 relative"
        style={{
          backgroundImage: `url("${getAssetPath(
            "/projects/Background/expertise-bg.jpg"
          )}")`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="absolute inset-0 bg-black/70 z-0" />
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative z-10"
        >
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl md:text-6xl font-bold text-white mb-16 text-center"
          >
            My <span className="text-gradient">Expertise</span>
          </motion.h1>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {[
              {
                emoji: "🖥️",
                title: "Software Development",
                subtitle: "Development",
                description:
                  "Experienced in both functional and OOP: Python, JavaScript, TypeScript.",
              },
              {
                emoji: "⚛️",
                title: "Frontend Dev",
                subtitle: "React, NextJS",
                description:
                  "Passionate about UI/UX. Over 3 years of development experience in HTML, CSS, JS, React and NextJS frameworks.",
              },
              {
                emoji: "📱",
                title: "Flutter & React Native Dev",
                description:
                  "Skilled in developing hybrid mobile apps and cross-platform solutions using the Flutter and React Native frameworks.",
              },
            ].map((expertise, index) => {
              const [isCardHovered, setIsCardHovered] = React.useState(false);
              
              return (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ y: -15, scale: 1.05, rotateY: 5 }}
                  whileTap={{ scale: 0.98 }}
                  onMouseEnter={() => setIsCardHovered(true)}
                  onMouseLeave={() => setIsCardHovered(false)}
                  className="glass-card rounded-xl p-8 group cursor-pointer relative overflow-hidden"
                >
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-br from-purple-500/0 to-pink-500/0 group-hover:from-purple-500/10 group-hover:to-pink-500/10 transition-all duration-500"
                    initial={false}
                  />
                  <div className="flex items-center gap-4 mb-6 relative z-10">
                    <motion.div
                      animate={isCardHovered ? { 
                        scale: 1.25,
                        y: -6,
                        rotate: [0, 5]
                      } : { 
                        scale: [1, 1.1],
                        y: [0, -3],
                        rotate: [0, 3]
                      }}
                      transition={isCardHovered ? {
                        duration: 0.4, 
                        type: "spring",
                        stiffness: 400,
                        damping: 12,
                        rotate: { duration: 0.6, repeat: Infinity, repeatType: "reverse", ease: "easeInOut", type: "tween" }
                      } : {
                        scale: { duration: 2, repeat: Infinity, repeatType: "reverse", ease: "easeInOut", type: "tween" },
                        y: { duration: 2.5, repeat: Infinity, repeatType: "reverse", ease: "easeInOut", type: "tween" },
                        rotate: { duration: 3, repeat: Infinity, repeatType: "reverse", ease: "easeInOut", type: "tween" }
                      }}
                      className="text-4xl"
                    >
                      {expertise.emoji}
                    </motion.div>
                    <motion.h2
                      animate={isCardHovered ? { x: 5 } : { x: 0 }}
                      transition={{ duration: 0.2 }}
                      className="text-2xl font-bold text-white"
                    >
                      {expertise.title}
                      {expertise.subtitle && (
                        <>
                          <br />
                          {expertise.subtitle}
                        </>
                      )}
                    </motion.h2>
                  </div>
                  <motion.p
                    initial={{ opacity: 0.8 }}
                    animate={isCardHovered ? { opacity: 1 } : { opacity: 0.8 }}
                    transition={{ duration: 0.2 }}
                    className="text-gray-400 font-mono text-sm leading-relaxed relative z-10"
                  >
                    {expertise.description}
                  </motion.p>
                  <motion.div
                    initial={{ width: 0 }}
                    animate={isCardHovered ? { width: "100%" } : { width: 0 }}
                    className="mt-6 h-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"
                    transition={{ duration: 0.2 }}
                  />
                </motion.div>
              );
            })}
          </motion.div>
        </motion.div>
      </section>

      {/* Work Section */}
      <section id="work" className="w-full max-w-6xl mx-auto py-24 px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-5xl md:text-6xl font-bold text-white mb-16 text-center"
        >
          Work / <span className="text-gradient">Projects</span>
        </motion.h2>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-8"
        >
          {projects.map((project, index) => {
            const [isCardHovered, setIsCardHovered] = React.useState(false);
            
            return (
              <motion.div
                key={project.title}
                variants={itemVariants}
                whileHover={{ y: -15, scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                initial={{ opacity: 0, y: 50, rotateX: -15 }}
                whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05, duration: 0.3 }}
                onMouseEnter={() => setIsCardHovered(true)}
                onMouseLeave={() => setIsCardHovered(false)}
              >
                <Link
                  href={`/projects/${project.slug}`}
                  className="group relative block glass-card rounded-xl overflow-hidden h-full"
                >
                  <motion.div
                    animate={isCardHovered ? { scale: 1.1, rotate: 2 } : { scale: 1, rotate: 0 }}
                    transition={{ duration: 0.3, type: "spring", stiffness: 300, damping: 20 }}
                    className="relative h-48 w-full overflow-hidden"
                  >
                    <Image
                      src={project.image}
                      alt={`${project.title} preview`}
                      width={600}
                      height={400}
                      className="object-cover object-center w-full h-full transition-transform duration-700"
                      priority
                    />
                    <motion.div
                      animate={isCardHovered ? { opacity: 1 } : { opacity: 0.8 }}
                      transition={{ duration: 0.2 }}
                      className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/80"
                    />
                    <motion.div
                      animate={isCardHovered ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                      transition={{ duration: 0.2 }}
                      className="absolute inset-0 flex items-center justify-center bg-black/70 backdrop-blur-sm"
                    >
                      <motion.span
                        animate={isCardHovered ? { scale: 1.1, x: 5 } : { scale: 1, x: 0 }}
                        transition={{ duration: 0.2 }}
                        className="text-white font-mono uppercase tracking-widest text-sm flex items-center gap-2"
                      >
                        View Project
                        <motion.span
                          animate={{ x: [0, 5] }}
                          transition={{ duration: 1, repeat: Infinity, repeatType: "reverse" }}
                        >
                          →
                        </motion.span>
                      </motion.span>
                    </motion.div>
                  </motion.div>
                  <div className="p-8">
                    <div className="flex items-center gap-4 mb-6">
                      <motion.div
                        animate={isCardHovered ? { 
                          scale: 1.25,
                          y: -6,
                          rotate: [0, 8]
                        } : { 
                          scale: [1, 1.08],
                          y: [0, -4],
                          rotate: [0, 5]
                        }}
                        transition={isCardHovered ? {
                          duration: 0.4, 
                          type: "spring",
                          stiffness: 400,
                          damping: 12,
                          rotate: { duration: 0.8, repeat: Infinity, repeatType: "reverse", ease: "easeInOut", type: "tween" }
                        } : {
                          scale: { duration: 2.5, repeat: Infinity, repeatType: "reverse", ease: "easeInOut", type: "tween" },
                          y: { duration: 3, repeat: Infinity, repeatType: "reverse", ease: "easeInOut", type: "tween" },
                          rotate: { duration: 4, repeat: Infinity, repeatType: "reverse", ease: "easeInOut", type: "tween" }
                        }}
                        className="text-3xl"
                      >
                        {project.emoji}
                      </motion.div>
                    <motion.h3
                      animate={isCardHovered ? { x: 5 } : { x: 0 }}
                      transition={{ duration: 0.2 }}
                      className="text-2xl font-bold text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-pink-400 transition-all"
                    >
                      {project.title}
                    </motion.h3>
                  </div>
                  <motion.p
                    animate={isCardHovered ? { opacity: 1 } : { opacity: 0.8 }}
                    transition={{ duration: 0.2 }}
                    className="text-gray-400 font-mono text-sm leading-relaxed"
                  >
                    {project.description}
                  </motion.p>
                </div>
              </Link>
            </motion.div>
            );
          })}
        </motion.div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="w-full max-w-6xl mx-auto py-24 px-4">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-5xl md:text-6xl font-bold text-white mb-16 text-center"
        >
          Professional <span className="text-gradient">Experience</span>
        </motion.h1>
        <div className="space-y-4">
          {[
            {
              company: "Avacend Inc",
              title: "App Developer @ Avacend Inc",
              period: "02/2025 - Present",
              location: "📍 Bengaluru, India",
              website: "avacend.com",
              points: [
                "Built two facility management mobile apps one for Supervisors and another for Technicians using React Native/Expo.",
                "Streamlined work order tracking and real-time worker monitoring tailored to both user roles.",
                "Achieved a reduction in response times and improved productivity for field teams.",
                "Implemented advanced filtering with multi criteria search, date range, and intelligent Redux/Context API caching, cutting API calls by 60%.",
                "Developed comprehensive state management with Redux Toolkit and navigation caching for seamless screen transitions and data persistence.",
                "Delivered responsive UIs with dark/light mode (NativeWind) for both roles, boosting user adoption and enhancing accessibility.",
                "Built a secure authentication system using Expo SecureStore and Redux, maintaining uptime and zero security incidents, ensuring a seamless and safe user experience.",
              ],
              skills: ["React Native", "Expo", "TypeScript", "Redux Toolkit", "NativeWind"],
            },
            {
              company: "Constient",
              title: "Front End Web Developer @ Constient Global Solutions",
              period: "06/2023 - 12/2023",
              location: "📍 Bengaluru, India",
              website: "constient.com",
              points: [
                "Worked on a cloud-native log monitoring system",
                "Making the website responsive to different devices",
                "Adding theme toggling to the website",
                "Unit testing",
              ],
              skills: ["React", "JavaScript", "CSS"],
            },
          ].map((exp) => {
            const [isCardHovered, setIsCardHovered] = React.useState(false);
            
            return (
              <motion.div
                key={exp.company}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="w-full"
              >
                <motion.button
                  onClick={() =>
                    setExpandedExp(
                      expandedExp === exp.company ? "" : exp.company
                    )
                  }
                  whileHover={{ scale: 1.02, x: 5 }}
                  whileTap={{ scale: 0.98 }}
                  onMouseEnter={() => setIsCardHovered(true)}
                  onMouseLeave={() => setIsCardHovered(false)}
                  className={`w-full flex justify-between items-center p-6 rounded-lg text-left transition-all glass-card relative overflow-hidden group ${
                    expandedExp === exp.company
                      ? "bg-white/10 border-purple-500/50"
                      : "hover:bg-white/5"
                  }`}
                >
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-purple-500/0 to-pink-500/0 group-hover:from-purple-500/10 group-hover:to-pink-500/10 transition-all duration-500"
                    initial={false}
                  />
                  <motion.div
                    animate={isCardHovered ? { x: 5 } : { x: 0 }}
                    transition={{ duration: 0.2 }}
                    className="relative z-10"
                  >
                    <h3 className="text-xl font-semibold text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-pink-400 transition-all">
                      {exp.title}
                    </h3>
                  </motion.div>
                <div className="flex items-center gap-4 relative z-10">
                  <motion.span
                    whileHover={{ scale: 1.1 }}
                    className="text-white/80 text-sm"
                  >
                    {exp.period}
                  </motion.span>
                  <motion.span
                    animate={{
                      rotate: expandedExp === exp.company ? 180 : 0,
                      scale: expandedExp === exp.company ? 1.2 : 1,
                    }}
                    transition={{ type: "spring", stiffness: 300 }}
                    className="text-2xl text-white"
                  >
                    ↓
                  </motion.span>
                </div>
              </motion.button>
              {expandedExp === exp.company && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.2 }}
                  className="glass-card p-8 rounded-b-lg mt-1 overflow-hidden"
                >
                  <div className="flex items-center gap-4 mb-4">
                    <motion.span
                      animate={isCardHovered ? { scale: 1.2, rotate: -10 } : { scale: 1, rotate: 0 }}
                      transition={{ duration: 0.2, type: "spring", stiffness: 300, damping: 20 }}
                      className="text-white/60 inline-block"
                    >
                      {exp.location}
                    </motion.span>
                    <motion.a
                      href="#"
                      whileHover={{ scale: 1.1, x: 3 }}
                      className="text-white/80 hover:text-purple-400 transition-colors"
                    >
                      {exp.website}
                    </motion.a>
                  </div>
                  <ul className="list-disc list-inside text-white/80 text-sm space-y-2">
                    {exp.points.map((point, i) => (
                      <motion.li
                        key={i}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.1 }}
                      >
                        {point}
                      </motion.li>
                    ))}
                  </ul>
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3 }}
                    className="flex flex-wrap gap-2 mt-6"
                  >
                    {exp.skills.map((skill, skillIndex) => (
                      <motion.span
                        key={skill}
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.4 + skillIndex * 0.1, type: "tween" }}
                        whileHover={{ scale: 1.15, y: -3, rotate: -5 }}
                        whileTap={{ scale: 0.9 }}
                        className="px-3 py-1 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full text-sm text-white/80 border border-purple-500/30 cursor-pointer"
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </motion.div>
                </motion.div>
              )}
            </motion.div>
            );
          })}
        </div>
      </section>

      {/* Education Section */}
      <section
        id="education"
        className="w-full max-w-6xl mx-auto py-24 px-4 text-center"
      >
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-5xl md:text-6xl font-bold text-white mb-16"
        >
          <span className="text-gradient">Education</span>
        </motion.h2>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-6"
        >
          {[
            {
              emoji: "🎓",
              title: "RNS Institute of Technology, Bengaluru",
              description:
                "Bachelor of Engineering in Electronics and Communication",
            },
            {
              emoji: "🎓",
              title: "Dayananda Sagar Institute of Technology, Bengaluru",
              description:
                "Diploma in Electronics and Communication Engineering",
            },
          ].map((edu, index) => {
            const [isCardHovered, setIsCardHovered] = React.useState(false);
            
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.05, y: -10, rotateX: 5 }}
                whileTap={{ scale: 0.98 }}
                onMouseEnter={() => setIsCardHovered(true)}
                onMouseLeave={() => setIsCardHovered(false)}
                className="glass-card rounded-xl p-8 text-left relative overflow-hidden group"
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-purple-500/0 to-pink-500/0 group-hover:from-purple-500/10 group-hover:to-pink-500/10 transition-all duration-500"
                  initial={false}
                />
                <div className="flex items-start gap-4 relative z-10">
                  <motion.div
                    animate={isCardHovered ? { 
                      scale: 1.25,
                      y: -6,
                      rotate: [0, 10]
                    } : { 
                      scale: [1, 1.12],
                      y: [0, -5],
                      rotate: [0, 8]
                    }}
                    transition={isCardHovered ? {
                      duration: 0.4, 
                      type: "spring",
                      stiffness: 400,
                      damping: 12,
                      rotate: { duration: 0.7, repeat: Infinity, repeatType: "reverse", ease: "easeInOut", type: "tween" }
                    } : {
                      scale: { duration: 2.2, repeat: Infinity, repeatType: "reverse", ease: "easeInOut", type: "tween" },
                      y: { duration: 2.8, repeat: Infinity, repeatType: "reverse", ease: "easeInOut", type: "tween" },
                      rotate: { duration: 3.5, repeat: Infinity, repeatType: "reverse", ease: "easeInOut", type: "tween" }
                    }}
                    className="text-3xl"
                  >
                    {edu.emoji}
                  </motion.div>
                  <motion.div
                    animate={isCardHovered ? { x: 5 } : { x: 0 }}
                    transition={{ duration: 0.2, type: "spring", stiffness: 300 }}
                  >
                    <h3 className="text-2xl font-semibold text-white mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-pink-400 transition-all">
                      {edu.title}
                    </h3>
                    <motion.div
                      animate={isCardHovered ? { opacity: 1 } : { opacity: 0.8 }}
                      transition={{ duration: 0.2 }}
                      className="text-gray-400 font-mono"
                    >
                      {edu.description}
                    </motion.div>
                  </motion.div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className="w-full max-w-6xl mx-auto py-24 px-4 text-center"
      >
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-5xl md:text-6xl font-bold text-white mb-16"
        >
          Get In <span className="text-gradient">Touch</span>
        </motion.h2>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="glass-card rounded-xl p-12"
        >
          <div className="flex flex-col md:flex-row items-center justify-center gap-8">
            {[
              {
                icon: (
                  <motion.svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    variants={{
                      idle: {
                        y: [0, -2],
                        transition: {
                          y: { duration: 1.5, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" },
                        },
                      },
                      hover: {
                        rotate: -5,
                        scale: 1.2,
                        y: -3,
                        transition: {
                          type: "tween",
                          duration: 0.2,
                        },
                      },
                    }}
                    initial="idle"
                  >
                    <motion.rect
                      width="20"
                      height="16"
                      x="2"
                      y="4"
                      rx="2"
                      variants={{
                        idle: { rx: 2 },
                        hover: { rx: 3 },
                      }}
                    />
                    <motion.path
                      d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"
                      animate={{ pathLength: [0, 1] }}
                      transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
                    />
                  </motion.svg>
                ),
                text: "Hemanthx96@gmail.com",
                href: "mailto:Hemanthx96@gmail.com",
              },
              {
                icon: (
                  <motion.svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    variants={{
                      idle: {
                        rotate: [0, 5],
                        transition: {
                          rotate: { duration: 2.5, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" },
                        },
                      },
                      hover: {
                        rotate: 10,
                        scale: 1.2,
                        y: -3,
                        transition: {
                          type: "tween",
                          duration: 0.2,
                        },
                      },
                    }}
                    initial="idle"
                  >
                    <motion.path
                      d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"
                      variants={{
                        idle: { pathLength: 1 },
                        hover: { pathLength: 1.1 },
                      }}
                    />
                    <motion.path
                      d="M9 18c-4.51 2-5-2-7-2"
                      animate={{ pathLength: [0.5, 1] }}
                      transition={{ duration: 1.5, repeat: Infinity, repeatType: "reverse" }}
                    />
                  </motion.svg>
                ),
                text: "GitHub",
                href: "https://github.com/Hemanthx96",
              },
              {
                icon: (
                  <motion.svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    variants={{
                      idle: {
                        scale: [1, 1.05],
                        transition: {
                          scale: { duration: 1.5, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" },
                        },
                      },
                      hover: {
                        rotate: -5,
                        scale: 1.2,
                        y: -3,
                        transition: {
                          type: "tween",
                          duration: 0.2,
                        },
                      },
                    }}
                    initial="idle"
                  >
                    <motion.path
                      d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"
                      variants={{
                        idle: { pathLength: 1 },
                        hover: { pathLength: 1.1 },
                      }}
                    />
                    <motion.rect
                      width="4"
                      height="12"
                      x="2"
                      y="9"
                      animate={{ height: [12, 14, 12] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    />
                    <motion.circle
                      cx="4"
                      cy="4"
                      r="2"
                      animate={{ r: [2, 2.5, 2] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    />
                  </motion.svg>
                ),
                text: "LinkedIn",
                href: "https://www.linkedin.com/in/hemanth-kumar-763011165/",
              },
            ].map((contact, index) => {
              // Use state to track hover for icon animations
              const [isCardHovered, setIsCardHovered] = React.useState(false);

              const cardVariants = {
                idle: {
                  scale: 1,
                  y: 0,
                  rotateY: 0,
                },
                hover: {
                  scale: 1.15,
                  y: -10,
                  rotateY: 5,
                  z: 50,
                  transition: {
                    duration: 0.2,
                  },
                },
              };

              // Define icon animations based on index - making them alive!
              const iconAnimations = [
                {
                  idle: { 
                    y: [0, -4],
                    scale: [1, 1.08],
                    rotate: [0, 5],
                    transition: {
                      y: { duration: 2.5, repeat: Infinity, repeatType: "reverse", ease: "easeInOut", type: "tween" },
                      scale: { duration: 2, repeat: Infinity, repeatType: "reverse", ease: "easeInOut", type: "tween" },
                      rotate: { duration: 3, repeat: Infinity, repeatType: "reverse", ease: "easeInOut", type: "tween" },
                    },
                  },
                  hover: { 
                    scale: 1.25, 
                    y: -6,
                    rotate: [0, 10],
                    transition: {
                      type: "spring",
                      stiffness: 400,
                      damping: 12,
                      duration: 0.4,
                      rotate: { duration: 0.6, repeat: Infinity, repeatType: "reverse", ease: "easeInOut", type: "tween" },
                    },
                  },
                },
                {
                  idle: { 
                    rotate: [0, 8],
                    scale: [1, 1.1],
                    y: [0, -3],
                    transition: {
                      rotate: { duration: 3.5, repeat: Infinity, repeatType: "reverse", ease: "easeInOut", type: "tween" },
                      scale: { duration: 2.2, repeat: Infinity, repeatType: "reverse", ease: "easeInOut", type: "tween" },
                      y: { duration: 2.8, repeat: Infinity, repeatType: "reverse", ease: "easeInOut", type: "tween" },
                    },
                  },
                  hover: { 
                    scale: 1.25, 
                    y: -6,
                    rotate: [0, 15],
                    transition: {
                      type: "spring",
                      stiffness: 400,
                      damping: 12,
                      duration: 0.4,
                      rotate: { duration: 0.5, repeat: Infinity, repeatType: "reverse", ease: "easeInOut", type: "tween" },
                    },
                  },
                },
                {
                  idle: { 
                    scale: [1, 1.12],
                    y: [0, -5],
                    rotate: [0, 6],
                    transition: {
                      scale: { duration: 2.3, repeat: Infinity, repeatType: "reverse", ease: "easeInOut", type: "tween" },
                      y: { duration: 3.2, repeat: Infinity, repeatType: "reverse", ease: "easeInOut", type: "tween" },
                      rotate: { duration: 4, repeat: Infinity, repeatType: "reverse", ease: "easeInOut", type: "tween" },
                    },
                  },
                  hover: { 
                    scale: 1.25, 
                    y: -6,
                    rotate: [0, 12],
                    transition: {
                      type: "spring",
                      stiffness: 400,
                      damping: 12,
                      duration: 0.4,
                      rotate: { duration: 0.7, repeat: Infinity, repeatType: "reverse", ease: "easeInOut", type: "tween" },
                    },
                  },
                },
              ];
              
              const iconContainerVariants = {
                idle: { 
                  scale: 1,
                  ...iconAnimations[index]?.idle,
                },
                hover: { 
                  scale: 1,
                  ...iconAnimations[index]?.hover,
                },
              };

              // Get icon's internal variants for path animations
              const iconElement = contact.icon as React.ReactElement;
              const iconVariants = (iconElement?.props as any)?.variants || {};

              return (
                <motion.a
                  key={index}
                  href={contact.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 30, rotateY: -90 }}
                  whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2, duration: 0.6 }}
                  whileHover="hover"
                  whileTap={{ scale: 0.9 }}
                  animate="idle"
                  onMouseEnter={() => setIsCardHovered(true)}
                  onMouseLeave={() => setIsCardHovered(false)}
                  className="flex flex-col items-center gap-4 p-6 rounded-xl glass-card hover:glow-effect transition-all group perspective-1000"
                  variants={cardVariants}
                >
                  <motion.div
                    variants={iconContainerVariants}
                    animate={isCardHovered ? "hover" : "idle"}
                    transition={{ duration: 0.2 }}
                    className="text-purple-400 group-hover:text-pink-400 transition-colors"
                  >
                    {React.cloneElement(iconElement, {
                      ...iconElement.props,
                      variants: iconVariants,
                      animate: isCardHovered ? "hover" : "idle",
                      whileHover: undefined,
                    })}
                  </motion.div>
                <motion.span
                  whileHover={{ scale: 1.1 }}
                  className="text-white font-mono text-sm group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-pink-400 transition-all"
                >
                  {contact.text}
                </motion.span>
                <motion.div
                  className="absolute inset-0 rounded-xl bg-gradient-to-br from-purple-500/0 to-pink-500/0 group-hover:from-purple-500/20 group-hover:to-pink-500/20 transition-all duration-500"
                  initial={false}
                />
              </motion.a>
            );
            })}
          </div>
        </motion.div>
      </section>

      {/* Copyright Footer */}
      <motion.footer
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="w-full py-6 text-center text-white/60 font-mono text-sm border-t border-white/10"
      >
        © Copyright 2025. Made with{" "}
        <motion.span
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 1, repeat: Infinity }}
          className="inline-block text-red-500"
        >
          ❤️
        </motion.span>{" "}
        by Hemanth
      </motion.footer>
    </main>
  );
}
