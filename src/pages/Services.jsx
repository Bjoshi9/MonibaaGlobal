// src/pages/Services.jsx
import { useState } from 'react';
import { SERVICES } from '../utils/constants';

function Services() {
  const [activeAccordion, setActiveAccordion] = useState(0);

  const serviceDetails = [
    {
      ...SERVICES[0],
      details: [
        'CRGO & CRNGO Laminations',
        'Transformer Core Assembly',
        'Custom Stampings',
        'Core Building Services',
        'Material Testing & Certification'
      ]
    },
    {
      ...SERVICES[1],
      details: [
        'Custom Motor Design',
        'Prototype Development',
        'Performance Testing',
        'Efficiency Optimization',
        'Technical Documentation'
      ]
    },
    {
      ...SERVICES[2],
      details: [
        'Rotor & Stator Components',
        'Shaft & Bearing Assemblies',
        'Commutators & Slip Rings',
        'Terminal Boxes',
        'Cooling Systems'
      ]
    }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <div className="bg-[#1a2942] text-white py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-8">Our Services</h1>
          <p className="text-xl text-center max-w-3xl mx-auto">
            Comprehensive solutions for your industrial needs
          </p>
        </div>
      </div>

      {/* Services Accordion */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {serviceDetails.map((service, index) => (
              <div key={service.title} className="mb-4">
                <button
                  className={`w-full p-6 text-left bg-white rounded-lg shadow-md hover:shadow-lg transition-all ${
                    activeAccordion === index ? 'ring-2 ring-[#ff6b2b]' : ''
                  }`}
                  onClick={() => setActiveAccordion(activeAccordion === index ? -1 : index)}
                >
                  <div className="flex items-center justify-between">
                    <h3 className="text-xl font-bold text-[#1a2942]">{service.title}</h3>
                    <span className={`transform transition-transform ${
                      activeAccordion === index ? 'rotate-180' : ''
                    }`}>
                      ▼
                    </span>
                  </div>
                </button>
                
                {activeAccordion === index && (
                  <div className="mt-2 p-6 bg-white rounded-lg shadow-md">
                    <p className="text-[#445566] mb-4">{service.description}</p>
                    <ul className="list-disc list-inside space-y-2 text-[#445566]">
                      {service.details.map((detail, i) => (
                        <li key={i}>{detail}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-[#e8f0fe]">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-[#1a2942] mb-6">Need a Custom Solution?</h2>
          <p className="text-[#445566] mb-8 max-w-2xl mx-auto">
            Our team of experts is ready to help you find the perfect solution for your specific requirements.
          </p>
          <button className="bg-[#ff6b2b] text-white px-8 py-3 rounded-md hover:bg-opacity-90 transition-all">
            Contact Us Today
          </button>
        </div>
      </section>
    </div>
  );
}

export default Services;