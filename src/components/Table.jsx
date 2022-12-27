import React from "react";

export default function Table(){
    return(
        <>
        <div className="table-container">
            <h1 className="heading">Responsive Table</h1>
            <table className="table">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Enrollment No</th>
                        <th>Mobile Number</th>
                        <th>Email ID</th>
                        <th>Actiom</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td data-label="Name">Name</td>
                        <td data-label="Enrollment No">Enrollment Number</td>
                        <td data-label="Mobile Number">Mobile Number</td>
                        <td data-label="Email ID">Emaiol Id</td>
                        <td data-label="Action" className="btn">View</td>
                    </tr>
                    <tr>
                        <td data-label="Name">Name</td>
                        <td data-label="Enrollment No">Enrollment Number</td>
                        <td data-label="Mobile Number">Mobile Number</td>
                        <td data-label="Email ID">Emaiol Id</td>
                        <td data-label="Action" className="btn">View</td>
                    </tr>
                    <tr>
                        <td data-label="Name">Name</td>
                        <td data-label="Enrollment No">Enrollment Number</td>
                        <td data-label="Mobile Number">Mobile Number</td>
                        <td data-label="Email ID">Emaiol Id</td>
                        <td data-label="Action" className="btn">View</td>
                    </tr>
                    <tr>
                        <td data-label="Name">Name</td>
                        <td data-label="Enrollment No">Enrollment Number</td>
                        <td data-label="Mobile Number">Mobile Number</td>
                        <td data-label="Email ID">Emaiol Id</td>
                        <td data-label="Action" className="btn">View</td>
                    </tr>
                </tbody>
            </table>    
        </div>
        </>
    )
}