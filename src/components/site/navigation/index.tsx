// React
import React from "react";

// Next
import Image from "next/image";
import Link from "next/link";

// Clerk
import { UserButton } from "@clerk/nextjs";

// Components
import { ModeToggle } from "@/components/global/mode-toggle";

type Props = {
  user?: null;
};

const Navigation = ({ user }: Props) => {
  return (
    <div className="p-4 flex items-center justify-between relative">
      {/* Logo */}
      <aside className="flex items-center gap-2">
        <Image
          src={"./assets/plura-logo.svg"}
          width={40}
          height={40}
          alt="plura logo"
        />
        <span className="text-xl font-bold">Ictinus.</span>
      </aside>

      {/* Navigation Bar */}
      <nav className="hidden md:block absolute left-[50%] top-[50%] transform translate-x-[-50%] translate-y-[-50%]">
        <ul className="flex items-center justify-center gap-8">
          <Link href={"#"}>Pricing</Link>
          <Link href={"#"}>About</Link>
          <Link href={"#"}>Documentation</Link>
          <Link href={"#"}>Features</Link>
        </ul>
      </nav>

      {/* Login Button and Theme Selector */}
      <aside className="flex gap-2 items-center">
        <Link
          href={"/agency"}
          className="bg-primary text-white p-2 rounded-md hover:bg-primary/80"
        >
          Log In
        </Link>
        <UserButton />
        <ModeToggle />
      </aside>
    </div>
  );
};

export default Navigation;
