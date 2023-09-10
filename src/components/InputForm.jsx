import "../App.css";
import { default as MemeFrame } from "./MemeFrame.jsx";
import { default as MemesData } from "../data/memesData.js";

export default function InputForm()
{
    return (
        <div className="input-form">
            <input type="text" placeholder="Top Text"/>
            <input type="text" placeholder="Bottom Text"/>
            <button className="input-form--submit" type="submit">Get a new meme image 🖼️</button>
            <MemeFrame
                item={MemesData['data']['memes'][0]}
            />
        </div>
    );
}