import Fixed from '../../assets/fixed.jpg';
const Service = () => {
  return (
    <section className="service">
      <div className="container">
        <h3>Fast Friendly Service</h3>
        <div className="row">
          <div className="col">
            <p>
              The garage door is the largest moving peice of equipment in any
              home or business. Doors need to be serviced regularly to continue
              to function safely. Even if your not having trouble with your
              door, it's important to service on regular itervals. Give us a
              call today to set up an appointment to have your door serviced
              today.
            </p>
          </div>
          <div className="col-6">
            <img className="serviceImg" src={Fixed} alt="Broken Door" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Service;
