"use client";

import { motion } from "framer-motion";
import { Users, Target, Lightbulb } from "lucide-react";

export function AboutSection() {
    return (
        <section id="about" className="py-24 relative z-10 bg-black/40">
            <div className="container mx-auto px-6 md:px-12 lg:px-24">
                <div className="grid lg:grid-cols-2 gap-16 items-center">

                    {/* Left: Text Content */}
                    <div className="space-y-8">
                        <h2 className="text-3xl md:text-5xl font-bold font-heading">
                            We Are the Architects of <br />
                            <span className="text-primary">Artificial Intelligence</span>
                        </h2>

                        <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
                            <p>
                                At Starshift, we don't just build software; we craft intelligent ecosystems. We are a premier AI development agency dedicated to bridging the gap between visionary ideas and tangible, high-impact reality.
                            </p>
                            <p>
                                Our team of elite engineers, data scientists, and designers work in unison to deliver bespoke AI solutions that transform industries. From predictive analytics to autonomous agents, we turn the complex into the effortless.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-8">
                            <div className="space-y-2">
                                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                                    <Users className="w-5 h-5 text-primary" />
                                </div>
                                <h4 className="font-bold">Elite Team</h4>
                                <p className="text-sm text-muted-foreground">Top 1% Talent</p>
                            </div>
                            <div className="space-y-2">
                                <div className="w-10 h-10 rounded-lg bg-secondary/10 flex items-center justify-center">
                                    <Target className="w-5 h-5 text-secondary" />
                                </div>
                                <h4 className="font-bold">Precision</h4>
                                <p className="text-sm text-muted-foreground">Zero Error Rate</p>
                            </div>
                            <div className="space-y-2">
                                <div className="w-10 h-10 rounded-lg bg-blue-500/10 flex items-center justify-center">
                                    <Lightbulb className="w-5 h-5 text-blue-500" />
                                </div>
                                <h4 className="font-bold">Innovation</h4>
                                <p className="text-sm text-muted-foreground">Future Ready</p>
                            </div>
                        </div>
                    </div>

                    {/* Right: Visual/Image */}
                    <div className="relative">
                        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 blur-3xl rounded-full -z-10" />
                        <div className="relative rounded-2xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur-sm p-8">
                            <div className="grid grid-cols-2 gap-4">
                                <div className="space-y-4">
                                    <div className="h-32 rounded-xl bg-white/5 animate-pulse" />
                                    <div className="h-48 rounded-xl bg-white/10 animate-pulse delay-75" />
                                </div>
                                <div className="space-y-4 pt-8">
                                    <div className="h-48 rounded-xl bg-white/10 animate-pulse delay-150" />
                                    <div className="h-32 rounded-xl bg-white/5 animate-pulse delay-300" />
                                </div>
                            </div>

                            {/* Overlay Badge */}
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-background/80 backdrop-blur-md border border-white/10 px-6 py-3 rounded-full shadow-2xl">
                                <span className="font-bold text-primary">Starshift Agency</span>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
