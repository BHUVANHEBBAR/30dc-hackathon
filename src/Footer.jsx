// eslint-disable-next-line no-unused-vars
import React from 'react'

const Footer = () => {
  return (
    

<footer className="bg-btnColor rounded-lg shadow bg-opacity-70 m-2 md:m-4 lg:m-6">
    <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div className="sm:flex sm:items-center sm:justify-between">
            <a href="#" className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse">
                <img src="/assets/plant.png" className="h-8" alt="Logo" />
                <span className="self-center text-2xl font-semibold whitespace-nowrap ">Tiny Buds</span>
            </a>
            <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 ">
                <li>
                    <a href="#" className="hover:underline me-4 md:me-6">About</a>
                </li>
                <li>
                    <a href="#" className="hover:underline me-4 md:me-6">Privacy Policy</a>
                </li>
                <li>
                    <a href="#" className="hover:underline me-4 md:me-6">Locate Us</a>
                </li>
                <li>
                    <a href="#" className="hover:underline">Contact Us</a>
                </li>
            </ul>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto  lg:my-8" />
        <span className="block text-sm text-gray-500 sm:text-center ">© 2024 <a href="#" className="hover:underline">TBA™</a>. All Rights Reserved.</span>
    </div>
</footer>


  )
}

export default Footer