"use client";

import { motion } from "framer-motion";
import { Building2, Globe2, Cpu, Network, Database, Cloud } from "lucide-react";

const clients = [
    { name: "Nebula Corp", icon: Building2 },
    { name: "Global Net", icon: Globe2 },
    { name: "Cyber Systems", icon: Cpu },
    { name: "Neural Link", icon: Network },
    { name: "Data Flow", icon: Database },
    { name: "Cloud Nine", icon: Cloud },
];

export function TrustedBy() {
    return (
        <section className="py-12 border-y border-white/5 bg-black/20">
            <div className="container mx-auto px-6 md:px-12 lg:px-24">
                <h2 className="text-center text-sm font-medium text-muted-foreground mb-8 uppercase tracking-widest">
                    Trusted by innovators navigating the cosmos of data
                </h2>

                <div className="flex flex-wrap justify-center items-center gap-12 md:gap-20">
                    {clients.map((client, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="group flex items-center gap-2 grayscale hover:grayscale-0 transition-all duration-300 opacity-50 hover:opacity-100 cursor-pointer"
                        >
                            <client.icon className="w-8 h-8 text-primary" />
                            <span className="font-bold text-lg hidden md:block">{client.name}</span>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
