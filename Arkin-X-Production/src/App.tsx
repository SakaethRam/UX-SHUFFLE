import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import LightRays from "@/components/LightRays";
import React from "react";

const queryClient = new QueryClient();

const App = () => {
  return (
    <>
      {/* GLOBAL BACKGROUND — OUTSIDE PROVIDERS */}
      <div className="pointer-events-none fixed inset-0 -z-50">
        {/* base color so rays are visible */}
        <div className="absolute inset-0 bg-black" />
        <LightRays
          raysOrigin="top-center"
          raysColor="#ffffff"
          raysSpeed={0.8}
          lightSpread={1.2}
          rayLength={1.5}
          followMouse
          mouseInfluence={0.05}
          noiseAmount={0.02}
          distortion={0.03}
          fadeDistance={1.2}
          saturation={0.7}
          className="absolute inset-0 opacity-55"
        />
      </div>

      {/* APP CONTENT */}
      <QueryClientProvider client={queryClient}>
        <TooltipProvider>
          {/* Don't set an opaque bg here, keep it transparent so rays show */}
          <div className="relative min-h-screen text-white">
            <Toaster />
            <Sonner />
            <BrowserRouter>
              <Routes>
                <Route path="/" element={<Index />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </BrowserRouter>
          </div>
        </TooltipProvider>
      </QueryClientProvider>
    </>
  );
};

export default App;
