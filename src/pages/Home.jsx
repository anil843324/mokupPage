import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { dataList } from "../redux/dataAction"
import "../pages/Home.css"
const Home = () => {
  const dispatch = useDispatch()
  const data = useSelector((state) => state.fetchData);



  useEffect(() => {
    dispatch(dataList());
  }, []);

  console.log(data)

  return (
    <div className='homeContainer'>
         <hr />
      <span className='highlight'>Highlights</span>
       
      <div className='dataBigConatainer'>
        {
          data.map((ele) => (
            <div className='dataContainer'>
                
                 <img src={ele.url} alt="pic" />

            </div>
          ))

        }
      </div>




    </div>
  )
}

export default Home