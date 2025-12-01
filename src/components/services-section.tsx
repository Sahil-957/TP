"use client";

import { motion } from "framer-motion";
import { Map, Settings, Bot, LineChart } from "lucide-react";

const services = [
    {
        id: "strategy",
        size: "large",
        icon: Map,
        title: "Your Galactic Map",
        description: "We don't just build; we plot the course. We'll map your business goals to a custom AI strategy that guarantees a successful voyage.",
    },
    {
        id: "custom",
        size: "small",
        icon: Settings,
        title: "The Warp Drive",
        description: "Off-the-shelf AI is a slow cruise. We build you a custom warp drive—a bespoke model tailored to your unique data.",
    },
    {
        id: "automation",
        size: "small",
        icon: Bot,
        title: "Autopilot Engaged",
        description: "Let our AI handle the boring stuff. From data entry to customer support, we put your repetitive tasks on autopilot.",
    },
    {
        id: "analysis",
        size: "large",
        icon: LineChart,
        title: "The Oracle",
        description: "Your data is telling a story. Our AI listens, finding hidden trends and actionable insights you've been missing.",
    },
];

export function ServicesSection() {
    return (
        <section id="services" className="py-24 relative z-10">
            <div className="container mx-auto px-6 md:px-12 lg:px-24">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold font-heading mb-4">
                        The Ship's <span className="text-primary">Core</span>
                    </h2>
                    <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
                        Everything you need to navigate the AI universe.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[minmax(250px,auto)]">
                    {services.map((service, index) => (
                        <motion.div
                            key={service.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className={`
                relative p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-white/10 transition-all duration-300 group overflow-hidden
                ${service.size === 'large' ? 'md:col-span-2' : 'md:col-span-1'}
              `}
                        >
                            <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
                                <service.icon className="w-24 h-24" />
                            </div>

                            <div className="relative z-10 h-full flex flex-col justify-between">
                                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                    <service.icon className="w-6 h-6 text-primary" />
                                </div>

                                <div>
                                    <h3 className="text-2xl font-bold mb-3 font-heading">{service.title}</h3>
                                    <p className="text-muted-foreground leading-relaxed">
                                        {service.description}
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
