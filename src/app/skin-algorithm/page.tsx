import React from "react";
import SkinQuiz from "../components/SkinQuiz";
import Newsletter from "@/components/ui/landingPage/Newsletter";
const SkinAlgorithmPage = () => {
  return (
    <div className="mx-auto my-5 px-6 lg:my-22 lg:px-[119px]">
      <h2 className="font-playfair text-6xl">
        Personalized <br /> Skincare Quiz
      </h2>
      <p className="font-inter text-hokBlack mt-5 text-lg">
        Find out your skin type and #DISCOVER the best of Korean Skincare for
        your skin
      </p>
      <div className="bg-burntOrange font-montserrat mt-10 w-fit max-w-fit rounded-[28px] px-5 py-[10px] text-lg font-semibold text-white">
        Answer the Questions
      </div>
      <SkinQuiz />

      <section className="mt-10">
        <Newsletter />
      </section>
    </div>
  );
};

export default SkinAlgorithmPage;
