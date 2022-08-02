import React from 'react';

const Playlist = () => {
  return (
    <div>
      <div className='flex justify-between mx-8 mb-4 mt-10'>
        <h1 className='text-xl font-bold'>Popular</h1>
        <p>See all</p>
      </div>
      <div class="overflow-x-auto">
        <table class="table w-full">

          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Job</th>
              <th>Favorite Color</th>
            </tr>
          </thead>
          <tbody>
{/* 
            <tr class="hover">
              <th>1</th>
              <td>Cy Ganderton</td>
              <td>Quality Control Specialist</td>
              <td>Blue</td>
            </tr> */}

            <tr class="hover">
              <th>2</th>
              <td>Hart Hagerty</td>
              <td>Desktop Support Technician</td>
              <td>Purple</td>
            </tr>

            <tr class="hover">
              <th>3</th>
              <td>Brice Swyre</td>
              <td>Tax Accountant</td>
              <td>Red</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Playlist;