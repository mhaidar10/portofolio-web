
import ContactDetail from "./components/contact_detail";

export const metadata = {
    title: "Contact Me",
};

export default function Contact() {
    return (
        <>
            <div className="min-h-screen flex flex-col items-center bg-white dark:bg-gray-900 text-black dark:text-white p-6">
                <ContactDetail />
            </div>

        </>
    );
}
