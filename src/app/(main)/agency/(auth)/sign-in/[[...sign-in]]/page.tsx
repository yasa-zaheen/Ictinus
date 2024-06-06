import React from "react";
import { SignIn } from "@clerk/nextjs";
import Image from "next/image";

const Page = () => {
  return (
    <div className="flex w-full h-screen overflow-hidden">
      <div className="w-2/5 h-full relative">
        <Image
          src={"/assets/sign-in.jpg"}
          alt="Sign In Image"
          fill={true}
          className="object-cover"
        />
      </div>
      <div className="w-3/5 h-full flex items-center justify-center">
        <SignIn />
      </div>
    </div>
  );
};

export default Page;
