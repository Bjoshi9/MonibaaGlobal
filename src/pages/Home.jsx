// src/pages/Home.jsx
import { COMPANY_INFO, PRODUCTS } from '../utils/constants';

function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center bg-gradient-to-r from-[#1a2942] to-[#445566]">
        <div className="absolute inset-0 bg-black opacity-50" />
        <div className="relative z-10 text-center px-4">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 font-poppins">
            {COMPANY_INFO.name}
          </h1>
          <p className="text-xl md:text-2xl text-white font-light max-w-3xl mx-auto font-inter">
            {COMPANY_INFO.tagline}
          </p>
          <button className="mt-8 bg-[#ff6b2b] text-white px-8 py-3 rounded-md hover:bg-opacity-90 transition-all duration-300 font-medium" 
            onClick={() => window.location.href = '/about'}
          >
            Discover More
          </button>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-[#1a2942] mb-16">
            Our Products
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {PRODUCTS.map((service) => (
              <div
                key={service.title}
                className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
                onClick={() => window.location.href = `/products/${encodeURIComponent(service.title)}`}
              >
                <h3 className="text-xl font-bold text-[#1a2942] mb-4">{service.title}</h3>
                <p className="text-[#445566]">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-[#e8f0fe]">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1a2942] mb-8">
              Excellence Since 1996
            </h2>
            <p className="text-lg text-[#445566] mb-8">
              As the North American extension of Shreeram Industries, we bring {COMPANY_INFO.yearsFounded}+ years
              of manufacturing excellence to Canada. Our commitment to quality and innovation
              drives us to deliver exceptional solutions for our clients.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;