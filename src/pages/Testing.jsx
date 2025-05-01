// src/pages/Testing.jsx
function Testing() {
  const equipment = [
    {
      category: 'Electrical Testing',
      items: [
        {
          name: 'Power Analyzer',
          description: 'High-precision power measurement and analysis',
          capabilities: ['Voltage Analysis', 'Current Measurement', 'Power Factor Testing']
        },
        {
          name: 'Core Loss Tester',
          description: 'Advanced core loss measurement system',
          capabilities: ['Core Loss Measurement', 'Magnetic Properties Analysis', 'Quality Verification']
        },
        {
          name: 'Insulation Tester',
          description: 'Comprehensive insulation testing equipment',
          capabilities: ['Resistance Measurement', 'Dielectric Testing', 'Breakdown Voltage Testing']
        }
      ]
    },
    {
      category: 'Mechanical Testing',
      items: [
        {
          name: 'Dimensional Inspection',
          description: 'Precision measurement tools for quality control',
          capabilities: ['Size Verification', 'Tolerance Checking', 'Surface Finish Analysis']
        },
        {
          name: 'Material Testing',
          description: 'Comprehensive material property analysis',
          capabilities: ['Hardness Testing', 'Tensile Strength', 'Material Composition']
        }
      ]
    }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <div className="bg-[#1a2942] text-white py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-8">Testing & Equipment</h1>
          <p className="text-xl text-center max-w-3xl mx-auto">
            State-of-the-art testing facilities ensuring highest quality standards
          </p>
        </div>
      </div>

      {/* Equipment Catalog */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          {equipment.map((category) => (
            <div key={category.category} className="mb-12">
              <h2 className="text-3xl font-bold text-[#1a2942] mb-8">{category.category}</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {category.items.map((item) => (
                  <div
                    key={item.name}
                    className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all"
                  >
                    <h3 className="text-xl font-bold text-[#1a2942] mb-4">{item.name}</h3>
                    <p className="text-[#445566] mb-4">{item.description}</p>
                    <ul className="list-disc list-inside text-[#445566]">
                      {item.capabilities.map((capability, index) => (
                        <li key={index}>{capability}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Quality Assurance */}
      <section className="py-16 bg-[#e8f0fe]">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-[#1a2942] mb-8">Quality Assurance</h2>
            <p className="text-lg text-[#445566] mb-6">
              Our state-of-the-art testing facilities and rigorous quality control processes 
              ensure that every product meets or exceeds industry standards. We maintain 
              detailed documentation and provide comprehensive test reports for complete 
              transparency.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Testing;