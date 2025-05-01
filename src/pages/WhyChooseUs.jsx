// src/pages/WhyChooseUs.jsx
function WhyChooseUs() {
  const advantages = [
    {
      title: '28+ Years Experience',
      description: 'Decades of manufacturing excellence through our parent company',
      stat: '28+',
      suffix: 'Years'
    },
    {
      title: 'Quality Assurance',
      description: 'Rigorous quality control processes and certifications',
      stat: '100%',
      suffix: 'Commitment'
    },
    {
      title: 'Global Network',
      description: 'Strong supply chain across India and North America',
      stat: '2',
      suffix: 'Continents'
    },
    {
      title: 'Custom Solutions',
      description: 'Tailored approaches to meet specific requirements',
      stat: '500+',
      suffix: 'Projects'
    }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <div className="bg-[#1a2942] text-white py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-8">Why Choose Us</h1>
          <p className="text-xl text-center max-w-3xl mx-auto">
            Excellence, Experience, and Expertise at Your Service
          </p>
        </div>
      </div>

      {/* Stats Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {advantages.map((advantage) => (
              <div
                key={advantage.title}
                className="bg-white p-8 rounded-lg shadow-lg text-center"
              >
                <div className="text-4xl font-bold text-[#ff6b2b] mb-2">
                  {advantage.stat}
                  <span className="text-lg text-[#445566] ml-1">{advantage.suffix}</span>
                </div>
                <h3 className="text-xl font-bold text-[#1a2942] mb-4">{advantage.title}</h3>
                <p className="text-[#445566]">{advantage.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Benefits */}
      <section className="py-16 bg-[#e8f0fe]">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-[#1a2942] text-center mb-12">Our Advantages</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-[#1a2942] mb-4">Manufacturing Excellence</h3>
              <p className="text-[#445566]">
                Backed by Sriram Industries' proven track record of manufacturing excellence 
                and quality control processes.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-[#1a2942] mb-4">Global Sourcing</h3>
              <p className="text-[#445566]">
                Direct access to high-quality materials and components through our established 
                network in India.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-[#1a2942] mb-4">Local Presence</h3>
              <p className="text-[#445566]">
                Canadian office ensuring quick response times and understanding of local market needs.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-[#1a2942] mb-4">Technical Expertise</h3>
              <p className="text-[#445566]">
                Skilled team with deep understanding of electrical and mechanical engineering.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default WhyChooseUs;