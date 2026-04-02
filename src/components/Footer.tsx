import { Link } from 'react-router-dom'

export const Footer = () => (
  <footer className="border-t border-gray-200 bg-white py-8 px-4 mt-12">
    <div className="max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="flex items-center gap-2">
          <span className="text-xl font-bold text-fastport-primary">FastPort™</span>
        </div>

        <div className="flex items-center gap-6 text-sm text-gray-600">
          <a href="https://ferncliffpartners.com/terms" target="_blank" rel="noopener noreferrer" className="hover:text-fastport-primary transition-colors">Terms of Service</a>
          <a href="https://ferncliffpartners.com/privacy" target="_blank" rel="noopener noreferrer" className="hover:text-gray-900 transition-colors">Privacy Policy</a>
          <a href="https://ferncliffpartners.com/contact" target="_blank" rel="noopener noreferrer" className="hover:text-gray-900 transition-colors">Contact</a>
        </div>
      </div>

      <div className="text-center text-sm text-gray-600 mt-6">
        Explore all Ferncliff products →{" "}
        <a href="https://ferncliffpartners.com/projects" target="_blank" rel="noopener noreferrer" className="text-fastport-primary hover:underline">
          ferncliffpartners.com/projects
        </a>
      </div>

      <div className="text-center text-xs text-gray-500 mt-4">
        © 2026 FastPortID. A Ferncliff Partners product.
      </div>
    </div>
  </footer>
);

export default Footer;
