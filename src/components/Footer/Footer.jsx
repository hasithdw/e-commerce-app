import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import AppsOutlinedIcon from '@mui/icons-material/AppsOutlined';
import AccountBoxOutlinedIcon from '@mui/icons-material/AccountBoxOutlined';
import { IconButton } from '@mui/material';
import { useState } from 'react';
import { Link } from 'react-router-dom';


const FooterIcon =({clickFun,Icon,name})=>{

    const clickHandle=()=>{
    
      const obj = {
        Home:true,
        Category:false,
        Profile:false,
      }

      if(name==='Category'){
        obj.Category=true;
        obj.Home=false;
        obj.Profile= false;
      }
      if(name==='Profile'){
        obj.Profile= true;
        obj.Category=false;
        obj.Home=false;
      }
      clickFun.setWhoIsClick(obj)
  }

  return(
    <Link to={name==="Home"? '/' : `/${String(name).toLowerCase()}`} >
      <IconButton sx={{
        padding:"1px"
      }}>

        <div style={{
          borderTop: clickFun.whoIsClick[name] && ' 3px solid red'
        }} className='hover:text-red-900 transition-all duration-700' onClick={()=>{clickHandle()}} >
        <Icon/>
        <p className='text-sm'>{name}</p>
        </div>

    </IconButton>
  </Link>
  )
}
    


const Footer = () => {

  const [whoIsClick,setWhoIsClick]=useState({
    Home:true,
    Category:false,
    Profile:false,
  })

  return (
    <footer className='w-full p-3 bg-my-background flex justify-between items-center fixed bottom-0 left-0 z-50 shadow-lg'>

      <FooterIcon clickFun={{whoIsClick,setWhoIsClick}} Icon={HomeOutlinedIcon} name='Home'/>
      <FooterIcon clickFun={{whoIsClick,setWhoIsClick}} Icon={AppsOutlinedIcon} name='Category'/>
      <FooterIcon clickFun={{whoIsClick,setWhoIsClick}} Icon={AccountBoxOutlinedIcon} name='Profile'/>
      
    </footer>
  )
}

export default Footer


