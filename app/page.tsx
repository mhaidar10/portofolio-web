import Image from "next/image";
import Navbar from "./components/navbar"
import AnimatedText from "./components/home/animated_text";
import './css/home.css'
import Lanyard from './components/reactbits/Lanyard/Lanyard'


export const metadata = {
  title: "Home Page",
};

export default function Home() {

  return (
    <div>

      <Navbar />


      <section className="relative min-h-screen flex flex-col md:flex-row items-start md:items-center justify-center px-4 sm:px-32 bg-white dark:bg-gray-900 text-black dark:text-white overflow-hidden">
        {/* Background Decorations */}
        <div className="absolute inset-0 z-0 flex flex-col justify-center items-center">
          {/* Bubbles */}
          <div className="absolute top-0 left-0 w-full h-full">
            <div className="bubble rounded-full bg-blue-300 opacity-30 animate-bubble" style={{ width: '200px', height: '200px', top: '20%', left: '30%' }}></div>
            <div className="bubble rounded-full bg-pink-300 opacity-30 animate-bubble" style={{ width: '150px', height: '150px', top: '50%', left: '10%' }}></div>
            <div className="bubble rounded-full bg-teal-300 opacity-30 animate-bubble" style={{ width: '100px', height: '100px', top: '80%', left: '70%' }}></div>
          </div>
        </div>
        {/* Complex Gradient Circle (Only on Larger Screens) */}
        <div className="hidden md:blur-xl md:block absolute top-20 right-80 mb-8 mr-8 w-72 h-72 rounded-full opacity-60 backdrop-blur-lg shadow-2xl 
        bg-gradient-to-tr from-blue-500 via-purple-500 to-pink-500 animate-pulse">
        </div>
        {/* Complex Gradient Circle (Only on Larger Screens) */}
        <div className="hidden md:blur-xl md:block absolute bottom-10 right-10 mb-8 mr-8 w-72 h-72 rounded-full opacity-60 backdrop-blur-lg shadow-2xl 
        bg-gradient-to-tr from-blue-500 via-purple-500 to-pink-500 animate-pulse">
        </div>


        {/* Text Content */}
        <div className="relative z-1 w-full md:w-1/2 flex flex-col items-start -mt-24 md:items-start justify-center">
          <h1 className="text-lg sm:text-4xl font-bold bg-gradient-to-br from-blue-500 to-purple-500 dark:from-cyan-400 dark:to-indigo-500 bg-clip-text text-transparent flex flex-wrap items-center">
            Hi There
            <Image
              src="/gif/hand.gif"
              alt="Waving Hand"
              width={30}
              height={30}
              className="rounded-lg inline-block mx-2 sm:mx-3"
            />
            , My Name Is
          </h1>

          {/* Name Below with Theme-Switching Gradient */}
          <h1 className="text-4xl sm:text-6xl font-bold bg-clip-text text-transparent">
            <span className="bg-gradient-to-r from-teal-400 to-cyan-500 dark:from-fuchsia-400 dark:to-purple-600 bg-clip-text text-transparent">
              Muhammad Haidar
            </span>
          </h1>

          <h1 className="text-xl sm:text-3xl bg-gradient-to-br from-blue-500 to-purple-500 dark:from-cyan-400 dark:to-indigo-500 bg-clip-text text-transparent">
            I'm <span><AnimatedText /></span>
          </h1>

          <h1 className="text-xl sm:text-3xl font-bold dark:text-white text-black sm:mt-36 hidden md:block">
            Connect With Me
          </h1>

          <div className="flex space-x-6 mt-8 md:flex">
            {/* LinkedIn Icon */}
            <a
              href="https://www.linkedin.com/in/mhaidar-abdul/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-600 dark:hover:text-blue-400 transition"
            >
              <svg
                className="w-8 h-8"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.26c-.97 0-1.75-.79-1.75-1.76s.78-1.76 1.75-1.76 1.75.79 1.75 1.76-.78 1.76-1.75 1.76zm13.5 12.26h-3v-5.6c0-3.36-4-3.11-4 0v5.6h-3v-11h3v1.76c1.37-2.58 7-2.77 7 2.47v6.77z" />
              </svg>
            </a>

            {/* Instagram Icon */}
            <a
              href="https://www.instagram.com/mhaidar.10/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-purple-600 dark:hover:text-purple-400 transition"
            >
              <svg
                className="w-8 h-8"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
              </svg>
            </a>

            {/* Email Icon */}
            <a href="mailto:muhammadhaidar160@gmail.com" className="hover:text-red-600 dark:hover:text-red-400 transition">
              <svg
                className="w-8 h-8"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
            </a>
          </div>
        </div>


        {/* Image Container (Right Side on Larger Screens) */}
        <div className="relative z-1 w-full md:w-1/2 flex justify-center">
          <div className="mt-6 md:mt-0 bg-gray-100 dark:bg-gray-800 p-4 rounded-xl shadow-xl border border-gray-300 dark:border-gray-700 dark:shadow-[0_0_20px_rgba(173,216,230,0.6)] transition-all duration-500">
            <Image
              src="/images/saya.jpg"
              alt="My Profile"
              width={240}
              height={240}
              className="border-4 border-white dark:border-gray-600"
              unoptimized
            />
          </div>
        </div>



        <div className="absolute right-10 z-10 hidden xl:block">
          <Lanyard position={[0, 0, 20]} gravity={[0, -40, 0]} />
        </div>


      </section>


    </div >
  );
}
