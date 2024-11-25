import React from "react";

const About = () => {
  return (
    <div>
      <h2 className="font-bold text-4xl text-center mt-[100px]">経営理念</h2>
      <h3 className="font-bold text-3xl text-center mt-[30px]">
        エンジニアが自分の意思で成長していける
        <br />
        そんな会社を目指しています。
      </h3>

      <h4 className="font-bold text-2xl text-center mt-[30px]">News</h4>
      <div className="text-bold text-xl border-2 border-solid border-black rounded-2xl md:w-[800px] md:mx-auto my-3 p-10">
        <ul className="list-disc">
          <li>〇〇へ参画しました</li>
          <li>〇〇へ参画しました</li>
          <li>〇〇へ参画しました</li>
        </ul>
      </div>
    </div>
  );
};

export default About;
