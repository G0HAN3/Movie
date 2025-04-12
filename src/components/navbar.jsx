import React from 'react';

const categories = [
  'All', 'Action', 'Thriller', 'Animation', 'Horror', 'Drama', 'Sci-Fi'
];

const Navbar = ({setCategory}) => {


  return (
    <nav className="sticky top-0 z-50 bg-white shadow-sm w-full">
      <div className="flex justify-center items-center gap-20 px-6 py-3 overflow-x-auto w-full">
        {categories.map((category, idx) => (
          <button
            key={idx}
            onClick={() => setCategory(category)}
            className="px-4 py-2 rounded-full bg-gray-100 hover:shadow-lg hover:text-white transition-all duration-300 whitespace-nowrap"
          >
            {category}
          </button>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
