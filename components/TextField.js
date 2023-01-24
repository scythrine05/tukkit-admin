import React from "react";

export default function TextField(props) {
  return (
    <div className="my-2">
      <label
        htmlFor={props.id}
        className={`block mb-2 text-base ${
          props.light ? "text-white" : "text-black"
        }`}
      >
        {props.label}
      </label>
      <input
        className={`p-2 rounded text-base focus:outline-none border-2 ${props.twclass}`}
        {...props}
        autocomplete="off"
      />
    </div>
  );
}

export function TextArea(props) {
  return (
    <div className="my-2">
      <label htmlFor={props.id} className="block mb-2 text-base  text-gray-900">
        {props.label}
      </label>
      <textarea
        rows="10"
        cols="40"
        className={`p-2 rounded text-base focus:outline-none resize-none border-2 ${props.twclass}`}
        {...props}
        autocomplete="off"
      />
    </div>
  );
}
