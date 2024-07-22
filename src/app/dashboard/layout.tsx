"use client"
import React from 'react'
import { Collapsible, CollapsibleTrigger, CollapsibleContent } from "../../components/ui/collapsible"
import Link from "next/link"
import { Button } from '../../components/ui/button'
import { Sheet, SheetTrigger, SheetContent } from "../../components/ui/sheet"
import { ModeToggle } from "../../components/themetoggler"
import Image from 'next/image'
import Logo from "../../../public/logo.jpg"
import { FaShoppingCart } from "react-icons/fa";
import { IoMdNotifications } from "react-icons/io";
import { IoHome } from "react-icons/io5";
import { FaNewspaper } from "react-icons/fa6";
import { FaUser } from "react-icons/fa";
import { useRouter } from 'next/navigation'



export default function DashboardLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode
})
  
{ const router = useRouter()
  return (
    <section>
      {/* Include shared UI here e.g. a header or sidebar */}
      <header className="w-full text-foreground shadow fixed bg-accent z-10 top-0 border-b-2">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8">
        <div className="flex flex-row">
        <Image
          className="rounded-full lg:ml-10 sm:ml-2"
          src={Logo}
          width={50}
          height={50}
          alt="Picture of the author"
          />
        <Link href="#" className="text-2xl font-bold ml-2 my-auto" prefetch={false}>
          Manoindia
        </Link>
        </div>
      
        <nav className="hidden md:flex">
          {/* <ul className="flex items-center space-x-6 font-bold">
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
          </ul> */}
        </nav>
        <div className="flex flex-row justify-evenly">
        {/* <div className=""><ModeToggle /></div> */}
        <Button variant="ghost"><IoMdNotifications color='#dfcaa7'size="2rem" className='mr-4'/></Button>
        
        
        
        </div>
        
        
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon">
            <FaShoppingCart color='#dfcaa7' size="2rem" />
              <span className="sr-only">Toggle navigation menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right">
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
    <div className='w-full pt-[6rem]'>
    {children}
    </div>
        
      <div className='w-full text-foreground shadow fixed bg-accent z-10 border-b-2  bottom-0'>
        <div className='container mx-auto flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8'>
        <Button variant="ghost" onClick={()=> router.push('/dashboard')}> <IoHome color='#dfcaa7' size="2rem"/></Button>
        <Button variant="ghost" onClick={()=> router.push('/dashboard/blog')} > <FaNewspaper color='#dfcaa7' size="2rem" /></Button>
        <Button variant="ghost" onClick={()=> router.push('/dashboard/user')}> <FaUser color='#dfcaa7' size="2rem" /></Button>
        </div>
      
    </div>
    </section>
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
  