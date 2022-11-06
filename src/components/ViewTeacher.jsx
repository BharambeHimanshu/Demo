import React from "react";

export default function ViewTeacher(){
    return(
        <>
        <link
            href="https://fonts.googleapis.com/css?family=Material+Icons|Material+Icons+Outlined|Material+Icons+Two+Tone|Material+Icons+Round|Material+Icons+Sharp"
            rel="stylesheet"/>
        <div
          className="flex items-center justify-center min-h-screen"
          style={{ backgroundImage: "linear-gradient(#DCDCDC,#D3D3D3,#808080)" }}
        >
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
        </>
    )
}
