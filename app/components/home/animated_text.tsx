"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const roles = ["a Lifelong Learner", "a Growth-Oriented Person", "a Problem Solver"]; // Add more if needed

export default function AnimatedText() {
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prev) => (prev + 1) % roles.length); // Loops through roles
        }, 2000); // Change every 2 seconds
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="inline-block"> {/* Ensures inline behavior */}
            <AnimatePresence mode="wait">
                <motion.span
                    key={index}
                    initial={{ opacity: 0, y: 5 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -5 }}
                    transition={{ duration: 0.5 }}
                    className="text-lg sm:text-3xl font-bold text-black dark:text-white inline-block"
                >
                    {roles[index]}
                </motion.span>
            </AnimatePresence>
        </div>
    );
}
