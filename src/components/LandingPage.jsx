import React from "react";

export default function LandingPage() {
    return(
        <>
        <div className="h-full">
        <section className="dark:bg-gray-900 dark:text-gray-100">
	<div className="container mx-auto flex flex-col items-center px-10 py-16 text-center md:py-32 md:px-20 lg:px-32 xl:max-w-4xl font-serif">
		<h1 className="text-4xl font-bold leading-none sm:text-5xl">Government Polytechnic,
		</h1>
        <h1 className="text-4xl font-bold leading-none sm:text-5xl"> Mumbai
		</h1>
        <h2 className="dark:text-cyan-300 text-4xl font-bold leading-none sm:text-5xl">Inplant training Portal</h2>

		<p className="px-8 mt-8 mb-12 text-lg">An online communication tool for inplant training</p>
		<div className="flex flex-wrap justify-center">
			<button className="px-8 py-3 m-2 text-lg font-semibold rounded dark:bg-cyan-300  dark:text-gray-900">Login</button>
			<button className="px-8 py-3 m-2 text-lg border rounded dark:text-gray-50 dark:border-gray-700">Gpmumbai</button>
		</div>  
	</div>
</section>
</div>

        </>
    )
}