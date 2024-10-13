import React from 'react'
import "./styles/page.css"
import SearchBar from './searchbar'
import Header from './header'
function page() {
  return (
    <div>
      {/**A propos link */}
      <Header/>
      <h1 className="title-txt">Bienvenu à Codi</h1>
      <h2 className="sub-title-txt">
      Le tout premier dico inversé...
      </h2>
      <SearchBar/>
      {/**Add barre de recherche 
       * results/or not
       * 
      */}
    </div>
  )
}

export default page
