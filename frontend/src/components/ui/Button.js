// src/components/ui/Button.js
import React from 'react';

export function Button({ children, className, ...props }) {
  return (
    <button
      className={`bg-black text-white py-2 px-4 rounded hover:bg-gray-800 ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
