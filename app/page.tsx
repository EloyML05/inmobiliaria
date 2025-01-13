import React from 'react'
import InfoBoxes from '@/components/info-boxes'

export default function HomePage( {children}:{children:React.ReactNode} ) {
  return (
    <>
<h1>Root</h1>
    <div>
      <InfoBoxes/>
    {children}
    </div>
    </>
  )
}
