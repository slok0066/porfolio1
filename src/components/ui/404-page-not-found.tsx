"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

interface NotFoundPageProps {
  onGoHome?: () => void;
}

export function NotFoundPage({ onGoHome }: NotFoundPageProps = {}) {
  return (
    <motion.section 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="bg-white font-serif min-h-screen flex items-center justify-center"
    >
      <div className="container mx-auto">
        <div className="flex justify-center">
          <motion.div 
            initial={{ y: 20 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="w-full sm:w-10/12 md:w-8/12 text-center"
          >
            <div
              className="bg-[url(https://cdn.dribbble.com/users/285475/screenshots/2083086/dribbble_1.gif)] h-[250px] sm:h-[350px] md:h-[400px] bg-center bg-no-repeat bg-contain"
              aria-hidden="true"
            >
              <motion.h1 
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                transition={{ 
                  duration: 0.5, 
                  delay: 0.3,
                  type: "spring",
                  stiffness: 200
                }}
                className="text-center text-black text-6xl sm:text-7xl md:text-8xl pt-6 sm:pt-8"
              >
                404
              </motion.h1>
            </div>

            <motion.div 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="mt-[-50px]"
            >
              <h3 className="text-2xl text-black sm:text-3xl font-bold mb-4">
                Look like you're lost
              </h3>
              <p className="mb-6 text-black sm:mb-5">
                The page you are looking for is not available!
              </p>

              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  variant="default"
                  onClick={onGoHome}
                  className="my-5 bg-green-600 hover:bg-green-700 px-8 py-6 text-lg"
                >
                  Go to Home
                </Button>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>
      
      {/* Background elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-green-100 rounded-full filter blur-[120px] opacity-30"></div>
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-blue-100 rounded-full filter blur-[120px] opacity-30"></div>
      </div>
    </motion.section>
  );
} 