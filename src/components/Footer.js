import React from 'react'
import facebook from '../images/facebook@2x.png'
import twiter from '../images/twitter@2x.png'
import instagram from '../images/instagram@2x.png'


function Footer() {
 return (
  <footer className="Footer">
   <p> Golden-Face by Djen, Copyright &copy;
   2020 </p>

   <div className= "social">
          <a href="https://www.facebook.com">
              <img src= {facebook} width="24" height="24" alt="Facebook"/>
          </a>
          <a href="https://www.twitter.com">
              <img src= {twiter} width="24" height="24" alt="twitter"/>
          </a>
          <a href="https://www.instagram.com">
              <img src= {instagram} width="24" height="24" alt="instagram"/>
          </a>
          
      </div>
  </footer>
 )
}

export default Footer
