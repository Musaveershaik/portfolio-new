// "use client";

// import SocialMedia from "@/components/SocialMedia";
// import { ThemeToggle } from "@/components/ThemeToggle";
// import { AnimateIn } from "@/components/animations/AnimateIn";
// import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
// import { ExternalLink } from "lucide-react";
// import Image from "next/image";

// export default function Home() {
//   return (
//     <main className="text-zinc-900 dark:text-zinc-100 max-w-2xl mx-auto px-4 py-10 md:py-16">
//       <div className="absolute top-4 right-4">
//         <ThemeToggle />
//       </div>

//       <AnimateIn variant="fadeUp">
//         <section className="mb-12">
//           <AnimateIn variant="fadeUp" delay={0.2}>
//             <h1 className="text-xl font-medium tracking-tight mb-8 flex items-baseline">
//               <span>Hey, I&apos;m Shaik Mohammad Musaveer</span>
//             </h1>
//           </AnimateIn>
//           <AnimateIn variant="fadeUp" delay={0.4}>
//             <p className="text-zinc-600 dark:text-zinc-400 max-w-xl mb-6">
//               Full-stack developer experienced with React, Angular, Node.js, Spring Boot and AWS. Passionate about building user-focused web applications and solving complex challenges.
//             </p>
//           </AnimateIn>

//           <AnimateIn variant="fadeUp" delay={0.6}>
//             <div className="flex items-center gap-5">
//               <SocialMedia />
//             </div>
//           </AnimateIn>
//         </section>
//       </AnimateIn>

//       <Tabs defaultValue="projects">
//         <AnimateIn variant="fadeUp" delay={0.2}>
//           <TabsList className="mb-6 border-none bg-transparent p-0">
//             <h2><TabsTrigger value="projects" className="!bg-transparent !border-none !shadow-none">Projects</TabsTrigger></h2>
//             <TabsTrigger value="experience" className="!bg-transparent !border-none !shadow-none">Experience</TabsTrigger>
//             <TabsTrigger value="tools" className="!bg-transparent !border-none !shadow-none">Tools</TabsTrigger>
//           </TabsList>
//         </AnimateIn>

//         {/* Projects Tab */}
//         <TabsContent value="projects">
//           <AnimateIn variant="fadeUp" delay={0}>
//             <section className="mb-12">
//               <ul className="space-y-8">
//                 {projects.map((project, index) => (
//                   <AnimateIn key={index} variant="fadeLeft" delay={0.1 + index * 0.1}>
//                     <li className="group hover:translate-x-1 transition-all duration-300 ease-out">
//                       <div className="flex items-baseline justify-between mb-1">
//                         <h3 className="text-md font-medium">{project.title}</h3>
//                         <div className="flex flex-row gap-2">
//                           {project.github && (
//                             <a href={project.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 text-xs text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors">
//                               GitHub <ExternalLink className="w-3 h-3" />
//                             </a>
//                           )}
//                           {project.link && (
//                             <a href={project.link} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 text-xs text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors">
//                               View <ExternalLink className="w-3 h-3" />
//                             </a>
//                           )}
//                         </div>
//                       </div>
//                       <p className="text-sm text-zinc-500 dark:text-zinc-400 mb-2">{project.description}</p>
//                       <div className="flex flex-wrap gap-2">
//                         {project.technologies.map((tech, techIndex) => (
//                           <span key={techIndex} className="text-xs text-zinc-400 dark:text-zinc-500">
//                             {tech}{techIndex < project.technologies.length - 1 ? " /" : ""}
//                           </span>
//                         ))}
//                       </div>
//                     </li>
//                   </AnimateIn>
//                 ))}
//               </ul>
//             </section>
//           </AnimateIn>
//         </TabsContent>

