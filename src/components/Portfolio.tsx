import { HiDeviceMobile, HiDocumentText, HiUsers, HiChevronDown } from 'react-icons/hi';
import { IoIosPlanet } from 'react-icons/io';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { useRef, useState } from 'react';

const projects = [
  {
    icon: <IoIosPlanet className="text-4xl" />,
    title: 'SolarTrek',
    description: 'A full-stack web application for solar system exploration.',
    color: 'from-blue-500 to-cyan-500',
    link: 'https://solartrek.co'
  },
  {
    icon: <HiDocumentText className="text-4xl" />,
    title: 'CV Maker',
    description: 'An interactive platform for creating professional resumes.',
    color: 'from-purple-500 to-pink-500',
    link: 'https://drive.google.com/file/d/1uF0z25302mhShn4gHZaXaxbClZw2_5G6/view?usp=sharing'
  },
  {
    icon: <HiDeviceMobile className="text-4xl" />,
    title: 'Egypt Tourism App',
    description: "A mobile application showcasing Egypt's tourist attractions (In Development).",
    color: 'from-green-500 to-emerald-500',
    link: '#'
  }
];

const RobloxGroups = () => {
  const [open, setOpen] = useState(false);
  const [expanded, setExpanded] = useState<number | null>(null);

  const groups = [
    {
      title: 'Purloin',
      link: 'https://www.roblox.com/communities/644178720/purloin#!/about',
      code: 'PU'
    },
    {
      title: 'Embezzle',
      link: 'https://www.roblox.com/communities/1062047300/embezzle#!/about',
      code: 'EM'
    },
    {
      title: 'Filch',
      link: 'https://www.roblox.com/communities/190372873/filch#!/about',
      code: 'FI'
    }
  ];

  return (
    <div>
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-4">
        <div className="flex items-center gap-3">
          <div className="p-2 rounded-lg bg-gradient-to-r from-sky-400 to-indigo-500 text-white shadow-md">
            <HiUsers className="text-xl" />
          </div>
          <div>
            <h3 className="text-2xl md:text-3xl font-semibold text-white">Roblox groups</h3>
            <p className="text-sm md:text-base text-slate-400">Group assets, roles, and UGC collaborations</p>
          </div>
        </div>

        <button
          onClick={() => { setOpen(o => !o); setExpanded(null); }}
          aria-expanded={open}
          className="flex items-center gap-3 px-4 py-2 rounded-full bg-gradient-to-r from-slate-800/40 to-slate-700/30 backdrop-blur-sm hover:scale-105 transform transition-all duration-300 ring-1 ring-slate-700/60"
        >
          <div className={`p-1 rounded-full bg-gradient-to-r from-sky-400 to-indigo-500 text-white transform ${open ? 'scale-95' : ''} transition-transform`}>
            <HiChevronDown className={`transition-transform duration-300 ${open ? 'rotate-180' : ''}`} />
          </div>
          <div className="text-sm text-slate-200 font-medium">{open ? 'Hide groups' : 'Show groups'}</div>
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            key="groups-panel"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.36 }}
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-4">
              {groups.map((g, i) => (
                <motion.div
                  key={g.link}
                  initial={{ opacity: 0, y: 8 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.05 * i }}
                  whileHover={{ scale: 1.03 }}
                  onClick={() => setExpanded(expanded === i ? null : i)}
                  className="cursor-pointer p-4 rounded-2xl bg-gradient-to-b from-slate-800/60 to-slate-900/30 border border-slate-700 backdrop-blur-md hover:shadow-2xl hover:border-slate-500 transition-all duration-300"
                >
                  <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                    <div className="w-full sm:w-24 h-24 sm:h-24 rounded-lg bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center text-white font-bold text-xl">
                      {g.code}
                    </div>

                    <div className="flex-1 w-full">
                      <div className="flex items-start sm:items-center justify-between gap-4">
                        <div>
                          <h4 className="text-white font-semibold">{g.title}</h4>
                          <p className="text-sm text-slate-400">Roblox group — UGC uploads</p>
                        </div>
                        <div className="sm:hidden">
                          <a href={g.link} target="_blank" rel="noopener noreferrer" className="px-3 py-2 rounded-md bg-gradient-to-r from-sky-400 to-indigo-500 text-white text-sm">Open</a>
                        </div>
                      </div>

                      <div className="mt-3 hidden sm:flex items-center gap-2">
                        <span className="text-xs px-2 py-1 rounded-md bg-slate-700/40 text-slate-200">UGC</span>
                        <span className="text-xs px-2 py-1 rounded-md bg-slate-700/30 text-slate-300">Group</span>
                        <a href={g.link} target="_blank" rel="noopener noreferrer" className="ml-auto px-3 py-1 rounded-md bg-gradient-to-r from-sky-400 to-indigo-500 text-white text-sm">Open</a>
                      </div>
                    </div>
                  </div>

                  <AnimatePresence>
                    {expanded === i && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.28 }}
                        className="mt-4 overflow-hidden text-slate-300 text-sm"
                      >
                        <div className="p-3 rounded-lg bg-slate-800/40 border border-slate-700">
                          <p>I uploaded all the items in this group and hold Admin rank. I'm not a modeler — I'm an uploader.</p>
                          <div className="mt-3 flex gap-2">
                            <a href={g.link} target="_blank" rel="noopener noreferrer" className="px-3 py-1 rounded-md bg-gradient-to-r from-emerald-400 to-cyan-500 text-slate-900 text-sm">Open group</a>
                            <button className="px-3 py-1 rounded-md bg-slate-700/40 text-slate-200 text-sm">Edit</button>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const Portfolio = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start']
  });

  return (
    <section id="projects" ref={containerRef} className="py-20 px-4 relative overflow-hidden">
      <motion.div
        className="absolute inset-0 bg-gradient-to-b from-blue-500/5 via-transparent to-transparent"
        style={{
          opacity: useTransform(scrollYProgress, [0, 0.5], [0, 0.2])
        }}
      />

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.h2
          className="text-5xl md:text-6xl font-extrabold display-text bg-gradient-to-r from-sky-400 via-blue-400 to-indigo-400 bg-clip-text text-transparent leading-tight tracking-tight font-poppins text-center mb-16"
          style={{
            opacity: useTransform(scrollYProgress, [0, 0.2], [0, 1]),
            scale: useTransform(scrollYProgress, [0, 0.2], [0.8, 1])
          }}
        >
          MY PROJECTS
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          <div className="col-span-1 md:col-span-3">
            <motion.div
              className="relative p-6 rounded-xl bg-slate-800/50 backdrop-blur-sm border border-slate-700"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <RobloxGroups />
            </motion.div>
          </div>

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
              <motion.div className="relative p-6 rounded-xl bg-slate-800/50 backdrop-blur-sm border border-slate-700 hover:border-slate-500 transition-all h-full" whileHover={{ y: -5 }}>
                <div className={`p-3 w-fit rounded-lg bg-gradient-to-r ${project.color} mb-4`}>{project.icon}</div>
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
