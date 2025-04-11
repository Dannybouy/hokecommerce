"use client";

import { Questions } from "@/lib/data";
import React, { useState } from "react";

const SkinQuiz = () => {
  const [answers, setAnswers] = useState<Record<number, number>>({});

  const handleOptionSelect = (questionId: number, optionIndex: number) => {
    setAnswers((prev) => ({
      ...prev,
      [questionId]: optionIndex,
    }));
  };

  return (
    <div className="my-8">
      {Questions.map((q) => (
        <div key={q.id} className="mb-8 rounded-lg p-6">
          <h3 className="font-montserrat mb-4 text-lg font-semibold">
            {q.id}. {q.question}
          </h3>
          <div className="space-y-3">
            {q.options.map((option, index) => (
              <div
                key={index}
                onClick={() => handleOptionSelect(q.id, index)}
                className={`flex cursor-pointer items-center rounded-lg p-3 transition-colors border border-gray-300 ${
                  answers[q.id] === index
                    ? "bg-green-100 text-green-800"
                    : "bg-gray-50 hover:bg-gray-100"
                }`}
              >
                <div className="flex w-full items-center">
                  <div
                    className={`mr-3 h-4 w-4 flex-shrink-0 rounded-full border ${
                      answers[q.id] === index
                        ? "border-green-500 bg-green-500"
                        : "border-gray-300"
                    }`}
                  ></div>
                  <span className="font-montserrat">
                    {option.text} {option.emoji}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
      <button className="bg-burntOrange font-montserrat mt-6 rounded-[28px] px-8 py-3 font-semibold text-white transition-opacity hover:opacity-90">
        SUBMIT
      </button>
    </div>
  );
};

export default SkinQuiz;
