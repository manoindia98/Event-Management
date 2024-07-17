import Link from "next/link"
import React from "react";
import { FlipWords } from "../components/ui/flip-words";

export function HeroSection() {
  const words = ["Advertise_Smarter", "Reach_Further", "Grow_Bigger", "Do_Better","Promote_Everywhere"];
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-r from-primary to-secondary">
      <div className="w-full h-8"></div>
      <div className="container px-4 md:px-6 flex flex-col items-center text-center">
        <div className="space-y-4">
          <h1 className="text-4xl text-left font-bold tracking-tighter text-primary-foreground sm:text-5xl md:text-6xl lg:text-7xl">
              <FlipWords className="text-accent dark:text-[white] z-12" words={words} />
              <br />
              <div className="ml-2">
                with Manoindia
              </div>
              
          </h1>
          <p className="max-w-[800px] text-xl text-primary-foreground md:text-2xl">
            Your One-Stop Platform for Promoting, Advertising and Space Renting
          </p>
        </div>
        
        <Link
          href="#"
          className="inline-flex mt-6 h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
          prefetch={false}
        >
          Get Started
        </Link>
      </div>
    </section>
  )
}
