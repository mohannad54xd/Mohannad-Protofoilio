import { motion } from 'framer-motion';
import { HiLightningBolt, HiCode, HiPuzzle, HiTranslate } from 'react-icons/hi';

const features = [
  {
    icon: <HiLightningBolt className="text-3xl" />,
    title: "Fast Learner",
    description: "Quickly adapting to new technologies and methodologies"
  },
  {
    icon: <HiCode className="text-3xl" />,
    title: "Clean Code",
    description: "Writing maintainable and scalable solutions"
  },
  {
    icon: <HiPuzzle className="text-3xl" />,
    title: "Problem Solver",
    description: "Finding creative solutions to complex challenges"
  }
];

const languages = [
  {
    language: "Arabic",
    level: "Native",
    color: "from-green-400 to-emerald-500"
  },
  {
    language: "English",
    level: "Fluent",
    color: "from-blue-400 to-cyan-500"
  },
  {
    language: "German",
    level: "Beginner",
    color: "from-yellow-400 to-amber-500"
  }
];

const About = () => {
  return (
    <section id="about" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.h2 
          className="text-5xl md:text-6xl font-extrabold display-text bg-gradient-to-r from-sky-400 via-blue-400 to-indigo-400 bg-clip-text text-transparent leading-tight tracking-tight font-poppins text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          About Me
        </motion.h2>

        <motion.div
          className="text-lg text-slate-300 max-w-3xl mx-auto space-y-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p>
            I'm a 17-year-old passionate web developer based in Giza, Egypt. Despite my young age, 
            I'm deeply committed to creating beautiful and functional web experiences that make a difference.
          </p>
          <p>
            Being part of the next generation of developers, I bring fresh perspectives and innovative ideas
            to every project I work on, combining modern technologies with creative solutions.
          </p>
        </motion.div>

        <motion.div 
          className="flex flex-col items-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="text-slate-300 text-lg leading-relaxed mb-12 text-center max-w-2xl">
            I'm a passionate software engineer focused on creating elegant solutions 
            to complex problems. With a strong foundation in modern web technologies 
            and a keen eye for design, I bring ideas to life through code.
          </p>

          <motion.div 
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-7 gap-4 mb-16"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            {["TypeScript", "React", "Node.js", "Next.js", "TailwindCSS", "Git", "Three.js"].map((skill, i) => (
              <motion.div
                key={skill}
                className="bg-slate-800/50 rounded-lg px-4 py-2 text-slate-300 text-center hover:bg-slate-700/50"
                whileHover={{ scale: 1.05, color: "#60A5FA" }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                {skill}
              </motion.div>
            ))}
          </motion.div>

          {/* Languages Section */}
          <div className="w-full mb-16">
            <motion.h3 
              className="text-2xl font-semibold text-white mb-8 text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <span className="inline-flex items-center gap-2">
                <HiTranslate className="text-blue-400" />
                Languages
              </span>
            </motion.h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-3xl mx-auto">
              {languages.map((lang, i) => (
                <motion.div
                  key={lang.language}
                  className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 p-4 rounded-xl"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  whileHover={{ scale: 1.02 }}
                >
                  <div className={`h-1 rounded-full bg-gradient-to-r ${lang.color} mb-3`} />
                  <h4 className="text-lg font-medium text-white">{lang.language}</h4>
                  <p className="text-sm text-slate-400">{lang.level}</p>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
            {features.map((feature, i) => (
              <motion.div
                key={feature.title}
                className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 p-6 rounded-xl text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2 }}
                whileHover={{ scale: 1.02 }}
              >
                <div className="text-blue-400 mb-4 flex justify-center">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
                <p className="text-slate-300">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
