import React from "react";

export default function ViewStudent(){
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
                    <h2 className="text-2xl text-white font-bold">Students List</h2>
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
                                <th className="p-3 text-left">Actions</th>
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
                                <td className="p-3 text-center">
                                    <a href="#" className="text-gray-400 hover:text-gray-100 mr-2">
                                        <i className="material-icons-outlined text-base">visibility</i>
                                    </a>
                                    <a href="#" className="text-gray-400 hover:text-gray-100  mx-2">
                                        <i className="material-icons-outlined text-base">edit</i>
                                    </a>
                                    <a href="#" className="text-gray-400 hover:text-gray-100  ml-2">
                                        <i className="material-icons-round text-base">delete_outline</i>
                                    </a>
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
                                <td className="p-3 text-center">
                                    <a href="#" className="text-gray-400 hover:text-gray-100 mr-2">
                                        <i className="material-icons-outlined text-base">visibility</i>
                                    </a>
                                    <a href="#" className="text-gray-400 hover:text-gray-100  mx-2">
                                        <i className="material-icons-outlined text-base">edit</i>
                                    </a>
                                    <a href="#" className="text-gray-400 hover:text-gray-100  ml-2">
                                        <i className="material-icons-round text-base">delete_outline</i>
                                    </a>
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
                                <td className="p-3 text-center">
                                    <a href="#" className="text-gray-400 hover:text-gray-100 mr-2">
                                        <i className="material-icons-outlined text-base">visibility</i>
                                    </a>
                                    <a href="#" className="text-gray-400 hover:text-gray-100  mx-2">
                                        <i className="material-icons-outlined text-base">edit</i>
                                    </a>
                                    <a href="#" className="text-gray-400 hover:text-gray-100  ml-2">
                                        <i className="material-icons-round text-base">delete_outline</i>
                                    </a>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
                </div>
            </div>
            </div> 
        </div>
        </>
    )
}
