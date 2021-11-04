import GaragaLogo from '../../assets/garaga.png';
import GarageImage from '../../assets/garaga1.jpg';
import GarageImage2 from '../../assets/garaga2.jpg';
import GarageImage3 from '../../assets/garaga3.jpg';
import GarageImage4 from '../../assets/garaga4.jpg';

const Garaga = () => {
  return (
    <section className="garaga">
      <div className="container">
        <div className="row">
          <div className="col-4 garagaContainer">
            <img className="garagaLogo" src={GaragaLogo} alt="garaga" />
          </div>
          <div className="col">
            <h3>Authorized Garaga Dealer</h3>
            <p>
              Garaga has one of the best selections of garage door styles
              available in the world. Contact us today to find a garage door
              that fits your style and your budget.
            </p>
            <div className="smallGrid">
              <div className="smallItem">
                <img src={GarageImage} alt="garaga" />
              </div>
              <div className="smallItem">
                <img src={GarageImage2} alt="garaga" />
              </div>
              <div className="smallItem">
                <img src={GarageImage3} alt="garaga" />
              </div>
              <div className="smallItem">
                <img src={GarageImage4} alt="garaga" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Garaga;
