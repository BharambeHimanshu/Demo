import React from "react";

export default function ChangeInfo(){
    return(
        <>
        <div
          className="min-h-screen py-40 "
              style={{ backgroundImage: "linear-gradient(#1d2630,#485563)" }}
        >
          <div className="container mx-auto">
            <div className="flex flex-col lg:flex-row w-10/12 lg:w-8/12 bg-gray-50 rounded-xl mx-auto shadow-lg overflow-hidden">
              <div
                className="bg-[url('https://i.ibb.co/TbFbD4W/Project.webp')] w-full lg:w-1/2 flex flex-col items-center justify-center p-12 bg-no-repeat bg-cover bg-center"
                style={{ backgroundImage: "https://i.ibb.co/TbFbD4W/Project.webp"}}
              >
                <h1 className="text-white text-3xl mb-3">Change Info</h1>
                <div>
                  <p className="text-white">
                    Enter the Details to change the Information.
                  </p>
                </div>
              </div>
              <div className="w-full lg:w-1/2 py-16 px-12 ">
                <form action="#">
                  <div className="mt-5 ">
                    <input
                      type="text"
                      placeholder="Email ID"
                      className="border border-gray-400 py-1 px-2 w-full rounded"
                    />
                  </div>
                  <div className="mt-5">
                    <input
                      type="string"
                      placeholder="Mobile NO"
                      className="border border-gray-400 py-1 px-2 w-full"
                    />
                  </div>
                    <div className="mt-5">
                    <button className="text-center bg-transparent hover:bg-gray-800 text-slate-50 font-semibold hover:text-white py-2 px-4 border border-gray-500 hover:border-transparent rounded bg-gray-500">
                        Change
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </>
    )
}