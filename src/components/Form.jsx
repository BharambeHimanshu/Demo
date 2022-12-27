import React from "react";

export default function Form() {
    return(
        <>
  <title>Industry Mentor report</title>
  <nav id="header" className="bg-white fixed w-full z-10 top-0 shadow">
    <div className="w-full container mx-auto flex flex-wrap items-center justify-between my-4">
      <div className="pl-4 md:pl-0">
        <a
          className="flex items-center text-yellow-600 text-base xl:text-xl no-underline hover:no-underline font-extrabold font-sans"
          href="#"
        >
          <svg
            className="fill-current h-6 inline-block text-yellow-600 mr-4"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
          >
            <path d="M16 2h4v15a3 3 0 0 1-3 3H3a3 3 0 0 1-3-3V0h16v2zm0 2v13a1 1 0 0 0 1 1 1 1 0 0 0 1-1V4h-2zM2 2v15a1 1 0 0 0 1 1h11.17a2.98 2.98 0 0 1-.17-1V2H2zm2 8h8v2H4v-2zm0 4h8v2H4v-2zM4 4h8v4H4V4z" />
          </svg>{" "}
          Industry Mentor review
        </a>
      </div>
    </div>
  </nav>
  {/Container/}
  <div className="container w-full flex flex-wrap mx-auto px-2 pt-8 lg:pt-16 mt-16">
    <div className="w-full lg:w-1/5 px-6 text-xl text-gray-800 leading-normal">
      <p className="text-base font-bold py-2 lg:pb-6 text-gray-700">Menu</p>
      <div className="block lg:hidden sticky inset-0">
        <button
          id="menu-toggle"
          className="flex w-full justify-end px-3 py-3 bg-white lg:bg-transparent border rounded border-gray-600 hover:border-yellow-600 appearance-none focus:outline-none"
        >
          <svg
            className="fill-current h-3 float-right"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
          </svg>
        </button>
      </div>
      <div
        className="w-full sticky inset-0 hidden max-h-64 lg:h-auto overflow-x-hidden overflow-y-auto lg:overflow-y-hidden lg:block mt-0 my-2 lg:my-0 border border-gray-400 lg:border-transparent bg-white shadow lg:shadow-none lg:bg-transparent z-20"
        style={{ top: "6em" }}
        id="menu-content"
      >
        <ul className="list-reset py-2 md:py-0">
          <li className="py-1 md:my-2 hover:bg-yellow-100 lg:hover:bg-transparent border-l-4 border-transparent">
            <a
              href="#section2"
              className="block pl-4 align-middle text-gray-700 no-underline hover:text-yellow-600"
            >
              <span className="pb-1 md:pb-0 text-sm">Marks Assessment</span>
            </a>
          </li>
          <li className="py-1 md:my-2 hover:bg-yellow-100 lg:hover:bg-transparent border-l-4 border-transparent">
            <a
              href="#section3"
              className="block pl-4 align-middle text-gray-700 no-underline hover:text-yellow-600"
            >
              <span className="pb-1 md:pb-0 text-sm">Review</span>
            </a>
          </li>
        </ul>
      </div>
    </div>

    <section className="w-full lg:w-4/5">

      <h1 className="flex items-center font-sans font-bold break-normal text-gray-700 px-2 text-xl mt-12 lg:mt-0 md:text-2xl">
        Hey Industry Mentor
      </h1>
      <h4 className="flex items-center font-sans font-bold break-normal text-gray-700 px-2 text-xl mt-12 lg:mt-0 md:text-xl">Student name</h4>
      <hr className="bg-gray-300 my-12" />

<h2 className="font-sans font-bold break-normal text-gray-700 px-2 pb-8 text-xl">
  Mark Assessment
</h2>

<div id="section2" className="p-8 mt-6 lg:mt-0 rounded shadow bg-white">
<div className="">
                <select id="user" className="text-xl text-gray-800 px-4 py-3 rounded-lg w-small  focus:bg-gray-100 border border-gray-200 focus:outline-none ">
                <option value="January">January</option>
                <option value="February">February</option>
                <option value="March">March</option>
                <option value="April">April</option>
                <option value="May">May</option>
                <option value="June">June</option>
                </select>
  </div>
  <br></br>
  <form>

    <div className="md:flex mb-6">
      <div className="md:w-1/3">
        <label
          className="block text-gray-600 font-bold md:text-left mb-3 md:mb-0 pr-4"
          htmlFor="my-textfield"
        >
          Punctuality/Discipline
        </label>
      </div>
      <div className="md:w-2/3">
        <input
          className="form-input block w-full focus:bg-white"
          id="my-textfield"
          type="number"
          defaultValue=""
        />
        <p className="py-2 text-sm text-gray-600">
          *Enter the marks recieved by the student
        </p>
      </div>
    </div>
    <div className="md:flex mb-6">
      <div className="md:w-1/3">
        <label
          className="block text-gray-600 font-bold md:text-left mb-3 md:mb-0 pr-4"
          htmlFor="my-textfield"
        >
          Learning intiative
        </label>
      </div>
      <div className="md:w-2/3">
        <input
          className="form-input block w-full focus:bg-white"
          id="my-textfield"
          type="number"
          defaultValue=""
        />
        <p className="py-2 text-sm text-gray-600">
          *Enter the marks recieved by the student
        </p>
      </div>
    </div>
    <div className="md:flex mb-6">
      <div className="md:w-1/3">
        <label
          className="block text-gray-600 font-bold md:text-left mb-3 md:mb-0 pr-4"
          htmlFor="my-textfield"
        >
          Daily diary/Weekly diary maintainance
        </label>
      </div>
      <div className="md:w-2/3">
        <input
          className="form-input block w-full focus:bg-white"
          id="my-textfield"
          type="number"
          defaultValue=""
        />
        <p className="py-2 text-sm text-gray-600">
          *Enter the marks recieved by the student
        </p>
      </div>
    </div>
    <div className="md:flex mb-6">
      <div className="md:w-1/3">
        <label
          className="block text-gray-600 font-bold md:text-left mb-3 md:mb-0 pr-4"
          htmlFor="my-multiselect"
        >
          Inplant training report writing
        </label>
      </div>
      <div className="md:w-2/3">
        <input
          className="form-input block w-full focus:bg-white"
          id="my-textfield"
          type="number"
          defaultValue=""
        />
        <p className="py-2 text-sm text-gray-600">
          *Enter the marks recieved by the student
        </p>
      </div>
    </div>
    <div className="md:flex mb-6">
      <div className="md:w-1/3">
        <label
          className="block text-gray-600 font-bold md:text-left mb-3 md:mb-0 pr-4"
          htmlFor="my-multiselect"
        >
          Knowledge gained/Skills achieved
        </label>
      </div>
      <div className="md:w-2/3">
        <input
          className="form-input block w-full focus:bg-white"
          id="my-textfield"
          type="number"
          defaultValue=""
        />
        <p className="py-2 text-sm text-gray-600">
          *Enter the marks recieved by the student
        </p>
      </div>
    </div>
    <div className="md:flex md:items-center">
      <div className="md:w-1/3" />
      <div className="md:w-2/3">
        <button
          className="shadow bg-yellow-700 hover:bg-yellow-500 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
          type="button"
        >
          Save
        </button>
      </div>
    </div>
  </form>
</div>

      <hr className="bg-gray-300 my-12" />

      <h2 className="font-sans font-bold break-normal text-gray-700 px-2 pb-8 text-xl">
        Student info
      </h2>

      <div id="section3" className="p-8 mt-6 lg:mt-0 rounded shadow bg-white">
        <form>
          <div className="md:flex mb-6">
            <div className="md:w-1/3">
              <label
                className="block text-gray-600 font-bold md:text-left mb-3 md:mb-0 pr-4"
                htmlFor="my-textarea"
              >
                Notes about the Student
              </label>
            </div>
            <div className="md:w-2/3">
              <textarea
                className="form-textarea block w-full focus:bg-white"
                id="my-textarea"
                value=""
                rows={8}
                defaultValue={""}
              />
              <p className="py-2 text-sm text-gray-600">
                Review about the student
              </p>
            </div>
          </div>
          <div className="md:flex md:items-center">
            <div className="md:w-1/3" />
            <div className="md:w-2/3">
              <button
                className="shadow bg-yellow-700 hover:bg-yellow-500 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
                type="button"
              >
                Save
              </button>
            </div>
          </div>
        </form>
      </div>
    </section>
  </div>
</>

    )
}