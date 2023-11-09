import Filter from "@/components/shared/filter/Filter";
import HomeFilter from "@/components/home/HomeFilter";
import LocalSearch from "@/components/shared/search/LocalSearch";
import { Button } from "@/components/ui/button";
import { HomePageFilters } from "@/constants/filters";
import Link from "next/link";
import React from "react";
import NoResult from "@/components/shared/NoResult";
import QuestionCard from "@/components/cards/QuestionCard";

const questions = [
  {
    _id: "1", // Changed to string
    title: "Cheating on exams with ChatGPT",
    tags: [
      { _id: "1", name: "ChatGPT" }, // _id changed to string
      { _id: "2", name: "AI" }, // _id changed to string
    ],
    author: {
      // Changed to an object
      _id: "someAuthorId1", // Added _id property
      name: "Lebron James",
      picture: "urlToLebronJamesPicture", // Added picture property with a placeholder URL
    },
    upvotes: 10,
    views: 100,
    answers: [
      {
        /* answer object */
      },
      {
        /* answer object */
      },
    ], // Changed to an array of objects
    createdAt: new Date("2021-09-01T12:00:00.000Z"), // Changed to a Date object
  },
  {
    _id: "2", // Changed to string
    title: "Building apps with NextJS",
    tags: [
      { _id: "1", name: "NextJS" }, // _id changed to string
      { _id: "2", name: "TypeScript" }, // _id changed to string
    ],
    author: {
      // Changed to an object
      _id: "someAuthorId2", // Added _id property
      name: "Black Jesus",
      picture: "urlToBlackJesusPicture", // Added picture property with a placeholder URL
    },
    upvotes: 1000,
    views: 20000,
    answers: new Array(12).fill({
      /* answer object */
    }), // Assuming there are 12 answer objects
    createdAt: new Date("2021-09-01T12:00:00.000Z"), // Changed to a Date object
  },
];

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
        <Filter
          filters={HomePageFilters}
          otherClasses="min-h-[56px] sm:min-w-[170px]"
          containerClasses="hidden max-md:flex"
        />
      </div>
      <HomeFilter />
      <div className="mt-10 flex w-full flex-col gap-6">
        {questions.length > 0 ? (
          questions.map((question) => (
            <QuestionCard
              key={question._id}
              _id={question._id}
              title={question.title}
              tags={question.tags}
              author={question.author}
              upvotes={question.upvotes}
              views={question.views}
              answers={question.answers}
              createdAt={question.createdAt}
            />
          ))
        ) : (
          <NoResult
            // Define type values
            title="There are no questions to show"
            description="Be the 1st to break the silence! Ask a Question and kickstart the
          discussion. Your query could be the next big thing others learn from.
          Get involved!"
            link="/ask-question"
            linkTitle="Ask a Question"
          />
        )}
      </div>
    </>
  );
};

export default Home;
