import Link from "next/link";

import Hamburger from "hamburger-react";
import { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import { useContext } from "react";

import Image from "next/image";

import logo from "../../public/assets/images/CenifyITLogo.png";

const DockComponent = dynamic(() =>
  import("react-dock").then((mod) => mod.Dock)
);

function Header() {
  const [isOpen, setOpen] = useState(false);

  return (
    <div className="flex py-1 items-center justify-between px-10 sticky top-0 z-50 bg-transparent">
      <Link href="/">
        <div className="">
          <Image
            className={`w-[200px] h-[100px]`}
            src={logo}
            alt="Badge"
            width={150}
            height={150}
          />
        </div>
      </Link>

      <div className="hidden md:flex space-x-5">
        <Link
          className="text-md text-slate-600 py-2 hover:text-slate-400 transition duration-500 rounded-md text-center"
          href="/aboutus"
        >
          About Us
        </Link>
        <Link
          className="text-md text-slate-600 py-2 hover:text-slate-400 transition duration-500 rounded-md text-center"
          href="/ourservices"
        >
          Our Services
        </Link>

        <Link
          className="text-md text-slate-600 py-2 hover:text-slate-400 transition duration-500 rounded-md text-center"
          href="/contactus"
        >
          Contact Us
        </Link>
      </div>
      <div className="md:hidden">
        <Hamburger toggled={isOpen} toggle={setOpen} />
        <div className="mixed-chart">
          {typeof window !== "undefined" && (
            <DockComponent position="top" isVisible={isOpen} size={0.75}>
              <div onClick={() => setOpen(false)}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-10 h-10 mx-auto mb-10 cursor-pointer"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </div>

              <div className="flex flex-col h-[100%] justify-around py-[20%] mt-[-10%] uppercase">
                <Link
                  className="text-md text-slate-600 py-2 hover:text-slate-400 transition duration-500 rounded-md text-center"
                  href="/aboutus"
                >
                  About Us
                </Link>
                <Link
                  className="text-md text-slate-600 py-2 hover:text-slate-400 transition duration-500 rounded-md text-center"
                  href="/ourservices"
                >
                  Our Services
                </Link>

                <Link
                  className="text-md text-slate-600 py-2 hover:text-slate-400 transition duration-500 rounded-md text-center"
                  href="/contactus"
                >
                  Contact Us
                </Link>
              </div>
            </DockComponent>
          )}
        </div>
      </div>
    </div>
  );
}

export default Header;
