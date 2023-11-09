import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// Time Stamp
export const getTimestamp = (createdAt: Date): string => {
  const now = new Date();
  const secondsPast = (now.getTime() - createdAt.getTime()) / 1000;

  if (secondsPast < 60) {
    // Less than a minute
    return `${Math.floor(secondsPast)} seconds ago`;
  } else if (secondsPast < 3600) {
    // Less than an hour
    return `${Math.floor(secondsPast / 60)} minutes ago`;
  } else if (secondsPast < 86400) {
    // Less than a day
    return `${Math.floor(secondsPast / 3600)} hours ago`;
  } else if (secondsPast < 2592000) {
    // Less than a month
    return `${Math.floor(secondsPast / 86400)} days ago`;
  } else if (secondsPast < 31536000) {
    // Less than a year
    return `${Math.floor(secondsPast / 2592000)} months ago`;
  } else {
    // More than a year
    return `${Math.floor(secondsPast / 31536000)} years ago`;
  }
};

// Number Format
export const formatNumber = (num: number): string => {
  if (num >= 1000000) {
    return (num / 1000000).toFixed(1).replace(/\.0$/, "") + "M";
  }
  if (num >= 1000) {
    return (num / 1000).toFixed(1).replace(/\.0$/, "") + "K";
  }
  return num.toString();
};
