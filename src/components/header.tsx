import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet"
import { ModeToggle } from "./themetoggler"

export function Header() {
  return (
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
