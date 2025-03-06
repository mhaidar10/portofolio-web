"use client";
import { useEffect, useState } from "react";

const ToggleTheme = () => {
    const [theme, setTheme] = useState("light");

    useEffect(() => {
        // Check localStorage for saved theme or default to system preference
        const storedTheme = localStorage.getItem("theme") || (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");

        setTheme(storedTheme);
        document.documentElement.classList.remove("light", "dark");
        document.documentElement.classList.add(storedTheme);
    }, []);

    const toggleTheme = () => {
        const newTheme = theme === "light" ? "dark" : "light";
        setTheme(newTheme);

        // Update HTML class for Tailwind dark mode
        document.documentElement.classList.remove("light", "dark");
        document.documentElement.classList.add(newTheme);

        // Store the theme in localStorage
        localStorage.setItem("theme", newTheme);
    };

    return (
        <label className="flex cursor-pointer gap-2 items-center">
            {/* Sun Icon */}
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
            >
                <circle cx="12" cy="12" r="5" />
                <path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" />
            </svg>

            {/* Toggle Input */}
            <input
                type="checkbox"
                checked={theme === "dark"}
                onChange={toggleTheme}
                className="toggle theme-controller"
            />

            {/* Moon Icon */}
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
            >
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
            </svg>
        </label>
    );
};

export default ToggleTheme;
