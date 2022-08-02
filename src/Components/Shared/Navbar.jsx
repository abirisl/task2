import React, { useState } from 'react';
import { AiOutlineSearch } from 'react-icons/ai';
import { IoIosArrowBack } from 'react-icons/io';
import { IoIosArrowForward } from 'react-icons/io';
import { RiHome6Line } from 'react-icons/ri';
import { FiMusic } from 'react-icons/fi';
import { GiTrenchBodyArmor } from 'react-icons/gi';
import {AiOutlineCalendar } from 'react-icons/ai';
import { BsStopCircle } from 'react-icons/bs';
import { MdOutlineLibraryMusic } from 'react-icons/md';
import { GrFavorite } from 'react-icons/gr';
import { IoMdContacts } from 'react-icons/io';
import { GiMusicSpell } from 'react-icons/gi';
import images from '../../images/guitter.png';
import Banner from '../Home/Banner';
const Navbar = () => {
    const [open, setOpen] = useState(true);

    return (
        <div className='flex'>
            <div className={`flex h-screen p-5 pt-9 ${open ? "w-72" : "w-16"} duration-300 relative`}>
                <IoIosArrowBack className='absolute text-2xl -right-3 cursor-pointer' />
                <IoIosArrowForward className='absolute text-2xl -right-16 cursor-pointer' onClick={() => setOpen(!open)}/>
                <div>
                   <div className='flex'>
                    <img src={images} alt='' width={40}/>
                   <h1 className={`text-2xl ml-3 mt-2 ${!open && "scale-0"} duration-300`}><span className='text-red-600 font-bold '>Sazhe</span>Sound</h1>
                   </div>
                    <div className='flex p-3 mt-5'>
                        <RiHome6Line className='text-xl cursor-pointer mr-4 bg-red-500' />

                        <h1 className={`${!open && "scale-0"} duration-300`}>Home</h1>
                    </div>
                    <div className='flex p-3'>
                        <FiMusic className='text-xl cursor-pointer mr-4' />
                        <h1 className={`${!open && "scale-0"} duration-300`}>Library</h1>
                    </div>

                    <p className='text-sm p-3 ml-1'>Discover</p>

                    <div className='flex p-3'>
                        <AiOutlineCalendar className='text-xl cursor-pointer mr-4' />
                        <h1 className={`${!open && "scale-0"} duration-300`}>Discover Weekly</h1>
                    </div>
                    <div className='flex p-3'>
                        <IoMdContacts className='text-xl cursor-pointer mr-4' />
                        <h1 className={`${!open && "scale-0"} duration-300`}>Made For You</h1>
                    </div>
                    <div className='flex p-3'>
                        <MdOutlineLibraryMusic className='text-xl cursor-pointer mr-4' />
                        <h1 className={`${!open && "scale-0"} duration-300`}>Daily Mix</h1>
                    </div>

                    <p className='text-sm p-3 ml-1'>Your Collection</p>

                    <div className='flex p-3'>
                        <GrFavorite className='text-xl cursor-pointer mr-4' />
                        <h1 className={`${!open && "scale-0"} duration-300`}>Discover Weekly</h1>
                    </div>
                    <div className='flex p-3'>
                        <BsStopCircle className='text-xl cursor-pointer mr-4' />
                        <h1 className={`${!open && "scale-0"} duration-300`}>Made For You</h1>
                    </div>
                    <div className='flex p-3'>
                        <GiMusicSpell className='text-xl cursor-pointer mr-4' />
                        <h1 className={`${!open && "scale-0"} duration-300`}>Daily Mix</h1>
                    </div>

                </div>

            </div>

            <div className='navbar-end mt-6 ml-20'>
                <label htmlFor="email" className="relative text-gray-400 focus-within:text-gray-600 block">

                    <AiOutlineSearch className="pointer-events-none w-8 h-8 absolute top-1/2 transform -translate-y-1/2 left-3" />

                    <input type="email" name="email" id="email" placeholder="Tailor Swift" className="form-input w-9/12 pl-16 py-3 rounded-full bg-base-200" />
                </label>
                <Banner/>
            </div>
        </div>
    );
};

export default Navbar;