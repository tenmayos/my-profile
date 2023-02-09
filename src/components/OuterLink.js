import { useState } from "react";
/**
 * 
 * @param {{destination: string, className: string, content: any}} props 
 */
export default function OuterLink(props) {

    const [isClicked, setIsClicked] = useState(false);
    // Clicking something on phone should light up to cyan until the user is back.

    return <a
        style={isClicked ? { "color": "cyan" } : null}
        className={props.className}
        href={props.destination}
        onMouseDown={() => setIsClicked(true)}
        onMouseLeave={() => setIsClicked(false)}
        target="_blank"
        rel="noreferrer noopener">
        {props.content}
    </a>;
}