import React from 'react'
import PHeader from './PHeader'
import About from '../html-code/About'
import Product from './Product'
import Banner from './Banner'
import Newsletter from './Newsletter'
import PFooter from './PFooter'

export default function AllProductcode() {
  return (
    <div>
      <PHeader/>
      <Banner/>
      <Product/>
      <Newsletter/>
      <PFooter/>
    </div>
  )
}
