// src/components/TestimonialsSection.jsx
import React, { useState, useEffect } from 'react';

function TestimonialsSection() {
  const testimonials = [
    {
      text: "Monibaa Global has consistently delivered high-quality transformer materials that meet our exact specifications. Their attention to detail and commitment to excellence is outstanding.",
      author: "John D.",
      position: "Procurement Manager",
      company: "Leading OEM Manufacturer"
    },
    {
      text: "Their expertise in customized engineered motors has helped us optimize our production processes. The team's technical knowledge and customer service are exceptional.",
      author: "Sarah M.",
      position: "Technical Director",
      company: "Energy Solutions Provider"
    },
    {
      text: "We've been impressed with the quality and reliability of Monibaa's electrical components. Their global sourcing capabilities and quick turnaround times have made them a valuable partner.",
      author: "Michael R.",
      position: "Operations Head",
      company: "Industrial Equipment Manufacturer"
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-navy-900 text-center mb-12">
          What Our Clients Say
        </h2>

        <div className="relative max-w-4xl mx-auto">
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="w-full flex-shrink-0 px-4"
                >
                  <div className="bg-white p-8 rounded-lg shadow-lg">
                    <div className="mb-6">
                      {/* Quote icon */}
                      <svg
                        className="w-8 h-8 text-blue-600 mb-4"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                      </svg>
                      <p className="text-gray-600 italic mb-4">{testimonial.text}</p>
                      <div className="flex items-center">
                        <div>
                          <p className="font-semibold text-navy-900">{testimonial.author}</p>
                          <p className="text-sm text-gray-500">{testimonial.position}</p>
                          <p className="text-sm text-gray-500">{testimonial.company}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation dots */}
          <div className="flex justify-center space-x-2 mt-6">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                  currentIndex === index ? 'bg-blue-600' : 'bg-gray-300'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default TestimonialsSection;
