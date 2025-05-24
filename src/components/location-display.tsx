import { MapPin, Globe as GlobeIcon, Briefcase, Plane } from 'lucide-react';
import { motion } from 'framer-motion';

export function LocationDisplay() {
  return (
    <motion.div 
      className="flex flex-col items-center bg-zinc-900/80 backdrop-blur-md border border-zinc-800 rounded-xl p-6 shadow-lg"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.3 }}
    >
      <div className="mb-6 text-center">
        <h2 className="text-2xl md:text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-400 mb-3">
          Based in
        </h2>
        <div className="flex items-center justify-center gap-2 mb-2">
          <MapPin className="w-6 h-6 text-purple-500" />
          <span className="text-xl md:text-2xl font-semibold text-white">Bihar, India</span>
        </div>
      </div>
      
      <div className="w-full space-y-4">
        <div className="flex items-center gap-3 text-white">
          <div className="bg-purple-500/20 p-2 rounded-full">
            <GlobeIcon className="w-5 h-5 text-purple-400" />
          </div>
          <div>
            <p className="font-medium">Remote Work</p>
            <p className="text-sm text-white/70">Available worldwide</p>
          </div>
        </div>
        
        <div className="flex items-center gap-3 text-white">
          <div className="bg-blue-500/20 p-2 rounded-full">
            <Plane className="w-5 h-5 text-blue-400" />
          </div>
          <div>
            <p className="font-medium">Relocation</p>
            <p className="text-sm text-white/70">Open for the right opportunity</p>
          </div>
        </div>
        
        <div className="flex items-center gap-3 text-white">
          <div className="bg-purple-500/20 p-2 rounded-full">
            <Briefcase className="w-5 h-5 text-purple-400" />
          </div>
          <div>
            <p className="font-medium">Availability</p>
            <p className="text-sm text-white/70">Ready for new projects</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
} 