import "../App.css";

export default function MemeFrame(props)
{
    return (
        <div
            className="meme-frame"
        >
            <img
                title={props.item.name}
                src={props.item.url} />
        </div>
    )
}