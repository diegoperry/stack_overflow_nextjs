"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { sidebarLinks } from "@/constants";
import { Button } from "@/components/ui/button";
import { SignedOut } from "@clerk/nextjs";

const NavContent = () => {
  const [pathname, setPathname] = useState("");

  useEffect(() => {
    // Set the current path once the component is mounted
    setPathname(window.location.pathname);
  }, []);

  return (
    <section className="flex flex-col gap-6 pt-16">
      {sidebarLinks.map((item) => {
        const isActive = pathname === item.route;

        return (
          <Link
            href={item.route}
            key={item.route}
            className={`${
              isActive
                ? "primary-gradient text-light-900 rounded-lg"
                : "text-dark300_light900"
            } ml-6 flex w-4/5 items-center justify-start gap-4 p-4 max-lg:w-12`}
          >
            <Image
              src={item.imgURL}
              alt={item.label}
              width={20}
              height={20}
              className={`${isActive ? "" : "invert-colors"}`}
            />
            <span
              className={`${
                isActive ? "font-bold" : "font-medium"
              } max-lg:hidden`}
            >
              {item.label}
            </span>
          </Link>
        );
      })}
    </section>
  );
};

const LeftSideBar = () => {
  return (
    <div className="background-light900_dark200 fixed left-0 top-0 z-10 hidden h-full w-64 pt-20 shadow-md max-lg:w-20 lg:block">
      <NavContent />
      <SignedOut>
        <div className="grow"></div>

        {/* Button container */}
        <div className="w-full p-4">
          <Link href="/sign-in">
            <Button className="small-medium btn-secondary m-4 min-h-[41px] w-5/6 rounded-lg px-4 py-3 shadow-none">
              <span className="primary-text-gradient">Sign In</span>
            </Button>
          </Link>
          <Link href="/sign-up">
            <Button className="small-medium light-border-2 btn-tertiary text-dark400_light900 m-4 min-h-[41px] w-5/6 rounded-lg px-4 py-3 shadow-none">
              Sign Up
            </Button>
          </Link>
        </div>
      </SignedOut>
    </div>
  );
};

export default LeftSideBar;
