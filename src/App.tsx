import { useEffect, useRef, useState } from "react";
import { Home, User, Code, Mail } from "lucide-react";
import "./App.css";
import { HeroSection } from "./components/hero-section";
import { SkillsSection } from "./components/skills-section";
import { ContactSection } from "./components/contact-section";
import { AboutSection } from "./components/about-section";
import { NavBar } from "./components/ui/tubelight-navbar";
import { Footer } from "./components/footer";

function App() {
  const [activeSection, setActiveSection] = useState("home");
  const homeRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);
  const skillsRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    document.title = `Portfolio | ${activeSection.charAt(0).toUpperCase() + activeSection.slice(1)}`;

    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 2;

      if (homeRef.current && scrollPosition < homeRef.current.offsetTop + homeRef.current.offsetHeight) {
        setActiveSection("home");
      } else if (aboutRef.current && scrollPosition < aboutRef.current.offsetTop + aboutRef.current.offsetHeight) {
        setActiveSection("about");
      } else if (skillsRef.current && scrollPosition < skillsRef.current.offsetTop + skillsRef.current.offsetHeight) {
        setActiveSection("skills");
      } else if (contactRef.current) {
        setActiveSection("contact");
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToSection = (sectionId: string) => {
    let ref;
    switch (sectionId) {
      case "home":
        ref = homeRef;
        break;
      case "about":
        ref = aboutRef;
        break;
      case "skills":
        ref = skillsRef;
        break;
      case "contact":
        ref = contactRef;
        break;
      default:
        ref = homeRef;
    }

    if (ref.current) {
      window.scrollTo({
        top: ref.current.offsetTop,
        behavior: "smooth",
      });
      setActiveSection(sectionId);
    }
  };

  const navItems = [
    {
      name: "Home",
      url: "#home",
      icon: Home,
    },
    {
      name: "About",
      url: "#about",
      icon: User,
    },
    {
      name: "Skills",
      url: "#skills",
      icon: Code,
    },
    {
      name: "Contact",
      url: "#contact",
      icon: Mail,
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white">
      <NavBar 
        items={navItems}
        activeTab={activeSection}
        onNavigate={scrollToSection}
      />
      
      <div ref={homeRef} id="home">
        <HeroSection />
      </div>
      
      <div ref={aboutRef} id="about">
        <AboutSection />
      </div>
      
      <div ref={skillsRef} id="skills">
        <SkillsSection />
      </div>
      
      <div ref={contactRef} id="contact">
        <ContactSection />
      </div>
      
      <Footer />
    </div>
  );
}

export default App;