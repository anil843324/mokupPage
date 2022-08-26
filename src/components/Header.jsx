import React from 'react'
import "./Header.css"
import { GiCycling, GiGolfFlag, GiAtSea } from "react-icons/gi"
import { CgGym } from "react-icons/cg"
import { FaSwimmer } from "react-icons/fa"
import { ImStarEmpty } from "react-icons/im"
import { useDispatch } from 'react-redux'
import { categoryDataFind } from '../redux/dataAction'
// equestrain found in fontawesome
// extreme not found
//  armoury not found
// 


const Header = () => {

  const dispatch = useDispatch()

  const cagetoryFind = (name) => {
    dispatch(categoryDataFind(name))
  }







  return (
    <div className='container'>

      <div className='iconContainer'>



        <div className=' singleIconDiv  '  >
          <ImStarEmpty size={35} />
          <span>Featured</span>
        </div>

        <div className=' singleIconDiv ' onClick={() => cagetoryFind("Armoury")} >
          <div>Icon not found</div>
          <span>Armoury</span>
        </div>



        <div className=' singleIconDiv ' onClick={() => cagetoryFind("Aquatics")}>
          <FaSwimmer size={35} />
          <span>Aquatics</span>
        </div>



        <div className=' singleIconDiv ' onClick={() => cagetoryFind("Cycling")}>
          <GiCycling size={35} />
          <span>Cycling</span>
        </div>



        <div className=' singleIconDiv ' onClick={() => cagetoryFind("equestrian")}>
          <div>Icon not found</div>
          <span>Equestrain</span>
        </div>



        <div className=' singleIconDiv ' onClick={() => cagetoryFind("Extreme")}>
          <div>Icon not found</div>
          <span>Extreme</span>
        </div>




        <div className=' singleIconDiv ' onClick={() => cagetoryFind("Golf")}>
          <GiGolfFlag size={35} />
          <span>Golf</span>
        </div>



        <div className=' singleIconDiv ' onClick={() => cagetoryFind("Gymnastics")}>
          <CgGym size={35} />
          <span>Gymnastics</span>
        </div>



        <div className=' singleIconDiv ' onClick={() => cagetoryFind("Lake & Sea")}>
          <GiAtSea size={35} />
          <span>Lake & Sea</span>
        </div>


      </div>



    </div>
  )
}

export default Header