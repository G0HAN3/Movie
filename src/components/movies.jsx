import React, { useState } from 'react';
import { movies } from '../data';

const Movies = ({ selectedCategory }) => {

    const filteredMovies =
    selectedCategory === 'All'
      ? movies
      : movies.filter((movie) => movie.category === selectedCategory);

  return (
    <div className="px-40 py-20 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-15">
      {filteredMovies.map((movie) => (
        <div
          key={movie.id}
          className="bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-xl transition-shadow duration-300 cursor-pointer"
        >
          <img
            src={movie.poster_path}
            alt={movie.title}
            className="w-full h-64 object-full"
          />
          <div className="p-3">
            <h2 className="text-base font-semibold text-gray-800 leading-tight">
              {movie.title}
            </h2>
            <p className="text-xs text-gray-500 mt-1">{movie.release_date}</p>
            <span className="inline-block mt-2 px-2 py-0.5 bg-gray-200 text-gray-700 text-[11px] font-medium rounded-full">
              {movie.category}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Movies;
