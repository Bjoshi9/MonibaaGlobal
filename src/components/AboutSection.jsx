// src/components/AboutSection.jsx
import React from 'react';

function AboutSection() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <img
              src="<tool_call>ImageGetter.get(search_term='modern manufacturing facility interior with workers', image_save_path='/workspace/react_template/public/assets/images/about-img.jpg', mode='search')</tool_call>"
              alt="Manufacturing Facility"
              className="rounded-lg shadow-xl"
            />
            <div className="absolute -bottom-6 -right-6 bg-blue-600 text-white p-6 rounded-lg hidden lg:block">
              <p className="text-4xl font-bold">28+</p>
              <p className="text-sm">Years of Excellence</p>
            </div>
          </div>

          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-navy-900">
              Excellence in Manufacturing Since 1996
            </h2>
            <p className="text-gray-600 leading-relaxed">
              Monibaa Global Inc. represents the North American extension of Sriram Industries,
              a leading manufacturer of motor stamping and transformer materials since 1996.
              Based in Canada, we bring together Indian manufacturing excellence with North
              American market demands.
            </p>
            <div className="grid grid-cols-2 gap-6">
              <div className="p-4 bg-white rounded-lg shadow-md">
                <h3 className="font-semibold text-navy-900">Quality Assurance</h3>
                <p className="text-sm text-gray-600">ISO 9001:2015 Certified</p>
              </div>
              <div className="p-4 bg-white rounded-lg shadow-md">
                <h3 className="font-semibold text-navy-900">Global Network</h3>
                <p className="text-sm text-gray-600">Worldwide Distribution</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
