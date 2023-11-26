import React from 'react'
import '../styles/homeCardStyle.css'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const HomeCard = (props) => {
  return (
    <div>
        <article className='ms-5'>
  <figure>
    <img  className='item-img ' src={props.productData.imgUrl}alt=""/>
  </figure>
  <p className='mt-3 title-font '> {props.productData.title} <span className='title-font'><FontAwesomeIcon icon={faArrowRight} /></span></p>
  
</article>


    </div>
  )
}

export default HomeCard