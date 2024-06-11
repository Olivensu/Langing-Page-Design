import React from 'react'
import creative from '../images/Rectangle12.png'
import photo from '../images/Rectangle20.png'
import editing from '../images/Rectangle21.png'
import ArrowForwardOutlinedIcon from '@mui/icons-material/ArrowForwardOutlined';
import { Grid } from '@mui/material'
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';

export const Section2 = () => {
  return (
    <div className=''>
        <div className='grid grid-cols-1 md:grid-cols-2 mx-5 md:mx-24 gap-4 my-10 w-auto'>
            <div className="hidden md:block">
                <img className='w-full' src={creative} alt="" />
            </div>
            <div className="text-start ">
                <h1 className='text-2xl font-bold'>New to photography? Let us help!</h1>
                <p className='text-sm my-2'>We offer a variety of written & recorded guides for all aspects of photography, ranging from equipment handling to artistic theory.</p>
                <div className='flex my-2 hover:bg-slate-300  w-64 group p-1'>
                    <Grid container sx={{ color: 'tomato' }}>
                            <SearchOutlinedIcon  />
                    </Grid>
                    <input placeholder='Search Guides' className=' placeholder:text-sm placeholder:text-black border-0 border-white outline-0 group-hover:bg-slate-300 bg-white' type="text" name="" id="" />
                </div>
                <div className='md:grid grid-cols-5 gap-4 mt-1 w-full md:w-5/6'>
                    <img className='w-full col-span-2' src={editing} alt="" />
                    <div className='col-span-3'>
                    <h1 className='text-xl font-bold'>Image Editing</h1>
                    <p className='text-xs my-2'>Learn the basics of Adobe Lightroom and elevate your photos to a new standard.</p>
                    <div className='flex items-center underline underline-offset-4 w-full'>
                    <p className='text-sm w-28 text-gray-400 text-sm'>Read More </p>
                    <Grid container sx={{ color: 'tomato' }}>
                            <ArrowForwardOutlinedIcon  />
                    </Grid>
                    </div>
                    </div>
                </div>
                <div className='md:grid grid-cols-5 gap-4 w-5/6 mt-4'>
                    <img className='w-full col-span-2' src={photo} alt="" />
                    <div className='col-span-3'>
                    <h1 className='text-xl font-bold'>Composition</h1>
                    <p className='text-xs mb-1'>Master the art of creating visually appealing photography that tells a story, with practical tips and examples.</p>
                    <div className='flex items-center underline underline-offset-4 w-full'>
                    <p className='text-sm w-28 text-gray-400 text-sm'>Read More </p>
                    <Grid container sx={{ color: 'tomato' }}>
                            <ArrowForwardOutlinedIcon  />
                    </Grid>
                    </div>
                    </div>
                </div>
            </div>
            
            
        </div>
    </div>
  )
}
