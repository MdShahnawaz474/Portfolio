import React from 'react'

const Navbar = () => {
  return (
     <nav
            className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
                "bg-gray-900/95" : 
            } backdrop-blur-lg border-b ${
              isDarkMode ? "border-gray-800" : "border-gray-200"
            } shadow-lg`}
          >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex justify-between items-center py-4">
                <div className="flex items-center">
                  <div className="relative">
                    <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-400 via-purple-500 to-cyan-400 bg-clip-text text-transparent">
                      Md Shahnawaz
                    </h1>
                    <div className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-blue-400 to-transparent"></div>
                  </div>
                </div>
    
                {/* Desktop Navigation */}
                <div className="hidden md:flex items-center space-x-8">
                  {[
                    "hero",
                    "about",
                    "skills",
                    "experience",
                    "projects",
                    "education",
                    "contact",
                  ].map((item) => (
                    <button
                      key={item}
                      onClick={() => scrollToSection(item)}
                      className={`relative capitalize transition-all duration-300 hover:text-blue-400 px-3 py-2 ${
                        activeSection === item ? "text-blue-400 font-medium" : ""
                      }`}
                    >
                      {item === "hero" ? "Home" : item}
                      {activeSection === item && (
                        <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-blue-400 to-purple-600 rounded-full"></div>
                      )}
                    </button>
                  ))}
                  <button
                    onClick={() => setIsDarkMode(!isDarkMode)}
                    className="p-2 rounded-full transition-all duration-300 hover:bg-gray-200 dark:hover:bg-gray-700 hover:scale-110"
                  >
                    {isDarkMode ? "☀️" : "🌙"}
                  </button>
                </div>
    
                {/* Mobile menu button */}
                <div className="md:hidden flex items-center space-x-2">
                  <button
                    onClick={() => setIsDarkMode(!isDarkMode)}
                    className="p-2 rounded-full transition-all duration-300 hover:bg-gray-200 dark:hover:bg-gray-700"
                  >
                    {isDarkMode ? "☀️" : "🌙"}
                  </button>
                  <button
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    className="text-2xl p-2 hover:scale-110 transition-transform"
                  >
                    {isMenuOpen ? <X /> : <Menu />}
                  </button>
                </div>
              </div>
    
              {/* Mobile Navigation */}
              {isMenuOpen && (
                <div className="md:hidden pb-4 animate-slide-down">
                  <div className="flex flex-col space-y-2">
                    {[
                      "hero",
                      "about",
                      "skills",
                      "experience",
                      "projects",
                      "education",
                      "contact",
                    ].map((item) => (
                      <button
                        key={item}
                        onClick={() => scrollToSection(item)}
                        className={`text-left p-3 capitalize transition-all duration-300 hover:text-blue-400 hover:bg-gray-800/50 rounded-lg ${
                          activeSection === item
                            ? "text-blue-400 font-medium bg-gray-800/30"
                            : ""
                        }`}
                      >
                        {item === "hero" ? "Home" : item}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </nav>
  )

}

export default Navbar