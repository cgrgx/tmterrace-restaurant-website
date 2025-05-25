import Link from 'next/link';
import { Facebook, Instagram, Twitter, MapPin, Phone, Mail, Clock } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <h3 className="text-2xl font-playfair font-bold mb-6">
              <span className="text-primary">TM</span> Terrace
            </h3>
            <p className="text-gray-300 mb-6">
              Experience exceptional rooftop dining in Bharatpur, with breathtaking views and a warm, family-friendly atmosphere.
            </p>
            <div className="flex space-x-4">
              <Link href="https://facebook.com" className="text-white hover:text-primary transition-colors">
                <Facebook className="w-5 h-5" />
              </Link>
              <Link href="https://instagram.com" className="text-white hover:text-primary transition-colors">
                <Instagram className="w-5 h-5" />
              </Link>
              <Link href="https://twitter.com" className="text-white hover:text-primary transition-colors">
                <Twitter className="w-5 h-5" />
              </Link>
            </div>
          </div>

          <div>
            <h4 className="text-xl font-playfair font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {['Home', 'Menu', 'About', 'Gallery', 'Contact'].map((item) => (
                <li key={item}>
                  <Link 
                    href={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
                    className="text-gray-300 hover:text-primary transition-colors"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xl font-playfair font-semibold mb-6">Opening Hours</h4>
            <ul className="space-y-3 text-gray-300">
              <li className="flex items-center">
                <Clock className="w-4 h-4 mr-2 text-primary" />
                <span>Monday - Friday: 11:00 AM - 10:00 PM</span>
              </li>
              <li className="flex items-center">
                <Clock className="w-4 h-4 mr-2 text-primary" />
                <span>Saturday - Sunday: 10:00 AM - 11:00 PM</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-xl font-playfair font-semibold mb-6">Contact</h4>
            <ul className="space-y-3 text-gray-300">
              <li className="flex items-start">
                <MapPin className="w-5 h-5 mr-3 text-primary shrink-0 mt-0.5" />
                <span>Top Floor, Landmark Building, Bharatpur, Nepal</span>
              </li>
              <li className="flex items-center">
                <Phone className="w-5 h-5 mr-3 text-primary shrink-0" />
                <span>+977 1234 5678</span>
              </li>
              <li className="flex items-center">
                <Mail className="w-5 h-5 mr-3 text-primary shrink-0" />
                <span>info@tmterrace.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>© {currentYear} TM Terrace Restaurant's. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}