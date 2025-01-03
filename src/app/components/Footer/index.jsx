import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-100 border-t border-gray-200 text-center py-4">
      <p className="text-sm text-gray-600">
        &copy; {new Date().getFullYear()} Explore the city. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
