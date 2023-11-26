import React from 'react'
import "../styles/homeProStyle.css"

const HomePro = (props) => {
  return (
    <div class="container">
    <div class="card">
        <div class="imgBx">
            <img src={props.productData.imgUrl} alt="nike-air-shoe"/>
        </div>

        <div class="contentBx">

            <h2>{props.productData.title}</h2>

            <div class="size">
                <h3>Size :</h3>
                <span>7</span>
                <span>8</span>
                <span>9</span>
                <span>10</span>
            </div>

            <div class="color">

                <h3>Color :</h3>
                <span></span>
                <span></span>
                <span></span>
            </div>
            <a href="#">Buy Now</a>
        </div>

    </div>
</div>
  )
}

export default HomePro