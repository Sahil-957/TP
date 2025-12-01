"use client";

import { motion } from "framer-motion";
import { XCircle } from "lucide-react";

const problems = [
    "Visitors land on your site but leave without calling, booking, or contacting you.",
    "No one is available 24/7 to answer basic questions.",
    "Leads are scattered across forms, emails, and chats.",
    "You spend time on repetitive questions instead of real customers."
];

export function ProblemSection() {
    return (
        <section className="py-24 bg-background relative overflow-hidden">
            <div className="container mx-auto px-6 md:px-12 lg:px-24">
                <div className="grid lg:grid-cols-2 gap-16 items-center">

                    {/* Left: Text */}
                    <div className="space-y-8">
                        <h2 className="text-3xl md:text-5xl font-bold font-heading leading-tight">
                            Most websites are just <br />
                            <span className="text-secondary">digital brochures.</span> <br />
                            Yours shouldn't be.
                        </h2>

                        <div className="space-y-6">
                            {problems.map((problem, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ delay: index * 0.1 }}
                                    viewport={{ once: true }}
                                    className="flex items-start gap-4 pl-4 border-l-2 border-primary/50"
                                >
                                    <XCircle className="w-6 h-6 text-secondary shrink-0 mt-1" />
                                    <p className="text-lg text-muted-foreground">{problem}</p>
                                </motion.div>
                            ))}
                        </div>

                        <p className="text-xl font-semibold text-primary pt-4">
                            You don't just need a prettier website. You need a website that talks, listens, and follows up.
                        </p>
                    </div>

                    {/* Right: Visual */}
                    <div className="relative flex justify-center">
                        <div className="absolute inset-0 bg-secondary/10 blur-[100px] rounded-full" />
                        <div className="relative w-full max-w-md aspect-square bg-white/5 border border-white/10 rounded-2xl backdrop-blur-sm p-8 flex flex-col items-center justify-center text-center space-y-4">
                            <div className="w-20 h-20 rounded-full bg-white/10 flex items-center justify-center mb-4">
                                <span className="text-4xl">😕</span>
                            </div>
                            <h3 className="text-xl font-bold text-white">Leads Lost</h3>
                            <p className="text-muted-foreground">
                                "I had a question at 9 PM but no one answered..."
                            </p>
                            <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden mt-4">
                                <div className="h-full w-3/4 bg-red-500/50" />
                            </div>
                            <p className="text-xs text-red-400">75% Bounce Rate</p>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
