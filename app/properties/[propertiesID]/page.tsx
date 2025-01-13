import React from 'react'

export default async function PropertiesIDPage({params}:{params:Promise<{propertiesID:string}>}) {
  const {propertiesID} = await params
  return (
    <div>PropertiesIDPage {propertiesID}</div>
  )
}
