import React from "react";
import { navLinks } from "@/constant/constant";
import Link from "next/link";
import { CgClose } from "react-icons/cg";

type Props = {
  showNav: boolean;
  closeNav: () => void;
};


const MobileNav = ({showNav , closeNav}:Props) => {

const navOpen = showNav ? "translate-x-0" : "translate-x-[-100%]";

  return (
    <div>
      {/* Overlay */}
      <div className={`fixed  ${navOpen} inset-0 z-[1002] bg-black opacity-70 transition-all duration-300 w-full h-screen`}></div>
      {/* Nav links */}
      <div className={`text-white  ${navOpen} fixed justify-center flex flex-col h-full transition-all duration-500 delay-300 w-[80%] sm:w-[60%] bg-[#A67B5B] dark:bg-black space-y-6 z-[1050]`}>
        {navLinks.map((link) => {
          return (
            <Link key={link.id} href={link.url}>
              <p className="text-white w-fit text-xl ml-12 border-b-[1.5px] pb-1 border-whitesm:text-[30px]">
                {" "}
                {link.label}
              </p>
            </Link>
          );
        })}
              {/* Close button */}
      <CgClose onClick ={closeNav} className="text-white cursor-pointer sm:w-8 sm:h-8 w-6 h-6 absolute top-[0.7rem] right-[1.4rem] mt-2" />
      </div>

    </div>
  );
};

export default MobileNav;
