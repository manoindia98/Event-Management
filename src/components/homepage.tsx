import Link from "next/link"
import React from "react";
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { FlipWords } from "./ui/flip-words";
import { Collapsible, CollapsibleTrigger, CollapsibleContent } from "@/components/ui/collapsible"
import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet"
import { ModeToggle } from "./themetoggler"

function Homepage() {
  const words = ["Advertise_Smarter", "Reach_Further", "Grow_Bigger", "Do_Better","Promote_Everywhere"];
  return (
    <>
{/* HEADER SECTION */}

    <header className="w-full text-foreground shadow fixed bg-accent z-10 border-b-2">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="#" className="text-2xl font-bold" prefetch={false}>
          Manoindia
        </Link>
        <nav className="hidden md:flex">
          <ul className="flex items-center space-x-6 font-bold">
            <li>
              <Link href="#" className="hover:text-primary" prefetch={false}>
                Home
              </Link>
            </li>
            <li>
              <Link href="#features" className="hover:text-primary" prefetch={false}>
                Features
              </Link>
            </li>
            <li>
              <Link href="#howitworks" className="hover:text-primary" prefetch={false}>
                How It Works
              </Link>
            </li>
            <li>
              <Link href="#pricing" className="hover:text-primary" prefetch={false}>
                Pricing
              </Link>
            </li>
            <li>
              <Link href="#faq" className="hover:text-primary" prefetch={false}>
                FAQ
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-primary" prefetch={false}>
                Contact
              </Link>
            </li>
          </ul>
        </nav>
        <div className="pl-[8rem] ml-[8vw]"><ModeToggle /></div>
        <Button className="hidden md:inline-flex">Get Started</Button>
        
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="outline" size="icon" className="md:hidden">
              <MenuIcon className="h-6 w-6" />
              <span className="sr-only">Toggle navigation menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="md:hidden">
            <div className="grid gap-4 p-4">
              <Link href="#" className="font-medium hover:text-primary" prefetch={false}>
                Home
              </Link>
              <Link href="#features" className="font-medium hover:text-primary" prefetch={false}>
                Features
              </Link>
              <Link href="#howitworks" className="font-medium hover:text-primary" prefetch={false}>
                How It Works
              </Link>
              <Link href="#pricing" className="font-medium hover:text-primary" prefetch={false}>
                Pricing
              </Link>
              <Link href="#faq" className="font-medium hover:text-primary" prefetch={false}>
                FAQ
              </Link>
              <Link href="#" className="font-medium hover:text-primary" prefetch={false}>
                Contact
              </Link>
            </div>
          </SheetContent>
        </Sheet>
      </div>
      
    </header>

{/* HERO SECTION */}
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

{/* FEATURES SECTION */}
    <section className="w-full py-12 md:py-24 lg:py-32" id="features">
      <section className="w-full mx-auto mb-10 max-w-4xl p-8 bg-white rounded-lg shadow-md dark:bg-secondary">
          <div className="grid grid-cols-3 gap-8 mt-6">
            <div className="flex flex-col items-center text-center">
              <RocketIcon className="w-12 h-12 text-primary" />
              <h3 className="mt-4 text-lg font-medium">Easy Booking</h3>
              <p className="mt-2 text-muted-foreground">Seamless ad slot booking process.</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <PaletteIcon className="w-12 h-12 text-primary" />
              <h3 className="mt-4 text-lg font-medium">Diverse Formats</h3>
              <p className="mt-2 text-muted-foreground">Wide range of ad formats available.</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <SlidersVerticalIcon className="w-12 h-12 text-primary" />
              <h3 className="mt-4 text-lg font-medium">Customization</h3>
              <p className="mt-2 text-muted-foreground">Tailor ads to your specific needs.</p>
            </div>
          </div>
        </section>
      <div className="container grid gap-12 px-4 md:px-6">
        <div className="grid gap-6 md:grid-cols-2 lg:gap-12">
          <div className="space-y-4">
            <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">For Advertisers</div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Reach Your Target Audience</h2>
            <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Leverage our platform to connect with the right people and achieve your advertising goals.
            </p>
            <ul className="grid gap-6">
              <li>
                <div className="grid gap-1">
                  <h3 className="text-xl font-bold">Targeted Advertising</h3>
                  <p className="text-muted-foreground">
                    Precisely target your ads to the right audience based on demographics, interests, and behaviors.
                  </p>
                </div>
              </li>
              <li>
                <div className="grid gap-1">
                  <h3 className="text-xl font-bold">Real-Time Analytics</h3>
                  <p className="text-muted-foreground">
                    Monitor the performance of your ads in real-time and make data-driven decisions to optimize your
                    campaigns.
                  </p>
                </div>
              </li>
              <li>
                <div className="grid gap-1">
                  <h3 className="text-xl font-bold">Flexible Pricing</h3>
                  <p className="text-muted-foreground">
                    Choose from a variety of pricing models, including pay-per-click and cost-per-impression, to fit
                    your advertising budget.
                  </p>
                </div>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">For Space Providers</div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Maximize Your Advertising Revenue
            </h2>
            <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Unlock the full potential of your advertising space and generate more revenue with our platform.
            </p>
            <ul className="grid gap-6">
              <li>
                <div className="grid gap-1">
                  <h3 className="text-xl font-bold">Automated Monetization</h3>
                  <p className="text-muted-foreground">
                    Our platform automatically matches your ad space with relevant advertisers, ensuring maximum revenue
                    generation.
                  </p>
                </div>
              </li>
              <li>
                <div className="grid gap-1">
                  <h3 className="text-xl font-bold">Detailed Reporting</h3>
                  <p className="text-muted-foreground">
                    Access comprehensive reports on your ad performance, including impressions, clicks, and revenue, to
                    make informed decisions.
                  </p>
                </div>
              </li>
              <li>
                <div className="grid gap-1">
                  <h3 className="text-xl font-bold">Easy Integration</h3>
                  <p className="text-muted-foreground">
                    Seamlessly integrate our platform with your website or mobile app, and start earning from your ad
                    space in no time.
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <section className="w-full max-w-4xl p-8 bg-white rounded-lg shadow-md mx-auto mt-10 dark:bg-secondary">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-bold">Promote through various channels.</h2>
            <Button variant="outline" size="sm">
              View All
            </Button>
          </div>
          <div className="grid grid-cols-2 gap-6 mt-6">
            <div className="flex flex-col items-center p-4 border rounded-lg bg-muted">
              <img src="/placeholder.svg" alt="Ad Slot" className="w-full rounded-lg" />
              <h3 className="mt-4 text-lg font-medium">Banner Ad</h3>
              <p className="mt-2 text-muted-foreground">High-visibility ad placement.</p>
              <Button size="sm" className="mt-4">
                Book Now
              </Button>
            </div>
            <div className="flex flex-col items-center p-4 border rounded-lg bg-muted">
              <img src="/placeholder.svg" alt="Ad Slot" className="w-full rounded-lg" />
              <h3 className="mt-4 text-lg font-medium">Video Ad</h3>
              <p className="mt-2 text-muted-foreground">Engage your audience with video and reels.</p>
              <Button size="sm" className="mt-4">
                Book Now
              </Button>
            </div>
          </div>
        </section>
    </section>

{/* TESTIMONIALS SECTION */}
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6 lg:gap-10">
        <div className="space-y-3">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">What Our Customers Say</h2>
          <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Hear from real people who love using our product.
          </p>
        </div>
        <div className="grid w-full max-w-4xl gap-6 md:grid-cols-2 lg:grid-cols-3">
          <div className="flex flex-col gap-4 rounded-lg bg-background p-6 shadow-lg transition-transform duration-300 ease-in-out hover:-translate-y-2 hover:shadow-xl dark:bg-secondary">
            <div className="flex items-center gap-4">
              <Avatar className="h-12 w-12 border">
                <AvatarImage src="/placeholder-user.jpg" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              <div className="grid gap-0.5">
                <h3 className="text-lg font-semibold">Sarah Johnson</h3>
                <div className="flex items-center gap-0.5 text-sm">
                  <StarIcon className="h-4 w-4 fill-primary" />
                  <StarIcon className="h-4 w-4 fill-primary" />
                  <StarIcon className="h-4 w-4 fill-primary" />
                  <StarIcon className="h-4 w-4 fill-primary" />
                  <StarIcon className="h-4 w-4 fill-muted stroke-muted-foreground" />
                </div>
              </div>
            </div>
            <div className="text-sm leading-loose text-muted-foreground">
              <p>
                I&apos;ve been using this product for a few months now and I absolutely love it. It&apos;s made my life
                so much easier and I would highly recommend it to anyone.
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-4 rounded-lg bg-background p-6 shadow-lg transition-transform duration-300 ease-in-out hover:-translate-y-2 hover:shadow-xl dark:bg-secondary">
            <div className="flex items-center gap-4">
              <Avatar className="h-12 w-12 border">
                <AvatarImage src="/placeholder-user.jpg" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              <div className="grid gap-0.5">
                <h3 className="text-lg font-semibold">Alex Smith</h3>
                <div className="flex items-center gap-0.5 text-sm">
                  <StarIcon className="h-4 w-4 fill-primary" />
                  <StarIcon className="h-4 w-4 fill-primary" />
                  <StarIcon className="h-4 w-4 fill-primary" />
                  <StarIcon className="h-4 w-4 fill-primary" />
                  <StarIcon className="h-4 w-4 fill-muted stroke-muted-foreground" />
                </div>
              </div>
            </div>
            <div className="text-sm leading-loose text-muted-foreground">
              <p>
                This product has been a game-changer for my business. The features are top-notch and the customer
                support is exceptional. I highly recommend it.
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-4 rounded-lg bg-background p-6 shadow-lg transition-transform duration-300 ease-in-out hover:-translate-y-2 hover:shadow-xl dark:bg-secondary">
            <div className="flex items-center gap-4 ">
              <Avatar className="h-12 w-12 border">
                <AvatarImage src="/placeholder-user.jpg" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              <div className="grid gap-0.5">
                <h3 className="text-lg font-semibold">Emily Parker</h3>
                <div className="flex items-center gap-0.5 text-sm">
                  <StarIcon className="h-4 w-4 fill-primary" />
                  <StarIcon className="h-4 w-4 fill-primary" />
                  <StarIcon className="h-4 w-4 fill-primary" />
                  <StarIcon className="h-4 w-4 fill-primary" />
                  <StarIcon className="h-4 w-4 fill-primary" />
                </div>
              </div>
            </div>
            <div className="text-sm leading-loose text-muted-foreground">
              <p>
                I&apos;m absolutely thrilled with this product. It&apos;s exceeded all of my expectations and I
                can&apos;t imagine using anything else. Highly recommended!
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-4 rounded-lg bg-background p-6 shadow-lg transition-transform duration-300 ease-in-out hover:-translate-y-2 hover:shadow-xl dark:bg-secondary">
            <div className="flex items-center gap-4">
              <Avatar className="h-12 w-12 border">
                <AvatarImage src="/placeholder-user.jpg" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              <div className="grid gap-0.5">
                <h3 className="text-lg font-semibold">John Doe</h3>
                <div className="flex items-center gap-0.5 text-sm">
                  <StarIcon className="h-4 w-4 fill-primary" />
                  <StarIcon className="h-4 w-4 fill-primary" />
                  <StarIcon className="h-4 w-4 fill-primary" />
                  <StarIcon className="h-4 w-4 fill-muted stroke-muted-foreground" />
                  <StarIcon className="h-4 w-4 fill-muted stroke-muted-foreground" />
                </div>
              </div>
            </div>
            <div className="text-sm leading-loose text-muted-foreground">
              <p>
                I&apos;ve been using this product for a while now and it&apos;s been a great experience. The team is
                responsive and the features are really useful.
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-4 rounded-lg bg-background p-6 shadow-lg transition-transform duration-300 ease-in-out hover:-translate-y-2 hover:shadow-xl dark:bg-secondary">
            <div className="flex items-center gap-4">
              <Avatar className="h-12 w-12 border">
                <AvatarImage src="/placeholder-user.jpg" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              <div className="grid gap-0.5">
                <h3 className="text-lg font-semibold">Jane Doe</h3>
                <div className="flex items-center gap-0.5 text-sm">
                  <StarIcon className="h-4 w-4 fill-primary" />
                  <StarIcon className="h-4 w-4 fill-primary" />
                  <StarIcon className="h-4 w-4 fill-primary" />
                  <StarIcon className="h-4 w-4 fill-primary" />
                  <StarIcon className="h-4 w-4 fill-muted stroke-muted-foreground" />
                </div>
              </div>
            </div>
            <div className="text-sm leading-loose text-muted-foreground">
              <p>
                I&apos;m so impressed with this product. It&apos;s made my workflow so much more efficient and I&apos;ve
                seen a significant improvement in my productivity.
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-4 rounded-lg bg-background p-6 shadow-lg transition-transform duration-300 ease-in-out hover:-translate-y-2 hover:shadow-xl dark:bg-secondary">
            <div className="flex items-center gap-4">
              <Avatar className="h-12 w-12 border">
                <AvatarImage src="/placeholder-user.jpg" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              <div className="grid gap-0.5">
                <h3 className="text-lg font-semibold">Michael Johnson</h3>
                <div className="flex items-center gap-0.5 text-sm">
                  <StarIcon className="h-4 w-4 fill-primary" />
                  <StarIcon className="h-4 w-4 fill-primary" />
                  <StarIcon className="h-4 w-4 fill-primary" />
                  <StarIcon className="h-4 w-4 fill-primary" />
                  <StarIcon className="h-4 w-4 fill-primary" />
                </div>
              </div>
            </div>
            <div className="text-sm leading-loose text-muted-foreground">
              <p>
                This product has been a game-changer for my business. The features are top-notch and the customer
                support is exceptional. I highly recommend it.
              </p>
            </div>
          </div>
        </div>
      </div>
      <section className="w-full max-w-4xl p-8 bg-white rounded-lg shadow-md mx-auto mt-10 dark:bg-secondary">
          <h2 className="text-2xl font-bold">Our Clients</h2>
          <div className="grid grid-cols-4 gap-8 mt-6">
            <div className="flex items-center justify-center p-4 border rounded-lg bg-muted">
              <img
                src="/placeholder.svg"
                alt="Client Logo"
                width={120}
                height={60}
                className="w-full h-auto object-contain"
              />
            </div>
            <div className="flex items-center justify-center p-4 border rounded-lg bg-muted">
              <img
                src="/placeholder.svg"
                alt="Client Logo"
                width={120}
                height={60}
                className="w-full h-auto object-contain"
              />
            </div>
            <div className="flex items-center justify-center p-4 border rounded-lg bg-muted">
              <img
                src="/placeholder.svg"
                alt="Client Logo"
                width={120}
                height={60}
                className="w-full h-auto object-contain"
              />
            </div>
            <div className="flex items-center justify-center p-4 border rounded-lg bg-muted">
              <img
                src="/placeholder.svg"
                alt="Client Logo"
                width={120}
                height={60}
                className="w-full h-auto object-contain"
              />
            </div>
          </div>
        </section>
        <section className="w-full max-w-4xl p-8 bg-white rounded-lg shadow-md mx-auto mt-10 dark:bg-secondary">
          <h2 className="text-2xl font-bold">Latest News</h2>
          <div className="grid grid-cols-2 gap-8 mt-6">
            <div className="flex flex-col items-start p-4 border rounded-lg bg-muted">
              <img src="/placeholder.svg" alt="Blog Post" className="w-full rounded-lg" />
              <h3 className="mt-4 text-lg font-medium">New Ad Formats Launched</h3>
              <p className="mt-2 text-muted-foreground">Discover our latest ad formats to engage your audience.</p>
              <Button variant="outline" size="sm" className="mt-4">
                Read More
              </Button>
            </div>
            <div className="flex flex-col items-start p-4 border rounded-lg bg-muted">
              <img src="/placeholder.svg" alt="Blog Post" className="w-full rounded-lg" />
              <h3 className="mt-4 text-lg font-medium">Platform Updates and Improvements</h3>
              <p className="mt-2 text-muted-foreground">Learn about the latest updates to our ad platform.</p>
              <Button variant="outline" size="sm" className="mt-4">
                Read More
              </Button>
            </div>
          </div>
        </section>
    </section>

{/* CALL TO ACTION SECTION */}
    <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-r from-primary to-secondary">
      <div className="container px-4 md:px-6 text-center">
        <div className="space-y-4">
          <h2 className="text-3xl font-bold tracking-tighter text-primary-foreground md:text-4xl/tight">
            Ready to Boost Your Business?
          </h2>
          <p className="max-w-[700px] mx-auto text-lg text-primary-foreground md:text-xl/relaxed">
            Join Manoindia today and take your advertising to the next level.
          </p>
          <Link
            href="#"
            className="inline-flex h-10 items-center justify-center rounded-md bg-primary-foreground px-8 text-sm font-medium text-primary shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
            prefetch={false}
          >
            Sign Up Now
          </Link>
        </div>
      </div>
    </section>

{/* FREQUENTLY ASKED QUESTIONS SECTION */}
    <section className="w-full py-12 md:py-24 lg:py-32" id="faq">
      <div className="container grid gap-12 px-4 md:px-6">
        <div className="space-y-3 text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Frequently Asked Questions</h2>
          <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Get answers to your questions about the Manoindia platform.
          </p>
        </div>
        <div className="grid gap-6">
          <Collapsible>
            <CollapsibleTrigger className="flex w-full items-center justify-between rounded-lg bg-background p-4 text-lg font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 [&[data-state=open]>svg]:rotate-180">
              What is Manoindia?
              <ChevronDownIcon className="h-5 w-5 transition-transform" />
            </CollapsibleTrigger>
            <CollapsibleContent className="rounded-lg bg-muted dark:bg-card p-4 text-muted-foreground">
              Manoindia is a leading digital advertising platform that connects businesses with their target audience.
              It offers a wide range of advertising solutions, including display ads, video ads, and native ads, to help
              businesses reach their marketing goals.
            </CollapsibleContent>
          </Collapsible>
          <Collapsible>
            <CollapsibleTrigger className="flex w-full items-center justify-between rounded-lg bg-background p-4 text-lg font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 [&[data-state=open]>svg]:rotate-180">
              How do I sign up for Manoindia?
              <ChevronDownIcon className="h-5 w-5 transition-transform" />
            </CollapsibleTrigger>
            <CollapsibleContent className="rounded-lg bg-muted p-4 text-muted-foreground dark:bg-card">
              Signing up for Manoindia is easy. Simply visit the Manoindia website and click on the "Sign Up" button.
              You'll be prompted to enter your business information and create an account. Once your account is set up,
              you can start creating and managing your advertising campaigns.
            </CollapsibleContent>
          </Collapsible>
          <Collapsible>
            <CollapsibleTrigger className="flex w-full items-center justify-between rounded-lg bg-background p-4 text-lg font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 [&[data-state=open]>svg]:rotate-180">
              What are the benefits of advertising on Manoindia?
              <ChevronDownIcon className="h-5 w-5 transition-transform" />
            </CollapsibleTrigger>
            <CollapsibleContent className="rounded-lg bg-muted p-4 text-muted-foreground dark:bg-card">
              Advertising on Manoindia offers a range of benefits for businesses, including:
              <ul className="mt-4 list-disc space-y-2 pl-6">
                <li>Targeted advertising to reach your ideal customers</li>
                <li>Detailed analytics and reporting to track the performance of your campaigns</li>
                <li>Flexible and cost-effective advertising solutions</li>
                <li>Access to a large and engaged audience of Indian consumers</li>
              </ul>
            </CollapsibleContent>
          </Collapsible>
          <Collapsible>
            <CollapsibleTrigger className="flex w-full items-center justify-between rounded-lg bg-background p-4 text-lg font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 [&[data-state=open]>svg]:rotate-180">
              What are the pricing packages for Manoindia?
              <ChevronDownIcon className="h-5 w-5 transition-transform" />
            </CollapsibleTrigger>
            <CollapsibleContent className="rounded-lg bg-muted p-4 text-muted-foreground dark:bg-card">
              Manoindia offers a range of pricing packages to suit the needs of businesses of all sizes:
              <ul className="mt-4 list-disc space-y-2 pl-6">
                <li>Starter Package: ₹5,000/month - Ideal for small businesses and startups</li>
                <li>Professional Package: ₹15,000/month - Suitable for medium-sized businesses</li>
                <li>Enterprise Package: ₹50,000/month - Designed for large businesses and corporations</li>
                <li>Custom Packages: Tailored solutions for specific business requirements</li>
              </ul>
              All packages include a range of features, such as ad creation, targeting, and performance tracking.
              Contact our sales team for more information on the best package for your business.
            </CollapsibleContent>
          </Collapsible>
          <Collapsible>
            <CollapsibleTrigger className="flex w-full items-center justify-between rounded-lg bg-background p-4 text-lg font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 [&[data-state=open]>svg]:rotate-180">
              How can businesses get started with Manoindia?
              <ChevronDownIcon className="h-5 w-5 transition-transform" />
            </CollapsibleTrigger>
            <CollapsibleContent className="rounded-lg bg-muted p-4 text-muted-foreground dark:bg-card">
              To get started with Manoindia, businesses can follow these simple steps:
              <ol className="mt-4 list-decimal space-y-2 pl-6">
                <li>Visit the Manoindia website and click on the "Sign Up" button</li>
                <li>Fill out the registration form with your business details</li>
                <li>Choose the pricing package that best fits your advertising needs</li>
                <li>Create and launch your first advertising campaign</li>
                <li>Monitor your campaign performance and adjust your strategy as needed</li>
              </ol>
              Our team of advertising experts is available to provide guidance and support throughout the process.
              Contact us today to learn more about how Manoindia can help grow your business.
            </CollapsibleContent>
          </Collapsible>
        </div>
      </div>
    </section>

{/* FOOTER SECTION */}
    <footer className="bg-muted py-12">
      <div className="container max-w-7xl grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        <div className="space-y-2">
          <h3 className="text-lg font-semibold">Quick Links</h3>
          <nav className="grid gap-2">
            <Link href="#" className="hover:underline" prefetch={false}>
              Home
            </Link>
            <Link href="#" className="hover:underline" prefetch={false}>
              Features
            </Link>
            <Link href="#" className="hover:underline" prefetch={false}>
              About
            </Link>
            <Link href="#" className="hover:underline" prefetch={false}>
              Contact
            </Link>
            <Link href="#" className="hover:underline" prefetch={false}>
              Privacy Policy
            </Link>
            <Link href="#" className="hover:underline" prefetch={false}>
              Terms of Service
            </Link>
          </nav>
        </div>
        <div className="space-y-2">
          <h3 className="text-lg font-semibold">Contact</h3>
          <div className="space-y-1">
            <p>
              <MailIcon className="w-4 h-4 inline-block mr-2" />
              support@example.com
            </p>
            <p>
              <PhoneIcon className="w-4 h-4 inline-block mr-2" />
              +1 (555) 123-4567
            </p>
            <div className="flex space-x-2">
              <Link href="#" className="hover:text-primary" prefetch={false}>
                <TwitterIcon className="w-5 h-5" />
              </Link>
              <Link href="#" className="hover:text-primary" prefetch={false}>
                <FacebookIcon className="w-5 h-5" />
              </Link>
              <Link href="#" className="hover:text-primary" prefetch={false}>
                <InstagramIcon className="w-5 h-5" />
              </Link>
              <Link href="#" className="hover:text-primary" prefetch={false}>
                <LinkedinIcon className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
        <div className="space-y-2">
          <h3 className="text-lg font-semibold">Newsletter</h3>
          <p>Subscribe to our newsletter for updates and tips.</p>
          <form className="flex gap-2">
            <Input type="email" placeholder="Enter your email" className="flex-1" />
            <Button type="submit">Subscribe</Button>
          </form>
        </div>
        <div className="space-y-2">
          <h3 className="text-lg font-semibold">About Us</h3>
          <p>We are a team of passionate designers and developers creating beautiful and functional products.</p>
        </div>
      </div>
      <div className="container max-w-7xl mt-8 text-center text-sm text-muted-foreground">
        &copy; 2024 Example Inc. All rights reserved.
      </div>
    </footer>
    </>
  )
}


