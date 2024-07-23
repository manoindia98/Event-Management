import React from 'react'


export default function BlogLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode
}) {
  return (
    <section>
      {/* Include shared UI here e.g. a header or sidebar */}
      <div>Top Artists status</div>
        {children}
      
    </section>
  )
}