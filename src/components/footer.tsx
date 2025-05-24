import { CodeIcon } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-neutral-950 text-neutral-400 py-12 border-t border-neutral-900">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center">
          <div className="mb-4">
            <div className="flex items-center gap-2 mb-4">
              <CodeIcon className="h-5 w-5 text-purple-500" />
              <span className="text-xl font-bold text-white">Shlok<span className="text-purple-500">.</span></span>
            </div>
            <p className="max-w-md text-sm text-center">
              Young programmer passionate about creating innovative solutions through code.
              Always learning, always growing.
            </p>
          </div>
          
          <p className="text-xs text-neutral-500">
            © {new Date().getFullYear()} Shlok Singh. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}