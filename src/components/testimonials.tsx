import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"

export function Testimonials() {
  return (
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
