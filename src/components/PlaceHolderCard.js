import React from 'react'
import "../styles/placeHolderCardStyle.css"
import { Placeholder } from 'react-bootstrap'

const PlaceHolderCard = () => {
  return (
    <div>
   <main className='ps-5 mt-3 ms-5'>
  <ul class="o-vertical-spacing o-vertical-spacing--l ">
    <li class="blog-post o-media">
      <div class="o-media__figure">
        <Placeholder className="skeleton-box h-100 me-4 rounded" style={{width:"290px"}} bg="secondary"></Placeholder>
      </div>
      <div class="o-media__body">
        <div class="o-vertical-spacing">
          <h3 class="blog-post__headline">
            <Placeholder class="skeleton-box" style={{width:"240px"}} bg="secondary"></Placeholder>
          </h3>
          <p>
            <Placeholder class="skeleton-box" style={{width:"550px"}} bg="secondary"></Placeholder>
            <Placeholder class="skeleton-box" style={{width:"630px"}} bg="secondary"></Placeholder>
            <Placeholder class="skeleton-box" style={{width:"560px"}} bg="secondary"></Placeholder>
            <Placeholder class="skeleton-box" style={{width:"600px"}} bg="secondary"></Placeholder>
            <Placeholder class="skeleton-box" style={{width:"620px"}} bg="secondary"></Placeholder>
            <Placeholder class="skeleton-box" style={{width:"500px"}} bg="secondary"></Placeholder>
          </p>
          <div class="blog-post__meta">
            <Placeholder class="skeleton-box" style={{width:"70px"}} bg="secondary"></Placeholder>
          </div>
        </div>
      </div>
    </li>
  </ul>
  </main>
    </div>
  )
}

export default PlaceHolderCard