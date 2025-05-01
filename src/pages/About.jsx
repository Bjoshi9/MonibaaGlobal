// src/pages/About.jsx
function About() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <div className="bg-[#1a2942] text-white py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-8">About Monibaa Global Inc.</h1>
          <p className="text-xl text-center max-w-3xl mx-auto">
            Your trusted partner in industrial excellence, bridging Indian manufacturing expertise with North American markets.
          </p>
        </div>
      </div>

      {/* Company History */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-[#1a2942] mb-8">Our Story</h2>
            <p className="text-lg text-[#445566] mb-6">
              Founded in 2024, Monibaa Global Inc. represents the North American extension of Sriram Industries, 
              a distinguished leader in motor stamping and transformer materials since 1996. Our establishment 
              in Canada marks a significant milestone in bringing world-class manufacturing capabilities to 
              the North American market.
            </p>
            <p className="text-lg text-[#445566] mb-6">
              Building on Sriram Industries' 28+ years of manufacturing excellence, we combine deep industry 
              expertise with local market understanding to deliver exceptional value to our clients.
            </p>
          </div>
        </div>
      </section>

      {/* Founder Profile */}
      <section className="py-16 bg-[#e8f0fe]">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-[#1a2942] mb-8">Leadership</h2>
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <div className="flex flex-col md:flex-row gap-8">
                <div className="md:w-1/3">
                  <div className="aspect-square bg-gray-200 rounded-lg"></div>
                </div>
                <div className="md:w-2/3">
                  <h3 className="text-2xl font-bold text-[#1a2942] mb-4">Bantu Patel</h3>
                  <p className="text-[#445566] mb-4">Founder & CEO</p>
                  <p className="text-[#445566]">
                    With over two decades of experience in industrial manufacturing, Bantu Patel 
                    leads Monibaa Global Inc. with a vision to bridge the gap between Indian 
                    manufacturing excellence and North American industry needs.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h2 className="text-2xl font-bold text-[#1a2942] mb-6">Our Mission</h2>
                <p className="text-[#445566]">
                  To deliver exceptional value through high-quality industrial components and 
                  solutions, fostering innovation and sustainable growth in North American manufacturing.
                </p>
              </div>
              <div>
                <h2 className="text-2xl font-bold text-[#1a2942] mb-6">Our Vision</h2>
                <p className="text-[#445566]">
                  To become the premier bridge between Indian manufacturing excellence and North 
                  American industrial needs, setting new standards in quality and service.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;