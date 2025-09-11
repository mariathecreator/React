import React from "react";
// import { assets } from "../assets/assets/assets.js";
import { FaSpotify } from "react-icons/fa";

function Navbar1() {

    return (
        <div className=" border border-green-800 w-[1536px] h-[64px] p-[8px]  bg-transparent text-white " >
            <div className=" flex gap-2  align-middle items-center">

                <a><img className="w-[32px] h-[32px] ml-4" src={assets.spotify_white} alt="" /></a>

                <a> <img className="w-[48px] h-[48px] p-[12px] bg-[#1F1F1F] rounded-3xl ml-10  " src={assets.home_icon} alt="" /></a>
                <div className="relative flex items-center ">
                    <img src={assets.search_icon} className="input_icon absolute w-6 ml-2" />
                    <input className="bg-[#1F1F1F] w-[300px] h-[45px] p-[14px] rounded-3xl bg-[url()] input-field " type="search" id="mySearchInput" placeholder="     Search..." />
                </div>
                <a href="" className="bg-white text-sm font-semibold text-zinc-800 p-[4px] rounded-4xl">Explore Premium</a>
            </div>
        </div>
    )

}


export default function Navbar() {

    return (
        <nav className=" flex  items-center justify-between border w-full h-20 px-4 sticky">
            <div className=" flex space-x-4 w-1/2 border">
                <div className="flex items-center space-x-4 border">
                    <FaSpotify className="text-4xl text-white" />

                    {/*home icon */}
                    <button className=" bg-zinc-800 transition ease-in-out hover:bg-neutral-800  hover:scale-110 rounded-4xl p-0.5 hover:translate-y-0 ">
                        <svg className="w-11 h-11 p-1 text-white "
                            fill="currentColor"
                            viewBox="-4 -3 34 34">
                            <path d="M13.5 1.515a3 3 0 0 0-3 0L3 5.845a2 2 0 0 0-1 1.732V21a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-6h4v6a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V7.577a2 2 0 0 0-1-1.732z" ></path>
                        </svg>
                    </button>
                </div>

                {/*Search bar*/}
                <div className=" flex items-center gap-3 rounded-4xl px-3 bg-neutral-800 hover:ring-1 hover:ring-neutral-700">
                    <svg aria-hidden="true" viewBox="0 0 24 24" fill="currentColor" className="text-gray-400 w-7 h-10">
                        <path d=" M10.533 1.27893C5.35215 1.27893 1.12598 5.41887 1.12598 10.5579C1.12598 15.697 5.35215 19.8369 10.533 19.8369C12.767 19.8369 14.8235 19.0671 16.4402 17.7794L20.7929 22.132C21.1834 22.5226 21.8166 22.5226 22.2071 22.132C22.5976 21.7415 22.5976 21.1083 22.2071 20.7178L17.8634 16.3741C19.1616 14.7849 19.94 12.7634 19.94 10.5579C19.94 5.41887 15.7138 1.27893 10.533 1.27893ZM3.12598 10.5579C3.12598 6.55226 6.42768 3.27893 10.533 3.27893C14.6383 3.27893 17.94 6.55226 17.94 10.5579C17.94 14.5636 14.6383 17.8369 10.533 17.8369C6.42768 17.8369 3.12598 14.5636 3.12598 10.5579Z"></path>
                    </svg>
                    <input type="text" placeholder="What do you want to play?" className=" text-white outline-none w-48 " />
                    <button>
                         <svg fill="white" className="w-10 h-5">
                        <path d="M4 2a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v4H4zM1.513 9.37A1 1 0 0 1 2.291 9H21.71a1 1 0 0 1 .978 1.208l-2.17 10.208A2 2 0 0 1 18.562 22H5.438a2 2 0 0 1-1.956-1.584l-2.17-10.208a1 1 0 0 1 .201-.837zM12 17.834c1.933 0 3.5-1.044 3.5-2.333s-1.567-2.333-3.5-2.333S8.5 14.21 8.5 15.5s1.567 2.333 3.5 2.333z">
                        </path>
                     </svg>
                    </button>
                </div>

                {/*right side*/}
                <div className="flex items-center gap-3 lg:ml-160 text-gray-400  ">
                    <div className="lg:font-semibold lg:flex gap-3">
                    <a href="#" className="hover:text-white">Premium</a>
                    <a href="" className="hover:text-white">support</a>
                    <a href="" className="hover:text-white">Download</a>
                    </div>|

                    <div className="flex gap-3 items-center font-semibold">
                        <button className="w-17 hover:text-white">Sign up</button>
                        <button className=" w-20 text-black bg-white rounded-full font-bold px-3 py-1 transition hover:scale-105">Log in</button>
                    </div>
                </div>

            </div>
        </nav>
    )
}