import React, { useEffect, useState } from 'react';
import skillsData from '../data/skill.json'; // Adjust the path as necessary


interface Skill {
    title: string;
    items: string[];
}

const SkillContainer = () => {
    const [data, setData] = useState<Skill[]>([]);;

    useEffect(() => {
        // Simulating an API call to fetch data
        setData(skillsData);
    }, []);

    return (
        <div className="max-w-3xl mx-auto px-4">
            <h1 className="text-3xl font-bold text-center mb-6">Skills</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 mb-8">
                {data.map((card, index) => (
                    <div
                        key={index}
                        className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-4 flex flex-col items-center transition-transform transform hover:scale-105"
                    >
                        <h3 className="text-xl font-semibold mb-2 text-center">{card.title}</h3>
                        <div className="flex flex-wrap justify-center space-x-4">
                            {card.items.map((item, itemIndex) => (
                                <div key={itemIndex} className="flex flex-col items-center">
                                    <p className="text-gray-700 dark:text-gray-300 transition-colors hover:text-blue-500">
                                        {item}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>

    );
};

export default SkillContainer;
