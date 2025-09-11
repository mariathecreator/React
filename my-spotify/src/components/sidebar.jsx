import React, { useState } from "react";
import { IoAdd } from "react-icons/io5";
import { RiHeadphoneLine } from "react-icons/ri";

export default function Sidebar() {

    const [drop, setDrop] = useState(false)
    const [hover, setHover] = useState(false)

    const dropDown = () => {
        setDrop((prev) => !prev)
    }

    return (
        
        <div className=" w-1/4 ml-2 bg-neutral-900 relative mt-2 p-3 flex  flex-col rounded-md text-white">
            <div className="flex justify-between font-bold ">
                <h5>Your Library</h5>


                <div className="relative">
                    <button className=" cursor-pointer rounded  hover:bg-neutral-700 text-white"
                        onClick={dropDown}
                        onMouseEnter={() => setHover(true)}
                        onMouseLeave={() => setHover(false)}>
                        <IoAdd />
                    </button>
                    {hover && (
                        <span className="absolute w-32 bottom-4/5 p-2 rounded-md bg-neutral-700">Create playlist or folder</span>
                    )}
                </div>
            </div>
            <div className="overflow-scroll overflow-x-auto bg-fixed">
                <div className="mt-10 py-5 bg-neutral-800 px-4 rounded-2xl">
                    <h1 className="font-bold">Create your own playlist</h1>
                    <p className="text-sm mt-1">It's easy, we'll help you</p>
                    <button className="bg-white p-2 rounded-4xl text-sm mt-4 text-black font-semibold">Create playlist</button>
                </div>

                <div className="bg-neutral-800 rounded-2xl mt-8 py-5 px-4">
                    <h1 className="font-bold">Let's find some podcasts to follow</h1>
                    <p className="text-sm mt-1"> We'll keep you updated on new episodes</p>
                    <button className="bg-white p-2 rounded-4xl text-sm mt-4 text-black font-semibold">Browse podcasts</button>
                </div>
            </div>
            <div className="cursor-pointer py-9 text-xs mt-5">
                <div className="flex flex-wrap gap-4 mb-4  text-gray-300">
                    <span className="hover:underline cursor-pointer">Legal</span>
                    <span className="hover:underline cursor-pointer">Safety & Privacy Center</span>
                    <span className="hover:underline cursor-pointer">Privacy Policy</span>
                    <span className="hover:underline cursor-pointer">Cookies</span>
                    <span className="hover:underline cursor-pointer">About Ads</span>
                    <span className="hover:underline cursor-pointer">Accessibilty</span>
                </div>
                <a href=""  className="hover:underline cursor-pointer font-medium">Cookies</a>
                <button className="flex gap-3 p-2 mt-5 font-semibold border border-gray-300 text-white transition  hover:scale-105 bg-transparent rounded-4xl">
                    <svg fill="white" viewBox=" 0 0 16 16" className="w-5 h-4">
                        <path d="M8.152 16H8a8 8 0 1 1 .152 0m-.41-14.202c-.226.273-.463.713-.677 1.323-.369 1.055-.626 2.496-.687 4.129h3.547c-.06-1.633-.318-3.074-.687-4.129-.213-.61-.45-1.05-.676-1.323-.194-.235-.326-.285-.385-.296h-.044c-.055.007-.19.052-.391.296M4.877 7.25c.062-1.771.34-3.386.773-4.624q.148-.427.329-.806a6.51 6.51 0 0 0-4.436 5.43zm-3.334 1.5a6.51 6.51 0 0 0 4.436 5.43 8 8 0 0 1-.33-.806c-.433-1.238-.71-2.853-.772-4.624zm4.835 0c.061 1.633.318 3.074.687 4.129.214.61.451 1.05.677 1.323.202.244.336.29.391.297l.044-.001c.06-.01.19-.061.385-.296.226-.273.463-.713.676-1.323.37-1.055.626-2.496.687-4.129zm5.048 0c-.061 1.771-.339 3.386-.772 4.624q-.123.353-.268.674a6.5 6.5 0 0 0 4.071-5.298zm3.031-1.5a6.51 6.51 0 0 0-4.071-5.298q.145.322.268.674c.433 1.238.711 2.853.772 4.624z"></path>
                    </svg>
                    English
                </button>
            </div>
        </div>


    )
}