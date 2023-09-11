import "../App.css";

export default function MemeFrame(props)
{
    return (
        <div
            className="meme-frame"
        >
            <img
                src={props.item.randomImage} />
        </div>
    )
}