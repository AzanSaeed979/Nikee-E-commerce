import React from 'react'
import {Cart, FlexContent, Hero, Footer, Navbar, Sales, Stories } from './components'

import {heroapi, popularsales, toprateslaes, highlight, sneaker, story, footerAPI  } from './data/data.js'

const App = () => {
  return (
   
    <>
    <Navbar />
    <Cart />
    
      
    <main className='flex flex-col gap-16 relative'>
      <Hero heroapi={heroapi}/>
      <Sales endpoint={ popularsales} ifExists />
      <Sales endpoint={toprateslaes} />
      <FlexContent endpoint={sneaker} />
      <FlexContent endpoint={highlight} />
      <Stories story={story} />
    </main>
    <Footer footerAPI={footerAPI} />

    </>
  )
}

export default App