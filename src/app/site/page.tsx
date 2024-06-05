// Next
import Image from "next/image";
import Link from "next/link";

// Shadcn
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

// Constants
import { pricingCards } from "@/lib/constants";

// Lucice Icons
import { Check } from "lucide-react";

export default function Home() {
  return (
    <section className="h-full w-full pt-36 relative flex items-center flex-col">
      {/* Grid */}
      <div className="absolute inset-0 -z-10 h-full w-full bg-inherit bg-[radial-gradient(#1F1C2C2f_1px,transparent_2px)] dark:bg-[radial-gradient(#ED42642f_1px,transparent_2px)] [background-size:32px_32px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_110%)]"></div>
      <p className="text-center">Run your agency, in one place</p>

      {/* Ictinus Title */}
      <div className="bg-gradient-to-tl from-primary to-secondary text-transparent bg-clip-text relative">
        <h1 className="text-9xl font-bold text-center md:text-[300px]">
          Ictinus
        </h1>
      </div>

      {/* Home page image */}
      <div className="flex justify-center items-center relative md:mt-[-70px] ">
        <Image
          src={"/assets/preview.png"}
          alt="banner image"
          height={1200}
          width={1200}
          className="rounded-tl-2xl rounded-tr-2xl border-2 border-muted"
        />
        {/* For "fading effect" */}
        <div className="absolute z-10 bottom-0 left-0 right-0 top-[50%] bg-gradient-to-t dark:from-background to-transparent" />
      </div>

      {/* Pricing Cards */}
      <section className="flex justify-center items-center flex-col gap-4 md:mt-20">
        <h2 className="text-4xl text-center">Choose what fits your right</h2>
        <p className="text-center text-muted-foreground">
          Our straightforward pricing plans are tailored to meet your needs if
          you're not <br />
          ready to commit you can get started for free.
        </p>

        <div className="flex justify-center gap-4 flex-wrap mt-6">
          {pricingCards.map((card) => (
            // WIP: Wire up free product from stripe
            <Card
              key={card.title}
              className={`w-[300px] flex flex-col justify-between ${
                card.title === "Unlimited Saas" ? "border-2 border-primary" : ""
              }`}
            >
              <CardHeader>
                {/* Title */}
                <CardTitle
                  className={`${
                    card.title !== "Unlimited Saas"
                      ? "text-muted-foreground"
                      : ""
                  }`}
                >
                  {card.title}
                </CardTitle>
                {/* Description */}
                <CardDescription>{card.description}</CardDescription>
              </CardHeader>
              <CardContent>
                {/* Pricing */}
                <span className="text-4xl font-bold">{card.price}</span>
                <span className="text-muted-foreground">/m</span>
              </CardContent>
              <CardFooter className="flex flex-col items-start gap-4">
                {/* Features */}
                <div>
                  {card.features.map((feature) => (
                    <div key={feature} className="flex gap-2 items-center">
                      <Check className="text-muted-foreground" />
                      <p>{feature}</p>
                    </div>
                  ))}
                </div>
                {/* Payment Link */}
                <Link
                  href={`/agency?plan=${card.priceId}`}
                  className={`w-full text-center p-2 text-primary-foreground dark:text-white rounded-md ${
                    card.title === "Unlimited Saas"
                      ? "bg-primary"
                      : "bg-muted-foreground"
                  }`}
                >
                  Get Started
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>
      </section>
    </section>
  );
}
