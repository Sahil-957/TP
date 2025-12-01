"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { motion, useScroll, useSpring } from "framer-motion";

export function Navbar() {
    const { scrollYProgress } = useScroll();
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            className="fixed top-0 left-0 right-0 z-50 bg-background/50 backdrop-blur-md border-b border-white/10"
        >
            {/* Scroll Progress Bar */}
            <motion.div
                className="absolute top-0 left-0 right-0 h-1 bg-primary origin-left"
                style={{ scaleX }}
            />

            <div className="flex items-center justify-between px-6 py-4">
                {/* Logo Only - No Text */}
                <Link href="/" className="flex items-center gap-2">
                    <div className="relative w-[500px] h-10">
                        <Image
                            src="/logo.png"
                            alt="Starshift Logo"
                            fill
                            className="object-contain object-left"
                            priority
                        />
                    </div>
                </Link>

                <div className="hidden md:flex items-center gap-8">
                    <Link href="#features" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">Features</Link>
                    <Link href="#pricing" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">Pricing</Link>
                    <Link href="#how-it-works" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">How It Works</Link>
                    <Link href="#faq" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">FAQ</Link>
                </div>

                <div className="flex items-center gap-4">
                    <Button className="bg-primary hover:bg-primary/90 hover:shadow-[0_0_20px_rgba(0,191,255,0.5)] hover:scale-105 transition-all text-white rounded-full px-6 font-semibold">
                        Book a Demo
                    </Button>
                </div>
            </div>
        </motion.nav>
    );
}
