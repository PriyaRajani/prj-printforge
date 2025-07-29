"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathname = usePathname();

  const navigationLinks = [
    { name: "About", path: "/about" },
    { name: "Models", path: "/3d-models" },
  ];

  return (
    <nav className="flex justify-between items-center py-[6px] px-[20px]">
      <Image
        alt="logo"
        src={"/logo_mobile.png"}
        width={30}
        height={60}
        className="md:hidden "
      />
      <Image
        alt="logo"
        src={"/logo_desktop.png"}
        width={240}
        height={61}
        className="hidden md:block"
      />

      <div className="flex gap-10">
        {navigationLinks.map((link) => (
          <div key={link.path} className="text-gray-600">
            <Link
              href={link.path}
              className={
                pathname === link.path
                  ? "text-orange-600 border-b-orange-600 border-b-1 p-1.5"
                  : "text-gray-600"
              }
            >
              {link.name.toUpperCase()}
            </Link>
          </div>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
