// src/components/Footer.jsx
import { Link } from 'react-router-dom';
import { NAVIGATION, COMPANY_INFO } from '../utils/constants';

function Footer() {
  return (
    <footer className="bg-[#1a2942] text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">Monibaa Global Inc.</h3>
            <p className="text-gray-300 mb-2">{COMPANY_INFO.address}</p>
            <p className="text-gray-300 mb-2">Phone:&nbsp;
              {COMPANY_INFO.phone.map((phone, index) => (
                    <span key={index}>
                      <a href={`tel:${phone}`} className="text-gray-300 hover:text-white transition-colors">
                      {index === 0 ? phone : <span>&emsp;&emsp;&emsp;&nbsp;&nbsp;{phone}</span>}
                      {index < COMPANY_INFO.phone.length - 1 && <br />}
                      </a>
                    </span>
                  ))}
            </p>
            <p className="text-gray-300">Email:&nbsp;
              <a href={`mailto:${COMPANY_INFO.email}`} className="text-gray-300 hover:text-white transition-colors">
                {COMPANY_INFO.email}
              </a>
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {NAVIGATION.slice(0, 3).map((item) => (
                <li key={item.name}>
                  <Link to={item.path} className="text-gray-300 hover:text-white transition-colors">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* More Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">More</h3>
            <ul className="space-y-2">
              {NAVIGATION.slice(3).map((item) => (
                <li key={item.name}>
                  <Link to={item.path} className="text-gray-300 hover:text-white transition-colors">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h3 className="text-xl font-bold mb-4">Connect With Us</h3>
            <p className="text-gray-300 mb-4">
              Follow us on social media for updates and industry insights.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-white">
                <span className="sr-only">LinkedIn</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-300">
            © {new Date().getFullYear()} Monibaa Global Inc. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;