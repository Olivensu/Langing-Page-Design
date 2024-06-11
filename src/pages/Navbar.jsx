import React from 'react'
import logo from '../images/logo.PNG'
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { Grid } from '@mui/material';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import PermIdentityOutlinedIcon from '@mui/icons-material/PermIdentityOutlined';
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';

export const Navbar = () => {
  return (
    <nav className="bg-primary-500">
        <ul className='flex justify-between items-center px-4 md:px-12 py-3'>
            <li className='block md:hidden'>
                <Grid container sx={{ color: 'tomato' }}>
                        <MenuOutlinedIcon></MenuOutlinedIcon>
                </Grid>
            </li>
            <li><img className='w-28' src={logo} alt="" /></li>
            <div className='flex gap-5'>
                <Grid container sx={{ color: 'tomato' }}>
                        <PermIdentityOutlinedIcon></PermIdentityOutlinedIcon>
                </Grid>
                <Grid container sx={{ color: 'tomato' }}>
                        <ShoppingCartOutlinedIcon></ShoppingCartOutlinedIcon>
                </Grid>
                <Grid container sx={{ color: 'tomato' }}>
                        <SearchOutlinedIcon></SearchOutlinedIcon>
                </Grid>
            </div>
        </ul>
        <div className=' md:block hidden'>
        <ul className="flex  justify-between mx-10">
            <li className="relative group w-full py-4 hover:bg-red-500">
                <a href="#" className="text-white rounded-md text-sm font-medium hover:bg-red-500">Brands</a>
            </li>
            <li className="relative group hover:bg-red-500  w-full  py-4">
                <a href="#" className="text-white  rounded-md text-sm font-medium hover:bg-red-500">Cameras</a>
                <div className="absolute z-50 ml-[-250px] w-[1500px] mt-4 hidden group-hover:block bg-white dropdown-content ">
                    <div className="max-w-7xl mx-auto py-6 px-8">
                        <div className="grid grid-cols-3 gap-8">
                            <div>
                                <h4 className="font-semibold text-gray-900 underline">Digital</h4>
                                <ul>
                                    <li><a href="#" className="block text-gray-900 py-1 text-sm hover:underline">DSLR</a></li>
                                    <li><a href="#" className="block text-gray-900 py-1 text-sm hover:underline">Mirrorless</a></li>
                                    <li><a href="#" className="block text-gray-900 py-1 text-sm hover:underline">Compact</a></li>
                                    <li><a href="#" className="block text-gray-900 py-1 text-sm hover:underline">Medium Format</a></li>
                                </ul>
                            </div>
                            <div>
                                <h4 className="font-semibold text-gray-900 underline">Film</h4>
                                <ul>
                                    <li><a href="#" className="block text-gray-900 text-sm py-1 hover:underline">35mm</a></li>
                                    <li><a href="#" className="block text-gray-900 text-sm py-1 hover:underline">Medium Format</a></li>
                                    <li><a href="#" className="block text-gray-900 text-sm py-1 hover:underline">Large Format</a></li>
                                    <li><a href="#" className="block text-gray-900 text-sm py-1 hover:underline">Instant</a></li>
                                    <li><a href="#" className="block text-gray-900 text-sm py-1 hover:underline">Disposable</a></li>
                                </ul>
                            </div>
                            <div>
                                <h4 className="font-semibold text-gray-900 underline">Video</h4>
                                <ul>
                                    <li><a href="#" className="block text-gray-900 text-sm py-1 hover:underline">Camcorder</a></li>
                                    <li><a href="#" className="block text-gray-900 text-sm py-1 hover:underline">Pro-Consumer</a></li>
                                    <li><a href="#" className="block text-gray-900 text-sm py-1 hover:underline">Super Chip</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </li>
            <li className="relative group   w-full py-4 hover:bg-red-500">
                <a href="#" className="text-white px-3 py-2 rounded-md text-sm font-medium  hover:bg-red-500">Lenses</a>
            </li>
            <li className="relative group  w-full py-4 hover:bg-red-500">
                <a href="#" className="text-white px-3 py-2 rounded-md text-sm font-medium hover:bg-red-500">Accessories</a>
            </li>
            <li className="relative group  w-full py-4 hover:bg-red-500">
                <a href="#" className="text-white px-3 py-2 rounded-md text-sm font-medium hover:bg-red-500">Studio</a>
            </li>
            <li className="relative group  w-full py-4 hover:bg-red-500">
                <a href="#" className="text-white px-3 py-2 rounded-md text-sm font-medium hover:bg-red-500">Extreme</a>
            </li>
            <li className="relative group  w-full py-4 hover:bg-red-500">
                <a href="#" className="text-white px-3 py-2 rounded-md text-sm font-medium hover:bg-red-500">Used</a>
            </li>
        </ul>
        </div>
    </nav>
  )
}
