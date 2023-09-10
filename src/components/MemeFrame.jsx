import "../App.css";

export default function MemeFrame(props)
{
    return (
        <div
            className="meme-frame"
        >
            <img
                title={props.item.name}
                height={props.item.height}
                src={props.item.url} />
        </div>
    )
}