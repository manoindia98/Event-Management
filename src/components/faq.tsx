import { Collapsible, CollapsibleTrigger, CollapsibleContent } from "@/components/ui/collapsible"

export function FAQ() {
  return (
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
  )
}

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
