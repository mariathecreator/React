import React, { useRef } from "react";
import { IoIosPlay } from "react-icons/io";
import { IoChevronBack, IoChevronForward } from "react-icons/io5";
const Section = ({ title, items, type = "song" }) => {
  const scrollRef = useRef(null)
  const scroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = 300;
      scrollRef.current.scrollBy(
        { left: direction === "left" ? -scrollAmount : scrollAmount, behavior: "smooth" })
    }
  }
  return (
    <div className=" relative mt-16 rounded-md p-2 ">
      <div className="flex justify-between items-center mb-4 ">
        <h1 className="text-white text-xl font-bold ">{title}</h1>
        <button className="text-sm text-gray-400 font-semibold hover:underline">Show all</button>
      </div>
      <button onClick={() => scroll("left")}
        className=" absolute left-0 bottom-1/2 -translate-y-1/2 z-10 p-2 bg-black/60 hover:bg-black/80 rounded-full">
        <IoChevronBack className="text-white w-6 h-6" />
      </button>
      <button onClick={() => scroll("right")}
        className=" absolute right-0 bottom-1/2 -translate-y-1/2 z-10 p-2 bg-black/60 hover:bg-black/80 rounded-full">
        <IoChevronForward className="text-white w-6 h-6" />
      </button>
      <div ref={scrollRef} className="flex overflow-hidden space-x-4 scroll-smooth">
        {items.map((item, index) => (<div key={index}>
          <div className=" hover:shadow-lg p-1 min-w-[180px] rounded-md hover:scale-105 cursor-pointer relative ">
            <div className="relative group ">
              <img src={item.image} alt={item.title} className={`w - full h-40 object-cover rounded-md`} />
              {type !== "artist" && (<button className="bottom-4 right-4 absolute items-center justify-center shadow-lg hidden hover:scale-110 transition group-hover:flex bg-green-600 rounded-4xl">
                <IoIosPlay className="p-2 h-10 w-10" /> </button>)}
            </div>
            <h3 className="text-white text-sm mt-2 font-semibold truncate">{item.title}</h3>
            <p className="text-gray-400 text-xs mt-2 font-semibold truncate">{item.subtitle} </p>
          </div>
        </div>
        ))}
      </div>
    </div>
  )
}

export default Section;
