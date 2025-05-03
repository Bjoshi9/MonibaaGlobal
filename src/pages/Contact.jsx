// src/pages/Contact.jsx
import { useState } from 'react';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission - to be implemented
    console.log('Form submitted:', formData);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="bg-[#1a2942] pt-20">
      {/* Hero Section */}
      <div className="text-white py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-8">Contact Us</h1>
          <p className="text-xl text-center max-w-3xl mx-auto">
            Get in touch with our team for inquiries and support
          </p>
        </div>
      </div>

      {/* Contact Form & Map Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Form */}
            <div>
              <h2 className="text-2xl font-bold text-[#1a2942] mb-8">Send us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-[#445566] mb-2">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#ff6b2b]"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-[#445566] mb-2">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#ff6b2b]"
                  />
                </div>
                <div>
                  <label htmlFor="subject" className="block text-[#445566] mb-2">Subject</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#ff6b2b]"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-[#445566] mb-2">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="5"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#ff6b2b]"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="bg-[#ff6b2b] text-white px-8 py-3 rounded-md hover:bg-opacity-90 transition-all"
                >
                  Send Message
                </button>
              </form>
            </div>

            {/* Map and Contact Info */}
            <div>
              <h2 className="text-2xl font-bold text-[#1a2942] mb-8">Office Location</h2>
              <div className="mb-8">
                <iframe
                  title="Monibaa Global Office Location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2878.609651275306!2d-79.2558493!3d43.8069831!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89d4d78e66e86cc9%3A0x6a0a3823a3d143b8!2s10%20Milner%20Business%20Ct%2C%20Scarborough%2C%20ON%20M1B%203C6!5e0!3m2!1sen!2sca!4v1647882537685!5m2!1sen!2sca"
                  width="100%"
                  height="300"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  className="rounded-lg"
                ></iframe>
              </div>
              <div className="space-y-4 text-[#445566]">
                <p>
                  <strong className="text-[#1a2942]">Address:</strong><br />
                  Office #305, 10 Milner Business Ct #300<br />
                  Scarborough, ON, M1B 3C6
                </p>
                <p>
                  <strong className="text-[#1a2942]">Phone:</strong><br />
                  +1 (123) 456-7890
                </p>
                <p>
                  <strong className="text-[#1a2942]">Email:</strong><br />
                  info@monibaa.com
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Contact;