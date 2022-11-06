import React from "react";

export default function AddTeacher(){
    return(
        <>
        <div
          className="min-h-screen py-40"
              style={{ backgroundImage: "linear-gradient(#DCDCDC,#D3D3D3,#808080)" }}
        >
          <div className="container mx-auto">
            <div className="flex flex-col lg:flex-row w-10/12 lg:w-8/12 bg-white rounded-xl mx-auto shadow-lg overflow-hidden">
              <div
                className="bg-[url('https://i.ibb.co/8cXLLNk/Screenshot-1.png')] w-full lg:w-1/2 flex flex-col items-center justify-center p-12 bg-no-repeat bg-cover bg-center"
                style={{ backgroundImage: "https://i.ibb.co/8cXLLNk/Screenshot-1.png" }}
              >
                <h1 className="text-white text-3xl mb-3">ADD Teacher</h1>
                <div>
                  <p className="text-white">
                    Fill the form to add a new teacher to the System.
                  </p>
                </div>
              </div>
              <div className="w-full lg:w-1/2 py-16 px-12">
                <form action="#">
                  <div className="mt-5">
                    <input
                      type="text"
                      placeholder="Name"
                      className="border border-gray-400 py-1 px-2 w-full"
                    />
                  </div>
                  <div className="mt-5">
                    <input
                      type="text"
                      placeholder="Username"
                      className="border border-gray-400 py-1 px-2 w-full"
                    />
                  </div>
                  <div className="mt-5">
                    <input
                      type=""
                      placeholder="Password"
                      className="border border-gray-400 py-1 px-2 w-full"
                    />
                  </div>
                  <div className="mt-5">
                  <button className="w-full rounded-full bg-cyan-500 py-3 text-center text-white hover:bg-cyan-800 transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-300">
                      ADD
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