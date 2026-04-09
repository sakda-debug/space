/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { Rocket, Shield, Zap, Globe, Menu, X, ChevronRight, Star } from "lucide-react";
import { useState } from "react";

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
      },
    },
  };

  return (
    <div className="relative overflow-hidden">
      {/* Background Stars Decoration */}
      <div className="fixed inset-0 pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0.2, scale: 0.5 }}
            animate={{ 
              opacity: [0.2, 0.8, 0.2],
              scale: [0.5, 1, 0.5],
            }}
            transition={{
              duration: Math.random() * 3 + 2,
              repeat: Infinity,
              delay: Math.random() * 5,
            }}
            className="absolute bg-white rounded-full"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              width: `${Math.random() * 3}px`,
              height: `${Math.random() * 3}px`,
            }}
          />
        ))}
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 glass border-b-0 m-4 rounded-2xl">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-space-cyber rounded-xl flex items-center justify-center nebula-glow">
              <Rocket className="text-space-deep w-6 h-6" />
            </div>
            <span className="text-xl font-display font-bold tracking-tighter text-glow">SPACE EXPLORER</span>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {["Missions", "Fleet", "Technology", "About"].map((item) => (
              <a
                key={item}
                href="#"
                className="text-sm font-medium text-space-star/70 hover:text-space-cyber transition-colors"
              >
                {item}
              </a>
            ))}
            <button className="px-5 py-2 bg-space-nebula hover:bg-space-nebula/80 text-white rounded-full text-sm font-semibold transition-all hover:scale-105 active:scale-95 nebula-glow">
              Launch Now
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden p-2 text-space-star"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Nav */}
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            className="md:hidden border-t border-white/10 px-6 py-4 flex flex-col gap-4"
          >
            {["Missions", "Fleet", "Technology", "About"].map((item) => (
              <a key={item} href="#" className="text-lg font-medium text-space-star/80">
                {item}
              </a>
            ))}
            <button className="w-full py-3 bg-space-nebula text-white rounded-xl font-semibold">
              Launch Now
            </button>
          </motion.div>
        )}
      </nav>

      {/* Hero Section */}
      <main className="pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="flex flex-col items-center text-center gap-8"
          >
            <motion.div variants={itemVariants} className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-space-cyber/10 border border-space-cyber/20 text-space-cyber text-xs font-bold uppercase tracking-widest">
              <Star className="w-3 h-3 fill-current" />
              Next Generation Space Travel
            </motion.div>

            <motion.h1 
              variants={itemVariants}
              className="text-6xl md:text-8xl lg:text-9xl font-display font-bold leading-[0.9] tracking-tighter"
            >
              BEYOND THE <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-space-cyber via-space-nebula to-pink-500 text-glow">
                HORIZON
              </span>
            </motion.h1>

            <motion.p 
              variants={itemVariants}
              className="max-w-2xl text-lg md:text-xl text-space-star/60 leading-relaxed"
            >
              Experience the future of interstellar exploration. Our advanced propulsion 
              systems and luxury habitats make the stars more accessible than ever before.
            </motion.p>

            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 mt-4">
              <button className="px-8 py-4 bg-space-cyber text-space-deep font-bold rounded-2xl flex items-center gap-2 hover:scale-105 transition-transform group">
                Start Your Journey
                <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="px-8 py-4 glass text-white font-bold rounded-2xl hover:bg-white/10 transition-colors">
                View Fleet
              </button>
            </motion.div>
          </motion.div>

          {/* Feature Grid */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-32"
          >
            {[
              {
                icon: <Shield className="w-8 h-8 text-space-cyber" />,
                title: "Quantum Shielding",
                desc: "Advanced protective layers that withstand cosmic radiation and micro-meteoroid impacts."
              },
              {
                icon: <Zap className="w-8 h-8 text-yellow-400" />,
                title: "Fusion Drive",
                desc: "Propulsion technology that reaches 15% of light speed, cutting travel time by decades."
              },
              {
                icon: <Globe className="w-8 h-8 text-green-400" />,
                title: "Terra-Habitats",
                desc: "Self-sustaining ecosystems that provide Earth-like comfort in the vacuum of space."
              }
            ].map((feature, idx) => (
              <div 
                key={idx}
                className="glass p-8 rounded-3xl hover:border-space-cyber/40 transition-colors group"
              >
                <div className="mb-6 p-4 bg-white/5 rounded-2xl w-fit group-hover:scale-110 transition-transform">
                  {feature.icon}
                </div>
                <h3 className="text-2xl font-bold mb-3">{feature.title}</h3>
                <p className="text-space-star/50 leading-relaxed">
                  {feature.desc}
                </p>
              </div>
            ))}
          </motion.div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-white/10 py-12 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-2">
            <Rocket className="text-space-cyber w-5 h-5" />
            <span className="font-display font-bold tracking-tighter">SPACE EXPLORER</span>
          </div>
          <div className="flex gap-8 text-sm text-space-star/40">
            <a href="#" className="hover:text-space-star transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-space-star transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-space-star transition-colors">Contact</a>
          </div>
          <p className="text-sm text-space-star/20">
            © 2026 Space Explorer Inc. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}

