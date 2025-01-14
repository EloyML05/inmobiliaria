import React from 'react'
import InfoBoxes from '@/components/info-boxes'
import Hero from '@/components/hero'
import HeroProperties from '@/components/hero-properties'
export default function HomePage( {children}:{children:React.ReactNode} ) {
  return (
    <>
    <div>
      <Hero/>
      <InfoBoxes/>
    <HeroProperties/>
    {children}
    </div>
    </>
  )
}
