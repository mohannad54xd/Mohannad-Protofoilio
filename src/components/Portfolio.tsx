import {  HiDeviceMobile, HiDocumentText } from 'react-icons/hi';
import { IoIosPlanet } from 'react-icons/io';  // Add this import
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

const projects = [
  {
    icon: <IoIosPlanet className="text-4xl" />,
    title: "SolarTrek",
    description: "A full-stack web application for solar system exploration.",
    color: "from-blue-500 to-cyan-500",
    link: "https://solartrek.co"
  },
  {
    icon: <HiDocumentText className="text-4xl" />,
    title: "CV Maker",
    description: "An interactive platform for creating professional resumes.",
    color: "from-purple-500 to-pink-500",
    link: "https://drive.google.com/file/d/1uF0z25302mhShn4gHZaXaxbClZw2_5G6/view?usp=sharing"
  },
  {
    icon: <HiDeviceMobile className="text-4xl" />,
    title: "Egypt Tourism App",
    description: "A mobile application showcasing Egypt's tourist attractions (In Development).",
    color: "from-green-500 to-emerald-500",
    link: "#"  // Removed link since project is not completed
  }
];

const Portfolio = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  return (
    <section id="projects" ref={containerRef} className="py-20 px-4 relative overflow-hidden">
      <motion.div 
        className="absolute inset-0 bg-gradient-to-b from-blue-500/5 via-transparent to-transparent"
        style={{
          opacity: useTransform(scrollYProgress, [0, 0.5], [0, 0.2]),
        }}
      />
      
      <div className="max-w-6xl mx-auto relative z-10">
        <motion.h2 
          className="text-5xl md:text-6xl font-extrabold display-text bg-gradient-to-r from-sky-400 via-blue-400 to-indigo-400 bg-clip-text text-transparent leading-tight tracking-tight font-poppins text-center mb-16"
          style={{
            opacity: useTransform(scrollYProgress, [0, 0.2], [0, 1]),
            scale: useTransform(scrollYProgress, [0, 0.2], [0.8, 1]),
          }}
        >
          MY PROJECTS
        </motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          {projects.map((project, index) => (
            <motion.a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              key={index}
              className="group relative cursor-pointer"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
            >
              <motion.div 
                className="absolute -inset-[1px] rounded-xl bg-gradient-to-r from-sky-400/20 via-blue-400/20 to-indigo-400/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity"
                whileHover={{ scale: 1.1 }}
              />
              <motion.div
                className="relative p-6 rounded-xl bg-slate-800/50 backdrop-blur-sm border border-slate-700 hover:border-slate-500 transition-all h-full"
                whileHover={{ y: -5 }}
              >
                <div className={`p-3 w-fit rounded-lg bg-gradient-to-r ${project.color} mb-4`}>
                  {project.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{project.title}</h3>
                <p className="text-slate-300">{project.description}</p>
              </motion.div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
