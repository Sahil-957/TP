"use client";

import React from "react";
import { motion, HTMLMotionProps } from "framer-motion";
import { cn } from "@/lib/utils";

interface GlowingButtonProps extends HTMLMotionProps<"button"> {
    children: React.ReactNode;
    className?: string;
}

export function GlowingButton({ children, className, ...props }: GlowingButtonProps) {
    return (
        <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={cn(
                "relative px-8 py-4 text-lg font-bold text-white transition-all duration-300 rounded-full bg-primary",
                "shadow-[0_0_20px_rgba(0,191,255,0.5)] hover:shadow-[0_0_40px_rgba(0,191,255,0.8)]",
                "border border-white/10 backdrop-blur-sm",
                className
            )}
            {...props}
        >
            <span className="relative z-10 flex items-center gap-2">
                {children}
            </span>
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary to-secondary opacity-0 hover:opacity-100 transition-opacity duration-300" />
        </motion.button>
    );
}
