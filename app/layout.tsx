import React from 'react'
import '@/assets/styles/globals.css'
import Navbar from '@/components/navbar'
import Footer from '@/components/footer'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body>
        <Navbar/>

          {children}
          <Footer/>
      </body>
    </html>
  )
}
