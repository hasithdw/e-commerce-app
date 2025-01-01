import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/grid';
import 'swiper/css/pagination';

import { Grid, Pagination,Mousewheel } from 'swiper/modules';
import { IconButton } from '@mui/material';

const productArr=[
    {
        imageUrl:'https://t4.ftcdn.net/jpg/05/37/32/57/360_F_537325726_GtgjRiyc37BLPn9OmisBVVZec9frLaL0.jpg',
        productTitle:'Item A' ,
        price:'1000',
        id:''
    },
    {
        imageUrl:'https://t4.ftcdn.net/jpg/05/37/32/57/360_F_537325726_GtgjRiyc37BLPn9OmisBVVZec9frLaL0.jpg',
        productTitle:'Item B' ,
        price:'1000',
        id:''
    },
    {
        imageUrl:'https://t4.ftcdn.net/jpg/05/37/32/57/360_F_537325726_GtgjRiyc37BLPn9OmisBVVZec9frLaL0.jpg',
        productTitle:'Item C' ,
        price:'1000',
    },
    {
        imageUrl:'https://t4.ftcdn.net/jpg/05/37/32/57/360_F_537325726_GtgjRiyc37BLPn9OmisBVVZec9frLaL0.jpg',
        productTitle:'Item D' ,
        price:'1000',
    },
    {
        imageUrl:'https://t4.ftcdn.net/jpg/05/37/32/57/360_F_537325726_GtgjRiyc37BLPn9OmisBVVZec9frLaL0.jpg',
        productTitle:'Item E' ,
        price:'1000',
    },
    {
        imageUrl:'https://t4.ftcdn.net/jpg/05/37/32/57/360_F_537325726_GtgjRiyc37BLPn9OmisBVVZec9frLaL0.jpg',
        productTitle:'Item F' ,
        price:'1000',
    },
    {
        imageUrl:'https://t4.ftcdn.net/jpg/05/37/32/57/360_F_537325726_GtgjRiyc37BLPn9OmisBVVZec9frLaL0.jpg',
        productTitle:'Item G' ,
        price:'1000',
    },
    {
        imageUrl:'https://t4.ftcdn.net/jpg/05/37/32/57/360_F_537325726_GtgjRiyc37BLPn9OmisBVVZec9frLaL0.jpg',
        productTitle:'Item H' ,
        price:'1000',
    },
    {
        imageUrl:'https://t4.ftcdn.net/jpg/05/37/32/57/360_F_537325726_GtgjRiyc37BLPn9OmisBVVZec9frLaL0.jpg',
        productTitle:'Item I' ,
        price:'1000',
    },
]

const Product = ({title,rowscount,slidesPerView}) => {
  return (
    <section className='w-full mt-6'>
      <h1 className='text-lg font-bold mb-3'>{title}</h1>

      <Swiper
        slidesPerView={Number(slidesPerView)}
        grid={{
          rows: Number(rowscount),
        }}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        mousewheel={true}
        modules={[Grid, Pagination,Mousewheel]}
        className="mySwiper"
      >
        
        {productArr.map(({imageUrl,productTitle ,price},index)=>
        <SwiperSlide key={index}>
            <ProductUnit imageUrl={imageUrl} productTitle={productTitle} price={price} id={index}  />
        </SwiperSlide>)}


      </Swiper>
    </section>
  )
}

export default Product


const ProductUnit=({imageUrl,productTitle ,price,id})=>
    <IconButton sx={{
        borderRadius:'4px',
        marginBottom:'20px'

    }}>
    <div className='w-full mb-4'>
        <img src={imageUrl} alt={`product_unit_${id}`} />
        <h3 className='text-sm font-semibold text-gray-900'>{productTitle}</h3>
        <h2 className='text-lg font-semibold text-gray-900'>Rs:{price}</h2>
    </div>
    </IconButton>
    