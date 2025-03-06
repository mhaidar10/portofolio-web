"use client";

import { usePathname, useRouter } from "next/navigation";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";

const pages = [
    { name: "Home", path: "/", number: "01/04" },
    { name: "About", path: "/about", number: "02/04" },
    { name: "Projects", path: "/projects", number: "03/04" },
    { name: "Contact", path: "/contact", number: "04/04" },
];

const MobileFooter = () => {
    const router = useRouter();
    const pathname = usePathname();

    // Find the current page index based on pathname
    const currentIndex = pages.findIndex(page => page.path === pathname);

    const navigateTo = (index: number) => {
        if (index < 0) {
            index = pages.length - 1; // Loop back to last page
        } else if (index >= pages.length) {
            index = 0; // Loop back to first page
        }
        router.push(pages[index].path);
    };

    return (
        <div className="fixed bottom-0 w-full bg-white dark:bg-gray-900 shadow-lg flex items-center justify-between px-6 py-3 text-lg font-semibold">
            {/* Left: Page Number */}
            <div className="flex items-center space-x-2">
                <span className="text-2xl font-bold">{pages[currentIndex]?.number.split("/")[0]}</span>
                <span className="text-gray-500">/{pages.length}</span>
                <span className="ml-2">{pages[currentIndex]?.name}</span>
            </div>

            {/* Right: Navigation Arrows */}
            <div className="flex space-x-4">
                <button
                    className="text-gray-700 dark:text-gray-300 hover:text-blue-600 transition-all duration-200"
                    onClick={() => navigateTo(currentIndex - 1)}
                >
                    <FaArrowLeft className="text-2xl" />
                </button>
                <button
                    className="text-gray-700 dark:text-gray-300 hover:text-blue-600 transition-all duration-200"
                    onClick={() => navigateTo(currentIndex + 1)}
                >
                    <FaArrowRight className="text-2xl" />
                </button>
            </div>
        </div>
    );
};

export default MobileFooter;
