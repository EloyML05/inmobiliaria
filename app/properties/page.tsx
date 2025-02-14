import React from 'react'
import Properties from '@/Themes/properties.json'
import PropertyCard from '@/components/property-card'
export default function PropertiesPage() {
  return (
    <>
    <section className="px-4 py-6">
      <div className="container-xl lg:container m-auto px-4 py-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {Properties.map((p)=> <PropertyCard key={p.name} property={p} />)}
        </div>
      </div>
    </section>
    </>
  )
}
