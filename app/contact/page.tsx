"use client";

import MobileFooter from "../components/mobile_footer";
import Navbar from "../components/navbar";
import ContactDetail from "./components/contact_detail";

export default function Contact() {
    return (
        <>
            {/* <Navbar /> */}
            <div className="min-h-screen flex flex-col items-center bg-white dark:bg-gray-900 text-black dark:text-white p-6">
                <ContactDetail />

            </div>

        </>
    );
}
