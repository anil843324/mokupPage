import React, { useEffect } from 'react'
import { useSelector ,useDispatch } from 'react-redux';
import {dataList} from "../redux/dataAction"
const Home = () => {
    const dispatch=useDispatch()
  const data = useSelector((state) => state.fetchData);
   


  useEffect(() => {
    dispatch(dataList());
  }, []);

   console.log(data)

  return (
    <div>

    




    </div>
  )
}

export default Home