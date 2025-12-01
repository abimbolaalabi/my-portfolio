// src/components/SocialIconLink.jsx

import React from "react";

const SocialIconLink = ({ href, Icon, label }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    aria-label={label}
    style={{ display: href ? "flex" : "none" }}
    className="w-10 h-10 items-center justify-center bg-gray-200 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full hover:bg-indigo-500 hover:text-white dark:hover:bg-indigo-600 transition duration-300 shadow-lg hover:shadow-indigo-500/50"
  >
    <Icon size={20} />
  </a>
);

export default SocialIconLink;
