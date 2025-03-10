"use client";

import { useState } from "react";
import { FaGithub, FaInstagram, FaLinkedin, FaCopy, FaEnvelope, FaPhone } from "react-icons/fa"; // Import icons
import Swal from "sweetalert2"; // Import SweetAlert2

export default function ContactDetail() {
    const [copied, setCopied] = useState<string | null>(null);

    const copyToClipboard = (text: string, type: string) => {
        navigator.clipboard.writeText(text);
        setCopied(type);

        // SweetAlert2 notification
        Swal.fire({
            icon: 'success',
            title: `${type === 'email' ? 'Email' : 'Phone number'} copied!`,
            showConfirmButton: false,
            timer: 2000, // The notification will disappear after 2 seconds
            position: 'bottom-end',
            toast: true,
            background: '#28a745',
            color: 'white',
        });
    };

    return (
        <div className="flex flex-col items-center w-full max-w-md">
            {/* 🌟 Styled Contact Me Title */}
            <h1 className="text-lg sm:text-4xl font-bold bg-gradient-to-br mb-6 from-blue-500 to-purple-500 dark:from-cyan-400 dark:to-indigo-500 bg-clip-text text-transparent flex flex-wrap items-center">
                CONTACT ME
            </h1>

            <p className="text-gray-600 dark:text-gray-400 mb-6 text-center">
                Feel free to reach out via email or through my social media.
            </p>

            {/* 📩 Email */}
            <div className="flex items-center justify-between bg-gray-100 dark:bg-gray-800 px-6 py-3 rounded-lg shadow-md w-full">
                <div className="flex items-center space-x-3">
                    <FaEnvelope className="text-xl text-gray-600 dark:text-gray-300" />
                    <div className="flex flex-col">
                        <span className="font-semibold">Email</span>
                        <a
                            href="mailto:muhammadhaidar160@gmail.com"
                            className="text-blue-600 dark:text-blue-400 hover:underline break-all max-w-full"
                        >
                            muhammadhaidar160@gmail.com
                        </a>
                    </div>
                </div>
                <button
                    onClick={() => copyToClipboard("muhammadhaidar160@gmail.com", "email")}
                    className="text-gray-600 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 transition-all"
                >
                    <FaCopy className="text-lg" />
                </button>
            </div>

            {/* 📞 Phone */}
            <div className="flex items-center justify-between bg-gray-100 dark:bg-gray-800 px-6 py-3 rounded-lg shadow-md w-full mt-4">
                <div className="flex items-center space-x-3">
                    <FaPhone className="text-xl text-gray-600 dark:text-gray-300" />
                    <div className="flex flex-col">
                        <span className="font-semibold">Phone</span>
                        <span className="text-gray-800 dark:text-gray-300">+62 87-280-4444-72</span>
                    </div>
                </div>
                <button
                    onClick={() => copyToClipboard("+6287280444472", "phone")}
                    className="text-gray-600 dark:text-gray-300 hover:text-green-500 dark:hover:text-green-400 transition-all"
                >
                    <FaCopy className="text-lg" />
                </button>
            </div>

            {/* 🔗 Social Links */}
            <div className="flex flex-col items-center bg-gray-100 dark:bg-gray-800 px-6 py-3 rounded-lg shadow-md w-full mt-4">
                <span className="font-semibold">🔗 Socials</span>
                <div className="flex mt-2 sm:space-x-6 space-x-2 flex-wrap justify-center">
                    {/* GitHub */}
                    <a
                        href="https://github.com/yourgithub"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center space-x-2 text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white transition-all"
                    >
                        <FaGithub className="text-2xl" />
                        <span className="text-lg font-medium">GitHub</span>
                    </a>

                    {/* Instagram */}
                    <a
                        href="https://instagram.com/yourinstagram"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center space-x-2 text-gray-700 dark:text-gray-300 hover:text-pink-500 dark:hover:text-pink-400 transition-all"
                    >
                        <FaInstagram className="text-2xl" />
                        <span className="text-lg font-medium">Instagram</span>
                    </a>

                    {/* LinkedIn */}
                    <a
                        href="https://linkedin.com/in/yourlinkedin"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center space-x-2 text-gray-700 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 transition-all"
                    >
                        <FaLinkedin className="text-2xl" />
                        <span className="text-lg font-medium">LinkedIn</span>
                    </a>
                </div>
            </div>
        </div>
    );
}
