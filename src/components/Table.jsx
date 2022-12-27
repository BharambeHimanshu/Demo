import React from "react";

export default function Table(){
    return(
        <>
        <div className="table-container">
            <h1 className="heading">Responsive Table</h1>
            <table className="table">
                <thead>
                    <tr>
                        <th className="p-2">Name</th>
                        <th className="p-2">Enrollment No</th>
                        <th className="p-2">Mobile Number</th>
                        <th className="p-2">Email ID</th>
                        <th className="p-2">Action</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td data-label="Name">Himanshu</td>
                        <td data-label="Enrollment No">FS20CO032</td>
                        <td data-label="Mobile Number">7208550653</td>
                        <td data-label="Email ID">himanshubharambe04@gmail.com</td>
                        <td data-label="Action"><a href="Action" className="btn">View</a></td>
                    </tr>
                    <tr>
                        <td data-label="Name">Himanshu</td>
                        <td data-label="Enrollment No">FS20CO032</td>
                        <td data-label="Mobile Number">7208550653</td>
                        <td data-label="Email ID">himanshubharambe04@gmail.com</td>
                        <td data-label="Action"><a href="Action" className="btn">View</a></td>
                    </tr>
                    <tr>
                        <td data-label="Name">Himanshu</td>
                        <td data-label="Enrollment No">FS20CO032</td>
                        <td data-label="Mobile Number">7208550653</td>
                        <td data-label="Email ID">himanshubharambe04@gmail.com</td>
                        <td data-label="Action"><a href="Action" className="btn">View</a></td>
                    </tr>
                    <tr>
                        <td data-label="Name">Himanshu</td>
                        <td data-label="Enrollment No">FS20CO032</td>
                        <td data-label="Mobile Number">7208550653</td>
                        <td data-label="Email ID">himanshubharambe04@gmail.com</td>
                        <td data-label="Action"><a href="Action" className="btn">View</a></td>
                    </tr>
                </tbody>
            </table>    
        </div>
        </>
    )
}