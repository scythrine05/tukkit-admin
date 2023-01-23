import React from "react";
import Link from "next/link";

//Icons
import { TRASH, EDIT } from "../utils/Icons";

//Utils
import { DeleteData } from "../utils/CRUD";

function CardComponent({ item, deleteData }) {
  const [modalShow, setModalShow] = React.useState(false);
  return (
    <div className="max-w-md mx-auto my-3 bg-white rounded shadow-md overflow-hidden sm:max-w-3xl">
      <div className="sm:flex">
        <div className="sm:shrink-0">
          <img
            className="h-48 w-full object-cover sm:h-full sm:w-48"
            src={item.display}
            alt="Tukkit image"
          />
        </div>
        <div className="p-8 sm:grow">
          <div className="block mt-1 text-md font-medium text-black">
            {item.title.length > 50
              ? item.title.substring(0, 50) + "..."
              : item.title}
          </div>
          <p className="mt-2 text-sm text-slate-500">
            {item.description.length > 50
              ? item.description.substring(0, 50) + "..."
              : item.description}
          </p>
          <p className="text-[#e76f51] font-semibold text-xs py-2">
            {item.source}
          </p>
        </div>
        <div className="my-3 flex items-center">
          <Link href={`editor/${item.Id}`}>
            <div className="mx-2 cursor-pointer p-2 rounder-full border">
              <EDIT />
            </div>
          </Link>
          <div
            className="mx-2 cursor-pointer p-2 rounder-full border"
            onClick={() => {
              deleteData(item.Id);
              DeleteData("posts", item.Id);
            }}
          >
            <TRASH />
          </div>
        </div>
      </div>
    </div>
  );
}

export default CardComponent;
