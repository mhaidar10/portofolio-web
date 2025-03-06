
const EducationContainer = () => {
    const education = {
        degree: "Bachelor of Computer Engineering",
        university: "Telkom University",
        date: "2020 - 2024",
        gpa: "3.68 / 4.0"
    };

    return (
        <div className="max-w-4xl mx-auto px-4 my-8">
            <h1 className="text-3xl font-bold text-center mb-6">Education</h1>
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 
                            text-center sm:text-left">
                <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100">{education.degree}</h2>
                <p className="text-gray-700 dark:text-gray-300">{education.university}</p>
                <p className="text-gray-500 dark:text-gray-400">{education.date}</p>
                <p className="text-gray-600 dark:text-gray-300 font-medium">GPA: {education.gpa}</p>
            </div>
        </div>
    );
};

export default EducationContainer;
