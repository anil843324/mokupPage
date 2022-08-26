import React from 'react'
import "./Header.css"
import { NavLink } from 'react-router-dom'
import { GiCycling, GiGolfFlag, GiAtSea } from "react-icons/gi"
import { CgGym } from "react-icons/cg"
import { FaSwimmer } from "react-icons/fa"
import { ImStarEmpty } from "react-icons/im"
// equestrain found in fontawesome
// extreme not found
//  armoury not found
// 

const Header = () => {
  return (
    <div className='container'>

      <div className='iconContainer'>



        <div className=' singleIconDiv '>
          <ImStarEmpty size={35} />
          <span>Featured</span>
        </div>

        <div className=' singleIconDiv '>
          <div>Not Found</div>
          <span>Armoury</span>
        </div>



        <div className=' singleIconDiv '>
          <FaSwimmer size={35} />
          <span>Aquatics</span>
        </div>



        <div className=' singleIconDiv '>
          <GiCycling size={35} />
          <span>Cycling</span>
        </div>



        <div className=' singleIconDiv '>
          <div>Not Found</div>
          <span>Equestrain</span>
        </div>



        <div className=' singleIconDiv '>
          <div>Not  Found</div>
          <span>Extreme</span>
        </div>




        <div className=' singleIconDiv '>
          <GiGolfFlag size={35} />
          <span>Golf</span>
        </div>



        <div className=' singleIconDiv '>
          <CgGym size={35} />
          <span>Gymnastics</span>
        </div>



        <div className=' singleIconDiv '>
          <GiAtSea size={35} />
          <span>Lake & Sea</span>
        </div>


      </div>



    </div>
  )
}

export default Header