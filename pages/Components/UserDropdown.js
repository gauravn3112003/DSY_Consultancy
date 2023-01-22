import React, { useState } from "react";
import Link from "next/link";
const UserDropdown = () => {
  const [userOpen, setUserOpen] = useState("hidden");
  const toggleUser = () => {
    if (userOpen == "hidden") {
      setUserOpen("block");
    } else {
      setUserOpen("hidden");
    }
  };

  const items = [
    {
      Name: "Account",
      Location: "/",
    },
    {
      Name: "Support",
      Location: "/",
    },
    {
      Name: "License",
      Location: "/",
    },
  ];

  const NavItem = (props) => {
    return (
      <Link href={props.location}>
        <a
          className="text-gray-700 navItem block px-4 py-2 text-sm"
          role="menuitem"
          tabIndex="-1"
          id="menu-item-0"
        >
          {props.name}
        </a>
      </Link>
    );
  };

  return (
    <>
      <section className="relative">
        <div
          id="avatarButton"
          onClick={toggleUser}
          type="button"
          className="h-8 w-8 rounded-full flex items-center justify-center font-semibold  sm:h-10 sm:w-10 bg-gray-300 cursor-pointer mr-1 sm:mr-0"
          // src="/img/logo.svg"
          alt="User dropdown"
        >
          GN
        </div>

        <div
          className={`absolute ${userOpen} right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none`}
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="menu-button"
          tabIndex="-1"
        >
          <div className="py-1" role="none">
            {items.map((item, index) => {
              return (
                <NavItem
                  location={item.Location}
                  name={item.Name}
                  key={index}
                />
              );
            })}

            <form method="POST" action="#" role="none">
              <button
                type="submit"
                className="text-gray-700 block navItem w-full px-4 py-2 text-left text-sm"
              >
                Sign out
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default UserDropdown;