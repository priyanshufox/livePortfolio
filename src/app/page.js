'use client'
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Nav from "@/components/Nav";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import { motion, useScroll } from "framer-motion";
// import { Toaster } from "@/components/ui/toaster"





export default function Home() {

  const { scrollYProgress } = useScroll();
  
  return (
    <>
     
   
      <div className="w-full h-24 bg-blue-500"></div>
      
      <motion.div className="progress-bar" style={{ scaleX: scrollYProgress }}/>  
       <Hero/>
       <About/>
       <Skills/>
       <Projects/>
      <Contact/>
      <Footer/> 
    </>
  );
}
