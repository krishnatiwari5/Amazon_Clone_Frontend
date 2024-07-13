import React from 'react'
import "../Css/Home.css"
import Product from './Product'
function Home() {
  return (
    <div className='home'>
        <div className="home_container">
            <img className='home_image' src="../images/amazon-home-bg.jpg" alt="" />
       
        <div className="home_row">
            <Product
             title = "Apple iPhone 14 Plus 128GB Starlight"
              price = {89900.00} 
              image = "../images/iphone-14.jpg" 
               rating = {5}/>
            <Product 
            title = "Puma Mens Ultimate Ease - Everglide Range Walking Shoe"
            price = {1373.00} 
            image = "../images/puma-shoe.jpg" 
             rating = {5}/>
        </div>
        <div className="home_row">
        <Product 
        title = "Allen Solly Men's Jacket"
        price = {1710.00} 
        image = "../images/jacket.jpg" 
         rating = {5}/>
        <Product 
        title = "Oleev Active, with Goodness of Olive Oil Jar, 5L Jar"
        price = {1395.00} 
        image = "../images/oleev-active.jpg" 
         rating = {5}/>
        <Product 
        title = "Noise Buds VS402 Truly Wireless Earbuds (Neon Black)"
        price = {1699.00} 
        image = "../images/earbuds.jpg" 
         rating = {5}/>
        </div>
        <div className="home_row">
        <Product 
        title = "Sony Bravia 139 cm (55 inches) 4K Ultra HD Smart LED"
        price = {68390.00} 
        image = "../images/bravia.jpg" 
         rating = {5}/>
        </div>
        </div>
    </div>
  )
}

export default Home