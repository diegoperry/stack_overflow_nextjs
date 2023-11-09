import React from "react";
import Link from "next/link";
import RenderTag from "../shared/RenderTag";
import Metric from "../shared/Metric";
import { formatNumber, getTimestamp } from "@/lib/utils";

interface Props {
  _id: string;
  title: string;
  tags: {
    _id: string;
    name: string;
  }[];
  author: {
    _id: string;
    name: string;
    picture: string; // URL
  };
  upvotes: number;
  views: number;
  answers: Array<object>;
  createdAt: Date;
}

const QuestionCard = ({
  _id,
  title,
  tags,
  author,
  views,
  answers,
  createdAt,
  upvotes,
}: Props) => {
  return (
    <div className="card-wrapper rounded-[10px] p-9 sm:px-11 lg:ml-[20%]">
      <div className="flex flex-col-reverse items-start justify-between gap-5 sm:flex-row">
        <div>
          <span className="subtle-regular text-dark400_light700 line-clamp-1 flex sm:hidden">
            {getTimestamp(createdAt)}
          </span>
          <Link href={`/question/${_id}`}>
            <h3 className="sm:h3-semibold base-semibold text-dark200_light900 line-clamp-1 flex-1">
              {title}
            </h3>
          </Link>
        </div>
        {/* TODO: If signed in add edit and delete options */}
      </div>
      <div className="mt-3.5 flex flex-wrap gap-2">
        {tags.map((tag) => (
          <RenderTag key={tag._id} _id={tag._id} name={tag.name} />
        ))}
      </div>
      <div className="flex-between mt-6 w-full flex-wrap gap-3">
        <Metric
          imgUrl="/assets/icons/avatar.svg"
          alt="user"
          title={` - asked ${getTimestamp(createdAt)}`}
          textStyles="body-medium text-dark400_light800"
          value={author.name}
          href={`/profile/${author._id}`}
          isAuthor
        />
        {/* Likes */}
        <Metric
          imgUrl="/assets/icons/like.svg"
          alt="Upvotes"
          title=" Votes"
          textStyles="small-medium text-dark400_light800"
          value={formatNumber(upvotes)}
        />
        <Metric
          imgUrl="/assets/icons/message.svg"
          alt="Message"
          title=" Answers"
          textStyles="small-medium text-dark400_light800"
          value={formatNumber(answers.length)}
        />
        <Metric
          imgUrl="/assets/icons/eye.svg"
          alt="eye"
          title=" Views"
          textStyles="small-medium text-dark400_light800"
          value={formatNumber(views)}
        />
      </div>
    </div>
  );
};

export default QuestionCard;
