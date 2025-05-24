import { motion } from 'framer-motion';
import { BookOpen, Code, Award, Mail, Briefcase, GraduationCap, MapPin, Languages, Calendar, Github, Globe, Layers } from 'lucide-react';
import { Squares } from '@/components/ui/squares-background';

export function AboutSection() {
  const experienceItems = [
    {
      icon: <GraduationCap className="w-6 h-6 text-purple-400" />,
      title: "High School Student",
      period: "Present",
      description: "Passionate about learning and exploring new technologies"
    },
    {
      icon: <Code className="w-6 h-6 text-blue-400" />,
      title: "Self-taught Programmer",
      period: "2 Years Experience",
      description: "Learning web development and programming fundamentals"
    },
    {
      icon: <Award className="w-6 h-6 text-purple-400" />,
      title: "School Tech Club",
      period: "Member",
      description: "Active participant in school's technology initiatives"
    }
  ];

  return (
    <div id="about" className="min-h-screen bg-[#060606] flex items-center justify-center relative overflow-hidden py-20">
      {/* Squares Background */}
      <div className="absolute inset-0 z-0">
        <Squares 
          direction="diagonal"
          speed={0.3}
          squareSize={50}
          borderColor="#333"
          hoverFillColor="rgba(139, 92, 246, 0.15)"
        />
      </div>
      
      <div className="container mx-auto px-4 z-10 max-w-7xl relative">
        {/* Section Header with enhanced animation */}
      <motion.div
          initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <motion.h1 
            className="text-5xl sm:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-blue-400 to-purple-400"
            animate={{ 
              backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'] 
            }}
            transition={{ 
              duration: 15, 
              repeat: Infinity,
              ease: "easeInOut" 
            }}
            style={{ backgroundSize: '200% 200%' }}
          >
            About Me
          </motion.h1>
          <motion.div 
            className="h-1.5 w-24 bg-gradient-to-r from-purple-500 via-blue-500 to-purple-500 mx-auto rounded-full my-6"
            animate={{ width: ['6rem', '10rem', '6rem'] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          ></motion.div>
        </motion.div>
        
        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Left Column - Profile Card */}
          <motion.div
            className="lg:col-span-5"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <motion.div
              className="bg-zinc-900/80 backdrop-blur-xl border border-zinc-800/50 rounded-2xl overflow-hidden h-full"
              whileHover={{ boxShadow: "0 0 30px rgba(139, 92, 246, 0.2)" }}
              transition={{ duration: 0.3 }}
            >
              {/* Profile Header with parallax effect */}
              <motion.div 
                className="h-40 bg-gradient-to-r from-purple-500/30 to-blue-500/30 relative overflow-hidden"
                whileHover={{ backgroundPosition: ['0% 50%', '100% 50%'] }}
                transition={{ duration: 3 }}
                style={{ backgroundSize: '200% 200%' }}
              >
                <motion.div 
                  className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1534972195531-d756b9bfa9f2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')] bg-cover bg-center opacity-10"
                  animate={{ scale: [1, 1.05, 1] }}
                  transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
                />
                
                <div className="absolute -bottom-20 left-1/2 transform -translate-x-1/2">
                  <motion.div 
                    className="w-40 h-40 rounded-full border-4 border-zinc-900 overflow-hidden bg-gradient-to-br from-purple-500 to-blue-500 flex items-center justify-center"
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 300, damping: 10 }}
                  >
                    <span className="text-5xl font-bold text-white">S</span>
                  </motion.div>
                </div>
                
                {/* Social Icons with hover effects */}
                <div className="absolute top-4 right-4 flex space-x-2">
                  <motion.a 
                    href="#" 
                    className="w-8 h-8 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center hover:bg-white/20 transition-all"
                    whileHover={{ scale: 1.2, rotate: 5 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <Github className="w-4 h-4 text-white" />
                  </motion.a>
                  <motion.a 
                    href="#" 
                    className="w-8 h-8 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center hover:bg-white/20 transition-all"
                    whileHover={{ scale: 1.2, rotate: -5 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <Globe className="w-4 h-4 text-white" />
                  </motion.a>
                </div>
              </motion.div>
              
              {/* Profile Content */}
              <div className="pt-24 pb-8 px-8">
                <div className="text-center mb-8">
                  <motion.h2 
                    className="text-3xl font-bold text-white mb-2"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3, duration: 0.5 }}
                  >
                    Shlok Singh
                  </motion.h2>
                  <motion.p 
                    className="text-purple-400/80 text-lg"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5, duration: 0.5 }}
                  >
                    Student & Developer
                  </motion.p>
                </div>
                
                {/* Personal Info with staggered animation */}
                <div className="space-y-6">
                  <motion.div 
                    className="bg-zinc-800/70 backdrop-blur-sm rounded-xl p-6"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6, duration: 0.5 }}
                    whileHover={{ backgroundColor: "rgba(39, 39, 42, 0.8)" }}
                  >
                    <h3 className="text-sm font-medium text-white/60 uppercase tracking-wider mb-5 text-center">Personal Information</h3>
                    
                    <div className="space-y-5">
                      {[
                        { icon: <Calendar className="w-6 h-6 text-purple-400" />, label: "Age", value: "15 Years" },
                        { icon: <MapPin className="w-6 h-6 text-blue-400" />, label: "Location", value: "Bihar, India" },
                        { icon: <Languages className="w-6 h-6 text-purple-400" />, label: "Languages", value: "English, Hindi" },
                        { icon: <Mail className="w-6 h-6 text-blue-400" />, label: "Email", value: "thinkbuild8@gmail.com", isLink: true }
                      ].map((item, index) => (
                        <motion.div 
                          key={index}
                          className="flex items-center gap-4 group"
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.7 + index * 0.1, duration: 0.5 }}
                          whileHover={{ x: 5 }}
                        >
                          <motion.div 
                            className="w-12 h-12 rounded-lg bg-gradient-to-br from-purple-500/20 to-blue-500/20 flex items-center justify-center"
                            whileHover={{ scale: 1.1 }}
                            transition={{ type: "spring", stiffness: 400, damping: 10 }}
                          >
                            {item.icon}
                          </motion.div>
                          <div>
                            <p className="text-sm text-white/60">{item.label}</p>
                            {item.isLink ? (
                              <a href={`mailto:${item.value}`} className="text-white font-medium text-lg hover:text-purple-400 transition-colors">
                                {item.value}
                              </a>
                            ) : (
                              <p className="text-white font-medium text-lg">{item.value}</p>
                            )}
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                </div>
              </div>
            </motion.div>
            </motion.div>
            
          {/* Right Column - Bio & Experience */}
          <motion.div 
            className="lg:col-span-7 space-y-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {/* Bio Section with enhanced animations */}
            <motion.div
              className="bg-zinc-900/80 backdrop-blur-xl border border-zinc-800/50 rounded-2xl p-8"
              whileHover={{ boxShadow: "0 0 30px rgba(139, 92, 246, 0.2)" }}
              transition={{ duration: 0.3 }}
            >
              <h2 className="text-2xl font-bold text-white mb-6 inline-block relative">
                <motion.span 
                  className="flex items-center gap-2"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <Briefcase className="w-5 h-5 text-purple-400" />
                  My Journey
                </motion.span>
                <motion.span 
                  className="absolute -bottom-2 left-0 w-1/2 h-1 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full"
                  initial={{ width: 0 }}
                  animate={{ width: "50%" }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                ></motion.span>
              </h2>
              
              <div className="space-y-4 text-white/80">
                {[
                  "I'm a 15-year-old developer with a passion for creating digital experiences. My journey in programming began two years ago when I discovered my love for building things with code.",
                  "Currently a high school student, I dedicate my free time to expanding my knowledge in web development and exploring the exciting world of technology.",
                  "I believe in learning by doing, which is why I'm constantly working on personal projects that challenge me to grow my skills."
                ].map((paragraph, index) => (
                  <motion.p 
                    key={index}
                    className="leading-relaxed text-lg"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 + index * 0.2 }}
                  >
                    {paragraph}
                  </motion.p>
                ))}
              </div>
            </motion.div>
            
            {/* Experience Section with improved animations */}
            <motion.div
              className="bg-zinc-900/80 backdrop-blur-xl border border-zinc-800/50 rounded-2xl p-8"
              whileHover={{ boxShadow: "0 0 30px rgba(139, 92, 246, 0.2)" }}
              transition={{ duration: 0.3 }}
            >
              <h2 className="text-2xl font-bold text-white mb-8 inline-block relative">
                <motion.span 
                  className="flex items-center gap-2"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <Award className="w-5 h-5 text-purple-400" />
                  Experience
                </motion.span>
                <motion.span 
                  className="absolute -bottom-2 left-0 w-1/2 h-1 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full"
                  initial={{ width: 0 }}
                  animate={{ width: "50%" }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                ></motion.span>
              </h2>
              
              <div className="space-y-8">
                {experienceItems.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 + index * 0.2, duration: 0.5 }}
                    className="flex gap-5 group"
                    whileHover={{ x: 5 }}
                  >
                    <motion.div 
                      className="mt-1 bg-gradient-to-br from-purple-500/20 to-blue-500/20 rounded-lg p-4 h-fit border border-zinc-800 group-hover:border-purple-500/50 transition-colors"
                      whileHover={{ scale: 1.1 }}
                      transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    >
                      {item.icon}
                    </motion.div>
                    <div>
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="text-xl font-semibold text-white">{item.title}</h3>
                        <span className="text-xs px-3 py-1 bg-purple-500/20 rounded-full text-purple-300">{item.period}</span>
                      </div>
                      <p className="text-white/70 leading-relaxed text-lg">{item.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
            </motion.div>
          </div>
          </div>
        </div>
  );
}