//         {/* Experience Tab */}
//         <TabsContent value="experience">
//           <AnimateIn variant="fadeUp" delay={0}>
//             <section className="mb-12">
//               <ul className="space-y-8">
//                 {experience.map((job, index) => (
//                   <AnimateIn key={index} variant="fadeLeft" delay={0.1 + index * 0.1}>
//                     <li className="group hover:translate-x-1 transition-all duration-300 ease-out">
//                       <div className="flex flex-col sm:flex-row sm:items-baseline justify-between mb-1">
//                         <h3 className="text-md font-medium">
//                           {job.role} @ {job.company}
//                         </h3>
//                         <span className="text-xs text-zinc-400 dark:text-zinc-500">{job.period}</span>
//                       </div>
//                       <p className="text-sm text-zinc-500 dark:text-zinc-400 mb-2">{job.description}</p>
//                       <div className="flex flex-wrap gap-2">
//                         {job.technologies.map((tech, techIndex) => (
//                           <span key={techIndex} className="text-xs text-zinc-400 dark:text-zinc-500">
//                             {tech}{techIndex < job.technologies.length - 1 ? " /" : ""}
//                           </span>
//                         ))}
//                       </div>
//                     </li>
//                   </AnimateIn>
//                 ))}
//               </ul>
//             </section>
//           </AnimateIn>
//         </TabsContent>

//         {/* Tools Tab */}
//         <TabsContent value="tools">
//           <AnimateIn variant="fadeUp" delay={0}>
//             <section className="mb-12">
//               <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-7 gap-y-6 gap-x-4">
//                 {tools.map(({ logo, title }, index) => (
//                   <AnimateIn key={index} variant="scale" delay={0.1 + index * 0.03}>
//                     <div className="flex flex-col items-center group">
//                       <div className="relative h-6 w-6 md:h-8 md:w-8 mb-3 transition-all duration-300 ease-out group-hover:scale-110 group-hover:-translate-y-1">
//                         <Image src={logo} alt={`${title} logo`} fill className="object-contain drop-shadow-md" loading="eager" />
//                       </div>
//                       <span className="text-xs text-zinc-500 dark:text-zinc-400">{title}</span>
//                     </div>
//                   </AnimateIn>
//                 ))}
//               </div>
//             </section>
//           </AnimateIn>
//         </TabsContent>
//       </Tabs>

//       <AnimateIn variant="fadeUp" delay={0.8}>
//         <footer className="pt-4 text-xs text-zinc-400 dark:text-zinc-500 flex justify-between items-center">
//           <div></div>
//           <div>Built with Next.js</div>
//         </footer>
//       </AnimateIn>
//     </main>
//   );
// }


"use client";

import SocialMedia from "@/components/SocialMedia";
import { ThemeToggle } from "@/components/ThemeToggle";
import { AnimateIn } from "@/components/animations/AnimateIn";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { track } from "@vercel/analytics";
import { ExternalLink } from "lucide-react";
import Image from "next/image";

