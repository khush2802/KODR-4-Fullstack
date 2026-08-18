import React from 'react'

function Navbar( { setIsCartOpen, cartCount } ) {
  return (
    <nav className="bg-[#101412] border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">

        {/* Logo */}
        <h1 className="text-2xl font-bold text-white">
          ECOM
        </h1>

        {/* Navigation */}
        <div className="flex items-center gap-8">
          <a
            href="#home"
            className="text-gray-300 hover:text-orange-500 transition"
            onClick={(event) => {
              event.preventDefault();
              setIsCartOpen(false);
            }}
          >
            Home
          </a>

          <a
            href="#cart"
            className="text-gray-300 hover:text-orange-500 transition"
               onClick={(event) => {
                 event.preventDefault();
                 setIsCartOpen(true);
               }}
          >
            Cart ({cartCount})
          </a>
        </div>

      </div>
    </nav>
  );
}

export default Navbar;

