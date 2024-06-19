
function SocialLinks({ itemClass, href, icon}) {
    return (
        <li>
            <a href={href} className={itemClass}>
                <i className={icon}></i>
            </a>
        </li>
    );
}

export default SocialLinks