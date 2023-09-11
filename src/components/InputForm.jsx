import "../App.css";
import { default as MemeFrame } from "./MemeFrame.jsx";
import { default as MemesData } from "../data/memesData.js";
import { useState } from "react";

export default function InputForm()
{
    const [allMemeImages, setAllMemeImages] = useState(MemesData);

    const [meme, setMeme] = useState(
        {
            topText: "",
            bottomText: "",
            randomImage: "http://i.imgflip.com/1bij.jpg"
        }
    );

    function getRandomMeme()
    {
        setMeme(
            {
                ...meme,
                randomImage: allMemeImages.data.memes[Math.floor(Math.random() * allMemeImages.data.memes.length)]["url"]
            }
        );
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