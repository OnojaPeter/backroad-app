
function PageLinks({ itemClass, href, text}) {
    return (
        <li>
            <a href={href} className={itemClass}>
                {text}
            </a>
        </li>
    );
}

export default PageLinks