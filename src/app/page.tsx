import Navigation from '@/components/ui/Navigation'
import Hero from '@/components/sections/Hero'
import FeaturedIn from '@/components/sections/FeaturedIn'
import Testimonials from '@/components/sections/Testimonials'
import Experience from '@/components/sections/Experience'
import Skills from '@/components/sections/Skills'
import HowIWork from '@/components/sections/HowIWork'
import ProjectsWrapper from '@/components/sections/ProjectsWrapper'
import Footer from '@/components/sections/Footer'

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      {/* <FeaturedIn /> */}
      {/* <Testimonials /> */}
      <Experience />
      <Skills />
      <HowIWork />
      <ProjectsWrapper />
      <Footer />
    </div>
  );
}
