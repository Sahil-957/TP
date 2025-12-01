"use client";

import { motion } from "framer-motion";
import { GlowingButton } from "@/components/ui/glowing-button";
import { Mic, Settings, Globe } from "lucide-react";
import Link from "next/link";

export function HeroSection() {
    return (
        <section className="relative min-h-[90vh] flex items-center pt-24 pb-12 px-6 md:px-12 lg:px-24 overflow-hidden">
            <div className="container mx-auto grid lg:grid-cols-2 gap-12 items-center">

                {/* Left Content */}
                <div className="space-y-8 z-10">
                    <h1 className="text-4xl md:text-6xl font-bold font-heading leading-[1.2] text-white">
                        Turn Your Website Into a <br />
                        <span className="text-primary drop-shadow-[0_0_20px_rgba(0,191,255,0.4)]">24/7 AI Sales & Support Assistant</span>
                    </h1>

                    <p className="text-lg text-muted-foreground max-w-xl leading-relaxed">
                        We build conversion-focused websites powered by AI voice agents and automations, so your business can greet, answer, and book customers on autopilot — day and night.
                    </p>

                    <div className="space-y-3">
                        <div className="flex items-center gap-3 text-muted-foreground">
                            <Mic className="w-5 h-5 text-primary" />
                            <span className="font-medium">AI Voice Agent on Your Website</span>
                        </div>
                        <div className="flex items-center gap-3 text-muted-foreground">
                            <Settings className="w-5 h-5 text-primary" />
                            <span className="font-medium">Workflow Automations with n8n</span>
                        </div>
                        <div className="flex items-center gap-3 text-muted-foreground">
                            <Globe className="w-5 h-5 text-primary" />
                            <span className="font-medium">Built for Modern Service Businesses</span>
                        </div>
                    </div>

                    <div className="flex flex-wrap items-center gap-4 pt-4">
                        <Link href="#contact">
                            <GlowingButton className="px-8 py-6 text-base font-semibold">
                                Book a Free 15-Min Demo
                            </GlowingButton>
                        </Link>
                        <Link href="#pricing">
                            <button className="px-8 py-3.5 text-base font-semibold text-primary border-2 border-primary rounded-full hover:bg-primary/10 hover:scale-105 transition-all">
                                See Pricing
                            </button>
                        </Link>
                    </div>
                </div>

                {/* Right Content (Waveform Visual) */}
                <div className="relative flex justify-center items-center h-[400px] md:h-[500px]">
                    {/* Background Glow */}
                    <div className="absolute inset-0 bg-primary/10 blur-[80px] rounded-full" />

                    {/* Animated Waveform / Circles */}
                    <div className="relative w-[300px] h-[300px] md:w-[400px] md:h-[400px] flex items-center justify-center">
                        {[1, 2, 3].map((i) => (
                            <motion.div
                                key={i}
                                className="absolute border border-primary/30 rounded-full"
                                style={{ width: `${i * 33}%`, height: `${i * 33}%` }}
                                animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.6, 0.3] }}
                                transition={{ duration: 3, repeat: Infinity, delay: i * 0.5, ease: "easeInOut" }}
                            />
                        ))}

                        {/* Center Core */}
                        <motion.div
                            className="w-24 h-24 bg-primary/20 rounded-full flex items-center justify-center backdrop-blur-md border border-primary/50 shadow-[0_0_30px_rgba(0,191,255,0.4)]"
                            animate={{ scale: [1, 1.05, 1] }}
                            transition={{ duration: 2, repeat: Infinity }}
                        >
                            <Mic className="w-10 h-10 text-primary" />
                        </motion.div>

                        {/* Floating Cards */}
                        <motion.div
                            className="absolute -top-4 -right-4 p-4 rounded-xl bg-white/5 border border-white/10 backdrop-blur-md shadow-xl"
                            animate={{ y: [-10, 10, -10] }}
                            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                        >
                            <div className="flex items-center gap-3">
                                <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                                <span className="text-xs font-bold text-white">24/7 Availability</span>
                            </div>
                        </motion.div>

                        <motion.div
                            className="absolute -bottom-8 -left-8 p-4 rounded-xl bg-white/5 border border-white/10 backdrop-blur-md shadow-xl"
                            animate={{ y: [10, -10, 10] }}
                            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                        >
                            <div className="flex items-center gap-3">
                                <div className="w-8 h-8 rounded-full bg-secondary/20 flex items-center justify-center">
                                    <Settings className="w-4 h-4 text-secondary" />
                                </div>
                                <div>
                                    <p className="text-xs text-muted-foreground">Automations</p>
                                    <p className="text-sm font-bold text-white">Active</p>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>

            </div>
        </section>
    );
}
