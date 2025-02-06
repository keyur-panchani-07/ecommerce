import React from 'react'
import './DescriptionBox.css'

const DescriptionBox = () => {
  return (
    <div className='descriptionbox'>
      <div className="descriptionbox-navigator">
        <div className="descriptionbox-nav-box">Description</div>
        <div className="descriptionbox-nav-box fade">Reviews (122)</div>
      </div>
      <div className="descriptionbox-description">
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti soluta recusandae aut? 
            Odit consectetur repellat sint accusantium aliquam optio eligendi voluptate, atque nulla, 
            blanditiis ratione?
        </p>
        <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
             Voluptas ipsam iure eaque corporis facere culpa,
             porro totam ex unde dolorum possimus repudiandae perspiciatis? Quam, aliquid?
        </p>
      </div>
    </div>
  )
}

export default DescriptionBox
