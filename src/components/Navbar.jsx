import React from "react";

export default function Navbar(){
    return(
        <>
        <div className="bg-gray-700">
            <div className="flex justify-between items-center p-6 px-6 lg:px-0 container mx-auto">
                <div className="text-lg font-bold uppercase text-white">GPM</div>
                <input className="peer hidden" type="checkbox" name="hamburger" id="hamburger" />
                <label className="peer-checked:hamburger block relative cursor-pointer lg:hidden border-2 border-gray-300 peer-checked:boarder-2 peer-checked:border-white p-3 rounded-md transition-all" for="hamburger">
                    <div className="m-auto w-6 h-0.5 rounded bg-gray-300 transition-all duration-300"></div>
                    <div className="m-auto mt-2 w-6 h-0.5 rounded bg-gray-300 transition-all duration-300"></div>
                </label>

                <div className="-translate-y-full peer-checked:translate-y-0 lg:translate-y-0 lg:translate-y-0 inset-0 fixed lg:static pt-20 lg:pt-0 bg-white lg:bg-transparent -z-10 lg:z-10 lg:h-auto lg:w-auto transition-all duration-300 ease-in-out">
                    <div className="bg-gray-300 text-white shadow-md lg:bg-transparent lg:shadow-none py-10 lg:py-0 flex flex-col lg:items-center lg:flex-row px-6 space-y-4 lg:space-y-0 lg:space-x-12">
                        <a href="">Home</a>
                        <a href="">About</a>
                        <a href="">Contact</a>
                        <a href="">GPMumbai</a>
                        <a href="">MIS Portal</a>
                    </div>

                </div>
            </div>
        </div>
        </>
    )
}