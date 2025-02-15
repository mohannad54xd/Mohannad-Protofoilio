import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { HiAcademicCap, HiBadgeCheck, HiSparkles } from 'react-icons/hi';  // Add HiSparkles

const certificates = [
  {
    title: "Front End Web Development Professional",
    issuer: "Udacity",
    date: "December 2023",
    link: "https://www.udacity.com/certificate/e/dca686b8-9ada-11ee-ac46-df73f1a51f0a",
    icon: <HiBadgeCheck className="text-2xl" />,
    image: "DECI.png", // Add your certificate image
    skills: ["HTML", "CSS", "JavaScript", "React", "Web Development"]
  },
  {
    title: "NASA Space Apps Challenge",
    issuer: "NASA",
    date: "2023",
    link: "https://drive.google.com/file/d/1R9n1vkXopP3OsMQ2D2EbV_ZtFS1UIBg2/view?usp=sharing",
    icon: <HiAcademicCap className="text-2xl" />,
    image: "/nasa.png", // Add your certificate image
    skills: ["Innovation", "Space Technology", "Problem Solving", "Teamwork"]
  },
  {
    title: "ISEF Science Fair",
    issuer: "ISEF",
    date: "2023",
    link: "your-isef-certificate-url", // Replace with actual certificate URL
    icon: <HiSparkles className="text-2xl" />,
    image: "/isef.png", // Add your certificate image
    skills: ["Research", "Scientific Method", "Innovation", "Project Presentation"]
  }
];

const experiences = [
    {
        title: "High School Student",
        company: "Muhamed Fawzy High School",
        description: "Academic studies",
        skills: ["HTML", "Social Skills", "Teamworking", "Presentation Skills", "Problem Solving"],
        period: "Oct 2013 - Present"
    },
    {
        title: "Freelancer",
        company: "Upwork, Freelancer, Fiverr, Mostaql, 5asmat",
        description: "Software Development, Web Development, Graphic Design, Video Editing, Translation, Writing, Marketing, and more.",
        skills: ["HTML", "Social Skills", "Teamworking", "Presentation Skills", "Problem Solving", "Time Management", "Communication Skills", "Negotiation Skills", "Customer Service",  ],
        period: "Oct 2023 - Present"
    },
    // ...you can add more experiences here as needed
];

const Experience = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  return (
    <section ref={containerRef} id="experience" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.h2 
          className="text-5xl md:text-6xl font-extrabold display-text bg-gradient-to-r from-sky-400 via-blue-400 to-indigo-400 bg-clip-text text-transparent leading-tight tracking-tight font-poppins text-center mb-16"
          style={{
            opacity: useTransform(scrollYProgress, [0, 0.2], [0, 1]),
            scale: useTransform(scrollYProgress, [0, 0.2], [0.8, 1]),
          }}
        >
          Certificates & Experience
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {certificates.map((cert, index) => (
            <motion.a
              href={cert.link}
              target="_blank"
              rel="noopener noreferrer"
              key={cert.title}
              className="group"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
            >
              <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-6 hover:border-blue-500/50 transition-all duration-300">
                {cert.image && (
                  <div className="relative w-full h-40 mb-4 overflow-hidden rounded-lg">
                    <motion.img
                      src={cert.image}
                      alt={`${cert.title} Certificate`}
                      className="w-full h-full object-cover object-center transform group-hover:scale-110 transition-transform duration-300"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.2 }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 to-transparent" />
                  </div>
                )}
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 text-blue-400 mb-3">
                      {cert.icon}
                      <span className="text-sm font-medium">{cert.issuer}</span>
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-2">
                      {cert.title}
                    </h3>
                    <p className="text-slate-400 text-sm mb-4">{cert.date}</p>
                    <div className="flex flex-wrap gap-2">
                      {cert.skills.map((skill) => (
                        <span 
                          key={skill}
                          className="text-xs font-medium px-2.5 py-1 rounded-full bg-blue-500/10 text-blue-400 border border-blue-500/20"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                  <motion.div
                    className="text-slate-400"
                    whileHover={{ scale: 1.1 }}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </motion.div>
                </div>
              </div>
            </motion.a>
          ))}
        </div>
        
        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              className="relative p-8 rounded-xl bg-slate-800/50 backdrop-blur-sm border border-slate-700 hover:border-slate-500 transition-all group"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              whileHover={{ y: -5, scale: 1.02 }}
            >
              {/* Add sparkles effect on hover */}
              <motion.div 
                className="absolute -inset-[1px] rounded-xl bg-gradient-to-r from-sky-400/20 via-blue-400/20 to-indigo-400/20 opacity-0 group-hover:opacity-100 blur-xl transition-opacity"
                animate={{
                  backgroundPosition: ['0%', '100%', '0%'],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "linear"
                }}
              />
              
              <div className="flex flex-col md:flex-row gap-6 md:items-center justify-between relative z-10">
                <div className="flex-1">
                  <motion.h3 
                    className="text-2xl font-semibold text-white group-hover:text-sky-400 transition-colors"
                    whileHover={{ x: 10 }}
                  >
                    {exp.title}
                  </motion.h3>
                  <p className="text-blue-400 text-lg">{exp.company}</p>
                  <p className="text-slate-300 mt-3">{exp.description}</p>
                  <div className="flex flex-wrap gap-2 mt-4">
                    {exp.skills.map((skill, i) => (
                      <motion.span 
                        key={i}
                        className="px-3 py-1 text-sm rounded-full bg-slate-700/50 text-slate-300 hover:bg-slate-600/50 hover:text-white transition-colors"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </div>
                </div>
                <div className="text-slate-400 font-mono text-lg whitespace-nowrap">
                  {exp.period}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
