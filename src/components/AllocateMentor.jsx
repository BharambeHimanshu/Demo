import React from "react";

export default function AllocateMentor(){
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
                    <h2 className="text-2xl text-white font-bold">Allocate Mentor</h2>
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
                    <table className="table text-slate-50 border-separate space-y-6 text-sm">
                        <thead className="bg-indigo-800 text-slate-50">
                            <tr>
                                <th className="p-3 text-left">Sr No.</th>
                                <th className="p-3 text-center">Name</th>
                                <th className="p-3 text-center">Enrollment No</th>
                                <th className="p-3 text-left">Mobile No</th>
                                <th className="p-3 text-center">Email Id</th>
                                <th className="p-3 text-center">CheckBox</th>
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
                                <td class="p-4 w-4">
                                <div class="flex items-center">
                                    <input id="checkbox-table-1" type="checkbox" className="w-4 h-4  text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                                    <label for="checkbox-table-1" className="sr-only">checkbox</label>
                                </div>
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
                                <td class="p-4 w-4">
                                <div class="flex items-center">
                                    <input id="checkbox-table-1" type="checkbox" className="w-4 h-4 justify-right text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                                    <label for="checkbox-table-1" className="sr-only justify-right">checkbox</label>
                                </div>
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
                                <td class="p-4 w-4">
                                <div class="flex items-center">
                                    <input id="checkbox-table-1" type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                                    <label for="checkbox-table-1" className="sr-only">checkbox</label>
                                </div>
                            </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
                </div>
                <button className="text-center bg-transparent hover:bg-gray-500 text-slate-50 font-semibold hover:text-white py-2 px-4 border border-gray-500 hover:border-transparent rounded">
                    Allocate
                </button>
            </div>
            </div> 
        </div>
        </>
    )
}
