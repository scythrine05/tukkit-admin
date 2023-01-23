import React from "react";

export default function Button({ label, type, onClick }) {
  return (
    <button
      className="bg-[#18191a] flex justify-around items-center text-gray-900 dark:text-white p-2 my-4 rounded min-w-max"
      onClick={onClick ? onClick : null}
      type={type}
    >
      {label}
    </button>
  );
}
