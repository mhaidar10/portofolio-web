"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import ToggleTheme from "./toggle_theme";
import { useEffect, useState } from "react";

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    useEffect(() => {
        if (menuOpen) {
            document.body.classList.add("overflow-hidden");
        } else {
            document.body.classList.remove("overflow-hidden");
        }
    }, [menuOpen]);

    return (
        <nav
            className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 
                ${isScrolled ? "bg-white/80 dark:bg-gray-900/80 shadow-lg backdrop-blur-md" : "bg-transparent"} 
                py-4 px-6`}
        >
            <div className="container mx-auto flex items-center justify-between">
                <div className="flex-none">
                    <Link href="/" className="text-xl font-bold tracking-wide hover:text-gray-500 dark:hover:text-gray-300 transition-colors">
                        Mhaidar
                    </Link>
                </div>
                <div className="hidden md:flex flex-1 justify-center">
                    <ul className="flex space-x-6 text-lg">
                        {
                            [
                                { name: "Home", path: "/" },
                                { name: "About", path: "/about" },
                                { name: "Projects", path: "/projects" },
                                { name: "Contact", path: "/contact" }
                            ].map((link) => (
                                <li key={link.path}>
                                    <Link
                                        href={link.path}
                                        className={`relative pb-1 transition-colors ${pathname === link.path ? "text-blue-600 dark:text-blue-400 after:absolute after:left-0 after:bottom-0 after:w-full after:h-[2px] after:bg-blue-600 dark:after:bg-blue-400" : "hover:text-gray-500 dark:hover:text-gray-300"}`}
                                    >
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                    </ul>
                </div>
                <div className="flex items-center space-x-4">
                    <ToggleTheme />
                    <button className="md:hidden btn btn-ghost relative z-50" onClick={() => setMenuOpen(!menuOpen)}>
                        <svg xmlns="http://www.w3.org/2000/svg" className={`h-6 w-6 transition-transform duration-300 ${menuOpen ? "rotate-90" : "rotate-0"}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            {menuOpen ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /> : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />}
                        </svg>
                    </button>
                </div>
            </div>

            <div
                className={`fixed inset-0 bg-white dark:bg-gray-900 transition-all duration-300 flex flex-col items-center justify-center text-center min-h-screen w-full 
    ${menuOpen ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-full pointer-events-none"}`}
            >
                <ul className="space-y-6 text-2xl font-semibold transition-opacity duration-500">
                    {[
                        { name: "Home", path: "/" },
                        { name: "About", path: "/about" },
                        { name: "Projects", path: "/projects" },
                        { name: "Contact", path: "/contact" }
                    ].map((link) => (
                        <li key={link.path} className={`${menuOpen ? "opacity-100" : "opacity-0"} transition-opacity duration-500`}>
                            <Link
                                href={link.path}
                                className={`block py-2 transition-colors ${pathname === link.path ? "text-blue-600 dark:text-blue-400" : "hover:text-gray-500 dark:hover:text-gray-300"}`}
                                onClick={() => setMenuOpen(false)}
                            >
                                {link.name}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
