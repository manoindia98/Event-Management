"use client"

import React from 'react'
import Link from "next/link"
import Image from 'next/image'
import Logo from "./logo.jpg"
import page from './cart/page'
import { FaAd } from "react-icons/fa";
import CartLayout from './cart/layout'
import { FaUser } from "react-icons/fa";
import { IoHome } from "react-icons/io5";
import { UserButton } from '@clerk/nextjs'
import { Card } from '@/components/ui/card'
import { FaNewspaper } from "react-icons/fa6";
import { Button } from '@/components/ui/button'
import { FaShoppingCart } from "react-icons/fa";
import { IoMdNotifications } from "react-icons/io";
import { BsCalendarEventFill } from "react-icons/bs";
import { ModeToggle } from "@/components/themetoggler"
import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet"



export default function DashboardLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode
}) {


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
            <Link href="/dashboard" className="text-2xl font-bold ml-2 my-auto" prefetch={true}>
              Manoindia
            </Link>
          </div>


          <div className="ml-auto">
            <ModeToggle />
          </div>

          <div className='h-8 px-6'>
            <UserButton />
          </div>
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <FaShoppingCart color='#dfcaa7' size="2rem" />
                <span className="sr-only">Toggle navigation menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <CartLayout children={page()} />
            </SheetContent>
          </Sheet>
        </div>

      </header>


    {/* desktop layout navigation */}
      <div className='flex flex-row justify-between mx-auto '>
        <div className='hidden mt-[8rem] lg:block lg:w-[20vw] min-w-[20rem]  m-5 fixed'>
          <Card className='h-[85vh] flex flex-col justify-start p-5'>

            <Link href={'/dashboard'} prefetch={true}>
              <Button className='w-full justify-start my-4 h-auto' variant="ghost" >
                <IoHome className='mr-5' color='#dfcaa7' size="2rem" />HOME
              </Button>
            </Link>

            <Link href={'/ads'} prefetch={true}>
              <Button className='w-full justify-start my-4 h-auto' variant="ghost" >
                <FaAd className='mr-5' color='#dfcaa7' size="2rem" />BUY AD/PROMO
              </Button>
            </Link>

            <Link href={'/managment'} prefetch={true}>
              <Button className='w-full justify-start my-4 h-auto' variant="ghost" >
                <BsCalendarEventFill className='mr-5' color='#dfcaa7' size="2rem" />BOOK ARTIST
              </Button>
            </Link>

            <Link href={'/blog'} prefetch={true}>
              <Button className='w-full justify-start my-4 h-auto' variant="ghost" >
                <FaNewspaper className='mr-5' color='#dfcaa7' size="2rem" />READ BLOGS
              </Button>
            </Link>

            <Link href={'/user'} prefetch={true}>
              <Button className='w-full justify-start my-4 h-auto' variant="ghost" >
                <FaUser className='mr-5' color='#dfcaa7' size="2rem" />PROFILE
              </Button>
            </Link>
          </Card>


        </div>
        <div className='hidden mt-[8rem] lg:block lg:w-[20vw] min-w-[20rem] m-5'></div>

        <div className='w-full lg:w-[76vw] lg:pr-[10rem]  pt-[6rem] z-0 overflow-hidden'>
          {children}

        </div>
      </div>

    {/* Mobile layout navigation */}
    <div className='lg:hidden w-full h-[4rem] mt-10  z-10  bottom-0'></div>
      <div className='lg:hidden w-full text-foreground shadow fixed bg-accent z-10  bottom-0'>
        <div className='container mx-auto flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8'>

          <Link href={'/dashboard'} prefetch={true}>
            <Button variant="ghost">
              <IoHome color='#dfcaa7' size="2rem" />
            </Button>
          </Link>

          <Link href={'/ads'} prefetch={true}>
            <Button variant="ghost">
              <FaAd color='#dfcaa7' size="2rem" />
            </Button>
          </Link>

          <Link href={'/managment'} prefetch={true}>
            <Button variant="ghost">
              <BsCalendarEventFill color='#dfcaa7' size="2rem" />
            </Button>
          </Link>

          <Link href={'/blog'} prefetch={true}>
            <Button variant="ghost">
              <FaNewspaper color='#dfcaa7' size="2rem" />
            </Button>
          </Link>

          <Link href={'/user'} prefetch={true}>
            <Button variant="ghost"> <FaUser color='#dfcaa7' size="2rem" /></Button>
          </Link>
        </div>

      </div>
    </section>
  )
}


function MenuIcon(props: any) {
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
