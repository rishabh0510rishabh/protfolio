import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import AISection from "@/components/AISection";
import TechStack from "@/components/TechStack";
import ProjectsSection from "@/components/ProjectsSection";
import HackathonsSection from "@/components/HackathonsSection";
import GithubSection from "@/components/GithubSection";
import CertificationsSection from "@/components/CertificationsSection";
import WorkflowSection from "@/components/WorkflowSection";
import TerminalSection from "@/components/TerminalSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import FloatingParticles from "@/components/FloatingParticles";
import ScrollReveal from "@/components/ScrollReveal";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-[#0B0F19] text-slate-100 overflow-x-hidden">
      {/* Particle canvas background */}
      <FloatingParticles />

      {/* Global radial grid background */}
      <div className="fixed inset-0 grid-bg pointer-events-none z-0" />

      {/* Ambient gradient orbs */}
      <div className="fixed top-0 right-0 w-[600px] h-[600px] bg-[#4F9CF9]/5 blur-[160px] rounded-full pointer-events-none z-0" />
      <div className="fixed bottom-0 left-0 w-[450px] h-[450px] bg-[#00FFC6]/4 blur-[120px] rounded-full pointer-events-none z-0" />
      <div className="fixed top-[50%] left-[50%] w-[400px] h-[400px] bg-[#A78BFA]/3 blur-[140px] rounded-full pointer-events-none z-0 -translate-x-1/2 -translate-y-1/2" />

      <div className="relative z-10">
        <Navbar />
        <main>
          <HeroSection />

          <ScrollReveal variant="fadeUp">
            <AboutSection />
          </ScrollReveal>

          <ScrollReveal variant="scaleUp" delay={0.1}>
            <AISection />
          </ScrollReveal>

          <ScrollReveal variant="fadeUp" delay={0.05}>
            <TechStack />
          </ScrollReveal>

          <ScrollReveal variant="blur">
            <ProjectsSection />
          </ScrollReveal>

          <ScrollReveal variant="fadeUp">
            <HackathonsSection />
          </ScrollReveal>

          <ScrollReveal variant="fadeRight" delay={0.1}>
            <GithubSection />
          </ScrollReveal>

          <ScrollReveal variant="scaleUp">
            <CertificationsSection />
          </ScrollReveal>

          <ScrollReveal variant="fadeUp" delay={0.05}>
            <WorkflowSection />
          </ScrollReveal>

          <ScrollReveal variant="blur">
            <TerminalSection />
          </ScrollReveal>

          <ScrollReveal variant="fadeUp" delay={0.1}>
            <ContactSection />
          </ScrollReveal>
        </main>
        <Footer />
      </div>
    </div>
  );
}
