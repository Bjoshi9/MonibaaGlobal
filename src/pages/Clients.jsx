// src/pages/Clients.jsx
function Clients() {
  const testimonials = [
    {
      quote: "Monibaa Global's commitment to quality and timely delivery has made them our preferred supplier for transformer components.",
      author: "John D.",
      position: "Procurement Manager",
      company: "Leading OEM Manufacturer"
    },
    {
      quote: "Their technical expertise and ability to customize solutions according to our needs sets them apart from other suppliers.",
      author: "Sarah M.",
      position: "Technical Director",
      company: "Energy Solutions Provider"
    },
    {
      quote: "The quality of materials and support services provided by Monibaa Global has consistently exceeded our expectations.",
      author: "Michael R.",
      position: "Operations Head",
      company: "Industrial Motors Manufacturing"
    }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <div className="bg-[#1a2942] text-white py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-8">Clients & Partners</h1>
          <p className="text-xl text-center max-w-3xl mx-auto">
            Building strong relationships through excellence and trust
          </p>
        </div>
      </div>

      {/* Testimonials Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-[#1a2942] text-center mb-12">Client Testimonials</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-all"
              >
                <div className="text-4xl text-[#ff6b2b] mb-4">"</div>
                <p className="text-[#445566] mb-6 italic">{testimonial.quote}</p>
                <div>
                  <p className="font-bold text-[#1a2942]">{testimonial.author}</p>
                  <p className="text-[#445566]">{testimonial.position}</p>
                  <p className="text-sm text-[#445566]">{testimonial.company}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* NDA Policy */}
      <section className="py-16 bg-[#e8f0fe]">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-[#1a2942] text-center mb-8">Our NDA Policy</h2>
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <p className="text-[#445566] mb-6">
                At Monibaa Global Inc., we understand the importance of confidentiality in business 
                relationships. We maintain strict non-disclosure agreements with all our clients to 
                protect their intellectual property and business information.
              </p>
              <p className="text-[#445566] mb-6">
                Our commitment to confidentiality extends to:
              </p>
              <ul className="list-disc list-inside text-[#445566] space-y-2 mb-6">
                <li>Product specifications and designs</li>
                <li>Manufacturing processes and techniques</li>
                <li>Business strategies and plans</li>
                <li>Pricing and commercial terms</li>
              </ul>
              <p className="text-[#445566]">
                For client references and detailed case studies, please contact our team directly.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-[#1a2942] mb-6">Ready to Partner With Us?</h2>
          <p className="text-[#445566] mb-8 max-w-2xl mx-auto">
            Join our growing list of satisfied clients and experience the Monibaa Global difference.
          </p>
          <button className="bg-[#ff6b2b] text-white px-8 py-3 rounded-md hover:bg-opacity-90 transition-all">
            Request Client References
          </button>
        </div>
      </section>
    </div>
  );
}

export default Clients;