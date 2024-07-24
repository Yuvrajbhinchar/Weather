function Weather(){
    return(
        <>
        {/* Main Screen */}
        <div className="w-screen h-screen items-center bg-cover bg-no-repeat flex justify-center">
        {/* Main Div */}
        <div className="w-3/5 h-4/5 bg-[#000000b8;] rounded-lg flex">
            {/* Left Panel */}
           <div className="w-1/2 bg-left h-full bg-cover bg-no-repeat rounded-l-lg flex flex-col justify-between ">
            {/* 1 */}
            <div className="flex justify-end m-4">
                <p className="font-bold text-white text-2xl"> Jaipur India</p>
            </div>
            {/* 2 */}
            <div className="flex justify-center items-center"><img  src="#" className="rounded-full h-2/5 bg-[#ffffff85]" alt="" /></div>
            {/* 3 */}
            <div className="flex justify-between items-end m-4">
                <div className="font-bold text-xl text-gray-200">
                    <p>45</p>
                    <p>54</p>
                </div>
                <div className="font-bold text-2xl text-gray-200"><p>2353</p></div>
            </div>
            </div>
            {/* Right Panel */}
            <div className="w-1/2 h-full">
            <div className="h-1/5 flex justify-center items-center border-b border-gray-300 m-4"></div>
            <div className="flex border border-gray-200 rounded-lg w-3/5 mx-auto"><input type="search" placeholder="Search" className="bg-transparent  text-white placeholder-white border-none outline-none px-8 py-2"/>
                <span
                  className="material-symbols-outlined text-2xl cursor-pointer text-white 
                 rounded-full p-1 float-right "
                >
                  search
                </span>
            </div>
            <div className="text-center text-white font-semibold my-5">
                <p>Jaipur,India</p>
                <p>Halllo</p>
              </div>
              <div className="flex justify-around font-bold text-white border-b border-gray-300 m-6 p-2">
                  <p>Temp</p>
                  <p>78°C</p>
                </div>
                <div className="flex justify-around font-bold text-white border-b border-gray-300 m-6 p-2">
                  <p>Visibility</p>
                  <p>879Km</p>
                </div>
                <div className="flex justify-around font-bold text-white border-b border-gray-300 m-6 p-2">
                  <p>Wind Speed</p>
                  <p>90 meter/sec</p>
                </div>
            </div>
            </div>
        </div>
        </>
    );
}
export default Weather;