import "../App.css";

export default function MemeFrame(props)
{
    return (
        <div
            className="meme-frame"
        >
            <img
                src={props.item.randomImage} />
            <h3 className="meme-caption top">{props.item.topText}</h3>
            <h3 className="meme-caption bottom">{props.item.bottomText}</h3>
        </div>
    )
}