import "./Card.css";

function Card(props) {
    const classes = "card " + props.className;
    // tell the custom component to include the other classes as well. Note! the whitespace behind 'card '
    return <div className={classes}>{props.children}</div>;
    // dynamically point to the constants classes
}

export default Card;
