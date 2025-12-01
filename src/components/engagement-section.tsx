"use client";

import { motion } from "framer-motion";
import { Check, Rocket, Repeat, Building2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { GlowingButton } from "@/components/ui/glowing-button";

const models = [
    {
        name: "MVP Sprint",
        icon: Rocket,
        description: "Rapid prototype to market in 4-6 weeks.",
        features: ["Discovery Workshop", "Core Feature Dev", "UI/UX Design", "Deployment Setup"],
    },
    {
        name: "Growth Retainer",
        icon: Repeat,
        description: "Ongoing development and optimization.",
        features: ["Dedicated Team", "Weekly Sprints", "Priority Support", "Strategic Roadmap", "Scale Architecture"],
        popular: true,
    },
    {
        name: "Enterprise Core",
        icon: Building2,
        description: "Large-scale digital transformation.",
        features: ["Custom SLA", "On-premise Options", "Security Audits", "24/7 Monitoring", "Team Training"],
    },
];

export function EngagementSection() {
    return (
        <section id="engagement" className="py-24 relative z-10 bg-black/20">
            <div className="container mx-auto px-6 md:px-12 lg:px-24">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold font-heading mb-4">
                        Engagement <span className="text-secondary">Models</span>
                    </h2>
                    <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
                        Flexible partnership structures designed to fit your stage of growth.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
                    {models.map((model, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className={`relative p-8 rounded-3xl border ${model.popular
                                    ? "bg-white/10 border-primary shadow-[0_0_40px_rgba(0,191,255,0.2)]"
                                    : "bg-white/5 border-white/10"
                                } backdrop-blur-md flex flex-col h-full`}
                        >
                            {model.popular && (
                                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-primary text-white text-sm font-bold shadow-lg">
                                    Most Popular
                                </div>
                            )}

                            <div className="mb-8 text-center">
                                <div className={`w-16 h-16 mx-auto rounded-2xl flex items-center justify-center mb-4 ${model.popular ? 'bg-primary/20 text-primary' : 'bg-white/10 text-white'}`}>
                                    <model.icon className="w-8 h-8" />
                                </div>
                                <h3 className="text-2xl font-bold mb-2">{model.name}</h3>
                                <p className="text-sm text-muted-foreground">{model.description}</p>
                            </div>

                            <ul className="space-y-4 mb-8 flex-1">
                                {model.features.map((feature, i) => (
                                    <li key={i} className="flex items-center gap-3 text-sm">
                                        <div className="w-5 h-5 rounded-full bg-green-500/20 flex items-center justify-center shrink-0">
                                            <Check className="w-3 h-3 text-green-500" />
                                        </div>
                                        {feature}
                                    </li>
                                ))}
                            </ul>

                            {model.popular ? (
                                <GlowingButton className="w-full justify-center">Start Project</GlowingButton>
                            ) : (
                                <Button variant="outline" className="w-full rounded-full border-white/20 hover:bg-white/10 hover:text-white py-6">
                                    Contact Us
                                </Button>
                            )}
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
