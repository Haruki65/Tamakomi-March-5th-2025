"use client"
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Home() {
  const [dinnerChoice, setDinnerChoice] = useState("");
  const dinnerOptions = ["カレー", "ラーメン", "ご飯系", "あなた次第！役に立てなくてごめんね。", "もしかしてアクティビティ中に押しちゃった...?"];
  const pickDinner = () => {
    const randomChoice = dinnerOptions[Math.floor(Math.random() * dinnerOptions.length)];
    setDinnerChoice(randomChoice);
  };

  const activities = [
    { id: "1", title: "Activity 1", description: "Things that have inspired you" },
    { id: "2", title: "Activity 2", description: "Shaking things up for a fair shake." },
    { id: "3", title: "Activity 3", description: "You are such an amazing writer." },
    { id: "4", title: "Activity 4", description: "What do you want to learn next?" },
  ];

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <h1 className="text-4xl sm:text-6xl font-bold text-center sm:text-left">
          Hello, Tamakomi!
        </h1>
        <h2>
          Organized by Haruki on March 5, 2025 - My 5th Activity.
        </h2>
        {/* Activity Buttons */}
        <div className="grid gap-4 sm:grid-cols-3 w-full max-w-lg">
          {activities.map(({ id, title, description }) => (
            <Link
              key={id}
              href={`/activity/${id}`}
              className="block rounded-lg border border-solid border-black/[.08] dark:border-white/[.145] bg-gray-100 dark:bg-gray-800 transition-colors hover:bg-gray-200 dark:hover:bg-gray-700 p-4 text-center text-sm sm:text-base"
            >
              <span className="font-bold">{title}</span>
              <p className="text-xs text-gray-600 dark:text-gray-300 mt-1">{description}</p>
            </Link>
          ))}
        </div>

        <div className="flex gap-4 items-center flex-col sm:flex-row">
          <button
            className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:min-w-44 cursor-pointer"
            onClick={() => window.open("https://www.perplexity.ai/", "_blank")}
          >
            Search Anything
          </button>
          <button
            className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:min-w-44 cursor-pointer"
            onClick={pickDinner}
          >
            Dinner Picker
          </button>
        </div>

        {dinnerChoice && (
          <p className="text-2xl font-bold mt-4">{dinnerChoice}</p>
        )}
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://tamakomi-04-10-2024.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/file.svg"
            alt="File icon"
            width={16}
            height={16}
          />
          My Previous Activity
        </a>

      </footer>
    </div>
  );
}