import React from "react";

export default function Form() {
    return(
        <>
        <div className="flex justify-center items-center h-screen bg-slate-200">
            <div id="form" className="block bg-slate-50 p-6 rounded-xl shadow-md shadow-slate-300 w-90">
                <form action="">
                    <h2 className="text-blue-700 text-3xl font-semibold my-4">Industry Mentor</h2>
                    <h1 className="text-blue-700 text-xl font-semibold my-4">Student Name : </h1>
                            <label for="Punctuality / discipline" className="text-sm">Punctuality / discipline</label><br></br>
                            <input type="number" name="Punctuality / discipline" id="Punctuality / discipline" className="h-8 w-full rounded-md border border-slate-300 text-sm p1-2 bg-transparent outline-blue-600 shadow-sm"></input>
                            <label for="Learning initiatives / attitude" className="text-sm">Learning initiatives / attitude</label><br></br>
                            <input type="number" name="Learning initiatives / attitude" id="Learning initiatives / attitude" className="h-8 w-full rounded-md border border-slate-300 text-sm p1-2 bg-transparent outline-blue-600 shadow-sm"></input>
                            <label for="Daily and Weekly dairy maintenance" className="text-sm">Daily and Weekly dairy maintenance</label><br></br>
                            <input type="number" name="Daily and Weekly dairy maintenance" id="Daily and Weekly dairy maintenance" className="h-8 w-full rounded-md border border-slate-300 text-sm p1-2 bg-transparent outline-blue-600 shadow-sm"></input>
                            <label for="Inplant training report writing" className="text-sm">Inplant training report writing</label><br></br>
                            <input type="number" name="Inplant training report writing" id="Inplant training report writing" className="h-8 w-full rounded-md border border-slate-300 text-sm p1-2 bg-transparent outline-blue-600 shadow-sm"></input>
                            <label for="Knowledge gained / Skills achieved" className="text-sm">Knowledge gained / Skills achieved</label><br></br>
                            <input type="number" name="Knowledge gained / Skills achieved" id="Knowledge gained / Skills achieved" className="h-8 w-full rounded-md border border-slate-300 text-sm p1-2 bg-transparent outline-blue-600 shadow-sm"></input>
                            <input type="submit" name="" id="signUp" className="bg-blue-700 mt-3 w-full h-10 cursor-pointer text-white rounded-md hover:bg-blue-600 hover:outline outline-2 outline-blue-600 outline-offset-2 text-sm"></input>
                </form>
            </div>
        </div>
        </>
    )
}