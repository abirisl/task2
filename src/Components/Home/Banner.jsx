import React from 'react';
import { MdVerified } from 'react-icons/md'
import Playlist from './Playlist';
import bannerimg from '../../images/musicgirl.png';
const Banner = () => {
  return (
    <>
      <div className='mt-16'>
        <div class="hero h-56 relative bg-[url('https://i.pinimg.com/originals/7f/d3/03/7fd30312ab5b336f70e8426a6d084699.jpg')]">
          <div class="hero-content flex-col lg:flex-row-reverse">
            <img className='w-96 h-80 absolute -right-4 -top-20 max-w-sm lg:ml-20' src={bannerimg}  alt=''/>
            <div className='mr-80 mt-16'>

              <p className='flex'><span className='mt-1 mr-1 text-blue-700'><MdVerified /></span> Verified artist</p>
              <h1 class="text-5xl font-bold">Taylor Swift</h1>
              <p class="py-6">45,345,3451 monthly listeners</p>

            </div>
          </div>

        </div>
        <Playlist></Playlist>


      </div>
    </>
  );
};

export default Banner;