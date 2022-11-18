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
