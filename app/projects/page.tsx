"use client"
import { useState } from "react";
import Card from "./components/card";
import projectData from "./data/projects.json"; // 📌 Import JSON data
import ProjectsMetadata from "./metadata/metadata";


export default function Projects() {
    const [selectedCategory, setSelectedCategory] = useState("All");

    const categories = ["All", "Data Analyst", "Web Development", "Other"];

    // 📌 Filter projects based on selected category
    const filteredProjects =
        selectedCategory === "All"
            ? projectData
            : projectData.filter((project) => project.category.toLowerCase() === selectedCategory.toLowerCase());

    return (
        <>
            <ProjectsMetadata />
            <div className="min-h-screen flex flex-col items-center bg-white dark:bg-gray-900 text-black dark:text-white">
                <h1 className="mt-3 sm:mt-10 text-lg sm:text-4xl font-bold bg-gradient-to-br sm:mb-3 from-blue-500 to-purple-500 dark:from-cyan-400 dark:to-indigo-500 bg-clip-text text-transparent">
                    My Projects
                </h1>
                <p className="mb-3 text-center text-base sm:text-lg max-w-2xl text-gray-700 dark:text-gray-300">
                    Explore and reach out to my projects.
                </p>

                {/* 📌 Category Filter Buttons */}
                <div className="flex flex-wrap justify-center gap-3 mb-6">
                    {categories.map((category) => (
                        <button
                            key={category}
                            className={`px-4 py-2 rounded-lg text-sm font-semibold transition ${selectedCategory === category
                                ? "bg-blue-600 text-white"
                                : "bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-white"
                                }`}
                            onClick={() => setSelectedCategory(category)}
                        >
                            {category}
                        </button>
                    ))}
                </div>

                {/* 📌 Project Cards Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredProjects.length > 0 ? (
                        filteredProjects.map((project) => (
                            <Card
                                key={project.id}
                                title={project.title}
                                imageSrc={project.imageSrc}
                                description={project.description}
                                tags={project.tags}
                                badge={project.category} // Category as badge
                                demo={project.demo} // Make sure this is passed!


                            />
                        ))
                    ) : (
                        <p className="text-gray-500 dark:text-gray-400">
                            No projects available for this category.
                        </p>
                    )}
                </div>
            </div>
        </>
    );
}
