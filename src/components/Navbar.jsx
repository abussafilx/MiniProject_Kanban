import { Link } from 'react-router-dom';
import logo  from '../assets/images/kanban-logo.png';

const Navbar = () => (
  <nav className='navbar'>
    <Link to="/">
    <img className='logo' src={logo} alt="App Logo" />
    </Link>
    <h1>Kanban Board</h1>
    
  </nav>
);

export default Navbar;