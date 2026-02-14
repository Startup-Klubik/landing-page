import { lazy, Suspense } from "react";
import Navbar from "@/components/landing/Navbar";
import Hero from "@/components/landing/Hero";

const ProblemSection = lazy(() => import("@/components/landing/ProblemSection"));
const SolutionSection = lazy(() => import("@/components/landing/SolutionSection"));
const ValueSection = lazy(() => import("@/components/landing/ValueSection"));
const CTASection = lazy(() => import("@/components/landing/CTASection"));
const Footer = lazy(() => import("@/components/landing/Footer"));

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <Hero />
        <Suspense fallback={<div className="h-96" />}>
          <ProblemSection />
        </Suspense>
        <Suspense fallback={<div className="h-96" />}>
          <SolutionSection />
        </Suspense>
        <Suspense fallback={<div className="h-96" />}>
          <ValueSection />
        </Suspense>
        <Suspense fallback={<div className="h-96" />}>
          <CTASection />
        </Suspense>
      </main>
      <Suspense fallback={<div className="h-96" />}>
        <Footer />
      </Suspense>
    </div>
  );
};

export default Index;