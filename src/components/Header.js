import Nav from './Nav';
const Header = () => {
  return (
    <header>
      <div className="container">
        <div className="row justify-content-around">
          <div className="logo col-4">
            <img
              className="logo"
              src="logo-new.png"
              alt="Tims Overhead Doors"
            />
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
