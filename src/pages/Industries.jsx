// src/pages/Industries.jsx
function Industries() {
  const industries = [
    {
      name: 'OEM Manufacturing',
      description: 'Supporting original equipment manufacturers with quality components and solutions.',
      icon: '🏭'
    },
    {
      name: 'Energy Sector',
      description: 'Providing essential materials for power generation and distribution equipment.',
      icon: '⚡'
    },
    {
      name: 'Industrial Motors',
      description: 'Supplying critical components for industrial motor applications.',
      icon: '⚙️'
    },
    {
      name: 'Transformer Manufacturing',
      description: 'Delivering high-grade materials for transformer production.',
      icon: '🔌'
    },
    {
      name: 'Renewable Energy',
      description: 'Supporting green energy initiatives with specialized components.',
      icon: '🌱'
    },
    {
      name: 'Custom Applications',
      description: 'Tailored solutions for unique industrial requirements.',
      icon: '🛠️'
    }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <div className="bg-[#1a2942] text-white py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-8">Industries We Serve</h1>
          <p className="text-xl text-center max-w-3xl mx-auto">
            Delivering excellence across diverse industrial sectors
          </p>
        </div>
      </div>

      {/* Industries Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industries.map((industry) => (
              <div
                key={industry.name}
                className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-all"
              >
                <div className="text-4xl mb-4">{industry.icon}</div>
                <h3 className="text-xl font-bold text-[#1a2942] mb-4">{industry.name}</h3>
                <p className="text-[#445566]">{industry.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industry Expertise */}
      <section className="py-16 bg-[#e8f0fe]">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-[#1a2942] mb-8">Industry Expertise</h2>
            <p className="text-lg text-[#445566] mb-6">
              With over 28 years of combined experience through our parent company, we understand 
              the unique challenges and requirements of various industrial sectors. Our expertise 
              allows us to provide tailored solutions that meet the highest industry standards.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Industries;