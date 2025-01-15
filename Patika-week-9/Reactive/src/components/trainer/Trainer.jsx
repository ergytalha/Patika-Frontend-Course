import './trainer.css'

import trainer1 from '../../assets/images/trainer1.jpg'
import trainer2 from '../../assets/images/trainer2.jpg'
import trainer3 from '../../assets/images/trainer3.jpg'


const Trainer = () => {
  return (
    <>
      <section id="trainers">
        <div className="container">
          <div className="head">
            <h2>OUR BEST TRAINERS</h2>
            <hr />
            <p>
              Lorem Ipsum is not simply random text. It has roots in a piece of
              classNameical at Hampden-Sydney College.
            </p>
          </div>
          <div className="trainers-content">
            <div className="trainer">
              <img src={trainer1} alt="" />
              <div className="trainer-frame">
                <div className="side left"></div>
                <div className="side right"></div>
              </div>
              <div className="trainer-content">
                <h3>Jane Doe</h3>
                <h4>Cardio Trainer</h4>
              </div>
            </div>
            <div className="trainer">
            <img src={trainer2} alt="" />
              <div className="trainer-frame">
                <div className="side left"></div>
                <div className="side right"></div>
              </div>
              <div className="trainer-content">
                <h3>Jane Doe</h3>
                <h4>Cardio Trainer</h4>
              </div>
            </div>
            <div className="trainer">
              <img src={trainer3} alt="" />
              <div className="trainer-frame">
                <div className="side left"></div>
                <div className="side right"></div>
              </div>
              <div className="trainer-content">
                <h3>Jane Doe</h3>
                <h4>Cardio Trainer</h4>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Trainer;
