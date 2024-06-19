import { Link, NavLink } from 'react-router-dom';
const Navbar = () => {
  return (
    <nav>
      <Link to={'/'}>
        <img src='./../assets\logo.jpeg' />
      </Link>
      <div>
        <NavLink to={'/'}>בית</NavLink>
        <NavLink to={'/events'}>אירועים</NavLink>
        <NavLink to={'/catalog'}>קטלוג</NavLink>
        <NavLink to={'/newonshelf'}>חדש על המדף</NavLink>
        <NavLink to={'/contact'}>צור קשר</NavLink>
      </div>
      <button>
        {' '}
        <a href='/signin'>כניסה</a>{' '}
      </button>
      <button>
        <a href='/signup'>הרשמה</a>
      </button>
    </nav>
  );
};
export default Navbar;
