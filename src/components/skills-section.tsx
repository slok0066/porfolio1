import { PinContainer } from "@/components/ui/3d-pin";
import { CodeIcon, BrainCogIcon, RocketIcon, ServerIcon, SmartphoneIcon, GamepadIcon, BotIcon as RobotIcon, DatabaseIcon, GlobeIcon, PencilRulerIcon, BinaryIcon, NetworkIcon, CloudIcon, ShieldIcon, MonitorIcon, CpuIcon } from "lucide-react";

const skillDomains = [
  {
    title: "Frontend Development",
    icon: GlobeIcon,
    color: "text-blue-400",
    bgGradient: "from-blue-600/20 to-blue-800/20",
    skills: [
      { name: "React.js", level: 95 },
      { name: "Next.js", level: 85 },
      { name: "TypeScript", level: 90 },
      { name: "Tailwind CSS", level: 95 }
    ],
    metrics: {
      value: "15+",
      label: "Projects Delivered"
    }
  },
  {
    title: "Backend Development",
    icon: ServerIcon,
    color: "text-emerald-400",
    bgGradient: "from-emerald-600/20 to-emerald-800/20",
    skills: [
      { name: "Node.js", level: 90 },
      { name: "Express.js", level: 88 },
      { name: "Python", level: 85 },
      { name: "PostgreSQL", level: 82 }
    ],
    metrics: {
      value: "99.9%",
      label: "Server Uptime"
    }
  },
  {
    title: "Mobile Development",
    icon: SmartphoneIcon,
    color: "text-orange-400",
    bgGradient: "from-orange-600/20 to-orange-800/20",
    skills: [
      { name: "Flutter", level: 92 },
      { name: "Kotlin", level: 85 },
      { name: "React Native", level: 80 },
      { name: "iOS/Android", level: 85 }
    ],
    metrics: {
      value: "8+",
      label: "Apps Published"
    }
  },
  {
    title: "AI & Machine Learning",
    icon: BrainCogIcon,
    color: "text-purple-400",
    bgGradient: "from-purple-600/20 to-purple-800/20",
    skills: [
      { name: "TensorFlow", level: 85 },
      { name: "PyTorch", level: 80 },
      { name: "Computer Vision", level: 78 },
      { name: "NLP", level: 75 }
    ],
    metrics: {
      value: "92%",
      label: "Model Accuracy"
    }
  },
  {
    title: "Cloud & DevOps",
    icon: CloudIcon,
    color: "text-cyan-400",
    bgGradient: "from-cyan-600/20 to-cyan-800/20",
    skills: [
      { name: "AWS", level: 85 },
      { name: "Docker", level: 88 },
      { name: "Kubernetes", level: 75 },
      { name: "CI/CD", level: 85 }
    ],
    metrics: {
      value: "50+",
      label: "Deployments"
    }
  },
  {
    title: "Game Development",
    icon: GamepadIcon,
    color: "text-red-400",
    bgGradient: "from-red-600/20 to-red-800/20",
    skills: [
      { name: "Unity", level: 82 },
      { name: "C#", level: 85 },
      { name: "Game Design", level: 80 },
      { name: "3D Modeling", level: 75 }
    ],
    metrics: {
      value: "3+",
      label: "Games Created"
    }
  },
  {
    title: "Cybersecurity",
    icon: ShieldIcon,
    color: "text-yellow-400",
    bgGradient: "from-yellow-600/20 to-yellow-800/20",
    skills: [
      { name: "Network Security", level: 80 },
      { name: "Penetration Testing", level: 75 },
      { name: "Cryptography", level: 78 },
      { name: "Security Auditing", level: 82 }
    ],
    metrics: {
      value: "100%",
      label: "Security Score"
    }
  },
  {
    title: "IoT & Robotics",
    icon: CpuIcon,
    color: "text-pink-400",
    bgGradient: "from-pink-600/20 to-pink-800/20",
    skills: [
      { name: "Arduino", level: 88 },
      { name: "Raspberry Pi", level: 85 },
      { name: "Sensors", level: 82 },
      { name: "Robotics", level: 78 }
    ],
    metrics: {
      value: "10+",
      label: "IoT Projects"
    }
  },
  {
    title: "System Architecture",
    icon: MonitorIcon,
    color: "text-indigo-400",
    bgGradient: "from-indigo-600/20 to-indigo-800/20",
    skills: [
      { name: "System Design", level: 88 },
      { name: "Microservices", level: 85 },
      { name: "API Design", level: 90 },
      { name: "Scalability", level: 85 }
    ],
    metrics: {
      value: "15+",
      label: "Architectures"
    }
  }
];

export function SkillsSection() {
  return (
    <div className="min-h-screen py-20 bg-black">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-400">
          Skills & Expertise
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10 md:gap-12">
          {skillDomains.map((domain) => {
            const Icon = domain.icon;
            return (
              <PinContainer key={domain.title} title={domain.title} containerClassName="min-h-[300px]">
                <div className={`flex flex-col p-6 tracking-tight bg-gradient-to-b ${domain.bgGradient} backdrop-blur-sm border border-slate-700/50 rounded-2xl relative overflow-hidden w-[18rem] h-[18rem] text-white`}>
                  {/* Header */}
                  <div className="flex items-center gap-3 mb-4">
                    <Icon className={`w-7 h-7 ${domain.color}`} />
                    <div className="text-base font-semibold text-white">{domain.title}</div>
                  </div>

                  {/* Skills List with Progress Bars */}
                  <div className="flex-1 space-y-3">
                    {domain.skills.map((skill) => (
                      <div key={skill.name} className="space-y-1">
                        <div className="flex items-center justify-between">
                          <span className="text-sm text-white">{skill.name}</span>
                          <span className={`text-xs ${domain.color}`}>{skill.level}%</span>
                        </div>
                        <div className="h-1.5 bg-black/30 rounded-full overflow-hidden">
                          <div 
                            className={`h-full ${domain.color} bg-current rounded-full transition-all duration-500`}
                            style={{ width: `${skill.level}%` }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Metrics */}
                  <div className="mt-4 pt-4 border-t border-white/10">
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-white/80">{domain.metrics.label}</span>
                      <span className={`text-lg font-bold ${domain.color}`}>{domain.metrics.value}</span>
                    </div>
                  </div>

                  {/* Background Decoration */}
                  <div className="absolute -right-12 -bottom-12 w-48 h-48 bg-gradient-to-r from-transparent to-current opacity-10 rounded-full blur-xl" />
                </div>
              </PinContainer>
            );
          })}
        </div>
      </div>
    </div>
  );
}