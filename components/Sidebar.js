import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";

//Contexts
import { authContext } from "../contexts/Auth";

import { POST, FEEDBACK, EXIT } from "../utils/Icons";

const Sidebar = ({ children }) => {
  const router = useRouter();
  const { SignOut } = React.useContext(authContext);

  const menus = [
    { name: "News", link: "/", icon: POST },
    { name: "Feedbacks", link: "/feedbacks", icon: FEEDBACK },
  ];
  return (
    <section className="flex gap-6">
      <div
        className="bg-[#18191a] min-h-screen w-16 md:w-48
        duration-500 text-gray-100 px-4 fixed"
      >
        <div className="py-3 text-md"></div>
        <div className="mt-4 flex flex-col gap-4 font-md relative">
          {menus?.map((menu, i) => (
            <Link
              href={menu?.link}
              key={i}
              className={` ${
                menu?.margin && "mt-5"
              } group flex items-center  gap-3.5 p-2  ${
                (router.asPath === menu.link && "bg-gray-700") ||
                "hover:bg-gray-800"
              } rounded-md cursor-pointer`}
            >
              <div>{React.createElement(menu?.icon, { size: "20" })}</div>
              <h2 className="whitespace-pre duration-500 hidden md:block">
                {menu?.name}
              </h2>
            </Link>
          ))}
          <hr />
          <div
            className="mt-5 group flex items-center gap-3.5 p-2 hover:bg-gray-800 rounded-md cursor-pointer"
            onClick={SignOut}
          >
            <EXIT />
            <h2 className="whitespace-pre duration-500 hidden md:block">
              Signout
            </h2>
          </div>
        </div>
      </div>
      <div className="p-3 py-10 w-full ml-16 md:ml-48">{children}</div>
    </section>
  );
};

export default Sidebar;
