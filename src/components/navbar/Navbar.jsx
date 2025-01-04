import React from 'react'
import logo from '../navbar/assets/Group 2.svg'
const Navbar = () => {
    return (
        <>
            <div className='border h-[99px] bg-[#F7F7FF] px-20 flex items-center justify-between'>
                <div className='w-[392.19px] h-[41.45px] p-1'>
                    <img src={logo} alt="" />
                </div>
                <div className='w-[616px] h-[41.45px] flex justify-between'>
                    <div className='flex gap-6 pt-2'>
                        <button className='px-4 rounded-lg hover:bg-gray-200'>Home</button>
                        <button className='px-4 rounded-lg hover:bg-gray-200'>Services</button>
                        <button className='px-4 rounded-lg hover:bg-gray-200'>About Us</button>
                        <button className='px-4 rounded-lg hover:bg-gray-200'>Join Our Team</button>
                    </div>
                    <div className='flex w-32'>
                        <button className='text-center p-1 w-full rounded-lg bg-lime-300 hover:bg-lime-400'>
                            <span>
                                Contact Us
                            </span>
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar