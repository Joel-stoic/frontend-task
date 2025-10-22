import { useState } from "react";
import { Link } from "react-router-dom";
import { FiPhone, FiLogIn, FiChevronDown, FiMenu, FiX } from "react-icons/fi";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="bg-gray-50 shadow-sm border-b z-50 py-6 fixed top-0 w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex items-center space-x-2">
            <img src="src/assets/logo.svg" alt="Tebra Logo" className="h-8 w-auto" />
          </div>


          <div className="hidden lg:flex space-x-6 items-center">
            <Dropdown label="Products" to="/products" />
            <Link
              to="/pricing" r
              className="text-teal-900 hover:underline px-3 py-2 rounded-lg hover:bg-[#FCF5E5] hover:rounded-full transition duration-150"
            >
              Pricing
            </Link>
            <Dropdown label="Resources" badge="New" to="/resources" />
            <Dropdown label="About" to="/about" />
          </div>

          <div className="hidden lg:flex lg:flex-col items-center space-x-6">
            <div className="flex gap-6 items-center">
              <Link
                to="/signin"
                className="text-sm text-teal-900 flex items-center hover:underline underline-offset-4"
              >
                Sign In <FiLogIn className="ml-1" />
              </Link>

              <Link
                to="/help"
                className="text-sm text-teal-900 hover:underline underline-offset-4"
              >
                Help Center
              </Link>

              <div className="text-sm text-teal-900 flex items-center gap-2 hover:underline underline-offset-4">
                <span>Call sales</span>
                <FiPhone />
                <span>(866) 938-3272</span>
              </div>
            </div>

            <div className="flex space-x-3 ml-4 mt-3">
              <button className="border border-teal-900 text-teal-900 px-8 py-4 rounded-full hover:bg-teal-50 text-sm transition">
                Take a tour
              </button>
              <button className="bg-[#FFAB6E] text-black px-8 py-4  hover:bg-[#E89090]/70 text-sm transition rounded-full">
                Get a demo
              </button>
            </div>
          </div>

          <div className="lg:hidden flex items-center space-x-2 gap-4">
            <button className="border border-teal-900 text-teal-900 px-2 py-2 rounded-full text-sm ">
              Take a tour
            </button>
            <button className="bg-[#FFAB6E]  px-2 py-2 rounded-full text-sm">
              Get a demo
            </button>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-teal-900 text-2xl focus:outline-none"
              aria-label="Toggle Menu"
            >
              {isMobileMenuOpen ? <FiX /> : <FiMenu />}
            </button>
          </div>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="lg:hidden px-4 py-4 bg-white shadow-md space-y-3 transition-all duration-300">
          <Link to="/products" className="block text-teal-900">Products</Link>
          <Link to="/pricing" className="block text-teal-900">Pricing</Link>
          <Link to="/resources" className="block text-teal-900">Resources</Link>
          <Link to="/about" className="block text-teal-900">About</Link>
          <Link to="/signin" className="block text-teal-900">Sign In</Link>
          <Link to="/help" className="block text-teal-900">Help Center</Link>
          <a href="#" className="block text-teal-900">(866) 938-3272</a>
        </div>
      )}
    </nav>
  );
}

function Dropdown({ label, badge, to }) {
  return (
    <Link
      to={to}
      className="relative flex items-center space-x-1 group cursor-pointer px-3 py-2 rounded-lg hover:bg-[#FCF5E5] hover:rounded-full transition duration-150"
    >
      <span className="text-teal-900">{label}</span>
      {badge && (
        <span className="text-xs bg-gray-200 text-gray-700 rounded-full px-2 py-0.5">{badge}</span>
      )}
      <FiChevronDown className="text-teal-900" />
    </Link>
  );
}
