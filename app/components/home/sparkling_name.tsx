"use client";

import { motion } from "framer-motion";

interface GlowingTextProps {
    text: string;
}

export default function GlowingText({ text }: GlowingTextProps) {
    return (
        <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
            className="text-6xl font-bold tracking-wide text-black dark:text-white
                 drop-shadow-[0_0_10px_rgba(255,0,255,0.8)] 
                 dark:drop-shadow-[0_0_10px_rgba(0,255,255,0.8)]"
        >
            {text}
        </motion.h1>
    );
}
