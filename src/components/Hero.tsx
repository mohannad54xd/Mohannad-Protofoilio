import { motion, useScroll, useTransform } from 'framer-motion';

const Hero = () => {
  const { scrollYProgress } = useScroll();
  
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative">
      <motion.div 
        style={{
          opacity: useTransform(scrollYProgress, [0, 0.5], [1, 0]),
          scale: useTransform(scrollYProgress, [0, 0.5], [1, 0.9]),
        }}
      >
        <div className="absolute inset-0 flex items-center justify-center">
          <motion.div
            className="w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-3xl"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </div>
        
        <motion.header 
          className="relative w-full py-24 md:py-0"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row items-center justify-center md:justify-start gap-12 md:gap-20">
              <motion.div 
                className="relative flex-shrink-0 group"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <motion.div 
                  className="absolute -inset-4 bg-gradient-to-r from-sky-600 via-blue-600 to-indigo-600 rounded-full blur-xl opacity-75"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                />
                <motion.div 
                  className="absolute -inset-2 bg-gradient-to-r from-sky-400 via-blue-400 to-indigo-400 rounded-full blur-md opacity-75"
                  animate={{ rotate: -360 }}
                  transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                />
                <motion.img
                  src="profile-pic.jpg"
                  alt="Profile Picture"
                  className="relative w-[220px] h-[220px] md:w-[250px] md:h-[250px] rounded-full border-4 border-slate-200/20 shadow-2xl object-cover"
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 300 }}
                />
              </motion.div>

              <motion.div 
                className="text-center md:text-left z-10 max-w-xl"
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 }
                }}
                initial="hidden"
                animate="visible"
                transition={{ delay: 0.4 }}
              >
                <motion.h1 
                  className="text-5xl md:text-7xl font-extrabold display-text bg-gradient-to-r from-sky-400 via-blue-400 to-indigo-400 bg-clip-text text-transparent leading-tight tracking-tight font-poppins"
                  whileHover={{ scale: 1.02 }}
                >
                  Mohannad Essam
                </motion.h1>
                <motion.p 
                  className="text-xl md:text-2xl text-slate-300 mt-6 font-light body-text tracking-wide"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.6 }}
                >
                  Software Engineer & Data Analyst
                </motion.p>
                <motion.div 
                  className="text-sky-400 italic mt-6 text-lg md:text-xl tracking-wider"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.8 }}
                >
                  Where Code Meets Creativity ⚡
                </motion.div>
              </motion.div>
            </div>
          </div>
        </motion.header>
      </motion.div>
    </section>
  );
};

export default Hero;
