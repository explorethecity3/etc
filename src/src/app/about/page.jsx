import React from "react";

const About = () => {
  return (
    <main className="p-6 bg-gray-100 min-h-screen">
      <section className="max-w-4xl mx-auto bg-white shadow-md rounded-lg p-8">
        <h1 className="text-4xl font-bold text-gray-800 mb-6">About Us</h1>
        <p className="text-gray-600 leading-relaxed mb-4">
          Welcome to our website! We are dedicated to providing top-notch services
          to our customers. Our mission is to deliver high-quality products and
          exceptional customer service.
        </p>

        <div className="mt-8">
          <h2 className="text-2xl font-semibold text-gray-700 mb-3">Our Mission</h2>
          <p className="text-gray-600 leading-relaxed">
            To create value for our customers and contribute to a better world
            through innovation and commitment.
          </p>
        </div>

        <div className="mt-8">
          <h2 className="text-2xl font-semibold text-gray-700 mb-3">Our Team</h2>
          <p className="text-gray-600 leading-relaxed">
            Our team consists of passionate professionals who are committed to
            excellence in every aspect of our business.
          </p>
        </div>
      </section>
    </main>
  );
};

export default About;
