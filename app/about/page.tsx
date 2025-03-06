"use client";

import MobileFooter from "../components/mobile_footer";
import Navbar from "../components/navbar";
import ExperienceContainer from "./components/experience";
import SkillContainer from "./components/skill";

export default function About() {
    return (
        <>
            {/* <Navbar /> */}
            <div className="min-h-screen flex flex-col items-center justify-center bg-white dark:bg-gray-900 text-black dark:text-white p-4">
                <h1 className="text-lg sm:text-4xl font-bold bg-gradient-to-br mb-6 from-blue-500 to-purple-500 dark:from-cyan-400 dark:to-indigo-500 bg-clip-text text-transparent flex flex-wrap items-center">
                    ABOUT ME
                </h1>

                <div className="max-w-2xl mb-8 text-lg text-gray-700 dark:text-gray-300">
                    <p>
                        I am a graduate of Telkom University
                        majoring in the Computer Engineering
                        program. I am a motivated and
                        enthusiastic individual with a strong
                        interest in continuous learning and
                        development. I am happy to explore
                        new fields of knowledge and can work
                        both in teams and individually
                    </p>
                </div>

                <SkillContainer />
                <ExperienceContainer />



                <div className="max-w-2xl mb-8">
                    <h2 className="text-2xl font-semibold mb-4">My Projects</h2>
                    <p className="text-gray-700 dark:text-gray-300">
                        I have worked on various projects, including a baby monitoring system, automated feeding system using ESP32, and live streaming applications using Raspberry Pi and Express.js.
                    </p>
                </div>

                <div className="max-w-2xl">
                    <h2 className="text-2xl font-semibold mb-4">Get in Touch</h2>
                    <p className="text-gray-700 dark:text-gray-300">
                        If you'd like to connect or collaborate, feel free to reach out to me via LinkedIn or email.
                    </p>
                </div>
            </div >


        </>
    );
}