export default function Home() {
  return (
    <main className="text-zinc-900 dark:text-zinc-100 max-w-xl mx-auto px-4 py-4 mt-16">
      <AnimateIn variant="fadeUp">
        <section className="mb-6">
          <AnimateIn variant="fadeUp" delay={0.2}>
            <h1 className="text-xl font-medium tracking-tight mb-4 flex items-baseline justify-between">
              <span>Hey, I&apos;m Mohammad Musaveer Shaik</span>
              <ThemeToggle />
            </h1>
          </AnimateIn>
          <AnimateIn variant="fadeUp" delay={0.4}>
            {/* <p className="text-sm text-zinc-600 dark:text-zinc-400 max-w-xl mb-8">
              Software Engineer from London. Open to work. Contact me below. Currently building{" "}
              <a
                href="https://0.email"
                target="_blank"
                rel="noopener noreferrer"
                className="text-zinc-900 dark:text-zinc-100 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors"
                onClick={() => track("zero_email_clicked")}
              >
                Zero
              </a>{" "}
              and{" "}
              <a
                href="https://oss.now"
                target="_blank"
                rel="noopener noreferrer"
                className="text-zinc-900 dark:text-zinc-100 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors"
                onClick={() => track("oss.now_clicked")}
              >
                oss.now
              </a>
              .
            </p> */}

            <p className="text-sm text-zinc-600 dark:text-zinc-400 max-w-xl mb-8">
              Full Stack Developer open to work. contact me below.
            </p>
          </AnimateIn>

          <AnimateIn variant="fadeUp" delay={0.6}>
            <div className="flex items-center gap-5">
              <SocialMedia />
            </div>
          </AnimateIn>
        </section>
      </AnimateIn>

      <Tabs defaultValue="projects">
        <AnimateIn variant="fadeUp" delay={0.2}>
          <TabsList className="mb-4 border-none bg-transparent p-0 -ml-[8px]">
            <TabsTrigger value="projects" className="!bg-transparent !border-none !shadow-none">
              Projects
            </TabsTrigger>
            <TabsTrigger value="experience" className="!bg-transparent !border-none !shadow-none">
              Experience
            </TabsTrigger>
            <TabsTrigger value="tools" className="!bg-transparent !border-none !shadow-none">
              Tools
            </TabsTrigger>
          </TabsList>
        </AnimateIn>

        <TabsContent value="projects">
          <AnimateIn variant="fadeUp" delay={0}>
            <section className="mb-12">
              <div className="space-y-8">
                <ul className="space-y-8">
                  {projects.map((project, index) => {
                    const delay = 0.1 + index * 0.1;
                    return (
                      <AnimateIn key={index} variant="fadeLeft" delay={delay}>
                        <li className="group hover:translate-x-1 transition-all duration-300 ease-out">
                          <div className="flex items-baseline justify-between mb-1">
                            <h3 className="text-md font-medium">{project.title}</h3>
                            <div className="flex flex-row gap-2">
                              {project.github ? (
                                <a
                                  href={project.github}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="flex items-center gap-1 text-xs text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors"
                                  onClick={() => track(`${project.title}_github_clicked`)}
                                >
                                  GitHub <ExternalLink className="w-3 h-3" />
                                </a>
                              ) : null}
                              {project.link ? (
                                <a
                                  href={project.link}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="flex items-center gap-1 text-xs text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors"
                                  onClick={() => track(`${project.title}_clicked`)}
                                >
                                  View <ExternalLink className="w-3 h-3" />
                                </a>
                              ) : null}
                            </div>
                          </div>
                          <p className="text-sm text-zinc-500 dark:text-zinc-400 mb-2">{project.description}</p>
                          <div className="flex flex-wrap gap-2">
                            {project.technologies.map((tech, techIndex) => (
                              <span key={techIndex} className="text-xs text-zinc-400 dark:text-zinc-500">
                                {tech}
                                {techIndex < project.technologies.length - 1 ? " /" : ""}
                              </span>
                            ))}
                          </div>
                        </li>
                      </AnimateIn>
                    );
                  })}
                </ul>
              </div>
            </section>
          </AnimateIn>
        </TabsContent>

        <TabsContent value="experience">
          <AnimateIn variant="fadeUp" delay={0}>
            <section className="mb-12">
              <div className="space-y-8">
                <ul className="space-y-8">
                  {experience.map((job, index) => {
                    const delay = 0.1 + index * 0.1;
                    return (
                      <AnimateIn key={index} variant="fadeLeft" delay={delay}>
                        <li className="group hover:translate-x-1 transition-all duration-300 ease-out">
                          <div className="flex flex-col sm:flex-row sm:items-baseline justify-between mb-1">
                            <h3 className="text-md font-medium">
                              {job.role} {job.role.toLowerCase().includes("freelance") ? "" : "at"} {job.company}
                            </h3>
                            <span className="text-xs text-zinc-400 dark:text-zinc-500">{job.period}</span>
                          </div>
                          <p className="text-sm text-zinc-500 dark:text-zinc-400 mb-2">{job.description}</p>
                          <div className="flex flex-wrap gap-2">
                            {job.technologies.map((tech, techIndex) => (
                              <span key={techIndex} className="text-xs text-zinc-400 dark:text-zinc-500">
                                {tech}
                                {techIndex < job.technologies.length - 1 ? " /" : ""}
                              </span>
                            ))}
                          </div>
                        </li>
                      </AnimateIn>
                    );
                  })}
                </ul>
              </div>
            </section>
          </AnimateIn>
        </TabsContent>
        <TabsContent value="tools">
          <AnimateIn variant="fadeUp" delay={0}>
            <section className="mb-12">
              <div className="flex flex-wrap gap-y-6 gap-x-4 justify-center">
                {tools.map(({ logo, title }, index) => (
                  <AnimateIn key={index} variant="scale" delay={0.1 + index * 0.03} className="w-[calc(25%-12px)] sm:w-[calc(20%-13px)]">
                    <div className="flex flex-col items-center group">
                      <div className="relative h-7 w-7 sm:h-8 sm:w-8 mb-3 transition-all duration-300 ease-out group-hover:scale-110 group-hover:-translate-y-1">
                        <Image src={logo} alt={`${title} logo`} fill className="object-contain drop-shadow-md" loading="eager" />
                      </div>
                      <span className="text-xs text-zinc-500 dark:text-zinc-400 text-center whitespace-nowrap">{title}</span>
                    </div>
                  </AnimateIn>
                ))}
              </div>
            </section>
          </AnimateIn>
        </TabsContent>
      </Tabs>

      <AnimateIn variant="fadeUp" delay={0.8}>
        <footer className="pt-4 text-xs text-zinc-400 dark:text-zinc-500 flex justify-between items-center">
          <div></div>
          <div>Built with Next.js</div>
        </footer>
      </AnimateIn>
    </main>
  );
}

