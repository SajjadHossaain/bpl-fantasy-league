import React from "react";
import dollerImg from "../../assets/currency.png";
import logo from "../../assets/logo.png";
import Link from "./Link";

const navItems = [
  {
    id: 1,
    name: "Home",
    path: "/",
  },
  {
    id: 2,
    name: "Fixture",
    path: "/fixture",
  },
  {
    id: 3,
    name: "Teams",
    path: "/teams",
  },
  {
    id: 4,
    name: "Schedule",
    path: "/schedule",
  },
];

const Navbar = ({ coin }) => {
  const links = navItems.map((route) => <Link route={route}></Link>);
  return (
    <div className="container gap-2 justify-between mx-auto navbar bg-base-100 shadow-sm overflow-hidden">
      <div className="w-20 h-20 shrink-0 rounded-2xl">
        <img src={logo} alt="" className="w-full h-full object-contain" />
      </div>
      <div className="flex items-center gap-2">
        <div className="mr-10">
          <ul className=" flex gap-2">{links}</ul>
        </div>
        <div className="flex-none">
          <button className="btn flex justify-between items-center gap-2">
            {coin} Coins
            <img src={dollerImg} alt="" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
