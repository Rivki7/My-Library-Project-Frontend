import { Link } from 'react-router-dom';
const Navbar = () => {
  const navbarItems = [
    { name: 'בית', path: '/' },
    { name: 'אירועים', path: '/events' },
    { name: 'קטלוג', path: '/catalog' },
    { name: 'חדש על המדף', path: '/newonshelf' },
    { name: 'צור קשר', path: '/contact' },
  ];
  return (
    <nav>
      <Link to={'/'}>
        <img src='./../assets\logo.jpeg' />
      </Link>
      <ul>
        {navbarItems.map((item) => {
          return (
            <li key={item.name}>
              <Link to={item.path}>{item.name}</Link>
            </li>
          );
        })}
      </ul>
      <button>כניסה</button>
      <button>הרשמה</button>
    </nav>
  );
};
export default Navbar;
