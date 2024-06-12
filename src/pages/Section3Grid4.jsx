import React, { useState } from 'react'
import tripod from '../images/Rectangle15.png'
import { Grid } from '@mui/material'
import ArrowForwardOutlinedIcon from '@mui/icons-material/ArrowForwardOutlined';
import StarIcon from '@mui/icons-material/Star';
import AccessAlarmIcon from '@mui/icons-material/AccessAlarm';

export const Section3Grid4 = () => {
  return (
    <div>
        <div className='mx-3'>
            <img className='w-full' src={tripod} alt="" />
            <div className='flex justify-between items-center'>
                <span className='text-xl'>Carbon Fiber Tripod</span>
                <span className='flex  items-center w-12'>
                    <Grid container sx={{ color: 'tomato' }}>
                        <StarIcon fontSize="small" />
                    </Grid>
                    <span className=' text-gray-400'>4.2</span>
                </span>
            </div>
            <p className=''>Benro</p>
            <ul className=' text-gray-400 text-xs list-disc ml-5'>
                <li>Load Capacity: 26.4 lb</li>
                <li>Max Height: 64.2"</li>
                <li>f/2.8 to f/11 Adjustable Aperture</li>
                <li>Folded Length: 16.1"</li>
            </ul>

            <div className='flex justify-between items-center my-2'>
                <div className='flex justify-between  items-center'>
                    <p className='w-6'><Grid container sx={{ color: 'tomato' }}>
                        <AccessAlarmIcon fontSize="small" />
                    </Grid></p>
                    <p className=' text-gray-400'>3h 45m</p>
                </div>
                <div>
                <p className='line-through text-gray-400'>$ 379</p>
                <p>$ 319</p>
                </div>
                
            </div>
        </div>
    </div>
  )
}
