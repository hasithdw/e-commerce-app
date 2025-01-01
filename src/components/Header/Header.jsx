import SearchIcon from '@mui/icons-material/Search';
import MenuIcon from '@mui/icons-material/Menu';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { IconButton } from '@mui/material';
import { useState } from 'react';

const Header = () => {

    const[isSearch,SetIsSearch]=useState(false);
  return (
    <div>
      <header className='w-full p-5 bg-my-background flex justify-between items-center fixed top-0 left-0 z-50 shadow-lg'>
            <div className='flex space-x-4 items-center'>
                <IconButton><MenuIcon/></IconButton>
                <h1 className='text-2xl font-medium' style={{
                    display:
                    window.innerWidth<640?
                        isSearch?
                            'none' :
                            'inline-block'
                    :'inline-block'
                }}>HD<span className='text-red-900'>W</span></h1>
                <div className='flex items-center bg-slate-200 rounded-full overflow-hidden'>
                    <input type="text" style={{
                        display:
                        window.innerWidth<640?
                            isSearch?
                                'inline-block' :
                                'none'
                        :'inline-block'
                        
                        }} placeholder="Search" className=' outline-none p-2 text-sm bg-inherit w-40'/>
                    <IconButton onClick={()=>{
                        if(window.innerWidth<640){
                            SetIsSearch(!isSearch)
                        }

                    }}>
                    <SearchIcon/>
                    </IconButton>
                </div>
            </div>
            <IconButton><ShoppingCartIcon/></IconButton>
      </header>
    </div>
  )
}

export default Header
