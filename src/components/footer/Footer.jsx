import React from "react";
import footerLogo from '../../assets/logo-footer.png'
import Link from "../Navbar/Link";
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
const Footer = () => {
    const links = navItems.map((route) => <Link route={route}></Link>);
  return (
    <footer className="bg-[#06091A]">
      <div className="container mx-auto pt-[240px]">
        <img src={footerLogo} alt="" className="mx-auto" />
        <div className="flex flex-col sm:flex-row justify-between py-16 gap-5 px-10">
          <div className="flex-1 space-y-3">
            <h2 className="font-bold text-white">About Us</h2>
            <p className="line-clamp-3 text-[#FFFFFF60]">
              We are a passionate team dedicated to providing the best services
              to our customers.
            </p>
          </div>
          <div className="flex-1 space-y-3">
            <h2 className="font-bold text-white">Quick Links</h2>
            <ul className="pl-2">{links}</ul>
          </div>
          <div className="flex-1 space-y-3">
            <h2 className="font-bold text-white">Subscribe</h2>
            <p className="text-[#FFFFFF60]">
              Subscribe to our newsletter for the latest updates.
            </p>
            <div className="join w-full">
              <div>
                <label className="input validator join-item">
                  <input
                    type="email"
                    placeholder="Enter valid email"
                    required
                  />
                </label>
              </div>
              <button className="btn btn-neutral join-item bg-linear-to-r from-[#FBCA57] to-[#F14749]">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
      <div>
        <hr className="border-1 border-white50 " />
      </div>
      <p className="text-center text-md text-[#FFFFFF60] p-12">
        &copy; 2026 Dream 11. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
