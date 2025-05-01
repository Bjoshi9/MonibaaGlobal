// src/components/ContactCTA.jsx
import React from 'react';
import { Link } from 'react-router-dom';

function ContactCTA() {
  return (
    <section className="py-16 bg-blue-600">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-6">
            Ready to Transform Your Manufacturing Process?
          </h2>
          <p className="text-white/90 mb-8">
            Connect with us today to discuss how our expertise in transformer materials,
            engineered motors, and electrical components can benefit your business.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to="/contact"
              className="bg-white text-blue-600 px-8 py-3 rounded-md hover:bg-gray-100 transition-colors duration-300"
            >
              Contact Us
            </Link>
            <Link
              to="/services"
              className="border-2 border-white text-white px-8 py-3 rounded-md hover:bg-white hover:text-blue-600 transition-colors duration-300"
            >
              Explore Services
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactCTA;
