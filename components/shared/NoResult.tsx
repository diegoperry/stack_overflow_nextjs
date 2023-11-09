import React from "react";
import Image from "next/image";
import { Button } from "../ui/button";
import Link from "next/link";

// This is a dynamic component

// Define Types

interface Props {
  title: string;
  description: string;
  link: string;
  linkTitle: string;
}

// Pass Types in to component

const NoResult = ({ title, description, link, linkTitle }: Props) => {
  return (
    <div className="mt-10 flex w-full flex-col items-center">
      <Image
        src="/assets/images/light-illustration.png"
        alt="No result"
        width={270}
        height={200}
        className="block object-contain dark:hidden lg:ml-[20%]"
      />
      <Image
        src="/assets/images/dark-illustration.png"
        alt="No result"
        width={270}
        height={200}
        className="hidden object-contain dark:flex lg:ml-[20%]"
      />
      <h2 className="h2-bold text-dark200_light900 mt-8 lg:ml-[20%]">
        {title}
      </h2>
      <p className="body-regular text-dark500_light700 my-3.5 max-w-md text-center lg:ml-[20%]">
        {description}
      </p>
      <Link href={link} className="lg:ml-[20%]">
        <Button className="paragraph-medium bg-primary-500 hover:bg-primary-500 dark:bg-primary-500 text-light-900 mt-5 min-h-[46px] rounded-lg px-4 py-3">
          {linkTitle}
        </Button>
      </Link>
    </div>
  );
};

export default NoResult;
