import Nav from './Nav';
import { Link } from 'react-router-dom';
const Header = () => {
  return (
    <header>
      <div className="container">
        <div className="row justify-content-around">
          <div className="logo col-4">
            <Link to="/">
              {' '}
              <img
                className="logo"
                src="logo-new.png"
                alt="Tims Overhead Doors"
              />
            </Link>
          </div>
          <div className="nav col">
            <Nav />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
