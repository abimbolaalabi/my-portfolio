import React, { useEffect, useState } from "react";
import { Mail, Phone, MapPin } from "lucide-react";
import { FaLinkedin, FaTwitter, FaGithub } from "react-icons/fa";
import SocialIconLink from "./SocialIconLink";
import MOCK_DATA from "../Mock_DATA";

// Smooth scroll
const scrollToSection = (id) => {
  const element = document.getElementById(id);
  if (element) element.scrollIntoView({ behavior: "smooth" });
};



const Footer = () => (
  <footer className="bg-gray-900 dark:bg-gray-950 text-white py-12">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

      {/* Main Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">

        {/* Column 1: Branding */}
        <div>
          <h4 className="text-xl font-bold text-indigo-400 mb-4">Alabi Ibrahim Abimbola</h4>
          <p className="text-sm text-gray-400">
            Passionate Frontend Developer building modern, responsive, and high-performance web applications with React.
          </p>
        </div>

        {/* Column 2: Quick Links */}
        <div>
          <h4 className="text-xl font-bold mb-4">Quick Links</h4>
          <ul className="space-y-2">
            {["Home", "About", "Skills", "Projects"].map((item) => (
              <li key={item}>
                <button
                  className="text-sm text-gray-400 hover:text-indigo-400 transition duration-300"
                  onClick={() => scrollToSection(item.toLowerCase())}
                >
                  {item}
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 3: Contact Info */}
        <div>
          <h4 className="text-xl font-bold mb-4">Contact Info</h4>
          <ul className="space-y-2 text-sm text-gray-400">
            <li className="flex items-center">
              <Mail className="w-4 h-4 mr-2 text-indigo-400" />
              {MOCK_DATA.contact.email}
            </li>
            <li className="flex items-center">
              <Phone className="w-4 h-4 mr-2 text-indigo-400" />
              {MOCK_DATA.contact.phone}
            </li>
            <li className="flex items-start">
              <MapPin className="w-4 h-4 mr-2 text-indigo-400 mt-1" />
              {MOCK_DATA.contact.location}
            </li>
          </ul>
        </div>

        {/* Column 4: Socials */}
        <div>
          <h4 className="text-xl font-bold mb-4">Connect</h4>
          <div className="flex space-x-3">
            <SocialIconLink href={MOCK_DATA.contact.social.linkedin} Icon={FaLinkedin} label="LinkedIn" />
            <SocialIconLink href={MOCK_DATA.contact.social.twitter} Icon={FaTwitter} label="Twitter" />
            <SocialIconLink href={MOCK_DATA.contact.social.github} Icon={FaGithub} label="GitHub" />
          </div>
        </div>
      </div>



      {/* Copyright */}
      <div className="mt-8 pt-6 text-center text-sm text-gray-500">
        &copy; {new Date().getFullYear()} Alabi Ibrahim Abimbola. All Rights Reserved.
      </div>

    </div>
  </footer>
);

export default Footer;
