import { motion } from 'framer-motion';
import { HiMail, HiLocationMarker, HiPhone } from 'react-icons/hi';
import { FaGithub, FaInstagram, FaLinkedin,  } from 'react-icons/fa';
import { useState } from 'react';
import emailjs from '@emailjs/browser';

const contactInfo = [
  { icon: <HiMail className="text-2xl" />, text: "mohannadessam54@gmail.com" },
  { icon: <HiLocationMarker className="text-2xl" />, text: "Giza, Egypt" },
  { icon: <HiPhone className="text-2xl" />, text: "+20 1002238880" }
];

const socialLinks = [
  { icon: <FaGithub className="text-2xl" />, href: "https://github.com/yourusername" },
  { icon: <FaLinkedin className="text-2xl" />, href: "https://www.linkedin.com/in/mohannad-essam-092aa02b9/" },
  { icon: <FaInstagram className="text-2xl" />, href: "https://www.instagram.com/trz_mohannad112/" }
];

interface FormData {
  name: string;
  email: string;
  message: string;
}

const Contact = () => {
  const [formData, setFormData] = useState<FormData>({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState<Partial<FormData>>({});
  const [isLoading, setIsLoading] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const validateForm = () => {
    const newErrors: Partial<FormData> = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Invalid email format';
    }
    if (!formData.message.trim()) newErrors.message = 'Message is required';
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsLoading(true);
    setSubmitStatus('idle');

    try {
      await emailjs.send(
        'service_nxyua0d', // Replace with your EmailJS service ID
        'template_oonijhn', // Replace with your EmailJS template ID
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
          to_email: 'mohannadessam54@gmail.com',
        },
        'bdGAINaRrrJVoWoMy' // Replace with your EmailJS public key
      );

      setSubmitStatus('success');
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      setSubmitStatus('error');
      console.error('Email send failed:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="contact" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.h2 
          className="text-5xl md:text-6xl font-extrabold display-text bg-gradient-to-r from-sky-400 via-blue-400 to-indigo-400 bg-clip-text text-transparent leading-tight tracking-tight font-poppins text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Get In Touch
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.form
            onSubmit={handleSubmit}
            className="space-y-6"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="space-y-4">
              <div>
                <motion.input
                  type="text"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className={`w-full px-4 py-3 rounded-lg bg-slate-800/50 border ${
                    errors.name ? 'border-red-500' : 'border-slate-700'
                  } focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all outline-none text-slate-200`}
                  whileFocus={{ scale: 1.01 }}
                />
                {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
              </div>

              <div>
                <motion.input
                  type="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className={`w-full px-4 py-3 rounded-lg bg-slate-800/50 border ${
                    errors.email ? 'border-red-500' : 'border-slate-700'
                  } focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all outline-none text-slate-200`}
                  whileFocus={{ scale: 1.01 }}
                />
                {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
              </div>

              <div>
                <motion.textarea
                  placeholder="Your Message"
                  rows={6}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className={`w-full px-4 py-3 rounded-lg bg-slate-800/50 border ${
                    errors.message ? 'border-red-500' : 'border-slate-700'
                  } focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all outline-none text-slate-200 resize-none`}
                  whileFocus={{ scale: 1.01 }}
                />
                {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
              </div>
            </div>

            <motion.button
              type="submit"
              disabled={isLoading}
              className={`w-full py-4 bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-lg font-semibold 
                ${isLoading ? 'opacity-70 cursor-not-allowed' : 'hover:opacity-90'} transition-opacity`}
              whileHover={!isLoading ? { scale: 1.02 } : {}}
              whileTap={!isLoading ? { scale: 0.98 } : {}}
            >
              {isLoading ? 'Sending...' : 'Send Message'}
            </motion.button>

            {submitStatus === 'success' && (
              <p className="text-green-500 text-center">Message sent successfully!</p>
            )}
            {submitStatus === 'error' && (
              <p className="text-red-500 text-center">Failed to send message. Please try again.</p>
            )}
          </motion.form>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="space-y-6">
              {contactInfo.map((info, i) => (
                <motion.div
                  key={i}
                  className="flex items-center gap-4 text-slate-300"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                >
                  <div className="p-4 rounded-full bg-slate-800/50 text-blue-400">
                    {info.icon}
                  </div>
                  <span>{info.text}</span>
                </motion.div>
              ))}
            </div>

            <div>
              <h3 className="text-xl font-semibold text-white mb-4">Follow Me</h3>
              <div className="flex gap-4">
                {socialLinks.map((link, i) => (
                  <motion.a
                    key={i}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-full bg-slate-800/50 text-blue-400 hover:bg-slate-700/50 transition-colors"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    {link.icon}
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
