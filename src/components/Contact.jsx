import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Contact = () => {
    useEffect(() => {
        AOS.init({
            duration: 1500,
        });
    });

    return (
        <div
            id="contact"
            name="contact"
            className="bg-teal-950 text-white py-16 flex items-center justify-center min-h-screen"
        >
            <div className="container mx-auto px-6 lg:px-10 flex items-center justify-center">
                <div className="text-center">
                    <h1 className="text-4xl font-bold text-center mb-8">Contact <span className="text-teal-500">Me</span></h1>
                    <div className="lg:w-[800px] mb-6 mx-auto">
                        <div className="bg-teal-700 p-6 rounded-lg">
                            <h2 className="text-xl font-bold mb-2 text-teal-950">Get in Touch</h2>
                            <p className="text-gray-300 mb-4">Submit the form below to get in touch with me</p>
                            <form
                                action="https://formsubmit.co/jamaliakbar909@gmail.com"
                                method="POST"
                                className="flex flex-col"
                            >
                                <input
                                    type="text"
                                    name="name"
                                    required
                                    placeholder="Enter your name"
                                    className="p-2 bg-transparent border-2 border-teal-900 rounded-md text-white focus:outline-none"
                                />
                                <input
                                    type="email"
                                    name="email"
                                    required
                                    placeholder="Enter your email"
                                    className="my-4 p-2 bg-transparent border-2 border-teal-900 rounded-md text-white focus:outline-none"
                                />
                                <textarea
                                    name="message"
                                    placeholder="Enter your message"
                                    rows="8"
                                    required
                                    className="p-2 bg-transparent border-2 border-teal-900 rounded-md text-white focus:outline-none"
                                />
                                <button
                                    type="submit"
                                    className="bg-teal-900 hover:bg-teal-300 hover:text-gray-950 text-white px-6 py-3 my-8 mx-auto flex items-center rounded-md font-semibold duration-300"
                                >
                                    Send Message
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
