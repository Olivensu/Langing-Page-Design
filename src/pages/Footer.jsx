import React from 'react'
import image22 from '../images/image22.png'
import { Grid } from '@mui/material'
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import logo from '../images/logo.PNG'
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import CallIcon from '@mui/icons-material/Call';
import EmailIcon from '@mui/icons-material/Email';

export const Footer = () => {
  return (
    <div  className="bg-primary-500 py-5 text-start text-white">
        <div className='max-w-7xl mx-auto px-5 md:px-24'>
            <div className='grid grid-cols-1 md:grid-cols-10 gap-5 items-center'>
                <div className=' col-span-4 grid grid-cols-1 md:grid-cols-2 gap-4 mt-1 w-full md:w-5/6'>
                    <img className='w-full max-h-60' src={image22} alt="" />
                    <div className=''>
                    <h1 className='text-lg mt-[-5px]'>Come visit us!</h1>
                    <div className='grid grid-cols-2 md:grid-cols-1 gap-3 my-3'>
                    <div className='flex items-center'>
                        
                        <div className='w-7'>
                        <Grid container sx={{ color: 'tomato' }}>
                                <AccountBalanceIcon  />
                        </Grid>
                        </div>
                        <p className='text-sm text-gray-400 ml-3'>71 Park Lane, London <br />
                        SW43 2LW </p>
                    </div>
                    <div className='flex items-center'>
                        
                        <div className='w-7'>
                        <Grid container sx={{ color: 'tomato' }}>
                                <AccessTimeIcon  />
                        </Grid>
                        </div>
                        <p className='text-sm text-gray-400 ml-3'>Sunday to Friday <br />
                        8:00 - 21:00</p>
                    </div>
                    </div>
                    </div>
                </div>
                <div className=' col-span-2 mx-auto'>
                    <img className='md:w-3/5 w-28' src={logo} alt="" />
                </div>
                <div className=' col-span-4'>
                    <p className=' text-lg'>Join our newsletter for exclusive offers!</p>
                    <div className='grid md:flex my-2'>
                        <input placeholder='Name' className='m-1 w-full placeholder:text-gray-500 bg-white p-2' type="text" name="" id="" />
                        <input placeholder='Email Address' className='m-1 w-full placeholder:text-gray-500 bg-white p-2' type="text" name="" id="" />
                    </div>
                    <div className='flex justify-between items-center'>
                        <button className='px-8 py-1 btn border-2 border-red-500 bg-red-500 hover:bg-red-700 text-white mx-1'>Sign Up</button>
                        <div className='flex'>
                        <div className='mx-1'>
                            <Grid container sx={{ color: 'tomato' }}>
                                    <InstagramIcon  />
                            </Grid>
                        </div>
                        <div className='mx-1'>
                            <Grid container sx={{ color: 'tomato' }}>
                                    <FacebookIcon  />
                            </Grid>
                        </div>
                        <div className='mx-1'>
                            <Grid container sx={{ color: 'tomato' }}>
                                    <TwitterIcon  />
                            </Grid>
                        </div>
                        </div>
                    </div>
                </div>

            </div>
            <div className=' w-full h-[2px] bg-slate-600 my-5'></div>



            <div className='grid grid-cols-1 md:grid-cols-10 gap-5 items-center'>
                <div className=' md:col-span-4 grid grid-cols-3 gap-3 mt-1'>
                    <div>
                        <p className='text-lg'>Shop</p>
                        <div className='grid grid-cols-1 text-gray-400 text-sm'>
                            <p>Cameras</p>
                            <p>Lances</p>
                            <p>Brand</p>
                            <p>Accessories</p>
                            <p>Studio</p>
                        </div>
                    </div>
                    <div>
                        <p className='text-lg'>Used</p>
                        <div className='grid grid-cols-1 text-gray-400 text-sm'>
                            <p>Buy & Sell</p>
                            <p>Policy</p>
                            <p>Report</p>
                        </div>
                    </div>
                    <div>
                        <p className='text-lg'>About</p>
                        <div className='grid grid-cols-1 text-gray-400 text-sm'>
                            <p>Contact</p>
                            <p>Our Story</p>
                            <p>Blog</p>
                        </div>
                    </div>
                </div>
                <div className='md:col-span-2 mx-auto flex'>
                    <button className='px-5 py-1 btn border-2 border-red-500 bg-red-500 hover:bg-red-700 text-white'>USD</button>
                    <button className='px-5 py-1 btn ml-5 border-2 border-red-500 text-black  outline-2  outline-red-500 hover:bg-red-500 hover:text-white'>EUR</button>
                </div>
                <div className=' md:col-span-4 md:w-2/4 mx-auto'>
                    <p className=' text-lg'>Contact Information</p>
                    <div className='flex items-center my-3'>
                        
                        <div className='w-7'>
                        <Grid container sx={{ color: 'tomato' }}>
                                <CallIcon  />
                        </Grid>
                        </div>
                        <p className='text-sm text-gray-400 ml-3'>+972 123-456-78</p>
                    </div>
                    <div className='flex items-center my-3'>
                        
                        <div className='w-7'>
                        <Grid container sx={{ color: 'tomato' }}>
                                <EmailIcon  />
                        </Grid>
                        </div>
                        <p className='text-sm text-gray-400 ml-3'>name@camera.com</p>
                    </div>
                </div>
            

            </div>
            <div className=' w-full h-[2px] bg-slate-600 my-5'></div>
            <p className=' text-center text-gray-400 text-lg my-2'>© 2023 PIXEL. All Rights Reserved</p>
        </div>
    </div>
  )
}
