import React from "react";
import Section from "./section";
import { popularAlbums,popularArtists,popularRadio,trendingSongs } from "../assets/assets/assets";


export default function Home(){
    return ( 
        <div className="p-2  overflow-y-auto mt-2 ml-2 rounded-md bg-linear-to-r/decreasing from-red-900 to-neutral-900">
            <Section title="Trending Songs" items={trendingSongs} type="song" />
            <Section title="Popular Artists" items={popularArtists} type="artist" />
            <Section title="Popular Albums" items={popularAlbums} type="album" />
            <Section title="Popular Radio" items={popularRadio} type="radio" />
        </div>
    )
}

