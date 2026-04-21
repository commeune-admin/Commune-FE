import { Outlet, Link, useLocation } from "react-router";
import { Heart, Menu, X, Shield } from "lucide-react";
import { useState } from "react";

export function Layout() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const isAdminPage = location.pathname.startsWith("/admin");

  if (isAdminPage) {
    return <Outlet />;
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-white">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-sm border-b border-purple-100 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-2">
              <div className="relative">
                <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full"></div>
                <div className="w-10 h-10 bg-gradient-to-br from-pink-400 to-purple-400 rounded-full absolute top-0 left-2 opacity-60"></div>
                <div className="w-10 h-10 bg-gradient-to-br from-purple-400 to-pink-300 rounded-full absolute top-0 left-4 opacity-40"></div>
              </div>
              <span className="text-2xl font-semibold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent ml-3">
                Commune
              </span>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-8">
              <Link
                to="/topics"
                className="text-gray-700 hover:text-purple-600 transition-colors"
              >
                Health Topics
              </Link>
              <Link
                to="/topics"
                className="text-gray-700 hover:text-purple-600 transition-colors"
              >
                Community
              </Link>
              <Link
                to="/admin"
                className="text-gray-700 hover:text-purple-600 transition-colors"
              >
                Admin
              </Link>
            </nav>

            {/* Mobile menu button */}
            <button
              className="md:hidden text-gray-700"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>

          {/* Mobile Navigation */}
          {mobileMenuOpen && (
            <nav className="md:hidden py-4 border-t border-purple-100">
              <div className="flex flex-col gap-4">
                <Link
                  to="/topics"
                  className="text-gray-700 hover:text-purple-600 transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Health Topics
                </Link>
                <Link
                  to="/topics"
                  className="text-gray-700 hover:text-purple-600 transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Community
                </Link>
                <Link
                  to="/admin"
                  className="text-gray-700 hover:text-purple-600 transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Admin
                </Link>
              </div>
            </nav>
          )}
        </div>
      </header>

      {/* Main Content */}
      <main>
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-purple-100 mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="bg-gradient-to-br from-purple-500 to-pink-500 p-2 rounded-xl">
                  <Heart className="w-5 h-5 text-white" fill="white" />
                </div>
                <span className="text-xl font-semibold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                  Commune
                </span>
              </div>
              <p className="text-gray-600 text-sm">
                A safe space for women's health support and verified medical
                information.
              </p>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Health Topics</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link
                    to="/topics/fibroids"
                    className="text-gray-600 hover:text-purple-600 transition-colors"
                  >
                    Fibroids
                  </Link>
                </li>
                <li>
                  <Link
                    to="/topics/endometriosis"
                    className="text-gray-600 hover:text-purple-600 transition-colors"
                  >
                    Endometriosis
                  </Link>
                </li>
                <li>
                  <Link
                    to="/topics/periods"
                    className="text-gray-600 hover:text-purple-600 transition-colors"
                  >
                    Periods
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Trust & Safety</h3>
              <div className="flex items-start gap-2 text-sm text-gray-600">
                <Shield className="w-4 h-4 text-purple-600 mt-0.5 flex-shrink-0" />
                <p>
                  All articles are written or reviewed by medical professionals
                  and backed by research.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-8 pt-8 border-t border-purple-100 text-center text-sm text-gray-500">
            <p>
              © 2026 Commune. All rights reserved. This platform is for
              informational purposes only and does not replace professional
              medical advice.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}