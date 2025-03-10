"use client";

import React, { useState } from "react";
import Image from 'next/image'; // Import the Image component

interface CardProps {
    title: string;
    imageSrc: string[]; // Now supports multiple images
    description: string;
    tags: string[];
    badge?: string;
    demo?: string;
}

const Card: React.FC<CardProps> = ({ title, imageSrc, description, tags, badge, demo }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % imageSrc.length);
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + imageSrc.length) % imageSrc.length);
    };

    return (
        <>
            {/* Card Component */}
            <div
                className="relative card bg-white dark:bg-gray-800 w-full sm:w-64 md:w-72 lg:w-80 xl:w-96 rounded-2xl shadow-md transition-transform transform hover:scale-105 hover:shadow-lg cursor-pointer"
                onClick={() => {
                    setIsModalOpen(true)
                }}
            >
                {/* Demo Button (Top Right) */}
                {demo && (
                    <a
                        href={demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="z-10 absolute top-3 right-3 bg-gradient-to-r from-blue-500 to-purple-500 dark:from-cyan-400 dark:to-indigo-500 text-white text-xs font-semibold px-4 py-1.5 rounded-full shadow-md transition duration-300 hover:opacity-90"
                        onClick={(e) => e.stopPropagation()} // Prevent modal from opening
                    >
                        🚀 Live Demo
                    </a>
                )}

                {/* Image */}
                <figure className="rounded-t-2xl overflow-hidden">

                    {/* <img src={imageSrc[0]} alt={title} className="w-full h-40 object-cover " /> */}
                    <div className="relative w-full h-[200px]">
                        <Image
                            src={imageSrc[currentIndex]}
                            alt={title}
                            fill
                            className="object-cover object-top rounded-lg"
                        />
                    </div>
                </figure>

                {/* Card Content */}
                <div className="card-body p-4">
                    <h2 className="card-title text-lg font-semibold text-gray-900 dark:text-white flex justify-between items-center">
                        {title}
                        {badge && <div className="badge text-nowrap bg-gray-200 dark:bg-gray-700 px-2 py-1 text-xs text-gray-700 dark:text-gray-300 rounded-md">{badge}</div>}
                    </h2>
                    <p className="text-gray-600 dark:text-gray-300 text-sm">{description}</p>

                    {/* Tags */}
                    <div className="card-actions flex flex-wrap gap-2 mt-2">
                        {tags.map((tag, index) => (
                            <div key={index} className="badge badge-outline px-2 py-1 text-xs text-gray-700 dark:text-gray-300 border-gray-500">
                                {tag}
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Modal for Full Image with Carousel */}
            {isModalOpen && (
                <div
                    className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-75 z-50 p-4"
                    onClick={() => {
                        setIsModalOpen(false);
                        setCurrentIndex(0); // Reset to the first image
                    }} // Click outside to close
                >
                    <div
                        className="relative bg-white dark:bg-gray-900 p-6 rounded-lg shadow-2xl max-w-4xl w-full"
                        onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside
                    >
                        {/* Close Button */}
                        <button
                            className="z-20 absolute top-5 right-5 bg-gray-800 dark:bg-gray-100 text-white dark:text-gray-900 w-10 h-10 rounded-full flex items-center justify-center shadow-md hover:scale-110 transition-transform"
                            onClick={() => {
                                setIsModalOpen(false);
                                setCurrentIndex(0); // Reset to the first image
                            }}
                        >
                            ✖
                        </button>

                        {/* Carousel or Single Image */}
                        <div className="relative w-full max-h-[600px] flex justify-center items-center">
                            {/* Dark Overlay */}
                            <div className="absolute inset-0 bg-black opacity-20 rounded-lg"></div>

                            {/* Image */}
                            <Image
                                src={imageSrc[currentIndex]}
                                alt={title}
                                width={500} // Specify the width of the image
                                height={500} // Specify the height of the image
                                className="w-full max-h-[600px] object-contain rounded-lg"
                            />

                            {/* Navigation Buttons (if multiple images) */}
                            {imageSrc.length > 1 && (
                                <>
                                    {/* Previous Button */}
                                    <button
                                        className="absolute left-4 z-50 bg-gray-800 dark:bg-gray-200 text-white dark:text-gray-900 px-4 py-3 rounded-full shadow-lg hover:scale-110 transition-transform duration-300 opacity-90 hover:opacity-100"
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            prevSlide();
                                        }}
                                    >
                                        ◀
                                    </button>

                                    {/* Next Button */}
                                    <button
                                        className="absolute right-4 z-50 bg-gray-800 dark:bg-gray-200 text-white dark:text-gray-900 px-4 py-3 rounded-full shadow-lg hover:scale-110 transition-transform duration-300 opacity-90 hover:opacity-100"
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            nextSlide();
                                        }}
                                    >
                                        ▶
                                    </button>
                                </>
                            )}
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default Card;
