import Link from "next/link"

export function CallToAction() {
  return (
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
  )
}
