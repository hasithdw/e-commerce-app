import Ads from "./Ads"
import Product from "./Product"

const Home = () => {
  return (
    <div className="py-[100px] px-5 w-full h-screen overflow-scroll">
        Home
        <Ads/>
        <Product title="Trending Products" rowscount={1} slidesPerView={3} />
      
    </div>
  )
}

export default Home