// SVG ICONS

function ChevronDownIcon(props:any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m6 9 6 6 6-6" />
    </svg>
  )
}


function XIcon(props:any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 6 6 18" />
      <path d="m6 6 12 12" />
    </svg>
  )
}

function CalendarIcon(props:any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M8 2v4" />
      <path d="M16 2v4" />
      <rect width="18" height="18" x="3" y="4" rx="2" />
      <path d="M3 10h18" />
    </svg>
  )
}


function MountainIcon(props:any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
    </svg>
  )
}


function PaletteIcon(props:any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="13.5" cy="6.5" r=".5" fill="currentColor" />
      <circle cx="17.5" cy="10.5" r=".5" fill="currentColor" />
      <circle cx="8.5" cy="7.5" r=".5" fill="currentColor" />
      <circle cx="6.5" cy="12.5" r=".5" fill="currentColor" />
      <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z" />
    </svg>
  )
}


function PhoneIcon(props:any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  )
}


function RocketIcon(props:any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" />
      <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" />
      <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" />
      <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" />
    </svg>
  )
}


function SearchIcon(props:any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.3-4.3" />
    </svg>
  )
}


function SlidersVerticalIcon(props:any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="4" x2="4" y1="21" y2="14" />
      <line x1="4" x2="4" y1="10" y2="3" />
      <line x1="12" x2="12" y1="21" y2="12" />
      <line x1="12" x2="12" y1="8" y2="3" />
      <line x1="20" x2="20" y1="21" y2="16" />
      <line x1="20" x2="20" y1="12" y2="3" />
      <line x1="2" x2="6" y1="14" y2="14" />
      <line x1="10" x2="14" y1="8" y2="8" />
      <line x1="18" x2="22" y1="16" y2="16" />
    </svg>
  )
}


function StarIcon(props:any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  )
}


function UploadIcon(props:any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
      <polyline points="17 8 12 3 7 8" />
      <line x1="12" x2="12" y1="3" y2="15" />
    </svg>
  )
}


function FacebookIcon(props:any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  )
}


function InstagramIcon(props:any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  )
}


function LinkedinIcon(props:any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  )
}


function MailIcon(props:any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="20" height="16" x="2" y="4" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  )
}



function TwitterIcon(props:any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
    </svg>
  )
}

function MenuIcon(props:any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="4" x2="20" y1="12" y2="12" />
      <line x1="4" x2="20" y1="6" y2="6" />
      <line x1="4" x2="20" y1="18" y2="18" />
    </svg>
  )
}

export default Homepage