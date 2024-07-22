import React from 'react'


export default function AdsLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode
}) {
  return (
    <section>
      {/* Include shared UI here e.g. a header or sidebar */}
      <div>header</div>
        {children}
      <div>footer</div>
    </section>
  )
}