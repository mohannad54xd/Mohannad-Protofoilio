import { motion } from 'framer-motion'

const UGC = () => {
  return (
    <section id="ugc" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          className="text-4xl md:text-5xl font-extrabold text-white mb-8 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Roblox UGC Uploader
        </motion.h2>

        <motion.div
          className="text-lg text-slate-300 max-w-3xl mx-auto space-y-4 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p>
            I am a Roblox UGC uploader. I design, create, and publish user-generated content
            (UGC) for the Roblox platform, following Roblox's submission guidelines and quality
            standards.
          </p>
          <p>
            Skills: Good skill in roblox studio, texturing, optimization, and publishing. Comfortable with
            asset pipelines and community-driven product releases.
          </p>
        </motion.div>
      </div>
    </section>
  )
}

export default UGC
