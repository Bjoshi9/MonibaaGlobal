// src/utils/constants.js
import { productsData } from '../utils/ProductsData';

export const COLORS = {
  navy: '#1a2942',
  steel: '#445566',
  accent: '#ff6b2b',
  lightBlue: '#e8f0fe',
};

export const NAVIGATION = [
  { name: 'Home', path: '/' },
  { name: 'About Us', path: '/about' },
  { name: 'Products', path: '/products' },
  { name: 'Why Us', path: '/why-us' },
  { name: 'Contact', path: '/contact' },
];

export const COMPANY_INFO = {
  name: 'Monibaa Global Inc.',
  tagline: 'Connecting Indian Manufacturing Excellence with Canadian Industry',
  address: 'Office #305, 10 Milner Business Ct #300, Scarborough, ON, M1B 3C6',
  phone: ['+1 (848) 336-4080', '+1 (647) 930-0442'],
  email: 'info@monibaaglobal.com',
  yearsFounded: 28,
};

export const PRODUCTS = 
  Object.keys(productsData).map((category) => ({
    title: category,
    description: productsData[category].description,
  }));

export const SERVICES = [
  {
    title: 'Transformer Materials & Laminations',
    description: 'High-quality materials for transformer manufacturing',
    icon: 'bolt',
  },
  {
    title: 'Customized Engineered Motors',
    description: 'Tailored solutions for specific industrial needs',
    icon: 'cog',
  },
  {
    title: 'Electrical Motor Parts & Components',
    description: 'Premium components for motor applications',
    icon: 'wrench',
  },
];