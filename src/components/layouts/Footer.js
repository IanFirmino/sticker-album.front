import { FaFacebook, FaInstagram, FaLinkedinIn } from 'react-icons/fa'
import './Footer.css'

function Footer(){
    return (
        <footer>
            <ul className='social_list'>
                <li>
                    <FaFacebook/>
                </li>
                <li>
                    <FaInstagram/>
                </li>
                <li>    
                    <FaLinkedinIn/>
                </li>
            </ul>
        </footer>
    )
}

export default Footer;