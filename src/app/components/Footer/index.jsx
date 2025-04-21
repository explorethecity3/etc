import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#122620] border-t border-[#b68d40] text-center py-4">
      <p className="text-sm text-[#b68d40]">
        &copy; {new Date().getFullYear()} Explore the city. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
