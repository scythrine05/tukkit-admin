import React from "react";

//Icons
import { TRASH, STAR } from "../utils/Icons";

export default function ListItem({ item }) {
  return (
    <div>
      <div className="p-4 flex flex-col md:flex-row justify-between items-start md:items-center">
        <div className="whitespace-wrap">
          {item.message}
          <div className="flex items-center my-2">
            <p className="px-2 font-medium text-sm">{item.rating}</p>
            <STAR />
          </div>
        </div>
      </div>
    </div>
  );
}
