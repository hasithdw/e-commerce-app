import { useState } from "react"
import Ads from "./Ads"
import Product from "./Product"
import Loading from "../../components/Loading/Loading"

const Home = () => {

  const[loading,setLoading]=useState(false)

  if(loading) return <Loading/>


  return (
    <div className="py-[105px] px-5 w-full h-screen overflow-scroll">
        <Ads/>
        <Product title="Trending Products"  />
        <Product title="Trending Products"  />
      
    </div>
  )
}

export default Home
