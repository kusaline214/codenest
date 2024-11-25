import React from "react";
import Card from "./atom/Card";
import Link from "next/link";
import { Button, Flex } from "@radix-ui/themes";

const Business = () => {
  return (
    <>
      <h2 className="text-xl md:text-3xl text-center font-bold my-[30px]">
        Business
      </h2>
      <div className="md:mx-auto p-[50px] md:max-w-[1200px] border-2 border-solid border-black rounded-xl shadow-xl">
        <div className="p-8 md:p-0 flex flex-wrap gap-4 justify-center  ">
          <Card name={"テストネーム"} title={"タイトル"} icon={"/next.svg"} />
          <Card name={"テストネーム"} title={"タイトル"} icon={"/next.svg"} />
          <Card name={"テストネーム"} title={"タイトル"} icon={"/next.svg"} />
          <Card name={"テストネーム"} title={"タイトル"} icon={"/next.svg"} />
          <Card name={"テストネーム"} title={"タイトル"} icon={"/next.svg"} />
          <Card name={"テストネーム"} title={"タイトル"} icon={"/next.svg"} />
        </div>
        <Link href={"/"}>
          <Flex gap="3">
            <Button
              className="mx-auto my-[30px] h-[50px] w-[200px] shadow-2xl"
              radius="full"
              variant="solid"
            >
              参画案件を見る
            </Button>
          </Flex>
        </Link>
      </div>
    </>
  );
};

export default Business;
