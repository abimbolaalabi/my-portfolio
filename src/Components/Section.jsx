import React from "react";

const Section = ({ id, title, icon: Icon, children, className = "" }) => (
  <section id={id} className={`py-16 md:py-24 ${className}`}>
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {title && (
        <div className="text-center mb-12">
          <div className="inline-flex items-center text-indigo-600 dark:text-indigo-400 mb-2">
            {Icon && <Icon className="w-6 h-6 mr-2" />}
            <h2 className="text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white">
              {title}
            </h2>
          </div>
          <div className="w-16 h-1 bg-indigo-500 mx-auto rounded-full mt-2"></div>
        </div>
      )}
      {children}
    </div>
  </section>
);

export default Section;
