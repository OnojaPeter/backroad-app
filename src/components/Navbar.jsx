import { pageLinks, socialLinks } from '../data'
import SocialLinks from "./SocialLinks"
import PageLinks from "./PageLinks"

function Navbar() {
    return (
        <nav className="navbar">
            <div className="nav-center">
                <div className='nav-header'>
                    <img src="/images/logo.svg" className='nav-logo' alt='backroads' />
                    
                    <button type='button' className='nav-toggle' id='nav-toggle'>
                        <i className='fas fa-bars'></i>
                    </button>
                </div>

                
                <ul className="nav-links" id='nav-links'>
                    {pageLinks.map((link) => {
                        return <PageLinks {...link} key={link.id} itemClass="nav-link" />
                    })}
                </ul>

                <ul className="nav-icons">
                    {socialLinks.map((link) => {
                       return <SocialLinks {...link} key={link.id} itemClass="nav-icon" />
                    })}                  
                </ul>
            </div>
        </nav>
    )
}

export default Navbar