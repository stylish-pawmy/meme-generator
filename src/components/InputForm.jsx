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

    function handleFormChange(event)
    {
        const {name, value} = event.target;

        setMeme(prevMeme => {
            return {
                ...prevMeme,
                [name]: value
            }
        })
    }

    return (
        <div className="input-form">
            <input
                type="text"
                placeholder="Top Text"
                name="topText"
                value={meme.topText}
                onChange={handleFormChange}
            />
            <input
                type="text"
                placeholder="Bottom Text"
                name="bottomText"
                value={meme.bottomText}
                onChange={handleFormChange}
            />
            <button
                className="input-form--submit"
                onClick={getRandomMeme}
                type="button"
            >Get a new meme image 🖼️</button>

            <MemeFrame
                item={meme}
            />
        </div>
    );
}