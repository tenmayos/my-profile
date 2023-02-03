/**
 * 
 * @param {{destination: string, className: string, content: any}} props 
 */
export default function OuterLink(props) {

    return <a className={props.className}
    href={props.destination}
    target="_blank"
    rel="noreferrer noopener">
    {props.content}
    </a>;
}