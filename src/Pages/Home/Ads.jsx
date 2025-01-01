import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay} from 'swiper/modules';

import 'swiper/css';

const adsElements=[
    {
        imageUrl:'https://t4.ftcdn.net/jpg/05/37/32/57/360_F_537325726_GtgjRiyc37BLPn9OmisBVVZec9frLaL0.jpg',
        id:'nature'
    },
    {
        imageUrl:'https://t4.ftcdn.net/jpg/05/37/32/57/360_F_537325726_GtgjRiyc37BLPn9OmisBVVZec9frLaL0.jpg',
        id:'nature'
    },
    {
        imageUrl:'https://t4.ftcdn.net/jpg/05/37/32/57/360_F_537325726_GtgjRiyc37BLPn9OmisBVVZec9frLaL0.jpg',
        id:'nature'
    },
    {
        imageUrl:'https://t4.ftcdn.net/jpg/05/37/32/57/360_F_537325726_GtgjRiyc37BLPn9OmisBVVZec9frLaL0.jpg',
        id:'nature'
    },
    {
        imageUrl:'https://t4.ftcdn.net/jpg/05/37/32/57/360_F_537325726_GtgjRiyc37BLPn9OmisBVVZec9frLaL0.jpg',
        id:'nature'
    },
    {
        imageUrl:'https://t4.ftcdn.net/jpg/05/37/32/57/360_F_537325726_GtgjRiyc37BLPn9OmisBVVZec9frLaL0.jpg',
        id:'nature'
    },
]

const Ads = () => {
  return (
    <div>

    <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay]}
        className='rounded-lg w-full '
      >
        
        {adsElements.map(({imageUrl,id})=><SwiperSlide key={id}><img src={imageUrl} alt={`ad${id}`} className='w-full' /></SwiperSlide>)}
    </Swiper>
      
    </div>
  )
}

export default Ads


const AdUnit =({imageUrl,id})=>
    
<AdUnit imageUrl={imageUrl} id={id} key={id}/>