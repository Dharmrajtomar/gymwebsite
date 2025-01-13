import React from 'react'
import PHeader from './PHeader'
import SingleProduct from './SingleProduct'
import Newsletter from './Newsletter'
import PFooter from './PFooter'

export default function AllSingleProduct() {
  return (
    <div>
        <PHeader/>
        <SingleProduct/>
        <Newsletter/>
        <PFooter/>
    </div>
  )
}
