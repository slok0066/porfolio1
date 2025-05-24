import { useState, useRef } from 'react';
import { motion, useScroll, useTransform, MotionStyle } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { SendIcon } from 'lucide-react';
import { Globe } from '@/components/ui/globe';
import { NewsletterSignup } from '@/components/ui/newsletter-signup';

export function ContactSection() {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const globeContainerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });
  
  const pathsY = useTransform(scrollYProgress, [0, 0.5], [0, -150]);
  const headerOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0.3]);
  const headerScale = useTransform(scrollYProgress, [0, 0.2], [1, 0.9]);
  const globeScale = useTransform(scrollYProgress, [0.1, 0.3], [0.8, 1]);
  const globeOpacity = useTransform(scrollYProgress, [0.1, 0.3], [0, 1]);
  const cardScale = useTransform(scrollYProgress, [0.2, 0.4], [0.9, 1]);
  const cardOpacity = useTransform(scrollYProgress, [0.2, 0.4], [0, 1]);
  const newsletterScale = useTransform(scrollYProgress, [0.3, 0.5], [0.9, 1]);
  const newsletterOpacity = useTransform(scrollYProgress, [0.3, 0.5], [0, 1]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormState({
        name: '',
        email: '',
        subject: '',
        message: '',
      });
      
      // Reset success message after 5 seconds
      setTimeout(() => {
        setIsSubmitted(false);
      }, 5000);
    }, 1500);
  };
  
  const handleNewsletterSubmit = async (email: string): Promise<void> => {
    // Simulate API call
    return new Promise((resolve) => {
      setTimeout(() => {
        console.log(`Newsletter subscription for: ${email}`);
        resolve();
      }, 1500);
    });
  };

  const ContactCard = () => (
    <motion.div 
      className="bg-zinc-900/90 backdrop-blur-xl border border-zinc-800 rounded-2xl overflow-hidden shadow-[0_10px_40px_-15px_rgba(124,58,237,0.2)] max-w-2xl w-full mx-auto"
      style={{
        scale: cardScale,
        opacity: cardOpacity
      } as MotionStyle}
    >
      <div className="p-8">
        <h2 className="text-2xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-400">
          Send a Message
        </h2>
        
        {isSubmitted ? (
          <div className="bg-emerald-500/20 text-emerald-300 p-6 rounded-lg border border-emerald-500/30 flex items-center justify-center">
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-emerald-500/20 flex items-center justify-center">
                <svg className="w-8 h-8 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <p className="text-lg font-medium">Thank you for your message!</p>
              <p className="text-sm opacity-80 mt-1">I'll get back to you as soon as possible.</p>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label htmlFor="name" className="text-sm text-white/70 mb-1.5 block">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formState.name}
                onChange={handleChange}
                placeholder="Your name"
                required
                className="w-full bg-zinc-800/50 border border-zinc-700 rounded-lg px-4 py-3 text-white placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-transparent transition-all duration-200"
              />
            </div>
            
            <div>
              <label htmlFor="email" className="text-sm text-white/70 mb-1.5 block">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formState.email}
                onChange={handleChange}
                placeholder="your.email@example.com"
                required
                className="w-full bg-zinc-800/50 border border-zinc-700 rounded-lg px-4 py-3 text-white placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-transparent transition-all duration-200"
              />
            </div>
            
            <div>
              <label htmlFor="subject" className="text-sm text-white/70 mb-1.5 block">Subject</label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formState.subject}
                onChange={handleChange}
                placeholder="What's this about?"
                required
                className="w-full bg-zinc-800/50 border border-zinc-700 rounded-lg px-4 py-3 text-white placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-transparent transition-all duration-200"
              />
            </div>
            
            <div>
              <label htmlFor="message" className="text-sm text-white/70 mb-1.5 block">Message</label>
              <textarea
                id="message"
                name="message"
                value={formState.message}
                onChange={handleChange}
                placeholder="Your message..."
                required
                rows={4}
                className="w-full bg-zinc-800/50 border border-zinc-700 rounded-lg px-4 py-3 text-white placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-transparent transition-all duration-200 resize-none"
              />
            </div>
            
            <Button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-medium py-3 rounded-lg flex items-center justify-center gap-2 mt-2 transition-all duration-300 transform hover:translate-y-[-2px] hover:shadow-lg"
            >
              {isSubmitting ? (
                <>
                  <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  <span>Sending...</span>
                </>
              ) : (
                <>
                  <SendIcon className="w-5 h-5" />
                  <span>Send Message</span>
                </>
              )}
            </Button>
          </form>
        )}
      </div>
    </motion.div>
  );

  return (
    <div className="relative min-h-screen bg-black overflow-hidden" ref={sectionRef}>
      {/* Background Paths Animation */}
      <motion.div 
        className="absolute inset-0 -top-[20%]"
        style={{ y: pathsY } as MotionStyle}
      >
        <svg className="w-full h-[120%] text-white" viewBox="0 0 696 316" fill="none">
          {Array.from({ length: 36 }, (_, i) => ({
            id: i,
            d: `M-${380 - i * 5} -${189 + i * 6}C-${380 - i * 5} -${189 + i * 6} -${312 - i * 5} ${216 - i * 6} ${152 - i * 5} ${343 - i * 6}C${616 - i * 5} ${470 - i * 6} ${684 - i * 5} ${875 - i * 6} ${684 - i * 5} ${875 - i * 6}`,
            width: 0.5 + i * 0.03,
          })).map((path) => (
            <motion.path
              key={path.id}
              d={path.d}
              stroke="currentColor"
              strokeWidth={path.width}
              strokeOpacity={0.1 + path.id * 0.03}
              initial={{ pathLength: 0.3, opacity: 0.6 }}
              animate={{
                pathLength: 1,
                opacity: [0.3, 0.6, 0.3],
                pathOffset: [0, 1, 0],
              }}
              transition={{
                duration: 20 + Math.random() * 10,
                repeat: Number.POSITIVE_INFINITY,
                ease: "linear",
              }}
            />
          ))}
        </svg>
      </motion.div>
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
          style={{ 
            opacity: headerOpacity,
            scale: headerScale
          } as MotionStyle}
        >
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-400">
            Get In Touch
          </h1>
          <p className="text-lg text-white/70 max-w-2xl mx-auto">
            Have a project in mind or just want to say hello? Send me a message and I'll get back to you as soon as possible.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center">
          {/* Left side - Globe */}
          <motion.div 
            className="lg:col-span-5 relative h-[550px] md:h-[600px]"
            ref={globeContainerRef}
            style={{
              opacity: globeOpacity,
              scale: globeScale
            } as MotionStyle}
          >
            <div className="relative w-full h-full">
              <div className="absolute inset-0 flex items-center justify-center">
                <Globe />
              </div>
            </div>
          </motion.div>
          
          {/* Right side - Contact Card */}
          <div className="lg:col-span-7 flex justify-center w-full">
            <ContactCard />
          </div>
        </div>
        
        {/* Newsletter Section */}
        <motion.div 
          className="mt-20"
          style={{
            scale: newsletterScale,
            opacity: newsletterOpacity
          } as MotionStyle}
        >
          <div className="max-w-2xl mx-auto">
            <NewsletterSignup onSubmit={handleNewsletterSubmit} />
          </div>
        </motion.div>
      </div>
    </div>
  );
} 