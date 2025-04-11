
import { Link } from 'react-router';
import './Header.css'; 

const Header = (props) => {
    const {logo} = props;
    return (
        <header className="header">
            
            <div className="logo">{logo}</div>
            <nav className="nav">
                <ul className="nav_items">
                
                    <Link to="/about"><li>About</li></Link>
                    <Link to="/teams"> <li>Team</li></Link>
                   <Link to="/contact"> <li>Contact</li></Link>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
