"use client";

import { motion } from "framer-motion";
import { Zap, Shield, Brain, Globe, Code, Cpu } from "lucide-react";

const features = [
    {
        icon: Brain,
        title: "Advanced AI Core",
        description: "Powered by state-of-the-art neural networks for unmatched accuracy.",
    },
    {
        icon: Zap,
        title: "Lightning Fast",
        description: "Real-time processing ensures you never wait for an answer.",
    },
    {
        icon: Shield,
        title: "Enterprise Security",
        description: "Bank-grade encryption keeps your data safe and private.",
    },
    {
        icon: Globe,
        title: "Global Scale",
        description: "Deployed on the edge for low latency anywhere in the world.",
    },
    {
        icon: Code,
        title: "Developer API",
        description: "Seamlessly integrate Starshift into your own applications.",
    },
    {
        icon: Cpu,
        title: "Smart Automation",
        description: "Automate complex workflows with intelligent agents.",
    },
];

export function FeaturesSection() {
    return (
        <section id="features" className="py-24 relative z-10">
            <div className="container mx-auto px-6 md:px-12 lg:px-24">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold font-heading mb-4">
                        Beyond Human <span className="text-primary">Intelligence</span>
                    </h2>
                    <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
                        Discover the tools that will redefine how you work, create, and solve problems.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="p-8 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-white/10 transition-colors group"
                        >
                            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                <feature.icon className="w-6 h-6 text-primary" />
                            </div>
                            <h3 className="text-xl font-bold mb-3 font-heading">{feature.title}</h3>
                            <p className="text-muted-foreground leading-relaxed">
                                {feature.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
