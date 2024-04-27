// eslint-disable-next-line no-unused-vars
import React from 'react';
import GoogleMapsComponent from './GoogleMapsComponent';

const LocateUs = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="max-w-screen-lg w-full bg-gray-100 p-8 rounded-lg shadow-lg ">
        <h1 className="text-3xl font-bold mb-4 font-mono underline italic text-center">Locate Us</h1>
        <div className="w-full h-96 sm:h-80 md:h-96 lg:h-120 xl:h-144 overflow-auto ">
          <GoogleMapsComponent />
        </div>
      </div>
    </div>
  );
}

export default LocateUs;
