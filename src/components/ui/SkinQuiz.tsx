"use client";

import { Questions } from "@/lib/data";
import React, { useState } from "react";
import QuizResults from "./QuizResults";
import { Button } from "./button";

const SkinQuiz = () => {
  const [answers, setAnswers] = useState<Record<number, number>>({});
  const [submitted, setSubmitted] = useState(false);
  const [skinType, setSkinType] = useState("");

  const handleOptionSelect = (questionId: number, optionIndex: number) => {
    setAnswers((prev) => ({
      ...prev,
      [questionId]: optionIndex,
    }));
  };

  const determineResults = () => {
    // Check if all questions are answered
    if (Object.keys(answers).length < Questions.length) {
      alert("Please answer all questions");
      return;
    }

    // Specific logic for determining skin type
    // This implementation follows the request: if user selects option 1 for all questions, it's dry skin

    // Check if all answers are option 1 (index 0) for dry skin
    const allOptionOne = Object.values(answers).every((answer) => answer === 0);
    if (allOptionOne) {
      setSkinType("dry");
      setSubmitted(true);
      return;
    }

    // Count the responses for each type
    let dryCount = 0;
    let normalCount = 0;
    let oilyCount = 0;

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    Object.entries(answers).forEach(([_, optionIndex]) => {
      if (optionIndex === 0) dryCount++;
      else if (optionIndex === 1) normalCount++;
      else if (optionIndex === 2) oilyCount++;
    });

    // Determine skin type based on most common answers
    if (dryCount >= normalCount && dryCount >= oilyCount) {
      setSkinType("dry");
    } else if (normalCount >= dryCount && normalCount >= oilyCount) {
      setSkinType("normal");
    } else {
      setSkinType("oily");
    }

    setSubmitted(true);
  };

  const resetQuiz = () => {
    setAnswers({});
    setSubmitted(false);
    setSkinType("");
  };

  if (submitted) {
    return <QuizResults skinType={skinType} resetQuiz={resetQuiz} />;
  }

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
                className={`flex cursor-pointer items-center rounded-lg border border-gray-300 p-3 transition-colors ${
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
      <Button
        onClick={determineResults}
        className="bg-burntOrange font-montserrat mt-6 rounded-[28px] px-8 py-3 font-semibold text-white transition-opacity hover:opacity-90"
      >
        SUBMIT
      </Button>
    </div>
  );
};

export default SkinQuiz;
