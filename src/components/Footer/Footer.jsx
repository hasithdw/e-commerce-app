import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import AppsOutlinedIcon from '@mui/icons-material/AppsOutlined';
import AccountBoxOutlinedIcon from '@mui/icons-material/AccountBoxOutlined';
import { IconButton } from '@mui/material';


const FooterIcon =({Icon,name})=>
    <IconButton sx={{
        padding:"1px"
      }}>

        <div className='hover:text-red-900 transition-all duration-700'>
        <Icon/>
        <p className='text-sm'>{name}</p>
        </div>

    </IconButton>


const Footer = () => {
  return (
    <footer className='w-full p-3 bg-my-background flex justify-between items-center fixed bottom-0 left-0 z-50 shadow-lg'>

      <FooterIcon Icon={HomeOutlinedIcon} name='Home'/>
      <FooterIcon Icon={AppsOutlinedIcon} name='Category'/>
      <FooterIcon Icon={AccountBoxOutlinedIcon} name='Profile'/>
      
    </footer>
  )
}

export default Footer


