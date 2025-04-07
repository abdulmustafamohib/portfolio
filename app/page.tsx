import Grid from "@/components/Grid";
import Hero from "@/components/Hero";
import RecentProjects from "@/components/RecentProjects";
import Experience from "@/components/Experience";
import Approach from "@/components/Approach";
import SpotlightLayout from "@/components/ui/SpotlightLayout";
import { FloatingNav } from "@/components/ui/FloatingNav";
import Footer from "@/components/Footer";
import { navItems } from "@/data";
import Image from "next/image";
import { FaHome } from "react-icons/fa";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between bg-black h-full">
      <div className="container mx-auto px-12">
        <FloatingNav navItems={navItems} />
        <Hero />
        
        <SpotlightLayout>
          <Grid />
        </SpotlightLayout>

        <SpotlightLayout>
          <RecentProjects />
        </SpotlightLayout>

        <SpotlightLayout>
          <Experience />
        </SpotlightLayout>

        <SpotlightLayout>
          <Approach />
        </SpotlightLayout>

        <Footer />
        </div>
    </main>
  );
}
