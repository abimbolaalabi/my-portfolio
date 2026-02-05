import React, { useEffect, useRef, useState } from "react";
import { Mail, Phone, MapPin } from "lucide-react";
import { ArrowRight } from "lucide-react";
import Section from "./Section";
import MOCK_DATA from "../Mock_DATA";
import emailjs from "emailjs-com";
import { motion } from "framer-motion";


const fadeInUp = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const Contact = () => {
    const formRef = useRef();
    const [formData, setFormData] = useState({ name: "", email: "", message: "" });
    const [status, setStatus] = useState("");
    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setStatus("Sending...");

        try {
            await emailjs.send(
                "service_mviejr4",
                "template_4t2vrpi",
                {
                    name: formData.name,
                    email: formData.email,
                    message: formData.message,
                    time: new Date().toLocaleString(),
                },
                "Qvu4JmVw32vGmSYww"
            );

            setStatus("Message Sent Successfully!");
            setFormData({ name: "", email: "", message: "" });
        } catch (err) {
            console.error(err);
            setStatus("Failed to send message. Please try again later.");
        } finally {
            setLoading(false);
        }
    };

    const LiveClock = () => {
        const [time, setTime] = useState("");
        useEffect(() => {
            const updateClock = () => {
                const now = new Date();
                setTime(now.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit", second: "2-digit", hour12: true }));
            };
            updateClock();
            const interval = setInterval(updateClock, 1000);
            return () => clearInterval(interval);
        }, []);

        return (
            <motion.div
                className="text-5xl md:text-6xl font-bold text-gray-400 tracking-tight"
                animate={{ y: [0, -5, 0] }}
                transition={{ repeat: Infinity, duration: 2 }}
            >
                {time}
            </motion.div>
        );
    };

    return (
        <Section id="contact" title="Get In Touch" icon={Mail} className="bg-white dark:bg-gray-800">
            <motion.div
                className="grid lg:grid-cols-2 gap-12 items-center p-8 bg-gray-50 dark:bg-gray-900 rounded-xl shadow-2xl"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={fadeInUp}
            >
                {/* Left Side */}
                <motion.div className="lg:col-span-1" variants={fadeInUp}>
                    <img
                        src="/contact.jpg"
                        alt="Contact Illustration"
                        className="w-full h-auto object-contain mb-8 rounded-lg"
                    />
                    <div className="space-y-4 text-gray-700 dark:text-gray-400">
                        <div className="flex items-center">
                            <Mail className="w-5 h-5 text-indigo-600 dark:text-indigo-400 mr-3" />
                            <a href={`mailto:${MOCK_DATA.contact.email}`} className="hover:text-indigo-600 transition">
                                {MOCK_DATA.contact.email}
                            </a>
                        </div>
                        <div className="flex items-center">
                            <Phone className="w-5 h-5 text-indigo-600 dark:text-indigo-400 mr-3" />
                            <p>{MOCK_DATA.contact.phone}</p>
                        </div>
                        <div className="flex items-center">
                            <MapPin className="w-5 h-5 text-indigo-600 dark:text-indigo-400 mr-3" />
                            <p>{MOCK_DATA.contact.location}</p>
                        </div>
                    </div>
                </motion.div>

                {/* Right Side */}
                <motion.div className="lg:col-span-1" variants={fadeInUp}>
                    <form ref={formRef} onSubmit={handleSubmit}>
                        <div className="mb-6">
                            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Your Name</label>
                            <input
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                placeholder="Your Name"
                                required
                                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-400 focus:ring-indigo-500 focus:border-indigo-500 transition duration-300"
                            />
                        </div>

                        <div className="mb-6">
                            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Your Email</label>
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                placeholder="Your Email"
                                required
                                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-400 focus:ring-indigo-500 focus:border-indigo-500 transition duration-300"
                            />
                        </div>

                        <div className="mb-6">
                            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Your Message</label>
                            <textarea
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                placeholder="Your Message"
                                rows="5"
                                required
                                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-400 focus:ring-indigo-500 focus:border-indigo-500 transition duration-300"
                            ></textarea>
                        </div>

                        <motion.button
                            type="submit"
                            className="w-full px-8 py-3 bg-indigo-600 text-white font-semibold rounded-full shadow-lg hover:bg-indigo-700 transition duration-300 transform hover:scale-105 text-lg"
                            whileTap={{ scale: 0.95 }}
                            disabled={loading}
                        >
                            {loading ? "SENDING..." : "SEND IT"}
                        </motion.button>

                        {status && status !== "Sending..." && (
                            <motion.p
                                className={`mt-4 text-center font-medium ${status.includes("Successfully") ? "text-green-500" : "text-red-500"}`}
                                initial={{ scale: 0.8, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                transition={{ type: "spring", stiffness: 300, damping: 15 }}
                            >
                                {status}
                            </motion.p>
                        )}
                    </form>
                </motion.div>
            </motion.div>

            <div className="flex flex-col md:flex-row justify-between items-center mt-12 py-10 border-t border-gray-800">
                <div className="flex items-center space-x-2">
                    <h3 className="text-lg font-semibold text-white">Currently Available</h3>
                    <ArrowRight className="w-5 h-5 text-indigo-400 animate-bounce" />
                </div>
                <LiveClock />
            </div>
        </Section>
    );
};

export default Contact;
