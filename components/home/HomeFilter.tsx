"use client";
import React from "react";
import { HomePageFilters } from "@/constants/filters";
import { Button } from "../ui/button";

const HomeFilter = () => {
  const active = "";
  return (
    <div className="mt-10 hidden flex-wrap gap-3 md:flex lg:ml-[19%]">
      {HomePageFilters.map((item) => (
        <Button
          key={item.value}
          onClick={() => {}}
          className={`body-medium rounded-lg px-6 py-3 capitalize shadow-none ${
            active === item.value
              ? "bg-primary-100"
              : "bg-light-800 text-light-500 hover:bg-light-700 dark:bg-dark-300 dark:hover:bg-dark-400"
          }`}
        >
          {item.name}
        </Button>
      ))}
    </div>
  );
};

export default HomeFilter;
