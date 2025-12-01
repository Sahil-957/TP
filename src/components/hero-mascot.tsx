"use client";

import { motion } from "framer-motion";

export function HeroMascot() {
    return (
        <div className="relative w-[400px] h-[400px] flex items-center justify-center">
            {/* Glow behind the mascot */}
            <div className="absolute inset-0 bg-primary/20 blur-[100px] rounded-full" />

            <motion.svg
                width="300"
                height="300"
                viewBox="0 0 200 200"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                animate={{ y: [-10, 10, -10] }}
                transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
            >
                {/* Body */}
                <rect x="60" y="90" width="80" height="70" rx="20" fill="#F5F5F5" stroke="#00BFFF" strokeWidth="2" />

                {/* Head */}
                <rect x="50" y="40" width="100" height="70" rx="25" fill="#F5F5F5" stroke="#00BFFF" strokeWidth="2" />

                {/* Single Digital Eye Container */}
                <circle cx="100" cy="75" r="25" fill="#10141C" stroke="#00BFFF" strokeWidth="2" />

                {/* The Eye (Pupil) - Winking Animation */}
                <motion.circle
                    cx="100" cy="75" r="10"
                    fill="#00BFFF"
                    initial={{ scaleY: 1 }}
                    animate={{ scaleY: [1, 0.1, 1, 1, 1] }}
                    transition={{ repeat: Infinity, duration: 4, times: [0, 0.05, 0.1, 0.8, 1] }}
                >
                    {/* Glint */}
                    <circle cx="103" cy="72" r="3" fill="#FFFFFF" />
                </motion.circle>

                {/* Mouth (Smile) */}
                <path d="M 85 100 Q 100 110 115 100" stroke="#00BFFF" strokeWidth="3" strokeLinecap="round" />

                {/* Antenna */}
                <line x1="100" y1="40" x2="100" y2="20" stroke="#00BFFF" strokeWidth="2" />
                <circle cx="100" cy="15" r="4" fill="#00BFFF">
                    <animate attributeName="opacity" values="0.5;1;0.5" dur="2s" repeatCount="indefinite" />
                </circle>

                {/* Left Arm (Stationary) */}
                <path d="M 60 110 C 40 110 40 150 60 150" stroke="#00BFFF" strokeWidth="3" strokeLinecap="round" />

                {/* Right Arm (Waving) */}
                <motion.g
                    style={{ originX: "140px", originY: "110px" }}
                    animate={{ rotate: [0, 20, 0, 20, 0] }}
                    transition={{ repeat: Infinity, duration: 2, repeatDelay: 1 }}
                >
                    <path d="M 140 110 C 170 90 180 50 160 40" stroke="#00BFFF" strokeWidth="3" strokeLinecap="round" />
                    {/* Hand (Two fingers) */}
                    <circle cx="160" cy="40" r="8" fill="#F5F5F5" stroke="#00BFFF" strokeWidth="2" />
                </motion.g>

            </motion.svg>
        </div>
    );
}
