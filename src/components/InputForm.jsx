import "../App.css";
import { default as MemeFrame } from "./MemeFrame.jsx";
import { default as MemesData } from "../data/memesData.js";
import { useState } from "react";

export default function InputForm()
{
    const memesArray = MemesData['data']['memes'];
    const [meme, setMeme] = useState(memesArray[
        Math.floor(Math.random() * memesArray.length)
    ]);

    function getRandomMeme()
    {
        setMeme(memesArray[
            Math.floor(Math.random() * memesArray.length)
        ]);
    }

    return (
        <div className="input-form">
            <input type="text" placeholder="Top Text"/>
            <input type="text" placeholder="Bottom Text"/>
            <button className="input-form--submit" onClick={getRandomMeme}>Get a new meme image 🖼️</button>
            <MemeFrame
                item={meme}
            />
        </div>
    );
}