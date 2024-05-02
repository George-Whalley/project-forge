// CSS
import './footer.css'

// Font Awesomes
// import { FaLinkedin, FaSquareFacebook, FaSquareXTwitter } from 'react-icons/fa';
import ReactDOM from 'react-dom'
//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faCoffee } from '@fortawesome/free-solid-svg-icons'
// Font Awesomes
import { FaFire} from 'react-icons/fa';


// Return Function 
export default function create_footer(){
  // Return Statement
  return(
      <div className="footer-container">
        <FaFire />
        <span className="footer-title">THANKYOU FOR VISTING <br /> PROJECT FORGE</span>
        <div className="copyright_statement_container">
          © George James Whalley {(new Date().getFullYear())}
        </div>
      </div>
    )
}