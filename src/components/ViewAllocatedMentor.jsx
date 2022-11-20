import React from "react";

export default function ViewAllocateMentor(){
    return(
        <>
        <link
            href="https://fonts.googleapis.com/css?family=Material+Icons|Material+Icons+Outlined|Material+Icons+Two+Tone|Material+Icons+Round|Material+Icons+Sharp"
            rel="stylesheet"/>
        <div
          className="flex items-center justify-center min-h-screen"
          style={{ backgroundImage: "linear-gradient(#1d2630,#485563)" }}
        >
            <div className="flex items-center justify-center ">
            <div className="col-span-12">
                <div className="overflow-auto lg:overflow-visible">
                <div className="flex lg:justify-between border-b-2 pb-1">
                    <h2 className="text-2xl text-white font-bold">View Mentor</h2>

                    <div className="relative">
                        <div className="ml-32">
                        <button className="flex items-center h-8 pl-3 pr-2 border border-gray-700 focus:outline-none bg-gray-200">
                            <span className="text-sm leading-none text-center">
                                Dropdown
                            </span>
                            <svg className="w-4 h-4 mt-px ml-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
                            </svg>
                        </button>
                        </div>
                        <div className="absolute flex flex-col w-40 ml-32 mt-1 border border-gray-700 shadow-lg bg-gray-200">
                            <input className="flex items-center h-8 px-3 text-sm border-b border-black hover:bg-gray-200 focus:outline-none" type="search" name="" id="" placeholder="Search…"/>
                            <a className="flex items-center h-8 px-3 text-sm hover:bg-gray-50" href="#">Item 1</a>
                            <a className="flex items-center h-8 px-3 text-sm hover:bg-gray-50" href="#">Item 2</a>
                            <a className="flex items-center h-8 px-3 text-sm hover:bg-gray-50" href="#">Item 3</a>
                            <a className="flex items-center h-8 px-3 text-sm hover:bg-gray-50" href="#">Item 4</a>
                        </div>
                    </div>
                    <div className="text-right flex-auto">
                    <input 
                        type="text"
                        name="name"
                        placeholder="Search"
                        className="w-1/3 py-2 bg-gray-200 text-slate-50 text-center rounded-xl" />
                    </div>
                    

                </div>
                <div className="col-span-12">
                <div className="overflow-auto lg:overflow-visible ">
                    <table className="table text-slate-50 border-separate space-y-5 text-sm">
                        <thead className="bg-indigo-800 text-slate-50">
                            <tr>
                                <th className="p-3 text-left">Sr No.</th>
                                <th className="p-3 text-center">Name</th>
                                <th className="p-3 text-center">Enrollment No</th>
                                <th className="p-3 text-left">Mobile No</th>
                                <th className="p-3 text-center">Email Id</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="bg-gray-800">

                            <td className="p-3 text-center">
                                    1
                            </td>
                                <td className="p-3 text-center">
                                    Himanshu Bharambe
                                </td>
                                <td className="p-3 text-center">
                                    FS20CO032
                                </td>
                                <td className="p-3 text-center">
                                    7208550653
                                </td>
                                <td className="p-3 text-center">
                                    himanshubharambe04@gmail.com
                                </td>
                            </tr>
                            <tr className="bg-gray-800">
                            <td className="p-3 text-center">
                                    1
                            </td>
                                <td className="p-3 text-center">
                                    Himanshu Bharambe
                                </td>
                                <td className="p-3 text-center">
                                    FS20CO032
                                </td>
                                <td className="p-3 text-center">
                                    7208550653
                                </td>
                                <td className="p-3 text-center">
                                    himanshubharambe04@gmail.com
                                </td>
                            </tr>
                            <tr className="bg-gray-800">
                            <td className="p-3 text-center">
                                    1
                            </td>
                                <td className="p-3 text-center">
                                    Himanshu Bharambe
                                </td>
                                <td className="p-3 text-center">
                                    FS20CO032
                                </td>
                                <td className="p-3 text-center">
                                    7208550653
                                </td>
                                <td className="p-3 text-center">
                                    himanshubharambe04@gmail.com
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
                </div>
                <button className="flex-center bg-transparent hover:bg-gray-500 text-slate-50 font-semibold hover:text-white py-2 px-4 border border-gray-500 hover:border-transparent rounded">
                    Get
                </button>
            </div>
            </div> 
        </div>
        </>
    )
}
