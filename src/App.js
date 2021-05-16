function App() {
    return (
        <div className="App">
            <main className="relative bg-hero-pattern w-full h-[250px] object-cover">
                <div className="w-[90%] mx-auto flex justify-center flex-col p-4 mb-8">
                    <h1 className="mt-3 mb-5 text-2xl text-center text-white">
                        IP Address Tracker
                    </h1>
                    <div className="flex items-center w-full justify-center">
                        <input
                            type="text"
                            className="form-input rounded-tl-lg rounded-bl-lg w-full md:max-w-[50%]"
                            placeholder="Search for any IP address or domain"
                        />
                        <button
                            type="submit"
                            className="max-w-[100px] text-white bg-black px-4 py-3.5 rounded-tr-lg rounded-br-lg"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-4 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M9 5l7 7-7 7"
                                />
                            </svg>
                        </button>
                    </div>
                </div>
                <div className="shadow-md md:space-x-6 rounded-lg bg-white px-4 py-8 w-[90%] md:w-[75%] lg:w-[65%] mx-auto h-[350px] md:h-[150px] grid grid-cols-1 md:grid-cols-4">
                    <div className="mb-4 md:mb-0 text-center md:text-left col-start-1 col-end-2 md:border-r md:border-gray-200">
                        <h3 className="uppercase mb-2 text-sm text-gray-400 font-bold">
                            IP Address
                        </h3>
                        <p className="text-2xl font-medium text-gray-700">192.212.174.101</p>
                    </div>
                    <div className="mb-4 md:mb-0 text-center md:text-left col-start-1 md:border-r md:border-gray-200 col-end-2 md:col-start-2 md:col-end-3">
                        <h3 className="uppercase mb-2 text-sm text-gray-400 font-bold">Location</h3>
                        <p className="text-2xl font-medium text-gray-700">Brooklyn, NY, 10001</p>
                    </div>
                    <div className="mb-4 md:mb-0 text-center md:text-left col-start-1 md:border-r md:border-gray-200 col-end-2 md:col-start-3 md:col-end-4">
                        <h3 className="uppercase mb-2 text-sm text-gray-400 font-bold">Timezone</h3>
                        <p className="text-2xl font-medium text-gray-700">UTC -5:00</p>
                    </div>
                    <div className="mb-4 md:mb-0 text-center md:text-left col-start-1 col-end-2 md:col-start-4 md:col-end-5">
                        <h3 className="uppercase mb-2 text-sm text-gray-400 font-bold">ISP</h3>
                        <p className="text-2xl font-medium text-gray-700">SpaceX Starlink</p>
                    </div>
                </div>
            </main>
        </div>
    )
}

export default App
