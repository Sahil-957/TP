"use client";

import Link from "next/link";
import { GlowingButton } from "@/components/ui/glowing-button";
import { HeroMascot } from "@/components/hero-mascot"; // We can reuse Sparky or make a variant
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-background text-foreground p-6 relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/10 via-background to-background -z-10" />

            <div className="text-center space-y-8 max-w-2xl relative z-10">
                <div className="relative w-64 h-64 mx-auto mb-8 grayscale opacity-80">
                    {/* Ideally we'd rotate Sparky or show a different pose, but reusing for now with CSS transform */}
                    <div className="rotate-180 scale-75">
                        <HeroMascot />
                    </div>
                </div>

                <h1 className="text-6xl md:text-8xl font-bold font-heading text-primary drop-shadow-[0_0_20px_rgba(0,191,255,0.5)]">
                    404
                </h1>

                <h2 className="text-2xl md:text-3xl font-bold">
                    Houston, we have a problem.
                </h2>

                <p className="text-lg text-muted-foreground">
                    This page seems to have drifted out of orbit. Let's get you back to base before the oxygen runs out.
                </p>

                <Link href="/">
                    <GlowingButton>
                        <ArrowLeft className="w-5 h-5 mr-2" /> Return to Base
                    </GlowingButton>
                </Link>
            </div>
        </div>
    );
}
