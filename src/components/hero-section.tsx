import { motion } from "framer-motion";
import { SplineScene } from "@/components/ui/splite";
import { Spotlight } from "@/components/ui/spotlight";
import { CodeIcon, BrainCogIcon, RocketIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { NotFoundPage } from "@/components/ui/404-page-not-found";

export function HeroSection() {
  const [showNotFound, setShowNotFound] = useState(false);

  if (showNotFound) {
    return <NotFoundPage onGoHome={() => setShowNotFound(false)} />;
  }

  return (
    <div id="home" className="h-screen w-full flex flex-col items-center justify-center bg-black relative overflow-hidden border-4 border-zinc-800/50">
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="white"
      />
      
      <div className="w-full max-w-7xl mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row h-full items-center">
          {/* Left content */}
          <div className="flex-1 py-8 md:py-0 relative z-10 flex flex-col justify-center md:pr-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-xl md:text-2xl font-medium text-purple-400">Hello, I'm</h2>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <h1 className="text-6xl md:text-8xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-neutral-400 my-4">
                Shlok Singh
              </h1>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <p className="text-2xl md:text-3xl font-semibold text-neutral-300 mb-5">
                15-year-old Programmer
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <p className="text-neutral-400 max-w-md mb-8 text-xl leading-relaxed">
                Passionate about coding and building innovative solutions. Exploring the world of technology one line of code at a time.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex flex-wrap gap-4 mb-10"
            >
              <div className="flex items-center gap-2 bg-neutral-900/80 px-5 py-3 rounded-full border border-purple-500/30 shadow-lg shadow-purple-500/10">
                <CodeIcon size={20} className="text-blue-500" />
                <span className="text-base text-neutral-300">Web Dev</span>
              </div>
              <div className="flex items-center gap-2 bg-neutral-900/80 px-5 py-3 rounded-full border border-purple-500/30 shadow-lg shadow-purple-500/10">
                <BrainCogIcon size={20} className="text-purple-500" />
                <span className="text-base text-neutral-300">AI Enthusiast</span>
              </div>
              <div className="flex items-center gap-2 bg-neutral-900/80 px-5 py-3 rounded-full border border-purple-500/30 shadow-lg shadow-purple-500/10">
                <RocketIcon size={20} className="text-orange-500" />
                <span className="text-base text-neutral-300">Quick Learner</span>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <Button 
                className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-medium px-10 py-6 rounded-xl text-xl shadow-xl shadow-purple-500/20 transition-all hover:scale-105"
                onClick={() => setShowNotFound(true)}
              >
                Click Me
              </Button>
            </motion.div>
          </div>

          {/* Right content */}
          <motion.div 
            className="flex-1 relative min-h-[380px] md:min-h-[600px] scale-105 md:scale-115 transform md:translate-x-4 translate-y-8 md:translate-y-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            <div className="absolute inset-0 flex items-center justify-center">
              <SplineScene 
                scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
                className="w-full h-full"
              />
            </div>
          </motion.div>
        </div>
      </div>
      
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-purple-600/10 rounded-full filter blur-[120px]"></div>
        <div className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-blue-600/10 rounded-full filter blur-[120px]"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-indigo-600/5 rounded-full filter blur-[80px] animate-pulse-slow"></div>
      </div>
      
      {/* Border glow effect */}
      <div className="absolute inset-0 border-4 border-transparent pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 via-blue-500/20 to-purple-500/20 opacity-0 hover:opacity-100 transition-opacity duration-1000 rounded-sm"></div>
      </div>
    </div>
  );
}