import { useState } from "react";

import "./clasess.css";
import clasesYoga from "../../assets/images/yoga.jpg";

const Clases = () => {

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
          <div className="classes-btns" id="class-btns">
            <button href="#" className="classes-btn active" id="yoga">
              Yoga
            </button>
            <button href="#" className="classes-btn" id="group">
              Group
            </button>
            <button href="#" className="classes-btn" id="solo">
              Solo
            </button>
            <button href="#" className="classes-btn" id="stretching">
              Stretching
            </button>
          </div>
          <div className="classes-content">
            <div className="clases-text">
              <h3 id="featuresH2">Why are your Yoga?</h3>
              <p id="featuresP">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga
                quod perspiciatis vero mollitia temporibus placeat enim!
                Veritatis doloremque obcaecati placeat asperiores soluta, vel
                voluptatem laudantium ullam possimus. Quisquam, eum aliquid?
              </p>
              <h3>When comes Yoga your time?</h3>
              <span>Saturday-Sunday: 8:00am - 10:00am</span>
              <span>Monday-Tuesday: 10:00am - 12:00pm</span>
              <span>Wednesday-Friday: 3:00pm - 6:00pm</span>
            </div>
            <div className="clases-img">
              <img id="featuresImg" src={clasesYoga} alt="" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Clases;
