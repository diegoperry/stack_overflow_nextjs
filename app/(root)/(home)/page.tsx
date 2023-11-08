import LocalSearch from "@/components/shared/search/LocalSearch";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

const Home = () => {
  return (
    <>
      <div className="flex w-full flex-col-reverse justify-between gap-4 md:flex-row md:items-center">
        <h1 className="text-dark100_light900 sm:items-center lg:m-10 lg:ml-[250px]">
          All Questions
        </h1>
        <Link
          href="/ask-question"
          className="flex w-full justify-end md:w-auto"
        >
          <Button className="primary-gradient !text-light-900 ml-[5%] min-h-[46px] px-4 py-3">
            Ask Question
          </Button>
        </Link>
      </div>

      <div className="mt-11 flex justify-between gap-5 max-sm:flex-col sm:items-center lg:ml-[200px]">
        <LocalSearch
          route="/"
          iconPosition="left"
          imgSrc="/assets/icons/search.svg"
          placeholder="Search for questions"
          otherClasses="flex-1"
        />
      </div>
    </>
  );
};

export default Home;
