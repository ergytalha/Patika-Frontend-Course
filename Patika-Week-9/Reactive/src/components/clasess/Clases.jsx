import { useRef, useState } from "react";
import "./clasess.css";
import clasesYoga from "../../assets/images/yoga.jpg";

const Clases = () => {
  const [activeClass, setActiveClass] = useState("yoga");
  const classesBtns = useRef(null);

  const handleButtonClick = (id) => {
    setActiveClass(id);
  };

  return (
    <>
      <section id="classes">
        <div className="shape"></div>
        <div className="container">
          <div className="head">
            <h2>OUR CLASSES</h2>
            <hr />
            <p>
              Lorem Ipsum is not simply random text. It has roots in a piece of
              classical at Hampden-Sydney College.
            </p>
          </div>
          <div className="classes-btns" id="class-btns" ref={classesBtns}>
            {["yoga", "group", "solo", "stretching"].map((id) => (
              <button
                key={id}
                className={`classes-btn ${activeClass === id ? "active" : ""}`}
                onClick={() => handleButtonClick(id)}
              >
                {id.charAt(0).toUpperCase() + id.slice(1)}
              </button>
            ))}
          </div>
          <div className="classes-content">
            <div className="clases-text">
              <h3 id="featuresH2">Why are your {activeClass}?</h3>
              <p id="featuresP">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga
                quod perspiciatis vero mollitia temporibus placeat enim!
                Veritatis doloremque obcaecati placeat asperiores soluta, vel
                voluptatem laudantium ullam possimus. Quisquam, eum aliquid?
              </p>
              <h3>When comes {activeClass} your time?</h3>
              <span>Saturday-Sunday: 8:00am - 10:00am</span>
              <span>Monday-Tuesday: 10:00am - 12:00pm</span>
              <span>Wednesday-Friday: 3:00pm - 6:00pm</span>
            </div>
            <div className="clases-img">
              <img id="featuresImg" src={clasesYoga} alt={activeClass} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Clases;
