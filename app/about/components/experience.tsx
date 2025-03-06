import React from 'react';
import experienceData from '../data/experience.json'; // Adjust the path as necessary

const ExperienceContainer = () => {
    return (
        <div className="max-w-5xl mx-auto px-4 my-8"> {/* Adjusted max-width for the container */}
            <h1 className="text-3xl font-bold text-center mb-6">Experience</h1>
            <div className="flex justify-center">
                <div className="flex-grow mr-4 w-3/4"> {/* Timeline takes 3/4 of the width */}
                    <ul className="timeline timeline-vertical">
                        {experienceData.map((experience, index) => (
                            <li key={index} className='inline-block sm:flex mt-4'>
                                <div className=" bg-white dark:bg-gray-800  sm:flex timeline-start timeline-box flex-grow-2">
                                    {experience.position}
                                </div>
                                <div className="hidden sm:flex timeline-middle flex-grow-1">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                        className="text-primary h-5 w-5">
                                        <path
                                            fillRule="evenodd"
                                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                                            clipRule="evenodd" />
                                    </svg>
                                </div>
                                <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg timeline-end timeline-box flex-grow-4">
                                    <p className="text-gray-700 dark:text-gray-300 font-bold">{experience.company}</p>
                                    <p className="text-gray-500">{experience.date}</p>
                                    <ul className="mt-2 list-disc list-outside text-gray-700 dark:text-gray-300 ">
                                        {experience.responsibilities.map((responsibility, i) => (
                                            <li className='marker:text-blue-600 ml-2' key={i}>{responsibility}</li>
                                        ))}
                                    </ul>
                                </div>
                                <hr className="bg-primary" />
                            </li>

                        ))}
                    </ul>

                </div>


            </div>

        </div>
    );
};

export default ExperienceContainer;