const projects = [
  {
    title: "Gemini Vission AI",
    description:
      "Streamlit web app that uses Google Gemini models to analyze images and respond to prompts. Upload an image and get AI-generated insights.",
    github: "https://github.com/musaveershaik/gemini-vission-ai",
    link: "https://gemini-vission.streamlit.app/",
    technologies: ["Python", "Streamlit", "Google Gemini AI"],
  },
  {
    title: "Full-Stack Blog Platform",
    description:
      "Blog platform with JWT auth, Markdown support, file uploads, and responsive CMS built with Node.js, Express, and MongoDB.",
    github: "https://github.com/Musaveershaik/Blogging-WebSite",
    technologies: ["Node.js", "Express", "MongoDB", "JWT", "Multer", "EJS"],
  },
  // {
  //   title: "AI Chat API with Spring Boot",
  //   description:
  //     "Spring Boot API that integrates with Google’s Gemini AI, using reactive programming and optimized REST endpoints.",
  //   github: "https://github.com/musaveershaik/ai-chat-api-springboot",
  //   technologies: ["Spring Boot", "Spring WebFlux", "REST API", "Google Gemini AI", "Cloud Run"],
  // },
  {
    title: "EventHub - Event Management Platform",
    description:
      "Cross-platform event management app with real-time updates, QR-based e-ticketing, and scalable AWS hosting.",
    github: "https://github.com/Musaveershaik/EventsHub",
    technologies: ["React Native", "TypeScript", "PostgreSQL", "WebSockets", "AWS EC2"],
  },
  {
    title: "Task Manager Calendar App",
    description:
      "Modern calendar and task management app with Angular, interactive UI, task CRUD, and responsive design.",
    github: "https://github.com/Musaveershaik/Task-Calender",
    link: "https://task-calender.netlify.app/",
    technologies: ["Angular 17", "TypeScript", "Angular Signals", "Luxon", "Material Design"],
  },
];


const experience = [
  {
    role: "Open Source Contributor",
    company: "Hacktoberfest",
    period: "Oct 2024",
    description:
      "Contributed to 5+ open-source projects, building REST APIs, real-time features, and improving query performance. Collaborated with global developers via GitHub.",
    technologies: ["Node.js", "MongoDB", "Next.js", "REST APIs"],
  },
  {
    role: "Frontend Developer Intern",
    company: "Smart Intern",
    period: "May - Aug 2023",
    description:
      "Built an e-commerce platform with product management, payment gateway integration, and improved performance through lazy-loaded images.",
    technologies: ["HTML", "CSS", "JavaScript", "Node.js", "Express", "Stripe"],
  },
];


const tools = [
  { logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg", title: "React" },
  {
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
    title: "NextJS",},{ logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg", title: "Angular" },
  { logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg", title: "Node.js" },
  { logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg", title: "Spring Boot" },
  { logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg", title: "PostgreSQL" },
  { logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg", title: "MongoDB" },
  { logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg", title: "Python" },
  { logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg", title: "C" },
  { logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg", title: "HTML" },
  { logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg", title: "CSS" },
  { logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg", title: "JavaScript" },
  { logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg", title: "TypeScript" },
  { logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg", title: "Git" },
  { logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg", title: "Figma" },
];