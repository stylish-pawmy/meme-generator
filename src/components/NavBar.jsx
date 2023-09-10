import "../App.css";
import { default as FoolHatImg } from "../assets/fool-hat.svg";

export default function NavBar()
{
    return (
        <header>
            <nav>
                <img src={FoolHatImg} />
                <h3>Meme Generator</h3>
            </nav>
        </header>
    );
}