import React from "react";

//Icons
import { ERROR, CHECK } from "../utils/Icons";

//Danger

export function Danger({ msg }) {
  return (
    <div className="bg-red-400 flex items-center p-2 text-gray-900 dark:text-white rounded text-sm">
      <ERROR /> <span className="mx-1">{msg}</span>
    </div>
  );
}
