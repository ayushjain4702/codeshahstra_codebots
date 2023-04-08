import React from 'react';
import BrandOne from '../images/brand/brand-01.svg'
import BrandTwo from '../images/brand/brand-02.svg'
import BrandThree from '../images/brand/brand-03.svg'
import BrandFour from '../images/brand/brand-04.svg'
import BrandFive from '../images/brand/brand-05.svg'

const TableOne = () => {
  return (
    <div
  className="shadow-default rounded-sm border border-stroke dark:border-strokedark bg-white dark:bg-boxdark pt-6 pb-2.5 xl:pb-1 px-5 sm:px-7.5">
  <h4 className="font-semibold text-xl text-black dark:text-white mb-6">Top Employees</h4>

  <div className="flex flex-col">
    <div className="grid grid-cols-3 sm:grid-cols-4 bg-gray-2 dark:bg-meta-4 rounded-sm">
      <div className="p-2.5 xl:p-5 ml-4">
        <h5 className="font-medium text-sm xsm:text-base uppercase">Name</h5>
      </div>
      <div className="p-2.5 xl:p-5 text-center">
        <h5 className="font-medium text-sm xsm:text-base uppercase">Date hired</h5>
      </div>
      <div className="p-2.5 xl:p-5 text-center">
        <h5 className="font-medium text-sm xsm:text-base uppercase">Performance</h5>
      </div>
      <div className="hidden sm:block p-2.5 xl:p-5 text-center">
        <h5 className="font-medium text-sm xsm:text-base uppercase">Contact</h5>
      </div>
      {/* <div className="hidden sm:block p-2.5 xl:p-5 text-center">
        <h5 className="font-medium text-sm xsm:text-base uppercase">Conversion</h5>
      </div> */}
    </div>

    

    <div className="grid grid-cols-3 sm:grid-cols-4 border-b border-stroke dark:border-strokedark">
      <div className="flex items-center gap-3 p-2.5 xl:p-5">
        {/* <div className="flex-shrink-0"><img src={BrandTwo} alt="Brand" /></div> */}
        <div><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-7 h-7">
            <path fill-rule="evenodd" d="M7.5 6a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM3.751 20.105a8.25 8.25 0 0116.498 0 .75.75 0 01-.437.695A18.683 18.683 0 0112 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 01-.437-.695z" clip-rule="evenodd" />
        </svg>
        </div>
        <p className="hidden sm:block text-black dark:text-white">Sara</p>
      </div>

      <div className="flex items-center justify-center p-2.5 xl:p-5">
        <p className="text-black dark:text-white">Sept 2022</p>
      </div>

      <div className="flex items-center justify-center p-2.5 xl:p-5">
        <p className="text-red-500">9.5/10</p>
      </div>

      <div className="hidden sm:flex items-center justify-center p-2.5 xl:p-5">
        <p className="text-black dark:text-white">9873257870</p>
      </div>

      {/* <div className="hidden sm:flex items-center justify-center p-2.5 xl:p-5">
        <p className="text-meta-5">4.3%</p>
      </div> */}
    </div>
    <div className="grid grid-cols-3 sm:grid-cols-4 border-b border-stroke dark:border-strokedark">
      <div className="flex items-center gap-3 p-2.5 xl:p-5">
        {/* <div className="flex-shrink-0"><img src={BrandTwo} alt="Brand" /></div> */}
        <div><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-7 h-7">
            <path fill-rule="evenodd" d="M7.5 6a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM3.751 20.105a8.25 8.25 0 0116.498 0 .75.75 0 01-.437.695A18.683 18.683 0 0112 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 01-.437-.695z" clip-rule="evenodd" />
        </svg>
        </div>
        <p className="hidden sm:block text-black dark:text-white">Kevin</p>
      </div>

      <div className="flex items-center justify-center p-2.5 xl:p-5">
        <p className="text-black dark:text-white">Jan 2022</p>
      </div>

      <div className="flex items-center justify-center p-2.5 xl:p-5">
        <p className="text-red-500">9.0/10</p>
      </div>

      <div className="hidden sm:flex items-center justify-center p-2.5 xl:p-5">
        <p className="text-black dark:text-white">9867517870</p>
      </div>

      {/* <div className="hidden sm:flex items-center justify-center p-2.5 xl:p-5">
        <p className="text-meta-5">4.3%</p>
      </div> */}
    </div>

    <div className="grid grid-cols-3 sm:grid-cols-4 border-b border-stroke dark:border-strokedark">
      <div className="flex items-center gap-3 p-2.5 xl:p-5">
        {/* <div className="flex-shrink-0"><img src={BrandThree} alt="Brand" /></div> */}
        <div><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-7 h-7">
            <path fill-rule="evenodd" d="M7.5 6a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM3.751 20.105a8.25 8.25 0 0116.498 0 .75.75 0 01-.437.695A18.683 18.683 0 0112 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 01-.437-.695z" clip-rule="evenodd" />
        </svg>
        </div>
        <p className="hidden sm:block text-black dark:text-white">Ayush</p>
      </div>

      <div className="flex items-center justify-center p-2.5 xl:p-5">
        <p className="text-black dark:text-white">Nov 2021</p>
      </div>

      <div className="flex items-center justify-center p-2.5 xl:p-5">
        <p className="text-red-500">8.5/10</p>
      </div>

      <div className="hidden sm:flex items-center justify-center p-2.5 xl:p-5">
        <p className="text-black dark:text-white">9987403395</p>
      </div>

      {/* <div className="hidden sm:flex items-center justify-center p-2.5 xl:p-5">
        <p className="text-meta-5">3.7%</p>
      </div> */}
    </div>

    <div className="grid grid-cols-3 sm:grid-cols-4 border-b border-stroke dark:border-strokedark">
      <div className="flex items-center gap-3 p-2.5 xl:p-5">
        {/* <div className="flex-shrink-0"><img src={BrandFour} alt="Brand" /></div> */}
        <div><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-7 h-7">
            <path fill-rule="evenodd" d="M7.5 6a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM3.751 20.105a8.25 8.25 0 0116.498 0 .75.75 0 01-.437.695A18.683 18.683 0 0112 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 01-.437-.695z" clip-rule="evenodd" />
        </svg>
        </div>
        <p className="hidden sm:block text-black dark:text-white">Devang</p>
      </div>

      <div className="flex items-center justify-center p-2.5 xl:p-5">
        <p className="text-black dark:text-white">July 2022</p>
      </div>

      <div className="flex items-center justify-center p-2.5 xl:p-5">
        <p className="text-red-500">8.5/10</p>
      </div>

      <div className="hidden sm:flex items-center justify-center p-2.5 xl:p-5">
        <p className="text-black dark:text-white">9856713220</p>
      </div>

      {/* <div className="hidden sm:flex items-center justify-center p-2.5 xl:p-5">
        <p className="text-meta-5">7/10</p>
      </div> */}
    </div>

    <div className="grid grid-cols-3 sm:grid-cols-4">
      <div className="flex items-center gap-3 p-2.5 xl:p-5">
        {/* <div className="flex-shrink-0"><img src={BrandFive} alt="Brand" /></div> */}
        <div><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-7 h-7">
            <path fill-rule="evenodd" d="M7.5 6a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM3.751 20.105a8.25 8.25 0 0116.498 0 .75.75 0 01-.437.695A18.683 18.683 0 0112 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 01-.437-.695z" clip-rule="evenodd" />
        </svg>
        </div>
        <p className="hidden sm:block text-black dark:text-white">Tara</p>
      </div>

      <div className="flex items-center justify-center p-2.5 xl:p-5">
        <p className="text-black dark:text-white">Aug 2022</p>
      </div>

      <div className="flex items-center justify-center p-2.5 xl:p-5">
        <p className="text-red-500">7.5/10</p>
      </div>

      <div className="hidden sm:flex items-center justify-center p-2.5 xl:p-5">
        <p className="text-black dark:text-white">9820165245</p>
      </div>

      {/* <div className="hidden sm:flex items-center justify-center p-2.5 xl:p-5">
        <p className="text-meta-5">1.9%</p>
      </div> */}
    </div>
  </div>
</div>
  );
}

export default TableOne;
