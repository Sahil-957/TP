"use client";

import { motion } from "framer-motion";

const industries = [
    "Restaurants & Cafés",
    "Salons & Spas",
    "Clinics & Healthcare",
    "Agencies & Consultants",
    "Coaching & Education",
    "Local Service Brands"
];

export function TargetAudience() {
    return (
        <section className="py-16 bg-[#0A0E14] border-t border-white/5">
            <div className="container mx-auto px-6 md:px-12 lg:px-24">
                <h2 className="text-2xl md:text-4xl font-bold font-heading text-center text-white mb-12">
                    Built for service businesses that live on bookings and leads
                </h2>

                <div className="flex flex-wrap justify-center gap-4 md:gap-6">
                    {industries.map((industry, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="px-8 py-4 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm text-muted-foreground font-medium hover:border-primary hover:text-primary hover:bg-primary/10 transition-all cursor-default"
                        >
                            {industry}
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
