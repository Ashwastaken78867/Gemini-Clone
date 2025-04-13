import { Link } from 'react-router';
import './Header.css'; 

const Header = (props) => {
  const { logo } = props;

  return (
    <header className="header">
      <div className="logo">{logo}</div>
      
      <nav className="nav">
        <ul className="nav_items">
        <li><Link to="/chat">Chat</Link></li>

          <li><Link to="/about">About</Link></li>
          <li><Link to="/teams">Team</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
