import React from 'react'


export default function CartLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode
}) {
  return (
    <section>
      {/* Include shared UI here e.g. a header or sidebar */}
      <div className='fixed w-full bg-accent h-[4rem] top-0'>
        Your Purchase
      </div>
        <div className='mt-[5rem]'>
        {children}
        </div>
      <div className='fixed w-full bg-accent h-[4rem] bottom-0'>
        Checkout
      </div>
    </section>
  )
}