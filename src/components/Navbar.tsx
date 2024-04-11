import React from "react";
import Logo from "./Logo";
import Link from "next/link";
import { FiMenu } from "react-icons/fi";

function Navbar() {
  const navigation = [
    {
      title: "Home",
      href: "/",
    },
    {
      title: "Projects",
      href: "/projects",
    },
    {
      title: "About",
      href: "/about",
    },
    {
      title: "Admin",
      href: "/admin",
    },
  ];
  return (
    <div className="navbar-container">
      <div className="navbar-inner">
        <Logo title="Collyn" className="head" />
        <div className="navbar-menu">
          {navigation.map((item) => (
            <Link
              key={item?.title}
              href={item?.href}
              className="navbar-menu-item"
            >
              {item?.title}
              <span className="item-underline" />
            </Link>
          ))}
        </div>
        <div className="mobile-menu">
          <FiMenu />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
