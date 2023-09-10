import "../App.css";

export default function InputForm()
{
    return (
        <div className="input-form">
            <input type="text" placeholder="Top Text"/>
            <input type="text" placeholder="Bottom Text"/>
            <button className="input-form--submit" type="submit">Get a new meme image 🖼️</button>
        </div>
    );
}