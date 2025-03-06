"use client";
import React, { useState } from "react";
import certifications from "../data/certificate.json"; // Adjust the path as needed

const CertificationContainer = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const itemsPerPage = 5;

    const nextCertification = () => {
        setCurrentIndex((prevIndex) =>
            Math.min(prevIndex + itemsPerPage, certifications.length)
        );
    };

    const prevCertification = () => {
        setCurrentIndex((prevIndex) =>
            Math.max(prevIndex - itemsPerPage, 0)
        );
    };

    return (
        <div className="sm:w-[400px] mx-auto px-4 my-8">
            <h1 className="text-3xl font-bold text-center mb-6">Certifications</h1>
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 text-center sm:text-left min-h-[240px] flex flex-col justify-between">
                <div>
                    {certifications.slice(currentIndex, currentIndex + itemsPerPage).map((cert, index) => (
                        <div key={currentIndex + index} className="flex items-start gap-2">
                            <span className="text-lg font-semibold">{currentIndex + index + 1}.</span>
                            <p className="text-lg text-gray-900 dark:text-gray-100 break-words flex-1">
                                {cert}
                            </p>
                        </div>
                    ))}
                </div>
                <div className="flex justify-between mt-4">
                    <button
                        onClick={prevCertification}
                        disabled={currentIndex === 0}
                        className={`px-4 py-2 rounded-lg border transition font-semibold 
                            ${currentIndex === 0
                                ? "bg-gray-300 dark:bg-gray-700 text-gray-500 cursor-not-allowed"
                                : "bg-gray-100 text-gray-900 dark:bg-gray-900 dark:text-white border-gray-400 dark:border-gray-600 hover:bg-gray-200 dark:hover:bg-gray-700"
                            }`}
                    >
                        Previous
                    </button>
                    <button
                        onClick={nextCertification}
                        disabled={currentIndex + itemsPerPage >= certifications.length}
                        className={`px-4 py-2 rounded-lg border transition font-semibold 
                            ${currentIndex + itemsPerPage >= certifications.length
                                ? "bg-gray-300 dark:bg-gray-700 text-gray-500 cursor-not-allowed"
                                : "bg-gray-100 text-gray-900 dark:bg-gray-900 dark:text-white border-gray-400 dark:border-gray-600 hover:bg-gray-200 dark:hover:bg-gray-700"
                            }`}
                    >
                        Next
                    </button>
                </div>
            </div>
        </div>
    );
};

export default CertificationContainer;
