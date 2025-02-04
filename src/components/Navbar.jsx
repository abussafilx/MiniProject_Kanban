import logo  from '../assets/images/kanban-logo.png';

const Navbar = () => (
  <nav className='navbar'>
    <img className='logo' src={logo} alt="App Logo" />
    <h1>Kanban Board</h1>
  </nav>
);

export default Navbar;