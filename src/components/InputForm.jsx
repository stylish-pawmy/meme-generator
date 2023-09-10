import "../App.css";

export default function InputForm()
{
    return (
        <form className="input-form">
            <input type="text" placeholder="Top Text"/>
            <input type="text" placeholder="Bottom Text"/>
            <input className="input-form--submit" type="submit" value="Get a new meme image 🖼️" />
        </form>
    );
}